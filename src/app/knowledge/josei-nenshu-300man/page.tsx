import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/josei-nenshu-300man/" },
  title: "年収300万円を超える女性は50.7%・令和3年分以降で初めて半数超え【国税庁 令和7年分 民間給与実態統計調査】",
  description:
    "国税庁「令和7年分 民間給与実態統計調査」第16表から、年収300万円の女性の位置を集計しました。300万円を超える女性は約1,130万人（50.7%）で、令和3年分の42.3%から増え、5年間で初めて半数を超えました。正社員・正社員以外の平均給与と手取りも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収300万円を超える女性は50.7%【国税庁 令和7年分】",
    description: "国税庁の統計から、年収300万円の女性の割合と5年間の推移、正社員・正社員以外の平均給与を掲載しています。",
  },
};

const CHECKED = "2026年11月27日";
const NTA_URL = "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf";

// 国税庁 令和7年分 民間給与実態統計調査 第16表（1年を通じて勤務した給与所得者・女性・千人）
// u100＝100万円以下、u200＝100万円超200万円以下、u300＝200万円超300万円以下、total＝女性計
const TREND = [
  { y: "令和3年分", u100: 3149, u200: 4834, u300: 4449, total: 21541 },
  { y: "令和4年分", u100: 3003, u200: 4615, u300: 4301, total: 21510 },
  { y: "令和5年分", u100: 3083, u200: 4492, u300: 4297, total: 21887 },
  { y: "令和6年分", u100: 2900, u200: 4072, u300: 4211, total: 22116 },
  { y: "令和7年分", u100: 2696, u200: 4131, u300: 4170, total: 22294 },
];
// 同表 令和7年分 女性の300万円超の階級（千人）
const BANDS_F = [
  { label: "300万円超400万円以下", n: 4036 },
  { label: "400万円超500万円以下", n: 3051 },
  { label: "500万円超600万円以下", n: 1871 },
  { label: "600万円超700万円以下", n: 936 },
  { label: "700万円超1,000万円以下", n: 537 + 298 + 170 },
  { label: "1,000万円超", n: 288 + 71 + 21 + 18 },
];
// 同表 令和7年分 男性：300万円以下 1,007＋1,694＋2,575 千人／計 29,337 千人
const M_UNDER = 1007 + 1694 + 2575;
const M_TOTAL = 29337;

const p = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;
const under = (x: (typeof TREND)[number]) => x.u100 + x.u200 + x.u300;
const LAST = TREND[TREND.length - 1];
const FIRST = TREND[0];
const OVER_LAST = LAST.total - under(LAST);
const OVER_FIRST = FIRST.total - under(FIRST);
const manNin = (k: number) => `約${Math.round(k / 10).toLocaleString("ja-JP")}万人`;

const r = calcTakeHome(3000000);

