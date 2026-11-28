import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-16man-tedori/" },
  title: "月給16万円の手取りは約13.2万円【2026年・令和8年の税制で試算】1日8時間・年間休日125日なら全都道府県で最低賃金を下回る計算",
  description:
    "額面の月給16万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約13.2万円（約82.7%）です。1日8時間・年間休日125日以下では令和8年度の最低賃金（最も低い宮崎県1,085円）を下回る計算になる点と、手取りの境目を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給16万円の手取りは約13.2万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給16万円の手取りと内訳、最低賃金との比較を試算しています。",
  },
};

const MONTHLY = 160000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const b1 = calcTakeHome(154000 * 12);
const b2 = calcTakeHome(155000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [140000, 150000, 154000, 155000, 160000, 164000, 165000, 170000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和8年度 地域別最低賃金 全国一覧」（改定後の額・発効日は都道府県ごとに異なる）
const MW_URL = "https://www.mhlw.go.jp/content/11200000/001753404.pdf";
const MW_CHECKED = "2026年11月29日";
const MW_MIN = 1085; // 宮崎県（令和8年10月24日発効）
const MW_TOKYO = 1280;
const MW_OSAKA = 1231;
const MW_AVG = 1177;
// 1か月の所定労働時間数＝1日の所定労働時間数×年間総労働日数÷12（厚生労働省 最低賃金に関するセルフチェックシート）
const hourly = (hours: number, holidays: number) => MONTHLY / ((hours * (365 - holidays)) / 12);
const fmtH = (v: number) => `${(Math.floor(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}円`;
const maxHours = (mw: number) => (Math.floor((MONTHLY / mw) * 10) / 10).toFixed(1);
const cases = [
  { h: 8, d: 105 },
  { h: 8, d: 120 },
  { h: 8, d: 125 },
  { h: 7.5, d: 120 },
  { h: 7, d: 120 },
];
const minHol = (mw: number) => {
  for (let h = 100; h < 250; h++) if (hourly(8, h) >= mw) return h;
  return 250;
};
const mark = (v: number, mw: number) => (v >= mw ? "上回る" : "下回る");

const faq = [
  {
    q: "月給16万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給16万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。差し引かれる額の大半は社会保険料です。`,
  },
  {
    q: "月給16万円は最低賃金を下回りますか？",
    a: `1日8時間勤務の場合、年間休日が125日でも時給換算は${fmtH(hourly(8, 125))}で、令和8年度の地域別最低賃金で最も低い宮崎県（${MW_MIN.toLocaleString("ja-JP")}円）を下回ります（当サイト計算）。月給16万円が最低賃金以上になるのは、1か月の所定労働時間が宮崎県で${maxHours(MW_MIN)}時間以下、東京都で${maxHours(MW_TOKYO)}時間以下の場合です。`,
  },
  {
    q: "月給15.4万円と15.5万円で手取りが逆転するのはなぜですか？",
    a: `報酬月額14万6千円以上15万5千円未満は標準報酬月額15万円、15万5千円以上16万5千円未満は16万円の区分です（健康保険法 第40条）。月給15.5万円になると社会保険料が月${yen((b2.social - b1.social) / 12)}増え、月給15.4万円より手取りが月${yen(b1.netMonthly - b2.netMonthly)}少なくなります（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-16man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給16万円の手取り"
      h1="月給16万円の手取りは約13.2万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給16万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約13.2万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            <strong>1日8時間・年間休日125日以下で月給16万円の場合、時給に換算すると全都道府県で令和8年度の最低賃金を下回る計算になります</strong>（当サイト計算）。求人の月給が16万円のときは、1日の所定労働時間と年間休日を確認してください。
            賞与がない場合の年収は192万円です。以下の内訳・比較表は年収換算（192万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給14万〜18万円の手取り（早見表）"
      compare={[140000, 150000, 160000, 170000, 180000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月給</th>
                  <th className="p-3 text-right">標準報酬月額</th>
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
            1つ目の表は年収換算の比較、2つ目の表は額面の月給ごとの標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月給15.5万円と16.5万円で標準報酬月額の区分が1つずつ上がり、その直前の金額より手取りが少なくなります。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-19man-tedori/", label: "月給19万円の手取り" },
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/tedori-14man-hitorigurashi/", label: "手取り14万円の一人暮らし" },
        { href: "/knowledge/tedori-gesshu-17man/", label: "手取り17万円の額面" },
        { href: "/knowledge/tedori-240man/", label: "年収240万円の手取り" },
        { href: "/knowledge/gesshu-23man-tedori/", label: "月給23万円の手取り" },
        { href: "/knowledge/gesshu-36man-tedori/", label: "月収36万円の手取り" },
      ]}
    >
      <h2>月給16万円を時給に換算すると（最低賃金との比較）</h2>
      <p>
        月給制の場合、最低賃金を満たしているかは「月給÷1か月の所定労働時間数」で求めた時給で判断し、1か月の所定労働時間数は「1日の所定労働時間数×年間総労働日数÷12」で計算します（
        <a href="https://www.mhlw.go.jp/content/11200000/001753408.xlsx" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金に関するセルフチェックシート」</a>）。
        2026年（365日）で、1日の所定労働時間と年間休日の組み合わせごとに計算しました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">1日の所定労働時間・年間休日</th>
              <th className="p-3 text-right">時給換算</th>
              <th className="p-3 text-right">宮崎県 {MW_MIN.toLocaleString("ja-JP")}円</th>
              <th className="p-3 text-right">全国加重平均 {MW_AVG.toLocaleString("ja-JP")}円</th>
              <th className="p-3 text-right rounded-tr-lg">東京都 {MW_TOKYO.toLocaleString("ja-JP")}円</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => {
              const v = hourly(c.h, c.d);
              return (
                <tr key={`${c.h}-${c.d}`} className="border-b border-gray-100">
                  <td className="p-3">{c.h}時間・{c.d}日</td>
                  <td className="p-3 text-right whitespace-nowrap">{fmtH(v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{mark(v, MW_MIN)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{mark(v, MW_AVG)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{mark(v, MW_TOKYO)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※最低賃金は<a href={MW_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和8年度 地域別最低賃金 全国一覧」</a>の改定後の額です（{MW_CHECKED}確認）。発効日は都道府県ごとに異なり、宮崎県は令和8年10月24日、東京都は令和8年10月1日です。時給換算は当サイト計算（小数第2位以下切り捨て）。
      </p>
      <p className="mb-10">
        令和8年度の地域別最低賃金は、最も低い宮崎県が{MW_MIN.toLocaleString("ja-JP")}円、大阪府が{MW_OSAKA.toLocaleString("ja-JP")}円、最も高い東京都が{MW_TOKYO.toLocaleString("ja-JP")}円です。
        1日8時間勤務では、年間休日125日でも時給換算が{fmtH(hourly(8, 125))}にとどまり、すべての都道府県で最低賃金を下回ります。1日8時間勤務で宮崎県の最低賃金以上になるのは、年間休日{minHol(MW_MIN)}日以上の場合です。月給16万円が最低賃金以上になるのは、1か月の所定労働時間が宮崎県で{maxHours(MW_MIN)}時間以下、全国加重平均で{maxHours(MW_AVG)}時間以下、東京都で{maxHours(MW_TOKYO)}時間以下の場合です（当サイト計算）。
        最低賃金と比べる月給からは、臨時の賃金・賞与・残業代・精皆勤手当・通勤手当・家族手当を除きます（
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/chingin/newpage_43898.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金の対象となる賃金」</a>）。
        求人票の月給16万円に固定残業代や手当が含まれている場合は、それらを除いた金額で計算すると時給はさらに下がります。短時間勤務の求人でなければ、労働条件通知書で所定労働時間を確認することをおすすめします。
      </p>

      <h2>月給15.4万円と15.5万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額14万6千円以上15万5千円未満は標準報酬月額15万円、15万5千円以上16万5千円未満は16万円です。月給16万円は16万円の区分の中ほどにあります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給15.4万円</th>
              <th className="p-3 text-right">月給15.5万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給16万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              {[b1, b2, r].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.grade)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              {[b1, b2, r].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.social / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              {[b1, b2, r].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen((x.incomeTax + x.residentTax) / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              {[b1, b2, r].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.netMonthly)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれます。なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
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
              <td className="p-3">入社1年目（前年の所得なし）</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">2年目の6月以降（前年も月給16万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれます（総務省 個人住民税）。月給を上げる転職を考える場合は、<Link href="/type/inexperienced/" className="text-teal font-bold hover:underline">未経験歓迎の求人に強い転職エージェント</Link>や
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>も参考にしてください。
      </p>
    </TakeHomePage>
  );
}
