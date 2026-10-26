import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/newma/" },
  title: "NewMA(ニューマ)の口コミ・評判は？コンサル・M&A特化の転職エージェントを解説【2026年10月】",
  description:
    "NewMA(ニューマ)の口コミ・評判を出典と件数を明記して整理しています。コンサル・M&A特化の転職エージェントの特徴、厚生労働省の人材サービス総合サイトに登録された就職者数、許可番号、利用の流れ、注意点を公式情報にもとづいて解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "NewMA(ニューマ)の口コミ・評判は？コンサル・M&A特化の転職エージェントを解説【2026年10月】",
    description:
      "NewMA(ニューマ)の口コミ・評判を出典とともに整理しています。コンサル・M&A特化の転職エージェントの特徴・運営会社・注意点を公式情報にもとづいて解説します。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NewMA(ニューマ)の口コミ・評判は？コンサル・M&A特化の転職エージェントを解説【2026年10月】",
  dateModified: "2026-10-26",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/newma/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "NewMAの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "NewMAはどんな職種を扱っていますか？",
    a: "M&A仲介・FAS(財務アドバイザリー)・戦略コンサル・DXコンサル・AIコンサル・人事組織コンサル・経営企画・PEファンドなど、コンサルティングとM&A関連の領域を中心に扱っていると公式に案内されています。これらの領域以外を希望する場合は総合型エージェントの利用が向いています。",
  },
  {
    q: "コンサル未経験でも利用できますか？",
    a: "公式LPでは未経験者から経験者まで対応と案内されています。ただし紹介可能な求人は経歴・スキルによって変わるため、自分の経歴でどんなポジションが狙えるかは面談でご確認ください。",
  },
  {
    q: "NewMAの強みは何ですか？",
    a: "公式サイトでは①業界・業務・各求人のリアルな情報提供(魅力だけでなく大変さも伝える)②スキルの活かし方を踏まえた書類・面接対策③内定前だけでなく内定後・入社後まで手厚いフォロー——の3点を強みとして掲げています。",
  },
  {
    q: "どこの会社が運営していますか？",
    a: "NewMA株式会社(大阪市中央区淡路町三丁目1番8号 淡路町七福ビル2階)が運営しています。代表取締役は林 健太郎氏で、公式サイトでは中之島キャピタルグループと紹介されています。有料職業紹介事業許可番号は27-ユ-304092で、許可年月日は2023年8月1日です(2026年10月26日に公式サイトと厚生労働省「人材サービス総合サイト」で確認)。",
  },
  {
    q: "NewMAはやばい？怪しい会社ではない？",
    a: "公式サイトで運営会社(NewMA株式会社)・所在地・代表者・有料職業紹介事業許可番号(27-ユ-304092)が公開されており、厚生労働大臣の許可を受けて職業紹介を行う事業者であることが確認できます。厚生労働省「人材サービス総合サイト」にも同じ許可番号で登録されています(2026年10月26日確認)。一方で大手総合型と比べると公開口コミは2件と少数のため、面談で担当者の業界知見や紹介求人の質をご自身で確かめることをおすすめします。",
  },
  {
    q: "NewMAの利用の流れは？",
    a: "公式サイトでは①フォームから無料相談に申し込む②専任アドバイザーとのキャリア相談・企業に合わせた面接対策③求人の紹介、の3ステップと案内されています(2026年10月26日確認)。",
  },
  {
    q: "NewMAの求人の勤務地や年収帯は？",
    a: "公式サイトに掲載の求人例は、上場準備中企業のM&Aアドバイザリー(大阪府・年収500万〜1,200万円)、外資系大手ファームのDXコンサルタント(東京都・年収700万〜1,500万円)、M&A経験者向け管理職(東京都・年収1,200万〜2,500万円)です。求人の総数は公式サイトで公開されていません。なお、転職サイト「ワンキャリア転職」のNewMAページには求人44件が掲載されています(いずれも2026年10月26日確認)。",
  },
  {
    q: "NewMAの就職実績はどのくらいですか？",
    a: "厚生労働省「人材サービス総合サイト」に登録されたNewMA株式会社の就職者数(4か月以上の有期・無期雇用)は、情報登録年度ベースで令和5年度3人、令和6年度6人、令和7年度14人です。いずれも全員が無期雇用で、無期雇用のうち就職後6か月以内の離職者は0人と登録されています(令和8年10月1日現在の掲載情報を2026年10月26日に確認)。大手と比べると少人数ですが、件数は年々増えています。",
  },
  {
    q: "退会したい場合や苦情がある場合はどこに連絡しますか？",
    a: "退会(利用停止)の手続きは公式サイトに明記されていません。公式の「業務の運営に関する規程」では、苦情の窓口を職業紹介責任者(林 健太郎氏・電話06-6444-4150)としており、個人情報は本人の求めに応じて開示・訂正に対応すると記載されています。利用をやめる場合は担当者またはこの窓口に連絡することをおすすめします(2026年10月26日確認)。",
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

export default function NewmaReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "NewMA(ニューマ)の口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            NewMA(ニューマ)の口コミ・評判は？コンサル・M&amp;A特化の転職エージェントを解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月26日（公式サイト・厚生労働省「人材サービス総合サイト」・公開口コミを同日確認）</p>
          <p className="text-text-secondary leading-relaxed">
            NewMAは、NewMA株式会社が運営するコンサルティング・M&amp;A領域特化型の転職エージェントです。
            DX・戦略・AIコンサルタントに加え、M&amp;A仲介・FAS・経営企画・PEファンドといったハイエンド領域の求人を対象に、
            業界のリアルを踏まえた選考対策と内定後までのフォローを掲げています。
            この記事では、特徴・扱う職種・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="newma" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル・M&amp;A領域に特化した転職エージェントです</strong>。DX・戦略・AIコンサル、M&amp;A仲介、FAS、人事組織コンサル、経営企画、PEファンドなどを対象としています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>業界のリアルな情報提供を掲げています</strong>。求人の魅力だけでなく大変さ・企業ごとの特徴まで伝える方針を公式に打ち出しています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>内定後・入社後までのフォローを明言しています</strong>。条件交渉に加え、内定前だけで終わらない継続フォローを強みとしています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料です</strong>。未経験者から経験者まで、キャリア相談から始められます。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="newma" heading="NewMA公式サイトで無料キャリア相談を予約する" note="コンサル・M&A領域のキャリア相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "コンサル・M&A" },
            { label: "対象", value: "未経験〜経験者" },
            { label: "料金", value: "無料" },
            { label: "フォロー", value: "入社後まで" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>NewMA(ニューマ)の口コミ・評判の傾向（出典あり）</h2>
        <p>
          NewMAは2023年8月に代表が就任した比較的新しいサービスで、公開されている利用者の口コミはまだ<strong>少数</strong>です。
          当サイトでは口コミの創作は行わず、確認できた公開情報の傾向だけを要約します。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>口コミサイト「コエテコキャリア」に、サービス利用証明済みと表示された口コミが<strong>2件</strong>掲載されています（同サイト表示の総合評価は4.8／5、星5が1件・星4が1件）。</li>
              <li>同サイトの項目別評価は、アドバイザー5.0・書類対策5.0・面接対策5.0・求人の充実度4.8と表示されています。</li>
              <li>内容は「担当者が親身」「キャリアの棚卸しにつながった」「初回面談から求人紹介・書類・面接まで一貫して手厚い」など、サポート面を評価する傾向です。</li>
              <li>「ワンキャリア転職」のエージェントプロフィールでは、代表・林 健太郎氏の支援実績として33件が表示されており、M&amp;Aアドバイザリーファームや戦略コンサルへのオファー事例が公開されています。</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>確認できた公開口コミには、悪い点の具体的な記載はありませんでした。ただし件数が2件と少なく、評判の判断材料としては限定的です。</li>
              <li>コエテコキャリアでは、無料登録・面談後の口コミ投稿にAmazonギフトカードを進呈するキャンペーンが案内されています。謝礼つきの投稿である可能性を踏まえてお読みください。</li>
              <li>公式仕様から読める注意点：対象はM&amp;A・コンサル・経営企画・PEファンドなどに限られ、<strong>それ以外の職種の求人はほぼ期待できません</strong>。</li>
              <li>公式サイト掲載の求人例は大阪府・東京都の案件で、<strong>求人総数は非公開</strong>です。地方勤務や求人数の多さを重視する人は総合型との併用が前提です。</li>
            </ul>
          </div>
        </div>
        <div className="bg-warm-gray rounded-xl p-4 mb-3 text-sm text-text-secondary">
          <p className="font-bold text-navy mb-1">当サイトの見方</p>
          <p>
            公開口コミは高評価ですが、2件だけでは「評判が良い」と断定できません。運営会社・許可番号・代表者の経歴（未経験からM&amp;A業界に入った実務経験者）は公式で確認できるため、
            <strong>怪しいサービスではない一方、担当者との相性が結果を左右しやすい少人数型</strong>と考えるのが妥当です。
            無料面談で業界の内情をどこまで具体的に話してくれるかを確かめ、大手エージェントと並行して利用することをおすすめします。
          </p>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典: <a href="https://coeteco.jp/career/services/newma" rel="nofollow noopener" target="_blank" className="underline">コエテコキャリアのNewMA口コミページ</a>（2件）・<a href="https://plus.onecareer.jp/agents/19" rel="nofollow noopener" target="_blank" className="underline">ワンキャリア転職のNewMAページ</a>の公開情報（2026年10月26日確認）の傾向を当サイトが要約しました。口コミ本文の転載や、当サイト独自の点数付けは行っていません。Web検索の範囲では、Googleマップ等の他の口コミは見つかりませんでした。
        </p>

        <h2>NewMAの基本データ【2026年10月26日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">NewMA(コンサル・M&amp;A領域特化型の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">NewMA株式会社（中之島キャピタルグループ）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">〒541-0047 大阪市中央区淡路町三丁目1番8号 淡路町七福ビル2階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役 林 健太郎（2023年8月就任。金融・人材系企業を経て2021年に中之島キャピタル入社、M&amp;Aアドバイザリーを経験）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">27-ユ-304092（許可年月日 2023年8月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象領域</th><td className="px-3 py-2 border-b">DX・戦略・AIコンサル／M&amp;A仲介／FAS／人事組織コンサル／経営企画／PEファンド 等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／書類・面接対策／条件交渉／内定後・入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人例(公式)</th><td className="px-3 py-2 border-b">M&amp;Aアドバイザリー(大阪府・年収500万〜1,200万円)／外資系大手ファームのDXコンサル(東京都・700万〜1,500万円)／M&amp;A経験者向け管理職(東京都・1,200万〜2,500万円)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">公式サイトでは非公開</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">問い合わせ</th><td className="px-3 py-2 border-b">電話 06-6444-4150(月〜金 10:00〜19:00)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://newma.co.jp/" rel="nofollow noopener" target="_blank" className="underline">NewMA公式サイト(newma.co.jp)</a>、2026年10月26日確認。支援実績数・決定率などの数値は公式サイトに記載がないため、公的な登録情報と第三者サイトの掲載値を次の章で出典つきで紹介しています。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>厚生労働省の登録情報で見るNewMAの就職実績</h2>
        <p className="text-sm text-text-secondary mb-4">
          有料職業紹介事業者は、就職者数や早期離職者数を厚生労働省「人材サービス総合サイト」に毎年登録しています。
          口コミが少ないサービスでは、この公的な登録情報が判断材料になるため、当サイトではNewMA株式会社の掲載内容を以下に整理しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">情報登録年度</th>
                <th className="text-right px-3 py-2 border-b">就職者数（4か月以上の有期・無期）</th>
                <th className="text-right px-3 py-2 border-b">うち無期雇用</th>
                <th className="text-right px-3 py-2 border-b">無期雇用のうち6か月以内の離職者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">令和5年度</td><td className="text-right px-3 py-2 border-b">3人</td><td className="text-right px-3 py-2 border-b">3人</td><td className="text-right px-3 py-2 border-b">0人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和6年度</td><td className="text-right px-3 py-2 border-b">6人</td><td className="text-right px-3 py-2 border-b">6人</td><td className="text-right px-3 py-2 border-b">0人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和7年度</td><td className="text-right px-3 py-2 border-b">14人</td><td className="text-right px-3 py-2 border-b">14人</td><td className="text-right px-3 py-2 border-b">0人</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>許可年月日：</strong>2023年8月1日（令和5年8月1日）。代表の就任時期（2023年8月）と一致しており、令和4年度以前の就職者数は0人です。</li>
          <li><strong>得意とする職種（事業者の登録内容）：</strong>戦略コンサルタント、M&amp;Aコンサルタント、経営企画</li>
          <li><strong>取扱職種・地域：</strong>全職種・国内（法令上の取扱範囲であり、実際の紹介は上記の得意職種が中心です）</li>
          <li><strong>登録上の事業所所在地：</strong>大阪市北区中之島3-6-32 ダイビル本館16階。公式サイトの現行表記（大阪市中央区淡路町）とは異なります。登録情報の更新時期の違いによるものと考えられます。</li>
        </ul>
        <p className="text-sm text-text-secondary mb-2">
          就職者は3年度の合計で23人と少人数ですが、年度ごとに増えており、早期離職者は登録上0人です。
          少人数の支援体制であるため、担当者との相性が結果に影響しやすい点は引き続き考慮が必要です。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do?action=initDisp&screenId=GICB101010" rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>の職業紹介事業詳細（許可番号27-ユ-304092で検索、令和8年10月1日現在の掲載情報）を2026年10月26日に確認。「情報登録年度」は同サイトの表記どおりで、対象となる集計期間は同サイトでご確認ください。</p>

        <h2>第三者サイトに掲載されているNewMAの支援実績</h2>
        <p className="text-sm text-text-secondary mb-3">
          転職サイト「ワンキャリア転職」のNewMAページには、<strong>支援実績33件・在籍エージェント2名・求人44件</strong>が掲載されています（2026年10月26日確認）。
          支援実績の一覧に表示される直近10件を当サイトが集計した結果は、次のとおりです。
        </p>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li><strong>オファー先：</strong>10件すべてがM&amp;Aアドバイザリーファーム（ポジションはM&amp;A・正社員、いずれも2026年のオファー）</li>
          <li><strong>利用者の前職：</strong>戦略コンサルタント4件、個人営業・FP 2件、海外営業1件、財務・会計コンサルタント1件、知財管理・行政書士1件、ルートセールス・渉外1件</li>
          <li><strong>年代：</strong>20代中盤〜30代後半</li>
          <li><strong>オファー年収：</strong>360万〜1,000万円（同サイトの基本表示額。「+150万円~」などの付記は同サイトに説明がないため集計から除いています）</li>
        </ul>
        <p className="text-sm text-text-secondary mb-2">
          前職が営業職の利用者がM&amp;Aアドバイザリーのオファーを得た例もあり、公式の「未経験者から経験者まで対応」という案内と整合します。
          一方で、表示された実績はM&amp;Aアドバイザリーに集中しており、戦略・DXコンサルや経営企画の実績は直近10件には含まれていませんでした。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://plus.onecareer.jp/agents/19/placement_records" rel="nofollow noopener" target="_blank" className="underline">ワンキャリア転職「NewMAの支援実績」</a>（2026年10月26日確認）。ワンキャリア転職の支援実績（オファー件数）と厚生労働省に登録された就職者数は、集計の範囲と期間が異なります。</p>

        <h2>NewMAの利用の流れ</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-text-secondary mb-4">
          <li><strong>無料相談に申し込む</strong>：公式サイトのフォームに必要事項を入力して送信します。</li>
          <li><strong>キャリア相談・面接対策</strong>：専任アドバイザーと面談し、志望企業に合わせた書類・面接対策を受けます。</li>
          <li><strong>求人の紹介</strong>：一般の求人票には載らない業務の実情なども含めて求人が紹介されます。内定後の条件交渉・入社後のフォローまで対応すると案内されています。</li>
        </ol>
        <p className="text-sm text-text-secondary mb-8">
          退会（利用停止）の手続き方法は公式サイトに明記がありません。個人情報の開示・訂正・削除は本人確認のうえ対応すると公式に記載されているため、利用をやめたい場合は担当者または公式の問い合わせ窓口に連絡することをおすすめします（2026年10月26日確認）。
        </p>
        <h3 className="font-bold text-navy mb-2">公式「業務の運営に関する規程」の要点</h3>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-2">
          <li><strong>求職者の手数料：</strong>求職者からは手数料を一切徴収しないと明記されています。</li>
          <li><strong>取扱範囲：</strong>全職種（港湾運送業務・建設業務を除く）、地域は国内です。</li>
          <li><strong>苦情の窓口：</strong>職業紹介責任者の林 健太郎氏（電話06-6444-4150）が対応すると定められています。</li>
          <li><strong>個人情報：</strong>職業紹介に携わる担当者のみが取り扱い、本人の求めに応じて資格・職歴などの事実情報の開示・訂正に対応すると記載されています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://newma.co.jp/column/1319" rel="nofollow noopener" target="_blank" className="underline">NewMA「業務の運営に関する規程」</a>（2026年6月1日掲載、2026年10月26日確認）。</p>

        <h2>NewMAの特徴（公式の公表情報より）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "業界知見に基づくリアルな情報提供",
              desc: "業界・業務・各求人の「リアル」を提供すると公式に掲げています。表面的な求人票の情報だけでなく、魅力や大変さ、企業ごとの特徴まで伝える方針です。",
            },
            {
              title: "スキルの活かし方を踏まえた書類・面接対策",
              desc: "求職者の経歴のどこがコンサル・M&A業界で評価されるかを踏まえた書類添削・面接対策を行うとしています。ケース面接など業界特有の選考にも対応する体制です。",
            },
            {
              title: "内定後・入社後まで続くフォロー",
              desc: "「交渉力に自信」を掲げ、条件交渉に加えて内定後・入社後の継続フォローを明言しています。ハイエンド領域の転職で重要な入社前後のギャップ対策になります。",
            },
            {
              title: "未経験からのコンサル転職にも対応",
              desc: "対象は未経験者から経験者までです。事業会社からコンサル・M&A業界への転身を考える人もキャリア相談から始められます。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>NewMAが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>DX・戦略・AIコンサルタントへの転職を考えている人</li>
              <li>M&amp;A仲介・FAS・PEファンドなど金融ハイエンド領域を狙う人</li>
              <li>未経験からコンサル業界に挑戦したい人</li>
              <li>業界の実情(激務度・企業ごとの違い)まで踏み込んで聞きたい人</li>
              <li>内定後の条件交渉や入社後フォローまで任せたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>コンサル特化の別エージェントとも比較したい人 →<Link href="/review/myvision/" className="text-teal underline">MyVision（未経験8割・コンサル特化）</Link>との併用が候補です</li>
              <li>コンサル・M&amp;A以外の職種も幅広く見たい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>スカウト型でハイクラス求人を待ちたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が候補です</li>
              <li>20〜30代の成長企業志向でコンサル以外も比較したい人 →<Link href="/review/assign/" className="text-teal underline">ASSIGN（アサイン）</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          NewMAはコンサル・M&amp;A領域に対象を絞ったサービスです。転職エージェントは<strong>2〜3社の併用が一般的</strong>なので、
          この領域はNewMA、他の選択肢は総合型・スカウト型で確認する使い分けが現実的です。
        </p>

        <h2>NewMA よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：コンサル・M&amp;A転職の専門相談先として有力な選択肢</h2>
        <p>
          NewMAは、コンサルティング・M&amp;A領域に特化した転職エージェントです。
          業界のリアルな情報提供・選考対策・入社後まで続くフォローを掲げ、未経験者から経験者まで無料で利用できます。
          コンサルやM&amp;A業界への転職を具体的に考え始めた人は、
          <FelmatTextLink slug="newma" text="NewMAの無料キャリア相談" />(PR)から始めることをおすすめします。
        </p>

        <FelmatCta slug="newma" heading="NewMA公式サイトで無料キャリア相談を予約する" note="コンサル・M&A領域のキャリア相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">NewMAを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
            </Link>
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
            </Link>
            <Link href="/review/susucari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サスキャリの詳細
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
