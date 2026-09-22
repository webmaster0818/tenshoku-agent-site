import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "陸運・物流の年収ランキング【2026年・有価証券報告書】ヤマト・日通ほか8社を一次データで比較",
  description:
    "陸運・物流8社の平均年収を有価証券報告書の記載値でランキング。ヤマトホールディングス1,248万円・三菱倉庫943万円・住友倉庫844万円・NIPPON EXPRESSホールディングス833万円ほか。持株会社単体値とドライバー職の水準が別物である点、2024年問題以降の推移まで一次データで解説します。",
  alternates: { canonical: "/company/butsuryu-salary/" },
  openGraph: {
    title: "陸運・物流の年収ランキング【2026年・有価証券報告書】",
    description: "陸運・物流8社の平均年収を有報記載値でランキング。持株会社単体値の落とし穴とキャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "yamato-hd", name: "ヤマトホールディングス", salary: "約1,248万円", term: "2026年3月期", note: "宅急便のヤマト運輸を中核とする持株会社。8社で唯一1,000万円台だが持株会社単体の値で、平均36.4歳・勤続10.3年", field: "持株会社(宅配)" },
  { rank: 2, slug: "mitsubishi-logistics", name: "三菱倉庫", salary: "約943万円", term: "2026年3月期", note: "倉庫・港湾運送に不動産事業を併営。倉庫系で最高水準", field: "倉庫・不動産" },
  { rank: 3, slug: "sumitomo-soko", name: "住友倉庫", salary: "約844万円", term: "2026年3月期", note: "倉庫・港湾運送・国際輸送。直近3期とも上昇(790→814→844万円)", field: "倉庫・国際輸送" },
  { rank: 4, slug: "nippon-express", name: "NIPPON EXPRESSホールディングス", salary: "約833万円", term: "2025年12月期", note: "日本通運を中核とする持株会社。8社で唯一の減少(937→891→833万円)で、12月期決算のため他社と時点が異なる", field: "持株会社(総合物流)" },
  { rank: 5, slug: "sg-holdings", name: "SGホールディングス", salary: "約786万円", term: "2026年3月期", note: "佐川急便を中核とする持株会社。平均勤続9.9年と短め", field: "持株会社(宅配)" },
  { rank: 6, slug: "sankyu", name: "山九", salary: "約730万円", term: "2026年3月期", note: "プラント機工と物流の一体運営。最新期+89万円と8社で最大の上げ幅", field: "プラント・物流" },
  { rank: 7, slug: "seino-hd", name: "セイノーホールディングス", salary: "約711万円", term: "2026年3月期", note: "西濃運輸(カンガルー便)の持株会社。660万円まで下げた後3期連続で回復", field: "持株会社(特別積合せ)" },
  { rank: 8, slug: "kamigumi", name: "上組", salary: "約703万円", term: "2026年3月期", note: "港湾運送の専業大手。直近3期とも上昇", field: "港湾運送" },
];

