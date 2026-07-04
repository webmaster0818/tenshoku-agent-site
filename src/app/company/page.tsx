import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "企業別 転職ガイド一覧｜有報準拠の年収・難易度データベース【2026年】",
  description:
    "人気企業への転職難易度・中途採用・年収を企業ごとに解説する一覧ページ。上場企業は有価証券報告書の平均年収（決算期明記）に準拠し、外資は参考値と明記。任天堂・ソニー・トヨタ・カプコン・ダイフクなど13社を掲載中。",
  alternates: { canonical: "/company/" },
};

// 年収は各企業ページ掲載の検証済み値（有報=決算期付き/外資=参考値）。ページ側と必ず一致させること。
const companies = [
  { slug: "nintendo", name: "任天堂", salary: "約988万円（有報）", tag: "ゲーム" },
  { slug: "sony", name: "ソニーグループ", salary: "約1,085万円", tag: "エレクトロニクス" },
  { slug: "toyota", name: "トヨタ自動車", salary: "約895万円", tag: "自動車" },
  { slug: "capcom", name: "カプコン", salary: "約985万円（有報）", tag: "ゲーム" },
  { slug: "cyberagent", name: "サイバーエージェント", salary: "約800万円", tag: "IT・広告" },
  { slug: "mercari", name: "メルカリ", salary: "約970万円", tag: "IT" },
  { slug: "hoya", name: "HOYA", salary: "約970万円（有報）", tag: "精密機器" },
  { slug: "daifuku", name: "ダイフク", salary: "約917万円（有報）", tag: "マテハン" },
  { slug: "nidec", name: "ニデック", salary: "約760万円（有報）", tag: "電子部品" },
  { slug: "muji", name: "良品計画（無印良品）", salary: "約670万円（有報）", tag: "小売" },
  { slug: "amazon", name: "Amazon Japan", salary: "参考値（外資）", tag: "外資IT" },
  { slug: "google", name: "Google Japan", salary: "参考値（外資）", tag: "外資IT" },
  { slug: "accenture", name: "アクセンチュア", salary: "参考値（外資）", tag: "コンサル" },
];

export default function CompanyIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別 転職ガイド" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            企業別 転職ガイド一覧
          </h1>
          <p className="text-text-secondary leading-relaxed text-sm">
            「◯◯社への転職は難しい？」に、公開一次資料で答える企業データベースです。上場企業の平均年収は<strong>有価証券報告書の記載値（決算期明記・全社平均）</strong>に準拠し、日本の有報が存在しない外資は参考値であることを明記しています。転職難易度・中途採用の傾向・選考対策は各企業ページをご覧ください。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={`/company/${c.slug}/`}
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-navy hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-bold text-navy">{c.name}</h2>
                <span className="text-xs text-text-secondary bg-warm-gray rounded-full px-2 py-0.5">{c.tag}</span>
              </div>
              <p className="text-sm text-text-secondary">平均年収: <span className="font-semibold">{c.salary}</span></p>
              <p className="text-xs text-text-secondary mt-1">転職難易度・中途採用・選考対策を見る →</p>
            </Link>
          ))}
        </div>

        <p className="text-xs text-text-secondary mb-10">
          ※「有報」= 有価証券報告書記載の平均年間給与（全社員平均・職種別ではありません）。決算期・注記は各ページに記載しています。外資系企業の年収は公開情報にもとづく参考値です。
        </p>

        <section className="bg-warm-gray rounded-2xl p-6">
          <h2 className="font-bold text-navy mb-3">転職活動をあわせて進めるなら</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/levtech/" className="text-navy underline">レバテックキャリアの評判（IT・エンジニア特化）</Link></li>
            <li><Link href="/review/recruit-agent/" className="text-navy underline">リクルートエージェントの評判（求人数最大級）</Link></li>
            <li><Link href="/review/jac/" className="text-navy underline">JACリクルートメントの評判（ハイクラス）</Link></li>
            <li><Link href="/knowledge/resume/" className="text-navy underline">職務経歴書の書き方・職務要約の例文</Link></li>
          </ul>
        </section>
      </article>
    </>
  );
}
