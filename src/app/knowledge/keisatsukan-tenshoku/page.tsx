import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/keisatsukan-tenshoku/" },
  title: "警察官の転職で確認すること｜普通退職6,269人・25歳未満が23.5%・退職後の守秘義務と再就職規制【総務省調査・e-Gov】",
  description:
    "警察官が民間企業などへの転職を考えるときに確認したい事実を、総務省の調査と法令で整理しました。令和6年度に離職した警察職9,387人のうち普通退職は6,269人で、普通退職者の23.5%が25歳未満です。退職後も続く守秘義務（地方公務員法34条）、離職後2年間の再就職者の規制、雇用保険と退職手当の扱いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "警察官の転職で確認すること｜離職の統計・退職後の義務・給付の扱い",
    description: "総務省「地方公務員の退職状況等調査」と地方公務員法・警察法の条文から、警察官の退職と転職に関する事実を整理しています。",
  },
};

const CHECKED = "2026年11月27日";
const SOUMU = "https://www.soumu.go.jp/main_content/001048098.pdf";
const HAKUSHO = "https://www.npa.go.jp/hakusyo/r07/pdf/10_dai7sho.pdf";
const CHIHO = "https://laws.e-gov.go.jp/law/325AC0000000261";
const POLICE_LAW = "https://laws.e-gov.go.jp/law/329AC0000000162";
const EI_LAW = "https://laws.e-gov.go.jp/law/349AC0000000116";
const EI_RULE = "https://laws.e-gov.go.jp/law/350M50002000003";
const JICHI = "https://laws.e-gov.go.jp/law/322AC0000000067";
const GYOSEI = "https://laws.e-gov.go.jp/law/326AC1000000004";

// 総務省「令和6年度 地方公務員の退職状況等調査」第1表 職種別事由別離職者数（警察職・合計）
const reasons = [
  { k: "普通退職", police: 6269, pr: 66.8, all: 58.3 },
  { k: "定年退職（勤務延長後の退職を含む）", police: 1792, pr: 19.1, all: 30.6 },
  { k: "勧奨退職", police: 1073, pr: 11.4, all: 6.3 },
  { k: "死亡退職", police: 132, pr: 1.4, all: 1.2 },
  { k: "早期退職募集制度による退職", police: 77, pr: 0.8, all: 2.7 },
  { k: "懲戒免職・分限免職・失職", police: 44, pr: 0.5, all: 0.8 },
];

// 同 第5表 普通退職者（在職期間の通算を伴う退職者等を除く）の年齢（警察職5,356人・全職種69,647人）
const ages = [
  { k: "25歳未満", n: 1259, r: 23.5, all: 8.1 },
  { k: "25〜29歳", n: 817, r: 15.3, all: 18.2 },
  { k: "30〜39歳", n: 672, r: 12.5, all: 24.8 },
  { k: "40〜49歳", n: 367, r: 6.9, all: 11.9 },
  { k: "50〜59歳", n: 279, r: 5.2, all: 9.8 },
  { k: "60歳", n: 1951, r: 36.4, all: 26.5 },
  { k: "61歳以上", n: 11, r: 0.2, all: 1.7 },
];
const n = (v: number) => v.toLocaleString("ja-JP");

