import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ランスタッドの評判は？厚労省の就職者数・早期離職・職業紹介規程で確認【2026年11月】",
  description:
    "ランスタッドの転職エージェント（ハイクラス向け転職）の評判を、厚生労働省「人材サービス総合サイト」の就職者数と早期離職者数、公式サイトの会社概要・よくある質問・職業紹介規程で確認しました。令和7年度の就職者は1,772人です。無期雇用の就職者が令和6年度に減った点や、利用前に知っておきたい点も整理しています。",
  alternates: { canonical: "/review/randstad/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ランスタッドの評判は？厚労省の就職者数・早期離職・職業紹介規程で確認【2026年11月】",
    description: "厚生労働省に公開された就職者数・早期離職者数と、公式サイトの規程にもとづく注意点をまとめています。",
  },
};

const CHECKED = "2026年11月22日";
const JINZAI_CHECKED = "2026年11月21日";

// 厚生労働省 人材サービス総合サイト（許可番号13-ユ-010554・令和8年11月1日現在の表示・支社を含む合計）
// quit: null は「-」表示
const jinzai: { y: string; all: number; mu: number; quit: number | null }[] = [
  { y: "令和2年度", all: 301, mu: 283, quit: 20 },
  { y: "令和3年度", all: 1116, mu: 790, quit: 30 },
  { y: "令和4年度", all: 1593, mu: 1167, quit: 33 },
  { y: "令和5年度", all: 1787, mu: 1282, quit: 48 },
  { y: "令和6年度", all: 1877, mu: 436, quit: 29 },
  { y: "令和7年度", all: 1772, mu: 471, quit: null },
];
const pct = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

