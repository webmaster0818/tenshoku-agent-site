import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/amazon/" },
  title: "Amazon（アマゾン）の転職・面接【2026年10月】公式の選考フロー・面接の質問例・インタビューループ",
  description:
    "Amazonの中途採用の面接は、オンライン申請→アセスメント→電話スクリーニング→インタビューループ（2〜7人・各約45分〜1時間、5営業日以内に連絡）の流れです。公式が挙げる面接の質問例5つ、STARメソッド、ライティングサンプル、日本の求人815件の内訳を公式情報（2026年10月確認）にもとづいて整理しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "Amazon（アマゾン）の転職・面接【2026年10月】公式の選考フロー・面接の質問例・インタビューループ",
    description:
      "Amazon転職の選考フローと面接の質問例・準備を、amazon.jobs公式（10/15確認）とForm 10-Kにもとづいて整理しています。",
  },
};

const faqData = [
  {
    q: "AmazonのLeadership Principlesとは何ですか？",
    a: "AmazonのLeadership Principles（LP）は、公式採用サイトで公開されている16の行動指針です。「Customer Obsession」「Ownership」「Invent and Simplify」「Dive Deep」などがあり、公式の面接ガイドでは「すべての候補者は、これらの原則に基づいて評価されます」と説明されています。",
  },
  {
    q: "Amazonの面接は何回ありますか？",
    a: "回数は職種によって異なります。公式の採用プロセスは「オンライン申請」「アセスメント」「電話スクリーニング」「インタビューループ」の流れで、インタビューループでは面接官と個別に面談します。公式ガイドによると、マネージャーやチームメイト、利害関係者、バーレイザーなど2〜7人と会うことが多く、1人あたりの面接時間は約45分〜1時間です。",
  },
  {
    q: "Amazonの面接ではどのような質問がされますか？",
    a: "公式の面接ガイドによると、面接は行動に基づく質問（過去の経験から実際の例を共有してもらう質問）が中心で、会話はLeadership Principlesに基づいて行われます。回答の組み立て方として、Situation・Task・Action・Resultで話すSTARメソッドが公式に紹介されています。",
  },
  {
    q: "Amazonの面接の質問例は？",
    a: "公式のインタビューループのページでは、聞かれる質問の例として「複数の解決策が考えられる問題に直面したときのこと（何をすべきかを決めた経緯と結果）」「リスクを冒した・間違いを犯した・失敗したときのこと（何を学んだか）」「プロジェクトで主導権を握ったときの例」「グループのモチベーションを高めたり、チームでのコラボレーションを促したりするために何をしたか」「戦略の策定や意思決定でデータをどう活用したか」が挙げられています。「マンハッタンには窓がいくつあるの？」のような頭の体操型の質問は避けているとも明記されています（2026年10月15日確認）。",
  },
  {
    q: "Amazonの日本法人の平均年収は公表されていますか？",
    a: "アマゾンジャパン合同会社などの日本法人は非上場で、日本法人単体の平均年収の公式開示は確認できませんでした。給与は求人ごとに異なるため、応募する求人の条件を選考の中で確認してください。",
  },
  {
    q: "Amazon JapanとAWS Japanは同じ会社ですか？",
    a: "別の法人です。公式採用ポータルamazon.jobsの日本の求人には、Amazon Japan G.K.（アマゾンジャパン合同会社）、Amazon Web Services Japan GK（アマゾン ウェブ サービス ジャパン合同会社）、Amazon Data Services Japan G.K.などの法人名が表示されており、どの法人の求人もamazon.jobsから検索・応募できます。",
  },
  {
    q: "Amazonに転職するために英語力は必須ですか？",
    a: "ポジションによって異なります。amazon.jobsの各求人ページには必須要件（Basic Qualifications）と歓迎要件（Preferred Qualifications）が記載されています。2026年10月14日時点の日本の求人815件のうち575件で、これらの要件欄に「英語」または「English」の語が含まれていました（当サイト集計）。語学力の要件は応募する求人ごとに確認してください。",
  },
  {
    q: "Amazonの「Bar Raiser（バーレイザー）」とは何ですか？",
    a: "公式の面接ガイドでは、バーレイザーは「採用の質を重視する別のチームのメンバー」と説明されており、インタビューループで会う面接官の1人として挙げられています。面接官の役割に合わせて回答を変える必要はないとも案内されています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Amazon（アマゾン）の転職・面接【2026年10月】公式の選考フロー・面接の質問例・インタビューループ",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/amazon/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AmazonCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "Amazon（アマゾン）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              Amazon（アマゾン）の転職・面接【2026年10月】公式の選考フロー・面接の質問例・インタビューループ
            </h1>
          </div>
        <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/amazon.jpg" alt="Amazon Japanの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">Amazon Japan 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            Amazonは、EC・AWS（クラウド）・Prime Video・Alexa・物流など多角的な事業を展開する企業で、2025年末時点の従業員数は約1,576,000人です（Form 10-K）。
            日本の売上高は306億8,800万ドル（2025年）で、Form 10-Kで国別に開示されている米国・ドイツ・英国と並ぶ主要市場です。公式に公開されている16のLeadership Principlesが採用・面接の軸になっています。
            本記事では、Amazon転職の選考フロー・面接の質問例と準備・日本の求人状況を、公式採用サイトの記載をもとに解説します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">Amazonの転職面接の要点（公式で確認・2026年10月15日）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>流れ：</strong>オンライン申請 → アセスメント → 電話スクリーニング → インタビューループの順に進みます（職種により異なります）。</li>
            <li><strong>インタビューループ：</strong>マネージャー・チームメイト・利害関係者・バーレイザーなど<strong>2〜7人</strong>と個別に面接し、1人あたりの時間は約45分〜1時間です。面接後<strong>5営業日以内</strong>に連絡があります。</li>
            <li><strong>質問：</strong>過去の実例を聞く「行動に基づく質問」が中心で、16のLeadership Principlesに基づいて評価されます。頭の体操型の質問は避けていると明記されています。</li>
            <li><strong>準備：</strong>STARメソッド（状況・課題・行動・結果）で、「私」を主語に話すことが推奨されています。失敗談を話しても差し支えありません。職種によりライティングサンプルや役割別の演習があります。</li>
            <li><strong>形式：</strong>オンライン（Zoom／Amazon Chime）または対面で行われます。対面の場合は15分前の到着と写真付き身分証が案内されており、服装はカジュアルで差し支えありません。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.amazon.jobs/content/jp/how-we-hire/interview-loop" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">インタビューループ（amazon.jobs公式）</a>／<a href="https://www.amazon.jobs/content/jp/how-we-hire" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用プロセス（amazon.jobs公式）</a>。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">Amazon（アマゾン）の会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">Amazonの転職難易度と面接の特徴</a></li>
            <li><a href="#s3" className="text-teal hover:underline">Amazonの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">Amazonの選考フロー（公式記載）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">Amazonの面接の質問例と対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">Amazon転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">Amazon転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">Amazon（アマゾン）の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "Amazon.com, Inc.（日本の主な求人掲載法人：アマゾンジャパン合同会社 / アマゾン ウェブ サービス ジャパン合同会社 / Amazon Data Services Japan G.K.）" },
                { label: "本社", value: "米国ワシントン州シアトル（Amazon.com, Inc.）" },
                { label: "創業", value: "1994年（Amazon.com）" },
                { label: "従業員数", value: "約1,576,000人（グローバル・フルタイム及びパートタイム、2025年12月31日時点）" },
                { label: "日本の売上高", value: "260億200万ドル（2023年）→274億100万ドル（2024年）→306億8,800万ドル（2025年）" },
                { label: "事業内容", value: "EC（Amazon.co.jp）、クラウド（AWS）、Prime Video、Alexa/デバイス、物流、広告" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：Amazon.com, Inc. <a href="https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2025年度Form 10-K（SEC提出）</a>（本社・創業・従業員数・国別売上高）、<a href="https://www.amazon.jobs/jp" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">amazon.jobs</a>の求人掲載法人名。日本法人は非上場のため、日本法人単体の平均年収・従業員数の公式開示は確認できませんでした。2026年10月14日確認。
        </p>

        {/* 転職難易度 */}
        <h2 id="s2">Amazonの転職難易度と面接の特徴</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-text-secondary text-sm mb-4">
            Amazonは面接の進め方を公式採用サイトで詳しく公開しています。Leadership Principlesに沿った準備ができるかどうかが、選考を進めるうえでのポイントです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>「すべての候補者は、これらの原則（Leadership Principles）に基づいて評価されます」と公式に記載されています。</li>
            <li>面接は行動に基づく質問が中心で、過去の経験から実際の例を共有する形式です。</li>
            <li>インタビューループでは、マネージャー、チームメイト、利害関係者、バーレイザー（採用の質を重視する別のチームのメンバー）など2〜7人と会うことが多く、1人あたりの時間は約45分〜1時間です。</li>
            <li>ソフトウェア開発エンジニア（SDE）はコーディングテストを含むオンラインアセスメントがあり、技術面接の多くでコーディングとシステム設計のホワイトボード演習が求められます。</li>
            <li>面接後は5営業日以内に連絡があると案内されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※出典：<a href="https://www.amazon.jobs/content/jp/how-we-hire/interview-loop" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">インタビューループ（amazon.jobs公式）</a>、<a href="https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Software development topics（amazon.jobs公式）</a>。2026年10月14日確認。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">Amazonの中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">IT・Web系の求人を非公開求人も含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />のような転職エージェントを併用すると、応募先の候補を広げやすくなります（特徴は<Link href="/review/unison-career/" className="text-teal hover:underline">ユニゾンキャリアの口コミ・評判</Link>で確認できます）。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            Amazonの中途採用は、公式採用ポータル
            <a
              href="https://www.amazon.jobs/jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              amazon.jobs
            </a>
            で求人を検索して応募する方式です。国を日本に絞った公式検索では815件の求人が掲載されていました（2026年10月14日確認時点）。件数の多い募集カテゴリは、公式表記でFulfillment & Operations Management（201件）、Project/Program/Product Management--Non-Tech（110件）、Sales, Advertising, & Account Management（68件）、Solutions Architect（64件）などです。勤務地は東京（503件）が最多で、大阪・名古屋（各19件）のほか、相模原・小田原・尼崎など各地の拠点でも募集があります。掲載法人はアマゾンジャパン合同会社が最多で、AWSジャパン、Amazon Data Services Japanの求人も含まれます。
          </p>
          <p className="text-sm text-text-secondary mb-4">
            選考プロセスは公式の
            <a
              href="https://www.amazon.jobs/content/jp/how-we-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              採用プロセスページ
            </a>
            で「オンライン申請」→「アセスメント」→「電話スクリーニング」→「インタビューループ」と案内されており（職種により異なる旨の記載あり）、応募状況はamazon.jobsのマイページや専用アプリで確認できます。
          </p>
          <p className="text-xs text-text-muted">
            ※求人件数・カテゴリ・勤務地・掲載法人は2026年10月14日にamazon.jobsで確認した内容です（当サイト集計）。採用プロセスは2026年7月31日・10月14日に確認しています。募集状況は変動するため、最新情報は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">Amazonの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※公式採用ページに記載された流れです（2026年7月31日確認）。職種により異なる旨の公式記載があります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "オンライン申請",
              desc: "公式採用ポータルamazon.jobsで職種を検索し、オンラインで応募します。応募状況はマイページで確認でき、専用アプリ（App Store/Google Play）も提供されています。",
            },
            {
              step: 2,
              title: "アセスメント",
              desc: "応募後、アセスメントが実施されます。内容や有無は職種により異なる旨が公式に記載されています。",
            },
            {
              step: 3,
              title: "電話スクリーニング",
              desc: "電話でのスクリーニングが行われます。公式サイトにはインタビューループの準備方法やLeadership Principlesの説明ページが用意されています。",
            },
            {
              step: 4,
              title: "インタビューループ",
              desc: "現在の従業員と個別に面談するインタビューループが実施されます。公式ガイドでは2〜7人と会うことが多く、1人あたり約45分〜1時間、面接後5営業日以内に連絡があると案内されています。選考ステップの詳細は職種により異なるため、応募前に公式採用プロセスページをご確認ください。",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 面接対策ポイント */}
        <h2 id="s5">Amazonの面接の質問例と対策ポイント</h2>
        <div className="glass-card p-6 mb-6">
          <h3 className="font-bold text-navy mb-2">公式が挙げる面接の質問例</h3>
          <p className="text-sm text-text-secondary mb-3">公式のインタビューループのページに「聞かれる質問の例」として載っているものです（2026年10月15日確認）。</p>
          <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5">
            <li>複数の解決策が考えられる問題に直面したときのことを教えてください。何をすべきかを決めた経緯と、その結果はどうでしたか？</li>
            <li>リスクを冒した、間違いを犯した、または失敗したときのことを説明してください。何が起きたのか、そこから何を学んだのか？</li>
            <li>プロジェクトで主導権を握ったときの例を教えてください。</li>
            <li>グループのモチベーションを高めたり、チームプロジェクトでのコラボレーションを促したりするために何をしましたか？</li>
            <li>戦略の策定や意思決定の際に、データをどのように活用しましたか？</li>
          </ol>
          <ul className="space-y-2 text-sm text-text-secondary mt-4">
            <li><strong>ライティングサンプル：</strong>職種によっては求められます。Amazonではスライドの代わりに1〜6ページのナラティブメモを書き、会議の冒頭で黙読するため、考えを書面で表現する力を重視していると説明されています。</li>
            <li><strong>役割別の演習：</strong>簡単な評価や仕事関連の演習がある職種もあり、該当する場合は事前に知らされます。</li>
            <li><strong>「なぜAmazonか」：</strong>よくある質問として挙げられており、その役割や面接するチームについて自分が魅力を感じる点を考えておくよう案内されています。</li>
            <li><strong>逆質問：</strong>各面接の最後に質問の時間が数分あります。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.amazon.jobs/content/jp/how-we-hire/interview-loop" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">インタビューループ（amazon.jobs公式）</a>（2026年10月15日確認）。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "Leadership Principlesの理解",
              desc: "公式採用サイトでは16のLPが公開されており、「すべての候補者は、これらの原則に基づいて評価されます」と明記されています。各LPを読み込み、自分の過去の経験と結びつくエピソードを整理しておくことをおすすめします。",
            },
            {
              title: "STARメソッドでの回答準備",
              desc: "公式の面接ガイドでは、Situation（状況）・Task（課題）・Action（行動）・Result（結果）の順に話すSTARメソッドが紹介されています。「私たち」ではなく「私」を主語に個人の貢献を語り、可能であればデータや数字で裏付けることが推奨されています。",
            },
            {
              title: "技術面接の対策（エンジニア職）",
              desc: "公式のSDE向けページによると、コーディングテストを含むオンラインアセスメントがあり、技術面接の多くでコーディングとシステム設計のホワイトボード演習が行われます。データ構造・アルゴリズムなどの基礎を復習し、IDEを使わずにコードを書く練習が推奨されています。",
            },
            {
              title: "成功だけでなく失敗談も準備する",
              desc: "公式ガイドでは「すべてのストーリーが成功である必要はない」とし、失敗から何を学び、どう成長したかが重要だと説明しています。リスクを取った経験や失敗した経験も、学びとあわせて話せるように準備しておくことをおすすめします。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：<a href="https://www.amazon.jobs/content/jp/our-workplace/leadership-principles" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Leadership Principles</a>・<a href="https://www.amazon.jobs/content/jp/how-we-hire/interview-loop" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">インタビューループ</a>・<a href="https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Software development topics</a>（いずれもamazon.jobs公式）。2026年10月14日確認。
        </p>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">Amazon転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェントです。IT・EC・物流など多様な求人を比較でき、書類添削や面接対策のサポートも受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録すると企業やヘッドハンターからスカウトが届く仕組みで、シニアポジションを目指す方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系・グローバル企業やミドル〜ハイクラス層の転職支援を得意とする転職エージェントです。英文レジュメや外資系特有の選考に備えたい方におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "転職サイトとエージェントサービスを1つのサービス内で併用できる大手総合型のサービスです。自分で求人を探しながらキャリアアドバイザーの提案も受けられ、幅広い選択肢を比較したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援に力を入れる総合型の転職エージェントです。書類添削や面接対策などのサポートを受けながら進められるため、初めて転職する方にも適しています。",
            },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link
                  href={agent.href}
                  className="text-teal text-sm hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="s7">Amazon転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            Amazon転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用し、十分に準備したうえで選考に臨むことをおすすめします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連企業ガイド */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の企業の転職ガイド</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
            </Link>
            <Link href="/company/accenture/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              アクセンチュア転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
