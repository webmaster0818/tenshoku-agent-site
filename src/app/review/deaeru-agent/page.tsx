import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  title: "出会えるエージェントの運営会社・料金・評判｜3社紹介の仕組みと利用条件【2026年】",
  description: "出会えるエージェントはforesma株式会社が運営する転職エージェント紹介サービスです。利用は無料で、15分のオンライン面談後に提携する人材紹介会社3社を紹介します。運営会社・許可番号・対象年齢と地域・利用者の声を公式情報で整理しました。",
  alternates: { canonical: "/review/deaeru-agent/" },
};

const faqData = [
  {
    "q": "出会えるエージェントの運営会社はどこですか？",
    "a": "foresma株式会社(東京都品川区西五反田4-9-14)です。利用規約・プライバシーポリシーに運営会社として記載されています。同社の会社情報では、株式会社Winovaが完全子会社として掲載されています(2026年10月30日確認)。"
  },
  {
    "q": "出会えるエージェントの利用に費用はかかりますか？",
    "a": "無料です。利用規約第3条に「ユーザーは、本サービスを無料で利用できます」と定められています。紹介先の人材紹介会社による求人紹介・選考支援の条件は、各社の定めによります。"
  },
  {
    "q": "誰でも利用できますか？",
    "a": "公式サイトでは、現在の主なサポート対象を20〜34歳で、東京都・神奈川県・埼玉県・千葉県・愛知県・京都府・大阪府・兵庫県・福岡県での勤務を希望する方としています。また、申込ボタンの同意事項として、健康上の理由で通院中でないこと、学生でないこと、リモート勤務・時短勤務を希望しないことが示されています(2026年10月30日確認)。"
  },
  {
    "q": "申し込み後はどのような流れになりますか？",
    "a": "公式サイトの説明では、事前アンケート(約30秒)→公式LINEの友だち登録→15分の面談予約→転職サポーターによるオンラインでのヒアリング→3社の紹介、の順に進みます。求人の紹介や選考支援は、紹介を受けた人材紹介会社が行います。"
  },
  {
    "q": "出会えるエージェント自体が求人を紹介するのですか？",
    "a": "利用規約では、本サービスは希望条件等をヒアリングし、適した提携人材紹介会社を紹介するサービスと定められています。求人の紹介・選考支援は提携人材紹介会社が提供するもので、その内容・条件は各社の定めによります。"
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "出会えるエージェントの運営会社・評判" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            出会えるエージェントの運営会社・料金・評判｜3社紹介の仕組みと利用条件【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">出会えるエージェントは、foresma株式会社(東京都品川区)が運営する転職エージェント紹介サービスです。求職者は無料で利用でき、15分のオンライン面談で希望を伝えると、提携する人材紹介会社3社の紹介を受けられます。主な対象は20〜34歳で、首都圏・愛知・関西・福岡での勤務を希望する方です。本ページでは、公式サイト・利用規約・運営会社の会社情報(2026年10月30日確認)をもとに整理しています。</p>
        </div>

        <AgentHero slug="deaeru-agent" />

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>運営会社はforesma株式会社です</strong>。厚生労働大臣許可番号は13-ユ-317387で、株式会社Winovaは同社の完全子会社です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>求職者の利用は無料です</strong>。15分のヒアリング後、得意分野の異なる人材紹介会社3社を紹介する形式です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>主な対象は20〜34歳・9都府県での勤務希望者です</strong>。学生の方、リモート勤務・時短勤務を希望する方は申込時の同意事項により対象外です。</span></li>
          </ul>
        </div>

        <h2>出会えるエージェントの基本データ【2026年10月30日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">出会えるエージェント(転職エージェント紹介サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">foresma株式会社(英文表記：foresma Inc.)。株式会社Winovaは同社の完全子会社です</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">所在地</th><td className="px-3 py-2 border-b">東京都品川区西五反田4-9-14(西五反田オフィス)。ほかに東五反田オフィス(東京都品川区東五反田2-9-5)があります</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">設立・代表</th><td className="px-3 py-2 border-b">2022年11月22日設立／代表取締役 大野 哲央</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">許可番号</th><td className="px-3 py-2 border-b">厚生労働大臣許可番号 13-ユ-317387(foresma株式会社の会社情報に記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス内容</th><td className="px-3 py-2 border-b">オンラインのヒアリング(15分)をもとに、提携する人材紹介会社3社を紹介します。紹介候補は「3万社以上の転職エージェント会社」と公式に表記されています</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">求人紹介の主体</th><td className="px-3 py-2 border-b">紹介先の提携人材紹介会社(職業安定法に基づく有料職業紹介事業の許可を受けた事業者・利用規約第1条)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料(利用規約第3条、公式サイト「利用料0円」)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">主な対象</th><td className="px-3 py-2 border-b">20〜34歳で、東京都・神奈川県・埼玉県・千葉県・愛知県・京都府・大阪府・兵庫県・福岡県での勤務を希望する方</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">公式トップページと利用規約には、職種を限定する記載はありません</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">申込時の同意事項</th><td className="px-3 py-2 border-b">健康上の理由で通院中でない／学生でない／リモート勤務・時短勤務を希望しない</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">連絡手段</th><td className="px-3 py-2 border-b">LINE・電話ほか(利用規約第7条)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">主要株主</th><td className="px-3 py-2 border-b">経営陣、株式会社フリークアウト・ホールディングス(東証6094)、East Ventures、F Ventures</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">deaeru-agent.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：出会えるエージェント公式サイト(deaeru-agent.jp)、同サイトに掲載の利用規約(2025年10月1日制定)・プライバシーポリシー、foresma株式会社 会社情報(foresma.jp)。いずれも2026年10月30日に当サイトで確認しました。申込時の同意事項は、公式サイトの申込ボタン付近の表示にもとづきます。</p>

        <h2>2026年8月の確認時点からの変更点</h2>
        <p>当サイトでは2026年8月22日に本サービスを確認し、掲載していました。10月30日に再確認したところ、サービス名・紹介の形・運営会社の表記が次のとおり変わっていたため、本ページを更新しました。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">項目</th><th className="bg-gray-50 text-left px-3 py-2 border-b">2026年8月22日の掲載内容</th><th className="bg-gray-50 text-left px-3 py-2 border-b">2026年10月30日の確認内容</th></tr>
            </thead>
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">出会えるエージェント診断</td><td className="px-3 py-2 border-b">出会えるエージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">紹介の形</th><td className="px-3 py-2 border-b">1000人以上の中からエージェントを紹介</td><td className="px-3 py-2 border-b">3万社以上の転職エージェント会社から3社を紹介</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社の表記</th><td className="px-3 py-2 border-b">株式会社Winova(当サイトの記載)</td><td className="px-3 py-2 border-b">foresma株式会社(利用規約・プライバシーポリシー)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象年齢・地域</th><td className="px-3 py-2 border-b">記載を確認していません</td><td className="px-3 py-2 border-b">20〜34歳・9都府県での勤務希望者</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">申込時の同意事項</th><td className="px-3 py-2 border-b">通院中でない／学生でない／リモート・時短希望でない</td><td className="px-3 py-2 border-b">変更なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">無料</td><td className="px-3 py-2 border-b">無料(変更なし)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">公式ドメイン内には、「出会えるエージェント診断」の名称と「約1,000名」の表記を残した旧ページも一部公開されています。本ページでは、公式トップページと利用規約の記載を優先しています。</p>

        <h2>出会えるエージェントの仕組み(公式の公表情報より)</h2>
        <div className="space-y-4 mb-6">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ヒアリングをもとに3社を紹介します</h3><p className="text-sm text-text-secondary leading-relaxed">年収や勤務地に加えて、経験・働き方・転職で重視する点を聞き取り、得意な業界や保有求人が異なる3社を紹介すると公式サイトで説明されています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">利用者アンケートで担当者を評価しています</h3><p className="text-sm text-text-secondary leading-relaxed">公式サイトでは、面談を受けた方へのアンケートをもとに、評価の低い担当者を紹介対象から外していると説明されています。評価の基準や除外の件数は公表されていません。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">手続きはオンラインで完結します</h3><p className="text-sm text-text-secondary leading-relaxed">事前アンケート(約30秒)、公式LINEの友だち登録、15分の面談予約、転職サポーターによるヒアリング、3社の紹介という5つのステップで進みます。予約日時は後から変更できます。</p></div>
        </div>
        <p className="text-sm text-text-secondary mb-8">複数の転職エージェントを併用する際の考え方は、<Link href="/knowledge/multiple/" className="text-teal underline">転職エージェントの複数利用</Link>で解説しています。</p>

        <h2>出会えるエージェントの評判(公式サイト掲載の利用者の声10件)</h2>
        <p>公式サイトには「サービス利用者アンケートより」として、利用者の声が10件掲載されています(2026年10月30日確認)。各件の内容を当サイトで要約すると次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-24">掲載番号</th><th className="bg-gray-50 text-left px-3 py-2 border-b">内容の要約</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 01</td><td className="px-3 py-2 border-b">初めての利用で、気軽に話せる雰囲気づくりが助けになった</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 02</td><td className="px-3 py-2 border-b">面談日程のリマインドを受け、1日で2社と面談できた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 03</td><td className="px-3 py-2 border-b">職種の提案や自分の強みを知ることができた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 04</td><td className="px-3 py-2 border-b">3社のエージェントの考えを聞き、比較することで新しい視点に気づいた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 05</td><td className="px-3 py-2 border-b">第三者に話すことで、譲れない条件を整理できそうだと感じた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 06</td><td className="px-3 py-2 border-b">今すべきこと・まだしなくてよいことを教えてもらえた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 07</td><td className="px-3 py-2 border-b">面接が苦手でも、対策のサポートがあり安心して進められそうだと感じた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 08</td><td className="px-3 py-2 border-b">入社後の行動を具体的に話してもらえた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 09</td><td className="px-3 py-2 border-b">温和で話しやすく、こちらの意志を尊重してもらえた</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">VOICE 10</td><td className="px-3 py-2 border-b">今後の仕事の変化を踏まえて、仕事選びを説明してもらえた</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-3">当サイトで主な内容ごとに分類すると、担当者の話しやすさ・親身さに触れたものが3件(01・07・09)、強みや職種・今後の進め方の助言に触れたものが5件(03・05・06・08・10)、3社を比較できた点に触れたものが1件(04)、日程連絡に触れたものが1件(02)です。</p>
        <p className="text-xs text-text-muted mb-8">出典：出会えるエージェント公式サイト「USER VOICES」。公式サイトには「利用者アンケートの高評価コメントから抜粋しています」と注記されているため、否定的な意見は含まれていません。2026年10月30日時点で、当サイトでは本サービスについて件数のまとまった第三者の口コミを確認できていません。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>出会えるエージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>どの転職エージェントを使うか決めかねている20〜34歳の方</li>
              <li>9都府県(東京・神奈川・埼玉・千葉・愛知・京都・大阪・兵庫・福岡)での勤務を希望する方</li>
              <li>複数の転職エージェントを比較して選びたい方</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>リモート勤務・時短勤務を希望する方 →申込時の同意事項により対象外のため、<a href="/review/realme-career/" className="text-teal underline">リアルミーキャリア</a>や<a href="/review/libz/" className="text-teal underline">LIBZ</a>が候補です</li>
              <li>35歳以上の方、9都府県以外での勤務を希望する方 →主なサポート対象外のため、当サイトの<Link href="/review/" className="text-teal underline">エージェント一覧</Link>から直接選ぶ方法があります</li>
            </ul>
          </div>
        </div>

        <h2>出会えるエージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>出会えるエージェントは、foresma株式会社が運営する無料の転職エージェント紹介サービスです。15分のヒアリングをもとに提携する人材紹介会社3社を紹介する形式で、どの転職エージェントを使うか決めかねている方の入口として利用できます。主な対象は20〜34歳・9都府県での勤務希望者で、学生の方やリモート勤務・時短勤務を希望する方は対象外です。最新の条件は、ご利用前に公式サイトにてご確認ください。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/caricon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              キャリコンの詳細
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェント複数利用のコツ
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
