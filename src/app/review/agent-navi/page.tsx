import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/agent-navi/" },
  title: "転職AGENT Navi（転職エージェントナビ）の口コミ・評判は？仕組みと注意点【2026年10月】",
  description:
    "転職AGENT Navi（転職エージェントナビ）の口コミ・評判を出典を明記して整理します。circus株式会社運営（許可番号13-ユ-317371）、2024年4月開始・300名以上のアドバイザーから相性の良い担当者を紹介する無料サービスの仕組み・注意点・上手な使い方を公式情報にもとづいて解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "転職AGENT Navi（転職エージェントナビ）の口コミ・評判は？仕組みと注意点【2026年10月】",
    description:
      "転職AGENT Navi（転職エージェントナビ）の口コミ・評判の傾向と、仕組み・注意点を公式情報ベースで解説。利用は無料です。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "転職AGENT Navi（転職エージェントナビ）の口コミ・評判は？仕組みと注意点【2026年10月】",
  dateModified: "2026-10-14",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/agent-navi/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "転職エージェントナビは「やばい」「怪しい」と言われることがありますが、信頼できるサービスですか？",
    a: "運営会社のcircus株式会社(2017年7月設立、東京都中央区京橋)は、厚生労働大臣の有料職業紹介事業許可(許可番号13-ユ-317371)を会社概要で公表しています。求職者の利用は無料で、費用は紹介先企業によってまかなわれる仕組みと公式に案内されています。ただし転職AGENT Navi自体は求人を直接紹介するのではなく、提携する転職エージェントの担当者を紹介するサービスである点にご留意ください。",
  },
  {
    q: "ほかの転職サービスと併用しても問題ありませんか？",
    a: "公式FAQでは「問題ございません」とし、効率的に活動を進めるために複数のサービスを利用することをすすめています。紹介された転職エージェントと合わないと感じた場合は、別の転職エージェントの紹介も可能と案内されています。",
  },
  {
    q: "最初の面談の所要時間と予約方法を教えてください。",
    a: "公式の利用の流れでは、LINE上のカレンダーから都合の良い時間を予約し、転職エージェントナビの担当者が現在の状況や希望を15分程度ヒアリングするとされています。その後、紹介された転職エージェントと改めて面談する流れです。",
  },
  {
    q: "転職AGENT Naviの利用に費用はかかりますか？",
    a: "求職者の利用は無料と公式に案内されています。人材紹介の標準的なビジネスモデルとして企業側が費用を負担する仕組みのため、面談・エージェント紹介・転職支援に費用はかかりません。",
  },
  {
    q: "普通の転職エージェントと何が違うのですか？",
    a: "転職AGENT Navi自体は「求人を紹介するエージェント」ではなく、「自分に合う転職エージェントの担当者を紹介するマッチングサービス」です。ナビ担当との面談で希望・相性を確認した上で、300名以上のアドバイザーの中から合う担当者を紹介し、その後の転職支援は紹介されたエージェントと進める流れです。",
  },
  {
    q: "どんな人が対象ですか？",
    a: "公式LPでは20代の既卒・第二新卒・フリーター・ニートを主な対象として案内しています。同時に「職歴の有無、年齢、学歴などで判断することは一切ございません」とも記載されています（2026年10月14日確認）。経歴に自信がない段階で「どのエージェントに登録すべきか」から相談したい人に向く設計です。30代以上やハイクラス志向で希望が明確な場合は、総合型・特化型エージェントへの直接登録のほうが効率的な場合があります。",
  },
  {
    q: "転職AGENT Naviの口コミが少ないのはなぜですか？",
    a: "運営会社のプレスリリースによると、転職AGENT Naviのサービス開始は2024年4月1日で、比較的新しいサービスです。2026年10月14日時点で、コエテコキャリアの同サービスページには利用者投稿の口コミが掲載されておらず、OpenWork等の社員口コミサイトはサービス利用者の評価ではありません。口コミを参考にする際は、投稿日と「紹介された先のエージェント名」が書かれているかを確認すると判断しやすくなります。",
  },
  {
    q: "紹介されたエージェントが合わなかったらどうすればいいですか？",
    a: "合わないと感じたらナビ側に再相談し、別の担当者・エージェントを紹介してもらう使い方が想定されています(「相性」を前面に出したサービス設計のため)。合わない担当者と我慢して進める必要はありません。",
  },
  {
    q: "利用の流れを教えてください。",
    a: "公式案内では、①エントリー・LINEで面談予約②ナビ担当と面談(15分程度)③紹介されたエージェントと面談④転職支援スタート(職務経歴書・面接対策・応募)⑤内定、という流れです。困りごとがあれば転職エージェントナビが間に入ってサポートすると案内されています。",
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

export default function AgentNaviReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "転職AGENT Navi（転職エージェントナビ）の口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職AGENT Navi（転職エージェントナビ）の口コミ・評判は？仕組みと注意点【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-2">最終更新: 2026年10月14日</p>
          <p className="text-text-secondary leading-relaxed">
            転職AGENT Navi（転職エージェントナビ）は、circus株式会社が運営する「求職者と転職エージェントのマッチングサービス」です。
            自分で複数のエージェントに登録して比較する代わりに、面談を通じて300名以上のアドバイザーから相性の良い担当者を紹介してもらう仕組みで、
            20代の既卒・第二新卒・フリーターを主な対象としています。
            この記事では、仕組み・特徴・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="agent-navi" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>エージェント自体ではなく「エージェントを紹介する」サービス</strong>です。300名以上のアドバイザーから相性で担当者をマッチングします。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>主対象は20代の既卒・第二新卒・フリーター</strong>です。「どのエージェントに登録すべきかわからない」段階から相談できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>10万件以上の求人(公称)</strong>を母数に、紹介されたエージェント経由で提案を受けられます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は無料</strong>です。担当者が合わなければ再マッチングを相談できる設計です。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="agent-navi" heading="転職AGENT Navi公式サイトで無料エントリーする" note="面談・エージェント紹介は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "サービス形態", value: "マッチング" },
            { label: "アドバイザー（公称）", value: "300名+" },
            { label: "求人数（公称）", value: "10万件+" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>転職AGENT Navi（転職エージェントナビ）の基本データ【2026年10月14日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">転職AGENT Navi(転職エージェントナビ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">circus株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都中央区京橋1-13-1 WORK VILLA KYOBASHI 9F</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役 矢部 貴志</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2017年7月</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金</th><td className="px-3 py-2 border-b">29,560,000円（資本準備金含む）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介許可番号</th><td className="px-3 py-2 border-b">13-ユ-317371（運営会社の会社概要に記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス開始</th><td className="px-3 py-2 border-b">2024年4月1日（運営会社のプレスリリースより）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">LINE友だち数</th><td className="px-3 py-2 border-b">サービス開始から1年で1万人突破、2026年7月に2万人突破と発表（いずれも運営会社発表）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">求職者と転職エージェント(担当アドバイザー)のマッチングプラットフォーム</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">規模(公称)</th><td className="px-3 py-2 border-b">東京・大阪・名古屋・福岡など全国の、様々な会社に所属する転職アドバイザー300名以上／求人10万件以上。担当変更可能で「見つかるまで無料でマッチング」と記載</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">最初の面談</th><td className="px-3 py-2 border-b">コンシェルジュとLINE通話（公式LPは15分程度、プレスリリースは15分〜30分程度と記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">主な対象</th><td className="px-3 py-2 border-b">20代の既卒・第二新卒・フリーター・ニート</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">利用の流れ</th><td className="px-3 py-2 border-b">エントリー・LINEで面談予約→ナビ担当と面談(15分程度)→紹介エージェントと面談→転職支援スタート→内定</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">希望勤務地の選択肢</th><td className="px-3 py-2 border-b">東京23区／首都圏(東京・神奈川・千葉・埼玉)／大阪／名古屋／札幌／福岡／広島／仙台／静岡／その他（公式エントリーフォームの選択肢）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（費用は紹介先企業がまかなう仕組みと公式FAQで案内）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：
          <a href="https://service.circus-group.jp/circus/agentnavi/" rel="nofollow noopener" target="_blank" className="underline">転職AGENT Navi公式LP</a>
          ・
          <a href="https://www.circus-group.jp/company" rel="nofollow noopener" target="_blank" className="underline">circus株式会社 会社概要</a>
          ・運営会社プレスリリース（LINE友だち1万人突破／2万人突破の発表、VOIX掲載）（いずれも2026年10月14日確認）。許可番号はLP内には記載がなく、運営会社の会社概要ページの記載を掲載しています。当サイトでは口コミ・数値の創作は行っていません。
        </p>

        <h2>転職AGENT Navi（転職エージェントナビ）の口コミ・評判（出典を明記した傾向）</h2>
        <p className="text-sm text-text-secondary mb-4">
          2026年10月14日時点で、転職AGENT Naviについて<strong>利用者本人が投稿した公開口コミとして確認できたものは少数</strong>でした（転職サービスの口コミ掲載サイト「コエテコキャリア」の同サービスページにもユーザー投稿の口コミは掲載されていませんでした）。
          そのため当サイトでは体験談や点数を作らず、公式が公表している評価と、公式仕様から読み取れるポイントを分けて整理します。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながりやすい点（公式公表ベース）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>公式LPでは、日本マーケティングリサーチ機構による「2025年1月期_ブランドのイメージ調査」（Webアンケート、n=100）で No.1 を獲得したと掲載しています（2025年2月27日のプレスリリースでは「転職する際につかってみたいと思う」「初めての転職でも安心して利用できそうな」「採用面接官がお勧めしたいと思う」転職エージェント紹介サービスの3部門）。ただし公式注記のとおり<strong>ブランドのイメージに関する調査で、利用有無は聴取しておらず、効果効能や優位性を保証するものではありません</strong>。</li>
              <li>担当者が合わないと感じたら別の転職エージェントを紹介してもらえます（公式FAQ）。</li>
              <li>困りごとや相談は転職エージェントナビが間に入ってサポートすると案内されています（公式の利用の流れ）。</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりやすい点（公式仕様から）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ナビ担当との面談後、<strong>紹介された転職エージェントと改めて面談する必要があります</strong>。求人紹介はその後になるため、すぐ求人を見たい人には手間に感じられる可能性があります。</li>
              <li>紹介される担当者との相性は、実際に面談するまでわかりません（再紹介は可能）。</li>
              <li>主な利用者は20代の既卒・第二新卒・フリーター・ニートと公式に案内されています（年齢・職歴・学歴で判断しないとも記載）。30代以上や専門職・ハイクラスの人は、紹介先エージェントの得意分野を面談で確認することをおすすめします。</li>
              <li>予約はLINE上で行う設計のため、LINEを使わない人には向きません。</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          <strong>当サイトの見方：</strong>
          転職AGENT Naviは「求人を紹介するエージェント」ではなく「エージェントの担当者を紹介する入口」です。評判を判断する際は、ナビ自体よりも<strong>紹介された先のエージェント・担当者の質</strong>が満足度を左右する点にご留意ください。合わない場合に再紹介を依頼することは、公式に案内されている使い方です。
        </p>
        <div className="glass-card p-5 mb-4">
          <h3 className="font-bold text-navy mb-2 text-sm">運営会社が公表している利用者の声（第三者口コミではありません）</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            運営会社のプレスリリース（LINE友だち1万人突破の発表）には、大手人材サービス会社のカスタマーサクセス職に内定した26歳女性、WEBマーケティング会社のコンサルティング営業に内定した29歳女性の声が掲載されています。
            内容はいずれも「面談で転職の軸が見つかった」「初回のLINE通話で的確なアドバイスを受けた」という趣旨です。運営会社が選んで掲載した声のため、良い面に偏る点を割り引いて読む必要があります。
          </p>
        </div>
        <div className="rounded-xl border border-border p-4 mb-4 text-sm text-text-secondary">
          <strong>口コミを探すときの注意：</strong>「転職エージェントナビ 口コミ」で検索すると、名前の似た「マイナビ転職AGENT」「マイナビ転職エージェントサーチ」の口コミが多く表示されます。いずれも別サービスです。
          また、比較サイトに載っている口コミの多くは、調査主体や回答者数の詳細が書かれていない自社アンケートです。当サイトでは、投稿元と件数を確認できない口コミは傾向の根拠にしていません。
        </div>
        <p className="text-xs text-text-muted mb-8">出典：転職AGENT Navi公式LP（No.1表記の注記・FAQ・利用の流れ）、コエテコキャリア「転職エージェントナビ」ページ（利用者口コミの掲載なし）、運営会社プレスリリース（2025年2月27日・No.1の3部門／LINE友だち1万人突破）（いずれも2026年10月14日確認）。他社の比較記事に掲載された口コミは一次情報でないため出典にしていません。</p>

        <h2>評判を踏まえた転職AGENT Naviの上手な使い方</h2>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-text-secondary mb-3">
          <li><strong>最初の面談で「希望業界」と「担当者に求めること」を具体的に伝える</strong>：公式LPは、性格・考え方・希望業界に強いかどうかで相性を見極めてマッチングすると説明しています。伝えた内容がそのまま紹介の材料になります。</li>
          <li><strong>紹介先エージェントの社名と得意分野を確認する</strong>：アドバイザーは様々な会社に所属しています。実際の求人紹介や書類添削は紹介先の会社が行うので、どの会社の担当者なのかを把握しておくと比較しやすくなります。</li>
          <li><strong>合わなければ早めに担当変更を依頼する</strong>：公式FAQでは、合わないと感じたら別の転職エージェントを紹介できると案内しています（担当変更可能）。</li>
          <li><strong>求人をすぐ見たい人は総合型と併用する</strong>：紹介先との面談を経てから求人提案になるため、急ぐ場合は<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などへの直接登録を並行すると時間を短縮できます。併用は公式FAQでもすすめられています。</li>
        </ol>
        <p className="text-xs text-text-muted mb-8">出典：転職AGENT Navi公式LP・FAQ（2026年10月14日確認）。</p>

        <h2>転職AGENT Naviの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「担当者の相性」からエージェントを選べる",
              desc: "転職エージェントの満足度は担当者との相性に大きく左右されます。転職AGENT Naviは希望・状況を面談で確認した上で、300名以上のアドバイザーから合う担当者を紹介する仕組みで、担当者の当たり外れという課題への対策を前面に出しています。",
            },
            {
              title: "20代・経歴に自信がない層が主対象",
              desc: "既卒・第二新卒・フリーター・ニートといった、大手エージェントで求人紹介を受けにくいことがある層を主対象として明示しています。",
            },
            {
              title: "10万件以上の求人母数(公称)",
              desc: "紹介先エージェント群の求人を合わせた業界最大級の求人母数から、面談内容に合わせた提案を受けられるとしています。",
            },
            {
              title: "内定までの伴走サポート",
              desc: "エージェント紹介後も、内定まで徹底したサポートを行うと公表しています。紹介して終わりではなく、進捗に応じた再マッチングの相談も可能な設計です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>転職AGENT Naviが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代で既卒・第二新卒・フリーターから正社員を目指す人</li>
              <li>どの転職エージェントに登録すべきか決められない人</li>
              <li>過去にエージェントの担当者と合わなかった経験がある人</li>
              <li>まず面談で状況を整理してから動きたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>30代以上・キャリアの方向が明確な人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>への直接登録が効率的です</li>
              <li>職種特化の深い支援を求める人 →ITなら<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>や<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア" />、コンサルなら<FelmatTextLink slug="newma" text="NewMA" />が候補です</li>
              <li>ハイクラス・スカウト型を使いたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職AGENT Naviは「エージェント選びの入口」に当たるサービスです。自分で比較検討できる人は各エージェントへの直接登録の方が早い一方、
          <strong>最初の一歩で迷っている20代には相談先として使いやすい</strong>設計になっています。
        </p>

        <h2>転職AGENT Navi よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：転職エージェント選びに迷う20代の相談先</h2>
        <p>
          転職AGENT Naviは、circus株式会社が運営する転職エージェントとのマッチングサービスです。
          300名以上のアドバイザーから相性で担当者を紹介する仕組みで、20代の既卒・第二新卒・フリーターを主な対象としています。利用は無料です。
          「どのエージェントがいいかわからない」段階の人は、
          <FelmatTextLink slug="agent-navi" text="転職AGENT Naviの無料エントリー" />(PR)から面談を受けることをおすすめします。
        </p>

        <FelmatCta slug="agent-navi" heading="転職AGENT Navi公式サイトで無料エントリーする" note="面談・エージェント紹介は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">転職AGENT Naviを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
            </Link>
            <Link href="/age/20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              20代の転職ガイド
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
