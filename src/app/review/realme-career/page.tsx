import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "リアルミーキャリアの評判は？時短正社員・ワーママ特化の転職エージェントを徹底解説【2026年】",
  description:
    "リアルミーキャリアは、株式会社リアルミーが運営する時短正社員のワーママ・パパ向け転職エージェント。入社直後から時短勤務できる正社員求人に特化し、登録者は毎月2,000名以上（公式表記）。育児中アドバイザーのサポート・特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "リアルミーキャリアの評判は？時短正社員・ワーママ特化の転職エージェントを徹底解説【2026年】",
    description:
      "時短正社員特化の転職エージェント「リアルミーキャリア」の特徴・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "リアルミーキャリアの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的な仕組みとして、採用が決まった際に企業側が報酬を支払うモデルのため、求職者が面談・求人紹介・条件交渉支援などの費用を負担することはありません。",
  },
  {
    q: "本当に転職直後から時短勤務できますか？",
    a: "リアルミーキャリアは「転職後すぐに時短正社員として勤務が可能」な求人を扱うことを公式に掲げるサービスです（2026年8月22日確認）。取り扱い求人は正社員の時短勤務・フレックス・リモートなど柔軟な働き方ができるものが中心と公式FAQに記載されています。個別の求人条件は面談時にご確認ください。",
  },
  {
    q: "どんな職種の求人がありますか？",
    a: "公式サイトの求人カテゴリには、フルリモートOK・営業・エンジニア・デザイナー・WEBマーケティング・経理・労務・採用・事務・管理部門その他が並んでいます（2026年8月22日確認）。都市部のオフィスワーク系職種が中心の構成です。",
  },
  {
    q: "パパ（男性）でも利用できますか？",
    a: "利用できます。公式FAQに「育児中のワーママ&パパや、今後の出産や育児を見据えてワークライフバランスを整えたい方向けの転職エージェントサービス」と明記されており、対象は女性に限定されていません。",
  },
  {
    q: "育休中でも相談できますか？",
    a: "リアルミーキャリアは公式サイトで「育休明けの転職・退職」「育休中の転職・退職」に関する情報発信を行っており、育休中・育休明けの転職相談に対応しています。復帰後の働き方に不安がある段階での情報収集にも使えます。",
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

export default function RealmeCareerReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "リアルミーキャリアの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リアルミーキャリアの評判は？時短正社員・ワーママ特化の転職エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            リアルミーキャリアは、株式会社リアルミーが運営する「時短正社員のワーママ向け転職エージェント」です。
            マミートラック・時短期限切れ・小1の壁といった育児と仕事の両立の悩みに対して、
            入社直後から時短勤務・フレックス・リモートで働ける正社員求人の紹介に特化しています。
            この記事では、特徴・対象職種・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「転職後すぐに時短正社員」に特化した珍しいエージェント</strong>。時短勤務・フレックス・リモートなど柔軟に働ける正社員求人が対象です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録者は毎月2,000名以上・時短正社員の転職支援実績No.1（いずれも公式サイト表記）</strong>。育児中のアドバイザーが面談から条件交渉までサポートすると公表されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>ワーママだけでなく育児中のパパ、これから出産・育児を見据える人も対象</strong>と公式FAQに明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は無料</strong>。年収キープ・アップを掲げており、パート切り替えではなく正社員のまま働き方を変えたい人向けです。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="realme-career" heading="リアルミーキャリアに無料で転職相談する" note="時短正社員の転職相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "時短正社員" },
            { label: "登録者数（公式表記）", value: "月2,000名超" },
            { label: "料金", value: "無料" },
            { label: "対象", value: "ワーママ・パパ" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>リアルミーキャリアの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">リアルミーキャリア（時短正社員のワーママ向け転職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社リアルミー（Real Me Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象者</th><td className="px-3 py-2 border-b">育児中のワーママ・パパ／今後の出産・育児を見据えてワークライフバランスを整えたい人</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">取り扱い求人</th><td className="px-3 py-2 border-b">正社員の時短勤務・フレックス・リモートなど柔軟な働き方ができる求人（フルリモートOK／営業／エンジニア／デザイナー／WEBマーケティング／経理／労務／採用／事務／管理部門）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">面談／求人紹介／選考対策／条件交渉（育児中のアドバイザーが担当と公式表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">コンテンツ</th><td className="px-3 py-2 border-b">時短勤務の給与シミュレーター／ワーママ転職ノウハウ記事／時短転職の体験談</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：リアルミーキャリア公式サイト（realme-career.com）および株式会社リアルミー会社サイト（realme.co.jp）、2026年8月22日確認。「時短正社員の転職支援実績No.1」「登録者数毎月2,000名以上」は公式サイト表記（注記条件は公式サイト参照）。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>リアルミーキャリアの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「入社直後から時短」の正社員求人に特化",
              desc: "一般的なエージェントでは「時短はフルタイム勤務で実績を作ってから」となりがちですが、リアルミーキャリアは転職後すぐに時短正社員として勤務できる求人を扱うことを掲げています。時短のまま年収キープ・アップを目指せる点が特徴です。",
            },
            {
              title: "マミートラック・時短期限・小1の壁への処方箋",
              desc: "「マミートラックにはまってしまった」「時短勤務できる期限が切れそう」「小1の壁で両立が不安」といった育児中特有の悩みを入口にしたサービス設計で、公式サイトにはワーママ転職ノウハウ・体験談コンテンツが多数用意されています。",
            },
            {
              title: "育児中のアドバイザーがサポート",
              desc: "面談から選考対策、条件交渉まで、育児中のアドバイザーがサポートすると公表されています。保育園のお迎え時間や急な発熱対応など、当事者でないと分かりにくい条件面の交渉を相談しやすい体制です。",
            },
            {
              title: "都市部オフィスワーク系の職種構成",
              desc: "求人カテゴリは営業・エンジニア・デザイナー・WEBマーケティング・経理・労務・採用・事務など。フルリモートOK求人のカテゴリもあり、通勤時間を削減したい人の選択肢にもなります。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>リアルミーキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>育児と両立しながら正社員のまま転職したいワーママ・パパ</li>
              <li>今の会社の時短勤務の期限が切れそうで悩んでいる人</li>
              <li>マミートラックから抜け出してキャリアを再構築したい人</li>
              <li>時短・フレックス・リモートなど柔軟な働き方を最優先にしたい人</li>
              <li>育休明け・育休中の転職を考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>フルタイムで女性のキャリアアップ転職を目指す人 →<Link href="/review/type-woman/" className="text-teal underline">type女性の転職エージェント</Link>など女性特化型</li>
              <li>幅広い求人から選びたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>との併用</li>
              <li>地方在住で在宅以外の勤務を希望する人 →求人が都市部中心のため総合型で選択肢を確保</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          「時短正社員」という切り口は他の大手にはない特化領域です。働き方の条件を最優先にするならリアルミーキャリア、
          キャリアアップ軸なら女性特化・総合型と、<strong>目的別に2〜3社併用</strong>するのが現実的です。
          女性向けエージェントの全体像は<Link href="/type/women/" className="text-teal underline">女性向け転職エージェントまとめ</Link>で解説しています。
        </p>

        <h2>リアルミーキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：育児と両立する転職の第一候補</h2>
        <p>
          リアルミーキャリアは、入社直後から時短勤務できる正社員求人に特化した、対象を明確に絞った転職エージェントです。
          時短のまま年収キープ・アップを目指す設計、育児中アドバイザーのサポート、育休中・育休明けへの対応が特徴で、利用は無料です。
          育児と仕事の両立に悩んでいる人、時短期限や小1の壁を前に働き方を見直したい人は、
          まず無料の転職相談で紹介可能な求人を確認してみると良いでしょう。
        </p>

        <FelmatCta slug="realme-career" heading="リアルミーキャリアに無料で転職相談する" note="時短正社員の転職相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のエージェントと比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
            </Link>
            <Link href="/review/type-woman/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              type女性の転職エージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
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
