import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/prudential/" },
  title: "プルデンシャル生命の年収｜内勤の平均給与は月51.7万円・営業社員の平均報酬は月136.2万円【ディスクロージャー誌2026】",
  description:
    "プルデンシャル生命保険の年収を、ディスクロージャー誌「プルデンシャル生命の現状2026」で確認しました。内勤社員の平均給与は月51.7万円（賞与を除く）、営業社員の平均報酬は月136.2万円（賞与を含む年間支払額の月平均）です。他社との比較、報酬制度の見直し、業務停止命令も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "プルデンシャル生命の年収｜内勤の平均給与は月51.7万円・営業社員の平均報酬は月136.2万円",
    description: "ディスクロージャー誌の平均給与・平均報酬・在籍数と、他の生命保険会社との比較、報酬制度の見直しを整理しています。",
  },
};

const CHECKED = "2026年11月23日";
const DISC26 = "https://www.prudential.co.jp/company/achievement/pdf/pru20261.pdf";
const DISC25 = "https://www.prudential.co.jp/company/achievement/pdf/pru20251.pdf";
const DISC24 = "https://www.prudential.co.jp/company/achievement/pdf/pru20241.pdf";
const FSA = "https://www.fsa.go.jp/news/r8/hoken/20261009/20261009.html";

// ディスクロージャー誌（各年版）「平均給与（内勤社員）」各年3月中の税込定例給与（賞与・時間外手当・通勤手当を除く）千円
const naikin = [
  { y: "2023年3月", v: 483 },
  { y: "2024年3月", v: 487 },
  { y: "2025年3月", v: 494 },
  { y: "2026年3月", v: 517 },
];

// 他社のディスクロージャー誌 内勤職員の平均給与（月額・税込定例給与・賞与と時間外手当を除く）千円
const peers = [
  { k: "プルデンシャル生命（内勤社員）", v: 517, note: "2026年3月" },
  { k: "日本生命（内勤職員）", v: 367, note: "2026年3月" },
  { k: "第一生命（内勤職）", v: 341, note: "2025年度" },
];

