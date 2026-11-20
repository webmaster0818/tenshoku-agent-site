import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/nenshu-500man-josei/" },
  title: "年収500万円を超える女性は18.9%（約421万人）・5年で5.8ポイント増【国税庁 令和7年分 民間給与実態統計調査】",
  description:
    "国税庁「令和7年分 民間給与実態統計調査」第16表から、年収500万円を超える女性の割合を当サイトで集計しました。女性2,229万人のうち約421万人（18.9%）で、令和3年分の13.1%から5ポイント以上増えています。男性との比較と年収500万円の手取りも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収500万円を超える女性は18.9%（約421万人）【国税庁 令和7年分】",
    description: "国税庁の統計から、年収500万円を超える女性の割合と推移、手取りを掲載しています。",
  },
};

const CHECKED = "2026年11月20日";

// 国税庁 令和7年分 民間給与実態統計調査 第16表（1年を通じて勤務した給与所得者・女性・千人）
const bandsF = [
  { label: "100万円以下", n: 2696 },
  { label: "100万円超200万円以下", n: 4131 },
  { label: "200万円超300万円以下", n: 4170 },
  { label: "300万円超400万円以下", n: 4036 },
  { label: "400万円超500万円以下", n: 3051 },
  { label: "500万円超600万円以下", n: 1871 },
  { label: "600万円超700万円以下", n: 936 },
  { label: "700万円超800万円以下", n: 537 },
  { label: "800万円超900万円以下", n: 298 },
  { label: "900万円超1,000万円以下", n: 170 },
  { label: "1,000万円超", n: 288 + 71 + 21 + 18 },
];
const totalF = 22294;
const over500F = bandsF.slice(5).reduce((a, b) => a + b.n, 0);

// 同表 女性の500万円超の人数と女性計（千人）
const trend = [
  { y: "令和3年分", over: 2828, total: 21541 },
  { y: "令和4年分", over: 3123, total: 21510 },
  { y: "令和5年分", over: 3286, total: 21887 },
  { y: "令和6年分", over: 3911, total: 22116 },
  { y: "令和7年分", over: 4210, total: 22294 },
];
const p = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

// 同表 男性（令和7年分）：500万円超 15,244千人／計 29,337千人
const overM = 15244;
const totalM = 29337;

const r = calcTakeHome(5000000);
const o = calcTakeHome(5000000, true);

