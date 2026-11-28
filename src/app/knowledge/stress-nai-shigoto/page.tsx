import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/stress-nai-shigoto/" },
  title: "ストレスの少ない仕事ランキング【厚生労働省 令和6年 労働安全衛生調査】職種11区分・業種17分類",
  description:
    "厚生労働省「令和6年 労働安全衛生調査（実態調査）」の個人調査から、仕事で強いストレスを感じる人の割合が低い順に職種と業種を並べました。職種では運搬・清掃・包装等従事者が53.6%で最も低く、全体は68.3%です。就業形態・経験年数別の値とストレスの内容も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ストレスの少ない仕事ランキング【令和6年 労働安全衛生調査】",
    description: "労働安全衛生調査の個人調査から、強いストレスを感じる人の割合が低い職種・業種を比較しています。",
  },
};

const CHECKED = "2026年11月28日";

// 厚生労働省「令和6年 労働安全衛生調査（実態調査）」個人調査 第1表（e-Stat）
// s＝強い不安、悩み、ストレスと感じる事柄がある（%）、n＝ない（%）
// c＝強いストレスがある労働者を100としたときの内容（主なもの3つ以内・%）
const LABELS = ["仕事の量", "仕事の質", "対人関係", "役割・地位の変化等", "仕事の失敗・責任の発生等", "顧客・取引先等からのクレーム", "事故や災害の体験", "雇用の安定性", "会社の将来性", "その他"];
type Row = { k: string; s: number; n: number; c: number[] };

const TOTAL: Row = { k: "合計", s: 68.3, n: 31.1, c: [43.2, 26.4, 26.1, 19.8, 36.2, 20.7, 3.5, 11.2, 22.2, 10.8] };

const SHOKUSHU: Row[] = [
  { k: "管理的職業従事者", s: 73.2, n: 26.7, c: [52.7, 31.1, 24, 29.6, 44.5, 24, 3.4, 10.4, 16.7, 4.7] },
  { k: "専門的・技術的職業従事者", s: 81.2, n: 18.4, c: [47.6, 27.4, 21.6, 22.1, 33.7, 11.8, 4.1, 13.7, 31.1, 7.5] },
  { k: "事務従事者", s: 62.3, n: 37.2, c: [40.9, 24.5, 36.1, 13.9, 35.9, 19.2, 1.4, 11.1, 21, 11.7] },
  { k: "販売従事者（商品販売・営業）", s: 67.7, n: 32.3, c: [45.3, 24.3, 22.2, 21.6, 32.9, 46.9, 1.9, 6.7, 14.5, 9.3] },
  { k: "サービス職業従事者（介護・保健医療サービスを除く）", s: 60.3, n: 39, c: [34.5, 19.5, 20, 4.7, 32.8, 30.3, 0.3, 15.3, 8.6, 5.7] },
  { k: "介護サービス・保健医療サービス職業従事者", s: 66.9, n: 33.1, c: [40.8, 38.6, 15, 22.3, 39.5, 20.9, 7.5, 0, 13.2, 32.4] },
  { k: "生産工程従事者", s: 66.1, n: 29.9, c: [38.2, 28.7, 34.1, 24.8, 40.8, 5.9, 1.3, 11.1, 22.3, 10.9] },
  { k: "輸送・機械運転従事者", s: 77.4, n: 22.3, c: [21.6, 13.7, 32.1, 6.5, 40.4, 20.2, 29, 11, 23, 8.6] },
  { k: "建設・採掘従事者", s: 71.5, n: 28.5, c: [62.4, 30.5, 28.3, 4.2, 44.8, 10.5, 11.3, 6.4, 27.8, 3.9] },
  { k: "運搬・清掃・包装等従事者", s: 53.6, n: 46.4, c: [28, 20, 17.7, 29.7, 21.3, 3.3, 2.3, 26.4, 51.4, 35.7] },
  { k: "保安職業従事者、農林業従事者", s: 83.2, n: 16.4, c: [6.8, 32.5, 27.4, 0.2, 14.6, 16.9, 2.9, 18.1, 49.8, 14.2] },
].sort((a, b) => a.s - b.s);

