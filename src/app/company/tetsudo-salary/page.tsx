import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/tetsudo-salary/" },
  title: "鉄道業界の年収ランキング【2026年・有価証券報告書】JR・大手私鉄8社を一次データで比較",
  description:
    "JR3社・大手私鉄・東京メトロの平均年収を有価証券報告書の記載値(2026年3月期)でランキングしています。阪急阪神HD919万円・東急903万円・JR東海860万円・東京メトロ836万円・小田急827万円ほか8社を掲載し、全社が2年連続上昇した賃上げの傾向、持株会社単体の数値の意味、採用の入口まで解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "鉄道業界の年収ランキング【2026年・有価証券報告書】",
    description: "JR・大手私鉄8社の平均年収を有価証券報告書の記載値でランキングしています。キャリア採用の入口も解説します。",
  },
};

// 年収は各社ページ掲載の有価証券報告書で検証した数値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "hankyu-hanshin", name: "阪急阪神HD", salary: "約919万円", term: "2026年3月期", note: "鉄道×不動産×エンタメ(宝塚・阪神)の複合グループです。2年連続で上昇しています。", hd: true, field: "私鉄(関西)" },
  { rank: 2, slug: "tokyu", name: "東急", salary: "約903万円", term: "2026年3月期", note: "渋谷再開発の不動産比重が高い事業持株会社です。2年で+127万円上昇しています。", hd: true, field: "私鉄(関東)" },
  { rank: 3, slug: "jr-central", name: "JR東海", salary: "約860万円", term: "2026年3月期", note: "東海道新幹線とリニアを擁します。平均37.0歳と若く、2年連続で+50万円の賃上げとなっています。", hd: false, field: "JR" },
  { rank: 4, slug: "tokyo-metro", name: "東京メトロ", salary: "約836万円", term: "2026年3月期", note: "2024年10月に上場しました。地下鉄9路線を運営し、平均勤続18.1年の安定した構成です。", hd: false, field: "地下鉄" },
  { rank: 5, slug: "odakyu", name: "小田急電鉄", salary: "約827万円", term: "2026年3月期", note: "平均勤続22.0年は収録8社で最長であり、長期就業型の構成です。", hd: false, field: "私鉄(関東)" },
  { rank: 6, slug: "kintetsu-ghd", name: "近鉄グループHD", salary: "約822万円", term: "2026年3月期", note: "日本最長の私鉄路線網に加え、国際物流(近鉄エクスプレス)も展開しています。", hd: true, field: "私鉄(関西)" },
  { rank: 7, slug: "jr-east", name: "JR東日本", salary: "約819万円", term: "2026年3月期", note: "国内最大の鉄道会社です。Suica経済圏を拡大中で、2年で+94万円上昇しています。", hd: false, field: "JR" },
  { rank: 8, slug: "jr-west", name: "JR西日本", salary: "約727万円", term: "2026年3月期", note: "山陽新幹線と関西都市圏を担います。平均37.4歳の若い構成で、2年連続で上昇しています。", hd: false, field: "JR" },
];

