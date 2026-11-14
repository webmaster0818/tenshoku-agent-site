import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-18man/" },
  title: "手取り18万円の額面は月約22.3万円・年収約267.6万円【2026年・令和8年の税制で試算】",
  description:
    "手取り18万円に必要な額面（総支給額）を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約22.3万円、年収約267.6万円です。手取り16万〜25万円の早見表と、住民税がかからない入社1年目との違いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り18万円の額面は月約22.3万円・年収約267.6万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り18万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 223000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 160000, m: 197000 },
  { t: 180000, m: 223000 },
  { t: 200000, m: 248000 },
  { t: 220000, m: 276000 },
  { t: 250000, m: 315000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const firstYear = (r.net + r.residentTax) / 12;

const faq = [
  {
    q: "手取り18万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り18万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "入社1年目は手取りが多いのはなぜですか？",
    a: `住民税は前年の所得をもとに翌年6月から課税されます（総務省 個人住民税）。前年に住民税が課税される所得がない場合（新卒の入社1年目など）は住民税がかからないため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(firstYear)}程度になります。2年目の6月から住民税（当サイト試算で年${yen(r.residentTax)}）が差し引かれ、手取りが下がります。`,
  },
  {
    q: "40歳以上で手取り18万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります（当サイト試算）。手取り18万円以上にするには、額面月給224,000円（年収2,688,000円）が目安です（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-18man/"
      annual={MONTHLY * 12}
      crumb="手取り18万円の額面"
      h1="手取り18万円の額面は月約22.3万円・年収約267.6万円【2026年】"
      lead={
        <>
          <p>
            手取り18万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが18万円以上になる最小の月給を求めました。賞与がある場合は、年収が同じでも毎月の手取りは少なくなります。
          </p>
        </>
      }
      compareHeading="手取り16万〜25万円に必要な額面（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">手取り（月額）</th>
                  <th className="p-3 text-right">必要な額面月給</th>
                  <th className="p-3 text-right">年収換算</th>
                  <th className="p-3 text-right rounded-tr-lg">試算の手取り</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 180000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.t / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m * 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り16万・18万・20万・22万・25万円に対応します。この範囲では、手取りは額面の約8割（79.5%〜81.2%）です（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/knowledge/annual-holidays-120/", label: "年間休日120日の水準" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>入社1年目と2年目で手取りが変わる理由</h2>
      <p>
        住民税は、前年1月〜12月の所得をもとに計算され、翌年6月から毎月の給与から差し引かれます（総務省 個人住民税）。
        そのため、前年に住民税が課税される所得がなかった新卒の入社1年目は住民税がかからず、2年目の6月から差し引かれるようになります。額面月給{yen(MONTHLY)}で比べると次のとおりです。
      </p>
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
              <td className="p-3">2年目の6月以降（前年も同じ額面）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        この試算では、額面が変わらなくても2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職で額面月給を比べる場合は、前職の年収で計算された住民税が転職後も1年近く差し引かれる点にご注意ください。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
