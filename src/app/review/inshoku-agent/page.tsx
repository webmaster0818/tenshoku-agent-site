import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "飲食店ドットコムエージェントの評判は？飲食業界特化の転職エージェントを徹底解説【2026年】",
  description:
    "飲食店ドットコムエージェントは、東証プライム上場の株式会社シンクロ・フードが運営する飲食業界特化の転職エージェント。飲食特化20年以上・累計掲載求人7万件以上の「求人飲食店ドットコム」と併用でき、未経験歓迎求人もあり。特徴・料金・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "飲食店ドットコムエージェントの評判は？飲食業界特化の転職エージェントを徹底解説【2026年】",
    description:
      "東証プライム上場シンクロ・フード運営の飲食特化転職エージェントの特徴・料金・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "飲食店ドットコムエージェントの利用に費用はかかりますか？",
    a: "求職者の方は、すべてのサービスを無料で利用できます。面談・求人紹介・履歴書添削・面接対策など、すべて無料でサポートすると公式サイトに明記されています（2026年8月22日確認）。",
  },
  {
    q: "飲食業界の経験がなくても利用できますか？",
    a: "はい、利用できます。公式FAQに「未経験歓迎の求人も多数ご用意していますので、業界に初めてチャレンジしたい方もお気軽にご相談ください」と明記されています。飲食業界に初挑戦したい人の相談にも対応しています。",
  },
  {
    q: "在職中でも相談だけの利用は可能ですか？",
    a: "可能です。公式FAQに「転職するかどうか決まっていない段階でも、情報収集やキャリア相談だけでも大歓迎です」と明記されています。今の仕事を続けながら、すき間時間で進められる設計です。",
  },
  {
    q: "登録後の流れはどうなりますか？",
    a: "公式サイトによると、①基本情報を入力して無料登録（最短1分）→②専任スタッフから希望確認の電話（最短当日）→③書類サポート・面接対策→④内定・入社決定（条件交渉・スケジュール調整も代行）という流れです。その後の連絡はメールなど希望の手段で柔軟に対応と記載されています。",
  },
  {
    q: "エージェント以外の探し方もできますか？",
    a: "できます。登録すると、同社が10年以上運営する求人サイト「求人飲食店ドットコム」（累計掲載求人7万件以上）も利用でき、気になる求人に自分で応募する・エージェントに相談する・スカウトを待つ、の3通りを自由に使い分けられると公式に記載されています。",
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

export default function InshokuAgentReview() {
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
          { name: "飲食店ドットコムエージェントの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            飲食店ドットコムエージェントの評判は？飲食業界特化の転職エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            飲食店ドットコムエージェントは、東証プライム上場の株式会社シンクロ・フードが運営する、飲食業界特化の正社員転職・就職エージェントです。
            飲食店の出店から運営・退店までを支える「飲食店ドットコム」を約20年運営してきた同社ならではの業界ネットワークが強みで、
            店舗の雰囲気や経営者の人柄まで把握したうえでのマッチングを掲げています。
            この記事では、特徴・料金・サポート内容・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>飲食業界に特化した転職エージェント</strong>。ホール・調理・店長候補から料理長・本部スタッフまで、飲食の職種を専門に扱います。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>運営は東証プライム上場の株式会社シンクロ・フード</strong>（証券コード3963）。飲食業界向けサービスを約20年展開してきた会社です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求人サイト「求人飲食店ドットコム」（累計掲載7万件以上）と併用可能</strong>。エージェント紹介・自己応募・スカウト待ちを自由に使い分けられます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>未経験歓迎求人もあり、利用は完全無料</strong>。在職中の相談だけの利用も公式に歓迎されています。</span>
            </li>
          </ul>
        </div>

        <div className="my-8 rounded-2xl border border-teal/20 bg-teal/5 p-5 sm:p-6 text-center">
          <p className="font-bold text-navy mb-3">飲食業界での転職を考えている方はこちら</p>
          <p className="text-sm">
            <FelmatTextLink slug="inshoku-agent" text="飲食業界特化の転職エージェント「飲食店ドットコムエージェント」に無料相談する" />
          </p>
          <p className="text-xs text-text-muted mt-3">登録・相談は無料です。</p>
          <p className="text-xs text-text-muted mt-2">※本リンクはプロモーション（PR）です。</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "飲食業界" },
            { label: "併用求人サイト累計掲載", value: "7万件超" },
            { label: "料金", value: "無料" },
            { label: "運営", value: "プライム上場" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>飲食店ドットコムエージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">飲食店ドットコムエージェント（飲食業界特化の正社員転職・就職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社シンクロ・フード（東京証券取引所プライム市場上場・証券コード3963）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区恵比寿南1-7-8（東京本社）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象職種</th><td className="px-3 py-2 border-b">サービス・ホール／調理・キッチン／店長候補・マネージャー／料理長候補／パティシエ／本部スタッフ・SVなど飲食業界の職種全般</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／履歴書添削／面接対策／条件交渉・スケジュール調整代行／入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談方法</th><td className="px-3 py-2 border-b">電話ヒアリング（最短当日）・オンラインやメールでの対応も可</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：飲食店ドットコムエージェント公式サービス紹介ページ（job.inshokuten.com/about/agent_service）および株式会社シンクロ・フード会社概要（synchro-food.co.jp）、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>飲食店ドットコムエージェントの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "飲食業界特化20年以上のネットワーク",
              desc: "運営元は飲食店の出店・運営・退店を支える総合サービス「飲食店ドットコム」を約20年展開。求人専門の「求人飲食店ドットコム」も10年以上運営しており、店舗の雰囲気や人柄、経営者の想いまで把握したうえで職場を紹介すると公表しています。",
            },
            {
              title: "求人票では分からない「現場のリアル」を重視",
              desc: "業界との強いつながりを活かし、現場の雰囲気や人間関係まで希望に沿った職場を提案すると掲げています。実際に働きやすさを確認できている月給38万円以上のハイクラス求人の紹介も可能と公式に記載されています。",
            },
            {
              title: "エージェント＋求人サイト＋スカウトの3wayで使える",
              desc: "登録すると人材紹介だけでなく、累計掲載求人7万件以上の「求人飲食店ドットコム」も利用可能。気になる求人への自己応募・エージェント相談・スカウト待ちを自由に組み合わせて転職活動を進められます。",
            },
            {
              title: "忙しい飲食従事者向けの手軽な設計",
              desc: "登録は最短1分、面談はオンラインやメール対応も可能。今の仕事を続けながらすき間時間で進められることを公式が強調しており、シフト勤務で日中動きにくい人にも使いやすい設計です。",
            },
            {
              title: "未経験からの飲食業界チャレンジにも対応",
              desc: "未経験歓迎の求人も多数用意していると公式FAQに明記。飲食業界に初めて挑戦する人のキャリア相談から対応しています。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="inshoku-agent" heading="飲食店ドットコムエージェントに無料相談する" note="飲食業界特化のキャリア相談は無料です。" />

        <h2>飲食店ドットコムエージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>飲食業界内でのステップアップ転職（店長・料理長・本部職など）を考えている人</li>
              <li>店の雰囲気・人間関係まで含めて職場を選びたい人</li>
              <li>シフト勤務で忙しく、オンライン・メール中心で転職活動を進めたい人</li>
              <li>未経験から飲食業界に挑戦したい人</li>
              <li>エージェント紹介と自己応募・スカウトを併用したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>飲食業界以外への転職（異業種への脱出）を考えている人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>未経験からIT業界を目指したい人 →<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>や<Link href="/review/rework/" className="text-teal underline">Re:WORKエージェント</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          飲食店ドットコムエージェントは対象を飲食業界に絞ったサービスです。飲食以外も視野に入れる場合は総合型との併用が現実的です。
          転職エージェントの選び方の基本は<Link href="/knowledge/how-to-choose/" className="text-teal underline">エージェントの選び方ガイド</Link>にまとめています。
        </p>

        <h2>飲食店ドットコムエージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：飲食業界でキャリアを積むならまず候補に</h2>
        <p>
          飲食店ドットコムエージェントは、東証プライム上場のシンクロ・フードが運営する飲食業界特化の転職エージェントです。
          業界特化20年以上のネットワークによる「現場のリアルが分かる」求人紹介、求人サイト・スカウトとの3way利用、
          未経験歓迎求人への対応が特徴で、利用は完全無料です。
          飲食業界での転職・就職を考えている人は、在職中のキャリア相談からでも始めやすいサービスです。
        </p>

        <FelmatCta slug="inshoku-agent" heading="飲食店ドットコムエージェントに無料相談する" note="登録は最短1分・在職中の相談も歓迎と公式に記載されています。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のエージェントと比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェント
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

