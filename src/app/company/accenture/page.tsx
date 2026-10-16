import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { FelmatTextLink } from "@/components/FelmatCta";
import A8Cta from "@/components/A8Cta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/accenture/" },
  title: "アクセンチュアに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "アクセンチュアへの転職を公式情報で解説。経験者採用比率（2025年度67％）、書類選考から面接2〜3回・オファーまでの選考フロー、選考期間の目安、面接準備のポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "アクセンチュアに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "アクセンチュアの経験者採用比率・選考フロー・面接準備・おすすめエージェントを公式情報をもとに解説。",
  },
};

const faqData = [
  {
    q: "アクセンチュアの中途採用比率はどのくらいですか？",
    a: "アクセンチュア公式の採用FAQによると、経験者採用（正社員）の割合は2023年度78％、2024年度72％、2025年度67％（2025年9月1日時点）です。新たに入社する正社員の多くが経験者採用で、プロジェクトでは採用区分にかかわりなくチームを組んで仕事を進めると案内されています。",
  },
  {
    q: "アクセンチュアの面接は何回ありますか？",
    a: "公式の採用プロセスでは、書類選考に合格すると面接に進み、面接は2〜3回を予定（応募部門によって回数は異なる）、オンラインもしくは対面で実施と案内されています。ポジションによってはWebテストも実施されます。すべての選考プロセスが終わると、1週間程度で最終結果が連絡されます。",
  },
  {
    q: "アクセンチュアの選考期間はどのくらいですか？",
    a: "公式の採用FAQでは、目安として1〜2か月程度とされています。双方のスケジュール調整の状況や、応募職種によって選考プロセスが異なるため変動します。",
  },
  {
    q: "アクセンチュアの転職で英語力は必要ですか？",
    a: "公式の採用FAQによると、募集職種によってはビジネスレベルの英語力が求められますが、全ての職種において入社時に必要な条件ではありません。入社後に英語力を伸ばしたい方向けのトレーニングも用意されています。応募するポジションの募集要項で応募要件をご確認ください。",
  },
  {
    q: "アクセンチュアの経験者採用の応募資格を教えてください。",
    a: "応募資格はポジションによって異なり、各募集要項の応募要件欄に記載されています。公式の採用FAQでは、経験者採用は社会人経験4年以上の方が対象で、社会人経験4ヶ月以上4年未満の方は第二新卒採用への応募と案内されています。また、性別や国籍、年齢や転職回数等の制約は設けていないと明記されています。",
  },
  {
    q: "アクセンチュアの年収はどのくらいですか？",
    a: "アクセンチュア株式会社は有価証券報告書の提出会社ではないため、公式の平均給与は公表されていません。公式の採用FAQで公表されているのは新卒採用（2028年卒）の想定年収で、ビジネスコンサルタントが標準年収額663万円（基本給480万円）、戦略コンサルタントが標準年収額754万円（基本給550.9万円）です（賞与・各種手当を含む理論値、月約30時間の時間外勤務を実施した場合）。経験者採用の年収はポジションや経験により個別に提示されるため、選考の中でご確認ください。",
  },
  {
    q: "アクセンチュアの働き方改革は進んでいますか？",
    a: "アクセンチュアは組織風土改革「Project PRIDE」を推進しています。公式の採用FAQでは、フレックス制度、在宅勤務制度、短日短時間勤務制度などの各種制度や、全国どこからでも勤務できる「ロケーション フレキシビリティ制度」が紹介されています（各制度の利用には一定のルール・条件があります）。",
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

export default function AccentureCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "アクセンチュア" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              アクセンチュアに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/accenture.jpg" alt="アクセンチュアの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">アクセンチュア 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            アクセンチュアは世界最大級の総合コンサルティングファームで、戦略・テクノロジー・オペレーションなど幅広い領域でサービスを展開しています。
            公式の採用FAQによると経験者採用（正社員）の割合は2025年度67％で、新たに入社する正社員の多くが経験者採用です。
            本記事では、アクセンチュアの公式採用情報をもとに、経験者採用のデータ・選考フロー・面接準備・おすすめエージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">アクセンチュアの会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">アクセンチュア経験者採用の基本データ</a></li>
            <li><a href="#s3" className="text-teal hover:underline">アクセンチュアの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">アクセンチュアの選考フロー</a></li>
            <li><a href="#s5" className="text-teal hover:underline">アクセンチュア転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">アクセンチュア転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">アクセンチュア転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">アクセンチュアの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "アクセンチュア株式会社（Accenture Japan Ltd.）" },
                { label: "本社", value: "東京都港区赤坂1-8-1 赤坂インターシティAIR" },
                { label: "創業・設立", value: "1962年 事務所開設 / 1995年12月 設立（日本法人）" },
                { label: "資本金", value: "3億5千万円" },
                { label: "従業員数", value: "約30,000人（日本、2026年6月1日時点） / 約814,000人（グローバル）" },
                { label: "拠点数（グローバル）", value: "52カ国 200都市以上" },
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
          ※出典：
          <a
            href="https://www.accenture.com/jp-ja/about/company-index"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            アクセンチュア 会社概要
          </a>
          （確認日：2026年10月14日）。最新情報は公式サイトでご確認ください。
        </p>

        {/* 経験者採用の基本データ */}
        <h2 id="s2">アクセンチュア経験者採用の基本データ</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-text-secondary text-sm mb-4">
            アクセンチュア公式の採用FAQで公表されている、経験者採用に関する主なデータです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>経験者採用（正社員）の割合：2023年度78％、2024年度72％、2025年度67％（2025年9月1日時点）</li>
            <li>経験者採用の対象：社会人経験4年以上（4ヶ月以上4年未満の方は第二新卒採用）</li>
            <li>面接：2〜3回を予定（応募部門によって回数は異なる）、オンラインもしくは対面</li>
            <li>選考期間の目安：1〜2か月程度（応募職種やスケジュール調整により変動）</li>
            <li>性別・国籍・年齢・転職回数等の制約は設けていないと明記</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※出典：
            <a
              href="https://www.accenture.com/jp-ja/careers/explore-careers/area-of-interest/journey-to-accenture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              アクセンチュア 採用プロセス・採用FAQ
            </a>
            （確認日：2026年10月14日）。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">アクセンチュアの中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">20代でコンサル・大手企業への転職を検討する場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、職務経歴書の添削から始める方法もあります。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            アクセンチュアは中途採用を「経験者採用」として実施しており、
            <a
              href="https://www.accenture.com/jp-ja/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              公式採用ページ
            </a>
            の求人検索から職種を選んで応募する方式です。公式の採用プロセスページには、ウェブ応募（履歴書・職務経歴書のアップロード）→書類選考→面接（2〜3回を予定、応募部門により回数は異なる）→オファー（約1週間で結果連絡）という流れと、選考期間は約1〜2ヶ月が目安であることが記載されています。複数職種への同時応募は不可、経験者採用は原則4年以上の社会人経験が目安との記載もあります。
          </p>
          <p className="text-sm text-text-secondary mb-4">
            日本国内の拠点は、公式拠点一覧によると東京・札幌・仙台・会津若松・前橋・横浜・名古屋・京都・大阪・福岡・熊本の11都市です。募集分野としては「AI＆データ」「クラウド」「サイバーセキュリティ」「戦略コンサルティング」「テクノロジー・トランスフォーメーション」などのカテゴリが公式採用ページに掲載されています。
          </p>
          <p className="text-xs text-text-muted">
            ※2026年7月31日に公式採用サイトで確認した情報です。募集状況は変動するため、最新の情報は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <A8Cta slug="myvision" heading="コンサル業界特化の転職支援(無料)" />

        <h2 id="s4">アクセンチュアの選考フロー</h2>
        <div className="space-y-5 mb-4">
          {[
            {
              step: 1,
              title: "ウェブ応募",
              desc: "公式サイトの募集職種から応募したいポジションを一つ選び、必要事項を入力して履歴書と職務経歴書をアップロードします。併願はできないため、第一希望のポジションに応募します。",
            },
            {
              step: 2,
              title: "書類選考",
              desc: "採用チームが応募情報を確認します。応募ポジションの要件にマッチしない場合でも、経歴に合う他のポジションがないか検討して選考が行われます。ポジションによってはWebテストも実施されます。",
            },
            {
              step: 3,
              title: "面接（2〜3回を予定）",
              desc: "面接は2〜3回を予定しており、応募部門によって回数は異なります。オンラインもしくは対面での実施で、アクセンチュアや応募ポジションについて質問できる双方向の対話の場とされています。",
            },
            {
              step: 4,
              title: "オファー",
              desc: "すべての選考プロセスが終わると、1週間程度で最終結果が連絡されます。オファー受領後も、不安な点や質問があれば別途面談の場を設けることができます。",
            },
            {
              step: 5,
              title: "入社",
              desc: "入社時のオリエンテーションで、アクセンチュアの文化や価値観、成長戦略などについて学びます。上司やピープルリードがキャリア構築を支援します。",
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
        <p className="text-xs text-text-muted mb-8">
          ※出典：
          <a
            href="https://www.accenture.com/jp-ja/careers/explore-careers/area-of-interest/journey-to-accenture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            アクセンチュア 採用プロセス（経験者採用）
          </a>
          （確認日：2026年10月14日）。選考の内容はポジションによって異なるため、応募前に募集要項もご確認ください。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">アクセンチュア転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "応募ポジションを一つに絞り込む",
              desc: "経験者採用は併願ができないため、応募するのは第一希望の一つだけです。募集要項の応募要件と自分の経歴を照らし合わせ、最も強みが活きるポジションを選ぶことをおすすめします。迷う場合は公式の「キャリア登録」で人事部のリクルーターにポジションを提案してもらう方法もあります。",
            },
            {
              title: "書類は不備なく、要件との接点を明確に",
              desc: "履歴書・職務経歴書に所定フォームはありません。公式に「記載ミスや不備がないか提出前に必ず確認を」と案内されているので、応募要件に対応する経験・スキルが一目で伝わる構成に整えておくことをおすすめします。",
            },
            {
              title: "プロジェクト経験の棚卸し",
              desc: "面接では経歴に基づいて選考が行われます。過去のプロジェクトで自分が果たした役割、課題への向き合い方、成果を具体的な数字を交えて整理しておくと、どの部門の面接でも説明しやすくなります。",
            },
            {
              title: "逆質問を準備して対話に臨む",
              desc: "公式の採用プロセスでは、面接は双方向の対話の場であり、アクセンチュアや応募ポジションについて積極的に質問してほしいと案内されています。配属後の働き方や研修について確認したいことを事前に用意しておくことをおすすめします。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">アクセンチュア転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェントです。コンサル業界とあわせて事業会社の求人も比較しながら、職務経歴書の作成や面接準備のサポートを受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、管理職・専門職のポジションを探したい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系企業・ハイクラス転職に強い転職エージェントです。外資系企業の選考に慣れたコンサルタントに相談しながら、グローバル企業を含めて転職先を検討できます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "大手総合型の転職サービスです。転職サイトとエージェントサービスを併用できるため、コンサル業界の各社を自分でも検索しながら、効率的に情報収集できます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援に強い総合型の転職エージェントです。初めての転職で応募書類や面接の準備から相談したい方に向いています。",
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
        <h2 id="s7">アクセンチュア転職 よくある質問</h2>
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
            アクセンチュア転職を成功させるために
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
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
            </Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
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
