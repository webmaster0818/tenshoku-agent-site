import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

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
          <p className="text-text-secondary leading-relaxed">
            転職エージェントを最大限活用するための実践ガイドです。登録前の選び方から、面談・書類・メールの実務、
            うまくいかないときの対処法まで、転職活動のステップ順に整理しています。
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
