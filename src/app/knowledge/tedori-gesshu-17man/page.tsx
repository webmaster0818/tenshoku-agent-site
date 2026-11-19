import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-17man/" },
  title: "手取り17万円の額面は月約20.9万円・年収約250.8万円【2026年・令和8年の税制で試算】",
  description:
    "手取り17万円に必要な額面（総支給額）を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約20.9万円、年収約250.8万円です。令和7年の新規学卒者の学歴別賃金（厚生労働省）で計算した手取りとの比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り17万円の額面は月約20.9万円・年収約250.8万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り17万円に必要な額面月給と年収を逆算しています。",
  },
};

const CHECKED = "2026年11月20日";
const MONTHLY = 209000;
const r = calcTakeHome(MONTHLY * 12);
const OVER40_MONTHLY = 213000;
const o = calcTakeHome(OVER40_MONTHLY * 12, true);

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第10表 新規学卒者の学歴別賃金（男女計・千円）
const grads = [
  { k: "高校", v: 207.3 },
  { k: "専門学校", v: 230.7 },
  { k: "高専・短大", v: 235.5 },
  { k: "大学", v: 262.3 },
  { k: "大学院", v: 299.0 },
].map((x) => {
  const t = calcTakeHome(Math.round(x.v * 1000) * 12);
  return { ...x, first: (t.net + t.residentTax) / 12, second: t.netMonthly };
});

const faq = [
  {
    q: "手取り17万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り17万円は高校卒の初任給と比べてどうですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の新規学卒者の賃金は、高校卒が月207.3千円です。この額面で計算すると、住民税がかからない入社1年目の手取りは月${yen(grads[0].first)}、住民税が差し引かれる2年目の6月以降は月${yen(grads[0].second)}です（当サイト試算・同じ額面が続く前提）。2年目以降は手取り17万円をわずかに下回ります。`,
  },
  {
    q: "手取り17万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り17万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、手取り17万円以上にするには額面月給${yen(OVER40_MONTHLY)}（年収${yen(OVER40_MONTHLY * 12)}）が目安です。このときの手取りは月${yen(o.netMonthly)}です（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-17man/"
      annual={MONTHLY * 12}
      crumb="手取り17万円の額面"
      h1="手取り17万円の額面は月約20.9万円・年収約250.8万円【2026年】"
      lead={
        <>
          <p>
            手取り17万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが17万円以上になる最小の月給を求めました。令和7年の高校卒の初任給（月207.3千円・厚生労働省）とほぼ同じ水準です。
          </p>
        </>
      }
      compareHeading="手取り15万〜19万円に必要な額面（早見表）"
      compare={[183000, 197000, 209000, 223000, 237000].map((m) => m * 12)}
      compareNote={
        <p>
          上の表は、手取り15万・16万・17万・18万・19万円になる最小の額面月給（1,000円刻み）を年収に換算したものです。
          この範囲では、手取りは額面の約8割（80.5%〜82.0%）で、手取りを1万円増やすには額面で月1.2万〜1.4万円の増額が必要です（当サイト試算・40歳未満）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/tedori-350man/", label: "年収350万円の手取り" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収と大学卒の初任給" },
        { href: "/type/second-new-grad/", label: "第二新卒向けの転職エージェント" },
      ]}
    >
      <h2>令和7年の初任給で計算した手取り（学歴別）</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の新規学卒者の賃金（男女計）を額面月給として、手取りを試算しました。
        入社1年目は前年の所得がないため住民税がかからず、2年目の6月から差し引かれます（総務省 個人住民税）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">学歴</th>
              <th className="p-3 text-right">初任給（額面）</th>
              <th className="p-3 text-right">手取り（1年目）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（2年目6月以降）</th>
            </tr>
          </thead>
          <tbody>
            {grads.map((x) => (
              <tr key={x.k} className={`border-b border-gray-100 ${x.k === "高校" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{x.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.v.toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.first)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.second)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※初任給は厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第10表（令和7年6月分の新規学卒者の賃金・男女計）。手取りは東京都・協会けんぽ・独身・賞与なし・同じ額面が続く前提の当サイト試算です（{CHECKED}確認）。
      </p>
      <p className="mb-10">
        この試算では、高校卒の初任給は2年目に住民税（月{yen(grads[0].first - grads[0].second)}）が差し引かれて手取りが17万円を下回り、専門学校卒以上は手取り18万円台以上になります。
        初任給から昇給がない場合の値のため、実際の2年目の手取りは昇給額によって変わります。年収を上げる転職を考える場合は、
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">転職エージェント各社の年収アップ実績の比較</Link>も参考にしてください。
      </p>

      <h2>出典</h2>
      <ul className="text-xs text-text-muted space-y-1 mb-10">
        <li>
          <a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/10.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
            厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(10) 新規学卒者の学歴別にみた賃金 第10表（{CHECKED}確認）
          </a>
        </li>
      </ul>
    </TakeHomePage>
  );
}
