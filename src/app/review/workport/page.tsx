import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークポートの評判は？厚労省の就職者数・早期離職・利用規約で確認【2026年11月】",
  description:
    "ワークポートの評判を、厚生労働省「人材サービス総合サイト」の就職者数と早期離職者数、公式サイトの会社概要・利用規約、アプリ「eコンシェル」のストア評価で確認しました。令和7年度の就職者は10,076人で、支援期間は原則3か月が上限です。利用前に知っておきたい注意点も整理しています。",
  alternates: { canonical: "/review/workport/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ワークポートの評判は？厚労省の就職者数・早期離職・利用規約で確認【2026年11月】",
    description: "厚生労働省に公開された就職者数・早期離職者数と、利用規約にもとづく注意点をまとめています。",
  },
};

const CHECKED = "2026年11月20日";

// 厚生労働省 人材サービス総合サイト（許可番号13-ユ-040590・令和8年11月1日現在の表示・支社を含む合計）
const jinzai = [
  { y: "令和3年度", all: 5671, mu: 5408, quit: 275, unk: 419 },
  { y: "令和4年度", all: 6302, mu: 6021, quit: 288, unk: 413 },
  { y: "令和5年度", all: 5766, mu: 5554, quit: 177, unk: 218 },
  { y: "令和6年度", all: 9054, mu: 8606, quit: 314, unk: 394 },
  { y: "令和7年度", all: 10076, mu: 9599, quit: 252, unk: 315 },
];
const pct = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

