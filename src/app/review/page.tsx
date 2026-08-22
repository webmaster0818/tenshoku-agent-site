import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェント・転職サービス解説一覧【2026年】総合型から業界特化まで50サービス",
  description:
    "転職エージェント比較ラボが公式一次情報ベースで解説する転職エージェント・転職サービスの一覧。総合型・IT/エンジニア・クリエイター・20代/未経験・女性/ライフステージ・医療/専門職・業界特化・フリーランス・退職支援まで50サービスを網羅しています。",
  alternates: { canonical: "/review/" },
};

const GROUPS: { title: string; items: { href: string; name: string; tag: string }[] }[] = [
  {
    title: "総合型・大手",
    items: [
      { href: "/review/recruit-agent/", name: "リクルートエージェント", tag: "求人数最大級" },
      { href: "/review/doda/", name: "doda", tag: "サイト一体型" },
      { href: "/review/mynavi/", name: "マイナビエージェント", tag: "20-30代" },
      { href: "/review/type-agent/", name: "type転職エージェント", tag: "首都圏・老舗" },
      { href: "/review/lhh/", name: "LHH転職エージェント", tag: "アデコ・外資系" },
      { href: "/review/bizreach/", name: "ビズリーチ", tag: "スカウト型" },
      { href: "/review/jac/", name: "JACリクルートメント", tag: "ハイクラス" },
      { href: "/review/assign/", name: "ASSIGN(アサイン)", tag: "若手ハイエンド" },
      { href: "/review/libz/", name: "LIBZ(リブズ)", tag: "逆求人型" },
    ],
  },
  {
    title: "IT・エンジニア",
    items: [
      { href: "/review/unison-career/", name: "ユニゾンキャリア", tag: "IT・Web特化" },
      { href: "/review/levtech/", name: "レバテックキャリア", tag: "IT特化大手" },
      { href: "/review/techclips/", name: "TechClipsエージェント", tag: "SIer/SES脱出" },
      { href: "/review/pit-career/", name: "PIT(ピット)", tag: "若手エンジニア" },
      { href: "/review/pro-jin/", name: "@PRO人", tag: "IT厳選提案型" },
      { href: "/review/sap-tenshoku/", name: "SAPテンショク", tag: "SAP特化" },
      { href: "/review/security-pro/", name: "セキュリティプロ・フリーランス", tag: "セキュリティ案件" },
      { href: "/review/eba-freelance/", name: "EBAフリーランス", tag: "高単価案件" },
    ],
  },
  {
    title: "クリエイター・ゲーム",
    items: [
      { href: "/review/mynavi-creator/", name: "マイナビクリエイター", tag: "Web・ゲーム" },
      { href: "/review/highfive/", name: "HIGH-FIVE", tag: "クリエイター専門" },
      { href: "/review/famicari/", name: "ファミキャリ!", tag: "ゲーム業界" },
      { href: "/review/hiraku-agent/", name: "Hiraku agent", tag: "ゲーム経験者" },
      { href: "/review/digireka/", name: "デジレカ", tag: "マーケ職特化" },
    ],
  },
  {
    title: "20代・未経験・第二新卒",
    items: [
      { href: "/review/mynavi-job20s/", name: "マイナビジョブ20's", tag: "20代専門" },
      { href: "/review/uzuz/", name: "UZUZ(第二の就活)", tag: "既卒・フリーター" },
      { href: "/review/daini-agent-neo/", name: "第二新卒エージェントneo", tag: "学歴不問" },
      { href: "/review/rework/", name: "Re:WORKエージェント", tag: "未経験専門" },
      { href: "/review/caricon/", name: "キャリコン", tag: "エージェント紹介" },
      { href: "/review/deaeru-agent/", name: "出会えるエージェント診断", tag: "診断型" },
      { href: "/review/career-ticket-tenshoku/", name: "キャリアチケット転職", tag: "20-30代・成長軸" },
    ],
  },
  {
    title: "女性・ライフステージ",
    items: [
      { href: "/review/type-woman/", name: "type女性の転職エージェント", tag: "女性キャリア" },
      { href: "/review/realme-career/", name: "リアルミーキャリア", tag: "時短正社員" },
      { href: "/review/tokihana-career/", name: "トキハナキャリア", tag: "結婚・両立" },
      { href: "/review/newma/", name: "NewMA(ニューマ)", tag: "コンサル・M&A" },
    ],
  },
  {
    title: "医療・保育・専門職",
    items: [
      { href: "/review/oshigoto-lab/", name: "お仕事ラボ", tag: "薬剤師" },
      { href: "/review/nishima-pharma/", name: "にしまファーマ", tag: "医療業界" },
      { href: "/review/hoiku-musubi/", name: "ほいくのむすび", tag: "保育士" },
      { href: "/review/shika-agent/", name: "歯科医師求人ナビ", tag: "歯科医師" },
      { href: "/review/hupro/", name: "ヒュープロ", tag: "士業・管理部門" },
      { href: "/review/keiri-jobs/", name: "経理Jobs", tag: "経理特化" },
      { href: "/review/randstad-challenged/", name: "ランスタッド(障がい者転職)", tag: "障がい者雇用" },
      { href: "/review/jobsoelu/", name: "ジョブソエル", tag: "医療・介護求人" },
      { href: "/review/doctor-net/", name: "ドクターネットエージェント", tag: "放射線科" },
    ],
  },
  {
    title: "業界・職種特化",
    items: [
      { href: "/review/inshoku-agent/", name: "飲食店ドットコムエージェント", tag: "飲食業界" },
      { href: "/review/hape-agent/", name: "hape Agent", tag: "営業職" },
      { href: "/review/saasfield/", name: "SaaSfield", tag: "SaaS業界" },
      { href: "/review/prime-career/", name: "プライムキャリア", tag: "不動産・設備" },
      { href: "/review/rsg-fudosan/", name: "RSG", tag: "建設・不動産" },
      { href: "/review/agent-navi/", name: "転職AGENT Navi", tag: "マッチング" },
      { href: "/review/r4career/", name: "R4CAREER", tag: "名古屋・東海" },
      { href: "/review/oishiru-career/", name: "オイシルキャリア", tag: "スーパー・生鮮" },
      { href: "/review/zeicari/", name: "ゼイキャリ", tag: "税理士ハイクラス" },
      { href: "/review/susucari/", name: "サスキャリ", tag: "ESG・サステナ" },
      { href: "/review/security-work/", name: "セキュリティーワーク", tag: "警備員" },
      { href: "/review/realestate-works/", name: "リアルエステートWORKS", tag: "不動産" },
    ],
  },
  {
    title: "キャリア支援・退職サポート",
    items: [
      { href: "/review/kujilabo/", name: "クジラボ", tag: "教員・公務員" },
      { href: "/review/yamedoki/", name: "退職代行ヤメドキ", tag: "後払い対応" },
      { href: "/review/watashi-next/", name: "わたしNEXT", tag: "女性退職代行" },
      { href: "/review/otoko-taishoku/", name: "男の退職代行", tag: "男性退職代行" },
    ],
  },
];

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
            当サイトが公式サイトの一次情報をもとに解説している転職エージェント・転職サービスの一覧です。
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