const faqData = [
  {
    q: "プルデンシャル生命の平均年収はいくらですか？",
    a: "同社は非上場のため有価証券報告書の平均年間給与はありません。保険業法にもとづくディスクロージャー誌「プルデンシャル生命の現状2026」では、内勤社員の平均給与が月51.7万円（2026年3月の税込定例給与・賞与を除く）、営業社員の平均報酬が月136.2万円（2025年度の賞与を含む年間支払額の月平均）と公表されています。内勤社員の値を12か月分にすると賞与を除いて約620.4万円です（当サイト計算）。",
  },
  {
    q: "ライフプランナー（営業社員）の報酬は年収いくらになりますか？",
    a: "営業社員の平均報酬（月136.2万円）を12倍すると約1,634.4万円です（当サイト計算）。ただし、同社の福利厚生の案内ではライフプランナーの所得は事業所得で、活動費は必要経費として計上するとされていたため、この額は経費を差し引く前の支払額です。また、営業社員には営業所長・支社長などが含まれている可能性があり、ディスクロージャー誌に範囲の定義はありません。",
  },
  {
    q: "営業社員の報酬は完全歩合制ですか？",
    a: "金融庁の行政処分の公表文では、同社はライフプランナーに「完全に業績と連動した報酬制度（フルコミッション）」を提示していたと記載されています。同社は2026年10月8日の発表で、2027年に最低保証給を導入し、新規契約あたりの販売手数料の支給期間を4年から7年に変更するなど、報酬制度を見直すとしています。",
  },
  {
    q: "プルデンシャル生命は現在も営業していますか？",
    a: "金融庁は令和8年10月9日、保険業法第132条第1項にもとづき、令和8年10月13日から令和9年1月31日までの保険募集と保険契約の締結の停止を命じました（契約者保護のために認められた業務を除く）。既存の契約の保全などの手続きについては、同社の公式サイトでご確認ください。",
  },
  {
    q: "内勤社員の給与は他の生命保険会社と比べて高いですか？",
    a: "各社のディスクロージャー誌で同じ定義（税込定例給与・賞与と時間外手当を除く）の値を比べると、プルデンシャル生命の内勤社員は月51.7万円、日本生命の内勤職員は月36.7万円、第一生命の内勤職は月34.1万円です。ただし、内勤の範囲（管理職を含むかどうか）や平均年齢は会社ごとに異なります。",
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

const sources = [
  { label: "プルデンシャル生命保険「プルデンシャル生命の現状2026」p.19 従業員の在籍・採用状況・平均給与・平均報酬", url: DISC26 },
  { label: "プルデンシャル生命保険「プルデンシャル生命の現状2025」p.17", url: DISC25 },
  { label: "プルデンシャル生命保険「プルデンシャル生命の現状2024」p.66", url: DISC24 },
  { label: "プルデンシャル生命保険 中途採用（中途採用比率・2026年8月1日公表）", url: "https://www.prudential.co.jp/recruit/midcareer/" },
  { label: "プルデンシャル生命保険「信頼回復に向けた改革の取り組みについて」（2026年1月16日）", url: "https://www.prudential.co.jp/news/pdf/980/20260116_2.pdf" },
  { label: "プルデンシャル生命保険 新規販売の自主的な停止について（2026年2月4日）", url: "https://www.prudential.co.jp/news/pdf/989/20260204.pdf" },
  { label: "プルデンシャル生命保険 新規販売の自主的な停止期間の延長について（2026年4月22日）", url: "https://www.prudential.co.jp/news/pdf/1000/20260422_1.pdf" },
  { label: "プルデンシャル生命保険 改革の取り組み（営業社員の評価・報酬制度改定を含む・2026年10月8日）", url: "https://www.prudential.co.jp/assets_item/25/20261008_3.pdf" },
  { label: "金融庁「プルデンシャル生命保険株式会社等に対する行政処分について」（令和8年10月9日）", url: FSA },
  { label: "Prudential Financial, Inc. Form 10-K（2025年12月期）Sales Force", url: "https://www.sec.gov/Archives/edgar/data/1137774/000113777426000048/pru-20251231.htm" },
  { label: "日本生命保険「日本生命の現状2026」資料編", url: "https://www.nissay.co.jp/assets/kaisha/annai/gyoseki/2026/disc2026_02.pdf" },
  { label: "第一生命保険 ディスクロージャー誌2026 資料編", url: "https://www.dai-ichi-life.co.jp/company/results/disclosure/2026/pdf/index_003.pdf" },
];

const thc = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "プルデンシャル生命の年収" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            プルデンシャル生命の年収｜内勤の平均給与は月51.7万円・営業社員の平均報酬は月136.2万円
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "51.7万円", l: "内勤社員の平均給与（月額・2026年3月・賞与を除く）" },
              { v: "136.2万円", l: "営業社員の平均報酬（月平均・2025年度・賞与を含む）" },
              { v: "6,527名", l: "在籍数（内勤1,653名・営業4,874名・2025年度末）" },
              { v: "業務停止中", l: "保険募集の停止（2026年10月13日〜2027年1月31日）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            プルデンシャル生命保険株式会社は非上場のため、有価証券報告書の「平均年間給与」はありません。保険業法にもとづいて毎年公表されるディスクロージャー誌「プルデンシャル生命の現状2026」では、
            <strong>内勤社員の平均給与が月51.7万円</strong>（2026年3月・賞与を除く）、<strong>営業社員の平均報酬が月136.2万円</strong>（2025年度・賞与を含む年間支払額の月平均）と公表されています。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}にディスクロージャー誌・金融庁の公表資料・同社の発表資料で当サイトが確認した値です。年額への換算は当サイトの計算です。</p>
        </div>

        <h2>内勤社員と営業社員の給与・在籍数【2026年版】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={thc}>給与・報酬（月額）</th>
                <th className={thc}>12か月分（当サイト計算）</th>
                <th className={thc}>在籍数（2025年度末）</th>
                <th className={thc}>平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">平均勤続年数</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">内勤社員</td><td className={thc}>51.7万円</td><td className={thc}>約620.4万円（賞与を除く）</td><td className={thc}>1,653名</td><td className={thc}>42.0歳</td><td className={thc}>11.1年</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">営業社員</td><td className={thc}>136.2万円</td><td className={thc}>約1,634.4万円（賞与を含む・経費控除前）</td><td className={thc}>4,874名</td><td className={thc}>42.8歳</td><td className={thc}>11.5年</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="text-xs text-text-muted mb-4 list-disc pl-5 space-y-1">
          <li>内勤社員の平均給与は「各年3月中の税込定例給与であり、賞与、時間外手当及び通勤手当は含みません」と注記されています。12か月分の値に賞与は含まれないため、実際の年収はこれより高くなります。</li>
          <li>営業社員の平均報酬は「年間支払額（ボーナスを含む）の月平均」と注記されています。2025年版までは3月の1か月分の値で、2026年版から定義が変わっているため、過去の版の値と並べて比べることはできません。</li>
          <li>同社の福利厚生の案内では、ライフプランナーの所得は「事業所得」で、活動費は必要経費として計上するとされていました。営業社員の報酬は経費を差し引く前の額です。</li>
        </ul>
        <p className="mb-10">
          営業社員の平均報酬は、2026年版の定義で2024年度の月124.7万円から2025年度は月136.2万円へ9.2%増えています（当サイト計算）。一方で営業社員の在籍数は5,005名から4,874名へ131名減り、採用数も546名から436名に減っています。
          親会社Prudential Financial, Inc.の年次報告書（Form 10-K）では、日本のライフプランナー数は2025年末で4,283名と記載されています。
        </p>

        <h2>内勤社員の平均給与の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">時点</th>
                <th className={thc}>平均給与（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">前年からの増減（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {naikin.map((x, i) => (
                <tr key={x.y} className={`border-b border-gray-100 ${i === naikin.length - 1 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className={thc}>{(x.v / 10).toFixed(1)}万円</td>
                  <td className={thc}>{i === 0 ? "－" : `${(((x.v - naikin[i - 1].v) / naikin[i - 1].v) * 100).toFixed(1)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">出典：プルデンシャル生命の現状2024（p.66）・2025（p.17）・2026（p.19）。いずれも同じ定義（3月の税込定例給与）の値です。</p>
        <p className="mb-10">
          内勤社員の平均給与は3年間で月48.3万円から51.7万円へ増えており、2026年3月は前年から4.7%の増加です。2025年度の内勤社員の採用は141名で、同社の公表では内勤社員の中途採用比率は2025年度に89%でした（営業社員は100%）。
        </p>

        <h2>他の生命保険会社との比較（内勤職員の平均給与）</h2>
        <p>各社のディスクロージャー誌で、同じ定義（月額の税込定例給与・賞与と時間外手当を除く）の値を比べると次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社（区分）</th>
                <th className={thc}>平均給与（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">時点</th>
              </tr>
            </thead>
            <tbody>
              {peers.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.v === 517 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{(x.v / 10).toFixed(1)}万円</td>
                  <td className={thc}>{x.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          プルデンシャル生命の内勤社員の平均給与は、日本生命の内勤職員の約1.41倍、第一生命の内勤職の約1.52倍です（当サイト計算）。ただし、第一生命の内勤職には支社長・営業部長が含まれるなど、各社で区分の範囲が異なります。
          営業職員については、プルデンシャル生命の2026年版の値が賞与を含む年間の月平均で、他社（3月の定例給与）と定義が異なるため比較していません。
        </p>

        <h2>営業社員の報酬制度と見直しの内容</h2>
        <p>
          金融庁の行政処分の公表文では、同社はライフプランナーと呼ぶ営業社員を唯一の販売チャネルとし、「完全に業績と連動した報酬制度（フルコミッション）」と、活動時間や活動場所が基本的に自由な勤務形態を提示していたと記載されています。
          同社は2026年1月16日の発表で、業績に過度に連動する報酬制度が営業社員の収入の不安定さにつながり、不適切行為のリスクを高めていたと分析しています。
        </p>
        <p>2026年10月8日に公表された見直しの内容（2027年に導入予定）は次のとおりです。</p>
        <ul className="list-disc pl-6 space-y-1 mb-10 text-sm">
          <li>月額報酬が所定の保証額を下回る場合に差額を支給する「最低保証給」の導入</li>
          <li>アフターサービスに対する報酬の比率を、報酬全体の5%未満から約20%に変更</li>
          <li>新規契約あたりの販売手数料の支給期間を4年から7年に変更</li>
          <li>契約の継続、コンプライアンス、募集品質の要素を評価に反映</li>
          <li>入社5年目までの営業社員に、収入が安定するまでの期間に支給する手当を拡充</li>
        </ul>

        <h2>社員の不適切行為と業務停止命令</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "2026年1月16日：社員・元社員による金銭に関わる不適切行為の公表", d: "106名の社員・元社員が顧客498名から合計約30.8億円（在職中約16.3億円・退職後約14.5億円）を受け取っていたことが判明したと公表しました。社長は2026年2月1日付で退任しています。" },
            { t: "2026年2月9日〜：新規販売の自主的な停止", d: "90日間の新規販売の自主停止を始め、2026年4月22日に停止期間の180日延長を発表しました。" },
            { t: "2026年10月9日：金融庁の行政処分", d: "保険業法第132条第1項にもとづき、令和8年10月13日から令和9年1月31日までの保険募集と保険契約の締結の停止（業務停止命令）と、業務改善命令を受けました。業務改善計画の提出期限は令和8年11月30日です。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          転職を検討する場合は、業務停止期間中の業務内容や、2027年に導入される新しい報酬制度の条件（最低保証給の額、手当の支給期間など）を、選考の中で書面により確認することをおすすめします。
        </p>

        <h2>よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="list-disc pl-6 space-y-1 mb-10 text-sm">
          <li><Link href="/company/tokio-marine-nichido/" className="text-teal underline">東京海上日動の平均年収</Link></li>
          <li><Link href="/company/kinyu-salary/" className="text-teal underline">金融業界の年収ランキング</Link></li>
          <li><Link href="/company/" className="text-teal underline">企業別転職ガイド一覧</Link></li>
        </ul>

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
