import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1800man/" },
  title: "年収1800万円の手取りは約1,187.9万円・月約98.9万円【2026年・令和8年の税制で試算】",
  description:
    "年収1800万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約1,187.9万円（約66.0%）、月約98.9万円です。健康保険料が上限に達する年収約1,626万円、所得税率40%になる年収約2,224万円の目安も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1800万円の手取りは約1,187.9万円・月約98.9万円【2026年】",
    description: "令和8年の税制・保険料率で年収1800万円の手取りを試算し、健康保険料の上限と所得税率40%の境目を解説しています。",
  },
};

const r = calcTakeHome(18000000);
const o = calcTakeHome(18000000, true);
const steps = [15000000, 16000000, 17000000, 18000000, 19000000, 20000000].map((y) => calcTakeHome(y));
const r40 = calcTakeHome(22240000);

const faq = [
  {
    q: "年収1800万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与の比率が高い給与体系では、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収1800万円の所得税率は何%ですか？",
    a: `33%です。所得税の速算表の「1,800万円」は年収ではなく課税所得の区分で、年収1800万円の課税所得は${r.taxable.toLocaleString("ja-JP")}円のため、900万円以上1,800万円未満（税率${marginalRate(r.taxable)}%）に当たります（国税庁 No.2260・当サイト試算）。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}、住民税は年${yen(r.residentTax)}です。`,
  },
  {
    q: "年収1800万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者のうち、年収1,500万円超2,000万円以下は${shareBand(11)}、1,500万円を超える人は${shareAbove(1500)}です（当サイトで構成割合を計算）。`,
  },
  {
    q: "年収1800万円から100万円上がると手取りはいくら増えますか？",
    a: `この試算の前提では、年収1800万円から1900万円に上がると手取りは${man(steps[4].net - steps[3].net)}増えます。健康保険・厚生年金の保険料がいずれも上限に達しているため、増えた分にかかるのは所得税・住民税と雇用保険料だけです（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1800man/"
      annual={18000000}
      crumb="年収1800万円の手取り"
      h1="年収1800万円の手取りは約1,187.9万円・月約98.9万円【2026年】"
      lead={
        <>
          <p>
            年収1800万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(18000000 - r.net)}が税金と社会保険料として差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。年収1800万円では健康保険・厚生年金の保険料がいずれも上限で計算されるため、社会保険料の割合は{pct(r.social / r.annual)}にとどまります。
          </p>
        </>
      }
      compareHeading="年収1500万〜2000万円の手取り比較"
      compare={[15000000, 16000000, 17000000, 18000000, 19000000, 20000000]}
      compareNote={
        <p>
          年収100万円ごとの手取りの増加は、1500万→1600万円が{man(steps[1].net - steps[0].net)}、1600万→1700万円が{man(steps[2].net - steps[1].net)}、
          1700万→1800万円が{man(steps[3].net - steps[2].net)}、1800万→1900万円が{man(steps[4].net - steps[3].net)}です（当サイト試算）。
          健康保険料が上限に達した後は、100万円あたりの手取りの増加が一定になります。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1500man/", label: "年収1500万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-1200man/", label: "年収1200万円の手取り" },
        { href: "/knowledge/gesshu-100man-tedori/", label: "月収100万円の手取り" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/bizreach/", label: "ビズリーチの評判と公表データ" },
      ]}
    >
      <h2>年収約1,626万円で健康保険料も上限に達する</h2>
      <p>
        健康保険の標準報酬月額は、報酬月額135万5千円以上が上限の139万円です（健康保険法 第40条）。年収を12等分した月給で計算すると、<strong>年収約1,626万円</strong>（月約135.5万円）でこの上限に達します（当サイト試算）。
        厚生年金の標準報酬月額は上限が65万円のため（日本年金機構 厚生年金保険料額表）、年収約762万円（月63.5万円）ですでに上限に達しています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収</th>
              <th className="p-3 text-right">健康保険の標準報酬月額</th>
              <th className="p-3 text-right">健康保険料（年額）</th>
              <th className="p-3 text-right">厚生年金保険料（年額）</th>
              <th className="p-3 text-right rounded-tr-lg">100万円増の手取り増加</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr key={s.annual} className={`border-b border-gray-100 ${s.annual === 18000000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(s.annual / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{(s.grade / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(s.health)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(s.pension)}</td>
                <td className="p-3 text-right whitespace-nowrap">{i === 0 ? "－" : man(s.net - steps[i - 1].net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        健康保険料（子ども・子育て支援金を含む・40歳未満）は、年収約1,626万円以上では年{yen(r.health)}で変わりません。保険料が上限で計算される一方、傷病手当金も標準報酬月額をもとに計算されるため、上限を超える部分の給与は給付額にも反映されない点にご注意ください。
      </p>

      <h2>速算表の「1,800万円」は年収ではなく課税所得</h2>
      <p>
        所得税の速算表では、課税所得900万円以上1,800万円未満に33%、1,800万円以上4,000万円未満に40%の税率がかかります（国税庁 No.2260）。この「1,800万円」は年収ではなく、給与所得控除・社会保険料控除・基礎控除などを差し引いた後の課税所得です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収</th>
              <th className="p-3 text-right">課税所得（所得税）</th>
              <th className="p-3 text-right">所得税率の区分</th>
              <th className="p-3 text-right rounded-tr-lg">手取りの割合</th>
            </tr>
          </thead>
          <tbody>
            {[r, steps[5], r40].map((s) => (
              <tr key={s.annual} className={`border-b border-gray-100 ${s.annual === 18000000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(s.annual / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(s.taxable)}</td>
                <td className="p-3 text-right whitespace-nowrap">{marginalRate(s.taxable)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{pct(s.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        年収1800万円の課税所得は{yen(r.taxable)}で、33%の区分です。この試算の前提（独身・40歳未満・賞与なし）で年収を1万円刻みで計算すると、<strong>年収約2,224万円で課税所得が1,800万円に達し</strong>、それを超える部分に40%がかかります（当サイト試算）。
        また、給与の年間収入金額が2,000万円を超えると年末調整の対象外となり、確定申告が必要です（国税庁 No.1900）。
        年収1800万円の方は合計所得金額が1,000万円を超えるため、配偶者控除・配偶者特別控除は受けられません（国税庁 No.1191）。家族構成や賞与の比率によって手取りは変わるため、上の試算は独身の場合の目安としてご覧ください。
        年収1800万円クラスの求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
      <p className="text-xs text-text-muted mb-4">
        出典（このページで追加した資料・{"2026年11月23日"}確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1900 給与所得者で確定申告が必要な人</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1191 配偶者控除</a>／
        <a href="https://www.kyoukaikenpo.or.jp/g3/sb3040/r139/" target="_blank" rel="noopener noreferrer" className="hover:underline">協会けんぽ 傷病手当金</a>
      </p>
    </TakeHomePage>
  );
}
