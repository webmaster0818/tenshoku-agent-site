import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-21man-tedori/" },
  title: "月給21万円の手取りは約16.9万円【2026年・令和8年の税制で試算】月給20.9万円より少なくなる理由と時給換算",
  description:
    "額面の月給21万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約16.9万円（約80.6%）です。月給20.9万円より手取りが少なくなる標準報酬月額の境目と、令和8年度の地域別最低賃金との比較（時給換算）も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給21万円の手取りは約16.9万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給21万円の手取りと内訳、最低賃金との比較を試算しています。",
  },
};

const MONTHLY = 210000;
const BELOW = 209000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const b = calcTakeHome(BELOW * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [190000, 200000, 209000, 210000, 220000, 230000, 250000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和8年度 地域別最低賃金 全国一覧」（答申された改定額）
const MW_TOKYO = 1280;
const MW_OSAKA = 1231;
const MW_AVG = 1177;
const MW_CHECKED = "2026年11月22日";
// 1か月の所定労働時間数＝1日の所定労働時間数×年間総労働日数÷12（厚生労働省 最低賃金に関するセルフチェックシート）
const hourly = (holidays: number, hours = 8) => MONTHLY / ((hours * (365 - holidays)) / 12);
const holidayRows = [105, 110, 115, 119, 120, 125].map((h) => ({ h, v: hourly(h) }));
const fmtH = (v: number) => `${(Math.floor(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}円`;

const faq = [
  {
    q: "月給21万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給21万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給20.9万円のほうが手取りが多いのはなぜですか？",
    a: `健康保険と厚生年金の保険料は「標準報酬月額」で決まり、報酬月額21万円以上23万円未満は標準報酬月額22万円、19万5千円以上21万円未満は20万円の区分です（健康保険法 第40条）。月給${yen(MONTHLY)}はちょうど22万円の区分の下限にあたるため、月給${yen(BELOW)}より社会保険料が月${yen((r.social - b.social) / 12)}多くなり、手取りは月${yen(b.netMonthly - r.netMonthly)}少なくなります（当サイト試算）。`,
  },
  {
    q: "月給21万円は最低賃金を下回ることがありますか？",
    a: `月給制の場合、月給を1か月の所定労働時間数で割った額を最低賃金と比べます（厚生労働省 セルフチェックシート）。1日8時間勤務で年間休日が105日の場合、時給換算は${fmtH(hourly(105))}で、東京都の令和8年度の最低賃金${MW_TOKYO.toLocaleString("ja-JP")}円を下回ります（当サイト計算）。ただし比較に使う月給からは、通勤手当・精皆勤手当・家族手当と残業代を除きます。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-21man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給21万円の手取り"
      h1="月給21万円の手取りは約16.9万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給21万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約16.9万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給21万円は社会保険料の区分（標準報酬月額22万円）の下限にあたるため、<strong>月給20.9万円より手取りが月{yen(b.netMonthly - r.netMonthly)}少なくなります</strong>。
            賞与がない場合の年収は252万円です。以下の内訳・比較表は年収換算（252万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給19万〜25万円の手取り（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月給</th>
                  <th className="p-3 text-right">社会保険料（月額）</th>
                  <th className="p-3 text-right">手取り（月額）</th>
                  <th className="p-3 text-right rounded-tr-lg">手取りの割合</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{pct(x.r.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月給ごとの社会保険料と手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月給20.9万円と21万円の間で社会保険料が月{yen((r.social - b.social) / 12)}増えるため、手取りが逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-17man/", label: "手取り17万円の額面" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/annual-holidays-105/", label: "年間休日105日の水準" },
      ]}
    >
      <h2>月給21万円で社会保険料が上がる仕組み</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額19万5千円以上21万円未満は標準報酬月額20万円、21万円以上23万円未満は22万円です。月給21万円は22万円の区分のちょうど下限にあたります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給20.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給21万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">200,000円</td>
              <td className="p-3 text-right whitespace-nowrap">220,000円</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(b.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.social / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((b.incomeTax + b.residentTax) / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((r.incomeTax + r.residentTax) / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(b.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が21万円未満でも、4月〜6月の残業代や通勤手当で平均が21万円以上になると22万円の区分になります。
        なお、厚生年金保険料は標準報酬月額に比例し、将来の年金額の計算にも使われます。手取りだけで比べられない点にご注意ください。
      </p>

      <h2>月給21万円を時給に換算すると（最低賃金との比較）</h2>
      <p>
        月給制の場合、最低賃金を満たしているかは「月給÷1か月の所定労働時間数」で求めた時給で判断します。1か月の所定労働時間数は「1日の所定労働時間数×年間総労働日数÷12」で計算します（
        <a href="https://www.mhlw.go.jp/content/11200000/001753408.xlsx" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金に関するセルフチェックシート」</a>：{MW_CHECKED}確認）。
        1日8時間勤務・2026年（365日）で、月給21万円を年間休日の日数ごとに時給換算すると次のとおりです。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年間休日</th>
              <th className="p-3 text-right">1か月の所定労働時間</th>
              <th className="p-3 text-right">時給換算</th>
              <th className="p-3 text-right rounded-tr-lg">東京都（{MW_TOKYO.toLocaleString("ja-JP")}円）</th>
            </tr>
          </thead>
          <tbody>
            {holidayRows.map((x) => (
              <tr key={x.h} className="border-b border-gray-100">
                <td className="p-3">{x.h}日</td>
                <td className="p-3 text-right whitespace-nowrap">{((8 * (365 - x.h)) / 12).toFixed(1)}時間</td>
                <td className="p-3 text-right whitespace-nowrap">{fmtH(x.v)}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.v >= MW_TOKYO ? "上回る" : "下回る"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※最低賃金は厚生労働省「令和8年度 地域別最低賃金 全国一覧」の答申された改定額（東京都は令和8年10月1日発効）。時給換算は小数第2位以下を切り捨てています（当サイト計算）。
      </p>
      <p>
        東京都（{MW_TOKYO.toLocaleString("ja-JP")}円）では、1日8時間勤務の場合、<strong>年間休日119日以上</strong>でなければ月給21万円が最低賃金を下回ります（当サイト計算）。
        大阪府（{MW_OSAKA.toLocaleString("ja-JP")}円）では年間休日110日で{fmtH(hourly(110))}となり上回ります。全国加重平均（{MW_AVG.toLocaleString("ja-JP")}円）は、年間休日105日の{fmtH(hourly(105))}でも上回ります。
      </p>
      <p className="mb-10">
        最低賃金と比べる月給からは、臨時の賃金・賞与・残業代・休日や深夜の割増賃金・精皆勤手当・通勤手当・家族手当を除きます（
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/chingin/newpage_43898.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「最低賃金の対象となる賃金」</a>
        、<a href="https://www.mhlw.go.jp/content/11200000/001753404.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「令和8年度 地域別最低賃金 全国一覧」</a>：{MW_CHECKED}確認）。
        求人票の「月給21万円」に固定残業代や手当が含まれている場合は、それらを除いた金額で判断します。年間休日の水準は<Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日</Link>・<Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日</Link>のページで解説しています。
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
              <td className="p-3">2年目の6月以降（前年も月給21万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、額面が同じでも2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