const SANGYO: Row[] = [
  { k: "林業", s: 46.9, n: 48.2, c: [24.5, 28.1, 19.6, 11, 46.1, 12.1, 20.3, 8.5, 22.9, 6.9] },
  { k: "鉱業，採石業，砂利採取業", s: 94.1, n: 5.9, c: [22.1, 27.5, 37.6, 12.7, 40.6, 22.3, 16, 12.3, 18.3, 16] },
  { k: "建設業", s: 70.1, n: 29.1, c: [44.5, 38, 27.2, 7.3, 36.7, 17.3, 3.9, 11.9, 26.3, 10.2] },
  { k: "製造業", s: 71, n: 28.1, c: [37.5, 32.9, 32.6, 16.9, 36.5, 10.6, 2, 10, 22.7, 11.9] },
  { k: "電気・ガス・熱供給・水道業", s: 67, n: 32.7, c: [40.4, 32.9, 25.3, 17, 31.3, 24, 29.2, 9.3, 15.8, 6] },
  { k: "情報通信業", s: 63.3, n: 36.1, c: [40.7, 35.3, 22.9, 18.2, 37.1, 27.7, 3.7, 9.1, 13.8, 7.4] },
  { k: "運輸業，郵便業", s: 60.6, n: 39.3, c: [28.3, 16.4, 29, 8.6, 46.2, 31.1, 18.1, 9.6, 18.6, 10.3] },
  { k: "卸売業，小売業", s: 62.3, n: 35.5, c: [37.2, 24.9, 29.6, 19.6, 26.4, 26, 1.4, 11.6, 27.9, 11.9] },
  { k: "金融業，保険業", s: 70.6, n: 29.4, c: [31, 36.4, 28.1, 24.5, 32.5, 26.7, 0.1, 11.9, 10.7, 15.3] },
  { k: "不動産業，物品賃貸業", s: 56.3, n: 43.7, c: [48.8, 24.9, 31, 21.8, 47.5, 30.3, 0, 3.5, 11.7, 4.5] },
  { k: "学術研究，専門・技術サービス業", s: 58.4, n: 41.6, c: [42.8, 25.7, 38.1, 16, 21.4, 11.2, 3.3, 25.3, 25.1, 13.8] },
  { k: "宿泊業，飲食サービス業", s: 66.1, n: 33.9, c: [67.6, 16.9, 6.3, 43.7, 59.6, 39.8, 0.1, 13.8, 6.4, 2.8] },
  { k: "生活関連サービス業，娯楽業", s: 55.8, n: 43.8, c: [26.9, 17.8, 36.5, 17, 31.8, 42.2, 0.7, 4.5, 19.1, 5.5] },
  { k: "教育，学習支援業", s: 71.9, n: 28.1, c: [37.6, 33.7, 43.2, 13.4, 44.6, 27.3, 4.9, 12.1, 12.2, 5.7] },
  { k: "医療，福祉", s: 84.6, n: 15.4, c: [54.5, 24.2, 15.8, 23.2, 31.8, 11.3, 3.9, 11.6, 31.1, 11.1] },
  { k: "複合サービス事業", s: 69.7, n: 30.3, c: [24.6, 30.8, 27.4, 22.6, 38.1, 33, 5.9, 5, 24.5, 11.2] },
  { k: "サービス業（他に分類されないもの）", s: 60.3, n: 39.3, c: [40.3, 20.5, 29.8, 14.6, 36.1, 22.9, 3.4, 9.9, 17, 16.6] },
].sort((a, b) => a.s - b.s);

const KEITAI: Row[] = [
  { k: "正社員", s: 74.6, n: 24.9, c: [45, 25.4, 26.7, 22.7, 37.7, 21.3, 3.4, 8.6, 23.3, 11.5] },
  { k: "契約社員", s: 73, n: 26.9, c: [47, 39.2, 19.6, 3.5, 31.3, 8.5, 8.2, 32.1, 38.8, 5.8] },
  { k: "パートタイム労働者", s: 43.5, n: 54.6, c: [31.7, 26.9, 23.4, 12.2, 32, 26.6, 1.6, 8.6, 9.4, 7.9] },
  { k: "派遣労働者", s: 54.1, n: 45.9, c: [31.3, 18.1, 36.9, 5.7, 22.7, 9.4, 1.5, 54.7, 5.5, 15] },
];