const faqData = [
  {
    q: "鉄道業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(2026年3月期・IR BANK掲載値を2026年9月10日確認)では、阪急阪神ホールディングスが約919万円(持株会社単体)でトップです。東急 約903万円、JR東海 約860万円が続きます。阪急阪神・東急・近鉄はHD(持株会社)単体の数値で、電鉄事業会社の平均とは母集団が異なる点にご留意ください。",
  },
  {
    q: "鉄道業界の年収は上がっていますか？",
    a: "収録8社すべてが2年連続で上昇しています(2026年9月10日・IR BANK掲載の有価証券報告書の数値で確認)。特にJR東海(2年で+100万円)・東急(+127万円)・JR東日本(+94万円)の上昇幅が大きく、全社的な賃上げトレンドが数字に表れています。",
  },
  {
    q: "JR3社の年収に差はありますか？",
    a: "2026年3月期の有価証券報告書の数値では、JR東海 約860万円>JR東日本 約819万円>JR西日本 約727万円です。JR東海・JR西日本は平均年齢37歳台と若い構成のため、年齢を考慮した水準では差が縮まる点も踏まえてご覧ください(平均年収は年齢構成の影響を受けます)。",
  },
  {
    q: "この数値は運転士や駅係員の平均年収ですか？",
    a: "提出会社の全従業員平均です。現業(運転・駅務・保守)と本社(企画・技術・不動産)を合算した数値で、職種・年代により実際の水準は異なります。また阪急阪神HD・近鉄GHD・東急は持株会社単体の数値のため、電鉄本体の現業職の平均とは異なります(東急は2019年10月1日に鉄軌道業を東急電鉄へ会社分割により移転済み)。",
  },
  {
    q: "鉄道会社の中途採用はどこに応募すればいいですか？",
    a: "8社とも公式サイトに採用ページがあります(2026年9月10日確認・JR東海=saiyo.jr-central.co.jp、東急=tokyu-recruit.jp等)。近年は鉄道技術職に加えて、不動産開発・デジタル(Suica・MaaS)・データ系の職種別採用が拡大しています。専門職は非公開求人も多いため、インフラ業界に強いエージェントやスカウト型サービスの併用が有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鉄道業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/tetsudo-salary/" },
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

export default function TetsudoSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "鉄道業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            鉄道業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            JR3社・大手私鉄・東京メトロの8社の平均年収を、有価証券報告書の記載値（平均年間給与・2026年3月期）のみにもとづいてランキングしています。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。全社が2年連続で上昇している賃上げの傾向、持株会社と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有価証券報告書準拠 鉄道業界年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">区分</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">平均年間給与（有価証券報告書）</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.slug} className="border-b border-border">
                  <td className="py-3 px-4 font-bold text-navy">{r.rank}位</td>
                  <td className="py-3 px-4">
                    <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>
                    {r.hd && <span className="ml-2 text-xs bg-warm-gray rounded-full px-2 py-0.5 text-text-muted">HD単体値</span>}
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
          ※数値は各社の有価証券報告書「従業員の状況」に記載の平均年間給与（提出会社・賞与含む）です。IR BANK掲載値を2026年9月10日に確認しました。阪急阪神HD・東急・近鉄GHDは持株会社(事業持株会社)単体の数値です。
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
            <h3 className="font-bold text-navy mb-2 text-sm">「HD単体値」は本社の平均</h3>
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有価証券報告書の数値は本社機能スタッフ中心の平均です。阪急電鉄・近畿日本鉄道など電鉄本体の現業職の水準とは異なります(東急は鉄道を東急電鉄へ分社済み)。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均年齢の差に注意</h3>
            <p className="text-xs text-text-secondary leading-relaxed">JR東海37.0歳・JR西37.4歳と、小田急43.5歳・近鉄44.6歳では年齢構成が大きく違います。平均年収は平均年齢が高いほど高くなる傾向があるため、順位がそのまま水準の優劣を示すものではありません。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">全社が賃上げトレンド</h3>
            <p className="text-xs text-text-secondary leading-relaxed">収録8社すべてが2年連続で上昇しています(最大は東急の+127万円/2年)。コロナ禍からの回復と全社的な賃上げが反映されています。</p>
          </div>
        </div>

        <h2>鉄道業界の転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          鉄道は技術職に加え、不動産・デジタル・データ系の職種別採用が拡大中です。複数のエージェントに登録し、求人と情報を幅広く集めることをおすすめします。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。鉄道各社の技術職から本社系まで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。インフラ系の同業比較がしやすい点が特長です。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。不動産開発・DX・経営企画などハイクラス職の市場価値の把握に適しています。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラスに強みがあります。鉄道グループの不動産・ホテル・国際物流ポジションにも対応しています。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">鉄道業界への転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">各社の転職ガイドで一次データを確認したうえで、ポジションごとの詳細は転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/shokuhin-salary/" className="btn-outline px-8 py-3">食品・飲料の年収ランキングも見る</Link>
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
