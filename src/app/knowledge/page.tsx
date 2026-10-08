import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { DODA, MHLW, STATS_CONFIRMED_AT } from "@/data/stats";

export const metadata: Metadata = {
  title: "転職エージェント活用ガイド一覧｜使い方・面談・メール例文・書類対策【2026年】",
  description:
    "転職エージェントの使い方・選び方から、面談準備、お礼メール例文、職務経歴書の書き方、複数利用のコツまで。転職活動の各ステップで役立つ実践ガイドの一覧ページです。",
};

const guides = [
  { href: "/knowledge/how-to-choose/", title: "転職エージェントの選び方", desc: "失敗しない7つのポイント。得意分野・求人数・サポートの見極め方" },
  { href: "/knowledge/flow/", title: "使い方・流れ 8ステップ", desc: "登録から内定までの全体像と各ステップのコツ" },
  { href: "/knowledge/when-to-start/", title: "いつ登録すべき？", desc: "最適な登録タイミングと平均的な活動期間" },
  { href: "/knowledge/interview-prep/", title: "エージェントとの面談対策", desc: "準備・服装・当日の流れ。初回面談で損しないために" },
  { href: "/knowledge/email-template/", title: "お礼メール例文13選", desc: "面談後・内定後・辞退・返信までコピペで使える例文集" },
  { href: "/knowledge/resume/", title: "職務経歴書の書き方", desc: "職務要約の例文・テンプレートと書類通過のコツ" },
  { href: "/knowledge/multiple/", title: "複数利用・掛け持ちのコツ", desc: "メリット・デメリットとおすすめの組み合わせ" },
  { href: "/knowledge/useless/", title: "「使えない」と感じたら", desc: "担当変更・切り替えなどの対処法と上手な活用術" },
  { href: "/knowledge/agent-briefing/", title: "エージェントへの伝え方", desc: "仕事内容の具体化と条件の優先順位。紹介求人の精度が変わる3点" },
  { href: "/knowledge/job-history/", title: "転職回数と職歴の見られ方", desc: "何回から気にされるか。コンサルタント243人調査と採用側の本音" },
];

const compares = [
  { href: "/compare/agent-vs-site/", title: "エージェント vs 転職サイト", desc: "12項目で違いを比較。向いているのはどっち？" },
  { href: "/compare/recruit-vs-doda/", title: "リクルート vs doda", desc: "2大エージェントを10項目で比較" },
  { href: "/compare/mynavi-vs-recruit/", title: "マイナビ vs リクルート", desc: "20代の定番2社を徹底比較" },
];

export default function KnowledgeHub() {
  return (
    <>
      <Breadcrumb items={[{ name: "活用ガイド一覧" }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェント活用ガイド一覧
          </h1>

          <div className="rounded-xl overflow-hidden my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/column-img/ts-knowledge.jpg" alt="転職の情報収集をイメージした静物" className="w-full h-auto" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            転職活動は、だいたい3ヶ月で終わります。
            dodaの調査では活動開始から内定までの平均が約{DODA.avgMonths}ヶ月、
            厚生労働省の実態調査でも転職した人の{MHLW.under6mPct}%が6ヶ月未満で決めています。
            問題は、その3ヶ月の<strong>どこでつまずくかが決まっている</strong>ことです。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `約${DODA.avgMonths}ヶ月`, l: "活動開始から内定まで" },
              { v: `${DODA.avgApplications}社`, l: "転職成功者の平均応募社数" },
              { v: `約${DODA.docPassPct}%`, l: "書類選考の通過率" },
              { v: `${DODA.appsPerOffer}社`, l: "内定1社に必要な応募数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            書類が3割しか通らず、1社の内定に{DODA.appsPerOffer}社前後の応募が要るとすると、
            時間を食うのは面接ではなく<strong>応募を積み上げるところ</strong>です。
            そして応募が積み上がらない原因は、たいてい
            <strong>①希望を言語化できていない ②書類を使い回している ③求人の母数が足りない</strong>の3つに絞られます。
            以下のガイドは、この3つを順番につぶすために並べています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：{DODA.source}／{MHLW.source}（いずれも{STATS_CONFIRMED_AT}に当サイトで確認）。
          </p>
        </div>

        <h2 className="section-title">活用ガイド</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-5 block">
              <h3 className="font-bold text-navy mb-1">{g.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="section-title">サービス比較記事</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {compares.map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-5 block">
              <h3 className="font-bold text-navy mb-1">{g.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-teal/5 rounded-2xl border border-teal/15 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-extrabold text-navy text-lg mb-1">よくある質問</h2>
            <p className="text-sm text-text-secondary">費用・複数登録・断られた場合など、転職エージェントの疑問に回答しています。</p>
          </div>
          <Link href="/faq/" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">FAQを見る</Link>
        </div>
      </div>
    </>
  );
}