const KEIKEN: Row[] = [
  { k: "1年未満", s: 53.2, n: 46.8, c: [39.1, 24.3, 33, 16.6, 44.1, 11.7, 0.6, 14.8, 16.9, 13.7] },
  { k: "1年以上3年未満", s: 62.3, n: 37.6, c: [35.9, 26.3, 27.3, 21.8, 42.3, 16.9, 2, 14.9, 20, 14] },
  { k: "3年以上5年未満", s: 69.3, n: 30.6, c: [44.1, 28.5, 33.9, 8.8, 24.9, 29.6, 1.9, 13.9, 33.8, 13.3] },
  { k: "5年以上10年未満", s: 66.4, n: 31.5, c: [45.4, 29.8, 21.9, 27, 36.6, 14.4, 1.5, 11.3, 24.4, 13.8] },
  { k: "10年以上", s: 74.4, n: 25.3, c: [45.3, 24.9, 25, 19.7, 35.7, 22.5, 5.8, 9, 18.2, 7.5] },
];

// 内容のうち割合が最も高いもの（「その他」を除く）
const top = (r: Row) => {
  let i = 0;
  r.c.slice(0, 9).forEach((v, j) => {
    if (v > r.c[i]) i = j;
  });
  return `${LABELS[i]}（${r.c[i].toFixed(1)}%）`;
};
const p1 = (v: number) => `${v.toFixed(1)}%`;
const BELOW_TOTAL_SANGYO = SANGYO.filter((x) => x.s < TOTAL.s).length;

