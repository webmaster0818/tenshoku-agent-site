"use client";

/*
 * 全記事共通の自動目次。マウント時にmain内のh2を走査してid付与し、
 * 最初のh2の直前に目次ボックスを挿入する(静的エクスポート対応・ページ側の改修不要)。
 * h2が3本未満のページ・トップ/規約系は対象外。
 */
import { useEffect } from "react";

const EXCLUDE_PATHS = ["/", "/terms/", "/privacy/", "/content-policy/"];

export default function AutoToc() {
  useEffect(() => {
    try {
      const path = window.location.pathname;
      if (EXCLUDE_PATHS.includes(path)) return;
      if (document.getElementById("auto-toc")) return;
      const main = document.querySelector("main");
      if (!main) return;
      const heads = Array.from(main.querySelectorAll("h2")).filter((h) => {
        const t = (h.textContent || "").trim();
        return t.length > 0 && t.length < 60;
      });
      if (heads.length < 3) return;

      heads.forEach((h, i) => {
        if (!h.id) h.id = `toc-${i + 1}`;
      });

      const box = document.createElement("nav");
      box.id = "auto-toc";
      box.setAttribute("aria-label", "目次");
      box.style.cssText =
        "margin:1.5rem 0 2rem;border:1px solid #d1e3e0;border-radius:14px;background:#f4f9f8;padding:1rem 1.25rem;font-size:0.9rem;";
      const title = document.createElement("p");
      title.textContent = "目次";
      title.style.cssText = "font-weight:700;color:#0f3d3e;margin:0 0 .5rem;letter-spacing:.08em;";
      box.appendChild(title);
      const ol = document.createElement("ol");
      ol.style.cssText = "margin:0;padding-left:1.25rem;display:flex;flex-direction:column;gap:.3rem;";
      heads.forEach((h) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${h.id}`;
        a.textContent = (h.textContent || "").trim();
        a.style.cssText = "color:#0d9488;text-decoration:underline;text-underline-offset:2px;";
        li.appendChild(a);
        ol.appendChild(li);
      });
      box.appendChild(ol);
      heads[0].parentNode?.insertBefore(box, heads[0]);
    } catch {
      /* 目次生成に失敗してもページ表示には影響させない */
    }
  }, []);

  return null;
}