const faq = [
  {
    q: "年収500万円を超える女性はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した女性の給与所得者2,229万人のうち、年間給与額が500万円を超える人は約${(over500F / 10).toFixed(0)}万人で、${p(over500F, totalF)}です（人数から当サイトで集計）。およそ5人に1人の割合です。`,
  },
  {
    q: "年収500万円の女性は上位何%ですか？",
    a: `同表で500万円を超える女性は${p(over500F, totalF)}のため、年収500万円を超えていれば、1年を通じて勤務した女性の上位約19%に入ります。400万円を超える女性は${p(over500F + 3051, totalF)}です。この統計にはパート・アルバイトなど正社員以外の人も含まれます。`,
  },
  {
    q: "年収500万円を超える女性は増えていますか？",
    a: `増えています。同表の女性で500万円を超える人の割合は、令和3年分の${p(2828, 21541)}から令和7年分の${p(4210, 22294)}へ、5年で5.8ポイント上がりました。人数は約283万人から約421万人に増えています（当サイト集計）。`,
  },
  {
    q: "年収500万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は年${man(r.net)}（月${man(r.netMonthly)}）、40〜64歳は年${man(o.net)}が目安です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "女性の平均年収はいくらですか？",
    a: "同調査の第8表では、1年を通じて勤務した女性の平均給与は342万円です。正社員（正職員）の女性は444万円、正社員（正職員）以外の女性は179万円です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "国税庁 令和7年分 民間給与実態統計調査（第8表 平均給与・第12表 企業規模別の平均給与・第16表 給与階級別給与所得者数・構成割合・第15図 勤続年数別の平均給与の本文）", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
  { label: "国税庁 No.1410 給与所得控除（令和8年分・令和9年分）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" },
  { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都 9.85%）", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
  { label: "協会けんぽ 令和8年度保険料率のお知らせ（介護保険料率 1.62%）", url: "https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年収500万円の女性の割合" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年収500万円を超える女性は18.9%（約421万人）・5年で5.8ポイント増【国税庁 令和7年分】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: p(over500F, totalF), l: "年収500万円を超える女性の割合（令和7年分）" },
              { v: `約${(over500F / 10).toFixed(0)}万人`, l: "年収500万円を超える女性の人数" },
              { v: p(overM, totalM), l: "年収500万円を超える男性の割合" },
              { v: "342万円", l: "女性の平均給与（第8表）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            国税庁「令和7年分 民間給与実態統計調査」によると、1年を通じて勤務した女性の給与所得者2,229万人のうち、年収500万円を超える人は<strong>約{(over500F / 10).toFixed(0)}万人（{p(over500F, totalF)}）</strong>です。
            男性の{p(overM, totalM)}と比べると3分の1程度ですが、令和3年分の{p(2828, 21541)}から5年続けて上がっています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            割合は第16表の人数（千人単位）から当サイトで集計しています。年収は1年間の給与・手当・賞与の合計（税引き前）で、パート・アルバイトなど正社員以外の人を含みます。統計値は{CHECKED}に国税庁の公表資料で確認しています。
          </p>
        </div>

        <h2>女性の年収分布（令和7年分）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年間給与額</th>
                <th className="p-3 text-right">人数</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {bandsF.map((x, i) => (
                <tr key={x.label} className={`border-b border-gray-100 ${i >= 5 ? "bg-teal/5" : ""}`}>
                  <td className="p-3">{x.label}</td>
                  <td className="p-3 text-right">{(x.n / 10).toFixed(1)}万人</td>
                  <td className="p-3 text-right">{p(x.n, totalF)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※国税庁 令和7年分 民間給与実態統計調査 第16表（1年を通じて勤務した給与所得者・女性）。1,000万円超は4階級を合算。網かけが500万円超です。
        </p>
        <p className="mb-10">
          女性で最も多いのは200万円超300万円以下（{p(4170, totalF)}）で、100万円超200万円以下（{p(4131, totalF)}）がほぼ同数で続きます。
          500万円超600万円以下は{p(1871, totalF)}で、400万円超500万円以下（{p(3051, totalF)}）の約6割の人数です。
          女性の300万円以下の割合が高い背景には、正社員以外で働く人の多さがあると考えられます（同調査の第8表で、正社員以外の女性の平均給与は179万円）。
        </p>

        <h2>年収500万円を超える女性の割合の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年分</th>
                <th className="p-3 text-right">500万円超の女性</th>
                <th className="p-3 text-right">女性の給与所得者</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {trend.map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.y === "令和7年分" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{(x.over / 10).toFixed(1)}万人</td>
                  <td className="p-3 text-right">{(x.total / 10).toFixed(1)}万人</td>
                  <td className="p-3 text-right">{p(x.over, x.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同表の令和3年分〜令和7年分の女性の人数から当サイトで集計。</p>
        <p className="mb-10">
          女性の給与所得者全体は5年で約75万人増えたのに対し、500万円を超える女性は約138万人増えました。
          同じ期間に女性の平均給与は302万円（令和3年分）から342万円（令和7年分）へ上がっています（第8表）。
          ただし、この統計は1年間の給与の分布であり、同じ人の年収の変化を追ったものではありません。
        </p>

        <h2>女性の平均給与が500万円前後になる条件</h2>
        <p>同調査で、女性の平均給与が高い区分は次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分（女性）</th>
                <th className="p-3 text-right rounded-tr-lg">平均給与</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "勤続30〜34年（第15図の本文）", v: "501万円" },
                { k: "正社員（正職員）（第8表）", v: "444万円" },
                { k: "資本金10億円以上の株式会社（第12表）", v: "444万円" },
                { k: "女性全体（第8表）", v: "342万円" },
                { k: "正社員（正職員）以外（第8表）", v: "179万円" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※国税庁 令和7年分 民間給与実態統計調査。第12表の資本金10億円以上の株式会社の女性は4,436千円。</p>
        <p className="mb-10">
          女性の平均給与が500万円に届く区分は、勤続30〜34年（501万円）のみです。正社員の女性や大企業（資本金10億円以上）に勤める女性の平均は444万円で、平均値では500万円を下回ります。
          年収500万円を目指す場合は、正社員として働くことに加えて、平均給与の高い業種・職種を選ぶことや、賞与の比率が高い企業を選ぶことが考えられます。
          業種別・職種別の水準は<Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal hover:underline">平均年収1000万円を超える職業</Link>のページでも紹介しています。
        </p>

        <h2>年収500万円の手取り</h2>
        <p>
          令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算すると、年収500万円の手取りは、40歳未満で<strong>年{man(r.net)}（月{man(r.netMonthly)}）</strong>、40〜64歳で年{man(o.net)}です（独身・賞与なし）。
          40歳未満の場合、社会保険料は年{yen(r.social)}、所得税は年{yen(r.incomeTax)}、住民税は年{yen(r.residentTax)}です。
        </p>
        <p className="mb-10">
          内訳と前後の年収との比較は<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>のページにまとめています。
        </p>

        <h2>年収を上げる転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "提示年収の内訳を確認する", d: "求人票の想定年収は、固定残業代や賞与の見込みを含むことがあります。月給・賞与・残業代を分けて、現在の年収と比べてください。" },
            { t: "賞与の比率を比べる", d: "同調査の第12表では、資本金10億円以上の株式会社の女性の平均賞与は90.3万円で、資本金2,000万円未満の株式会社（23.0万円）の約4倍です。企業規模による年収差の多くは賞与によるものです。" },
            { t: "女性の転職に強い転職エージェントを比べる", d: "女性の求人を多く扱う転職エージェントでは、産休・育休の取得実績や働き方の条件を確認しやすくなります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className="text-teal font-bold hover:underline">30代女性の転職</Link></li>
          <li><Link href="/type/women/" className="text-teal font-bold hover:underline">女性におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">年収別の手取り早見表</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-50sai/" className="text-teal font-bold hover:underline">50歳の平均年収（女性約453万円）</Link></li>
          <li><Link href="/knowledge/dai2-shinsotsu-ote/" className="text-teal font-bold hover:underline">第二新卒で大手企業に転職できるか</Link></li>
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
