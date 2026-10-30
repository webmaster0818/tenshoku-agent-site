'use client';

import { useEffect, useLayoutEffect } from 'react';

/**
 * TOPページだけの動き（2026-10-21 施主指示「TOPを洗練された印象に」）
 *
 * - 数字のカウントアップ: [data-countup] の数字部分を、画面に入ったときに 0 → 実数へ。
 *   初期HTMLには実数が入っている（JSが動かない環境・クローラはそのまま実数を読む）。
 *   数字を 0 にするのは「画面に入った瞬間」だけなので、透明・空欄のまま残ることはない。
 * - 見出し下の線: ScrollMotion が h2 に data-rv="in" を付けたときに CSS で伸ばす（ここでは何もしない）。
 * - prefers-reduced-motion: reduce なら何もしない。
 */
export default function TopMotion() {
  // ryden 風の動き（2026-10-30 試作）の継続処理。
  // page.tsx のインラインscriptが <html> に data-tl / data-tl-intro を付けるが、
  // 現状このサイトはハイドレーション不一致（React #418・main でも発生）でクライアント再描画が起き、
  // <html> の属性が消えて要素も作り直される。消えていた場合だけ属性を戻し、
  // 経過時間ぶん --tl-shift でアニメーションを先送りして「途中から再開」させる（最初からやり直さない）。
  // 描画前（useLayoutEffect）に戻すので、一瞬だけ静止表示になるちらつきも出ない。
  useLayoutEffect(() => {
    const w = window as unknown as { __tlT0?: number; __tlIntro?: number };
    if (typeof w.__tlT0 !== 'number') return; // reduce の環境・script 未実行
    const d = document.documentElement;
    if (d.hasAttribute('data-tl')) return; // 正常にハイドレーションできた（要素は作り直されていない）
    d.setAttribute('data-tl', '1');
    if (w.__tlIntro) d.setAttribute('data-tl-intro', '1');
    const elapsed = Math.max(0, (performance.now() - w.__tlT0) / 1000);
    d.style.setProperty('--tl-shift', `${elapsed.toFixed(3)}s`);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-countup]'));
    if (!els.length) return;

    const run = (el: HTMLElement) => {
      if (el.dataset.countupDone) return;
      el.dataset.countupDone = '1';
      const m = (el.textContent || '').match(/^([^\d]*)([\d,]+)(.*)$/);
      if (!m) return;
      const [, pre, numStr, post] = m;
      const target = parseInt(numStr.replace(/,/g, ''), 10);
      if (!Number.isFinite(target) || target <= 0) return;
      const dur = 1100;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${pre}${Math.round(target * eased).toLocaleString()}${post}`;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = `${pre}${numStr}${post}`; // 最後は必ず元の表記に戻す
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
