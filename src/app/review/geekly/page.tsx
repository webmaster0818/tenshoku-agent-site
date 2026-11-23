import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ギークリーの評判は？厚労省の就職者数・有価証券報告書・利用規約で確認【2026年11月】",
  description:
    "IT・Web・ゲーム業界専門の転職エージェント「ギークリー」の評判を、厚生労働省の人材サービス総合サイトの就職者数・早期離職者数、有価証券報告書、利用規約で確認しました。令和7年度の就職者は4,348人で、5年で約3.5倍に増えています。求人数表記の違いや規約の注意点も整理しています。",
  alternates: { canonical: "/review/geekly/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ギークリーの評判は？厚労省の就職者数・有価証券報告書・利用規約で確認【2026年11月】",
    description: "厚生労働省に公開された就職者数・早期離職者数と、有価証券報告書・利用規約にもとづく注意点をまとめています。",
  },
};

const CHECKED = "2026年11月23日";

// 厚生労働省 人材サービス総合サイト（許可番号13-ユ-305272・令和8年11月1日現在の表示・5事業所の合計）
const jinzai = [
  { y: "令和2年度", all: 1250, mu: 1130, quit: 55 },
  { y: "令和3年度", all: 1730, mu: 1589, quit: 46 },
  { y: "令和4年度", all: 2478, mu: 2473, quit: 59 },
  { y: "令和5年度", all: 2963, mu: 2963, quit: 83 },
  { y: "令和6年度", all: 3569, mu: 3569, quit: 99 },
  { y: "令和7年度", all: 4348, mu: 4348, quit: 133 },
];
const pct = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

const jobs = [
  { k: "技術職（SE・インフラエンジニア・Webエンジニア）", n: 22863 },
  { k: "営業関連", n: 4617 },
  { k: "Web・PdM・クリエイティブ", n: 2247 },
  { k: "マーケティング・企画", n: 1758 },
  { k: "ゲーム", n: 1214 },
  { k: "技術職（組み込みソフトウェア）", n: 851 },
  { k: "コンサルタント", n: 583 },
  { k: "データアナリスト・リサーチャー", n: 344 },
];

