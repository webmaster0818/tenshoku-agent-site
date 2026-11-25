import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-19man-yachin/" },
  title: "手取り19万円の家賃の目安は？民営借家の平均家賃6.5万円は手取りの34%【令和5年 住宅・土地統計調査で比較】",
  description:
    "手取り19万円で住める家賃を、総務省「令和5年 住宅・土地統計調査」と「家計調査」で確かめました。民営借家の全国平均家賃64,819円は手取りの約34%、1人世帯の平均52,510円は約28%です。都道府県別の家賃、家賃別に残るお金、必要な額面（月237,000円）も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り19万円の家賃の目安は？民営借家の平均家賃6.5万円は手取りの34%【令和5年 住宅・土地統計調査】",
    description: "住宅・土地統計調査と家計調査の公表値で、手取り19万円の家賃負担を比較しています。",
  },
};

const CHECKED = "2026年11月25日";
const TAKE = 190000;

// 手取り19万円に必要な額面（東京都・協会けんぽ・独身・40歳未満・賞与なし。月給1,000円刻みで手取り19万円以上になる最小額）
const MONTHLY = 237000;
const r = calcTakeHome(MONTHLY * 12);

// 総務省「令和5年 住宅・土地統計調査」第112-2表 民営借家（専用住宅）の1か月当たり家賃（家賃0円を含む平均・円）
const PRIVATE_ALL = 64819;
const KYOEKI = 3192; // 同表 民営借家の1か月当たり共益費・管理費（全国平均）
const PREF = [
  { k: "東京都", v: 93973, n: "1位" },
  { k: "神奈川県", v: 75720, n: "2位" },
  { k: "埼玉県", v: 65198, n: "3位" },
  { k: "千葉県", v: 65176, n: "4位" },
  { k: "大阪府", v: 63912, n: "6位" },
  { k: "愛知県", v: 60115, n: "8位" },
  { k: "福岡県", v: 55710, n: "13位" },
  { k: "青森県", v: 45427, n: "47位" },
];
// 同調査 第123-1表 1人世帯の1か月当たり家賃（公営・給与住宅などを含む借家全体・円）
const SINGLE = [
  { k: "全国", v: 52510 },
  { k: "東京都", v: 73684 },
  { k: "大阪府", v: 52109 },
  { k: "愛知県", v: 49300 },
  { k: "福岡県", v: 45168 },
];
// 同調査 結果の概要 表7：借家（専用住宅）全体の1か月当たり家賃
const RENT_ALL = 59656;

// 総務省「家計調査（家計収支編）2025年」第2表 単身世帯・勤労者・34歳以下（1か月平均・円）
const KAKEI = { disposable: 311571, consumption: 179225, housing: 34489, rent: 34148, payShare: 77.4 };
const nonHousing = KAKEI.consumption - KAKEI.housing;

const pctOf = (v: number) => `約${Math.round((v / TAKE) * 100)}%`;