const faq = [
  {
    q: "警察官を辞めて転職する人はどのくらいいますか？",
    a: "総務省「令和6年度 地方公務員の退職状況等調査」では、令和6年度に離職した警察職は9,387人で、そのうち自己都合退職などの普通退職が6,269人（66.8%）です。在職期間の通算を伴う退職等を除いた普通退職者5,356人のうち、25歳未満が1,259人（23.5%）、25〜29歳が817人（15.3%）で、30歳未満が約4割を占めます。全職種の普通退職者に占める25歳未満の割合は8.1%です。",
  },
  {
    q: "警察官を辞めた後も守秘義務はありますか？",
    a: "あります。地方公務員法第34条第1項は「職員は、職務上知り得た秘密を漏らしてはならない。その職を退いた後も、また、同様とする。」と定めており、違反した場合は1年以下の拘禁刑または50万円以下の罰金の対象です（第60条第2号）。転職活動の面接や職務経歴書で捜査・警備の内容を具体的に説明することは避け、担当した業務の種類や役割の説明にとどめる必要があります。",
  },
  {
    q: "警察官を辞めたら失業保険（雇用保険の基本手当）はもらえますか？",
    a: "雇用保険法第6条第6号と同法施行規則第4条第1項第2号により、都道府県の事業に雇用される者は、都道府県知事が雇用保険法を適用しないことについて厚生労働大臣の承認を受けている場合、雇用保険の適用除外となります。この場合、退職後に雇用保険の基本手当は受けられません。地方公務員の退職手当は地方自治法第204条に基づき各都道府県の条例で定められるため、退職手当の額や失業時の給付の有無は、所属する都道府県警察の人事担当で確認してください。",
  },
  {
    q: "警察官の経験で取得できる資格はありますか？",
    a: "行政書士法第2条第6号は、国または地方公共団体の公務員として行政事務を担当した期間が通算20年以上（高等学校卒業者などは17年以上）の者に、行政書士となる資格を認めています。ただし、警察官として従事した業務がこの「行政事務」に当たるかどうかは条文だけでは判断できず、登録を行う日本行政書士会連合会（同法第6条）の審査によります。登録を検討する場合は、事前に登録先の行政書士会に確認してください。",
  },
  {
    q: "退職後に警察と取引のある会社に就職しても問題ありませんか？",
    a: "就職そのものは禁止されていません。ただし地方公務員法第38条の2により、離職後に営利企業等に再就職した元職員は、離職前5年間の職務に属する契約や処分に関し、離職後2年間、在職していた組織の職員に職務上の行為をするよう（またはしないよう）要求・依頼することが禁止されています。不正な行為を求めた場合は罰則があります（第60条第4号）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "総務省「令和6年度 地方公務員の退職状況等調査」（第1表・第5表・調査要領）", url: SOUMU },
  { label: "警察庁「令和7年版 警察白書」第7章 図表7-1 警察職員の定員（令和7年度）", url: HAKUSHO },
  { label: "e-Gov法令検索 地方公務員法（第34条・第38条・第38条の2・第52条・第60条）", url: CHIHO },
  { label: "e-Gov法令検索 警察法（第55条・第56条・第62条）", url: POLICE_LAW },
  { label: "e-Gov法令検索 雇用保険法（第6条）", url: EI_LAW },
  { label: "e-Gov法令検索 雇用保険法施行規則（第4条）", url: EI_RULE },
  { label: "e-Gov法令検索 地方自治法（第204条）", url: JICHI },
  { label: "e-Gov法令検索 行政書士法（第2条・第6条）", url: GYOSEI },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "警察官の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            警察官の転職で確認すること｜離職の統計・退職後の義務・給付の扱い
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "6,269人", l: "令和6年度に普通退職した警察職（離職者9,387人の66.8%）" },
              { v: "23.5%", l: "普通退職者に占める25歳未満の割合（全職種は8.1%）" },
              { v: "第34条", l: "職務上知り得た秘密は退職後も漏らしてはならない（地方公務員法）" },
              { v: "離職後2年", l: "元の職場への契約等に関する働きかけの規制期間（第38条の2）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>警察官（警視以下）は都道府県の地方公務員で、退職後も地方公務員法の守秘義務と再就職者の規制が適用されます。</strong>
            総務省の調査では、令和6年度に自己都合退職などで普通退職した警察職は6,269人です。普通退職者の23.5%が25歳未満で、全職種（8.1%）と比べて若い年代の退職の割合が高くなっています。
            転職を考えるときは、退職後に守るべき義務、雇用保険と退職手当の扱い、応募先での経験の伝え方を先に確認しておくと、退職後の見通しを立てやすくなります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計は総務省・警察庁の公表資料、条文はe-Gov法令検索で{CHECKED}に確認しました。退職手当の額や手続きは都道府県ごとに異なるため、所属する都道府県警察の人事担当で確認してください。
          </p>
        </div>

        <h2>警察官の身分と退職に関わる法令</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-left">内容</th>
                <th className="p-3 text-left rounded-tr-lg">根拠</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["身分", "警視正以上の警察官（地方警務官）は一般職の国家公務員、それ以外の都道府県警察の職員（地方警察職員）は地方公務員", "警察法 第56条"],
                ["任免", "警視正以上は国家公安委員会、その他の職員は警視総監または警察本部長が都道府県公安委員会の意見を聞いて任免する", "警察法 第55条第3項"],
                ["階級", "警視総監・警視監・警視長・警視正・警視・警部・警部補・巡査部長・巡査", "警察法 第62条"],
                ["退職後の守秘義務", "職務上知り得た秘密を、退職後も漏らしてはならない。違反は1年以下の拘禁刑または50万円以下の罰金", "地方公務員法 第34条・第60条第2号"],
                ["在職中の兼業", "任命権者の許可なく、営利企業の役員を兼ねたり、報酬を得て事業・事務に従事したりできない", "地方公務員法 第38条"],
                ["再就職者の規制", "営利企業等に再就職した元職員は、離職前5年間の職務に属する契約・処分について、離職後2年間、元の組織の職員に働きかけてはならない", "地方公務員法 第38条の2"],
                ["職員団体", "警察職員は、勤務条件の改善を目的として当局と交渉する団体を結成・加入できない", "地方公務員法 第52条第5項"],
              ].map(([k, v, b]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy whitespace-nowrap">{k}</td>
                  <td className="p-3">{v}</td>
                  <td className="p-3 text-xs whitespace-nowrap">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{a(POLICE_LAW, "e-Gov法令検索 警察法")}・{a(CHIHO, "地方公務員法")}の条文を当サイトで要約しました。警視正以上の地方警務官には、国家公務員法と国家公務員退職手当法が適用されます。
        </p>

        <h2>警察職の離職者数と退職の事由</h2>
        <p className="mb-4">
          総務省「令和6年度 地方公務員の退職状況等調査」は、都道府県・市町村などの職員の離職を職種別に集計しています。この調査の「警察職」は、国の公安職俸給表（一）の適用を受ける者に相当する職員です。
          令和6年度に離職した警察職は9,387人で、事由別の内訳は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">退職の事由</th>
                <th className="p-3 text-right">警察職（人）</th>
                <th className="p-3 text-right">警察職の構成比</th>
                <th className="p-3 text-right rounded-tr-lg">全職種の構成比</th>
              </tr>
            </thead>
            <tbody>
              {reasons.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{x.k}</td>
                  <td className="p-3 text-right">{n(x.police)}</td>
                  <td className="p-3 text-right">{x.pr.toFixed(1)}%</td>
                  <td className="p-3 text-right">{x.all.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※{a(SOUMU, "総務省「令和6年度 地方公務員の退職状況等調査」")}第1表から当サイトで抜粋しました。全職種の離職者は135,027人です。「懲戒免職・分限免職・失職」は3区分の合計（懲戒免職37人・分限免職5人・失職2人）で、全職種の構成比も同じく3区分の合計です。
        </p>
        <p className="mb-10">
          普通退職は、定年・勧奨・募集制度・免職・失職・死亡のいずれにも当たらない離職で、自己都合による退職のほか、他の地方公共団体や国の職員となるために退職手当を受けずに退職する場合（在職期間の通算を伴う退職等、警察職では913人）も含みます。
          警察職は勧奨退職の割合（11.4%）が全職種（6.3%）より高い点も特徴です。
        </p>

        <h2>普通退職した警察職の年齢</h2>
        <p className="mb-4">
          在職期間の通算を伴う退職等を除いた普通退職者5,356人を年齢別に見ると、次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">退職時の年齢</th>
                <th className="p-3 text-right">警察職（人）</th>
                <th className="p-3 text-right">警察職の構成比</th>
                <th className="p-3 text-right rounded-tr-lg">全職種の構成比</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{x.k}</td>
                  <td className="p-3 text-right">{n(x.n)}</td>
                  <td className="p-3 text-right">{x.r.toFixed(1)}%</td>
                  <td className="p-3 text-right">{x.all.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※{a(SOUMU, "総務省「令和6年度 地方公務員の退職状況等調査」")}第5表の年齢階級を、当サイトで10歳刻みに合算しました（構成比は当サイトの計算）。全職種の普通退職者は69,647人です。
        </p>
        <p className="mb-4">
          30歳未満の普通退職者は2,076人で、警察職の普通退職者の38.8%を占めます（全職種は26.3%）。
          60歳の1,951人は、定年の引上げ期間中に旧定年年齢以後に退職した職員などが普通退職として集計されているためで、調査要領にもその旨の記載があります。
        </p>
        <p className="mb-10">
          参考として、60歳未満で普通退職した警察職3,394人は、警察白書の都道府県警察の地方警察官の定員259,787人（令和7年4月1日現在）に対して約1.3%です。
          年度・集計範囲（調査の職員数と条例の定員）が異なるため、この割合は規模感をつかむための目安としてご覧ください。
        </p>

        <h2>退職後の給付と手続きで確認すること</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">確認すること</th>
                <th className="p-3 text-left rounded-tr-lg">理由</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["雇用保険の適用の有無", "都道府県の事業に雇用される者は、知事が厚生労働大臣の承認を受けている場合、雇用保険の適用除外となり、基本手当を受けられません（雇用保険法 第6条第6号・同法施行規則 第4条第1項第2号）。在職中の給与明細に雇用保険料の控除があるかも確認の手がかりになります。"],
                ["退職手当の見込み額", "地方公務員の退職手当は、地方自治法 第204条に基づき都道府県の条例で額と支給方法が定められます。勤続年数と退職の事由（自己都合・勧奨など）で額が変わるため、人事担当で見込み額を確認します。"],
                ["失業時の給付の有無", "雇用保険の適用除外となる場合に、退職手当の一部として失業時の給付を設けているかどうかも条例で定められます。退職手当の条例の該当条文を確認します。"],
                ["転職先の入社日", "退職日と入社日の間が空くと、健康保険・年金の切り替えが必要になります。在職中に内定を得て、退職日を決めてから申し出ると空白期間を短くできます。"],
                ["応募書類に書ける範囲", "退職後も守秘義務が続くため（地方公務員法 第34条）、捜査・警備の具体的な内容ではなく、担当した業務の種類・役割・規模の説明にとどめます。"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy">{k}</td>
                  <td className="p-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{a(EI_LAW, "雇用保険法 第6条")}・{a(EI_RULE, "同法施行規則 第4条")}・{a(JICHI, "地方自治法 第204条")}・{a(CHIHO, "地方公務員法")}の条文を当サイトで要約しました。給付の可否と金額は、個別の勤続期間・退職事由と各都道府県の条例によります。
        </p>

        <h2>警察官の経験と転職先の考え方</h2>
        <p className="mb-4">
          当サイトでは、警察官に向いている職種を一律に挙げることは控えています。転職先の向き・不向きは、配属された部門（地域・交通・刑事・生活安全・警備・総務など）や取得した免許・資格によって大きく異なるためです。
          応募先を考える際は、担当した業務と取得した資格を書き出し、求人の仕事内容と照らし合わせる方法をおすすめします。
        </p>
        <p className="mb-4">
          法令で警察官の経験が資格に結びつく例として、行政書士法 第2条第6号があります。国または地方公共団体の公務員として行政事務を担当した期間が通算20年以上（高等学校卒業者などは17年以上）の者は、行政書士となる資格を有します。
          ただし、警察官としての業務がこの「行政事務」に当たるかどうかは条文からは判断できず、登録を行う日本行政書士会連合会（同法第6条）の審査によります。
        </p>
        <p className="mb-10">
          自衛官から転職する場合の退職の承認や給付の仕組みは<Link href="/knowledge/jieitai-yametai/" className="text-teal font-bold hover:underline">自衛隊を辞めたいときに確認すること</Link>で、
          国家公務員・地方公務員全体の自己都合退職の統計と退職手当の計算は<Link href="/knowledge/komuin-yametai/" className="text-teal font-bold hover:underline">公務員を辞めたいときに確認すること</Link>で解説しています。
          転職した人の賃金の変化は<Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link>で確認できます。
        </p>

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
          <li><Link href="/knowledge/komuin-yametai/" className="text-teal font-bold hover:underline">公務員を辞めたいときに確認すること</Link></li>
          <li><Link href="/knowledge/jieitai-yametai/" className="text-teal font-bold hover:underline">自衛隊を辞めたいときに確認すること</Link></li>
          <li><Link href="/knowledge/32sai-tenshoku/" className="text-teal font-bold hover:underline">32歳の転職で確認すること</Link></li>
          <li><Link href="/knowledge/kyoin-yametai/" className="text-teal font-bold hover:underline">教員を辞めたいときに確認すること</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
