import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/sony/" },
  title: "ソニーに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "ソニーへの転職を解説。平均年収1,155万円・平均年齢42.7歳（ソニーグループ株式会社・2026年3月期 有価証券報告書）、ソニー株式会社公式の経験者採用プロセス（書類選考→面接〈通常2回程度〉→最終面接〈人事面接・適性検査〉）、面接対策、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ソニーに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "ソニー転職の年収・社員データ・公式の選考プロセス・面接対策・おすすめエージェントを解説。",
  },
};

const faqData = [
  {
    q: "ソニーの経験者採用にはどのような人が応募できますか？",
    a: "ソニー株式会社の経験者採用ページでは、応募資格を「求人領域の専門性をお持ちの方」としており、第二新卒の応募も可能、大学院博士後期課程（ドクター）在籍中の方も経験者採用の対象と記載されています（2026年10月14日確認）。具体的な応募条件は各求人ページで確認しましょう。",
  },
  {
    q: "ソニーの面接は何回ありますか？",
    a: "ソニー株式会社の公式選考プロセスでは、書類選考の後に配属予定の部署との面接があり、回数は「通常は2回程度ですが、回数はポジションによって異なります」とされています。その後の最終面接は人事面接で、あわせて適性検査を受験します（2026年10月14日確認）。",
  },
  {
    q: "ソニーの選考期間はどのくらいですか？",
    a: "ソニー株式会社の公式選考プロセスでは、書類選考の結果連絡まで約3週間、最終面接の結果連絡まで約1週間〜10日が目安とされています。いずれも目安で、部門の事情により変動する場合があります（2026年10月14日確認）。",
  },
  {
    q: "ソニーの年収はどのくらいですか？",
    a: "ソニーグループ株式会社（持株会社・提出会社）の平均年間給与は1,155万円、平均年齢42.7歳、平均勤続年数16.0年です（2026年3月期 有価証券報告書）。なお、経験者採用の給与はソニー株式会社の募集要項で「経験や能力を考慮の上、当社規定により決定」とされています。",
  },
  {
    q: "ソニーグループの複数の会社に同時に応募できますか？",
    a: "ソニー株式会社の公式選考プロセスでは、同じ会社で一度に複数職種へ応募することは控えるよう案内されていますが、異なる会社への併願応募は可能です（例：ソニー株式会社とソニーグループ株式会社）。なお、現在ソニーグループに在籍中の方の応募は控えるよう記載されています（2026年10月14日確認）。",
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

export default function SonyCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "ソニー" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              ソニーに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/sony.jpg" alt="ソニーグループの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">ソニーグループ 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            ソニーはゲーム、音楽、映画、エレクトロニクス、イメージセンサーなどの事業を展開するグループで、事業会社ごとに経験者採用を行っています。
            本記事では、有価証券報告書の社員データと、ソニー株式会社の公式採用ページに掲載された選考プロセスをもとに、ソニー転職の準備ポイントとおすすめエージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">ソニーの会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">ソニーの平均年収・社員データ</a></li>
            <li><a href="#s3" className="text-teal hover:underline">ソニーの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">ソニーの選考フロー</a></li>
            <li><a href="#s5" className="text-teal hover:underline">ソニー転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">ソニー転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">ソニー転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">ソニーの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ソニーグループ株式会社（Sony Group Corporation）" },
                { label: "本社", value: "東京都港区港南1-7-1" },
                { label: "設立", value: "1946年5月7日" },
                { label: "従業員数", value: "2,166名（ソニーグループ株式会社単体・2026年3月期 有価証券報告書）／ソニー株式会社 約8,000名（2025年4月時点・同社公式）" },
                { label: "平均年収", value: "1,155万円（ソニーグループ株式会社単体・2026年3月期 有価証券報告書）" },
                { label: "事業内容", value: "ゲーム（PlayStation）、音楽、映画、エレクトロニクス、半導体（イメージセンサー）など" },
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
          ※従業員数（ソニー株式会社）は
          <a href="https://www.sony.co.jp/corporate/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ソニー株式会社 会社概要</a>
          で2026年10月14日に確認。最新情報は各社公式サイトでご確認ください
        </p>

        {/* 社員データ */}
        <h2 id="s2">ソニーの平均年収・社員データ</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ソニーグループ株式会社（持株会社）の有価証券報告書に記載された社員データです（提出会社単体）。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "平均年間給与", value: "1,155万円" },
              { label: "平均年齢", value: "42.7歳" },
              { label: "平均勤続年数", value: "16.0年" },
              { label: "従業員数", value: "2,166名" },
            ].map((d) => (
              <div key={d.label} className="rounded-xl bg-warm-gray p-3 text-center">
                <p className="text-xs text-text-muted">{d.label}</p>
                <p className="text-lg font-extrabold text-navy">{d.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-navy mb-2">平均年間給与の推移（各年3月期）</p>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>2022年3月期：1,084万円（平均年齢42.6歳・従業員数2,839名）</li>
            <li>2023年3月期：1,101万円（平均年齢42.4歳・従業員数2,445名）</li>
            <li>2024年3月期：1,113万円（平均年齢42.4歳・従業員数2,109名）</li>
            <li>2025年3月期：1,118万円（平均年齢42.5歳・従業員数2,212名）</li>
            <li>2026年3月期：1,155万円（平均年齢42.7歳・従業員数2,166名）</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">
            2022年3月期から2026年3月期にかけて、平均年間給与は71万円上がっています。なお、この数値は持株会社ソニーグループ株式会社の社員のもので、ソニー株式会社など事業会社の水準とは異なる場合があります。応募先企業の待遇は、面接や内定時の条件提示で確認しましょう。
          </p>
          <p className="text-xs text-text-muted mt-4">
            出典：ソニーグループ株式会社 有価証券報告書（
            <a href="https://irbank.net/6758/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK 従業員データ</a>
            で2026年10月14日に確認）
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">ソニーの中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">20代・第二新卒でソニーグループのような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ソニーは「経験者採用」の名称で中途採用を実施しています。ソニー株式会社の
            <a
              href="https://www.sony.co.jp/recruit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              公式採用情報ページ
            </a>
            に「経験者採用のエントリーはこちらから」というWeb応募の導線があることを確認しています。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>
              <a href="https://www.sony.co.jp/recruit/mid-career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">経験者採用ページ</a>
              では、応募資格を「求人領域の専門性をお持ちの方」とし、第二新卒も応募可としています。応募は各社求人ページ内のエントリーフォームから行います
            </li>
            <li>同ページの勤務地はソニーシティ、ソニーシティ大崎、ソニーシティみなとみらい（その他、国内・海外の事業所での勤務可能性あり）。勤務時間はフレックスタイム制（コアタイムなし）、休日は土日・祝日の完全週休二日制と記載されています</li>
            <li>雇用形態は、雇用期限の定めがない「ジェネラル・エンプロイメント・コントラクト社員」と、業務のアサイメントに応じて雇用期間を設定する「プロジェクト・エンプロイメント・コントラクト社員」の2種類が設定されています</li>
            <li>採用ページには中途入社者向けコンテンツ「他社を経験したから実感できる、ソニーならではの働きやすさ」への導線があります</li>
            <li>今回内容を確認できたのは事業会社「ソニー株式会社」の採用ページです。ソニーグループの各社で応募窓口や条件が異なる場合があるため、応募前に自分が受けたい会社・ポジションの窓口を公式サイトでご確認ください</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年10月14日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s4">ソニーの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "応募",
              desc: "「経験者採用エントリー」から希望の職種を1つ選択してエントリーします。同じ会社で一度に複数職種へ応募することは控えるよう案内されています（異なる会社への併願は可能）。",
            },
            {
              step: 2,
              title: "書類選考",
              desc: "人事および募集部門が書類選考を行い、合否にかかわらず結果が連絡されます。結果連絡までは約3週間が目安です。",
            },
            {
              step: 3,
              title: "面接（複数回）",
              desc: "配属予定の部署と面接を行います。回数は通常2回程度で、ポジションによって異なります。",
            },
            {
              step: 4,
              title: "最終面接",
              desc: "人事面接を行い、適性検査もこの段階で受験します。結果連絡までは約1週間〜10日が目安です。",
            },
            {
              step: 5,
              title: "内定",
              desc: "採用内定者に採用条件が提示されます。",
            },
            {
              step: 6,
              title: "入社",
              desc: "入社日は相談に応じるとされています。",
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
          出典：
          <a href="https://www.sony.co.jp/recruit/mid-career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ソニー株式会社 採用情報「経験者採用」</a>
          （2026年10月14日確認）。各期間は目安で、部門の事情により変動する場合があります。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">ソニー転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "「感動」を生むビジョン",
              desc: "ソニー株式会社はミッションに「テクノロジーの力で 未来のエンタテインメントを クリエイターと共創する」、ビジョンに「世界中の人に 感動を提供し続ける」を掲げています（同社公式サイト）。自分の経験をどう活かして感動を届けたいか、具体的に語れるようにしましょう。",
            },
            {
              title: "技術×クリエイティブの融合",
              desc: "ミッションにある「テクノロジー」と「クリエイター」の両方を意識し、技術者ならユーザーやクリエイターの視点を、企画・クリエイティブ職なら技術への理解を伝えられるよう準備しておくと、志望動機に説得力が出ます。",
            },
            {
              title: "専門分野の深い実績",
              desc: "経験者採用の応募資格は「求人領域の専門性をお持ちの方」です。過去のプロジェクトで出した具体的な成果を、数値を交えて説明できるよう準備しましょう。",
            },
            {
              title: "配属部署を意識した準備",
              desc: "面接は配属予定の部署と行われます。応募する求人の業務内容を読み込み、その部署で最初に取り組みたいことや、自分のスキルの活かし方を具体的に話せるようにしておきましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">ソニー転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "大手総合型の転職エージェント。幅広い業界・職種を扱っており、メーカーやIT業界への転職を検討する際に、まず相談先として押さえておきたいサービスです。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、専門職・管理職の求人を探したい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "管理職・専門職や外資系・グローバル企業の転職支援を得意とするハイクラス向けエージェント。英語力や専門性を活かしたい方におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "転職サイトとエージェントサービスを1つの会員登録で併用できる総合型サービス。自分で求人を探しながらアドバイザーにも相談したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援を中心とした総合型エージェント。書類作成や面接対策のサポートを受けながら、初めての転職を進めたい方におすすめです。",
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
        <h2 id="s7">ソニー転職 よくある質問</h2>
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
            ソニー転職を成功させるために
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
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
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
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
