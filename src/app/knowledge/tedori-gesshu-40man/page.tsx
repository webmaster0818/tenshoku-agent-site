import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-40man/" },
  title: "手取り40万円の額面は月約51.4万円・年収約616.8万円【2026年・令和8年の税制で試算】",
  description:
    "手取り40万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約51.4万円、年収約616.8万円です。手取り30万〜50万円の早見表と、額面月給55.5万円前後で手取りが一時的に下がる点も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り40万円の額面は月約51.4万円・年収約616.8万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り40万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 514000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 300000, m: 380000 },
  { t: 350000, m: 446000 },
  { t: 400000, m: 514000 },
  { t: 450000, m: 594000 },
  { t: 500000, m: 673000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const cliff = [553000, 554000, 555000, 556000, 557000, 558000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

const faq = [
  {
    q: "手取り40万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り40万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り40万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り40万円以上にするには、額面月給522,000円（年収6,264,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "賞与がある場合、手取り40万円の年収はいくらになりますか？",
    a: "毎月の手取りを40万円にするには、賞与の有無にかかわらず額面月給51.4万円程度が必要です。賞与がある会社では年収は「月給×12か月＋賞与」となるため、同じ手取り月額でも年収は616.8万円より高くなります。賞与にも社会保険料と所得税がかかるため、賞与の手取りは別に計算が必要です。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-40man/"
      annual={MONTHLY * 12}
      crumb="手取り40万円の額面"
      h1="手取り40万円の額面は月約51.4万円・年収約616.8万円【2026年】"
      lead={
        <>
          <p>
            手取り40万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが40万円以上になる最小の月給を求めました。手取り18万円前後では額面の約8割が手元に残りますが、手取り40万円では約{Math.round(r.rate * 100)}%です。
          </p>
        </>
      }
      compareHeading="手取り30万〜50万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 400000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り30万・35万・40万・45万・50万円に対応します。
            手取りを5万円増やすのに必要な額面の増加は、30万→35万円で{yen(table[1].m - table[0].m)}、45万→50万円で{yen(table[4].m - table[3].m)}と、手取りが多いほど大きくなります（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>額面月給55.5万円前後で手取りが一時的に下がる</h2>
      <p>
        令和8年分の所得税の基礎控除は、合計所得金額489万円以下で104万円、489万円超655万円以下で67万円です（国税庁「令和8年分 年末調整のしかた」）。
        賞与なしの月給制で計算すると、額面月給55.5万円（年収666万円）で合計所得金額が489万円を超え、基礎控除が37万円少なくなります。そのため、額面が増えても手取りが一時的に減る範囲があります（当サイト試算・40歳未満）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給</th>
              <th className="p-3 text-right">所得税の基礎控除</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
            </tr>
          </thead>
          <tbody>
            {cliff.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 555000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{yen(x.m)}</td>
                <td className="p-3 text-right whitespace-nowrap">{(x.r.basic / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        この試算では、額面月給55.4万円と55.5万円で手取りの月額が逆転し、55.8万円で元の水準に戻ります。額面月給55.5万〜55.7万円の求人は、額面が少し低い55.4万円の場合より手取りが少なくなる点にご注意ください。
        同じ境目を年収ベースで見た試算は<Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link>に掲載しています。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