const faqData = [
  {
    q: "ランスタッドの評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、厚生労働省の人材サービス総合サイトでは令和7年度の就職者が1,772人（うち無期雇用471人）と公開されています。令和5年度の無期雇用の就職者のうち就職後6か月以内に離職した人は48人（3.7%・当サイト計算）です。サービスの評価は担当者や希望職種によって異なるため、複数の転職エージェントと併用して比べる方法をおすすめします。",
  },
  {
    q: "ランスタッドの転職エージェントは無料で使えますか？",
    a: "公式サイトのよくある質問では「サービス利用はすべて無料です」と案内されています。職業紹介に関する規定（第3条）でも、紹介手数料は求人者または関係雇用主から受け取ると定められています。",
  },
  {
    q: "ランスタッドと他の転職エージェントを併用してもよいですか？",
    a: "公式サイトのよくある質問では、並行して独自の転職活動を進めても問題ないと案内されています。求人を紹介する際に、コンサルタントが他の活動状況を確認するとされています。",
  },
  {
    q: "応募から入社までどのくらいかかりますか？",
    a: "公式サイトのよくある質問では、平均で1.5〜2か月、最短で2週間程度、6か月以上かけて活動する人もいると案内されています。",
  },
  {
    q: "障がい者向けのサービスとは別ですか？",
    a: "ランスタッドは、障がいのある方向けの転職支援も別のサービスとして案内しています。当サイトでは「ランスタッドの障がい者転職支援」のページで解説しています。両者の違いについての公式の説明は、当サイトでは確認できていません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const sources = [
  { label: "ランスタッド株式会社 会社概要", url: "https://www.randstad.co.jp/about/outline/" },
  { label: "ランスタッド ハイクラス向け転職「ランスタッドの転職支援サービス」", url: "https://www.randstad.co.jp/tenshoku/candidates/about/" },
  { label: "ランスタッド ハイクラス向け転職「よくあるご質問」", url: "https://www.randstad.co.jp/tenshoku/candidates/faq/" },
  { label: "ランスタッド「個人情報の取り扱い・職業紹介に関する規定」", url: "https://www.randstad.co.jp/tenshoku/candidates/regulation/" },
  { label: "厚生労働省 人材サービス総合サイト（許可番号13-ユ-010554で検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
];

const th = "bg-gray-50 text-left px-3 py-2 border-b w-36 whitespace-nowrap";
const td = "px-3 py-2 border-b";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "ランスタッドの評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ランスタッドの評判は？厚労省の就職者数・早期離職・職業紹介規程で確認【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "1,772人", l: "厚労省に公開された就職者数（令和7年度）" },
              { v: pct(48, 1282), l: "無期雇用の6か月以内離職（令和5年度・当サイト計算）" },
              { v: "91拠点", l: "国内拠点数（うちインハウス20・2026年8月1日時点）" },
              { v: "約80%", l: "非公開求人の割合（公式サイトの表示）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            ランスタッドの転職エージェントは、ランスタッド株式会社が「ハイクラス向け転職」として運営する人材紹介サービスです。公式サイトでは「若手の転職から年収800万円以上のエグゼクティブ・管理職人材」までを対象とし、グローバル・外資系企業に強いと説明しています。
            厚生労働省の人材サービス総合サイトでは、<strong>令和7年度の就職者が1,772人</strong>と公開されています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            公式サイトの内容は{CHECKED}、厚生労働省のサイトの数値は{JINZAI_CHECKED}に当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。
          </p>
        </div>

        <h2>ランスタッドの基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>運営会社</th><td className={td}>ランスタッド株式会社（1980年8月設立・資本金1億円）</td></tr>
              <tr><th className={th}>本社</th><td className={td}>東京都千代田区紀尾井町4-1 ニューオータニガーデンコート21F</td></tr>
              <tr><th className={th}>事業内容</th><td className={td}>人材派遣、人材紹介、テクノロジーサービス、アウトソーシング、人事サービス</td></tr>
              <tr><th className={th}>有料職業紹介事業</th><td className={td}>許可番号 13-ユ-010554（労働者派遣事業 派13-010538）</td></tr>
              <tr><th className={th}>拠点</th><td className={td}>91拠点（うちインハウス拠点20・2026年8月1日時点）。派遣・紹介など全事業の拠点数です</td></tr>
              <tr><th className={th}>対象</th><td className={td}>若手から年収800万円以上のエグゼクティブ・管理職まで（公式サイト）。医療・医薬、消費財、製造、テクノロジー、管理部門などの業界専任コンサルタントがいると案内されています</td></tr>
              <tr><th className={th}>料金</th><td className={td}>求職者は無料（よくある質問）。紹介手数料は求人者等が負担（職業紹介に関する規定 第3条）</td></tr>
              <tr><th className={th}>親会社</th><td className={td}>ランスタッド・エヌ・ヴィー（オランダ・1960年10月設立）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：ランスタッド株式会社 会社概要（2026年8月時点の表示）・ハイクラス向け転職の公式ページ・よくあるご質問・職業紹介に関する規定。日本法人の従業員数は会社概要に記載がないため掲載していません。
        </p>

        <h2>厚生労働省に公開された就職者数と早期離職者数</h2>
        <p>
          有料職業紹介事業者は、職業安定法にもとづき、紹介により就職した人の数や、無期雇用で就職した人のうち6か月以内に離職した人の数を公開しています。ランスタッド（許可番号13-ユ-010554）の登録内容は次のとおりです（令和8年11月1日現在の表示・支社を含む合計）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年度</th>
                <th className="p-3 text-right">就職者（4か月以上）</th>
                <th className="p-3 text-right">うち無期雇用</th>
                <th className="p-3 text-right">6か月以内の離職者</th>
                <th className="p-3 text-right rounded-tr-lg">離職者の割合（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {jinzai.map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.y === "令和7年度" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{x.all.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right">{x.mu.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right">{x.quit === null ? "－" : `${x.quit}人`}</td>
                  <td className="p-3 text-right">{x.quit === null ? "－" : pct(x.quit, x.mu)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※離職者の割合は「6か月以内の離職者 ÷ 無期雇用の就職者」で当サイトが計算した値です。厚生労働省のサイトには割合は表示されていません。令和7年度の離職者数は「-」と表示されています。離職の有無が判明しない人の数は令和2〜6年度とも0人です。
        </p>
        <p className="mb-4">
          就職者数は令和2年度の301人から令和6年度の1,877人まで増え、令和7年度は1,772人でした。
          無期雇用で就職した人のうち6か月以内に離職した人の割合は、令和3〜5年度は2.8%〜3.8%で推移し、令和6年度は6.7%でした（当サイト計算）。
        </p>
        <p className="mb-10">
          なお、<strong>無期雇用の就職者は令和5年度の1,282人から令和6年度は436人に減っています</strong>。就職者全体（4か月以上の雇用）は同じ時期に増えているため、令和6年度以降は有期雇用での就職が多くなっています。理由は厚生労働省のサイト・公式サイトのいずれにも記載がありません。
          正社員（無期雇用）での転職を希望する場合は、紹介を受ける求人の雇用形態を個別に確認してください。
        </p>

        <h2>公式サイトの「世界最大」「約80%」表示の根拠</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "世界最大の総合人材サービス会社", d: "会社概要では、注記で「Staffing Industry Analysts 2025、人材サービス企業売上ランキング」を根拠としています。グループ（ランスタッド・エヌ・ヴィー）全体の売上による順位で、日本法人や転職エージェント部門単体の順位ではありません。" },
            { t: "求人の約80%は非公開求人", d: "ハイクラス向け転職の公式ページでは、企業から依頼される求人の約80%が非公開求人で、サイトで見られる求人はごく一部と説明しています。集計時点や母数は記載されていません。" },
            { t: "世界中で年間約20万人の転職サポート実績", d: "同じページの表示ですが、集計方法・対象年の注記はありません。国内の実績としては、厚生労働省に公開された就職者数（上の表）が客観的に確認できる数値です。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">※いずれも同社の表示にもとづくもので、当サイトが独自に順位や割合を評価したものではありません。</p>

        <h2>規程・よくある質問で確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "他社との併用は問題ないと案内されている", d: "よくある質問では、並行して独自の転職活動を進めても問題ないとされています。求人を紹介する際に、コンサルタントが他の活動状況を確認します。" },
            { t: "支援期間の上限は記載されていない", d: "公式サイトでは、求職者向けの利用規約の掲載は確認できませんでした。職業紹介に関する規定にも、支援期間の上限や、紹介先への直接応募を禁止する条項はありません。応募から入社までは平均1.5〜2か月と案内されています。" },
            { t: "早期退職時の返戻金は求人企業との取り決め", d: "厚生労働省のサイトでは、自己都合退職などの場合に求人企業へ手数料の一部を返す返戻金制度があると登録されています（1か月以内80%以内・3か月以内50%以内・6か月以内30%以内）。求人企業と同社の間の取り決めです。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>ランスタッドが向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>外資系・グローバル企業の求人を探したい人（公式サイトで強みとして案内）</li>
              <li>医療・医薬、消費財、製造、テクノロジー、管理部門など、業界専任のコンサルタントに相談したい人</li>
              <li>他の転職エージェントと併用しながら進めたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>外資系・ハイクラスで比べたい人 →<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>・<Link href="/review/lhh/" className="text-teal underline">LHH転職エージェント</Link></li>
              <li>求人数の多い大手と比べたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>・<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>障がい者雇用の求人を探したい人 →<Link href="/review/randstad-challenged/" className="text-teal underline">ランスタッドの障がい者転職支援</Link></li>
            </ul>
          </div>
        </div>

        <h2>ランスタッド よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p className="mb-10">
          ランスタッドの転職エージェントは、外資系・グローバル企業に強みがあると案内しているハイクラス向けの人材紹介サービスで、厚生労働省に公開された令和7年度の就職者は1,772人です。
          令和6年度以降は無期雇用での就職者が減っているため、正社員での転職を希望する場合は求人の雇用形態を確認し、他の転職エージェントとも比べることをおすすめします。
        </p>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/review/jac/" className="text-teal font-bold hover:underline">JACリクルートメントの評判</Link></li>
          <li><Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link></li>
          <li><Link href="/knowledge/infra-engineer-nenshu/" className="text-teal font-bold hover:underline">インフラエンジニアの平均年収（テクノロジー職の年収の目安）</Link></li>
          <li><Link href="/company/orix/" className="text-teal font-bold hover:underline">オリックスの平均年収（平均年収1,000万円を超える企業の例）</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">公式サイトは{CHECKED}、厚生労働省のサイトは{JINZAI_CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
