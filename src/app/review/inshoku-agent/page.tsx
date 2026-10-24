import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/inshoku-agent/" },
  title: "飲食店ドットコムエージェントの口コミ・評判は？飲食業界特化の転職エージェントを解説【2026年10月】",
  description:
    "飲食店ドットコムエージェントの口コミ・評判を出典を明記して整理します。2026年3月開始、東証プライム上場シンクロ・フード運営（許可番号13-ユ-301534）の飲食業界特化エージェントの特徴・注意点・利用の流れを解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "飲食店ドットコムエージェントの口コミ・評判は？飲食業界特化の転職エージェントを解説【2026年10月】",
    description:
      "飲食店ドットコムエージェントの口コミ・評判の傾向と、東証プライム上場シンクロ・フード運営の飲食特化転職エージェントの特徴・注意点を公式情報にもとづいて解説します。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "飲食店ドットコムエージェントの口コミ・評判は？飲食業界特化の転職エージェントを解説【2026年10月】",
  dateModified: "2026-10-24",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/inshoku-agent/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "飲食店ドットコムエージェントの利用に費用はかかりますか？",
    a: "求職者の方は、すべてのサービスを無料で利用できます。面談・求人紹介・履歴書添削・面接対策など、すべて無料でサポートすると公式サイトに明記されています（2026年10月14日確認）。",
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
    a: "公式サイトによると、①基本情報を入力して無料登録（最短1分）→②専任スタッフから希望確認の電話（最短当日）→③書類サポート・面接対策→④内定・入社決定（条件交渉・スケジュール調整も代行）という流れです。その後の連絡はメールなど希望の手段で柔軟に対応すると記載されています。",
  },
  {
    q: "エージェント以外の探し方もできますか？",
    a: "できます。登録すると、同社が10年以上運営する求人サイト「求人飲食店ドットコム」（累計掲載求人7万件以上）も利用でき、気になる求人に自分で応募する・エージェントに相談する・スカウトを待つ、の3通りを自由に使い分けられると公式に記載されています。",
  },
  {
    q: "飲食店ドットコムエージェントの口コミが少ないのはなぜですか？",
    a: "運営会社のプレスリリース（2026年3月2日掲載）によると、飲食店ドットコムエージェントは2026年3月に提供を開始したばかりのサービスです。そのため2026年10月14日時点では、エージェント本体についての利用者の公開口コミは確認できていません。「求人飲食店ドットコム」や「飲食店ドットコム」（物件・M&Aなど）は同じ会社の別サービスなので、口コミを調べるときは混同しないよう注意してください。",
  },
  {
    q: "どんなお店の求人が多いですか？",
    a: "提供開始時のプレスリリースでは、個人店・専門店から大手企業まで幅広く扱い、中心は個店から10店舗規模の飲食企業、海鮮・フレンチ・イタリアン・鉄板焼きなどの専門店や高単価業態も含むと説明されています。その後、2026年8月14日の決算説明資料では、成功報酬型を希望する大手法人企業を中心に引き合いがあり、掲載数が大きく伸びたと説明しています（件数は非開示）。公式サイトの求人例は、大手和食ダイニングの料理長（月給38万円）、大型ブルワリーレストランのホールスタッフ（月給35万円）、本格フレンチカフェの調理スタッフ（月給30万円）の3件です（2026年10月24日確認）。",
  },
  {
    q: "問い合わせ先はどこですか？",
    a: "公式サービス紹介ページに、電話（03-5734-1866／06-7639-0137）とメール（agent-inshokuten@synchro-food.co.jp）が記載されています。受付時間の記載はありません（2026年10月24日確認）。",
  },
  {
    q: "飲食店ドットコムエージェントは「やばい」「怪しい」サービスではありませんか？",
    a: "運営会社の株式会社シンクロ・フードは東京証券取引所プライム市場上場（証券コード3963）の企業で、同社の会社概要に有料職業紹介事業の許可番号「13-ユ-301534」が記載されています（2026年10月14日確認）。国の許可を受けた職業紹介事業者が運営するサービスです。なお同社は2026年5月14日、人材紹介事業で元従業員1名が架空の売上（総額約1,200万円）を計上していたことを公表し、個人情報の流出は現時点で確認されていないこと、業務システムの導入やチェック体制の強化などの再発防止策を示しています（同社適時開示、2026年10月24日確認）。",
  },
  {
    q: "電話連絡は頻繁にありますか？",
    a: "公式FAQでは、登録後はまず専任スタッフから希望条件確認の電話があり、その後の求人紹介や日程調整はメールなど希望の手段で対応すると説明されています。電話が苦手な場合は、最初のヒアリング時に連絡手段の希望を伝えておくことをおすすめします。",
  },
  {
    q: "アルバイト・パートの求人も紹介してもらえますか？",
    a: "公式FAQによると、エージェントでは正社員・契約社員の求人を中心に紹介しています。アルバイト・パートを探す場合は、同社の求人サイト「求人飲食店ドットコム」で自分で探す形になります。",
  },
  {
    q: "登録したらすぐに転職しなければいけませんか？",
    a: "公式FAQに「いいえ、その必要はありません」と明記されており、自分のペースで転職活動を進められます。情報収集やキャリア相談だけの利用も歓迎とされています。",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "飲食店ドットコムエージェントの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            飲食店ドットコムエージェントの口コミ・評判は？飲食業界特化の転職エージェントを解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月24日（公式サービス紹介ページ・運営会社の決算説明資料と適時開示を同日確認）</p>
          <p className="text-text-secondary leading-relaxed">
            飲食店ドットコムエージェントは、東証プライム上場の株式会社シンクロ・フードが運営する、飲食業界特化の正社員転職・就職エージェントです。
            飲食店の出店から運営・退店までを支える「飲食店ドットコム」を約20年運営してきた同社ならではの業界ネットワークが強みで、
            店舗の雰囲気や経営者の人柄まで把握したうえでのマッチングを掲げています。
            この記事では、口コミ・評判の傾向（出典を明記）と、特徴・料金・サポート内容・注意点・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="inshoku-agent" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>飲食業界に特化した転職エージェント</strong>です。ホール・調理・店長候補から料理長・本部スタッフまで、飲食の職種を専門に扱います。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>運営は東証プライム上場の株式会社シンクロ・フード</strong>（証券コード3963）。飲食業界向けサービスを約20年展開してきた会社です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求人サイト「求人飲食店ドットコム」（累計掲載7万件以上・2026年10月17日時点の公式表記）と併用できます</strong>。エージェント紹介・自己応募・スカウト待ちを自由に使い分けられます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>未経験歓迎求人もあり、利用は無料</strong>です。在職中の相談だけの利用も公式に歓迎されています。</span>
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
            { label: "併用求人サイト累計掲載", value: "7万件以上" },
            { label: "料金", value: "無料" },
            { label: "運営", value: "プライム上場" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>飲食店ドットコムエージェントの基本データ【2026年10月14日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">飲食店ドットコムエージェント（飲食業界特化の正社員転職・就職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">提供開始</th><td className="px-3 py-2 border-b">サービス名「飲食店ドットコムエージェント」としての提供は2026年3月から（運営会社のプレスリリース・決算説明資料）。同社の飲食店向け人材紹介事業そのものは2025年6月に新規事業として開始（同社の適時開示、2026年5月14日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">主な求人先</th><td className="px-3 py-2 border-b">個店〜10店舗規模の飲食企業が中心。海鮮・フレンチ・イタリアン・鉄板焼きなどの専門店や高単価業態も含み、大手企業も扱っています（提供開始時のプレスリリースより）。2026年8月の決算説明資料では、成功報酬型を希望する大手法人企業を中心に引き合いがあり、掲載数が大きく伸びたと説明しています（件数は非開示）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社シンクロ・フード（東京証券取引所プライム市場上場・証券コード3963）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区恵比寿南1-7-8 恵比寿サウスワン（本社）／大阪支社：大阪府大阪市北区梅田3-4-5 毎日新聞ビル8階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立・代表者</th><td className="px-3 py-2 border-b">2003年4月24日設立／代表取締役 大久保俊</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">許可番号</th><td className="px-3 py-2 border-b">有料職業紹介事業 13-ユ-301534（運営会社の会社概要に記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">雇用形態</th><td className="px-3 py-2 border-b">正社員・契約社員の求人が中心（アルバイト・パートは求人サイト「求人飲食店ドットコム」側で探す形）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人ジャンル</th><td className="px-3 py-2 border-b">居酒屋・カフェ・レストラン・ホテル内レストラン・高級店・チェーン店など（公式FAQより）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象職種</th><td className="px-3 py-2 border-b">サービス・ホール／調理・キッチン／店長候補・マネージャー／料理長候補／パティシエ／本部スタッフ・SVなど飲食業界の職種全般</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／履歴書添削／面接対策／条件交渉・スケジュール調整代行／入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談方法</th><td className="px-3 py-2 border-b">電話ヒアリング（最短当日）・オンラインやメールでの対応も可</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">問い合わせ先</th><td className="px-3 py-2 border-b">03-5734-1866／06-7639-0137、メール agent-inshokuten@synchro-food.co.jp（公式サービス紹介ページに記載。受付時間の記載はありません）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：飲食店ドットコムエージェント公式サービス紹介ページ（job.inshokuten.com/about/agent_service）および株式会社シンクロ・フード会社概要（<a href="https://www.synchro-food.co.jp/company/overview" rel="nofollow noopener" target="_blank" className="text-teal underline">synchro-food.co.jp/company/overview</a>）、2026年10月14日確認（2026年10月24日に公式サービス紹介ページを再確認）。提供開始・事業の状況は株式会社シンクロ・フードの2026年3月期決算説明資料（2026年5月14日）・2027年3月期第1四半期決算説明資料（2026年8月14日）・適時開示「当社元従業員による不正行為に関するお知らせ」（2026年5月14日）によります。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>公式サイトに掲載されている求人例</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式サービス紹介ページには、紹介求人の例が3件掲載されています（2026年10月24日確認）。求人数や対応エリアは公式ページに記載がないため、求人の傾向をつかむ目安としてご覧ください。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">業態</th>
                <th className="text-left px-3 py-2 border-b">職種</th>
                <th className="text-left px-3 py-2 border-b">月給</th>
                <th className="text-left px-3 py-2 border-b">掲載されている待遇</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">大手和食ダイニング（上場企業）</td><td className="px-3 py-2 border-b">料理長</td><td className="px-3 py-2 border-b">38万円</td><td className="px-3 py-2 border-b">8連休制度</td></tr>
              <tr><td className="px-3 py-2 border-b">大型ブルワリーレストラン</td><td className="px-3 py-2 border-b">ホールスタッフ</td><td className="px-3 py-2 border-b">35万円</td><td className="px-3 py-2 border-b">月9日休み・海外研修旅行</td></tr>
              <tr><td className="px-3 py-2 border-b">本格フレンチカフェ</td><td className="px-3 py-2 border-b">調理スタッフ</td><td className="px-3 py-2 border-b">30万円</td><td className="px-3 py-2 border-b">月8日休み・季節休暇10日</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：飲食店ドットコムエージェント公式サービス紹介ページの求人例（2026年10月24日確認）。掲載時点の例であり、現在募集中であることや同じ条件の求人が常にあることを示すものではありません。
          なお、同ページでは求人サイト「求人飲食店ドットコム」の運営年数を本文で「10年以上」、画像の説明文で「約20年」と表記しており、本記事では本文の表記に合わせています。
        </p>

        <h2>飲食店ドットコムエージェントの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "飲食業界特化20年以上のネットワーク",
              desc: "運営元は飲食店の出店・運営・退店を支える総合サービス「飲食店ドットコム」を約20年展開しています。求人専門の「求人飲食店ドットコム」も10年以上運営しており、店舗の雰囲気や人柄、経営者の想いまで把握したうえで職場を紹介すると公表しています。",
            },
            {
              title: "求人票ではわからない現場の実情を重視",
              desc: "業界との強いつながりを活かし、現場の雰囲気や人間関係まで希望に沿った職場を提案すると掲げています。実際に働きやすさを確認できている月給38万円以上のハイクラス求人の紹介も可能と公式に記載されています。",
            },
            {
              title: "エージェント・求人サイト・スカウトの3通りで利用可能",
              desc: "登録すると人材紹介だけでなく、累計掲載求人7万件以上の「求人飲食店ドットコム」も利用できます。気になる求人への自己応募・エージェント相談・スカウト待ちを自由に組み合わせて転職活動を進められます。",
            },
            {
              title: "忙しい飲食従事者向けの手軽な設計",
              desc: "登録は最短1分、面談はオンラインやメールでの対応も可能です。今の仕事を続けながらすき間時間で進められることを公式が強調しており、シフト勤務で日中動きにくい人にも使いやすい設計です。",
            },
            {
              title: "未経験からの飲食業界チャレンジにも対応",
              desc: "未経験歓迎の求人も多数用意していると公式FAQに明記されています。飲食業界に初めて挑戦する人のキャリア相談から対応しています。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="inshoku-agent" heading="飲食店ドットコムエージェントに無料相談する" note="飲食業界特化のキャリア相談は無料です。" />

        <h2>飲食店ドットコムエージェントの口コミ・評判（出典を明記した傾向）</h2>
        <p className="text-sm text-text-secondary mb-4">
          2026年10月14日に、Web検索で「飲食店ドットコムエージェント 口コミ」「飲食店ドットコムエージェント 評判」を調べたところ、
          <strong>エージェントサービスそのものについての利用者の公開口コミは確認できませんでした</strong>（検索上位に出るのは運営会社や同社の別サービスの情報が中心で、エージェント本体を独自に検証した第三者の比較記事も見当たりませんでした）。
          背景として、このサービスは<strong>2026年3月に提供が始まったばかり</strong>です（運営会社のプレスリリース、2026年3月2日掲載）。
          運営元の求人サイト「求人飲食店ドットコム」やM&amp;Aサービスの評価は別サービスのものなので、本記事では評判として扱っていません。
          そのため、当サイトでは架空の体験談や点数は載せず、公式仕様から読み取れる「良い点として挙がりやすい要素」と「起こりうる注意点」を事実ベースで整理します。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながりやすい点（公式仕様より）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>運営が東証プライム上場企業で、有料職業紹介の許可番号（13-ユ-301534）も公開されています</li>
              <li>飲食業界に特化し、店の雰囲気・人柄まで把握したうえでの紹介を掲げています</li>
              <li>登録は最短1分、面談はオンライン・電話・メールに対応しており、在職中でも進めやすい設計です</li>
              <li>料理長候補・マネジメント職などキャリアアップ求人や、月給38万円以上の求人例も公式に掲載されています</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりうる点（公式仕様より）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>紹介は正社員・契約社員が中心です。アルバイト・パートを希望する場合は、自分で求人サイトから探す形になります</li>
              <li>飲食業界特化のため、異業種への転職相談には向いていません</li>
              <li>登録後はまず電話でのヒアリングがあります（その後はメール等の希望手段に対応すると公式に記載されています）</li>
              <li>対応エリアは公式ページに明記がなく、連絡先は東京（03）・大阪（06）です。地方求人の量は面談でご確認ください</li>
              <li>公開口コミが少ないため、利用者の評判を事前に比較しにくい状況です</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          <strong>当サイトの見方：</strong>運営元の信頼性（上場企業・許可事業者）と飲食業界での実績は公式情報で確認できます。一方、エージェントとしての利用者の声はまだ見えにくいため、
          飲食業界の転職なら<Link href="/review/oishiru-career/" className="text-teal underline">オイシルキャリア</Link>などの飲食特化サービスや総合型と併用し、担当者との相性や紹介求人の質を比較することをおすすめします。
        </p>
        <div className="rounded-xl border border-border p-4 mb-4 text-sm text-text-secondary">
          <strong>口コミを探すときの注意（同じ会社の別サービス）：</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>求人飲食店ドットコム：求人サイト（自分で応募する形）です。エージェントとは使い方が異なります</li>
            <li>飲食店ドットコム：店舗物件探し・開業支援など飲食店経営者向けのサービスです</li>
            <li>飲食店ドットコム M&amp;A：飲食店の事業譲渡の仲介サービスです</li>
          </ul>
          <p className="mt-1">これらの評判は、エージェント（転職支援）の評判とは異なります。今後エージェント本体の口コミが掲載された場合は、投稿日と「担当者からの紹介だったか」を確認したうえでお読みください。</p>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          2026年10月24日に「飲食店ドットコムエージェント 口コミ」「飲食店ドットコムエージェント 評判」で再度検索しましたが、状況は10月14日と同じで、上位は運営会社の告知記事と同社の別サービス（物件・M&amp;A・求人サイト）のページでした。
          M&amp;Aサービスのレビューサイト（ITreview）の評価は投稿1件で、エージェントとは別のサービスです。
        </p>

        <h3 className="font-bold text-navy mb-2">運営会社が公表している人材紹介事業の不正行為と再発防止策</h3>
        <p className="text-sm text-text-secondary mb-2">
          「やばい」「怪しい」という検索をする方のために、運営会社が公式に開示している事実を記載します。株式会社シンクロ・フードは2026年5月14日、飲食店向け人材紹介事業で
          元従業員1名が2025年6月から2026年3月にかけて契約書や入社承諾の書類を偽造し、架空の売上（総額約1,200万円）を計上していたと公表しました。
          同社は、単独の行為で他の役職員の関与はないこと、求人企業・求職者の個人情報の流出は現時点で確認されていないことを説明しています。当該元従業員は2026年5月13日付で懲戒解雇されています。
        </p>
        <p className="text-sm text-text-secondary mb-2">
          原因として、新規事業の立ち上げ期に実務が1名に集中し、専用の業務管理システムがなかったことなどを挙げ、再発防止策として、契約書の作成・送付を営業担当以外の担当者が行う体制、人材紹介用の業務システムの導入、内部監査とコンプライアンス研修の強化を示しています。
        </p>
        <p className="text-xs text-text-muted mb-4">
          出典：株式会社シンクロ・フード 適時開示「当社元従業員による不正行為に関するお知らせ」（2026年5月14日、東京証券取引所の適時開示情報）・2026年3月期決算説明資料（同日）、2026年10月24日確認。
          当サイトはこの開示内容を要約したもので、求職者向けサービスの品質を評価したものではありません。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：Web検索結果（2026年10月14日確認）・運営会社プレスリリース（Koubo掲載、2026年3月2日）。エージェント本体の公開口コミは確認できず、他社の転職比較記事は一次情報でないため出典にしていません。仕様は飲食店ドットコムエージェント公式サービス紹介ページ（<a href="https://job.inshokuten.com/about/agent_service" rel="nofollow noopener" target="_blank" className="text-teal underline">job.inshokuten.com/about/agent_service</a>）、2026年10月14日確認。</p>

        <h2>飲食店ドットコムエージェントの利用の流れ</h2>
        <ol className="list-decimal pl-6 space-y-1 text-sm text-text-secondary mb-3">
          <li><strong>無料相談に登録</strong>：公式サイトで基本情報を入力します（最短1分）</li>
          <li><strong>電話ヒアリング</strong>：専任スタッフから希望条件確認の電話があります（最短当日）</li>
          <li><strong>書類サポート・面接対策</strong>：履歴書添削や面接アドバイスを受けられます</li>
          <li><strong>内定・入社決定</strong>：給与などの条件交渉やスケジュール調整を代行してもらえます</li>
        </ol>
        <p className="text-xs text-text-muted mb-8">※公式サイトでは、状況や応募先企業によって流れが異なる場合があり、求人への応募は任意と説明されています（2026年10月14日確認）。</p>

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
              <li>飲食業界以外への転職（異業種への転職）を考えている人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>未経験からIT業界を目指したい人 →<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>や<Link href="/review/rework/" className="text-teal underline">Re:WORKエージェント</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          飲食店ドットコムエージェントは対象を飲食業界に絞ったサービスです。飲食以外も視野に入れる場合は総合型との併用をおすすめします。
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

        <h2>まとめ：飲食業界でのキャリア形成に適した転職エージェント</h2>
        <p>
          飲食店ドットコムエージェントは、東証プライム上場のシンクロ・フードが運営する飲食業界特化の転職エージェントです。
          業界特化20年以上のネットワークによる現場の実情を踏まえた求人紹介、求人サイト・スカウトとの3通りの利用、
          未経験歓迎求人への対応が特徴で、利用は無料です。
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
            <Link href="/review/oishiru-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              オイシルキャリアの詳細
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

