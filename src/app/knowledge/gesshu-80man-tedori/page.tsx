import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, marginalRate, pct, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-80man-tedori/" },
  title: "月収80万円の手取りは約58.4万円【2026年・令和8年の税制で試算】厚生年金は頭打ち・月給80万円を超える職種",
  description:
    "額面の月収80万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約58.4万円（約73.1%）です。厚生年金保険料が頭打ちになる仕組み、手取りが逆転する境目、平均月給が80万円を超える職種も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収80万円の手取りは約58.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収80万円の手取りと内訳、保険料の上限、平均月給が80万円を超える職種を試算・整理しています。",
  },
};

const MONTHLY = 800000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const firstYear = (r.net + r.residentTax) / 12;
const a1 = calcTakeHome(769000 * 12);
const a2 = calcTakeHome(770000 * 12);
const c1 = calcTakeHome(809000 * 12);
const c2 = calcTakeHome(810000 * 12);
const capRows = [600000, 650000, 700000, 800000, 900000, 1000000].map((m) => ({ m, r: calcTakeHome(m * 12) }));
const table = [700000, 750000, 769000, 770000, 800000, 809000, 810000, 850000, 900000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 職種別の所定内給与額（令和7年 賃金構造基本統計調査・職種第1表／第5表 45〜49歳・千円）
const over = SHOKUSHU.filter((x) => x.t[0] >= 700).sort((a, b) => b.t[0] - a.t[0]);
const over4549 = SHOKUSHU.filter((x) => x.a4549 && x.a4549[0] >= 700).sort((a, b) => (b.a4549?.[0] ?? 0) - (a.a4549?.[0] ?? 0));
const n80 = SHOKUSHU.filter((x) => x.t[0] >= 800).length;
const n80b = SHOKUSHU.filter((x) => x.a4549 && x.a4549[0] >= 800).length;

const faq = [
  {
    q: "月収80万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収80万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収80万円の所得税率は何%ですか？",
    a: `賞与なしの月収80万円（年収960万円）の場合、所得税の課税所得は${yen(r.taxable)}で、速算表の税率は${marginalRate(r.taxable)}%の区分（課税所得330万円以上695万円未満）です（国税庁 No.2260）。当サイトの試算では、月収90.2万円から課税所得が695万円以上になり、23%の区分に入ります。`,
  },
  {
    q: "月収80万円を平均で超える職種はありますか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種別の所定内給与額（残業代・賞与を含まない月額・全年齢平均）で80万円を超えるのは、144職種のうち${n80}職種（航空機操縦士・医師・歯科医師）です。45〜49歳に限ると${n80b}職種になります（当サイトで集計）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-80man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収80万円の手取り"
      h1="月収80万円の手取りは約58.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収80万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約58.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収80万円では<strong>厚生年金保険料が上限（標準報酬月額65万円）で頭打ち</strong>になっている一方、健康保険料は標準報酬月額79万円で計算され、月収に応じて増え続けます。
            賞与がない場合の年収は960万円です。以下の内訳・比較表は年収換算（960万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収70万〜90万円の手取り（早見表）"
      compare={[700000, 750000, 800000, 850000, 900000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">標準報酬月額（健康保険）</th>
                  <th className="p-3 text-right">社会保険料（月額）</th>
                  <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{(x.r.grade / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの健康保険の標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月収76.9万円と77万円、80.9万円と81万円の間で健康保険の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-60man-tedori/", label: "月収60万円の手取り" },
        { href: "/knowledge/gesshu-100man-tedori/", label: "月収100万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-1600man/", label: "年収1600万円の手取り" },
        { href: "/knowledge/tedori-gesshu-60man/", label: "手取り60万円の額面" },
        { href: "/knowledge/shokugyo-nenshu-ranking/", label: "職業別の年収ランキング" },
      ]}
    >
      <h2>厚生年金保険料は頭打ち、健康保険料は増え続ける</h2>
      <p>
        厚生年金の標準報酬月額は65万円が上限で、報酬月額63.5万円以上はすべて65万円で計算します（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>）。
        一方、健康保険の標準報酬月額は139万円まで区分が続くため（健康保険法 第40条）、月収80万円では健康保険料だけが月収に応じて上がります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
              <th className="p-3 text-right">健康保険料（月額）</th>
              <th className="p-3 text-right">厚生年金保険料（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">社会保険料の割合</th>
            </tr>
          </thead>
          <tbody>
            {capRows.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.health / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.pension / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{pct(x.r.social / x.r.annual)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        厚生年金保険料は月収65万円以上で月{yen(r.pension / 12)}のまま変わらず、額面に対する社会保険料の割合は月収が上がるほど下がります（当サイト試算・40歳未満）。
        ただし、将来の老齢厚生年金も上限の標準報酬月額65万円で計算されるため、65万円を超える部分の給与は年金額に反映されません。
      </p>
      <h3>月収76.9万円→77万円、80.9万円→81万円で手取りが逆転する</h3>
      <p className="mb-10">
        健康保険では、報酬月額77万円以上81万円未満が標準報酬月額79万円、81万円以上85.5万円未満が83万円の区分です（健康保険法 第40条）。
        月収77万円は月収76.9万円より手取りが月{yen(a1.netMonthly - a2.netMonthly)}、月収81万円は80.9万円より月{yen(c1.netMonthly - c2.netMonthly)}少なくなります（当サイト試算）。
        月収80万円は79万円の区分の上のほうにあり、残業代や通勤手当を含めた4月〜6月の報酬の平均が81万円以上になると、9月から83万円の区分で計算されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
      </p>

      <h2>平均の月給が70万円を超える職種（賃金構造基本統計調査）</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別集計（144職種）で、所定内給与額（残業代・賞与を含まない6月分の月額）の平均が70万円以上の職種を、全年齢と45〜49歳に分けて並べました。
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（全年齢）</th>
                <th className="p-3 text-right rounded-tr-lg">所定内給与額</th>
              </tr>
            </thead>
            <tbody>
              {over.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${x.t[0] >= 800 ? "bg-teal/10 font-bold text-navy" : ""}`}>{x.t[0].toFixed(1)}千円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（45〜49歳）</th>
                <th className="p-3 text-right rounded-tr-lg">所定内給与額</th>
              </tr>
            </thead>
            <tbody>
              {over4549.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${(x.a4549?.[0] ?? 0) >= 800 ? "bg-teal/10 font-bold text-navy" : ""}`}>{(x.a4549?.[0] ?? 0).toFixed(1)}千円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：
        {SHOKUSHU_SOURCES.map((s, i) => (
          <span key={s.url}>
            {i > 0 && "、"}
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{s.label}</a>
          </span>
        ))}
        （一般労働者・産業計・企業規模10人以上・男女計）。{SHOKUSHU_CHECKED}にe-Statで取得し、当サイトで並べ替えています。80万円以上の欄を色付けしています。
      </p>
      <p className="mb-10">
        全年齢の平均で月80万円を超えるのは{n80}職種で、管理的職業従事者（会社の課長相当以上の管理職や役員など）の平均は591.0千円です。45〜49歳に限っても80万円を超えるのは{n80b}職種にとどまります。
        所定内給与額は残業代や賞与を含まないため、賞与の多い職種では年収で見た順位が変わります。年収で比べた順位は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>にまとめています。
        月収80万円クラスの求人を扱う転職サービスは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス転職エージェントの比較</Link>をご覧ください。
      </p>

      <h3>入社1年目と2年目の手取りの違い</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">時期</th>
              <th className="p-3 text-right">住民税（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額の目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">前年の所得がない場合</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">前年も月収80万円の場合（6月以降）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれます（総務省 個人住民税）。前年の所得が低い状態から月収80万円の仕事に転職した場合、翌年6月から住民税が月{yen(r.residentTax / 12)}程度に増え、手取りが減ります。
      </p>
    </TakeHomePage>
  );
}
