import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "製薬業界の年収ランキング【2026年・有価証券報告書】大手8社を一次データで比較",
  description:
    "大手製薬8社の平均年収を有価証券報告書の記載値でランキング。中外製薬1,350万円・武田薬品1,144万円・アステラス製薬1,131万円・エーザイ1,123万円・第一三共1,097万円ほか。決算期・平均勤続年数の違い、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "製薬業界の年収ランキング【2026年・有価証券報告書】",
    description: "大手製薬8社の平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "chugai", name: "中外製薬", salary: "約1,350万円", term: "2025年12月期", note: "直近期に+143万円の大幅上昇で製薬収録8社トップ。ロシュ傘下で抗体医薬に強み", hd: false, field: "バイオ・抗体" },
  { rank: 2, slug: "takeda", name: "武田薬品工業", salary: "約1,144万円", term: "2026年3月期", note: "国内最大手のグローバル製薬。2年連続で上昇", hd: false, field: "総合・グローバル" },
  { rank: 3, slug: "astellas", name: "アステラス製薬", salary: "約1,131万円", term: "2026年3月期", note: "がん・泌尿器に強み。遺伝子治療など新規モダリティに投資", hd: false, field: "総合" },
  { rank: 4, slug: "eisai", name: "エーザイ", salary: "約1,123万円", term: "2026年3月期", note: "認知症薬レカネマブが柱。平均勤続18.5年の長期就業型", hd: false, field: "神経・がん" },
  { rank: 5, slug: "daiichisankyo", name: "第一三共", salary: "約1,097万円", term: "2026年3月期", note: "ADC(エンハーツ)でがん領域に急伸。平均勤続19.9年は収録8社最長", hd: false, field: "がん・ADC" },
  { rank: 6, slug: "ono-yakuhin", name: "小野薬品工業", salary: "約1,093万円", term: "2026年3月期", note: "オプジーボのがん免疫。2年で+107万円と伸びが大きい", hd: false, field: "がん免疫" },
  { rank: 7, slug: "shionogi", name: "塩野義製薬", salary: "約1,030万円", term: "2026年3月期", note: "感染症のリーディングカンパニー。2年連続上昇で1,000万円台に到達", hd: false, field: "感染症" },
  { rank: 8, slug: "otsuka-hd", name: "大塚ホールディングス", salary: "約1,000万円", term: "2025年12月期", note: "大塚製薬・大鵬薬品等の持株会社。HD単体は少数精鋭の本社機能", hd: true, field: "医薬+NC" },
];

const faqData = [
  {
    q: "製薬業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月6日確認)では、中外製薬が約1,350万円(2025年12月期)でトップです。武田薬品工業 約1,144万円、アステラス製薬 約1,131万円、エーザイ 約1,123万円が続きます。中外製薬は直近期に143万円上昇しており、業績連動賞与の影響が大きいと考えられます(有報記載の範囲では内訳を断定しません)。",
  },
  {
    q: "この数値はMR・研究職の平均年収ですか？",
    a: "いいえ。有報の平均年間給与は提出会社の全従業員平均で、研究職・MR・工場・本社スタッフを合算した数値です。職種・年代・役職により実際の水準は異なります。大塚ホールディングスのみ持株会社単体(本社機能中心・平均勤続3.3年)の数値で、大塚製薬など事業会社の平均とは別物です。",
  },
  {
    q: "製薬業界の年収は上がっていますか？",
    a: "収録8社のうち6社が直近期に上昇しています(2026年9月6日・IR BANK掲載の有報値で確認)。特に中外製薬(+143万円)・エーザイ(+68万円)・小野薬品(+76万円)・武田薬品(+41万円)の上昇が目立ちます。一方で第一三共・大塚HDは微減で、会社による差があります。",
  },
  {
    q: "未経験から製薬業界へ転職できますか？",
    a: "職種によります。研究・臨床開発・薬事などの中核職は経験者採用が基本ですが、データサイエンス・IT・デジタル職は異業種エンジニアの採用が拡大しています。また品質管理(GMP)は化学・食品など他業界の品質経験、営業(MR)は医療業界営業の経験が入口になり得ます。",
  },
  {
    q: "製薬大手の中途採用はどこに応募すればいいですか？",
    a: "8社とも公式サイトに採用ページがあります(2026年9月6日確認・武田はグローバル採用ポータルjobs.takeda.com、小野はrecruit.ono-pharma.com等)。専門職は非公開求人も多いため、メディカル・製薬に強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "製薬業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/seiyaku-salary/" },
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

export default function SeiyakuSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "製薬業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            製薬業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手製薬8社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。研究・開発・MR・データサイエンスまで、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 製薬業界年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">主領域</th>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。IR BANK掲載値を2026年9月6日に確認。大塚ホールディングスのみ持株会社単体の数値です。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
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
            <h3 className="font-bold text-navy mb-2 text-sm">全従業員平均＝職種混在</h3>
            <p className="text-xs text-text-secondary leading-relaxed">研究職・MR・工場・本社の合算平均です。博士人材の研究職や海外駐在ポジションは平均より高く、職種別の実額は求人票・エージェント経由で確認しましょう。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">製薬は平均勤続15〜20年の長期就業型が多く(第一三共19.9年・エーザイ18.5年)、全社員平均は高く出ます。中途入社時の提示額とは別物です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">業績連動・決算期で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">主力品の伸びで賞与が動きます(中外製薬の直近+143万円が典型例)。12月期決算(中外・大塚)と3月期決算が混在する点にも注意してください。</p>
          </div>
        </div>

        <h2>製薬業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          製薬は専門職の非公開求人が多い業界です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。研究開発からMR・本社機能まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。メディカル系ハイクラス・専門職の市場価値把握に。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・外資系に強み。グローバル製薬の専門職ポジションに。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">製薬業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/kinyu-salary/" className="btn-outline px-8 py-3">金融の年収ランキングも見る</Link>
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
