import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/google/" },
  title: "Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "Google（グーグル）への転職を公式情報で解説します。アセスメント・採用担当者との会話・構造化面接から審査・オファーまでの選考フロー（通常約6〜8週間）、公式の面接準備アドバイス、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "Google転職の選考フロー・面接準備・おすすめエージェントを公式の採用情報をもとに解説します。",
  },
};

const faqData = [
  {
    q: "Googleの中途採用は未経験でも応募できますか？",
    a: "応募要件は求人ごとに異なります。Google公式の採用プロセスページでは、応募する職種の最小要件（MQ）を満たしていることを確認し、履歴書でMQとの整合性を明確に示すよう案内されています。まずは希望する求人の応募資格をご確認ください。",
  },
  {
    q: "Googleの選考はどのような流れですか？",
    a: "公式の採用プロセスページによると、職種やチームによって異なる点もありますが、アセスメント、採用担当者との電話またはビデオ通話での短時間の面談（通常1〜2回）、職種によってはプロジェクト課題、面接を経て、多くのメンバーが関わる審査で合否が決定され、オファーが連絡されます。面接は構造化面接で、オンラインまたは対面で行われます。",
  },
  {
    q: "Googleの選考期間はどのくらいですか？",
    a: "公式の採用プロセスページでは、面接プロセスは通常約6〜8週間かかると案内されています。具体的なスケジュールは選考の過程で採用チームの担当者から説明されます。",
  },
  {
    q: "Googleには複数の求人に同時に応募できますか？",
    a: "公式の採用FAQによると、30日ごとに最大3件の職種に応募できます。スキル・経験・関心にマッチする職種に絞り込むことが推奨されています。",
  },
  {
    q: "不採用になった後、Googleに再応募できますか？",
    a: "可能です。公式の採用FAQでは、同じ職種に再応募する前に、通常少なくとも1年間は経験を積むようお願いしていると案内されています。また、Google社員のほとんどは最終面接に進む前に他の職種に応募していたとも紹介されています。",
  },
  {
    q: "Googleの面接ではどんな質問が出ますか？",
    a: "公式の面接準備ページでは、「〜したときのことを話してください」「あなたならこの状況にどう対処しますか」といった、具体的なエピソードや思考プロセスを問う質問が多いと案内されています。創造力を試す超難問は現在は出題していないとされています。なお、面接中のGoogle検索やAIツールの使用は認められていません。",
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

export default function GoogleCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "Google（グーグル）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/google.jpg" alt="Google Japanの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">Google Japan 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            Google Japanは2001年9月、Googleとして初の海外拠点となるオフィスを渋谷に開設し、2026年に25周年を迎えました。
            Googleの採用プロセスは公式サイトで詳しく公開されており、選考の流れや面接の準備方法を事前に把握したうえで応募できます。
            本記事では、Googleの公式採用情報をもとに、選考フロー・面接準備・おすすめの転職エージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">Google（グーグル）の会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">Google採用の基本データ</a></li>
            <li><a href="#s3" className="text-teal hover:underline">Googleの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">Googleの選考フロー</a></li>
            <li><a href="#s5" className="text-teal hover:underline">Google転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">Google転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">Google転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">Google（グーグル）の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "グーグル合同会社（日本法人） / 親会社グループ：Alphabet Inc." },
                { label: "東京オフィス", value: "東京都渋谷区渋谷3-21-3 渋谷ストリーム" },
                { label: "日本オフィス開設", value: "2001年9月（Googleとして初の海外拠点）" },
                { label: "従業員数", value: "190,820人（Alphabet全体、2025年12月31日時点）" },
                { label: "主な事業", value: "Google サービス（広告、Android、Chrome、Google マップ、Google Play、検索、YouTube など）、Google Cloud" },
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
          <a href="https://about.google/intl/ja/locations/?region=asia-pacific" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google オフィス所在地</a>
          、
          <a href="https://blog.google/intl/ja-jp/company-news/outreach-initiatives/google-japan-25-25/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google Japan 公式ブログ（2026年9月28日）</a>
          、
          <a href="https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Alphabet Inc. Form 10-K（2025年度）</a>
          （確認日：2026年10月14日）。日本法人単独の従業員数・平均年収は公表されていません。
        </p>

        {/* 採用の基本データ */}
        <h2 id="s2">Google採用の基本データ</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-text-secondary text-sm mb-4">
            Google公式の採用プロセスページ・採用FAQで公表されている、応募前に押さえておきたいポイントです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募できる数：30日ごとに最大3件の職種までです。</li>
            <li>選考期間の目安：面接プロセスは通常約6〜8週間です。</li>
            <li>面接：すべての候補者を同じ観点から評価する構造化面接で、オンラインまたは対面で実施されます。</li>
            <li>合否：応募書類や面接結果などに基づき、多くのメンバーが関わって総合的に審査されます。</li>
            <li>再応募：同じ職種へは、通常少なくとも1年間の経験を積んでから応募するよう案内されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※出典：
            <a href="https://www.google.com/about/careers/applications/how-we-hire/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google Careers 採用プロセス</a>
            （確認日：2026年10月14日）
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">Googleの中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">IT・Web系の求人を非公開求人も含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />などの転職エージェントを併用すると、応募先の候補を広げやすくなります。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            Googleの採用は新卒・中途という区分ではなく、公式の
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/?location=Japan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              Google Careers
            </a>
            で求人を検索して応募する方式です。勤務地をJapanで絞り込むと66件の求人が掲載されていました（2026年7月31日確認時点）。求人の勤務地は東京および千葉県印西市（データセンター）で、Google Cloud関連（セールス・カスタマーエンジニア）、広告営業、データセンター運用のポジションが中心です。
          </p>
          <p className="text-sm text-text-secondary mb-4">
            選考プロセスについては公式の
            <a
              href="https://www.google.com/about/careers/applications/how-we-hire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              How we hire
            </a>
            ページで案内されています。次の「選考フロー」で、同ページの内容をもとにステップごとに整理しています（2026年10月14日確認）。
          </p>
          <p className="text-xs text-text-muted">
            ※2026年7月31日に公式採用サイトで確認した情報です。募集状況は変動するため、最新情報は公式サイトにてご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">Googleの選考フロー</h2>
        <div className="space-y-5 mb-4">
          {[
            {
              step: 1,
              title: "オンライン応募（履歴書）",
              desc: "Google Careersで求人を検索して応募します。履歴書は希望する職種ごとに作成し、募集要項に合ったスキルや経験、最小要件（MQ）との整合性を、裏付けとなるデータとともに明確に示すことが推奨されています。カバーレターは必須ではありません。",
            },
            {
              step: 2,
              title: "アセスメント（評価）",
              desc: "面接に進む前に、働き方のスキルを評価するGoogle採用アセスメントの受検を求められる場合があります。職種によっては、コーディング問題などの職種関連のアセスメントが追加されることもあります。",
            },
            {
              step: 3,
              title: "採用担当者との会話",
              desc: "詳細な面接の前に、通常、採用担当者と電話またはビデオ通話で1〜2回の短時間の面談を行います。職種に必要な主要スキルの評価に加え、組織やチームの情報共有、希望勤務地などの確認が行われます。",
            },
            {
              step: 4,
              title: "プロジェクト課題・面接",
              desc: "職種によっては、ケーススタディの準備や文章・コードサンプルの提供など、小さなプロジェクト課題の提出を求められます。面接はGoogle社員が交代で面接官を務める構造化面接で、オンラインまたは対面で行われ、自由回答形式の質問で思考様式や協調性、強みが確認されます。",
            },
            {
              step: 5,
              title: "審査・オファー",
              desc: "応募書類や面接結果などに基づき、多くのメンバーが関わって総合的に合否が審査されます。採用と判断された場合は、担当者からオファーの連絡があり、賃金体系や福利厚生について説明されます。",
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
          <a href="https://www.google.com/about/careers/applications/how-we-hire/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google Careers 採用プロセス</a>
          （確認日：2026年10月14日）。手順は職種やチームによって異なる場合があり、具体的なスケジュールは採用チームから案内されます。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">Google転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "成果をデータで示す",
              desc: "公式の面接準備ページでは「[Z] を実行したことにより、[Y] という指標で、[X] を達成した」という形で、成果のインパクトをデータで伝えることが勧められています。職務経歴の実績を数字で整理しておくことをおすすめします。",
            },
            {
              title: "STARメソッドでエピソードを準備",
              desc: "行動面接の質問は具体的なエピソードを引き出すことが目的とされています。Situation（状況）・Task（課題）・Activity（行動）・Result（結果）の流れで、幅広いエピソードを簡潔に話せるよう準備しておくと効果的です。",
            },
            {
              title: "思考プロセスを言葉にする",
              desc: "面接官は答えそのものよりも、そこにたどり着くまでの思考プロセスを見ていると案内されています。質問の意図を確認したり、考える時間をもらったりしても問題ありません。曖昧な状況への対処、チームとの連携、リーダーシップの経験も具体的に説明できるよう準備しておくことをおすすめします。",
            },
            {
              title: "逆質問を用意し、自分の考えで臨む",
              desc: "面接は双方向のやり取りとされ、質問を用意しておくことが勧められています。なお、面接中のGoogle検索やAIツールの使用は認められていないため、自分自身の考えを伝える練習をしておくことをおすすめします。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted -mt-4 mb-8">
          ※出典：
          <a href="https://www.google.com/about/careers/applications/interview-tips/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google Careers 面接準備</a>
          （確認日：2026年10月14日）
        </p>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">Google転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェントです。IT業界の各社を比較検討しながら、職務経歴書の作成や面接準備のサポートを受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、管理職・専門職のポジションを探したい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系企業・ハイクラス転職に強い転職エージェントです。外資系企業の選考に慣れたコンサルタントに相談しながら、グローバル企業を中心に転職先を検討できます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "大手総合型の転職サービスです。転職サイトとエージェントサービスを併用できるため、IT・Web業界の求人を自分でも検索しながら幅広く情報収集したい方に向いています。",
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
        <h2 id="s7">Google転職 よくある質問</h2>
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
            Google転職を成功させるために
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
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
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