const faqData = [
  {
    q: "陸運・物流で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月22日確認)では、ヤマトホールディングスが約1,248万円(2026年3月期)でトップです。ただしこれは持株会社単体の値で、宅急便ドライバーを含むヤマト運輸(事業会社)の水準とは別物です。事業会社の実態に近いのは、単体で事業を行っている三菱倉庫 約943万円・住友倉庫 約844万円・山九 約730万円・上組 約703万円のほうです。",
  },
  {
    q: "なぜ持株会社の平均年収は高く出るのですか？",
    a: "有報の平均年間給与は「提出会社」に在籍する従業員が対象です。持株会社にはグループ運営に関わる本社機能のスタッフが中心に在籍し、現場職は事業会社側に所属します。そのため持株会社単体の平均は高く出やすくなります。今回の8社ではヤマトホールディングス・NIPPON EXPRESSホールディングス・SGホールディングス・セイノーホールディングスの4社が持株会社です。求人票の年収レンジと有報値がかけ離れて見えるのは、多くの場合この構造が理由です。",
  },
  {
    q: "2024年問題のあと、物流の年収は上がっていますか？",
    a: "8社中7社が直近3期で上昇しています。とくに山九は641万円→730万円と最新期だけで89万円増、上組は637→661→703万円、住友倉庫は790→814→844万円と連続して上昇しました。一方でNIPPON EXPRESSホールディングスは937万円(2023年12月期)→891→833万円と唯一減少しています。業界全体が一律に上がっているわけではない、というのが有報値から読み取れる実態です。",
  },
  {
    q: "有報の平均年収はドライバー職も含んだ数字ですか？",
    a: "提出会社に在籍する従業員の平均です。持株会社(ヤマトHD・NX HD・SGHD・セイノーHD)の場合、ドライバー職は事業会社に所属するため基本的に含まれません。一方、山九・上組・三菱倉庫・住友倉庫のように事業会社そのものが上場している場合は現業職を含む平均になります。同じ「物流業界」でも数字の意味が違う点に注意してください。職種別の水準は募集要項やエージェント経由でご確認ください。",
  },
  {
    q: "陸運・物流の中途採用はどこに応募すればいいですか？",
    a: "8社とも公式サイトに採用ページがあり、2026年9月22日に実在を確認しています(ヤマトHD・NIPPON EXPRESS HD・SGHD・山九・西濃運輸・三菱倉庫・住友倉庫・上組)。物流業界は総合職と現業職で募集の出方が大きく異なり、管理系・国際輸送・IT系のポジションは非公開求人の比率も高いため、公式採用ページの定点確認とエージェントの併用が現実的です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "陸運・物流の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/butsuryu-salary/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ButsuryuSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "陸運・物流の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            陸運・物流の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            陸運・物流8社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。
            物流は<strong>持株会社と事業会社で数字の意味がまったく違う</strong>業界です。8社中4社が持株会社で、現場職は事業会社に所属します。単年の数字だけでなく直近3期の推移まで併記し、持株会社単体値の落とし穴や中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 陸運・物流 年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">分野</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">平均年間給与（有報）</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.slug} className="border-b border-border">
                  <td className="py-3 px-4 font-bold text-navy">{r.rank}位</td>
                  <td className="py-3 px-4">
                    <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>
                  </td>
                  <td className="py-3 px-4 text-text-secondary">{r.field}</td>
                  <td className="py-3 px-4 font-bold text-navy">{r.salary}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均・賞与含む）。IR BANK掲載値を2026年9月22日に確認。物流会社は総合職・ドライバー職・現業職で処遇体系が異なり、提出会社に在籍する従業員の構成も会社ごとに違うため、社間の単純比較には幅がある点にご留意ください。とくにヤマトHD・NIPPON EXPRESS HD・SGHD・セイノーHDは持株会社単体の値です。
        </p>

        <h2>直近3期の推移——7社が上昇、1社だけ下落</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2024年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2025年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2026年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">前期比</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "ヤマトホールディングス", y24: "1,191万円", y25: "1,226万円", y26: "1,248万円", diff: "+22万円" },
                { name: "三菱倉庫", y24: "938万円", y25: "912万円", y26: "943万円", diff: "+31万円" },
                { name: "住友倉庫", y24: "790万円", y25: "814万円", y26: "844万円", diff: "+30万円" },
                { name: "NIPPON EXPRESS HD", y24: "937万円(2023年12月期)", y25: "891万円(2024年12月期)", y26: "833万円(2025年12月期)", diff: "▲58万円" },
                { name: "SGホールディングス", y24: "738万円", y25: "769万円", y26: "786万円", diff: "+17万円" },
                { name: "山九", y24: "616万円", y25: "641万円", y26: "730万円", diff: "+89万円" },
                { name: "セイノーホールディングス", y24: "671万円", y25: "691万円", y26: "711万円", diff: "+20万円" },
                { name: "上組", y24: "637万円", y25: "661万円", y26: "703万円", diff: "+42万円" },
              ].map((r) => (
                <tr key={r.name} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">{r.name}</th>
                  <td className="py-3 px-4 text-text-secondary">{r.y24}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.y25}</td>
                  <td className="py-3 px-4 font-bold text-navy">{r.y26}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※NIPPON EXPRESSホールディングスは12月期決算のため、列の見出し(3月期)とは時点が異なります。山九の+89万円が最大の上げ幅で、NIPPON EXPRESSホールディングスの▲58万円が唯一の下落です。「2024年問題で物流は一律に給与が上がった」とは言えないことが、有報値から読み取れます。
        </p>

        <h2>各社の特徴と転職ガイド</h2>
        <div className="space-y-4 mb-8">
          {ranking.map((r) => (
            <div key={r.slug} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-navy">{r.rank}位 {r.name} <span className="text-teal">{r.salary}</span><span className="text-xs text-text-muted ml-1">（{r.term}）</span></h3>
                <Link href={`/company/${r.slug}/`} className="text-teal text-sm hover:underline">転職ガイドを見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{r.note}</p>
            </div>
          ))}
        </div>

        <h2>ランキングを見るときの3つの注意点</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">持株会社か事業会社かで意味が違う</h3>
            <p className="text-xs text-text-secondary leading-relaxed">8社中4社が持株会社で、現場職は事業会社に所属します。求人票の年収と有報値がかけ離れて見える最大の理由がこれです。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期が揃っていない</h3>
            <p className="text-xs text-text-secondary leading-relaxed">NIPPON EXPRESSホールディングスだけが12月期決算です。同じ「最新期」でも時点が3ヶ月ずれるため、単純比較には注意が必要です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">平均年齢が高く勤続が長い会社ほど全社員平均は高く出ます。8社では平均36.4〜47.5歳と幅があります。中途入社時の提示額とは別物です。</p>
          </div>
        </div>

        <h2>陸運・物流業界への転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          物流業界は総合職と現業職で求人の出方が大きく違い、管理系ポジションは非公開求人の比率も高い領域です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。物流・倉庫・3PL領域の求人も幅広くカバー。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・グローバル転職に強み。国際線・海外拠点を持つ企業のポジション紹介に定評。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職ポジションの情報収集に。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社との年収レンジ比較がしやすい。" },
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

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">陸運・物流業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/shosha-salary/" className="btn-outline px-8 py-3">総合商社の年収ランキングも見る</Link>
            <Link href="/company/kuuun-salary/" className="btn-outline px-8 py-3">航空会社の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
