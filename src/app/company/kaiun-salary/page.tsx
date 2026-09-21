import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "海運会社の年収ランキング【2026年・有価証券報告書】大手3社+中堅を一次データで比較",
  description:
    "海運会社の平均年収を有価証券報告書の記載値（2026年3月期）でランキング。商船三井1,659万円・日本郵船1,554万円・川崎汽船1,450万円の大手3社に、飯野海運・NSユナイテッド海運を加えた5社。市況で賞与が大きく振れる業界特性、キャリア採用の入口まで一次データで解説します。",
  alternates: { canonical: "/company/kaiun-salary/" },
  openGraph: {
    title: "海運会社の年収ランキング【2026年・有価証券報告書】",
    description: "海運5社の平均年収を有報記載値でランキング。市況連動の読み方とキャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "shosen-mitsui", name: "商船三井", salary: "約1,659万円", term: "2026年3月期", note: "LNG船・タンカーなどエネルギー輸送と海洋事業に強み。前期に▼239万円下げた後、最新期は+223万円と大きく反発", field: "海運大手" },
  { rank: 2, slug: "nippon-yusen", name: "日本郵船", salary: "約1,554万円", term: "2026年3月期", note: "定期船から航空・物流まで手がける国内最大手。5社で唯一、直近3期とも上昇(1,378→1,435→1,554万円)", field: "海運大手" },
  { rank: 3, slug: "kawasaki-kisen", name: "川崎汽船", salary: "約1,450万円", term: "2026年3月期", note: "ドライバルク・自動車船が柱。最新期は+228万円と5社で最大の上げ幅", field: "海運大手" },
  { rank: 4, slug: "iino-kaiun", name: "飯野海運", salary: "約1,285万円", term: "2026年3月期", note: "ケミカルタンカー・ガス船に強い中堅。不動産賃貸も併営。大手が反発した最新期にほぼ横ばい(▼1万円)", field: "中堅海運" },
  { rank: 5, slug: "nsunited", name: "NSユナイテッド海運", salary: "約1,196万円", term: "2026年3月期", note: "日本製鉄グループの不定期船大手。平均40.2歳・勤続14.4年と5社で最も年齢構成が高い", field: "中堅海運" },
];

const faqData = [
  {
    q: "海運会社で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書（2026年3月期・IR BANK掲載値を2026年9月22日確認）では、商船三井が約1,659万円でトップです。日本郵船 約1,554万円、川崎汽船 約1,450万円が続き、大手3社はいずれも1,400万円台以上。中堅の飯野海運 約1,285万円、NSユナイテッド海運 約1,196万円も1,100万円を超えており、5社とも高水準に分布しています。",
  },
  {
    q: "海運の年収はなぜ高いのですか？",
    a: "有報の平均年間給与は賞与を含む値です。海運は運賃・傭船料の市況とコンテナ船事業(ONE)の持分損益で業績が大きく振れるため、好調期は賞与が大きく積み上がります。実際、商船三井は1,675万円(2024年3月期)→1,436万円(2025年3月期)→1,659万円(2026年3月期)、川崎汽船は1,394→1,222→1,450万円と、1年で200万円以上動く年もあります。「高い年の数字」だけを見ず、複数年の推移で判断するのが実態に近い読み方です。",
  },
  {
    q: "海運の平均年収は海上職(船員)も含んだ数字ですか？",
    a: "有報の平均年間給与は提出会社に在籍する従業員の平均です。海運会社は陸上勤務職と海上職(海技資格を持つ船員)で処遇体系が異なり、提出会社に在籍する従業員の構成は会社ごとに違います。当サイトでは各社の有報記載値をそのまま掲載しており、内訳の推計は行っていません。職種別の水準は募集要項やエージェント経由で確認してください。",
  },
  {
    q: "海運会社への転職は未経験でも可能ですか？",
    a: "陸上勤務の総合職では、営業(オペレーション)・財務・法務・IT・人事など職種ごとのキャリア採用が行われています。業界未経験でも職種の専門性が合致すれば応募できるポジションがあります。一方、海上職(船員)は海技資格が前提となるため、未経験からの転職はできません。募集職種は各社の採用ページで変動するため、定点で確認するのが確実です。",
  },
  {
    q: "海運会社の中途採用はどこに応募すればいいですか？",
    a: "5社とも公式サイトの採用ページでキャリア採用の窓口を公開しています(2026年9月22日確認)。日本郵船=www.nyk.com/recruit/、商船三井=www.mol.co.jp/recruit/、川崎汽船=www.kline.co.jp/ja/recruit.html、NSユナイテッド海運=www.nsuship.co.jp/recruit/、飯野海運=www.iino.co.jp/kaiun/recruit/ です。募集ポジションは時期により変わるため、エージェント経由での情報収集と併用すると比較しやすくなります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "海運会社の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kaiun-salary/" },
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

export default function KaiunSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "海運会社の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            海運会社の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            海運5社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。
            海運は<strong>市況で賞与が大きく振れる業界</strong>で、1年で200万円以上動く会社もあります。単年の数字だけでなく直近3年の推移まで併記し、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 海運会社年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均・賞与含む）。IR BANK掲載値を2026年9月22日に確認。海運会社は陸上勤務職と海上職で処遇体系が異なり、提出会社に在籍する従業員の構成も会社ごとに違うため、社間の単純比較には幅がある点にご留意ください。
        </p>

        <h2>直近3年の推移（1年で200万円動く年もある）</h2>
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
                { name: "商船三井", y24: "1,675万円", y25: "1,436万円", y26: "1,659万円", diff: "+223万円" },
                { name: "日本郵船", y24: "1,378万円", y25: "1,435万円", y26: "1,554万円", diff: "+119万円" },
                { name: "川崎汽船", y24: "1,394万円", y25: "1,222万円", y26: "1,450万円", diff: "+228万円" },
                { name: "飯野海運", y24: "1,406万円", y25: "1,286万円", y26: "1,285万円", diff: "▲1万円" },
                { name: "NSユナイテッド海運", y24: "1,143万円", y25: "1,102万円", y26: "1,196万円", diff: "+94万円" },
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
          ※同じ有報値の推移。2025年3月期に大手3社のうち商船三井・川崎汽船が下げ、翌期に反発しています。海運の平均年収は「毎年この水準」ではなく市況に連動して動く点が、他業界との最大の違いです。
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
            <h3 className="font-bold text-navy mb-2 text-sm">市況連動で毎年変わる</h3>
            <p className="text-xs text-text-secondary leading-relaxed">運賃市況とコンテナ船事業の損益で賞与が動きます。単年の高い数字を将来の期待値として読まないこと。直近3年の推移で見るのが安全です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">陸上職と海上職で体系が違う</h3>
            <p className="text-xs text-text-secondary leading-relaxed">海技資格が必要な海上職と、陸上勤務の総合職では働き方も処遇も異なります。有報の平均は在籍者全体の平均で、職種別の水準ではありません。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">平均年齢が高く勤続が長い会社ほど全社員平均は高く出ます。5社では平均37.8〜40.2歳の幅があります。中途入社時の提示額とは別物です。</p>
          </div>
        </div>

        <h2>海運会社への転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          海運の陸上総合職は募集が絞られやすく、非公開求人・スカウト経由の比率も高い領域です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。海運・物流領域の求人も幅広くカバー。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・グローバル転職に強み。英語を使う海外系ポジションの紹介に定評。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">海運会社への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/shosha-salary/" className="btn-outline px-8 py-3">総合商社の年収ランキングも見る</Link>
            <Link href="/company/denryoku-gas-salary/" className="btn-outline px-8 py-3">電力・ガスの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
