import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { REVIEW_COUNT, REVIEW_GROUPS as GROUPS } from "@/data/review-list";

export const metadata: Metadata = {
  title: `転職エージェント・転職サービス解説一覧【2026年】総合型から業界特化まで${REVIEW_COUNT}サービス`,
  description:
    `転職エージェント比較ラボが公式の一次情報にもとづいて解説している転職エージェント・転職サービスの一覧です。総合型・IT/エンジニア・クリエイター・20代/未経験・女性/ライフステージ・医療/専門職・業界特化・フリーランス・退職支援まで${REVIEW_COUNT}サービスを掲載しています。`,
  alternates: { canonical: "/review/" },
};

export default function ReviewIndex() {
  return (
    <>
      <Breadcrumb items={[{ name: "転職サービス解説一覧" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェント・転職サービス解説一覧
          </h1>
          <p className="text-text-secondary leading-relaxed">
            当サイトが公式サイトの一次情報をもとに解説している転職エージェント・転職サービス{REVIEW_COUNT}件の一覧です。
            総合型から業界特化・フリーランス・退職サポートまで、各サービスの特徴・運営会社・向いている人を確認できます。
            口コミや数値の創作は行わず、公式公表情報と確認日を明記する方針で運営しています。
          </p>
        </div>

        {GROUPS.map((g) => (
          <section key={g.title} className="mb-10">
            <h2>{g.title}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {g.items.map((item) => (
                <Link key={item.href} href={item.href} className="card-hover p-4 block no-underline">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-navy text-base">{item.name}</h3>
                    <span className="text-xs text-teal bg-teal/10 rounded-full px-2 py-0.5 whitespace-nowrap">{item.tag}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              企業別転職ガイド
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
