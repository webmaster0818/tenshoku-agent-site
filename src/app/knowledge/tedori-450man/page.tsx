import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-450man/" },
  title: "年収450万円の手取りは約354.7万円・月約29.5万円【2026年・令和8年の税制で試算】",
  description:
    "年収450万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約354.7万円（約78.8%）、月約29.5万円です。賞与がある場合の月の手取り、令和7年の制度との差、国税庁統計での位置づけ、年収400万〜550万円の比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収450万円の手取りは約354.7万円・月約29.5万円【2026年】",
    description: "令和8年の税制・保険料率で年収450万円の手取りを試算し、賞与の有無による月額の違いと内訳を掲載しています。",
  },
};

const r = calcTakeHome(4500000);
const o = calcTakeHome(4500000, true);
const steps = [4000000, 4500000, 5000000, 5500000].map((y) => calcTakeHome(y));

// 賞与ありの例：月給30万円×12か月＋賞与90万円（年2回・45万円ずつ）
const bonusMonthly = 300000;
const bonusEach = 450000;
const hRate = 0.0985 / 2 + 0.0023 / 2;
const monthlySocial = Math.round(300000 * hRate) + Math.round(300000 * 0.0915) + Math.round(bonusMonthly * 0.005);
const bonusSocial = Math.round(bonusEach * hRate) + Math.round(bonusEach * 0.0915) + Math.round(bonusEach * 0.005);

const faq = [
  {
    q: "年収450万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある場合は月給が下がるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収450万円は平均より高いですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者の平均給与は${NTA_R7.average}で、年収450万円はこれを下回ります。給与階級別では400万円超500万円以下の人が${shareBand(4)}を占め、300万円超400万円以下（${shareBand(3)}）に次いで2番目に多い階級です（同調査 第16表から当サイトで集計）。`,
  },
  {
    q: "2026年（令和8年）の税制改正で年収450万円の手取りは増えますか？",
    a: "増えます。年収450万円の合計所得金額は316万円で、所得税の基礎控除は令和7年分の88万円から令和8年分は104万円になります。当サイトの試算では、所得税は年約0.8万円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
  {
    q: "年収450万円の住民税はいくらですか？",
    a: `同じ年収が前年も続いていた場合、住民税は年${yen(r.residentTax)}（月約${Math.round(r.residentTax / 12 / 100) / 100}万円）です。所得割10%に、均等割4,000円と森林環境税1,000円を加えた額です（総務省の個人住民税の案内による当サイト試算）。住民税は前年の所得で決まるため、転職1年目は前職の年収をもとに課税されます。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-450man/"
      annual={4500000}
      crumb="年収450万円の手取り"
      h1="年収450万円の手取りは約354.7万円・月約29.5万円【2026年】"
      lead={
        <>
          <p>
            年収450万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            介護保険料がかかる40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残り、
            {man(4500000 - r.net)}が社会保険料（{man(r.social)}）と所得税・住民税（{man(r.incomeTax + r.residentTax)}）として差し引かれます。
          </p>
          <p className="mt-2">
            差し引かれる額の約{Math.round((r.social / (4500000 - r.net)) * 100)}%は社会保険料です。この年収帯では、税金よりも社会保険料の負担が大きくなります。
          </p>
        </>
      }
      compareHeading="年収400万〜550万円の手取り比較"
      compare={[4000000, 4500000, 5000000, 5500000]}
      compareNote={
        <p>
          年収が50万円増えるごとに、手取りは{steps.slice(1).map((s, i) => man(s.net - steps[i].net)).join("・")}増えます（400万→450万円から500万→550万円の順・当サイト試算）。
          増えた50万円のうち手元に残るのは約7〜8割です。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/salary-30sai/", label: "30歳の平均年収" },
        { href: "/knowledge/tedori-3000man/", label: "年収3000万円の手取り" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/company/", label: "企業別の平均年収（有価証券報告書）" },
      ]}
    >
      <h2>賞与がある場合の月の手取り（年収450万円の例）</h2>
      <p>
        上の試算は年収を12等分した月給（月37.5万円）で計算しています。実際には賞与を含めて年収450万円となる給与体系が多く、その場合は毎月の手取りが少なくなります。
        月給30万円・賞与年90万円（45万円×2回）の例で、社会保険料を差し引いた額は次のとおりです（40歳未満・当サイト試算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目</th>
              <th className="p-3 text-right">毎月の給与（30万円）</th>
              <th className="p-3 text-right rounded-tr-lg">賞与1回（45万円）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料（健康保険・厚生年金・雇用保険）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(monthlySocial)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(bonusSocial)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">社会保険料を差し引いた額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(300000 - monthlySocial)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(bonusEach - bonusSocial)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※月給30万円の標準報酬月額は30万円（健康保険法 第40条の等級区分）、賞与は標準賞与額45万円として、協会けんぽ東京支部の令和8年度料率・子ども・子育て支援金率・厚生年金18.3%の折半額と雇用保険0.5%で計算しています。
        ここからさらに所得税（源泉徴収）と住民税が差し引かれます。年間の所得税・住民税の合計は、賞与の有無にかかわらず年収450万円の場合とほぼ同じです。
      </p>
      <p className="mb-10">
        転職先の年収を比べるときは、提示年収に賞与がどれだけ含まれているかを確認すると、毎月の手取りの見通しが立てやすくなります。
        年収を含む希望条件の優先順位の伝え方は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの伝え方</Link>にまとめています。
      </p>
      <h2>国税庁の統計で見る年収450万円の位置</h2>
      <p className="mb-10">
        国税庁「令和7年分 民間給与実態統計調査」によると、1年を通じて勤務した給与所得者{(NTA_R7.total / 100).toLocaleString("ja-JP", { maximumFractionDigits: 0 })}万人のうち、
        年収400万円を超える人は{shareAbove(400)}、500万円を超える人は{shareAbove(500)}です（第16表から当サイトで集計）。
        同調査の階級は100万円刻みのため、450万円ちょうどを境にした割合は公表されていません。
      </p>
    </TakeHomePage>
  );
}
