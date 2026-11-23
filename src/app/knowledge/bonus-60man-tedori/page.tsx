import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, yen, pct } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/bonus-60man-tedori/" },
  title: "ボーナス60万円の手取りは約43万〜49万円【2026年・令和8年分の算出率の表で試算】前月の給与別の早見表",
  description:
    "額面60万円のボーナスの手取りを、国税庁の賞与の算出率の表（令和8年分）と協会けんぽ東京支部の令和8年度料率で試算しました。40歳未満・扶養なしで前月の給与が月30万円以下なら約49.1万円です。前月の給与別の早見表と2026年夏季賞与の産業別平均も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ボーナス60万円の手取りは約43万〜49万円【2026年】",
    description: "令和8年分の算出率の表と保険料率で、ボーナス60万円の手取りを前月の給与別に試算しています。",
  },
};

const BONUS = 600000;
const CHECKED = "2026年11月23日";

// 国税庁「賞与に対する源泉徴収税額の算出率の表（令和8年分）」甲欄・扶養親族等0人
// [前月の社会保険料等控除後の給与等の金額の上限（千円・未満）, 率（%）]
const RATE0: [number, number][] = [
  [82, 0], [94, 2.042], [260, 4.084], [309, 6.126], [342, 8.168], [372, 10.21], [402, 12.252], [433, 14.294],
  [520, 16.336], [605, 18.378], [684, 20.42], [715, 22.462], [752, 24.504], [795, 26.546], [854, 28.588],
  [922, 30.63], [1318, 32.672], [1521, 35.735], [2621, 38.798], [3495, 41.861], [Infinity, 45.945],
];
const rateOf = (prevYen: number) => {
  const k = Math.floor(prevYen / 1000);
  for (const [lim, r] of RATE0) if (k < lim) return r;
  return 45.945;
};

// 賞与の社会保険料（標準賞与額＝賞与額の1,000円未満切り捨て・労働者負担）
function bonusSocial(over40: boolean) {
  const std = Math.floor(BONUS / 1000) * 1000;
  const health = Math.round(std * ((0.0985 + 0.0023 + (over40 ? 0.0162 : 0)) / 2));
  const pension = Math.round(std * (0.183 / 2));
  const employment = Math.round(BONUS * 0.005);
  return { health, pension, employment, total: health + pension + employment };
}

function calc(monthly: number, over40 = false) {
  const prev = monthly - calcTakeHome(monthly * 12, over40).social / 12;
  const s = bonusSocial(over40);
  const rate = rateOf(prev);
  const tax = Math.floor(((BONUS - s.total) * rate) / 100);
  return { monthly, prev, rate, s, tax, net: BONUS - s.total - tax };
}

const months = [200000, 250000, 300000, 350000, 400000, 450000, 500000, 600000];
const rows = months.map((m) => calc(m));
const rows40 = months.map((m) => calc(m, true));
const base = calc(300000);
const base40 = calc(300000, true);

// 厚生労働省「毎月勤労統計調査 2026（令和8）年9月分結果速報等」特別集計 表2 2026年夏季賞与の支給状況（事業所規模5人以上）
const MK_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r08/2609p/2609p.html";
const summer = [
  { name: "電気・ガス業", v: 973325, m: 1.82 },
  { name: "情報通信業", v: 793224, m: 1.28 },
  { name: "学術研究等", v: 764161, m: 1.31 },
  { name: "金融業，保険業", v: 763612, m: 1.62 },
  { name: "建設業", v: 680218, m: 1.2 },
  { name: "鉱業，採石業等", v: 670401, m: 1.0 },
  { name: "製造業", v: 622575, m: 1.1 },
  { name: "不動産・物品賃貸業", v: 606955, m: 1.53 },
  { name: "教育，学習支援業", v: 598923, m: 1.54 },
  { name: "複合サービス事業", v: 450286, m: 1.54 },
  { name: "卸売業，小売業", v: 390438, m: 0.97 },
  { name: "運輸業，郵便業", v: 387712, m: 0.9 },
  { name: "医療，福祉", v: 298773, m: 0.88 },
  { name: "その他のサービス業", v: 259534, m: 1.12 },
  { name: "生活関連サービス等", v: 218172, m: 0.76 },
  { name: "飲食サービス業等", v: 81647, m: 0.39 },
];

