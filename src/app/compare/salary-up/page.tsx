import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "転職エージェントの年収ランキング｜各社公表の年収アップ率・アップ額を定義つきで比較【2026年10月確認】";
const DESC =
  "転職エージェント各社が公表している年収アップ率・年収アップ額を、公式サイトで2026年10月29日に確認し、分母・対象期間とあわせて一覧にしました。定義が社ごとに異なるため順位付けは行わず、数値の読み方を解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/salary-up/" },
  title: TITLE,
  description: DESC,
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description: "転職エージェント各社の年収アップ率・年収アップ額の公表値を、定義・対象期間つきで比較しています。",
  },
};

const CHECKED = "2026年10月29日";

type Row = {
  name: string;
  slug: string;
  value: string;
  def: string;
  period: string;
  src: string;
  srcLabel: string;
};

// すべて 2026-10-29 に各社公式サイトで表記と脚注を確認した値。脚注の文言は要約せず意味を変えない範囲で記載する。
const rows: Row[] = [
  {
    name: "doda（dodaエージェントサービス）",
    slug: "doda",
    value: "年収が上がった人 64.1%／上がった人の平均アップ額 109万4,383円",
    def: "dodaエージェントサービスを利用して転職した人全体に占める、年収が上がった人の割合。アップ額は年収が上がった人だけの平均",
    period: "2025年10月〜2026年3月に転職した人（記事公開 2026年8月24日）",
    src: "https://doda.jp/guide/manual/1/004.html",
    srcLabel: "doda 転職ガイド",
  },
  {
    name: "doda（IT・エンジニア）",
    slug: "doda",
    value: "年収アップ率 71%／平均年収アップ額 88万円",
    def: "内定獲得者のうち、獲得時年収が応募時からアップした人の割合と、アップした年収の差分の平均。IT関連を第一希望としてIT関連に内定した人が対象",
    period: "2024年11月〜2025年10月の実績",
    src: "https://doda.jp/engineer/",
    srcLabel: "doda エンジニア向けページ",
  },
  {
    name: "リクルートエージェント",
    slug: "recruit-agent",
    value: "前職と比べ賃金が1割以上増加した転職決定者の割合 39.3%",
    def: "年収が上がった人全体ではなく、1割以上増えた人の割合。公式の転職ガイド記事が「転職時の賃金変動状況」データとして引用している値",
    period: "2025年4〜6月期",
    src: "https://www.r-agent.com/guide/?p=4806",
    srcLabel: "リクルートエージェント 転職成功ガイド",
  },
  {
    name: "レバテックキャリア",
    slug: "levtech",
    value: "3人に2人が年収70万円UP",
    def: "内定承諾者のうち、応募時年収と転職後年収の差分が70万円以上の割合",
    period: "2023年1月〜2024年3月の実績",
    src: "https://career.levtech.jp/",
    srcLabel: "レバテックキャリア 公式トップ",
  },
  {
    name: "MyVision（マイビジョン）",
    slug: "myvision",
    value: "平均年収UP額 156万円",
    def: "同社経由で年収アップを実現した方の平均値。年収が上がらなかった方は含まれません",
    period: "2026年1月に内定を承諾した方",
    src: "https://my-vision.co.jp/",
    srcLabel: "MyVision 公式トップ",
  },
  {
    name: "type転職エージェント",
    slug: "type-agent",
    value: "約5人に4人が年収アップを実現",
    def: "年収UP希望者の年収UP率（自社調べ）。年収アップを希望しなかった方は分母に含まれません",
    period: "2021年10月1日〜2022年9月30日",
    src: "https://type.career-agent.jp/",
    srcLabel: "type転職エージェント 公式トップ",
  },
  {
    name: "type女性の転職エージェント",
    slug: "type-woman",
    value: "約79%が年収アップを実現",
    def: "年収UP希望者の年収UP率（自社調べ）",
    period: "2021年10月1日〜2025年3月31日",
    src: "https://type.woman-agent.jp/",
    srcLabel: "type女性の転職エージェント 公式トップ",
  },
  {
    name: "RSG（建設・不動産）",
    slug: "rsg-fudosan",
    value: "収入UP率 99.4%／平均1.2倍〜4.7倍の年収UP",
    def: "脚注がなく、分母（登録者か成約者か）と算出方法は公式ページに記載がありません",
    period: "記載なし",
    src: "https://rsg-c.jp/realestateag/lp/",
    srcLabel: "RSG 公式ページ",
  },
];