const faq = [
  {
    q: "年収300万円を超える女性はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した女性の給与所得者${manNin(LAST.total)}のうち、年間給与額が300万円を超える人は${manNin(OVER_LAST)}で、${p(OVER_LAST, LAST.total)}です（人数から当サイトで集計）。令和7年分で初めて半数を超えました（令和3年分以降の5年間）。`,
  },
  {
    q: "年収300万円の女性は平均より上ですか？",
    a: "同調査の第8表では、1年を通じて勤務した女性の平均給与は342万円で、年収300万円は女性の平均を下回ります。ただし平均は高収入の人に引き上げられるため、人数で見ると300万円を超える女性は約半数（50.7%）で、年収300万円はほぼ真ん中に位置します。",
  },
  {
    q: "正社員の女性の平均年収はいくらですか？",
    a: "同調査の第8表では、正社員（正職員）の女性の平均給与は444万円、正社員（正職員）以外の女性は179万円です。正社員の女性の平均は年収300万円を144万円上回ります。",
  },
  {
    q: "男性で年収300万円以下の人はどのくらいいますか？",
    a: `同じ第16表で、年収300万円以下の男性は${manNin(M_UNDER)}で、男性全体の${p(M_UNDER, M_TOTAL)}です。女性の${p(under(LAST), LAST.total)}と比べると、約3分の1の割合です。`,
  },
  {
    q: "年収300万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なし・40歳未満の前提で、年${man(r.net)}（月${man(r.netMonthly)}）が目安です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年収300万円の女性の割合" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年収300万円を超える女性は{p(OVER_LAST, LAST.total)}・令和3年分以降で初めて半数超え【国税庁 令和7年分】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: p(OVER_LAST, LAST.total), l: "年収300万円を超える女性" },
              { v: manNin(OVER_LAST), l: "300万円を超える女性の人数" },
              { v: "342万円", l: "女性の平均給与（第8表）" },
              { v: man(r.net), l: "年収300万円の手取り（当サイト試算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            国税庁「令和7年分 民間給与実態統計調査」によると、1年を通じて勤務した女性の給与所得者のうち、<strong>年収300万円を超える人は{p(OVER_LAST, LAST.total)}（{manNin(OVER_LAST)}）</strong>です。
            令和3年分の{p(OVER_FIRST, FIRST.total)}から毎年増え、令和7年分で初めて半数を超えました（令和3年分以降の5年間）。年収300万円は、働く女性のほぼ真ん中に位置する金額です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：国税庁「令和7年分 民間給与実態統計調査」第8表・第16表（{CHECKED}に当サイトで確認）。割合は公表された人数から当サイトで集計しています。パート・アルバイトなど正社員以外の人も含みます。
          </p>
        </div>

        <h2>年収300万円を超える女性の割合の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年分</th>
                <th className={th}>女性計</th>
                <th className={th}>300万円以下</th>
                <th className={th}>300万円超</th>
                <th className="p-3 text-right rounded-tr-lg">300万円超の割合</th>
              </tr>
            </thead>
            <tbody>
              {TREND.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{manNin(x.total)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{manNin(under(x))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{manNin(x.total - under(x))}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{p(x.total - under(x), x.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※国税庁 民間給与実態統計調査 第16表（女性・1年を通じて勤務した給与所得者）の人数から当サイトで集計。</p>
        <p className="mb-10">
          年収300万円以下の女性は、令和3年分の{manNin(under(FIRST))}から令和7年分の{manNin(under(LAST))}へ減り、300万円を超える女性は{manNin(OVER_FIRST)}から{manNin(OVER_LAST)}へ増えました。
          5年間で{((OVER_LAST / LAST.total - OVER_FIRST / FIRST.total) * 100).toFixed(1)}ポイントの上昇です（当サイト計算）。
        </p>

        <h2>令和7年分の女性の給与階級別の人数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年間給与額</th>
                <th className={th}>人数</th>
                <th className="p-3 text-right rounded-tr-lg">構成比</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "100万円以下", n: LAST.u100 },
                { label: "100万円超200万円以下", n: LAST.u200 },
                { label: "200万円超300万円以下", n: LAST.u300 },
                ...BANDS_F,
              ].map((x) => (
                <tr key={x.label} className="border-b border-gray-100">
                  <td className="p-3">{x.label}</td>
                  <td className="p-3 text-right whitespace-nowrap">{manNin(x.n)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{p(x.n, LAST.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同表。700万円超1,000万円以下・1,000万円超は複数の階級を当サイトで合算しています。</p>
        <p className="mb-10">
          女性で最も人数が多いのは200万円超300万円以下（{p(LAST.u300, LAST.total)}）、次いで100万円超200万円以下（{p(LAST.u200, LAST.total)}）です。
          300万円超400万円以下も{p(BANDS_F[0].n, LAST.total)}とほぼ同じ規模で、年収300万円前後に多くの人が集まっています。
          400万円を超える女性は{p(LAST.total - under(LAST) - BANDS_F[0].n, LAST.total)}です。
        </p>

        <h2>正社員と正社員以外の平均給与</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分（令和7年分）</th>
                <th className={th}>女性</th>
                <th className="p-3 text-right rounded-tr-lg">男性</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "全体", f: "342万円", m: "597万円" },
                { k: "正社員（正職員）", f: "444万円", m: "623万円" },
                { k: "正社員（正職員）以外", f: "179万円", m: "270万円" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.f}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※国税庁 民間給与実態統計調査 第8表（1年を通じて勤務した給与所得者の1人当たり平均給与）。</p>
        <p className="mb-10">
          正社員の女性の平均は444万円で、年収300万円を大きく上回ります。一方、正社員以外の女性の平均は179万円です。
          年収300万円以下の女性が多い背景には、パート・アルバイトなど正社員以外で働く人が含まれていることがあります。
          正社員以外から正社員への転職の状況は<Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link>（転職者実態調査）に掲載しています。
        </p>

        <h2>男性との比較</h2>
        <p className="mb-10">
          同じ第16表で、年収300万円以下の男性は{manNin(M_UNDER)}（{p(M_UNDER, M_TOTAL)}）です。女性の{p(under(LAST), LAST.total)}と比べると約3分の1で、男性では400万円超500万円以下が最も多い階級です。
          年収500万円を超える女性の割合は<Link href="/knowledge/nenshu-500man-josei/" className={link}>年収500万円を超える女性の割合</Link>に掲載しています。
        </p>

        <h2>年収300万円の手取り</h2>
        <p className="mb-10">
          東京都・協会けんぽ・独身・賞与なし・40歳未満の前提で、年収300万円の手取りは年{man(r.net)}、月{man(r.netMonthly)}が目安です（令和8年分の税制・保険料率による当サイト試算）。
          内訳と計算方法は<Link href="/knowledge/tedori-300man/" className={link}>年収300万円の手取り</Link>に掲載しています。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "1年を通じて勤務した人が対象", d: "民間給与実態統計調査の第16表は、1年を通じて勤務した給与所得者の年間の給与額です。年の途中で就職・退職した人は含まれません。" },
            { t: "パート・アルバイトを含む", d: "正社員だけの給与階級別の人数は、この表では公表されていません。正社員の女性に限ると、300万円を超える割合は上の値より高くなると考えられます。" },
            { t: "給与額は税・社会保険料を引く前の額", d: "年間給与額は給料・手当と賞与の合計（額面）です。手取りは税金と社会保険料を差し引いた金額になります。" },
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
          <li><Link href="/knowledge/tedori-300man/" className={link}>年収300万円の手取り</Link></li>
          <li><Link href="/knowledge/nenshu-500man-josei/" className={link}>年収500万円を超える女性の割合</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className={link}>30代女性の転職</Link></li>
          <li><Link href="/knowledge/nenshu-600man-shokugyo/" className={link}>年収600万円の職業</Link></li>
          <li><Link href="/knowledge/kangoshi-igai-tenshoku/" className={link}>看護師から看護師以外への転職</Link></li>
          <li><Link href="/type/women/" className={link}>女性におすすめの転職エージェント</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={NTA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁「令和7年分 民間給与実態統計調査」（第8表 平均給与・第16表 給与階級別給与所得者数・構成割合）</a></li>
        </ul>
      </article>
    </>
  );
}