const faq = [
  {
    q: "ボーナス60万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・扶養なし・40歳未満の前提で、前月の給与が月30万円以下なら手取りは${yen(base.net)}です（当サイト試算）。前月の給与が高いほど所得税の率が上がり、月40万円では${yen(rows[4].net)}、月50万円では${yen(rows[6].net)}になります。40〜64歳は介護保険料が加わり、前月の給与が月30万円の場合で${yen(base40.net)}です。`,
  },
  {
    q: "ボーナス60万円から引かれるものは何ですか？",
    a: `40歳未満の場合、健康保険料（子ども・子育て支援金を含む）${yen(base.s.health)}、厚生年金保険料${yen(base.s.pension)}、雇用保険料${yen(base.s.employment)}の合計${yen(base.s.total)}と、所得税（復興特別所得税を含む）です。所得税は「賞与の額－社会保険料」に、前月の給与で決まる率を掛けて計算します（国税庁 No.2523）。`,
  },
  {
    q: "ボーナスから住民税は引かれますか？",
    a: "会社員の住民税は、前年の所得をもとに決まった年税額を6月から翌年5月までの12回に分けて毎月の給与から差し引く特別徴収が原則のため（地方税法 第321条の5）、ボーナスからは通常差し引かれません。ただし、ボーナスの額は翌年度の住民税の計算に含まれます。",
  },
  {
    q: "ボーナスで引かれた所得税は戻ってきますか？",
    a: "ボーナスから差し引かれる所得税は、算出率の表による概算の前払いです。1年間の給与・賞与の合計で年税額を計算し直す年末調整で精算されるため、扶養や保険料控除の状況によっては還付または追加の徴収があります（国税庁「令和8年分 年末調整のしかた」）。",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "ボーナス60万円の手取り" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ボーナス60万円の手取りは約43万〜49万円【2026年・令和8年分の算出率の表で試算】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: yen(base.net), l: "手取り（前月の給与30万円・40歳未満）" },
              { v: yen(base.s.total), l: "社会保険料の合計（40歳未満）" },
              { v: yen(base.tax), l: "所得税（前月の給与30万円）" },
              { v: pct(base.net / BONUS), l: "賞与額に対する手取りの割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="text-text-secondary leading-relaxed">
            <p>
              額面60万円のボーナスの手取りは、<strong>40歳未満・扶養なしで、前月の給与が月30万円以下なら{yen(base.net)}（約49.1万円）</strong>です。
              社会保険料{yen(base.s.total)}は前月の給与にかかわらず同じですが、所得税は前月の給与で率が決まるため、月50万円では手取りが{yen(rows[6].net)}になります。
            </p>
            <p className="mt-2">
              厚生労働省「毎月勤労統計調査」によると、2026年夏季賞与の支給事業所における労働者一人平均賞与額は448,765円（事業所規模5人以上・前年比5.3%増）で、60万円はこれを約15万円上回る水準です。
            </p>
          </div>
          <p className="text-xs text-text-muted mt-3">
            試算の前提：東京都在住・協会けんぽ加入・扶養親族等0人・「給与所得者の扶養控除等申告書」を提出済み・一般の事業・前月に給与の支払があり、賞与が前月の給与の10倍以下。
            令和8年の制度値を{CHECKED}に国税庁・日本年金機構・協会けんぽ・厚生労働省の公表資料で確認し、当サイトで計算しています。
          </p>
        </div>

        <h2>ボーナス60万円の手取りの内訳</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目（前月の給与30万円の場合）</th>
                <th className="p-3 text-right">40歳未満</th>
                <th className="p-3 text-right rounded-tr-lg">40〜64歳（介護保険あり）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { l: "賞与の額（額面）", a: yen(BONUS), b: yen(BONUS) },
                { l: "健康保険料（標準賞与額60万円）", a: yen(base.s.health), b: yen(base40.s.health) },
                { l: "厚生年金保険料（標準賞与額60万円）", a: yen(base.s.pension), b: yen(base40.s.pension) },
                { l: "雇用保険料", a: yen(base.s.employment), b: yen(base40.s.employment) },
                { l: "社会保険料の合計", a: yen(base.s.total), b: yen(base40.s.total) },
                { l: `所得税（率 ${base.rate}%）`, a: yen(base.tax), b: yen(base40.tax) },
                { l: "住民税", a: "0円", b: "0円" },
              ].map((x) => (
                <tr key={x.l} className="border-b border-gray-100">
                  <td className="p-3">{x.l}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">手取り</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(base.net)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(base40.net)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※賞与の健康保険料・厚生年金保険料は、賞与額の1,000円未満を切り捨てた「標準賞与額」に料率を掛けた額の折半です（日本年金機構）。健康保険は協会けんぽ東京支部の令和8年度料率9.85%と子ども・子育て支援金率0.23%、40〜64歳は介護保険料率1.62%を加えています。厚生年金は18.3%、雇用保険は賞与額の0.5%（一般の事業・労働者負担）です。
          加入する健康保険組合や業種によって実際の金額は変わります。目安としてご覧ください。
        </p>

        <h2>前月の給与で変わるボーナス60万円の手取り（早見表）</h2>
        <p>
          ボーナスから差し引く所得税は、「賞与の額－社会保険料」に、算出率の表で決まる率を掛けて求めます。率は前月の給与（社会保険料等を差し引いた後の額）と扶養親族等の数で決まります（国税庁 No.2523）。扶養親族等0人の場合は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">前月の給与（額面）</th>
                <th className="p-3 text-right">社会保険料控除後</th>
                <th className="p-3 text-right">算出率</th>
                <th className="p-3 text-right">所得税</th>
                <th className="p-3 text-right">手取り（40歳未満）</th>
                <th className="p-3 text-right rounded-tr-lg">手取り（40〜64歳）</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((x, i) => (
                <tr key={x.monthly} className={`border-b border-gray-100 ${x.monthly === 300000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{(x.monthly / 10000).toLocaleString("ja-JP")}万円</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.prev)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.rate}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.tax)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.net)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(rows40[i].net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※前月の給与の社会保険料は、当サイトの月給別の手取り試算と同じ前提（標準報酬月額による計算・40〜64歳の列は介護保険料を含む）で計算しています。出典：
          <a href="https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2026/data/15-16.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁「賞与に対する源泉徴収税額の算出率の表（令和8年分）」</a>。{CHECKED}確認。
        </p>
        <p className="mb-10">
          扶養親族等0人では、前月の社会保険料等控除後の給与が9.4万円以上26万円未満の場合の率は4.084%で、額面の月給でおおむね30万円程度までが同じ率です（当サイト試算）。
          扶養親族等の数が多いほど同じ率が適用される給与の範囲が上がり、たとえば扶養親族等2人では14.3万円以上27.6万円未満が2.042%です。
          なお、前月に給与の支払がない場合や、賞与（社会保険料控除後）が前月の給与（同）の10倍を超える場合は、月額表を使う別の計算方法になります（国税庁 No.2523）。
        </p>

        <h2>ボーナスから住民税が引かれない理由</h2>
        <p className="mb-10">
          会社員の住民税は、前年の所得をもとに市区町村が決めた年税額を、6月から翌年5月までの12回に分けて毎月の給与から差し引く「特別徴収」が原則です（
          <a href="https://laws.e-gov.go.jp/law/325AC0000000226" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">地方税法 第321条の5</a>）。
          そのため、ボーナスの明細には住民税の控除がありません。一方、今年受け取ったボーナスは翌年度の住民税の計算に含まれ、翌年6月以降の毎月の給与から差し引かれる住民税が増えます。
          賞与の健康保険料には年度の累計573万円、厚生年金保険料には1か月150万円の標準賞与額の上限があり（
          <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20141203.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「従業員に賞与を支給したときの手続き」</a>）、60万円のボーナスはいずれも上限に届きません。
        </p>

        <h2>2026年夏季賞与の産業別平均と比べた60万円の水準</h2>
        <p>
          厚生労働省「毎月勤労統計調査」の特別集計では、2026年夏季賞与の支給事業所における労働者一人平均賞与額（事業所規模5人以上）を産業別に公表しています。平均額の高い順に並べ、60万円以上の産業を色付けしています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className="p-3 text-right">一人平均賞与額</th>
                <th className="p-3 text-right rounded-tr-lg">きまって支給する給与に対する支給割合</th>
              </tr>
            </thead>
            <tbody>
              {summer.map((x) => (
                <tr key={x.name} className={`border-b border-gray-100 ${x.v >= BONUS ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.name}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(2)}か月分</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100">
                <td className="p-3">調査産業計（事業所規模5人以上）</td>
                <td className="p-3 text-right whitespace-nowrap">448,765円</td>
                <td className="p-3 text-right whitespace-nowrap">1.04か月分</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">調査産業計（事業所規模30人以上）</td>
                <td className="p-3 text-right whitespace-nowrap">522,724円</td>
                <td className="p-3 text-right whitespace-nowrap">1.18か月分</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：<a href={MK_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「毎月勤労統計調査 2026（令和8）年9月分結果速報等」特別集計 2026年夏季賞与</a>（速報値・確報で改訂される場合があります）。{CHECKED}確認。
          一人平均賞与額は、賞与を支給した事業所の全常用労働者（支給を受けていない労働者を含む）の平均です。
        </p>
        <p className="mb-10">
          一人平均賞与額が60万円を超えたのは、電気・ガス業、情報通信業、学術研究等、金融業，保険業、建設業、鉱業，採石業等、製造業、不動産・物品賃貸業の8産業です。賞与を支給した事業所の割合は事業所規模5人以上で74.0%のため、勤務先に賞与の制度があるかどうかでも年収は大きく変わります。
          賞与を含めた年収で転職先を比べる場合は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          {[
            { href: "/knowledge/bonus-40man-tedori/", label: "ボーナス40万円の手取り" },
            { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
            { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
            { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
            { href: "/knowledge/shoukyu-heikin/", label: "昇給の平均額" },
          ].map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-teal font-bold hover:underline">{r.label}</Link>
            </li>
          ))}
        </ul>

        <h2>出典・計算に使用した資料</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1 mb-4">
          {[
            { label: "国税庁 No.2523 賞与に対する源泉徴収", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2523.htm" },
            { label: "国税庁 賞与に対する源泉徴収税額の算出率の表（令和8年分）", url: "https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2026/data/15-16.pdf" },
            { label: "日本年金機構 従業員に賞与を支給したときの手続き（標準賞与額・上限）", url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20141203.html" },
            { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都 9.85%）", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
            { label: "協会けんぽ 令和8年度保険料率のお知らせ（介護保険料率 1.62%・子ども・子育て支援金率 0.23%）", url: "https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" },
            { label: "厚生労働省 令和8年度 雇用保険料率のご案内（一般の事業・労働者負担 5/1,000）", url: "https://www.mhlw.go.jp/content/001692566.pdf" },
            { label: "e-Gov法令検索 地方税法 第321条の5（給与所得に係る特別徴収税額の徴収）", url: "https://laws.e-gov.go.jp/law/325AC0000000226" },
            { label: "厚生労働省 毎月勤労統計調査 2026（令和8）年9月分結果速報等（2026年夏季賞与）", url: MK_URL },
          ].map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
