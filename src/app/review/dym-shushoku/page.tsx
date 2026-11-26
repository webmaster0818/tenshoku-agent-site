import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "DYM就職の評判は？現ミーツカンパニー就職・転職エージェントを厚労省データ・Googleのクチコミ・公式情報で確認【2026年11月】";

export const metadata: Metadata = {
  alternates: { canonical: "/review/dym-shushoku/" },
  title: TITLE,
  description:
    "既卒・フリーター向けの「DYM就職」は2026年10月に「ミーツカンパニー就職・転職エージェント」へ改称しました。厚生労働省の就職者数・6か月以内の離職者数、公式の実績表記の注記、運営規約、Googleのクチコミ（4.2・712件）を2026年11月27日に確認しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "DYM就職（現ミーツカンパニー就職・転職エージェント）の評判を厚労省データと公式情報で確認",
    description: "名称変更の経緯、厚生労働省の就職者数・早期離職者数、公式の実績表記の注記、運営規約をまとめています。",
  },
};

const CHECKED = "2026年11月27日";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/dym-shushoku/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "DYM就職の評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。確認できた範囲では、Googleマップの運営会社「㈱DYM」（品川区大崎の本社）のクチコミが平均4.2・712件です（2026年11月27日確認）。ただし、この登録は新卒向けサービスや就活イベントなど同社の複数の事業に共通するもので、DYM就職だけの評価ではありません。客観的な指標として、厚生労働省に登録された株式会社DYMの職業紹介の就職者数は令和6年度3,255人、無期雇用のうち6か月以内の離職者は264人（当サイト算出で約8.3%）です。",
  },
  {
    q: "DYM就職とミーツカンパニーは同じサービスですか？",
    a: "株式会社DYMは2026年10月1日に、「Meets Company」「DYMスカウト」「DYM就職」をミーツカンパニーブランドに統合しました。DYM就職は「ミーツカンパニー就職・転職エージェント」に名称が変わり、旧サイト（www.dshu.jp）は新しいページ（www.meetscompany.jp/career/）へ転送されます。公式ページの名称にも「（旧：DYM就職）」と記載されています。",
  },
  {
    q: "DYM就職は無料で利用できますか？",
    a: "運営規約の第7条（当社報酬について）では、手数料表および返戻金制度にもとづいて求人企業から手数料を受け取ると定められています。公式サイトも「まずは無料相談」と案内しています。厚生労働省の登録情報でも、株式会社DYMは手数料「有」・返戻金制度「有」の有料職業紹介事業者です（いずれも2026年11月27日確認）。",
  },
  {
    q: "どのような人が対象ですか？",
    a: "公式サイトでは、既卒・第二新卒・フリーター・未経験の方向けの就職・転職エージェントと案内しています。2026年11月27日時点で、年齢や学歴の利用条件は公式サイトに明記されていません。ご自身が紹介を受けられるかは、面談でご確認ください。",
  },
  {
    q: "「面談実績70,000人以上」「サービス満足度90%」の根拠は何ですか？",
    a: "公式サイトの注記では、面談実績は2017年5月〜2026年3月の実績、満足度は2025年10月〜2026年3月の利用者満足度とされています。満足度の調査方法・回答数・設問は掲載されていないため、当サイトでは参考値として扱っています。「最短1日で内定」は2024年の実績で、選考回数や日程により希望に添えない場合があると注記されています。",
  },
  {
    q: "求人数はどのくらいですか？",
    a: "2026年11月27日時点で、ミーツカンパニー就職・転職エージェントの公式ページに求人数の記載はありません。希望する職種・地域の求人があるかは、面談で確認する必要があります。",
  },
  {
    q: "利用をやめたいときはどうすればよいですか？",
    a: "運営規約の第4条では、サービス提供期間は原則としてサービス開始の通知日から2年間とされ、利用者から終了の申し出があった場合は合理的な範囲内で速やかに終了すると定められています。第3条では、提出した履歴書・職務経歴書は申し出があれば削除すると記載されています。",
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

// 厚生労働省 人材サービス総合サイト 株式会社ＤＹＭ（13-ユ-304089）令和8年11月1日現在の表示
const placements = [
  { year: "令和2年度", total: 2799, muki: 2799, leave: 145, unknown: 119 },
  { year: "令和3年度", total: 3815, muki: 3747, leave: 268, unknown: 45 },
  { year: "令和4年度", total: 3053, muki: 2930, leave: 173, unknown: 118 },
  { year: "令和5年度", total: 3494, muki: 3339, leave: 141, unknown: 86 },
  { year: "令和6年度", total: 3255, muki: 3164, leave: 264, unknown: 33 },
  { year: "令和7年度", total: 2762, muki: 2759, leave: null as number | null, unknown: null as number | null },
];

const MHLW_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-304089%2C1+++++";

const NEWS_URL =
  "https://dym.asia/news/%e6%96%b0%e5%8d%92%e3%83%bb%e8%8b%a5%e6%89%8b%e5%90%91%e3%81%91%e6%8e%a1%e7%94%a8%e6%94%af%e6%8f%b44%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e3%82%92%e3%80%8c%e3%83%9f%e3%83%bc%e3%83%84%e3%82%ab%e3%83%b3/";

const sources = [
  { label: "ミーツカンパニー就職・転職エージェント（旧：DYM就職）公式ページ", url: "https://www.meetscompany.jp/career/" },
  { label: "株式会社DYM 就職・転職支援サービス運営規約（最終改定 2024年11月15日）", url: "https://www.meetscompany.jp/terms/" },
  { label: "株式会社DYM「新卒・若手向け採用支援4サービスを「ミーツカンパニー」ブランドに統合」（2026年10月1日）", url: NEWS_URL },
  { label: "株式会社DYM 会社概要", url: "https://dym.asia/about/outline/" },
  { label: "株式会社DYM 第二新卒紹介・既卒・中途紹介事業（企業向けページ）", url: "https://dym.asia/services/new-graduates/Former-graduate/" },
  { label: "厚生労働省 人材サービス総合サイト 職業紹介事業詳細（株式会社ＤＹＭ・13-ユ-304089）", url: MHLW_URL },
  { label: "Googleマップ「㈱DYM」（品川区大崎）のクチコミ（Places APIで取得）", url: "https://maps.google.com/?cid=17128770920692774851" },
];

const th = "bg-gray-50 text-left px-3 py-2 border-b w-36 whitespace-nowrap";
const td = "px-3 py-2 border-b";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "DYM就職の評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            DYM就職の評判は？現ミーツカンパニー就職・転職エージェントを厚労省データ・Googleのクチコミ・公式情報で確認【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: {CHECKED}（公式サイト・運営規約・厚生労働省「人材サービス総合サイト」・Googleのクチコミを同日に確認）</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "2026年10月", l: "「ミーツカンパニー就職・転職エージェント」へ名称変更" },
              { v: "3,255人", l: "株式会社DYMの職業紹介の就職者数（令和6年度・厚労省）" },
              { v: "約8.3%", l: "無期雇用のうち6か月以内の離職者の割合（令和6年度・当サイト算出）" },
              { v: "4.2", l: "Googleマップ「㈱DYM」のクチコミ平均（712件・会社全体）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            DYM就職は、株式会社DYM（東京都品川区）が運営する<strong>既卒・フリーター・第二新卒向けの就職・転職エージェント</strong>です。
            2026年10月1日に<strong>「ミーツカンパニー就職・転職エージェント」へ名称が変わり</strong>、旧サイトは新しい公式ページへ転送されています。
            厚生労働省に登録された株式会社DYMの職業紹介の就職者数は令和6年度3,255人で、無期雇用のうち6か月以内に離職した人は264人（約8.3%）です。
            この数値は同社の職業紹介事業全体の値で、DYM就職だけの実績ではありません。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・運営規約・株式会社DYMのニュースリリース・厚生労働省の人材サービス総合サイト・Googleマップで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>DYM就職の基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>現在のサービス名</th><td className={td}>ミーツカンパニー就職・転職エージェント（旧：DYM就職）。2026年10月1日にブランド統合</td></tr>
              <tr><th className={th}>サービスの種類</th><td className={td}>就職・転職エージェント（有料職業紹介）。専属のキャリアアドバイザーがマンツーマンで支援</td></tr>
              <tr><th className={th}>公式が案内する対象</th><td className={td}>既卒・第二新卒・フリーター・未経験の方。年齢・学歴の利用条件は明記なし</td></tr>
              <tr><th className={th}>運営会社</th><td className={td}>株式会社DYM（2003年8月22日設立・資本金5,000万円・代表取締役社長 水谷 佑毅）</td></tr>
              <tr><th className={th}>所在地</th><td className={td}>東京都品川区大崎一丁目11番2号 ゲートシティ大崎イーストタワー10階（札幌・仙台・名古屋・大阪・広島・福岡に事業所）</td></tr>
              <tr><th className={th}>会社の規模</th><td className={td}>従業員 連結3,039名・単体835名（2026年4月1日現在）、第23期売上高401.7億円。WEB事業・人材事業・医療事業など多角的に展開</td></tr>
              <tr><th className={th}>有料職業紹介 許可番号</th><td className={td}>13-ユ-304089（許可年月日 平成21年6月1日）</td></tr>
              <tr><th className={th}>取扱職種</th><td className={td}>国内・全職種（港湾運送業務、建設業務を除く）（運営規約第3条）</td></tr>
              <tr><th className={th}>求職者の費用</th><td className={td}>手数料は求人企業から受け取ると規定（運営規約第7条）。公式サイトは「まずは無料相談」と案内</td></tr>
              <tr><th className={th}>求人数</th><td className={td}>公式ページに記載なし</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：ミーツカンパニー就職・転職エージェント 公式ページ・運営規約、株式会社DYM 会社概要・ニュースリリース（2026年10月1日）、厚生労働省 人材サービス総合サイト（令和8年11月1日現在の表示）。いずれも{CHECKED}確認。
        </p>

        <h2>DYM就職からミーツカンパニーへの名称変更</h2>
        <p>
          株式会社DYMは2026年10月1日、これまで個別に展開していた新卒・若手向けの採用支援サービスを「ミーツカンパニー」ブランドに統合しました。同社のニュースリリースに記載された新旧の名称は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">新しい名称</th>
                <th className="text-left px-3 py-2 border-b">旧サービス名</th>
                <th className="text-left px-3 py-2 border-b">概要（リリースの記載）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={td}>ミーツカンパニー【就職・転職エージェント】</td><td className={td}>DYM就職</td><td className={td}>既卒・フリーター・第二新卒に特化。専属キャリアアドバイザーがマンツーマンでサポート</td></tr>
              <tr><td className={td}>ミーツカンパニー【新卒エージェント】</td><td className={td}>新卒紹介事業</td><td className={td}>スカウト・イベント・1on1面談を組み合わせた新卒向けの支援</td></tr>
              <tr><td className={td}>ミーツカンパニー【スカウト】</td><td className={td}>DYMスカウト</td><td className={td}>企業から学生へ直接オファーを送るスカウトサービス</td></tr>
              <tr><td className={td}>ミーツカンパニー【就活イベント】</td><td className={td}>Meets Company</td><td className={td}>座談会形式の少人数制合同説明会</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          旧サイト（www.dshu.jp）にアクセスすると、新しい公式ページ（www.meetscompany.jp/career/）へ転送されます（{CHECKED}確認）。
          インターネット上の口コミ・比較記事には旧名称のまま書かれたものが多いため、情報を調べる際は両方の名称で検索することをおすすめします。
        </p>

        <h2 id="placements">厚生労働省の登録情報で見る株式会社DYMの就職実績</h2>
        <p>
          有料職業紹介事業者は、就職者数と、無期雇用で就職した人のうち6か月以内に離職した人数を、厚生労働省の人材サービス総合サイトに毎年登録しています。
          株式会社DYM（許可番号13-ユ-304089）の登録内容は次のとおりです。離職者の割合は当サイトが算出しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">情報登録年度</th>
                <th className="text-right px-3 py-2 border-b">就職者数（4か月以上の有期・無期）</th>
                <th className="text-right px-3 py-2 border-b">うち無期雇用</th>
                <th className="text-right px-3 py-2 border-b">6か月以内の離職者</th>
                <th className="text-right px-3 py-2 border-b">離職が判明せず</th>
                <th className="text-right px-3 py-2 border-b">離職者の割合（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {placements.map((p) => (
                <tr key={p.year}>
                  <td className="px-3 py-2 border-b">{p.year}</td>
                  <td className="text-right px-3 py-2 border-b">{p.total.toLocaleString()}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.muki.toLocaleString()}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.leave === null ? "－" : `${p.leave}人`}</td>
                  <td className="text-right px-3 py-2 border-b">{p.unknown === null ? "－" : `${p.unknown}人`}</td>
                  <td className="text-right px-3 py-2 border-b">{p.leave === null ? "－" : `${((p.leave / p.muki) * 100).toFixed(1)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>就職者の規模：</strong>令和2年度から令和7年度まで、毎年2,700〜3,800人台の就職者が登録されています。ほぼ全員が無期雇用です。</li>
          <li><strong>早期離職：</strong>無期雇用のうち6か月以内の離職者の割合は、令和5年度の4.2%から令和6年度は8.3%に上がっています。令和7年度の離職者数は「-」と表示されており、確認時点では登録されていません。</li>
          <li><strong>集計範囲の注意：</strong>許可番号は株式会社DYMの職業紹介事業全体で1つです。上の数値には、DYM就職のほか新卒向けの紹介など同社の他の職業紹介も含まれると考えられ、DYM就職だけの実績は公表されていません。</li>
          <li><strong>手数料実績が登録された主な職種（令和7年度）：</strong>営業の職業（手数料実績率33.5%）、情報処理・通信技術者（ソフトウェア開発）（30.4%）、建築・土木・測量技術者（29.7%）、その他のサービスの職業（29.0%）、販売員（27.5%）などです。</li>
        </ul>
        <p className="text-xs text-text-muted mb-10">
          出典：<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」職業紹介事業詳細（株式会社ＤＹＭ）</a>（令和8年11月1日現在の掲載情報を{CHECKED}に確認）。
          「情報登録年度」は同サイトの表記どおりで、対象となる集計期間は同サイトでご確認ください。離職者の割合は「6か月以内の離職者÷うち無期雇用」で当サイトが算出した値です。「離職が判明せず」の人数は割合の計算に含めていません。
        </p>

        <h2>公式サイトの実績表記と注記</h2>
        <p>公式ページに掲載されている主な実績表記と、ページ上の注記は次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">表記</th>
                <th className="text-left px-3 py-2 border-b">公式の注記</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={td}>面談実績70,000人以上（累計70,000人以上が利用）</td><td className={td}>2017年5月〜2026年3月の実績</td></tr>
              <tr><td className={td}>サービス満足度90%</td><td className={td}>2025年10月〜2026年3月の利用者満足度（調査方法・回答数・設問の記載なし）</td></tr>
              <tr><td className={td}>最短1日で内定</td><td className={td}>2024年実績。求人の選考回数や選考日程により、希望に添えない場合がある</td></tr>
              <tr><td className={td}>年収100万円アップの転職事例あり</td><td className={td}>対象期間 2024年4月〜2025年3月（事例の件数・全体に占める割合の記載なし）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          満足度90%は、調査の方法や回答者数が示されていないため、当サイトでは他社と比べる根拠としては扱っていません。「最短1日」や「年収100万円アップ」は個別の事例であり、多くの利用者に当てはまる平均的な結果ではありません。
          客観的に比べられる数値としては、上の厚生労働省の登録情報をご参照ください。
        </p>

        <h2 id="reviews">DYM就職の口コミ・評判（Googleのクチコミ）【{CHECKED}確認】</h2>
        <p>
          DYM就職（ミーツカンパニー就職・転職エージェント）単独のGoogleマップの登録は、当サイトでは見つかりませんでした。
          運営会社の本社「㈱DYM」（品川区大崎一丁目11-2 ゲートシティ大崎イーストタワー10F）のクチコミは、<strong>平均4.2（5段階）・712件</strong>です。
          当サイトがGoogleの公式API（Places API）で取得できた投稿5件の内容は次のとおりです。担当者の個人名は省略しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">投稿時期</th>
                <th className="text-left px-3 py-2 border-b">評価</th>
                <th className="text-left px-3 py-2 border-b">投稿で触れられている内容（当サイトによる要約）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={td}>2026年10月</td><td className={td}>★5</td><td className={td}>急に転職活動を進めることになった際、すぐに求人候補を提案してもらえた</td></tr>
              <tr><td className={td}>2026年10月</td><td className={td}>★5</td><td className={td}>自己分析の相談、応募書類の添削、面接練習の支援を受け、複数社の紹介を経て内定した</td></tr>
              <tr><td className={td}>2026年10月</td><td className={td}>★5</td><td className={td}>外国籍で日本での転職に不安があったが、求人探しや助言を受けて転職先が決まった</td></tr>
              <tr><td className={td}>2026年10月</td><td className={td}>★5</td><td className={td}>就活の悩み相談会（イベント）に参加し、楽しかった</td></tr>
              <tr><td className={td}>2026年9月</td><td className={td}>★5</td><td className={td}>約1か月の支援で就職先が決まり、決定後も定期的な面談で不安を相談できた</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="text-sm space-y-2 mb-4">
          <li><strong>傾向：</strong>5件とも、担当者の対応の早さや、書類・面接の支援、相談のしやすさを評価する内容でした。</li>
          <li><strong>読み方の注意：</strong>この登録は株式会社DYMの本社のもので、新卒エージェント・就活イベントなど同社の他のサービスや、WEB事業などの取引先によるクチコミも含まれます。取得できた5件にもイベント参加者の投稿があり、どの投稿がDYM就職の利用者によるものかは判別できません。また5件はいずれも★5で、712件全体の評価の内訳や低評価の投稿の内容は、当サイトでは確認できていません。</li>
          <li><strong>他媒体の口コミについて：</strong>口コミサイト・比較サイトの独自アンケートは、回答者数や集計方法を確認できないため掲載していません。</li>
        </ul>
        <p className="text-xs text-text-muted mb-10">
          出典：Googleマップ「㈱DYM」のクチコミ（Places APIで{CHECKED}に取得）。運営規約の第15条(2)では、利用者が投稿したレビューを、個人を特定できない範囲で同社が無償で転載・引用できると定められています。
        </p>

        <h2>評判をご自身で確認する方法</h2>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-10">
          <li><strong>旧名称と新名称の両方で調べる：</strong>2026年9月以前の情報は「DYM就職」、10月以降は「ミーツカンパニー就職・転職エージェント」の名称で掲載されています。</li>
          <li><strong>厚生労働省の登録情報を見る：</strong>人材サービス総合サイトで許可番号「13-ユ-304089」を検索すると、就職者数と6か月以内の離職者数を確認できます。他のエージェントと同じ基準で比べられます。</li>
          <li><strong>Googleのクチコミは低評価から読む：</strong>Googleマップでは並べ替えで低い評価の投稿から表示できます。投稿がどのサービスについてのものかも確かめてください。</li>
          <li><strong>面談で確認する：</strong>希望職種・地域の求人数、紹介される求人の雇用形態、担当者の交代の可否は、公式サイトに記載がないため面談で直接確かめることをおすすめします。</li>
        </ul>

        <h2>運営規約で確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "手数料は求人企業が負担する仕組み", d: "第7条では、手数料表および返戻金制度にもとづいて求人企業から手数料を受け取ると定めています。紹介される求人は、DYMと人材紹介契約を結んだ企業の求人です（第1条の定義）。" },
            { t: "紹介できる求人がない場合もある", d: "第3条では、ヒアリング内容と求人条件を照合した結果を通知し、紹介できる求人がある場合に求人情報を提供するとしています。第10条では、照合の検討基準や判断理由は伝えられないと定めています。" },
            { t: "サービス提供期間は原則2年間", d: "第4条では、サービス開始の通知日から原則2年間サービスを提供し、利用者から終了の申し出があれば合理的な範囲内で速やかに終了するとしています。第6条では、開始通知後に利用者から連絡がない場合などに、催告なくサービスを終了できると定めています。" },
            { t: "労働条件は自分で企業に確認する", d: "第11条では、DYMが確認・通知した労働条件は雇用契約の詳細を最終的に保証するものではなく、利用者が求人企業に直接確認したうえで契約を結ぶものとしています。" },
            { t: "個人情報はDYMキャリアと共同利用される", d: "個人情報の取扱いでは、求職者の氏名・学歴・職歴・連絡先などを株式会社DYMと株式会社DYMキャリアで共同利用することがあると記載されています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>DYM就職が向いている人・他のサービスと比べたい人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>既卒・フリーター・第二新卒で、正社員就職に向けて担当者の支援を受けたい人</li>
              <li>就職活動が初めてで、自己分析・書類作成・面接練習から相談したい人</li>
              <li>就職者数の規模が大きい職業紹介事業者を利用したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスと比べたい人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>介護職を希望する人 →<Link href="/review/levwell-kaigo/" className="text-teal underline">レバウェル介護</Link></li>
              <li>匿名のレジュメでスカウトを受けたい人 →<Link href="/review/recruit-direct-scout/" className="text-teal underline">リクルートダイレクトスカウト</Link></li>
              <li>既卒・フリーター向けの他のエージェントと比べたい人 →<Link href="/review/uzuz/" className="text-teal underline">UZUZ(第二の就活)</Link>・<Link href="/review/daini-agent-neo/" className="text-teal underline">第二新卒エージェントneo</Link></li>
              <li>20代向けの大手エージェントも検討したい人 →<Link href="/review/mynavi-job20s/" className="text-teal underline">マイナビジョブ20&apos;s</Link></li>
              <li>自分で求人を探して応募したい人 →<Link href="/review/re-shukatsu/" className="text-teal underline">Re就活</Link></li>
              <li>選び方を先に知りたい人 →<Link href="/type/second-new-grad/" className="text-teal underline">第二新卒向け転職エージェント</Link>・<Link href="/type/inexperienced/" className="text-teal underline">未経験向け転職エージェント</Link></li>
            </ul>
          </div>
        </div>

        <h2>DYM就職 よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p className="mb-4">
          DYM就職は、2026年10月1日に「ミーツカンパニー就職・転職エージェント」へ名称が変わった、既卒・フリーター・第二新卒向けの就職・転職エージェントです。
          運営会社の株式会社DYMは厚生労働大臣の許可（13-ユ-304089）を受けており、同社の職業紹介の就職者数は令和6年度3,255人、無期雇用のうち6か月以内の離職者の割合は約8.3%です。
          公式の満足度90%は調査方法が示されておらず、Googleのクチコミも会社全体の登録であるため、評判の判断材料としては限定的です。希望条件の求人の有無は、面談で直接ご確認ください。
        </p>
        <p className="text-sm text-text-secondary mb-10">
          公式サイト：<a href="https://www.meetscompany.jp/career/" target="_blank" rel="nofollow noopener noreferrer" className="text-teal underline">ミーツカンパニー就職・転職エージェント（www.meetscompany.jp/career/）</a>
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
