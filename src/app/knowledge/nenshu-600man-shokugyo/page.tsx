import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES, shokushuAnnual } from "@/data/shokushu-r7";
import { NTA_R7, shareAbove } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/nenshu-600man-shokugyo/" },
  title: "年収600万円の職業は27職種【令和7年 賃金構造基本統計調査】45〜49歳では42職種が600万円以上",
  description:
    "厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）144職種から、平均年収が600万円以上の職業を当サイトで算出しました。職種全体の平均で600万円以上は27職種、45〜49歳に限ると42職種です。20代後半で600万円を超える職種、年収600万円を超える給与所得者の割合も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収600万円の職業は27職種【令和7年 賃金構造基本統計調査】",
    description: "賃金構造基本統計調査の職種別データから、平均年収600万円以上の職業と年齢別の到達状況を算出しています。",
  },
};

const CHECKED = "2026年11月27日";
const LINE = 600;

const f1 = (v: number) => `約${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
const ppl = (w: number) => `${(w * 10).toLocaleString("ja-JP")}人`;

const ROWS = SHOKUSHU.map((x) => ({
  k: x.k,
  age: x.age,
  w: x.w,
  y: shokushuAnnual(x.t[0], x.t[1]),
  y2529: x.a2529 ? shokushuAnnual(x.a2529[0], x.a2529[1]) : null,
  w2529: x.a2529 ? x.a2529[2] : 0,
  y4549: x.a4549 ? shokushuAnnual(x.a4549[0], x.a4549[1]) : null,
  w4549: x.a4549 ? x.a4549[2] : 0,
})).sort((a, b) => b.y - a.y);

const OVER = ROWS.filter((x) => x.y >= LINE);
const NEAR = ROWS.filter((x) => x.y >= 550 && x.y < LINE);
// 45〜49歳の平均で600万円以上になるが、全年齢の平均では600万円未満の職種（推計労働者数100人以上の区分のみ）
const OVER_4549_ONLY = ROWS.filter((x) => x.y < LINE && x.y4549 !== null && x.y4549 >= LINE && x.w4549 >= 10).sort((a, b) => (b.y4549 ?? 0) - (a.y4549 ?? 0));
const OVER_4549_COUNT = ROWS.filter((x) => x.y4549 !== null && x.y4549 >= LINE).length;
const OVER_2529 = ROWS.filter((x) => x.y2529 !== null && x.y2529 >= LINE);
const W_OVER = OVER.reduce((s, x) => s + x.w, 0);
const W_ALL = ROWS.reduce((s, x) => s + x.w, 0);
const SHARE_W = `${((W_OVER / W_ALL) * 100).toFixed(1)}%`;
const OVER600_THOUSAND = NTA_R7.bands.slice(6).reduce((s, b) => s + b.n, 0);
const BIG = [...OVER].sort((a, b) => b.w - a.w).slice(0, 5);

const faq = [
  {
    q: "平均年収が600万円以上の職業はいくつありますか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）144職種のうち、平均年収（所定内給与額×12か月＋年間賞与・男女計）が600万円以上の職業は${OVER.length}職種です（当サイト計算）。最も高いのは航空機操縦士の${f1(OVER[0].y)}、600万円にもっとも近いのは${OVER[OVER.length - 1].k}の${f1(OVER[OVER.length - 1].y)}です。`,
  },
  {
    q: "年収600万円の職業で働いている人はどのくらいいますか？",
    a: `平均年収600万円以上の${OVER.length}職種で働く一般労働者は推計${ppl(W_OVER)}で、144職種の合計（${ppl(W_ALL)}）の${SHARE_W}です。人数が最も多いのは管理的職業従事者、次いでその他の営業職業従事者です。`,
  },
  {
    q: "年齢が上がると年収600万円に届く職業は増えますか？",
    a: `増えます。45〜49歳の平均で600万円以上になる職種は${OVER_4549_COUNT}職種で、全年齢の平均（${OVER.length}職種）より多くなります。化学技術者や土木技術者などは、全年齢の平均では600万円未満ですが45〜49歳では600万円を超えます。`,
  },
  {
    q: "年収600万円を超える会社員はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者${(NTA_R7.total / 10).toLocaleString("ja-JP")}万人のうち、年収600万円超の人は約${Math.round(OVER600_THOUSAND / 10).toLocaleString("ja-JP")}万人（${shareAbove(600)}）です。パート・アルバイトを含む全体の値です。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  ...SHOKUSHU_SOURCES,
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "国税庁 令和7年分 民間給与実態統計調査（第16表 給与階級別給与所得者数・構成割合）", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
];

