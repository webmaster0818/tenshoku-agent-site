'use client';

import { useEffect } from 'react';

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
