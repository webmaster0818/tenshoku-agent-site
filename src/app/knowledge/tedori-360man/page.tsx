import type { Metadata } from "next";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareBand, salaryDeduction } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-360man/" },
  title: "年収360万円の手取りは約287万円・月約23.9万円【2026年・令和8年の税制で試算】",
  description:
    "年収360万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満で年約287万円、月約23.9万円です。月給30万円の標準報酬月額と、給与所得控除の計算式が切り替わる位置も確認しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収360万円の手取りは約287万円・月約23.9万円【2026年】",
    description: "令和8年の税制・保険料率で年収360万円の手取りを試算し、内訳と給与所得控除の境目を掲載しています。",
  },
};

const A = 3600000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const near = [3400000, 3500000, 3600000, 3700000, 3800000].map((a) => ({ a, x: calcTakeHome(a), d: salaryDeduction(a) }));
// 標準報酬月額の境目（健康保険法 第40条：報酬月額29万円以上31万円未満→30万円、31万円以上33万円未満→32万円）
const below = calcTakeHome(309000 * 12);
const edge = calcTakeHome(310000 * 12);

const faq = [
  {
    q: "年収360万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収360万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。差し引かれる額の約${Math.round((r.social / (A - r.net)) * 100)}%が社会保険料です。`,
  },
  {
    q: "年収360万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、年収300万円超400万円以下の人が${shareBand(3)}で、全14階級の中で最も多い階級です（1年を通じて勤務した給与所得者・人数から当サイトで集計）。`,
  },
  {
    q: "年収360万円を超えると給与所得控除はどう変わりますか？",
    a: `給与所得控除は、年収360万円以下が「年収×30%＋8万円」、360万円超660万円以下が「年収×20%＋44万円」です（国税庁 No.1410）。年収360万円ではどちらの式でも${yen(salaryDeduction(A))}になるため金額は連続していますが、360万円を超えた部分は控除が20%しか増えなくなり、課税される所得の増え方が大きくなります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-360man/"
      annual={A}
      crumb="年収360万円の手取り"
      h1="年収360万円の手取りは約287万円・月約23.9万円【2026年】"
      lead={
        <>
          <p>
            年収360万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(A - r.net)}のうち、社会保険料が{man(r.social)}、住民税が{man(r.residentTax)}、所得税が{man(r.incomeTax)}です。
            年収360万円は月給30万円にあたり、標準報酬月額30万円の等級（報酬月額29万円以上31万円未満）に入ります。また、給与所得控除の計算式が切り替わる金額でもあります。
          </p>
        </>
      }
      compareHeading="年収300万〜400万円の手取り比較"
      compare={[3000000, 3250000, 3500000, 3600000, 3750000, 4000000]}
      compareNote={
        <p>
          年収300万円から400万円の範囲では、手取りの割合は80%前後で推移します。
          この範囲は所得税の税率が5%の区分（課税所得195万円以下）に収まるため、手取りの差は主に社会保険料の等級と給与所得控除の計算式によって生じます（当サイト試算）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-350man/", label: "年収350万円の手取り" },
        { href: "/knowledge/tedori-380man/", label: "年収380万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/bonus-sukunai/", label: "ボーナスが少ないと感じたときに確認すること" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>年収360万円は給与所得控除の計算式が切り替わる金額</h2>
      <p>
        給与所得控除は、年収360万円以下では「年収×30%＋8万円」、360万円超660万円以下では「年収×20%＋44万円」で計算します（国税庁 No.1410・令和8年分）。
        年収360万円ではどちらの式でも{yen(salaryDeduction(A))}です。360万円を超えると、年収が1万円増えるごとに控除は2,000円しか増えず、所得税・住民税の対象になる所得が8,000円ずつ増えます（360万円以下では7,000円ずつ）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収</th>
              <th className="p-3 text-right">給与所得控除</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">所得税＋住民税（年）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年）</th>
            </tr>
          </thead>
          <tbody>
            {near.map((row) => (
              <tr key={row.a} className={`border-b border-gray-100 ${row.a === A ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{yen(row.a)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.d)}</td>
                <td className="p-3 text-right whitespace-nowrap">{(row.x.grade / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.incomeTax + row.x.residentTax)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※東京都・協会けんぽ・独身・40歳未満・賞与なしの当サイト試算。
      </p>
      <h2>月給31万円で標準報酬月額が一段上がる</h2>
      <p>
        健康保険料と厚生年金保険料は、報酬月額を等級に当てはめた標準報酬月額で計算されます（健康保険法 第40条）。年収360万円（月給30万円）は30万円の等級の中ほどにあり、
        月給が31万円（年収{yen(310000 * 12)}）に達すると32万円の等級に上がります。この試算では、月給{yen(309000)}の手取りは年{yen(below.net)}、月給{yen(310000)}では年{yen(edge.net)}で、
        月給が1,000円増えると手取りは年{yen(below.net - edge.net)}減ります。
      </p>
      <p className="mb-10">
        年収360万円前後の求人を比べる場合は、月給の数千円の差よりも、賞与の有無・残業代の見込み・加入する健康保険の料率のほうが手取りへの影響が大きくなります。
        実際の標準報酬月額は、原則として4〜6月に支払われた報酬（通勤手当や残業代を含む）の平均で決まる点にも注意が必要です。
      </p>
    </TakeHomePage>
  );
}