const faq = [
  {
    q: "強いストレスを感じる人が最も少ない職種は何ですか？",
    a: `厚生労働省「令和6年 労働安全衛生調査（実態調査）」では、仕事や職業生活に関して強い不安・悩み・ストレスを感じる事柄がある労働者の割合は、職種別で${SHOKUSHU[0].k}が${p1(SHOKUSHU[0].s)}と最も低く、次いで${SHOKUSHU[1].k}が${p1(SHOKUSHU[1].s)}、${SHOKUSHU[2].k}が${p1(SHOKUSHU[2].s)}です。全体は${p1(TOTAL.s)}です。`,
  },
  {
    q: "ストレスの少ない業種はどこですか？",
    a: `同調査の産業別では、林業（${p1(SANGYO[0].s)}）を除くと、${SANGYO[1].k}（${p1(SANGYO[1].s)}）、${SANGYO[2].k}（${p1(SANGYO[2].s)}）、${SANGYO[3].k}（${p1(SANGYO[3].s)}）の順に低くなっています。最も高いのは${SANGYO[SANGYO.length - 1].k}（${p1(SANGYO[SANGYO.length - 1].s)}）、次いで${SANGYO[SANGYO.length - 2].k}（${p1(SANGYO[SANGYO.length - 2].s)}）です。`,
  },
  {
    q: "正社員とパートではストレスの感じ方に差がありますか？",
    a: `あります。強いストレスがある人の割合は、正社員が${p1(KEITAI[0].s)}、契約社員が${p1(KEITAI[1].s)}、派遣労働者が${p1(KEITAI[3].s)}、パートタイム労働者が${p1(KEITAI[2].s)}です。派遣労働者では、ストレスの内容として「雇用の安定性」を挙げた人が${p1(KEITAI[3].c[7])}と最も多くなっています。`,
  },
  {
    q: "令和5年の調査より強いストレスを感じる人は減ったのですか？",
    a: `令和5年調査は82.7%、令和6年調査は68.3%ですが、厚生労働省は令和6年に設問の形式を変更しており、数値の比較には留意が必要としています。そのため、当サイトではこの差を「ストレスが減った」とは判断していません。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和6年 労働安全衛生調査（実態調査）個人調査 第1表（仕事や職業生活に関する強い不安、悩み、ストレスの有無及び内容別労働者割合）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040403533" },
  { label: "厚生労働省 令和6年 労働安全衛生調査（実態調査）結果の概況（個人調査 第17表）", url: "https://www.mhlw.go.jp/toukei/list/dl/r06-46-50_kekka-gaiyo02.pdf" },
  { label: "厚生労働省 令和6年 労働安全衛生調査（実態調査）結果の概要", url: "https://www.mhlw.go.jp/toukei/list/r06-46-50b.html" },
];

const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

function RankTable({ rows, label }: { rows: Row[]; label: string }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3 text-left rounded-tl-lg">順位</th>
            <th className="p-3 text-left">{label}</th>
            <th className={th}>強いストレスがある</th>
            <th className={th}>ない</th>
            <th className="p-3 text-left rounded-tr-lg">最も多いストレスの内容</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((x, i) => (
            <tr key={x.k} className="border-b border-gray-100">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{x.k}</td>
              <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{p1(x.s)}</td>
              <td className="p-3 text-right whitespace-nowrap">{p1(x.n)}</td>
              <td className="p-3 text-sm">{top(x)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const low = SHOKUSHU[0];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "ストレスの少ない仕事" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ストレスの少ない仕事ランキング【厚生労働省 令和6年 労働安全衛生調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: p1(TOTAL.s), l: "強いストレスがある労働者（全体）" },
              { v: p1(low.s), l: `最も低い職種（${low.k}）` },
              { v: p1(SHOKUSHU[SHOKUSHU.length - 1].s), l: "最も高い職種（保安・農林業）" },
              { v: p1(KEITAI[2].s), l: "パートタイム労働者" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和6年 労働安全衛生調査（実態調査）」の個人調査では、仕事や職業生活に関して強い不安・悩み・ストレスを感じる事柄がある労働者は<strong>{p1(TOTAL.s)}</strong>です。
            職種別（11区分）で最も低いのは<strong>{low.k}の{p1(low.s)}</strong>で、{SHOKUSHU[1].k}（{p1(SHOKUSHU[1].s)}）、{SHOKUSHU[2].k}（{p1(SHOKUSHU[2].s)}）が続きます。
            ただし、どの職種でも半数以上の人が強いストレスを感じており、「ストレスのない仕事」と言い切れる職種はありません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            対象：常用労働者10人以上の民営事業所で働く労働者（原則として令和6年10月31日現在）。値は{CHECKED}にe-Statの統計表で確認し、当サイトで並べ替えています。順位は「強いストレスがある」の割合が低い順です。
          </p>
        </div>

        <h2>職種別：強いストレスがある人の割合が低い順</h2>
        <RankTable rows={SHOKUSHU} label="職種（調査上の区分）" />
        <p className="text-xs text-text-muted mb-4">
          ※出典：e-Stat 令和6年 労働安全衛生調査（実態調査）個人調査 第1表。「最も多いストレスの内容」は、強いストレスがある労働者を100とした割合（主なもの3つ以内の複数回答）のうち、「その他」を除いて最も高いものです。
        </p>
        <p className="mb-10">
          最も低い{low.k}でも{p1(low.s)}が強いストレスを感じています。この職種では、内容として「会社の将来性」を挙げた人が{p1(low.c[8])}と多く、全体（{p1(TOTAL.c[8])}）の2倍を超えます。
          一方、「仕事の量」（{p1(low.c[0])}）や「顧客・取引先等からのクレーム」（{p1(low.c[5])}）は全体より低く、業務の負荷よりも勤め先の先行きに関するストレスが中心です。
          事務従事者は「対人関係」（{p1(SHOKUSHU.find((x) => x.k === "事務従事者")!.c[2])}）が全体より高い点が特徴です。職種を選ぶときは、割合の高低だけでなく、自分が避けたいストレスの内容と照らし合わせることをおすすめします。
        </p>

        <h2>業種別：強いストレスがある人の割合が低い順</h2>
        <RankTable rows={SANGYO} label="産業（大分類）" />
        <p className="text-xs text-text-muted mb-4">
          ※出典：同第1表。「林業」は農業，林業のうち林業に限った値です。林業や鉱業，採石業，砂利採取業は働く人が少ない産業であり、値が振れやすいと考えられるため、参考値として見てください。
        </p>
        <p className="mb-10">
          17の産業のうち{BELOW_TOTAL_SANGYO}産業が全体（{p1(TOTAL.s)}）を下回ります。林業を除くと、{SANGYO[1].k}（{p1(SANGYO[1].s)}）、{SANGYO[2].k}（{p1(SANGYO[2].s)}）、{SANGYO[3].k}（{p1(SANGYO[3].s)}）が低く、
          医療，福祉（{p1(SANGYO.find((x) => x.k === "医療，福祉")!.s)}）は鉱業に次いで高くなっています。医療，福祉では「仕事の量」を挙げた人が{p1(SANGYO.find((x) => x.k === "医療，福祉")!.c[0])}です。
          宿泊業，飲食サービス業は割合こそ全体を下回りますが、「仕事の量」（{p1(SANGYO.find((x) => x.k.startsWith("宿泊"))!.c[0])}）と「仕事の失敗・責任の発生等」（{p1(SANGYO.find((x) => x.k.startsWith("宿泊"))!.c[4])}）を挙げた人が多い業種です。
        </p>

        <h2>就業形態・経験年数別の割合</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={th}>強いストレスがある</th>
                <th className={th}>ない</th>
                <th className="p-3 text-left rounded-tr-lg">最も多いストレスの内容</th>
              </tr>
            </thead>
            <tbody>
              {[...KEITAI, ...KEIKEN.map((x) => ({ ...x, k: `経験年数 ${x.k}` }))].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{p1(x.s)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{p1(x.n)}</td>
                  <td className="p-3 text-sm">{top(x)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：同第1表（経験年数は同表の区分のまま掲載しています）。</p>
        <p className="mb-10">
          就業形態では、パートタイム労働者（{p1(KEITAI[2].s)}）と派遣労働者（{p1(KEITAI[3].s)}）が正社員（{p1(KEITAI[0].s)}）より大きく低くなっています。ただし派遣労働者は「雇用の安定性」、契約社員は「会社の将来性」（{p1(KEITAI[1].c[8])}）を挙げる人が多く、ストレスの種類が異なります。
          経験年数では1年未満が{p1(KEIKEN[0].s)}と最も低く、10年以上では{p1(KEIKEN[4].s)}です。責任や役割が増えるにつれて、強いストレスを感じる人が増える傾向がうかがえます。
        </p>

        <h2>ストレスの少ない仕事を探すときの考え方</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "「ない」と答えた人が多い職種でも半数以上はストレスを感じている", d: `最も低い${low.k}でも${p1(low.s)}が強いストレスを感じています。職種を変えるだけでストレスがなくなるわけではありません。` },
            { t: "ストレスの内容で選ぶ", d: "対人関係が負担なら事務職以外、クレームが負担なら販売・サービス職以外など、内容の割合を比べると自分に合う職種を絞り込みやすくなります。" },
            { t: "働き方の条件も確かめる", d: "残業時間はストレスの「仕事の量」に直結します。残業の少ない職種は定時で帰れる仕事のページで比較しています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          残業の少ない職種は<Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link>、職種ごとの年収は<Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link>で確認できます。
          今の職場のストレスが続いている場合は、<Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link>や<Link href="/knowledge/busho-ido-shitai/" className={link}>部署異動をしたいとき</Link>も参考にしてください。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "令和5年調査とは比べられない", d: "令和5年調査は82.7%でしたが、令和6年は設問の形式が変更されており、厚生労働省は数値の比較に留意が必要としています。" },
            { t: "職種は大きな区分", d: "職種は11区分のため、同じ区分の中でも仕事内容によって差があります。個別の職業の値ではありません。" },
            { t: "本人の回答による割合", d: "「強い不安、悩み、ストレスと感じる事柄」があるかどうかは本人の回答で、医学的な診断ではありません。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link></li>
          <li><Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link></li>
          <li><Link href="/knowledge/tenshoku-umakuikanai/" className={link}>転職がうまくいかないとき</Link></li>
          <li><Link href="/knowledge/nenshu-800man-shokugyo/" className={link}>年収800万円の職業</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
