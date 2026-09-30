import Image from "next/image";
import { AGENTS, SS_FETCHED_AT } from "@/data/agents";

// レビューページのファーストビュー(施主指示 2026-09-30)。
// ・提携があるエージェント(affiliate) → バナーリンク(rel="sponsored")
// ・提携がないエージェント → 公式サイトのスクリーンショット + 公式リンク(rel="nofollow")
// スクショは実際に公式サイトを開いて取得した実画像で、取得日を明示する。
// レジストリに無い(公式URLを実査で確定できていない)slugでは何も出さない。推測のURLは貼らない。

export default function AgentHero({ slug }: { slug: string }) {
  const a = AGENTS[slug];
  if (!a) return null;
  const isAff = Boolean(a.affiliate);
  const href = a.affiliate || a.official;
  const rel = isAff ? "sponsored nofollow noopener noreferrer" : "nofollow noopener noreferrer";

  return (
    <div className="mb-8">
      <a href={href} target="_blank" rel={rel} className="block group">
        <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src={a.ss}
            alt={`${a.name}の公式サイト`}
            width={1280}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </a>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-text-secondary">
          {a.name}の公式サイト（当サイトが{SS_FETCHED_AT}に取得した実際の画面）
          {isAff && <span className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600">PR</span>}
        </p>
        <a
          href={href}
          target="_blank"
          rel={rel}
          className="inline-flex items-center rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
        >
          {a.name}の公式サイトを見る
        </a>
      </div>
    </div>
  );
}
