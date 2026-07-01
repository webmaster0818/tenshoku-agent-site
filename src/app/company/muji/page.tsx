import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "良品計画（無印良品）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "良品計画（無印良品／証券コード7453）への転職を有価証券報告書などの一次データで解説。平均年間給与は約670万円（2025年8月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "良品計画（無印良品）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description:
      "良品計画（7453）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "良品計画（無印良品）の平均年収はいくらですか？",
    a: "有価証券報告書によると、提出会社（単体）の平均年間給与は約670万円（2025年8月期）です。前期の2024年8月期は約643万円で、近年は上昇傾向にあります。これは全社員の平均であり、職種・年齢・役職・店舗／本部の別によって実際の水準は異なります。",
  },
  {
    q: "良品計画は中途採用を行っていますか？",
    a: "はい、良品計画は中途採用（キャリア採用）を行っています。店舗運営・エリアマネジメントのほか、商品開発、MD、生産、EC・デジタル、経営企画、海外事業など本部系の職種でも募集があります。最新の募集職種は公式採用サイトでご確認ください。",
  },
  {
    q: "良品計画（無印良品）の転職難易度は高いですか？",
    a: "無印良品ブランドの人気が高く応募が集まりやすい一方で、事業拡大に伴い店舗・本部ともに採用ニーズがあります。職種によって求められる経験が異なり、商品開発や海外事業などの専門ポジションでは相応の経験が求められます。ブランド哲学への共感度も重視される傾向にあります。",
  },
  {
    q: "良品計画の事業内容は何ですか？",
    a: "「無印良品」「MUJI」ブランドで、衣料品・生活雑貨・食品などの企画・開発・製造・小売を国内外で展開しています。近年は地域・コミュニティとの連携やまちづくり、EC強化にも取り組んでいます。",
  },
  {
    q: "良品計画の選考ではどのような点が見られますか？",
    a: "職種にもよりますが、応募職種での実務経験に加え、無印良品の思想・価値観（感じ良いくらしと社会の実現など）への共感、生活者視点、チームでの協働姿勢などが評価される傾向にあります。なぜ良品計画なのかを自分の言葉で語れることが重要です。",
  },
  {
    q: "良品計画の勤務地はどこですか？",
    a: "本社は東京都豊島区にあります。全国・海外の店舗網を持つため、職種によって勤務地や異動の可能性が異なります。応募時に確認しましょう。",
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

export default function MujiCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "良品計画（無印良品）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            良品計画（無印良品）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            良品計画（証券コード7453）は「無印良品」「MUJI」ブランドを国内外で展開する小売・製造小売（SPA）企業です。
            本記事では、有価証券報告書などの公開一次データをもとに、良品計画の平均年収・中途採用の状況・選考フロー・求められる人材を客観的に整理します。
          </p>
        </div>

        {/* 結論 */}
        <h2>結論：良品計画転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は<strong className="text-navy">約670万円（2025年8月期・有価証券報告書）</strong>。前期（2024年8月期）の約643万円から上昇傾向。</li>
            <li>無印良品ブランドの人気で応募は集まりやすいが、店舗・本部ともに採用ニーズがあり中途の門戸は広い。</li>
            <li>商品開発・EC・海外事業などの専門ポジションでは相応の経験が必要。ブランド哲学への共感も重視。</li>
            <li>年収は全社平均であり、店舗／本部・職種・年代・役職によって実際の水準は異なる点に注意。</li>
          </ul>
        </div>

        {/* 基本データ（有報） */}
        <h2>良品計画の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社良品計画（RYOHIN KEIKAKU CO., LTD.）" },
                { label: "証券コード", value: "7453（東証プライム）" },
                { label: "本社", value: "東京都豊島区東池袋4-26-3" },
                { label: "事業内容", value: "「無印良品」「MUJI」ブランドの衣料品・生活雑貨・食品などの企画・開発・製造・小売（国内外）" },
                { label: "平均年間給与", value: "約670万円（2025年8月期・有価証券報告書／提出会社）※前期・2024年8月期は約643万円" },
                { label: "平均年齢", value: "約36.9歳（2025年8月期・提出会社）" },
                { label: "平均勤続年数", value: "約7.5年（同・提出会社）" },
                { label: "従業員数", value: "約4,039名（同・提出会社単体、正社員）／臨時従業員は別途多数" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。良品計画は8月決算です。店舗／本部・職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        {/* 中途採用の状況 */}
        <h2>良品計画の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            良品計画は国内外での店舗展開やEC・デジタル強化、地域連携などの取り組みを進めており、店舗運営職から本部の専門職まで幅広く中途採用を行っています。人気ブランドゆえ応募が集まりやすい一方、事業成長に伴い多様な人材ニーズがあります。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>店舗運営・店長・エリアマネージャーなどの店舗系。</li>
            <li>商品開発・MD・生産・品質などの商品系。</li>
            <li>EC・デジタル、経営企画、海外事業、コーポレート（経理・人事等）などの本部系。</li>
            <li>募集職種・要件は時期により変動するため、公式採用サイトでの最新確認が必須。</li>
          </ul>
        </div>

        {/* 求められる人材 */}
        <h2>良品計画で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "ブランド哲学への共感",
              desc: "「感じ良いくらし」を目指す無印良品の思想・価値観に共感し、それを自分の仕事にどう反映するかを語れることが重視されます。",
            },
            {
              title: "生活者・現場視点",
              desc: "商品もサービスも生活者の視点が起点になります。顧客・現場を起点に考え、改善を積み重ねられる姿勢が評価されます。",
            },
            {
              title: "応募職種での実務経験",
              desc: "商品開発・EC・海外事業・コーポレートなど、応募職種に直結する経験・スキルが求められます。小売・SPA・メーカーでの経験は強みになります。",
            },
            {
              title: "変化に対応する柔軟性",
              desc: "国内外での事業拡大や新しい取り組みが多く、変化を前向きに捉えて動ける柔軟性・主体性が求められます。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 選考フロー */}
        <h2>良品計画の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。公式採用サイトまたは転職エージェント経由で応募します。" },
            { step: 2, title: "一次面接", desc: "現場の担当者・マネージャーとの面接。実務経験や応募動機、ブランドへの理解が問われます。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。価値観への共感やカルチャーフィット、長期的なキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
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

        {/* 年収の考え方 */}
        <h2>良品計画の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-3">
            有価証券報告書における提出会社の平均年間給与は約670万円（2025年8月期）です。ただしこれは<strong className="text-navy">店舗・本部を含む全社員の平均</strong>であり、次の点に注意が必要です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>店舗系と本部系、職種・役職によって年収レンジは異なる。</li>
            <li>平均年齢が約36.9歳と比較的若く、年齢・役職が上がるほど平均は上振れする。</li>
            <li>近年は処遇改善が進み、前期（643万円）から上昇している点も参考になる。</li>
            <li>中途入社時の提示額は、これまでの経験・スキル・応募ポジションによって決まる。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。
          </p>
        </div>

        {/* おすすめ転職エージェント */}
        <h2>良品計画転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          小売・SPA・消費財の求人は非公開で扱われることも多いため、複数のエージェントに登録して情報を広く集めるのが有効です。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級で、小売・消費財・本部系の求人も幅広く扱います。非公開求人の紹介も期待できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用でき、小売・EC・商品開発など幅広い求人を比較できます。" },
            { name: "マイナビ転職エージェント", href: "/review/mynavi/", desc: "20代〜30代の転職に強み。小売・サービス業の求人も多く、初めての業界転職でも相談しやすいです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス・スカウト型。本部の専門職・管理職ポジションの情報収集に向いています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>良品計画転職 よくある質問</h2>
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
            良品計画転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            人気企業だからこそ、転職エージェントを活用して非公開求人や選考のポイントを押さえましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連ページ */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/capcom/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              カプコン転職ガイド
            </Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HOYA転職ガイド
            </Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
            <Link href="/knowledge/resume/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              職務経歴書の書き方
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの口コミを見る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