const faq = [
  {
    q: "手取り19万円の家賃はいくらが目安ですか？",
    a: `家賃の割合について公的機関が示した目安は見当たりませんでした。参考として、総務省「令和5年 住宅・土地統計調査」の1人世帯の平均家賃は全国で${yen(52510)}で、手取り19万円の${pctOf(52510)}です。民営借家の平均家賃${yen(PRIVATE_ALL)}では${pctOf(PRIVATE_ALL)}になります（当サイト計算）。`,
  },
  {
    q: "手取り19万円で東京の一人暮らしはできますか？",
    a: `同調査の東京都の民営借家の平均家賃は${yen(93973)}で、手取り19万円の${pctOf(93973)}です。1人世帯の平均家賃（公営住宅などを含む）でも${yen(73684)}（${pctOf(73684)}）です。家賃を手取りの3割以内に抑える場合は約5.7万円が上限となり、東京都の平均を大きく下回る物件を選ぶ必要があります（当サイト計算）。`,
  },
  {
    q: "手取り19万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（令和8年の税制・保険料率で当サイト試算）。`,
  },
  {
    q: "家賃が払えなくなったときの公的な支援はありますか？",
    a: `離職・廃業などで住まいを失うおそれがある人には、自治体の「住居確保給付金」があります。東京都文京区の案内では、特別区の単身世帯の支給上限は月${yen(53700)}で、世帯収入が基準額92,000円＋家賃額未満などの要件があります（2026年11月25日確認）。要件と金額は自治体によって異なります。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "総務省統計局「令和5年住宅・土地統計調査 住宅及び世帯に関する基本集計 結果の概要」７ 借家の家賃（表7）", url: "https://www.stat.go.jp/data/jyutaku/2023/pdf/kihon_gaiyou.pdf" },
  { label: "e-Stat 令和5年住宅・土地統計調査 第112-2表「住宅の所有の関係(4区分)別住宅の１か月当たり家賃(10区分)別借家(専用住宅)数、住宅の１か月当たり家賃及び１か月当たり共益費・管理費－全国、都道府県、市区」", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040210046&fileKind=0" },
  { label: "e-Stat 令和5年住宅・土地統計調査 第123-1表「住宅の建て方(5区分)、世帯人員(6区分)別住宅の１か月当たり家賃(19区分)別借家に居住する主世帯数及び１か月当たり家賃－全国、都道府県、21大都市」", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040210064&fileKind=0" },
  { label: "e-Stat 家計調査（家計収支編）2025年 単身世帯 第2表「年齢階級別１世帯当たり１か月間の収入と支出（単身世帯）」", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040424656&fileKind=4" },
  { label: "国土交通省 社会資本整備審議会住宅宅地分科会 資料（高家賃負担の定義：家賃負担率37.3%）", url: "https://www.mlit.go.jp/common/001139782.pdf" },
  { label: "文京区「住居確保給付金（家賃補助）について」（特別区の単身世帯の上限53,700円）", url: "https://www.city.bunkyo.lg.jp/b019/p006546.html" },
];

const th = "p-3 text-right";
const LEFT = [40000, 50000, 57000, 60000, 70000];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "手取り19万円の家賃の目安" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            手取り19万円の家賃の目安は？民営借家の平均家賃6.5万円は手取りの34%【令和5年 住宅・土地統計調査で比較】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: yen(52510), l: `1人世帯の平均家賃（全国）＝手取りの${pctOf(52510)}` },
              { v: yen(PRIVATE_ALL), l: `民営借家の平均家賃（全国）＝手取りの${pctOf(PRIVATE_ALL)}` },
              { v: yen(93973), l: `東京都の民営借家の平均家賃＝手取りの${pctOf(93973)}` },
              { v: yen(MONTHLY), l: "手取り19万円に必要な額面月給（当サイト試算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            手取り19万円の家賃は、<strong>全国の1人世帯の平均家賃{yen(52510)}（手取りの{pctOf(52510)}）が一つの目安</strong>です。
            家賃の割合について国や公的機関が示した基準は見当たらず、「手取りの3分の1」などの目安は統計上の根拠がある数字ではありません。
            手取りの3割なら5.7万円、民営借家の全国平均{yen(PRIVATE_ALL)}なら手取りの{pctOf(PRIVATE_ALL)}です。東京都の民営借家の平均{yen(93973)}は手取りの約半分にあたります（当サイト計算）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            家賃は総務省「令和5年 住宅・土地統計調査」（2023年10月1日現在）、支出は「家計調査 2025年」の公表値で、{CHECKED}にe-Stat・総務省統計局の資料で確認しました。割合は当サイトで計算しています。
          </p>
        </div>

        <h2>家賃別に見た手取り19万円の残り</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">家賃（月額）</th>
                <th className={th}>手取りに占める割合</th>
                <th className="p-3 text-right rounded-tr-lg">家賃を払った後の残り</th>
              </tr>
            </thead>
            <tbody>
              {LEFT.map((v) => (
                <tr key={v} className="border-b border-gray-100">
                  <td className="p-3">{yen(v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pctOf(v)}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${TAKE - v >= nonHousing ? "font-bold text-navy" : ""}`}>{yen(TAKE - v)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※当サイト計算。共益費・管理費（民営借家の全国平均{yen(KYOEKI)}）は含みません。太字は、残りが下記の「住居以外の消費支出」を上回る家賃です。</p>
        <p className="mb-10">
          総務省「家計調査 2025年」の単身世帯・勤労者・34歳以下では、1か月の消費支出{yen(KAKEI.consumption)}のうち住居が{yen(KAKEI.housing)}で、住居以外の消費支出は{yen(nonHousing)}です（当サイト計算）。
          手取り19万円で同じ水準の生活費を払うと、家賃に回せるのは約{Math.floor((TAKE - nonHousing) / 1000) / 10}万円までで、貯蓄に回すお金は残らない計算です。
          家賃5万円では残りが{yen(TAKE - 50000)}となり、住居以外の消費支出をわずかに下回ります。
        </p>

        <h2>都道府県別の民営借家の平均家賃</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">都道府県</th>
                <th className={th}>順位</th>
                <th className={th}>平均家賃（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">手取り19万円に占める割合</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-3">全国</td>
                <td className="p-3 text-right">－</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(PRIVATE_ALL)}</td>
                <td className="p-3 text-right whitespace-nowrap">{pctOf(PRIVATE_ALL)}</td>
              </tr>
              {PREF.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pctOf(x.v)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和5年住宅・土地統計調査 第112-2表（民営借家・専用住宅、家賃0円を含む平均）。順位は47都道府県の中での当サイト集計です。間取り・広さを問わない平均で、単身向けの物件に限った値ではありません。
        </p>
        <p className="mb-10">
          民営借家の平均家賃は東京都が{yen(93973)}で最も高く、最も低い青森県（{yen(45427)}）の約2倍です。手取り19万円に対する割合は、東京都で{pctOf(93973)}、青森県で{pctOf(45427)}と大きく異なります。
          同じ手取りでも、住む地域によって家賃に回せる割合が大きく変わります。
        </p>

        <h2>1人世帯の平均家賃は全国で{yen(52510)}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">地域</th>
                <th className={th}>1人世帯の平均家賃</th>
                <th className="p-3 text-right rounded-tr-lg">手取り19万円に占める割合</th>
              </tr>
            </thead>
            <tbody>
              {SINGLE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pctOf(x.v)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和5年住宅・土地統計調査 第123-1表。民営借家のほか、公営住宅・UR・社宅（給与住宅）などを含む借家全体の1人世帯の平均です。
        </p>
        <p className="mb-10">
          一人暮らしに近い条件として1人世帯に限ると、全国の平均家賃は{yen(52510)}（手取り19万円の{pctOf(52510)}）です。家賃が比較的安い公営住宅や社宅も含むため、民間の賃貸物件を探す場合はこれより高くなる可能性があります。
          借家全体（専用住宅・世帯人数を問わない）の平均家賃は{yen(RENT_ALL)}です（同調査 結果の概要 表7）。
        </p>

        <h2>単身の会社員が実際に払っている家賃</h2>
        <p className="mb-4">
          家計調査の単身世帯・勤労者・34歳以下の「家賃地代」は月{yen(KAKEI.rent)}で、可処分所得{yen(KAKEI.disposable)}の約{Math.round((KAKEI.rent / KAKEI.disposable) * 1000) / 10}%です（当サイト計算）。
          ただし、この平均には実家暮らしや持ち家など家賃を払っていない世帯も含まれます。家賃・地代を払っている世帯は{KAKEI.payShare}%で、払っている世帯だけの平均は単純計算で約{yen(Math.round(KAKEI.rent / (KAKEI.payShare / 100) / 100) * 100)}になります（当サイト計算・目安）。
        </p>
        <p className="mb-10">
          この年齢層の可処分所得は手取り19万円より約12万円多いため、手取り19万円で同じ家賃を払うと負担割合は高くなります。
        </p>

        <h2>公的な資料での家賃負担の扱い</h2>
        <p className="mb-4">
          国土交通省の社会資本整備審議会の資料では、「高家賃負担」を「月収に占める家賃の割合が、年収200万円以下の世帯のうち民営借家居住世帯における平均の家賃負担率（37.3％）以上であるもの」と定義して分析しています（
          <a href="https://www.mlit.go.jp/common/001139782.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国土交通省資料</a>）。
          これは分析上の定義で、望ましい家賃の上限を示したものではありません。
        </p>
        <p className="mb-10">
          また、住居確保給付金の東京都特別区の単身世帯の支給上限は月{yen(53700)}です（
          <a href="https://www.city.bunkyo.lg.jp/b019/p006546.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">文京区の案内</a>：{CHECKED}確認）。
          支援制度の上限額であり、家賃の目安として定められたものではありませんが、公的制度が単身世帯の家賃として想定している金額の一例です。
        </p>

        <h2>手取り19万円に必要な額面は月{yen(MONTHLY)}</h2>
        <p className="mb-4">
          東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、手取りが19万円以上になる最小の額面月給は{yen(MONTHLY)}（年収{yen(MONTHLY * 12)}）です（令和8年の税制・保険料率で当サイト試算）。
          この場合、健康保険料{yen(r.health / 12)}、厚生年金保険料{yen(r.pension / 12)}、雇用保険料{yen(r.employment / 12)}、所得税{yen(r.incomeTax / 12)}、住民税{yen(r.residentTax / 12)}が毎月差し引かれ、手取りは{yen(r.netMonthly)}です。
        </p>
        <p className="mb-10">
          額面月給から手取りを求める計算は<Link href="/knowledge/gesshu-19man-tedori/" className="text-teal font-bold hover:underline">月給19万円の手取り</Link>、
          手取りから額面を逆算した早見表は<Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">手取りの早見表</Link>に掲載しています。
          家賃の負担を下げるために収入を上げる方法としては、転職のほか、家賃補助・住宅手当のある勤務先を選ぶ方法があります。
        </p>

        <h2>家賃の目安を考えるときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "家賃のほかに共益費・初期費用がかかる", d: `民営借家の共益費・管理費は全国平均で${yen(KYOEKI)}です（住宅・土地統計調査 第112-2表）。入居時の敷金・礼金・仲介手数料なども、家賃とは別に必要です。` },
            { t: "統計の平均家賃は広さを問わない", d: "住宅・土地統計調査の平均家賃は、ワンルームからファミリー向けまでを含む平均です。単身向けの物件はこれより安い場合があります。" },
            { t: "手取りは住民税の有無で変わる", d: "入社1年目など前年の所得が少ない場合は住民税がかからず、同じ額面でも手取りが多くなります。2年目の6月から住民税が差し引かれる点に注意が必要です。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/gesshu-19man-tedori/" className="text-teal font-bold hover:underline">月給19万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-gesshu-18man/" className="text-teal font-bold hover:underline">手取り18万円の額面</Link></li>
          <li><Link href="/knowledge/tedori-gesshu-22man/" className="text-teal font-bold hover:underline">手取り22万円の額面</Link></li>
          <li><Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">手取りの早見表</Link></li>
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/age/20s/" className="text-teal font-bold hover:underline">20代の転職エージェント比較</Link></li>
          <li><Link href="/review/re-shukatsu/" className="text-teal font-bold hover:underline">Re就活の評判（20代向け転職サイト）</Link></li>
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className="text-teal font-bold hover:underline">定時で帰れる仕事</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。手取りの試算に使った税率・保険料率は<Link href="/knowledge/tedori-hayamihyo/" className="text-teal hover:underline">手取りの早見表</Link>の出典欄に掲載しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