const faqData = [
  {
    q: "ワークポートの評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、厚生労働省の人材サービス総合サイトでは令和7年度の就職者が10,076人（うち無期雇用9,599人）、無期雇用で就職後6か月以内に離職した人が252人と公開されています。サービスの評価は担当者や希望職種によって異なるため、複数の転職エージェントと併用して比べる方法をおすすめします。",
  },
  {
    q: "ワークポートのサポートには期間の上限がありますか？",
    a: "転職支援サービス利用規約（2025年10月1日改訂）の第4条では、担当者による電話・メール・面談などの支援は、原則としてサービス開始の通知を行った日から3か月間を上限に提供すると定められています。",
  },
  {
    q: "ワークポートは無料で使えますか？",
    a: "公式サイトでは、転職支援サービスはすべて無料と案内されています。同社の手数料表では、紹介手数料は求人企業が負担すると定められています。",
  },
  {
    q: "ワークポートは「No.1」と表示していますが、何のNo.1ですか？",
    a: "公式サイトのトップでは「総合ランキング No.1」と表示し、注記で、マイナビ転職の「tameni+ Awards 2026 First Half」（集計期間2026年1月〜6月）で総合ランキング1位を受賞したことを根拠としています。同社の発表によると、この賞は約400社の紹介会社を対象に、転職決定人数や求職者のレビューなどを総合的に評価したものです。",
  },
  {
    q: "紹介された企業に自分で直接応募してもよいですか？",
    a: "利用規約の第14条では、ワークポートから紹介を受けた企業に、同社の承諾なく直接連絡して選考を受けることや入社することを禁止事項としています。応募の経路は担当者と相談してください。",
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
  { label: "株式会社ワークポート 会社概要", url: "https://www.workport.co.jp/corporate/company.html" },
  { label: "株式会社ワークポート 沿革", url: "https://www.workport.co.jp/corporate/history.html" },
  { label: "株式会社ワークポート 拠点一覧", url: "https://www.workport.co.jp/corporate/access.html" },
  { label: "ワークポート 公式サイト（求職者向け）", url: "https://www.workport.co.jp/" },
  { label: "ワークポート サービス内容", url: "https://www.workport.co.jp/service/" },
  { label: "ワークポート サービスの流れ", url: "https://www.workport.co.jp/service/flow.html" },
  { label: "ワークポート 求人検索（件数表示）", url: "https://www.workport.co.jp/all/search/" },
  { label: "ワークポート 転職支援サービス利用規約（2025年10月1日改訂）", url: "https://www.workport.co.jp/terms/" },
  { label: "ワークポート 業務の運営に関する規程", url: "https://www.workport.co.jp/regulations/" },
  { label: "ワークポート 手数料表（求人企業向け）", url: "https://www.workport.co.jp/lp_company/fee/" },
  { label: "株式会社ワークポート ニュース「tameni+ Awards 2026にて総合ランキング1位を受賞」（2026年9月3日）", url: "https://www.workport.co.jp/corporate/news/detail/968.html" },
  { label: "株式会社ワークポート ニュース「転職支援人数100万人突破」（2025年6月2日）", url: "https://www.workport.co.jp/corporate/news/detail/925.html" },
  { label: "App Store「eｺﾝｼｪﾙ」", url: "https://apps.apple.com/jp/app/id1286927072" },
  { label: "Google Play「eｺﾝｼｪﾙ」", url: "https://play.google.com/store/apps/details?id=jp.co.workport.econcier" },
  { label: "厚生労働省 人材サービス総合サイト（許可番号13-ユ-040590で検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
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
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "ワークポートの評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ワークポートの評判は？厚労省の就職者数・早期離職・利用規約で確認【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "10,076人", l: "厚労省に公開された就職者数（令和7年度）" },
              { v: pct(252, 9599), l: "無期雇用の6か月以内離職（判明分・当サイト計算）" },
              { v: "57か所", l: "拠点数（本社2・支社54・オペレーションセンター1）" },
              { v: "3か月", l: "担当者による支援期間の上限（利用規約・原則）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            ワークポートは、株式会社ワークポートが運営する全職種対応の転職エージェントです。2003年にIT専門の人材紹介会社として始まり、2014年に総合型へ移行したと同社は説明しています。
            厚生労働省の人材サービス総合サイトでは、<strong>令和7年度の就職者が10,076人</strong>と公開されており、令和6年度（9,054人）から増えています。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・厚生労働省のサイト・アプリストアで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>ワークポートの基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>運営会社</th><td className={td}>株式会社ワークポート（2003年3月設立・資本金4,200万円）</td></tr>
              <tr><th className={th}>本社</th><td className={td}>東京本社（東京都品川区東品川 天王洲ファーストタワー6F）・福岡本社（福岡市博多区）の2本社制</td></tr>
              <tr><th className={th}>代表者</th><td className={td}>代表取締役会長CEO 田村高広／代表取締役社長COO 林徹郎</td></tr>
              <tr><th className={th}>従業員数</th><td className={td}>1,464名（2026年3月末・契約社員・パート・出向者を含むグループ全体）</td></tr>
              <tr><th className={th}>有料職業紹介事業</th><td className={td}>許可番号 13-ユ-040590（平成15年8月1日許可・取扱職種は全職種）。職業紹介優良事業者の認定あり</td></tr>
              <tr><th className={th}>拠点</th><td className={td}>57か所（本社2・支社54・宮崎オペレーションセンター）。公式サイトでは「全国47都道府県すべてに拠点展開」と表記</td></tr>
              <tr><th className={th}>求人検索の件数</th><td className={td}>130,987件（求人検索ページの表示・{CHECKED}確認。非公開求人を含むかどうかは表示されていません）</td></tr>
              <tr><th className={th}>料金</th><td className={td}>求職者は無料（公式サイト）。紹介手数料は求人企業が負担（手数料表）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：株式会社ワークポート 会社概要・沿革・拠点一覧・公式サイト・手数料表、厚生労働省 人材サービス総合サイト。拠点数は拠点一覧の見出しを当サイトで数えた値で、厚生労働省のサイトで同じ許可番号の有効な事業所数（57件）と一致しています。
        </p>

        <h2>厚生労働省に公開された就職者数と早期離職者数</h2>
        <p>
          有料職業紹介事業者は、職業安定法にもとづき、紹介により就職した人の数や、無期雇用で就職した人のうち6か月以内に離職した人の数を公開しています。ワークポート（許可番号13-ユ-040590）の登録内容は次のとおりです（令和8年11月1日現在の表示・支社を含む合計）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年度</th>
                <th className="p-3 text-right">就職者（4か月以上）</th>
                <th className="p-3 text-right">うち無期雇用</th>
                <th className="p-3 text-right">6か月以内の離職者</th>
                <th className="p-3 text-right">離職の有無が判明せず</th>
                <th className="p-3 text-right rounded-tr-lg">離職者の割合（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {jinzai.map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.y === "令和7年度" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{x.all.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right">{x.mu.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right">{x.quit}人</td>
                  <td className="p-3 text-right">{x.unk}人</td>
                  <td className="p-3 text-right">{pct(x.quit, x.mu)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※離職者の割合は「6か月以内の離職者 ÷ 無期雇用の就職者」で当サイトが計算した値で、離職の有無が判明しない人は含みません。厚生労働省のサイトには割合は表示されていません。
        </p>
        <p className="mb-10">
          就職者数は令和3年度の5,671人から令和7年度の10,076人まで、5年で約1.8倍に増えています（当サイト計算）。
          無期雇用で就職した人のうち6か月以内に離職した人の割合は、令和3年度の5.1%から令和7年度は2.6%に下がっています。ただし「判明せず」の人数（令和7年度315人）は含んでいないため、実際の割合はこれより高い可能性があります。
        </p>

        <h2>「No.1」表示と受賞歴の根拠</h2>
        <p>公式サイトに掲載されている実績の表示と、その根拠として同社が示している内容は次のとおりです（いずれも自社発表）。</p>
        <div className="space-y-4 mb-4">
          {[
            { t: "総合ランキング No.1", d: "マイナビ転職「tameni+ Awards 2026 First Half」（集計期間2026年1月〜6月）での総合ランキング1位。同社の発表では、約400社の紹介会社を対象に、転職決定人数や求職者のレビューなどを総合的に評価した賞とされています。" },
            { t: "転職支援人数100万人突破", d: "2025年6月1日時点の累計（2025年6月2日のニュース）。「転職支援人数」がどの段階の人数（登録・面談など）を指すかは記載されていません。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">※受賞は他社が主催する賞にもとづく同社の発表です。当サイトが独自に順位を評価したものではありません。</p>

        <h2>アプリ「eコンシェル」のストア評価</h2>
        <p>
          ワークポートの利用者には、求人の管理や担当者とのメッセージに使うアプリ「eコンシェル」のアカウントが発行されます。ストアの評価は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">掲載先</th>
                <th className="p-3 text-right">評価（5点満点）</th>
                <th className="p-3 text-right rounded-tr-lg">評価・レビュー件数</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">App Store</td><td className="p-3 text-right">1.8</td><td className="p-3 text-right">38件</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">Google Play</td><td className="p-3 text-right">2.3</td><td className="p-3 text-right">19件（ダウンロード数1万以上）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          表示された公開レビュー（App Store 4件・Google Play 3件）では、ログイン状態がすぐ切れる、検索条件が保存されない、通知が届かないといった操作面の不満が中心でした。
          一方で、担当者の対応は親切だったと書き添えたレビューもありました。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※{CHECKED}確認。これはアプリへの評価で、転職支援サービス全体の評価ではありません。件数が少ないため傾向は限定的です。口コミサイト・比較サイトの独自アンケートは回答者数や集計方法を確認できないため、根拠にしていません。
        </p>

        <h2>利用規約で確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "担当者の支援は原則3か月が上限", d: "利用規約第4条では、電話・メール・面談などの担当者による支援は、サービス開始の通知を行った日から原則3か月間を上限に提供するとされています。転職時期がまだ先の場合は、登録のタイミングを考えておくと安心です。" },
            { t: "連絡に返信しないと支援が終わることがある", d: "第6条では、正当な理由なく連絡に返信しない場合や、サービスの範囲を超える要望を繰り返す場合などに支援を終えることがあると定めています。" },
            { t: "紹介先への直接応募・内定承諾後の辞退は禁止事項", d: "第14条では、紹介を受けた企業に承諾なく直接連絡して選考を受けること、正当な理由のない面接の無断欠席や内定承諾後の辞退などを禁止事項としています。" },
            { t: "推薦の判断理由は開示されない", d: "第11条では、求人との照合の基準や判断理由は伝えられないこと、応募を依頼しても推薦しない場合があることが定められています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>サービスの流れ</h2>
        <p className="mb-10">
          公式サイトでは、申し込み→カウンセリング→求人紹介→応募→面接→内定→入社の7段階で案内されています。カウンセリングは対面・オンライン・電話から選べ、平日の夜間や土日祝にも対応しています（対応日時は拠点により異なる）。
          応募は担当者（同社では「転職コンシェルジュ」と呼びます）が推薦状を添えて代行し、面接の日程調整や条件交渉、退職交渉のアドバイスも支援内容に含まれています。担当者はいつでも変更を依頼できると案内されています。
        </p>

        <h2>ワークポートが向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>3か月程度で転職先を決めたい人（支援期間の上限が原則3か月のため）</li>
              <li>地方在住で、近くの拠点で対面の相談をしたい人</li>
              <li>IT・営業・事務・建設・製造など、幅広い職種で求人を比べたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>求人数の多い大手と比べたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>・<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>年収600万円以上のハイクラス求人を探したい人 →<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link></li>
              <li>エージェントとサイトの違いを先に知りたい人 →<Link href="/compare/agent-vs-site/" className="text-teal underline">エージェントと転職サイトの比較</Link></li>
            </ul>
          </div>
        </div>

        <h2>ワークポート よくある質問</h2>
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
          ワークポートは、全国57か所に拠点を持つ全職種対応の転職エージェントで、厚生労働省に公開された令和7年度の就職者は10,076人です。
          担当者による支援は原則3か月が上限で、紹介先への直接応募などは利用規約で禁止されているため、登録前に利用規約を確認しておくと安心です。担当者との相性もあるため、他の転職エージェントとの併用をおすすめします。
        </p>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
