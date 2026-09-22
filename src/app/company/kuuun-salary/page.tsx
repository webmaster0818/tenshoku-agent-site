import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "航空会社(空運)の年収ランキング【2026年・有価証券報告書】JAL・ANAほか4社を一次データで比較",
  description:
    "航空会社の平均年収を有価証券報告書の記載値（2026年3月期）でランキング。日本航空1,011万円・ANAホールディングス770万円・スターフライヤー696万円・スカイマーク593万円。コロナ禍からの回復が数字にどう表れているか、持株会社単体値の注意点、キャリア採用の入口まで一次データで解説します。",
  alternates: { canonical: "/company/kuuun-salary/" },
  openGraph: {
    title: "航空会社(空運)の年収ランキング【2026年・有価証券報告書】",
    description: "空運4社の平均年収を有報記載値でランキング。コロナ後の回復幅とキャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "jal", name: "日本航空(JAL)", salary: "約1,011万円", term: "2026年3月期", note: "国内・国際線を運航するフルサービスキャリア。4社で唯一1,000万円台に到達し、2022年3月期702万円から4年で309万円増と回復幅が最大", field: "FSC" },
  { rank: 2, slug: "ana-hd", name: "ANAホールディングス", salary: "約770万円", term: "2026年3月期", note: "ANAを中核とする航空グループの持株会社。持株会社単体の値で、平均勤続2.9年と極端に短い点に注意", field: "持株会社" },
  { rank: 3, slug: "starflyer", name: "スターフライヤー", salary: "約696万円", term: "2026年3月期", note: "北九州空港を拠点に羽田線などを運航。2023年3月期500万円から3年で196万円増と伸び率が最大", field: "中堅航空" },
  { rank: 4, slug: "skymark", name: "スカイマーク", salary: "約593万円", term: "2026年3月期", note: "国内線中心の運航。平均36.5歳と4社で最も若い構成で、2024・2025年3月期の横ばいから最新期に+16万円", field: "中堅航空" },
];

const faqData = [
  {
    q: "航空会社で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(2026年3月期・IR BANK掲載値を2026年9月22日確認)では、日本航空(JAL)が約1,011万円でトップです。ANAホールディングス 約770万円、スターフライヤー 約696万円、スカイマーク 約593万円と続きます。ただしANAホールディングスは持株会社単体の値で、グループの事業会社(全日本空輸など)の水準とは異なる点にご注意ください。",
  },
  {
    q: "航空会社の年収はコロナ禍からどれくらい回復しましたか？",
    a: "有報の記載値では、日本航空は702万円(2022年3月期)→1,011万円(2026年3月期)で4年間に309万円増、ANAホールディングスは495万円→770万円で275万円増、スターフライヤーは500万円(2023年3月期)→696万円で196万円増です。旅客需要の減少で大きく落ち込んだ時期があり、その後の回復局面にあることが数字に表れています。逆に言えば、需要が落ちれば再び下がりうる業界だということでもあります。",
  },
  {
    q: "ANAホールディングスの平均勤続年数が2.9年と短いのはなぜですか？",
    a: "有報の値は「提出会社」つまり持株会社単体の従業員を対象としています。ANAホールディングスは持株会社であり、在籍者の勤続年数は持株会社での在籍期間を反映するため、グループ全体の実態とは一致しません。平均年齢46.2歳に対し勤続2.9年という組み合わせが、その構造を示しています(2026年9月22日確認)。事業会社の水準は求人票やエージェント経由で確認するのが確実です。",
  },
  {
    q: "航空会社の平均年収は客室乗務員やパイロットも含んだ数字ですか？",
    a: "有報の平均年間給与は提出会社に在籍する従業員の平均です。航空会社は総合職・客室乗務員・運航乗務員・整備士など職種によって処遇体系が異なり、提出会社に在籍する従業員の構成は会社ごとに違います。当サイトでは各社の有報記載値をそのまま掲載しており、職種別の内訳推計は行っていません。職種ごとの水準は募集要項やエージェント経由でご確認ください。",
  },
  {
    q: "航空会社の中途採用はどこに応募すればいいですか？",
    a: "ANAホールディングス(www.ana.co.jp/group/recruit/)、スターフライヤー(www.starflyer.jp/recruit/)、スカイマーク(www.skymark.co.jp/ja/company/recruit/)は公式サイトの採用ページを2026年9月22日に確認しています。日本航空(www.jal.com/ja/recruit/)は当サイトの調査環境からのアクセスが制限されており、掲載内容を確認できませんでした。募集ポジションは時期により変わるため、公式採用ページの定点確認とエージェントの併用が現実的です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "航空会社(空運)の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kuuun-salary/" },
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

export default function KuuunSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "航空会社の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            航空会社(空運)の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            航空4社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。
            航空は<strong>コロナ禍で大きく落ち込み、その後回復してきた業界</strong>で、4年間で200〜300万円動いた会社もあります。単年の数字だけでなく推移まで併記し、持株会社単体値の落とし穴や中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 航空会社(空運)年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均・賞与含む）。IR BANK掲載値を2026年9月22日に確認。航空会社は総合職・客室乗務員・運航乗務員・整備士など職種で処遇体系が異なり、提出会社に在籍する従業員の構成も会社ごとに違うため、社間の単純比較には幅がある点にご留意ください。とくにANAホールディングスは持株会社単体の値です。
        </p>

        <h2>コロナ後の回復——4年でどれだけ戻ったか</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2022年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2024年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">2026年3月期</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">4年間の増減</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "日本航空(JAL)", y24: "702万円", y25: "921万円", y26: "1,011万円", diff: "+309万円" },
                { name: "ANAホールディングス", y24: "495万円", y25: "714万円", y26: "770万円", diff: "+275万円" },
                { name: "スターフライヤー", y24: "500万円", y25: "619万円", y26: "696万円", diff: "+196万円" },
                { name: "スカイマーク", y24: "544万円", y25: "577万円", y26: "593万円", diff: "+49万円" },
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
          ※表の列は左から2022年3月期→2024年3月期→2026年3月期の推移です(スカイマークは決算期変更があり2022年は9月期の値)。旅客需要の回復に伴い各社とも上昇していますが、上げ幅は会社で大きく異なります。「航空＝高年収」と一括りにできないことが推移から読み取れます。
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
            <h3 className="font-bold text-navy mb-2 text-sm">回復局面の数字である</h3>
            <p className="text-xs text-text-secondary leading-relaxed">現在の水準はコロナ禍の落ち込みから戻ってきた途中の数字です。需要が落ちれば再び下がりうる点を踏まえ、単年ではなく推移で見るのが安全です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">持株会社単体の値に注意</h3>
            <p className="text-xs text-text-secondary leading-relaxed">ANAホールディングスは持株会社で、平均勤続2.9年という値がその構造を示しています。事業会社(全日本空輸など)の水準とは別物として読む必要があります。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">平均年齢が高く勤続が長い会社ほど全社員平均は高く出ます。4社では平均36.5〜46.2歳と幅があります。中途入社時の提示額とは別物です。</p>
          </div>
        </div>

        <h2>航空会社への転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          航空会社の総合職は募集が絞られやすく、非公開求人・スカウト経由の比率も高い領域です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。航空・空港・旅客サービス領域の求人も幅広くカバー。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">航空会社への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/shosha-salary/" className="btn-outline px-8 py-3">総合商社の年収ランキングも見る</Link>
            <Link href="/company/kaiun-salary/" className="btn-outline px-8 py-3">海運会社の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
