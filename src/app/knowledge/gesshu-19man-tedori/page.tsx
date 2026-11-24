import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-19man-tedori/" },
  title: "月給19万円の手取りは約15.5万円【2026年・令和8年の税制で試算】高校卒・20代前半の平均月給と最低賃金との比較",
  description:
    "額面の月給19万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約15.5万円（約81.6%）です。月給19.4万円と19.5万円で手取りが逆転する境目、高校卒・20〜24歳の平均月給、令和8年度の最低賃金との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給19万円の手取りは約15.5万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給19万円の手取りと内訳、若年層の平均月給・最低賃金との比較を試算しています。",
  },
};

const MONTHLY = 190000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const b1 = calcTakeHome(194000 * 12);
const b2 = calcTakeHome(195000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [170000, 180000, 185000, 190000, 194000, 195000, 200000, 210000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表・第3表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月25日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const young = [
  { l: "〜19歳（学歴計・男女計）", v: 208.3 },
  { l: "〜19歳（高校卒・男女計）", v: 209.4 },
  { l: "〜19歳（高校卒・女性）", v: 202.2 },
  { l: "20〜24歳（学歴計・男女計）", v: 242.8 },
  { l: "20〜24歳（高校卒・男女計）", v: 225.2 },
  { l: "20〜24歳（高校卒・女性）", v: 214.6 },
  { l: "20〜24歳（専門学校卒・男女計）", v: 238.4 },
  { l: "20〜24歳（大学卒・男女計）", v: 263.9 },
];

// 厚生労働省「令和8年度 地域別最低賃金 全国一覧」（答申された改定額）
const MW_URL = "https://www.mhlw.go.jp/content/11200000/001753404.pdf";
const MW_TOKYO = 1280;
const MW_OSAKA = 1231;
const MW_AVG = 1177;
const MW_CHECKED = "2026年11月25日";
// 1か月の所定労働時間数＝1日の所定労働時間数×年間総労働日数÷12（厚生労働省 最低賃金に関するセルフチェックシート）
const hourly = (holidays: number) => MONTHLY / ((8 * (365 - holidays)) / 12);
const fmtH = (v: number) => `${(Math.floor(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}円`;
const minHolidays = (mw: number) => {
  for (let h = 100; h < 200; h++) if (hourly(h) >= mw) return h;
  return 200;
};

const faq = [
  {
    q: "月給19万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給19万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。社会保険料が差し引かれる額の大半を占めます。`,
  },
  {
    q: "月給19万円は高校卒の平均と比べて高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、高校卒・男女計で〜19歳209.4千円、20〜24歳225.2千円です。月給19万円は、いずれの平均も下回ります。所定内給与額は残業代を含まないため、残業代込みの月給とは比べ方が異なります。",
  },
  {
    q: "月給19万円は最低賃金を下回ることがありますか？",
    a: `1日8時間勤務の場合、年間休日が${minHolidays(MW_AVG)}日未満では時給換算が最低賃金の全国加重平均${MW_AVG.toLocaleString("ja-JP")}円を下回ります（当サイト計算）。東京都（${MW_TOKYO.toLocaleString("ja-JP")}円）では年間休日${minHolidays(MW_TOKYO)}日以上、大阪府（${MW_OSAKA.toLocaleString("ja-JP")}円）では${minHolidays(MW_OSAKA)}日以上でなければ上回りません。比較に使う月給からは、通勤手当・精皆勤手当・家族手当と残業代を除きます。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-19man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給19万円の手取り"
      h1="月給19万円の手取りは約15.5万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給19万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約15.5万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給19万円は、高校卒（男女計）の〜19歳の平均月給209.4千円を下回る水準です。また、月給19.4万円と19.5万円の間で社会保険料の区分が上がり、手取りが逆転します。
            賞与がない場合の年収は228万円です。以下の内訳・比較表は年収換算（228万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給17万〜21万円の手取り（早見表）"
      compare={[170000, 180000, 190000, 200000, 210000].map((m) => m * 12)}
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
            月給18.5万円・19.5万円・21万円で標準報酬月額の区分が1つずつ上がります。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/tedori-gesshu-17man/", label: "手取り17万円の額面" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/gesshu-32man-tedori/", label: "月収32万円の手取り" },
        { href: "/knowledge/tedori-240man/", label: "年収240万円の手取り" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
      ]}
    >
      <h2>月給19.4万円と19.5万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額18万5千円以上19万5千円未満は標準報酬月額19万円、19万5千円以上21万円未満は20万円です。月給19万円は19万円の区分の中ほどにありますが、月給が5千円上がって19.5万円になると20万円の区分に入ります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給19万円</th>
              <th className="p-3 text-right">月給19.4万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給19.5万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.grade)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.social / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen((x.incomeTax + x.residentTax) / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.netMonthly)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        月給19.5万円は月給19.4万円より社会保険料が月{yen((b2.social - b1.social) / 12)}増え、手取りは月{yen(b1.netMonthly - b2.netMonthly)}少なくなります。19.4万円の手取りを上回るのは月給19.6万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が19万円でも、4月〜6月の残業代や通勤手当で平均が19.5万円以上になると20万円の区分になります。
        なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月給19万円は高校卒・20代前半の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を年齢・学歴別に公表しています。10代と20代前半の値を並べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">区分</th>
              <th className="p-3 text-right">所定内給与額</th>
              <th className="p-3 text-right rounded-tr-lg">月給19万円との差</th>
            </tr>
          </thead>
          <tbody>
            {young.map((x) => (
              <tr key={x.l} className="border-b border-gray-100">
                <td className="p-3">{x.l}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.v.toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{(x.v - 190).toFixed(1)}千円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（学歴計）、
        <a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同 第3表 学歴、性、年齢階級別賃金</a>（令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        表のすべての区分で平均が月給19万円を上回り、最も近い高校卒・女性の〜19歳（202.2千円）でも1.2万円の差があります。20〜24歳では、高校卒（男女計）で3.5万円、大学卒で7.4万円の差です。
        月給19万円は、高校卒の10代の平均と比べても低めの水準といえます。ただし、所定内給与額には役職手当や住宅手当などの諸手当が含まれるため、基本給だけを比べると差は小さくなる場合があります。
        20代前半の転職で月給を上げたい場合は<Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒向けの転職エージェント</Link>、年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>

      <h2>月給19万円を時給に換算すると（最低賃金との比較）</h2>
      <p>
        月給制の場合、最低賃金を満たしているかは「月給÷1か月の所定労働時間数」で求めた時給で判断し、1か月の所定労働時間数は「1日の所定労働時間数×年間総労働日数÷12」で計算します（
        <a href="https://www.mhlw.go.jp/content/11200000/001753408.xlsx" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金に関するセルフチェックシート」</a>）。
        1日8時間勤務・2026年（365日）で計算すると、年間休日105日で{fmtH(hourly(105))}、120日で{fmtH(hourly(120))}、125日で{fmtH(hourly(125))}です（当サイト計算・小数第2位以下切り捨て）。
      </p>
      <p className="mb-10">
        令和8年度の最低賃金は東京都{MW_TOKYO.toLocaleString("ja-JP")}円、大阪府{MW_OSAKA.toLocaleString("ja-JP")}円、全国加重平均{MW_AVG.toLocaleString("ja-JP")}円です（
        <a href={MW_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和8年度 地域別最低賃金 全国一覧」</a>：{MW_CHECKED}確認）。
        1日8時間勤務で月給19万円が最低賃金以上になるのは、全国加重平均で年間休日{minHolidays(MW_AVG)}日以上、大阪府で{minHolidays(MW_OSAKA)}日以上、東京都で{minHolidays(MW_TOKYO)}日以上の場合です（当サイト計算）。
        東京都や大阪府で1日8時間・年間休日120日前後の求人が月給19万円の場合、最低賃金を下回る可能性があります。最低賃金と比べる月給からは、臨時の賃金・賞与・残業代・精皆勤手当・通勤手当・家族手当を除きます（
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/chingin/newpage_43898.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金の対象となる賃金」</a>）。
        求人票の金額に固定残業代や手当が含まれていないかも確認してください。
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
              <td className="p-3">2年目の6月以降（前年も月給19万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、高校や大学を卒業して就職した場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
      </p>
    </TakeHomePage>
  );
}
