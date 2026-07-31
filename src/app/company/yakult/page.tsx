import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヤクルト本社への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ヤクルト本社（証券コード2267）への転職を有価証券報告書などの一次データで解説。平均年間給与は約854万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ヤクルト本社への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ヤクルト本社（2267）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ヤクルト本社の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約854万円（2026年3月期・単体）です。食品メーカーとしては標準〜やや高めの水準で、職種により実際のレンジは異なります。"
  },
  {
    "q": "ヤクルト本社は中途採用を行っていますか？",
    "a": "はい。生産技術・品質管理・研究開発・営業などの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "ヤクルト本社の転職難易度は高いですか？",
    "a": "国民的ブランドを持つ安定企業で長期雇用型のため、中途の募集枠は多くありません。食品・飲料・研究開発での専門経験を持つ方が有利です。"
  },
  {
    "q": "ヤクルトレディの募集とは違うのですか？",
    "a": "本ページはヤクルト本社（メーカー）の社員採用に関する解説です。宅配のヤクルトレディは各地の販売会社との契約で、本社の有報平均年収（約854万円）とは雇用形態・待遇が全く異なります。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都港区。研究所（国立）・全国の工場勤務の職種もあり、応募ポジションにより異なります。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約17.7年（2026年3月期）と、上場企業の中でも長い部類です。長く働く社員が多い企業文化がうかがえます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ヤクルト本社" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ヤクルト本社への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ヤクルト本社（証券コード2267）は乳酸菌飲料「ヤクルト」で知られる食品・飲料大手です。国内に加え、アジア・米州など海外事業の比重が大きいのが特徴です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ヤクルト本社転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約854万円（2026年3月期・有価証券報告書・単体2,912名）。食品・飲料メーカーとして高めの水準。</li>
            <li>平均勤続約17.7年と長く、定着率の高さがうかがえるのが特徴。</li>
            <li>「Yakult1000」ヒットの国内に加え、アジア・米州の海外事業が利益の柱。</li>
            <li>生産技術・品質管理・研究開発・営業などメーカー系職種の採用が中心。</li>
          </ul>
        </div>

        <h2>ヤクルト本社の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ヤクルト本社" },
                { label: "証券コード", value: "2267（東証プライム）" },
                { label: "本社", value: "東京都港区" },
                { label: "事業内容", value: "乳酸菌飲料・食品・化粧品・医薬品の製造・販売（「Yakult(ヤクルト)1000」等・海外事業が柱）" },
                { label: "平均年間給与", value: "約854万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約41.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約17.7年（同・提出会社）" },
                { label: "従業員数", value: "2,912名（同・提出会社単体）／連結は要公式確認" },
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

        <h2>ヤクルト本社の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ヤクルト本社は<a href="https://www.yakult.co.jp/saiyou/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用情報サイト</a>に<a href="https://www.yakult.co.jp/saiyou/career-info/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「キャリア採用」区分</a>を設けており、募集職種は公式案内先の<a href="https://hrmos.co/pages/yakult" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">HRMOSの募集職種一覧</a>に掲載されます。2026年7月31日確認時点で掲載されていたキャリア採用求人は「☆海外駐在前提☆海外工場管理者候補」「☆海外駐在前提☆海外事業所管理部門責任者候補」の2職種のみでした（公式表記のまま）。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用区分は新卒／高専／障がい者／キャリアの4本立て。キャリア採用の求人はHRMOS掲載分を確認する形。</li>
            <li>確認時点の掲載は海外駐在前提の2職種のみで、国内勤務前提のキャリア求人は掲載されていなかった（勤務地等の詳細は各求人ページで確認する仕様）。</li>
            <li>応募には顔写真付き履歴書と職務経歴書の提出が必須。書類選考通過者のみ連絡と公式に記載。</li>
            <li>採用に関する問い合わせはメールのみ（電話不可）。ヤクルトグループ関連会社や販売会社でも社員やヤクルトスタッフの募集を行っている場合がある（詳細は各社へ直接問い合わせ）。ヤクルトレディ募集は別枠。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>ヤクルト本社で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "食品・製造業での実務経験", desc: "生産技術・品質保証・研究開発など、食品または近接する製造業での経験が最も評価されます。" },
            { title: "食品安全・品質への意識", desc: "口に入る商品を扱うため、品質・安全に対する誠実な姿勢が全職種で重視されます。" },
            { title: "現場と連携する調整力", desc: "工場・営業・開発が連携する事業のため、部門を跨ぐコミュニケーション力が求められます。" },
            { title: "安定志向と着実さ", desc: "平均勤続17.7年という数字が示すように、腰を据えて長く働く文化との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ヤクルト本社の選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用サイト（キャリア採用）に記載の選考フローです（2026年7月31日確認時点）。詳細は職種・時期により異なる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募", desc: "公式案内先のHRMOSページに掲載された求人から応募。顔写真付き履歴書と職務経歴書の提出が必須です。" },
            { step: 2, title: "書類選考", desc: "提出書類による選考。書類選考通過者のみ連絡と公式に記載されています。" },
            { step: 3, title: "面接（複数回）と筆記試験等", desc: "公式記載では、面接は複数回行われ、あわせて筆記試験等が実施されます。" },
            { step: 4, title: "内定", desc: "選考通過後に内定。入社時期や条件面は個別に確認しましょう。" },
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

        <h2>ヤクルト本社の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約854万円（2026年3月期）は単体全社員の平均。職種（本社・工場・営業）で水準は異なる。</li>
            <li>平均勤続17.7年・平均年齢41.7歳と長期雇用型のため、平均値は在籍年数の長さを反映している。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ヤクルト本社転職で活用したい転職エージェント</h2>
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

        <h2>ヤクルト本社転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ヤクルト本社転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/muji/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">良品計画転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/daifuku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ダイフク転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