const faqData = [
  {
    q: "ギークリーの評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、厚生労働省の人材サービス総合サイトでは令和7年度の就職者が4,348人（全員が無期雇用）、就職後6か月以内に離職した人が133人（3.1%・当サイト計算）と公開されています。担当者との相性もあるため、複数の転職エージェントと併用して比べる方法をおすすめします。",
  },
  {
    q: "ギークリーはどのような職種に対応していますか？",
    a: "会社概要では事業内容を「IT/Web/ゲーム業界専門特化 人材紹介」としています。求人検索の大分類は、技術職（SE・インフラエンジニア・Webエンジニア）、組み込みソフトウェア、Web・PdM・クリエイティブ、ゲーム、営業関連、マーケティング・企画、データアナリスト・リサーチャー、コンサルタントの8つです。厚生労働省のサイトでの取扱職種は「全職種」と登録されています。",
  },
  {
    q: "ギークリーは無料で使えますか？",
    a: "転職支援等サービス利用規約の第9条で「本サービスの利用料金は、無償とします。」と定められています。厚生労働省のサイトに掲載された手数料表でも、紹介手数料を負担するのは求人企業とされています。",
  },
  {
    q: "ギークリーの求人数は何件ですか？",
    a: "公式サイトのトップページと「ご利用の流れ」では「45,400件以上（2026年10月時点）」、よくある質問では「40,100件以上（2026年10月時点）」と表記されており、同じ時点で数字が異なります。当サイトが確認した時点の求人検索の該当件数は35,762件でした。",
  },
  {
    q: "海外に住んでいても利用できますか？",
    a: "利用規約の第10条では、職業安定法の定めにより、海外在住の方（一時帰国の方を含む）にはサービスを提供できないとされています。",
  },
  {
    q: "ギークリーは上場していますか？",
    a: "株式会社ギークリーは東京証券取引所スタンダード市場に上場しています（証券コード505A）。2026年5月期の有価証券報告書では、売上高は97億8,334万円（前期比36.9%増）、新規登録者数は120,717人と記載されています。",
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
  { label: "株式会社ギークリー 会社概要", url: "https://corp.geekly.co.jp/corporate/overview/" },
  { label: "株式会社ギークリー 株式情報（スタンダード市場・505A）", url: "https://corp.geekly.co.jp/ir/stock/overview/" },
  { label: "株式会社ギークリー 第15期 有価証券報告書（2026年5月期）", url: "https://ssl4.eir-parts.net/doc/505A/yuho_pdf/S100YZ0G/00.pdf" },
  { label: "株式会社ギークリー 2027年5月期 第1四半期 決算説明資料", url: "https://ssl4.eir-parts.net/doc/505A/ir_material_for_fiscal_ym/213955/00.pdf" },
  { label: "株式会社ギークリー ニュース「職業紹介優良事業者に認定」（2025年4月4日）", url: "https://corp.geekly.co.jp/news/2025/04/04/250404-2/" },
  { label: "ギークリー 公式サイト（求職者向け）", url: "https://www.geekly.co.jp/" },
  { label: "ギークリー ご利用の流れ", url: "https://www.geekly.co.jp/services/flow/" },
  { label: "ギークリー よくある質問", url: "https://www.geekly.co.jp/services/faq/" },
  { label: "ギークリー 転職支援等サービス利用規約（令和6年11月20日改訂）", url: "https://www.geekly.co.jp/terms/" },
  { label: "厚生労働省 人材サービス総合サイト（許可番号13-ユ-305272で検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
  { label: "厚生労働省 人材サービス総合サイト 株式会社ギークリー 手数料表", url: "https://jinzai.hellowork.mhlw.go.jp/icb_data/UploadFiles/Jigyosho/13-%E3%83%A6-305272/tesuryo/%E6%89%8B%E6%95%B0%E6%96%99%E8%A1%A8.pdf" },
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
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "ギークリーの評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ギークリーの評判は？厚労省の就職者数・有価証券報告書・利用規約で確認【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "4,348人", l: "厚労省に公開された就職者数（令和7年度）" },
              { v: pct(133, 4348), l: "就職後6か月以内の離職（当サイト計算）" },
              { v: "約3.5倍", l: "就職者数の増加（令和2年度→令和7年度・当サイト計算）" },
              { v: "120,717人", l: "新規登録者数（2026年5月期・有価証券報告書）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            ギークリーは、株式会社ギークリー（2011年8月設立・東証スタンダード上場）が運営する、IT・Web・ゲーム業界専門の転職エージェントです。
            厚生労働省の人材サービス総合サイトでは、<strong>令和7年度の就職者が4,348人</strong>と公開されており、令和2年度（1,250人）から毎年増えています。
            就職後6か月以内に離職した人の割合は、6年間いずれも2〜5%の範囲です。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・有価証券報告書・厚生労働省のサイトで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>ギークリーの基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>運営会社</th><td className={td}>株式会社ギークリー（2011年8月設立・資本金3,000万円・東証スタンダード市場 505A）</td></tr>
              <tr><th className={th}>本社</th><td className={td}>東京都渋谷区渋谷二丁目17番1号 渋谷アクシュ10階（ほかに渋谷の3オフィスと大阪オフィス）</td></tr>
              <tr><th className={th}>代表者</th><td className={td}>代表取締役社長 奥山貴広</td></tr>
              <tr><th className={th}>従業員数</th><td className={td}>449人（2026年5月31日現在・正社員の就業人員）。平均年齢28.4歳・平均勤続年数2.1年</td></tr>
              <tr><th className={th}>有料職業紹介事業</th><td className={td}>許可番号 13-ユ-305272（平成23年12月1日許可・取扱職種は全職種・取扱地域は国内）。職業紹介優良事業者の認定あり（2025年2月6日認定）</td></tr>
              <tr><th className={th}>対象業界</th><td className={td}>IT・Web・ゲーム業界（会社概要の事業内容「IT/Web/ゲーム業界専門特化 人材紹介」）</td></tr>
              <tr><th className={th}>求人数の表記</th><td className={td}>トップページ・ご利用の流れは「45,400件以上」、よくある質問は「40,100件以上」（いずれも2026年10月時点の表記）。求人検索の該当件数は35,762件（{CHECKED}の表示）</td></tr>
              <tr><th className={th}>面談</th><td className={td}>対面を推奨（オンラインも可）。所要時間は90分程度で、平日と土曜日に対応（よくある質問）</td></tr>
              <tr><th className={th}>料金</th><td className={td}>求職者は無料（利用規約第9条）。紹介手数料は求人企業が負担（手数料表）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：株式会社ギークリー 会社概要・株式情報・2026年5月期 有価証券報告書、ギークリー公式サイト（トップページ・ご利用の流れ・よくある質問・利用規約）、厚生労働省 人材サービス総合サイト。求人数の表記は公式サイト内で一致していないため、両方を掲載しています。
        </p>

        <h2>厚生労働省に公開された就職者数と早期離職者数</h2>
        <p>
          有料職業紹介事業者は、職業安定法にもとづき、紹介により就職した人の数や、無期雇用で就職した人のうち6か月以内に離職した人の数を公開しています。ギークリー（許可番号13-ユ-305272）の登録内容は次のとおりです（令和8年11月1日現在の表示・5事業所の合計）。
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
                  <td className="p-3 text-right">{x.quit}人</td>
                  <td className="p-3 text-right">{pct(x.quit, x.mu)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※離職者の割合は「6か月以内の離職者 ÷ 無期雇用の就職者」で当サイトが計算した値です。「離職の有無が判明せず」の人数はいずれの年度も0人と登録されています。厚生労働省のサイトには割合は表示されていません。
        </p>
        <p className="mb-4">
          就職者数は令和2年度の1,250人から令和7年度の4,348人まで、5年で約3.5倍に増えています（当サイト計算）。令和5年度以降は、就職者の全員が無期雇用（正社員など期間の定めのない雇用）です。
          6か月以内の離職者の割合は令和2年度の4.9%から令和4年度に2.4%まで下がり、令和7年度は3.1%でした。
        </p>
        <p className="mb-10">
          有価証券報告書では「返金が発生する短期離職は全体の2.8％」と記載されています。返金（返戻金）の対象は手数料表の定めでは入社後3か月以内の退職で、厚生労働省のサイトの「6か月以内」とは期間が異なるため、両者の数値は一致しません。なお、同じ箇所の「97％の求職者、求人企業に満足頂けている」という記載は、満足度調査の結果ではなく、短期離職の割合から同社が述べている認識です。
        </p>

        <h2>求人の職種別の件数</h2>
        <p>公式サイトの求人検索で表示された、職種の大分類ごとの件数は次のとおりです（{CHECKED}の表示。求人の掲載状況により日々変動します）。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種の大分類</th>
                <th className="p-3 text-right">件数</th>
                <th className="p-3 text-right rounded-tr-lg">8分類の合計に占める割合（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.n.toLocaleString("ja-JP")}件</td>
                  <td className="p-3 text-right">{pct(x.n, jobs.reduce((s, j) => s + j.n, 0))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          8分類の合計は{jobs.reduce((s, j) => s + j.n, 0).toLocaleString("ja-JP")}件で、SE・インフラエンジニア・Webエンジニアの技術職が約3分の2を占めています。IT業界の営業職やマーケティング職の求人も扱っていますが、件数の中心はエンジニア職です。
        </p>

        <h2>転職活動にかかる期間と取引先の数</h2>
        <p>同社が公表している、転職活動の期間と求人企業との取引に関する数値は次のとおりです（いずれも自社発表）。</p>
        <div className="space-y-4 mb-10">
          {[
            { t: "転職相談から入社まで約40日", d: "2027年5月期 第1四半期の決算説明資料に「2026年5月期の全成約事例の平均」と注記されています。よくある質問では、応募から内定までの期間は平均約30日と案内されています。" },
            { t: "取引先数1,755社・リピート率81.6%（2026年5月期）", d: "有価証券報告書に記載されています。リピート率は「（成約企業数－初成約企業数）÷成約企業数」で計算した値と定義されています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>利用規約で確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "海外在住の方は利用できない", d: "第10条では、職業安定法の定めにより、海外在住の方（一時帰国の方を含む）にはサービスを提供できないとされています。" },
            { t: "紹介先への直接連絡は禁止事項", d: "第15条では、同社の承諾なく、紹介を受けた求人企業と直接連絡を取り合うことや直接取引を行うこと、採用が決まった事実を同社に伝えないことを禁止事項としています。" },
            { t: "複数の登録は禁止", d: "第15条では、1人が複数の利用者登録を行うことを禁止事項としています。" },
            { t: "転職の成果は保証されない", d: "第19条では、サービスの利用による転職の成果について、同社は一切の保証を行わないと定めています。" },
            { t: "支援期間の上限は定められていない", d: "利用規約とよくある質問には、担当者による支援期間の上限の記載はありません。ご利用の流れでは、入社後も相談できると案内されています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>サービスの流れ</h2>
        <p className="mb-10">
          公式サイトでは、登録→アドバイザーとの面談→求人紹介→書類選考・面接→内定・条件交渉→入社・入社後サポートの6段階で案内されています。面談は対面を推奨しており、オンラインにも対応しています。
          よくある質問では、他の転職エージェントとの併用は「複数社ご利用いただいて構いません」、紹介された求人に「必ず応募する必要はありません」と案内されています。
        </p>

        <h2>ギークリーが向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>IT・Web・ゲーム業界のエンジニア職で転職先を探したい人</li>
              <li>東京・大阪のオフィスで対面の面談を受けたい人</li>
              <li>IT業界の営業・マーケティング職も含めて比べたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>IT以外の業界も含めて求人を比べたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>・<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>IT特化の他社とも比べたい人 →<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>・<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link></li>
              <li>ITエンジニアの転職全般を知りたい人 →<Link href="/industry/it-engineer/" className="text-teal underline">ITエンジニアの転職</Link></li>
            </ul>
          </div>
        </div>

        <h2>ギークリー よくある質問</h2>
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
          ギークリーは、IT・Web・ゲーム業界に特化した上場企業の転職エージェントで、厚生労働省に公開された令和7年度の就職者は4,348人、6か月以内の離職者の割合は3.1%です（当サイト計算）。
          公式サイトの求人数は表記によって40,100件以上・45,400件以上と異なるため、登録後に希望条件での件数を確認すると安心です。担当者との相性もあるため、他の転職エージェントとの併用をおすすめします。
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