const noRate = [
  {
    name: "JACリクルートメント",
    slug: "jac",
    text: "サービス全体の年収アップ率・年収アップ額は、公式トップと同社サイト内の検索で確認できませんでした。公式トップには「転職決定時の平均想定年収」858.9万円（課長以上 1,033.6万円、部長以上 1,246.7万円、本部長以上 1,466.9万円。2025年9月〜2026年8月に同社を通じて転職が決定した方の実績）が掲載されています。転職後の年収水準であり、上がった幅を示す値ではありません。",
    src: "https://www.jac-recruitment.jp/",
  },
  {
    name: "ビズリーチ",
    slug: "bizreach",
    text: "年収アップ率・年収アップ額は、公式トップと同社サイト内の検索で確認できませんでした。公式トップには「年収1,000万円以上の求人が5割以上」（2026年1月末時点）が掲載されています。求人側の年収水準であり、利用者の年収の変化ではありません。",
    src: "https://www.bizreach.jp/",
  },
  {
    name: "マイナビエージェント",
    slug: "mynavi",
    text: "利用者の年収アップ率・年収アップ額は、公式トップと同社サイト内の検索で確認できませんでした。公式トップに掲載されている実績値は、入社後の定着率と入社決定までの期間に関するものです。",
    src: "https://mynavi-agent.jp/",
  },
];