const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年収600万円の職業" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年収600万円の職業は{OVER.length}職種【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${OVER.length}職種`, l: "平均年収600万円以上（144職種中）" },
              { v: `${OVER_4549_COUNT}職種`, l: "45〜49歳の平均で600万円以上" },
              { v: SHARE_W, l: "600万円以上の職種で働く人の割合" },
              { v: shareAbove(600), l: "年収600万円超の給与所得者の割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）144職種のうち、平均年収が600万円以上の職業は<strong>{OVER.length}職種</strong>です（一般労働者・男女計・当サイト計算）。
            医師・パイロットなどの資格職のほか、管理職、システムコンサルタント、営業職、電気・機械系の技術者、教員が含まれます。
            全年齢の平均では届かない職種でも、45〜49歳に限ると<strong>{OVER_4549_COUNT}職種</strong>が600万円以上になります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代などの超過労働給与は含みません。
            賃金構造基本統計調査の値は{SHOKUSHU_CHECKED}にe-Statで取得し、年収は当サイトで計算しています（ページ作成日：{CHECKED}）。
          </p>
        </div>

        <h2>平均年収600万円以上の{OVER.length}職種</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">職種（統計上の名称）</th>
                <th className={th}>平均年齢</th>
                <th className={th}>労働者数</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {OVER.map((x, i) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{ppl(x.w)}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{f1(x.y)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（男女計・産業計・企業規模10人以上）。労働者数は十人単位の公表値を10倍した推計人数です。
        </p>
        <p className="mb-4">
          {OVER.length}職種で働く人は推計{ppl(W_OVER)}で、144職種全体の{SHARE_W}にあたります。人数の多い順では次の5職種です。
        </p>
        <ul className="mb-10">
          {BIG.map((x) => (
            <li key={x.k}>{x.k}：{ppl(x.w)}（{f1(x.y)}）</li>
          ))}
        </ul>

        <h2>年収600万円にあと少しの職種（550万〜600万円）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className={th}>平均年齢</th>
                <th className={th}>年収（全年齢）</th>
                <th className="p-3 text-right rounded-tr-lg">年収（45〜49歳）</th>
              </tr>
            </thead>
            <tbody>
              {NEAR.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.y)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.y4549 !== null ? f1(x.y4549) : "－"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※45〜49歳は職種 第5表（年齢階級別）から当サイトで計算しています。</p>

        <h2>45〜49歳なら600万円を超える職種</h2>
        <p>
          全年齢の平均では600万円未満でも、45〜49歳の平均では600万円以上になる職種が{OVER_4549_ONLY.length}職種あります（推計労働者数100人以上の区分）。
          経験年数に応じて給与が上がる技術職・事務職が中心です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className={th}>年収（全年齢）</th>
                <th className={th}>年収（45〜49歳）</th>
                <th className="p-3 text-right rounded-tr-lg">45〜49歳の労働者数</th>
              </tr>
            </thead>
            <tbody>
              {OVER_4549_ONLY.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.y)}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{f1(x.y4549 ?? 0)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{ppl(x.w4549)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※職種 第5表（男女計・産業計・企業規模10人以上）。年齢階級別の値は人数が少ないほど振れが大きくなります。</p>

        <h2>20代後半で600万円を超える職種</h2>
        <p className="mb-4">
          25〜29歳の平均で600万円以上になるのは、次の{OVER_2529.length}職種だけです。20代のうちに年収600万円に届く人は、統計上は限られた職種に集中しています。
        </p>
        <ul className="mb-10">
          {OVER_2529.map((x) => (
            <li key={x.k}>{x.k}：{f1(x.y2529 ?? 0)}（25〜29歳の推計労働者数 {ppl(x.w2529)}）</li>
          ))}
        </ul>

        <h2>年収600万円を超える人の割合</h2>
        <p className="mb-4">
          国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者{(NTA_R7.total / 10).toLocaleString("ja-JP")}万人のうち、年収600万円超の人は約{Math.round(OVER600_THOUSAND / 10).toLocaleString("ja-JP")}万人で、{shareAbove(600)}です（当サイト集計）。
          この統計にはパート・アルバイトも含まれるため、正社員だけで見た割合はこれより高くなります。
        </p>
        <p className="mb-10">
          年収600万円の手取りは<Link href="/knowledge/tedori-600man/" className={link}>年収600万円の手取り</Link>で試算しています。144職種すべての順位は<Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link>、1,000万円以上の職業は<Link href="/knowledge/nenshu-1000man-shokugyo/" className={link}>平均年収1000万円を超える職業</Link>に掲載しています。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "職業の平均であり、個人の年収ではない", d: "同じ職種でも年齢・経験・勤務先の規模で年収は大きく異なります。平均が600万円以上の職種でも、全員が600万円を超えるわけではありません。" },
            { t: "残業代は含まない", d: "所定内給与額と賞与から計算しているため、残業の多い職種では実際の年収がこの値より高くなります。" },
            { t: "常用労働者10人以上の事業所が対象", d: "個人事業主・フリーランス・小規模事業所の役員などは含まれません。年間賞与は令和6年1年間の支給額で、前年に在籍していなかった人は少なく出ます。" },
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
          <li><Link href="/knowledge/tedori-600man/" className={link}>年収600万円の手取り</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link></li>
          <li><Link href="/knowledge/nenshu-1000man-shokugyo/" className={link}>平均年収1000万円を超える職業</Link></li>
          <li><Link href="/knowledge/salary-45sai/" className={link}>45歳の平均年収</Link></li>
          <li><Link href="/knowledge/58sai-tenshoku/" className={link}>58歳の転職</Link></li>
          <li><Link href="/knowledge/josei-nenshu-300man/" className={link}>年収300万円の女性の割合</Link></li>
          <li><Link href="/compare/salary-up/" className={link}>転職エージェント各社の年収アップ実績の比較</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">賃金構造基本統計調査は{SHOKUSHU_CHECKED}、国税庁の統計は{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
