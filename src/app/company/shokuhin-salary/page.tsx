import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "食品・飲料業界の年収ランキング【2026年・有価証券報告書】大手9社を一次データで比較",
  description:
    "食品・飲料大手9社の平均年収を有価証券報告書の記載値でランキング。アサヒGHD1,335万円・サントリー食品1,170万円・味の素1,061万円・キリンHD998万円・明治HD938万円ほか。持株会社単体の数値の意味、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "食品・飲料業界の年収ランキング【2026年・有価証券報告書】",
    description: "食品・飲料大手9社の平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "asahi-ghd", name: "アサヒグループHD", salary: "約1,335万円", term: "2025年12月期", note: "直近期に+117万円で収録9社トップ。海外ビール事業が柱のグローバル持株会社", hd: true, field: "酒類・飲料" },
  { rank: 2, slug: "suntory-bf", name: "サントリー食品インターナショナル", salary: "約1,170万円", term: "2025年12月期", note: "天然水・BOSSの清涼飲料大手。2年連続上昇", hd: false, field: "清涼飲料" },
  { rank: 3, slug: "ajinomoto", name: "味の素", salary: "約1,061万円", term: "2026年3月期", note: "食品×バイオ×半導体材料(ABF)。平均勤続18.9年の長期就業型", hd: false, field: "食品・バイオ" },
  { rank: 4, slug: "kirin-hd", name: "キリンHD", salary: "約998万円", term: "2025年12月期", note: "ビール・飲料に加え医薬(協和キリン)を持つ食から医への持株会社", hd: true, field: "酒類・飲料・医薬" },
  { rank: 5, slug: "meiji-hd", name: "明治HD", salary: "約938万円", term: "2026年3月期", note: "ヨーグルト・チョコ最大手の食品と医薬の2本柱", hd: true, field: "乳製品・菓子・医薬" },
  { rank: 6, slug: "yakult", name: "ヤクルト本社", salary: "約854万円", term: "2026年3月期", note: "乳酸菌研究を核に40の国・地域で展開", hd: false, field: "乳酸菌飲料" },
  { rank: 7, slug: "nissin-hd", name: "日清食品HD", salary: "約842万円", term: "2026年3月期", note: "平均39.5歳・勤続8.7年(HD単体)と食品大手では珍しい流動型の構成", hd: true, field: "即席麺" },
  { rank: 8, slug: "toyo-suisan", name: "東洋水産（マルちゃん）", salary: "約698万円", term: "2026年3月期", note: "即席麺・水産の大手。マルちゃんブランドの北米即席麺が成長エンジン", hd: false, field: "即席麺・水産" },
  { rank: 9, slug: "calbee", name: "カルビー", salary: "約685万円", term: "2026年3月期", note: "スナック最大手。前期819万円からの低下は工場勤務の無期契約社員を正社員等級へ統合し単体従業員が+1,421名となった算入範囲の変化によるもので、待遇引き下げを意味しない", hd: false, field: "スナック菓子" },
];

const faqData = [
  {
    q: "食品・飲料業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月8日確認)では、アサヒグループホールディングスが約1,335万円(2025年12月期・持株会社単体)でトップです。サントリー食品インターナショナル約1,170万円、味の素約1,061万円が続きます。アサヒ・キリン・明治・日清食品は持株会社単体の数値で、事業会社の平均とは母集団が異なる点にご注意ください。",
  },
  {
    q: "持株会社(HD)の年収と事業会社の年収は違うのですか？",
    a: "違います。有報の平均年間給与は「提出会社単体」の数値で、持株会社の場合は本社機能に勤める社員中心の平均です。アサヒビールやキリンビールなど事業会社の全社員平均とは別物です(事業会社単体の有報は提出されないため公表値がありません)。グループの給与水準を示す指標として見てください。",
  },
  {
    q: "ビール3社(アサヒ・キリン・サントリー)の年収に差はありますか？",
    a: "比較できる範囲では、アサヒGHD約1,335万円(HD単体)・サントリー食品約1,170万円(清涼飲料事業会社)・キリンHD約998万円(HD単体)です(2025年12月期)。ただしサントリーホールディングス本体は非上場で有報の公表値がなく、3社とも母集団が異なるため、水準感の目安として見るのが適切です。",
  },
  {
    q: "食品業界の年収は上がっていますか？",
    a: "会社により分かれます(2026年9月8日・IR BANK掲載の有報値で確認)。アサヒGHD(+117万円)・サントリー食品(+9万円で2年連続上昇)・味の素(+25万円)は上昇した一方、日清食品HDは微減でした。カルビーは前期比134万円低下していますが、これは無期契約社員を正社員等級体系へ統合し単体従業員が+1,421名となった算入範囲の変化によるもので、待遇の引き下げを意味しません。業績連動と制度変更の両方が数値を動かす業界のため、単年でなく推移と注記で見るのがおすすめです。",
  },
  {
    q: "食品大手の中途採用はどこに応募すればいいですか？",
    a: "各社とも公式サイトに採用情報ページがあります(2026年9月8日確認・アサヒ=asahigroup-holdings.com/careers/、ヤクルト=yakult.co.jp/saiyou/等)。ただしカルビーは公式FAQで中途採用の直接問い合わせを受け付けておらず、求人サイト・エージェント経由が公式に案内されたルートです(2026年7月31日確認)。研究開発・生産技術・マーケティングの専門職採用が中心で、非公開求人も多いため、メーカーに強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "食品・飲料業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/shokuhin-salary/" },
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

export default function ShokuhinSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "食品・飲料業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            食品・飲料業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            食品・飲料大手9社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。持株会社と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 食品・飲料業界年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。IR BANK掲載値を2026年9月8日に確認。アサヒ・キリン・明治・日清食品は持株会社単体の数値です。12月期と3月期が混在するため、単純比較の際は時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有報値は本社機能スタッフ中心の平均です。事業会社(アサヒビール・キリンビール等)の職種別水準は求人票・エージェント経由で確認しましょう。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">食品は平均勤続15〜19年の長期就業型が多く(味の素18.9年・明治18年)、全社員平均は高く出ます。中途入社時の提示額とは別物です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">業績連動・決算期で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">賞与の業績連動や算入範囲の変更で年度により大きく動きます(アサヒ+117万円、カルビーは制度変更由来の-134万円が典型例)。12月期と3月期の混在にも注意してください。</p>
          </div>
        </div>

        <h2>食品・飲料業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          食品大手は研究・生産技術・マーケの専門職採用が中心で、非公開求人も多い業界です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。食品メーカーの研究開発から営業・本社機能まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。メーカー系の同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。ブランドマーケ・経営企画などハイクラス職の市場価値把握に。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・外資系に強み。グローバル食品メーカーの管理職ポジションに。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">食品・飲料業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/seiyaku-salary/" className="btn-outline px-8 py-3">製薬の年収ランキングも見る</Link>
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
