import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/jieitai-yametai/" },
  title: "自衛隊を辞めたいときに確認すること｜退職の承認（自衛隊法40条）・任期制の任用期間・中途退職者約5,620人【防衛省資料・e-Gov】",
  description:
    "自衛隊を辞めたいときに確認することを、自衛隊法などの条文と防衛省資料で整理しました。任務に著しい支障がある場合は退職が一定期間承認されないことがあります（第40条）。任期制の任用期間、2024年度の中途退職者約5,620人、退職手当と雇用保険の扱いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "自衛隊を辞めたいときに確認すること｜退職の承認・任用期間・退職後の給付",
    description: "自衛隊法・国家公務員退職手当法の条文と防衛省資料から、自衛官の退職の仕組みを整理しています。",
  },
};

const CHECKED = "2026年11月26日";
const JSDF_LAW = "https://laws.e-gov.go.jp/law/329AC0000000165";
const RETIRE_LAW = "https://laws.e-gov.go.jp/law/328AC1000000182";
const EI_LAW = "https://laws.e-gov.go.jp/law/349AC0000000116";
const MOD_DOC = "https://www.mod.go.jp/j/policy/agenda/meeting/henkaku/pdf/20260219b.pdf";

const faq = [
  {
    q: "自衛隊はすぐに辞められますか？",
    a: "隊員は退職を申し出ることができ、退職は任命権者（幹部は防衛大臣、それ以外は防衛大臣またはその委任を受けた者）が行います（自衛隊法 第31条）。ただし、承認すると自衛隊の任務の遂行に著しい支障を及ぼすと認めるときは、政令で定める特別の事由がある場合を除き、任期制の士は任用期間内で必要な期間、その他の隊員は任務の遂行に最少限度必要な期間、退職を承認しないことができます（第40条）。",
  },
  {
    q: "任期制自衛官の任期はどのくらいですか？",
    a: "自衛隊法 第36条で、陸士長・一等陸士・二等陸士は2年、海士長等と空士長等は3年を任用期間として任用されると定められています。任用期間が満了したときは、本人が志願すれば引き続き2年を任用期間として任用されることがあります。",
  },
  {
    q: "自衛隊を辞めた人はどのくらいいますか？",
    a: "防衛省の資料「人的基盤強化をめぐる課題」（令和8年2月）では、2024年度の自衛官の中途退職者数は約5,620人で、中途退職者のうち5年以内で退職するケースが約5割（令和6年度実績）とされています。",
  },
  {
    q: "自衛隊を辞めたら失業保険はもらえますか？",
    a: "雇用保険法 第6条第6号と同法施行規則 第4条により、国の事業に雇用される常時勤務の国家公務員は雇用保険の適用除外とされており、自衛官も雇用保険の対象外です。代わりに、国家公務員退職手当法 第10条で、勤続期間12か月以上で退職し、受け取った退職手当が雇用保険の基本手当に相当する額に満たない場合に、差額を「失業者の退職手当」として支給する仕組みがあります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Gov法令検索 自衛隊法（第31条・第36条・第40条・第42条・第45条・第65条の10）", url: JSDF_LAW },
  { label: "e-Gov法令検索 国家公務員退職手当法（第2条・第10条）", url: RETIRE_LAW },
  { label: "e-Gov法令検索 雇用保険法（第6条）", url: EI_LAW },
  { label: "e-Gov法令検索 雇用保険法施行規則（第4条）", url: "https://laws.e-gov.go.jp/law/350M50002000003" },
  { label: "防衛省「人的基盤強化をめぐる課題」（令和8年2月）", url: MOD_DOC },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "自衛隊を辞めたいとき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            自衛隊を辞めたいときに確認すること｜退職の承認・任期制の任用期間・退職後の給付
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約5,620人", l: "2024年度の自衛官の中途退職者数（防衛省資料）" },
              { v: "約5割", l: "中途退職者のうち5年以内で退職するケース（令和6年度実績）" },
              { v: "陸2年・海空3年", l: "任期制の士の任用期間（自衛隊法 第36条）" },
              { v: "第40条", l: "任務に著しい支障がある場合は退職を一定期間承認しないことがある" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>自衛官は退職を申し出ることができますが、民間企業の退職とは異なり、任命権者の承認が必要です。</strong>
            自衛隊法 第40条は、承認すると任務の遂行に著しい支障を及ぼすと認めるときは、一定期間退職を承認しないことができると定めています。
            防衛省の資料では2024年度の中途退職者は約5,620人で、入隊から5年以内の退職が約5割です。
            辞めたいと感じたときは、任期の残り・退職の手続き・退職後の給付を先に確認しておくと、退職後の生活の見通しを立てやすくなります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            条文はe-Gov法令検索、退職者数は防衛省の公表資料で{CHECKED}に確認しました。具体的な手続き・時期は所属部隊の人事担当で確認してください。
          </p>
        </div>

        <h2>自衛官の退職に関する主な決まり</h2>
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
                ["退職を行う者", "幹部隊員は防衛大臣、それ以外の隊員は防衛大臣またはその委任を受けた者", "自衛隊法 第31条第1項"],
                ["退職の承認", "任務の遂行に著しい支障を及ぼすと認めるときは、政令で定める特別の事由がある場合を除き、任期制の士は任用期間内で必要な期間、その他の隊員は最少限度必要な期間、退職を承認しないことができる", "自衛隊法 第40条"],
                ["任期制の士の任用期間", "陸士長等は2年、海士長等・空士長等は3年。満了時に志願すれば引き続き2年で任用されることがある", "自衛隊法 第36条"],
                ["任用期間の延長", "満了による退職が任務に重大な支障を及ぼす場合、6か月以内（防衛出動時は1年以内）延長できる", "自衛隊法 第36条第5項"],
                ["身分保障", "懲戒処分などの場合を除き、意に反して降任・免職されない", "自衛隊法 第42条"],
                ["定年", "任期制の士などを除く自衛官は、階級ごとに政令で定める定年に達した日の翌日に退職する", "自衛隊法 第45条"],
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
        <p className="text-xs text-text-muted mb-10">※{a(JSDF_LAW, "e-Gov法令検索 自衛隊法")}の条文を当サイトで要約しました。第40条の「政令で定める特別の事由」は自衛隊法施行令で定められています。</p>

        <h2>中途退職者の数</h2>
        <p className="mb-4">
          防衛省の資料「人的基盤強化をめぐる課題」（令和8年2月）は、自衛官の中途退職者数が増加傾向にあり、2024年度は約5,620人と説明しています。
          資料では「1万人採用しても、その半分に相当する数が中途退職している状況」「入隊初期の若者が中途退職しているケースが多い」とし、中途退職者のうち5年以内で退職するケースが約5割（令和6年度実績）としています。
        </p>
        <p className="mb-10">
          辞めたいと感じることは、入隊初期の隊員にとって珍しいことではありません。防衛省はこの資料で中途退職の抑制を課題に挙げており、処遇や勤務環境の見直しを進めています。
          辞める前に、上司・人事担当・部隊のカウンセラーなどに相談し、配置や勤務の調整で解決できるかを確かめておく方法もあります。
        </p>

        <h2>辞めたいときの確認事項</h2>
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
                ["任用期間の残り（任期制の場合）", "任期満了で退職する場合と、任期の途中で退職する場合では、手続きや受け取る給付が異なります。任期満了まで続けるかどうかの判断材料になります。"],
                ["退職を申し出る時期", "第40条により、任務への支障を理由に一定期間承認されないことがあります。希望する退職日から逆算して、早めに人事担当に相談します。"],
                ["退職手当の見込み額", "自衛官にも国家公務員退職手当法が適用されます（第2条）。勤続年数と退職理由によって額が変わるため、人事担当で見込み額を確認します。"],
                ["失業者の退職手当", "自衛官は雇用保険の対象外です（雇用保険法 第6条第6号・同法施行規則 第4条）。勤続12か月以上で、退職手当が雇用保険の基本手当相当額に満たない場合は、差額が支給される仕組みがあります（退職手当法 第10条）。"],
                ["就職の援助の対象か", "防衛大臣は若年定年等隊員の離職に際して就職の援助を行います（自衛隊法 第65条の10）。自分が対象になるかを人事担当で確認します。"],
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
          ※{a(RETIRE_LAW, "国家公務員退職手当法")}・{a(EI_LAW, "雇用保険法 第6条")}・{a(JSDF_LAW, "自衛隊法")}の条文を当サイトで要約しました。支給の可否と金額は個別の勤続期間・退職理由によります。
        </p>

        <h2>自衛隊を辞めた後の転職</h2>
        <p className="mb-4">
          自衛官は特別職の国家公務員です。辞めた後は、民間企業への転職のほか、警察官・消防官などの公務員試験を受ける方法もあります。
          民間企業への転職では、部隊で担当した業務（車両・装備の整備、通信、施設、補給、事務など）と取得した免許・資格を、応募先の仕事に結びつけて説明することが大切です。
        </p>
        <p className="mb-10">
          一般の公務員を辞める場合の退職手当・給付の考え方は<Link href="/knowledge/komuin-yametai/" className="text-teal font-bold hover:underline">公務員を辞めたいときに確認すること</Link>で、
          退職の申し出から退職後の手続きの流れは<Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link>で解説しています。
          転職が初めてで不安な場合は、<Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link>で、転職した人の賃金の変化や満足度を確認できます。
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
          <li><Link href="/knowledge/kyoin-yametai/" className="text-teal font-bold hover:underline">教員を辞めたいときに確認すること</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link></li>
          <li><Link href="/knowledge/busho-ido-shitai/" className="text-teal font-bold hover:underline">部署異動したいときに確認すること</Link></li>
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