const faqData = [
  {
    q: "年収アップ率が最も高い転職エージェントはどこですか？",
    a: "各社の公表値は分母と対象期間が異なるため、数値の大小で順位を付けることはできません。たとえば「年収UP希望者のうち上がった人の割合」と「転職者全体のうち上がった人の割合」では、同じ実績でも前者のほうが高く出ます。当サイトでは順位付けを行わず、定義とあわせて掲載しています。",
  },
  {
    q: "平均年収アップ額は、利用者全員の平均ですか？",
    a: "当サイトが確認した範囲では、doda（109万4,383円・88万円）、MyVision（156万円）はいずれも年収が上がった人を対象とした平均です。年収が変わらなかった人や下がった人は含まれていません。",
  },
  {
    q: "大手エージェントで年収アップ率を公表しているのはどこですか？",
    a: "2026年10月29日時点で、dodaはサービス全体の値（64.1%）とIT・エンジニア向けの値（71%）を公式サイトに掲載しています。リクルートエージェントは公式の転職ガイド記事で「賃金が1割以上増加した転職決定者の割合」39.3%（2025年4〜6月期）を引用しています。JACリクルートメント・ビズリーチ・マイナビエージェントは、サービス全体の年収アップ率を公式サイトで確認できませんでした。",
  },
  {
    q: "企業ごとの平均年収のランキングはありますか？",
    a: "当サイトでは、有価証券報告書にもとづく企業別の平均年収を15業界のランキングにまとめています。転職先の候補企業の年収水準は、トップページの企業年収データベースからご確認ください。",
  },
  {
    q: "公表値をどのように活用すればよいですか？",
    a: "公表値は各社が条件を定めて集計した参考値であり、個人の年収が上がることを保証するものではありません。登録後の面談で、ご自身の経歴での想定年収の幅を複数社に確認し、比較する方法をおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function SalaryUpComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ name: "比較", href: "/knowledge/" }, { name: "年収アップ実績の比較" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントの年収ランキング：各社が公表する年収アップ率・年収アップ額の比較
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェント各社が公式サイトに掲載している年収アップ率・年収アップ額を、{CHECKED}に当サイトが確認し、分母と対象期間とあわせて一覧にしました。
            公表値の定義は社ごとに異なるため、数値の大小による順位付けは行っていません。
          </p>
        </div>

        <div className="rounded-2xl border border-teal/20 bg-teal/5 p-5 mb-8">
          <h2 className="!mt-0 text-lg">年収アップ実績の公表状況（{CHECKED}確認）</h2>
          <ul className="text-sm text-text-secondary leading-relaxed space-y-1">
            <li>サービス全体の値を公表している大手は<strong>doda</strong>で、2025年10月〜2026年3月の転職者のうち<strong>64.1%</strong>の年収が上がり、上がった人の平均アップ額は<strong>109万4,383円</strong>です。</li>
            <li><strong>リクルートエージェント</strong>は、賃金が<strong>1割以上</strong>増えた転職決定者の割合<strong>39.3%</strong>（2025年4〜6月期）を公式記事で引用しています。1割未満の増加は含まない値です。</li>
            <li>type転職エージェント・type女性の転職エージェントの値は「年収UP希望者」を分母とし、MyVisionの156万円は「年収が上がった人」の平均です。</li>
            <li><strong>JACリクルートメント・ビズリーチ・マイナビエージェント</strong>は、サービス全体の年収アップ率を公式サイトで確認できませんでした（非公表）。</li>
          </ul>
        </div>

        <h2>各社の公表値一覧</h2>
        <p className="text-sm text-text-secondary">
          出典はすべて各社の公式サイトです。表の数値・定義・期間は、{CHECKED}時点の公式表記と脚注をもとに当サイトが整理しました。掲載順は順位ではありません。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium">サービス</th>
                <th className="p-3 text-left font-medium">公表値</th>
                <th className="p-3 text-left font-medium">定義（分母・対象者）</th>
                <th className="p-3 text-left font-medium">対象期間</th>
                <th className="p-3 text-left font-medium">出典</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? "bg-warm-gray/50" : ""}>
                  <td className="p-3 font-medium text-navy border-b border-border align-top">
                    <Link href={`/review/${r.slug}/`} className="text-teal underline">{r.name}</Link>
                  </td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">{r.value}</td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">{r.def}</td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">{r.period}</td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="text-teal underline">{r.srcLabel}</a>
                  </td>
                </tr>
              ))}
              {noRate.map((r) => (
                <tr key={r.name}>
                  <td className="p-3 font-medium text-navy border-b border-border align-top">
                    <Link href={`/review/${r.slug}/`} className="text-teal underline">{r.name}</Link>
                  </td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">非公表</td>
                  <td className="p-3 text-text-secondary border-b border-border align-top" colSpan={2}>{r.text}</td>
                  <td className="p-3 text-text-secondary border-b border-border align-top">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="text-teal underline">公式サイト</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-secondary mb-10">
          ユニゾンキャリアは、{CHECKED}に公式サイトへの接続ができなかったため、本表には掲載していません。2026年10月24日時点の公式表記は
          <Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリアの紹介ページ</Link>に掲載しています。
          「非公表」は、公式トップと同社サイト内の検索で当サイトが確認できなかったことを示します。
        </p>

        <h2>公表値の定義が社ごとに違う点について</h2>
        <p>
          年収アップ率は「何人のうち何人の年収が上がったか」を示す値ですが、分母の取り方が各社で異なります。当サイトが確認した定義は、次の4種類に分かれます。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium">分母・条件</th>
                <th className="p-3 text-left font-medium">該当する公表値</th>
                <th className="p-3 text-left font-medium">数値の出方</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-warm-gray/50">
                <td className="p-3 font-medium text-navy border-b border-border align-top">転職した人全体</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">doda 64.1%</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">年収アップを目的としない転職も含むため、最も控えめに出ます。</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-navy border-b border-border align-top">一定以上増えた人だけを数える</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">リクルートエージェント 39.3%（1割以上増）、レバテックキャリア 3人に2人（70万円以上増）</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">少しだけ上がった人は含まれないため、「上がった人の割合」より低く出ます。</td>
              </tr>
              <tr className="bg-warm-gray/50">
                <td className="p-3 font-medium text-navy border-b border-border align-top">内定獲得者・年収UP希望者に限定</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">doda IT 71%（内定獲得者）、type転職エージェント 約5人に4人、type女性 約79%（年収UP希望者）</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">年収を上げたい人・内定を得た人に絞るため、高く出やすくなります。</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-navy border-b border-border align-top">年収が上がった人だけの平均額</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">doda 109万4,383円・88万円、MyVision 156万円</td>
                <td className="p-3 text-text-secondary border-b border-border align-top">上がらなかった人を含まないため、利用者全体の平均ではありません。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          対象期間も、1か月分（MyVision）から3年半分（type女性の転職エージェント）まで幅があります。type転職エージェントの値は2021年10月〜2022年9月の集計で、他社の2025〜2026年の値とは時期が異なります。
          賃金水準は年によって変わるため、異なる時期の値を並べて比べることはおすすめしません。
        </p>

        <h2>年収アップを目的に転職エージェントを選ぶ際の確認事項</h2>
        <ul>
          <li>公表値を見る際は、分母（転職者全体か、希望者・内定者に限るか）と対象期間を確認してください。</li>
          <li>IT・コンサル・建設不動産など職種特化型の値は、その職種の転職市場の状況を反映しています。総合型の値とは前提が異なります。</li>
          <li>年収水準を高めたい場合は、求人側の年収帯（例：ビズリーチの「年収1,000万円以上の求人が5割以上」）も判断材料になります。詳しくは<Link href="/type/high-class/">ハイクラス向け転職エージェントの比較</Link>をご覧ください。</li>
          <li>実際の想定年収は経歴によって大きく異なります。2〜3社の面談で、ご自身の想定年収の幅を確認する方法をおすすめします（<Link href="/knowledge/multiple/">複数利用のコツ</Link>）。</li>
        </ul>

        <div className="rounded-2xl bg-warm-gray p-5 mb-10">
          <h2 className="!mt-0 text-lg">企業の平均年収ランキングをお探しの方へ</h2>
          <p className="text-sm text-text-secondary mb-0">
            転職先の候補企業の年収水準は、有価証券報告書の原本にもとづく<Link href="/company/maker-salary/">メーカー年収ランキング</Link>・<Link href="/company/shosha-salary/">総合商社の年収ランキング</Link>など15業界のランキングにまとめています。一覧は<Link href="/#company-db">トップページの企業年収データベース</Link>からご覧いただけます。
          </p>
        </div>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faqData.map((f) => (
            <div key={f.q} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{f.q}</h3>
              <p className="text-sm text-text-secondary mb-0">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-secondary">
          本ページの数値は{CHECKED}に各社公式サイトで確認したものです。公表値は各社が条件を定めて集計した参考値であり、個人の年収が上がることを示すものではありません。ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">エージェントの選び方</Link>
            <Link href="/compare/recruit-vs-doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">リクルートエージェント vs doda</Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ハイクラス向けの比較</Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トップへ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
