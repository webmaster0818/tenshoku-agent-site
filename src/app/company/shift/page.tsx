import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'SHIFTへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】',
  description:
    'SHIFT（証券コード3697）への転職を有価証券報告書などの一次データで解説。平均年間給与は約684万円（2025年8月期・有報／提出会社）。中途採用・求められる人材・年収の考え方をまとめました。',
  openGraph: {
    title: 'SHIFTへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】',
    description: "SHIFTの平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": 'SHIFTの平均年収はいくらですか？',
    "a": '有価証券報告書によると平均年間給与は約684万円（2025年8月期・提出会社）です。ITコンサル/SI業界としては高水準で、等級・役職により実レンジは変わります。'
  },
  {
    "q": 'SHIFTは中途採用を行っていますか？',
    "a": 'はい。コンサルタント・エンジニア等の職種でキャリア採用が活発です。募集状況は時期により変動するため、公式採用サイトでご確認ください。'
  },
  {
    "q": 'SHIFTの転職難易度は高いですか？',
    "a": '人気企業のため選考の競争はありますが、コンサル/IT/特定ドメインの実務経験があれば十分にチャンスがあります。等級ごとに求められる水準が異なります。'
  },
  {
    "q": 'SHIFTの平均年齢・勤続年数は？',
    "a": '有報では平均年齢約38歳・平均勤続約3.2年（2025年8月期）です。'
  },
  {
    "q": '未経験から転職できますか？',
    "a": '職種によります。ポテンシャル採用や育成前提の枠がある場合もありますが、多くは実務経験者が中心です。まずはエージェントで想定レンジと可能性を確認するのが確実です。'
  }
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

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: 'SHIFT' }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SHIFTへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            SHIFT（証券コード3697（東証プライム））は、ソフトウェアの品質保証・テストを起点に、開発やDX支援まで事業を広げる急成長IT企業です。未経験入社の育成体制でも知られます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：SHIFT転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約684万円（2025年8月期・有報／単体6,201名）。母集団が大きく、公的統計並み〜やや上。</li>
            <li>平均勤続約3.2年と短めだが、急拡大による新規入社の多さを反映（定着の低さと単純に結びつかない）。</li>
            <li>テストエンジニア・QAコンサル・開発など幅広く大量に中途採用。</li>
            <li>未経験からの育成ルートがあり、異業種からの転職事例も多い。</li>
          </ul>
        </div>

        <h2>SHIFTの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: 'SHIFT' },
                { label: "証券コード", value: '3697（東証プライム）' },
                { label: "本社", value: '東京都港区' },
                { label: "事業内容", value: 'ソフトウェアの品質保証・テストを起点にした総合ITサービス' },
                { label: "平均年間給与", value: "約684万円（2025年8月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約38歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約3.2年（同・提出会社）" },
                { label: "従業員数", value: "6,201名（同・提出会社単体）／連結は要公式確認" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>SHIFTの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            SHIFTは
            <a href="https://recruit.shiftinc.jp/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用専用サイト</a>
            で中途採用を積極的に行っています。選考の流れは公式の
            <a href="https://recruit.shiftinc.jp/career/recruit-info/process/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">選考フローページ</a>
            に記載されています。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary mb-4">
            <li>募集職種（公式表記・職種カテゴリより抜粋）：フロントエンドエンジニア／バックエンドエンジニア／インフラ・クラウドエンジニア／QAエンジニア／セキュリティエンジニア／コンサルタント／プロジェクトマネージャー／営業職 など（ほかフルスタックエンジニア、DevOps/SRE、AI/ML、テックリード、スクラムマスター/アジャイルコーチ、ビジネスマネジメント職、コーポレート職等）。</li>
            <li>選考の特徴：書類選考では「AIレジュメアナライザー」により経歴・スキルを統一フォーマットで可視化・要約。応募者全員が「CAT検定」（活躍する素養を見極める検定試験）を受検し、面接は原則1回（動画撮影を行い複数の採用決裁者が閲覧）。一部ハイスキルポジションは「ワークショップ選考」です。「AIインタビュー」は開発中と記載されています。</li>
            <li>勤務地区分：北海道・東北／北陸・甲信越／関東／東海／関西／中国・四国／九州・沖縄。</li>
            <li>転職体験記、カムバックメンバー特集、30代ITエンジニアインタビューなど、インタビュー記事が400本以上掲載されています。中途採用比率の数値記載は確認できませんでした。</li>
          </ul>
          <p className="text-xs text-text-muted">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>SHIFTで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
          {
            title: '品質・テストへの関心', desc: 'ソフトウェアテスト・QAの経験や適性が評価されます。未経験でも育成前提の採用枠あり。',
          },
          {
            title: '論理性と丁寧さ', desc: '品質を担保する仕事のため、緻密さと論理的思考が問われます。',
          },
          {
            title: '成長意欲', desc: '急成長環境で役割が広がるため、学ぶ姿勢が重要。',
          },
          {
            title: 'コミュニケーション力', desc: '開発チームや顧客との連携が多いため対人力が活きます。',
          },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>SHIFTの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用ページ記載の流れ（2026年7月31日確認）。職種により異なる場合があるため、最新は公式サイトでご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "「AIレジュメアナライザー」により、経歴・スキルが統一フォーマットで可視化・要約されます。" },
            { step: 2, title: "CAT検定", desc: "活躍する素養を見極める検定試験。応募者全員が受検します。" },
            { step: 3, title: "面接選考", desc: "面接は原則1回。動画撮影を行い、複数の採用決裁者が閲覧します。一部ハイスキルポジションは「ワークショップ選考」となります。" },
            { step: 4, title: "オファー", desc: "選考通過後、オファーとなります。なお「AIインタビュー」は開発中と公式ページに記載されています。" },
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

        <h2>SHIFTの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約684万円（2025年8月期）は単体全社員の平均。等級・役職で水準は大きく異なる。</li>
            <li>ITコンサル/SIは年齢より等級・案件責任で年収が決まるため、昇格が年収アップの鍵。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
        </div>

        <h2>SHIFT転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: 'レバテックキャリア', href: '/review/levtech/', desc: 'IT・エンジニア特化。ITコンサル・SIの専門性を評価してもらいやすく、非公開求人も豊富。' },
            { name: 'リクルートエージェント', href: '/review/recruit-agent/', desc: '求人数業界最大級。大手IT・コンサルから幅広くカバー。' },
            { name: 'doda', href: '/review/doda/', desc: 'エージェントと求人サイトの両方。同業比較・年収レンジの把握がしやすい。' },
            { name: 'ビズリーチ', href: '/review/bizreach/', desc: 'スカウト型。ハイクラスのコンサル・IT求人が集まる。' },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>SHIFT転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">SHIFT転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/it-consultant-salary/" className="btn-outline px-8 py-3">ITコンサル年収ランキングを見る</Link>
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキング</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/future/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">フューチャー転職ガイド</Link>
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総研転職ガイド</Link>
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ITコンサル年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
