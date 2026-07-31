import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヤマハへの転職は難しい？中途採用・平均年収794万円・選考を徹底解説【2026年】",
  description:
    "ヤマハ（証券コード7951）への転職を有価証券報告書などの一次データで解説。平均年間給与は約794万円（2026年3月期・有報／提出会社）。楽器・音響機器メーカーとしての事業内容、中途採用の状況、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ヤマハへの転職は難しい？中途採用・平均年収794万円・選考を徹底解説【2026年】",
    description: "ヤマハ（7951・楽器/音響機器）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ヤマハの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約794万円（2026年3月期・提出会社）です。なお本記事のヤマハは証券コード7951の楽器・音響機器メーカーで、ヤマハ発動機（7272）とは別の法人です。"
  },
  {
    "q": "ヤマハは中途採用を行っていますか？",
    "a": "はい。楽器・音響機器の開発、生産技術、品質保証、営業・マーケティングなどの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "ヤマハの転職難易度は高いですか？",
    "a": "世界的に知名度の高いブランドで応募が集まりやすく、専門性が問われるポジションが中心のため、難易度は低くありません。音響・電気・ソフトウェア・製造業などでの実務経験を持つ方が有利です。"
  },
  {
    "q": "ヤマハのどんな職種の募集がありますか？",
    "a": "楽器・音響機器の設計開発（機構・電気・ソフトウェア）、生産技術、品質保証、営業・マーケティングなどメーカー定番職種の募集が中心です。募集の有無は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は静岡県浜松市（中央区中沢町10-1）です。工場・事業所勤務の職種もあり、応募ポジションにより異なります。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約18.08年（2026年3月期・提出会社）と上場企業の中でもかなり長い部類です。長く働く社員が多い企業文化がうかがえます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ヤマハ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ヤマハへの転職は難しい？中途採用・平均年収794万円・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ヤマハ（証券コード7951）は1897年設立、静岡県浜松市に本社を置く楽器・音響機器メーカーです。ピアノ・電子楽器・管弦打楽器などの楽器事業と、コンシューマー／プロ／モビリティ向けの音響機器事業を軸に、子会社61社とともにグローバルに事業を展開しています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
            なお、バイク等で知られるヤマハ発動機（証券コード7272）は別の法人であり、本記事はヤマハ（7951・楽器/音響機器）のみを扱います。
          </p>
        </div>

        <h2>結論：ヤマハ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約794万円（2026年3月期・有価証券報告書・提出会社）。楽器・音響機器メーカーとして高めの水準。</li>
            <li>平均勤続約18.08年と非常に長く、定着率の高さがうかがえるのが特徴。</li>
            <li>楽器・音響機器の世界的ブランドで、事業会社（持株会社ではない）として単体3,449名が在籍。</li>
            <li>ヤマハ発動機（7272）は別法人。応募・情報収集の際は混同に注意。</li>
            <li>設計開発・生産技術・品質保証・営業などメーカー系職種の採用が中心。</li>
          </ul>
        </div>

        <h2>ヤマハの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ヤマハ" },
                { label: "証券コード", value: "7951（東証プライム）" },
                { label: "本社", value: "静岡県浜松市中央区中沢町10-1" },
                { label: "事業内容", value: "楽器（ピアノ・電子楽器・管弦打楽器）、音響機器（コンシューマー／プロ／モビリティ向け）、その他（自動車用内装部品・FA・リゾート）" },
                { label: "設立・グループ", value: "1897年設立／子会社61社" },
                { label: "平均年間給与", value: "約794万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "43.42歳（同・提出会社）" },
                { label: "平均勤続年数", value: "18.08年（同・提出会社）" },
                { label: "従業員数", value: "3,449名（同・提出会社単体）" },
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

        <h2>ヤマハの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ヤマハは公式採用情報サイトに<a href="https://www.yamaha.com/ja/recruitment/mid-career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用</a>ページを常設し、「多種多様なご経験の方々を求めて、多くの中途採用募集を行っています」（公式記載）。応募は<a href="https://yamaha-recruiting.snar.jp/index.aspx/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集職種一覧（エントリーサイト）</a>から希望職種を選択し「応募」から必要情報を送信する形式で、書類選考の結果は全応募者に連絡されます（公式記載）。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（公式表記・2026年7月31日確認時点のエントリーサイト掲載分）：ヤマハグローバルウェブプラットフォームの開発推進エンジニア、電子楽器のファームウェア開発業務、電子楽器向けグローバルオンラインサービスを牽引するクラウドエンジニア、電子楽器のマーケティング・セールス（将来中国駐在候補）、楽器・音響機器製造に係る材料系の生産技術者。掲載内容は随時更新される。</li>
            <li>応募経路は複数：職種から応募／マイページ会員登録（情報収集段階向け）／元社員向け採用（退職者専用の応募方法）／リファラル採用（社員紹介）。雇用形態は正社員採用と契約社員採用の2種。</li>
            <li>勤務地の区分は本社、工場、国内事業所、関連会社、海外事業所など。確認日時点の掲載求人は静岡県浜松市が中心（ほか神奈川県横浜市、静岡県磐田市）。</li>
            <li>キャリア採用ページには中途入社社員インタビューも掲載（楽器開発者、自動車部品メーカー出身者の事例など）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        <h2>ヤマハで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "音響・電気・製造業での実務経験", desc: "設計開発・品質保証・生産技術など、音響機器・電機または近接する製造業での経験が評価されやすい構造です。" },
            { title: "音・製品品質へのこだわり", desc: "楽器・音響機器という「音」を扱う製品のため、品質への誠実な姿勢と細部へのこだわりが全職種で重視されます。" },
            { title: "部門を跨ぐ調整力", desc: "開発・生産・営業がグローバルに連携する事業のため、部門・拠点を跨ぐコミュニケーション力が求められます。" },
            { title: "腰を据えて働く姿勢", desc: "平均勤続18.08年という数字が示すように、長期でキャリアを築く文化との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ヤマハの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用ページ記載の流れ（2026年7月31日確認）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "募集職種一覧ページから応募し、書類選考が行われます。書類選考の結果は全応募者に連絡されます（公式記載）。" },
            { step: 2, title: "一次面接準備", desc: "適性検査の受検と自己紹介書の提出を行います。" },
            { step: 3, title: "一次面接", desc: "部門担当者との面談です。" },
            { step: 4, title: "二次面接", desc: "部門責任者および人事担当者との面談です。" },
            { step: 5, title: "最終選考（役員面談）", desc: "役員との面談による最終選考です。" },
            { step: 6, title: "採用内定", desc: "最終選考を経て採用内定となります。" },
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

        <h2>ヤマハの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約794万円（2026年3月期）は提出会社（単体3,449名）の全社平均。職種（開発・工場・営業）で水準は異なる。</li>
            <li>平均勤続18.08年・平均年齢43.42歳の安定雇用型。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ヤマハ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
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

        <h2>ヤマハ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ヤマハ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/casio/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カシオ計算機転職ガイド</Link>
            <Link href="/company/citizen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">シチズン時計転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニーグループ転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
