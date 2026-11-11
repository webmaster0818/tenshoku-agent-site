import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";
import AgentClients from "@/components/AgentClients";

export const metadata: Metadata = {
  alternates: { canonical: "/review/type-woman/" },
  title: "type女性の転職エージェントの評判・口コミは？やばい？都道府県別の求人数と注意点を公式データで検証【2026年11月】",
  description:
    "type女性の転職エージェント（タイプ女性）の口コミ・評判を、出典を明記した傾向と公式データで検証します。求人総数38,146件・13都道府県の求人数（当サイト集計）、運営会社・許可番号、利用の流れ、やばい？等のFAQまで解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "type女性の転職エージェントの評判・口コミは？やばい？都道府県別の求人数と注意点を公式データで検証【2026年11月】",
    description:
      "type女性の転職エージェント（タイプ女性）の口コミ・評判を出典を明記して整理しています。求人数・地域差・運営会社・利用の流れを公式情報で確認しました。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "type女性の転職エージェントの評判・口コミは？やばい？都道府県別の求人数と注意点を公式データで検証【2026年11月】",
  dateModified: "2026-11-11",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/type-woman/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "type女性の転職エージェントはやばい・怪しいサービスですか？",
    a: "運営は東証プライム上場の株式会社キャリアデザインセンター(1993年7月8日設立・東京都港区赤坂)で、厚生労働大臣許可(13-ユ-040429)を受けて人材紹介事業を行っています(運営会社の公式「運営会社について」ページ、2026年10月14日確認)。同社は「type」「女の転職type」「type転職エージェント」なども運営しており、許可を受けた正規の転職エージェントです。求職者の利用は無料です。",
  },
  {
    q: "type女性の転職エージェントで求人を紹介してもらえない・断られることはありますか？",
    a: "公式サイトのFAQでも、エージェントには「不得意分野がある点には注意が必要」と案内されています。求人は勤務地に偏りがあり、2026年11月11日時点で東京都勤務地の検索結果は公開8,617件・非公開22,933件、大阪府は公開1,173件・非公開2,688件、静岡県は公開89件・非公開138件でした(公式求人検索)。希望の勤務地・職種の求人が少ない場合は紹介が限られる可能性があるため、総合型エージェントとの併用をおすすめします。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "公式の求人検索では全国の都道府県と海外を勤務地として選べ、カウンセリングは電話面談で受けられます。ただし求人の多くは首都圏に集中しており(上記の東京都・大阪府の件数を参照)、首都圏・関西以外の地域では紹介できる求人が少ない可能性があります。地方の求人は地域に強い総合型エージェントと併用して比較することをおすすめします。",
  },
  {
    q: "「女の転職type」と「type女性の転職エージェント」は同じサービスですか？",
    a: "どちらも株式会社キャリアデザインセンターが運営していますが、運営会社の公式サイトでは別サービスとして掲載されています。「女の転職type」は自分で求人を探して応募する転職サイト、「type女性の転職エージェント」はキャリアアドバイザーが面談・求人紹介・面接対策・条件交渉などを支援する転職エージェントです。口コミを調べる際は、どちらのサービスに対する評価かを確認してください。",
  },
  {
    q: "type女性の転職エージェントの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリアカウンセリング・求人紹介・面接対策などの費用を負担することはありません。",
  },
  {
    q: "男性でも利用できますか？",
    a: "サービス名のとおり女性の転職支援に特化したエージェントです。運営元の株式会社キャリアデザインセンターは総合型の「type転職エージェント」も運営しているため、男性やサービス対象に合わない場合はそちらや他の総合型エージェントが選択肢になります。",
  },
  {
    q: "未経験の職種にも転職できますか？",
    a: "公式LPでは未経験可の求人にも対応していることが案内されています。デザイナー・マーケティング・営業・ITエンジニア・コンサルティングなど複数職種を扱っており、紹介可能な求人は経歴・希望条件によって変わるため、詳細はカウンセリングで確認してください。",
  },
  {
    q: "「約79%が年収アップ」とはどういう意味ですか？",
    a: "公式サイトが公表している数値で、年収アップを希望した利用者のうち約79%が年収アップを実現したというものです(対象期間: 2021年10月〜2025年3月・公称)。全利用者の79%ではない点、集計条件の詳細は公式の注記に従う点に注意し、参考値として捉えてください。",
  },
  {
    q: "面談は対面が必要ですか？",
    a: "電話面談によるキャリアカウンセリングに対応していることが公式サイトで案内されています。仕事や育児で来社が難しい場合も相談しやすい体制です。最新の面談方法は申し込み時に公式サイトでご確認ください。",
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

export default function TypeWomanReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "type女性の転職エージェントの評判・口コミ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            type女性の転職エージェントの評判・口コミは？やばい？都道府県別の求人数と注意点を公式データで検証【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-2">最終更新: 2026年11月11日（求人数を更新し、13都道府県の勤務地別求人数を当サイトで集計）</p>
          <p className="text-text-secondary leading-relaxed">
            type女性の転職エージェント（「type女性」「タイプ女性の転職エージェント」とも検索されます）は、東証プライム上場の株式会社キャリアデザインセンターが運営する、女性の転職に特化した転職エージェントです。
            転職経験や子育て経験を生かしたキャリアアドバイザーによるサポートを掲げ、年間15,000名以上(2024年実績・公称)のキャリアカウンセリングを行っています。
            この記事では、特徴・実績・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="type-woman" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>女性の転職に特化した老舗エージェントです</strong>。運営は1993年設立・東証プライム上場の株式会社キャリアデザインセンターで、運営基盤の安心感があります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>キャリアカウンセリングの実績は年間15,000名以上(2024年実績・公称)です</strong>。求人総数38,146件・非公開求人27,359件(約7割、2026年11月11日時点の公式表記)と、女性特化型として大きな求人規模です。ただし求人は東京都勤務地に集中しています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>年収UP希望者の約79%が年収アップを実現したと公表しています(公称)</strong>。カウンセリング満足度89.4%も公表されています(いずれも公式の集計条件に基づく参考値)。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料です</strong>。電話でのキャリアカウンセリング・応募企業ごとの面接対策・条件交渉の代行・入社後フォローまで費用はかかりません。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="type-woman" heading="type女性の転職エージェント公式サイトで無料カウンセリングを予約する" note="登録・キャリアカウンセリングは無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "女性の転職" },
            { label: "年間カウンセリング実績（公称）", value: "1.5万名+" },
            { label: "年収UP実績（公称）", value: "約79%" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>type女性の転職エージェントの基本データ【2026年11月11日更新】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">type女性の転職エージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社キャリアデザインセンター(東証プライム上場・証券コード2410)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都港区赤坂3-21-20 赤坂ロングビーチビル</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">1993年7月8日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-040429</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">求人総数38,146件・非公開求人27,359件(約7割)【2026年11月11日時点の公式表記。10月14日は37,615件・26,786件、10月21日は37,603件・26,850件で、4週間で総数は531件増】</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">勤務地別の求人数</th><td className="px-3 py-2 border-b">東京都: 公開8,617件・非公開22,933件／大阪府: 公開1,173件・非公開2,688件【2026年11月11日の公式求人検索の表示件数。13都道府県の一覧は下の表】</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役社長兼会長 多田 弘實</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談方法</th><td className="px-3 py-2 border-b">電話面談(来社不要)。オンラインの転職相談会も開催</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">転職を考える女性(デザイナー・マーケティング・営業・ITエンジニア・コンサルティング等の複数職種)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">電話面談によるキャリアカウンセリング／求人紹介／応募書類の作成支援／応募企業ごとの面接対策／面接日程の調整／入社日などの条件交渉の代行／入社後フォロー／女性管理職比率・産育休取得率などの企業情報の確認</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://type.woman-agent.jp/" rel="nofollow noopener" target="_blank" className="underline">type女性の転職エージェント公式サイト</a>(求人数・勤務地別の検索件数は2026年11月11日、サポート内容は10月14日に確認)および<a href="https://type.career-agent.jp/aboutus/" rel="nofollow noopener" target="_blank" className="underline">運営会社について(株式会社キャリアデザインセンター)</a>(所在地・設立・代表者・許可番号)、2026年10月14日確認。勤務地別の件数は複数勤務地の求人が重複して数えられる場合があります。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>都道府県別の求人数（13都道府県・当サイト集計）</h2>
        <p className="text-sm text-text-secondary mb-4">
          「地方の求人が少ない」という評判を数字で確かめるため、公式の求人検索で勤務地を1つずつ指定し、表示された件数を記録しました（2026年11月11日）。検索上位の評判記事では東京以外の件数がほとんど示されていないため、当サイトで集計しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">勤務地</th><th className="bg-gray-50 text-left px-3 py-2 border-b">公開求人</th><th className="bg-gray-50 text-left px-3 py-2 border-b">非公開求人</th><th className="bg-gray-50 text-left px-3 py-2 border-b">合計</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">東京都</td><td className="px-3 py-2 border-b">8,617件</td><td className="px-3 py-2 border-b">22,933件</td><td className="px-3 py-2 border-b">31,550件</td></tr>
              <tr><td className="px-3 py-2 border-b">大阪府</td><td className="px-3 py-2 border-b">1,173件</td><td className="px-3 py-2 border-b">2,688件</td><td className="px-3 py-2 border-b">3,861件</td></tr>
              <tr><td className="px-3 py-2 border-b">神奈川県</td><td className="px-3 py-2 border-b">841件</td><td className="px-3 py-2 border-b">1,883件</td><td className="px-3 py-2 border-b">2,724件</td></tr>
              <tr><td className="px-3 py-2 border-b">愛知県</td><td className="px-3 py-2 border-b">551件</td><td className="px-3 py-2 border-b">1,194件</td><td className="px-3 py-2 border-b">1,745件</td></tr>
              <tr><td className="px-3 py-2 border-b">福岡県</td><td className="px-3 py-2 border-b">326件</td><td className="px-3 py-2 border-b">748件</td><td className="px-3 py-2 border-b">1,074件</td></tr>
              <tr><td className="px-3 py-2 border-b">千葉県</td><td className="px-3 py-2 border-b">427件</td><td className="px-3 py-2 border-b">560件</td><td className="px-3 py-2 border-b">987件</td></tr>
              <tr><td className="px-3 py-2 border-b">埼玉県</td><td className="px-3 py-2 border-b">402件</td><td className="px-3 py-2 border-b">491件</td><td className="px-3 py-2 border-b">893件</td></tr>
              <tr><td className="px-3 py-2 border-b">兵庫県</td><td className="px-3 py-2 border-b">192件</td><td className="px-3 py-2 border-b">276件</td><td className="px-3 py-2 border-b">468件</td></tr>
              <tr><td className="px-3 py-2 border-b">北海道</td><td className="px-3 py-2 border-b">133件</td><td className="px-3 py-2 border-b">419件</td><td className="px-3 py-2 border-b">552件</td></tr>
              <tr><td className="px-3 py-2 border-b">広島県</td><td className="px-3 py-2 border-b">151件</td><td className="px-3 py-2 border-b">298件</td><td className="px-3 py-2 border-b">449件</td></tr>
              <tr><td className="px-3 py-2 border-b">宮城県</td><td className="px-3 py-2 border-b">126件</td><td className="px-3 py-2 border-b">282件</td><td className="px-3 py-2 border-b">408件</td></tr>
              <tr><td className="px-3 py-2 border-b">京都府</td><td className="px-3 py-2 border-b">140件</td><td className="px-3 py-2 border-b">197件</td><td className="px-3 py-2 border-b">337件</td></tr>
              <tr><td className="px-3 py-2 border-b">静岡県</td><td className="px-3 py-2 border-b">89件</td><td className="px-3 py-2 border-b">138件</td><td className="px-3 py-2 border-b">227件</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          <strong>当サイトの見方：</strong>東京都の合計31,550件は、求人総数38,146件の8割を超えます（勤務地が複数ある求人は各都道府県で重複して数えられるため、目安です）。東京都に次ぐ大阪府・神奈川県でも合計は3,000件前後で、東京都の約10分の1です。
          静岡県・京都府・宮城県など、合計が500件に満たない地域もあります。首都圏以外で転職する場合は、面談で希望地域の求人数を確認し、地域の求人に強い総合型エージェントと併用することをおすすめします。
        </p>
        <p className="text-sm text-text-secondary mb-4">
          なお、比較記事の中には「求人数 約1.1万件」と紹介しているものがあります。公式表記の求人総数38,146件から非公開求人27,359件を引いた公開求人は10,787件（2026年11月11日時点）で、公開求人だけを数えた値とみられます。記事によって求人数が大きく違うのは、非公開求人を含めるかどうかの違いです。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：type女性の転職エージェント公式サイトの求人検索（勤務地別の検索結果ページ）、2026年11月11日に当サイトが確認。件数は日々変動します。</p>

        <h2>type女性の転職エージェントの口コミ・評判の傾向（出典明記）</h2>
        <p className="text-sm text-text-secondary mb-4">
          type女性の転職エージェントの口コミ・評判を、当サイトで確認できた範囲で整理します。
          ネット上の「評判」記事の多くは転職サービスの比較・紹介メディア（アフィリエイト掲載を含む）によるもので一次情報ではないため、当サイトでは口コミの出典にしていません。
          口コミサイト「みん評」は当サイトの確認環境から閲覧できず(2026年10月14日・11月11日)、口コミサイト「コエテコキャリア」の同サービスページにも利用者の口コミは掲載されていませんでした(2026年11月11日)。一次の公開口コミとして内容を確認できたものは少数でした。そのため以下は、公式が公表する評価データと、公式仕様から読み取れる事実をもとにまとめています。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながる公表データ</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>面談時のカウンセリングで89.4%が高評価と公表されています(公称。サービス推奨度0〜10で9・10と回答した378名のアンケートを集計、調査期間2025年1月〜2026年3月)</li>
              <li>年収UP希望者の約79%が年収アップしたと公表されています(公称・自社調べ、2021年10月1日〜2025年3月31日)</li>
              <li>アドバイザー全員が結婚・出産など女性特有のキャリアとライフプランの悩みに精通していると公式FAQで案内されています</li>
              <li>女性管理職比率・産育休取得率など、求人票だけでは分かりにくい企業情報を確認してもらえます</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりうる点</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>求人は東京都勤務地に集中しています(2026年11月11日時点で東京都: 公開8,617件・非公開22,933件、大阪府: 公開1,173件・非公開2,688件)。首都圏以外では紹介求人が少ない可能性があります</li>
              <li>公式FAQ自身が「エージェントごとの不得意分野がある」と注意喚起しており、希望条件によっては紹介が限られることがあります</li>
              <li>面談は電話中心のため、対面で相談したい人には合わない場合があります</li>
              <li>上記の満足度・年収UP率は自社集計の数値で、第三者の検証値ではありません</li>
            </ul>
          </div>
        </div>
        <div className="bg-warm-gray rounded-2xl p-5 mb-3">
          <p className="font-bold text-navy mb-1 text-sm">当サイトの見方</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            運営基盤(東証プライム上場・厚生労働大臣許可13-ユ-040429)と女性のキャリア相談への特化は明確で、「やばい」と言える根拠は確認できませんでした。
            一方で求人の地域差ははっきりしています。当サイトでは、首都圏で働きたい女性には有力な選択肢と評価しています。地方や関西以外での転職を考える人には、総合型エージェントとの併用を前提とした利用をおすすめします。
          </p>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：type女性の転職エージェント公式サイトの公表データ・FAQ・求人検索(2026年10月14日確認)。公開口コミサイトの本文の転載・独自の点数付けは行っていません。</p>

        <h2>type女性の転職エージェントの利用の流れ</h2>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-text-secondary mb-3">
          <li><strong>登録</strong>：公式サイトから無料登録</li>
          <li><strong>面談</strong>：電話でキャリアカウンセリング(来社不要)</li>
          <li><strong>求人紹介</strong>：非公開求人を含めて希望に合う求人を紹介</li>
          <li><strong>応募</strong>：マイページから応募。応募書類の作成もサポート</li>
          <li><strong>面接</strong>：日程調整の代行と応募企業ごとの面接対策</li>
          <li><strong>内定</strong>：入社日などの条件交渉の代行、入社後のフォロー</li>
        </ol>
        <p className="text-xs text-text-muted mb-8">出典：type女性の転職エージェント公式サイト(2026年10月14日確認)。退会方法は公式サイト上のFAQでは確認できなかったため、利用を止めたい場合は担当アドバイザーに連絡してください。</p>

        <h2>type女性の転職エージェントの特徴（公式の公表情報より）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "女性の気持ちに寄り添うキャリアアドバイザー",
              desc: "転職経験や子育て経験を生かした相談対応を公式に掲げています。ライフイベントを見据えた働き方の相談がしやすい体制です。",
            },
            {
              title: "東証プライム上場企業の運営",
              desc: "運営の株式会社キャリアデザインセンターは1993年設立、「type」ブランドの転職メディアを長年運営してきた上場企業です。",
            },
            {
              title: "非公開求人が約7割",
              desc: "求人総数38,146件のうち約7割(27,359件)が非公開求人と公表されています(2026年11月11日時点)。登録することで一般公開されていない求人に出会えます。",
            },
            {
              title: "年収UP希望者の約79%が年収アップ(公称)",
              desc: "年収アップを希望した利用者の約79%が年収アップを実現した(2021年10月〜2025年3月)と公表されています。集計条件は公式の注記に基づく参考値です。",
            },
            {
              title: "未経験可・リモート可の求人にも対応",
              desc: "公式LPでは未経験可の求人やリモート勤務可能な職種の紹介が案内されています。職種転換を考える人の相談先にもなります。",
            },
            {
              title: "電話カウンセリング対応",
              desc: "来社不要の電話面談によるキャリアカウンセリングに対応しています。在職中・育児中でも利用しやすい形式です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>type女性の転職エージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>結婚・出産などライフイベントを見据えた転職を相談したい女性</li>
              <li>女性のキャリア支援に慣れた担当者に相談したい人</li>
              <li>年収アップを目的に転職したい人</li>
              <li>未経験職種やリモート可求人も含めて検討したい人</li>
              <li>上場企業運営の安心感を重視する人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>男性・より幅広い求人を横断したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>ITエンジニア職に深く特化したい人 →<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>や<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア" />も選択肢です</li>
              <li>ハイクラス・エグゼクティブ志向の人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>や<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>が候補です</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。女性のキャリア相談はtype女性の転職エージェント、
          求人の横断比較は総合型で、という使い分けをおすすめします。
        </p>

        <h2>type女性の転職エージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：女性のキャリア相談の定番候補</h2>
        <p>
          type女性の転職エージェントは、東証プライム上場の株式会社キャリアデザインセンターが運営する女性特化型エージェントです。
          年間15,000名以上のキャリアカウンセリング実績・非公開求人約7割・年収UP希望者の約79%が年収アップ(いずれも公称)という実績を公表しており、
          利用は無料です。女性のキャリアに理解のある担当者に相談したい人は、まず無料カウンセリングから始めることをおすすめします。
          <FelmatTextLink slug="type-woman" text="type女性の転職エージェントの無料カウンセリングはこちら" />(PR)。
        </p>

        <FelmatCta slug="type-woman" heading="type女性の転職エージェント公式サイトで無料カウンセリングを予約する" note="登録・キャリアカウンセリングは無料です。" />

        <div className="bg-warm-gray rounded-2xl p-5 sm:p-6 mt-8">
          <p className="font-bold text-navy mb-2">育児と両立しながらの転職を考えている方へ</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            「転職後すぐに時短勤務したい」というワーママ・パパには、時短正社員の求人に特化した
            <FelmatTextLink slug="realme-career" text="リアルミーキャリア" />（PR）という選択肢もあります。
            時短・フレックス・リモート求人に絞った特化型で、キャリアアップ軸のtype女性の転職エージェントとは補完関係にあります。
            詳しくは<Link href="/review/realme-career/" className="text-teal underline">リアルミーキャリアの解説記事</Link>をご覧ください。
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">type女性の転職エージェントを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビ転職エージェントの詳細
            </Link>
            <Link href="/review/type-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              type転職エージェントの詳細
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
        <AgentClients slug="type-woman" agentName="type女性の転職エージェント" />

      </article>
    </>
  );
}
