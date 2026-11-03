'use client';

import { useEffect, useLayoutEffect } from 'react';

/**
 * スクロールに合わせた動き（2026-10-07）
 *
 * 安全側の作りにしている。理由は、同日に別サイトで
 * 「IntersectionObserver が要素を拾い損ねて本文が透明のまま残る」事故を起こしたため。
 *
 *  - DOMは増やさない。既存要素に data 属性を付けるだけ
 *  - 「非表示」の初期状態はJSが付ける → JSが動かない環境では最初から全部見えている
 *  - **scrollイベントで「画面下端より上に来たものは無条件に表示」する掃き出しを必ず回す**
 *    （監視の取りこぼしに依存しない。これが無いと速いスクロールで消える）
 *  - 1.2秒の保険タイマーも置く
 *  - prefers-reduced-motion: reduce なら何もしない
 *  - transform と opacity しか触らないのでレイアウトは動かない
 */
export default function ScrollMotion() {
  // TOP以外のページの動き（2026-11-03）。layout.tsx の script が <html> に data-tl / data-tl-page を付けるが、
  // ハイドレーション不一致（React #418）でクライアント再描画が起きると属性が消える。
  // TopMotion.tsx と同じく、消えていた場合だけ描画前に戻し、経過時間ぶん --tl-shift でアニメを先送りする。
  useLayoutEffect(() => {
    const w = window as unknown as { __tlT0?: number; __tlPage?: number };
    if (!w.__tlPage || typeof w.__tlT0 !== 'number') return;
    const d = document.documentElement;
    if (d.hasAttribute('data-tl-page')) return;
    d.setAttribute('data-tl', '1');
    d.setAttribute('data-tl-page', '1');
    const elapsed = Math.max(0, (performance.now() - w.__tlT0) / 1000);
    d.style.setProperty('--tl-shift', `${elapsed.toFixed(3)}s`);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const main = document.querySelector('main');
    if (!main) return;

    // 1要素が両方の属性を持つことがある（.grid の直下に <section> がある等）。
    // 片方だけ 'in' にすると、もう片方の opacity:0 が残って永久に透明になる。
    const reveal = (el: Element) => {
      const h = el as HTMLElement;
      if (h.hasAttribute('data-rv-item')) h.setAttribute('data-rv-item', 'in');
      if (h.hasAttribute('data-rv')) h.setAttribute('data-rv', 'in');
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          reveal(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0 }
    );

    // 出現させる対象を集める。
    // ブロック単位（見出し・段落のかたまり）と、並んでいるカード・表の行。
    const blocks: Element[] = [];
    main.querySelectorAll('h2, h3').forEach((el) => blocks.push(el));
    main.querySelectorAll('.card, .card-hover, table, pre, details').forEach((el) => {
      // 入れ子の二重指定を避ける
      if (!el.closest('[data-rv-item]')) blocks.push(el);
    });
    // 2画面目以降の画像（公式サイトのスクリーンショット等）も出す（2026-11-03）。
    // 1画面目にある画像は対象にしない（読み込み直後に一度見えてから消えるちらつきになるため）。
    main.querySelectorAll('img').forEach((el) => {
      if (el.closest('.card, .card-hover, table, details, [data-rv-item]')) return;
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      blocks.push(el);
    });

    // 並んでいるものは少しずつ遅らせる
    const groups: Element[][] = [];
    main.querySelectorAll('.grid').forEach((g) => {
      const kids = Array.from(g.children).filter((c) => (c as HTMLElement).offsetHeight > 24);
      if (kids.length >= 2 && kids.length <= 24) groups.push(kids);
    });
    main.querySelectorAll('tbody').forEach((tb) => {
      const rows = Array.from(tb.querySelectorAll('tr'));
      if (rows.length >= 2 && rows.length <= 24) groups.push(rows);
    });

    const staggered = new Set<Element>();
    for (const g of groups) {
      g.forEach((el, i) => {
        const h = el as HTMLElement;
        if (h.hasAttribute('data-rv') || h.hasAttribute('data-rv-item')) return;
        h.setAttribute('data-rv-item', '');
        h.style.setProperty('--rv-delay', `${Math.min(i, 8) * 60}ms`);
        staggered.add(h);
        io.observe(h);
      });
    }
    for (const el of blocks) {
      if (staggered.has(el)) continue;
      if (el.hasAttribute('data-rv') || el.hasAttribute('data-rv-item')) continue;
      // 既に時間差グループの一員なら触らない
      if ((el as HTMLElement).closest('[data-rv-item]')) continue;
      el.setAttribute('data-rv', '');
      io.observe(el);
    }

    // 監視の取りこぼしに依存しない掃き出し。これが安全装置の本体。
    let queued = false;
    const sweep = () => {
      queued = false;
      const left = document.querySelectorAll('[data-rv=""],[data-rv-item=""]');
      if (!left.length) return;
      const vh = window.innerHeight;
      left.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) reveal(el);
      });
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const failsafe = window.setTimeout(sweep, 1200);
    sweep();

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
