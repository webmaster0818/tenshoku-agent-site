import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { COMPANIES as companies, COMPANY_COUNT } from "@/data/company-list";

export const metadata: Metadata = {
  title: "企業別 転職ガイド一覧｜有価証券報告書準拠の年収・難易度データベース【2026年】",
  description:
    `人気企業への転職難易度・中途採用・年収を企業ごとに解説する一覧ページです。上場企業は有価証券報告書の平均年収（決算期明記）に準拠し、外資系企業は参考値であることを明記しています。任天堂・ソニー・トヨタ・オービック・タカラトミーなど${COMPANY_COUNT}社を掲載しています。`,
  alternates: { canonical: "/company/" },
};


export default function CompanyIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "企業別 転職ガイド" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            企業別 転職ガイド一覧
          </h1>
          <p className="text-text-secondary leading-relaxed text-sm">
            「◯◯社への転職は難しいのか」という疑問に、公開一次資料にもとづいてお答えする企業データベースです。上場企業の平均年収は<strong>有価証券報告書の記載値（決算期明記）</strong>に準拠し、日本の有価証券報告書が存在しない外資系企業は参考値であることを明記しています。転職難易度・中途採用の傾向・選考対策は各企業ページをご覧ください。
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
              {c.scope && (
                <p className="text-xs text-text-secondary mt-0.5">※算定範囲: {c.scope}</p>
              )}
              <p className="text-xs text-text-secondary mt-1">転職難易度・中途採用・選考対策を見る →</p>
            </Link>
          ))}
        </div>

        <p className="text-xs text-text-secondary mb-10">
          ※表中の「有価証券報告書」は、各社の有価証券報告書に記載された提出会社の「平均年間給与」を示します。職種別の数値ではありません。算定範囲は会社ごとに異なり、一部の会社は管理職・臨時従業員・有期雇用従業員・出向者などを除いた値、または正社員のみの値を記載しています。該当する会社には「※算定範囲」を付記しています。決算期・注記の詳細は各企業ページに記載しています。外資系企業の年収は公開情報にもとづく参考値です。
        </p>

        <section className="bg-warm-gray rounded-2xl p-6">
          <h2 className="font-bold text-navy mb-3">転職活動に役立つ関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/company/game-salary/" className="text-navy underline">ゲーム会社の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/maker-salary/" className="text-navy underline">メーカーの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/it-consultant-salary/" className="text-navy underline">ITコンサル・SIerの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/kensetsu-salary/" className="text-navy underline">建設ゼネコンの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/denryoku-gas-salary/" className="text-navy underline">電力・ガスの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/kaiun-salary/" className="text-navy underline">海運会社の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/kuuun-salary/" className="text-navy underline">航空会社(空運)の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/butsuryu-salary/" className="text-navy underline">陸運・物流の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/jinzai-salary/" className="text-navy underline">人材業界の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/fudosan-salary/" className="text-navy underline">不動産デベロッパーの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/keshohin-salary/" className="text-navy underline">化粧品・日用品メーカーの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/iryokiki-salary/" className="text-navy underline">医療機器メーカーの年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/saas-salary/" className="text-navy underline">SaaS企業の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/keibi-salary/" className="text-navy underline">警備会社の年収ランキング【有価証券報告書準拠】</Link></li>
            <li><Link href="/company/drugstore-salary/" className="text-navy underline">ドラッグストアの売上高ランキング【有価証券報告書準拠】上場11社の平均年収つき</Link></li>
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
