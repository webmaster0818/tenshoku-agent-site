import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メーカーの年収ランキング【2026年・有価証券報告書】大手27社を一次データで比較",
  description:
    "大手メーカーの平均年収を有価証券報告書の記載値（決算期明記）でランキング。キーエンス2,178万円・ディスコ1,879万円・レーザーテック1,681万円・東京エレクトロン1,380万円・トヨタ自動車1,006万円ほかFA/半導体/電機/自動車/精密/食品/家電の27社。持株会社単体と事業会社の違い、中途採用の入口、転職難易度まで一次データで解説します。",
  openGraph: {
    title: "メーカーの年収ランキング【2026年・有価証券報告書】",
    description: "大手メーカー27社の平均年収を有報記載値でランキング。転職難易度も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "keyence", name: "キーエンス", salary: "約2,178万円", term: "2026年3月期", note: "センサ・測定器等のFA（ファクトリーオートメーション）機器で高収益。上場メーカーでも最高水準の平均年収。平均年齢35.0歳と若く成果連動の性格が強い", hd: false, field: "FA機器（センサ）" },
  { rank: 2, slug: "disco", name: "ディスコ", salary: "約1,879万円", term: "2026年3月期", note: "半導体の切断・研削・研磨装置で世界トップシェア。有報実額1,879万円は上場メーカーで最高水準クラス。個人・チームの成果を賞与に反映するWill会計と呼ばれる独自制度が有報にも記載", hd: false, field: "半導体精密加工装置" },
  { rank: 3, slug: "lasertec", name: "レーザーテック", salary: "約1,681万円", term: "2025年6月期", note: "EUVマスク検査装置で世界シェアの大半を占める。6月決算のため最新確定値は2025年6月期(2026年6月期有報は2026年9月提出予定)。少数精鋭の単体従業員構成", hd: false, field: "半導体検査装置" },
  { rank: 4, slug: "tokyo-electron", name: "東京エレクトロン", salary: "約1,380万円", term: "2026年3月期", note: "半導体製造装置で国内首位・世界トップクラス。世界の半導体投資拡大が追い風。製造・開発は国内子会社が担う事業会社（純粋持株会社ではない）", hd: false, field: "半導体製造装置" },
  { rank: 5, slug: "sony", name: "ソニーグループ", salary: "約1,155万円", term: "2026年3月期", note: "持株会社（ソニーグループ株式会社）単体の数値で、本社機能中心の平均。エレクトロニクス・ゲーム・金融・エンタメを束ねるコングロマリット", hd: true, field: "電機・エンタメ" },
  { rank: 6, slug: "fanuc", name: "ファナック", salary: "約1,144万円", term: "2026年3月期", note: "工作機械用CNC・産業用ロボットで世界トップクラス。山梨県忍野村の拠点を軸にした高収益・独自文化のメーカー", hd: false, field: "FA・ロボット" },
  { rank: 7, slug: "advantest", name: "アドバンテスト", salary: "約1,098万円", term: "2026年3月期", note: "半導体テスタで世界トップクラス。単体2,033名は連結約7,241名の3割弱で、グループ全体の水準を示す値ではない点に注意", hd: false, field: "半導体試験装置" },
  { rank: 8, slug: "takara-tomy", name: "タカラトミー", salary: "約1,038万円", term: "2026年3月期", note: "前期比+117万円と大きく上昇。トミカ・プラレール等の定番IPに加え、トレーディングカード・海外展開が業績を牽引", hd: false, field: "玩具" },
  { rank: 9, slug: "toyota", name: "トヨタ自動車", salary: "約1,006万円", term: "2026年3月期", note: "平均年齢40.5歳・平均勤続15.1年の全社員平均。国内製造業の頂点で、技術系・事務系とも採用規模が大きい", hd: false, field: "自動車" },
  { rank: 10, slug: "hoya", name: "HOYA", salary: "約970万円", term: "2026年3月期", note: "光学ガラス・半導体マスク・メディカル（眼鏡レンズ・内視鏡）を持つ高収益の精密メーカー。グローバル比率が高い", hd: false, field: "精密・光学" },
  { rank: 11, slug: "daifuku", name: "ダイフク", salary: "約917万円", term: "2025年12月期", note: "マテリアルハンドリング（物流・搬送システム）で世界首位級。半導体・EC物流の設備投資を追い風にする重工系メーカー", hd: false, field: "物流機器" },
  { rank: 12, slug: "denso", name: "デンソー", salary: "約915万円", term: "2026年3月期", note: "自動車部品で世界トップクラス。トヨタグループの中核で電動化・先進安全にも注力。単体4.4万名・平均勤続22.9年の大規模安定雇用型", hd: false, field: "自動車部品" },
  { rank: 13, slug: "shin-etsu", name: "信越化学工業", salary: "約898万円", term: "2026年3月期", note: "塩化ビニル樹脂・半導体シリコン（シリコンウエハー）で世界首位級。高収益体質の総合化学メーカー。平均勤続18.8年の安定雇用型", hd: false, field: "化学・素材" },
  { rank: 14, slug: "yakult", name: "ヤクルト本社", salary: "約854万円", term: "2026年3月期", note: "平均勤続約17.7年と非常に長い安定雇用型。乳酸菌飲料の国内に加え、アジア・米州の海外事業が利益の柱", hd: false, field: "食品・飲料" },
  { rank: 15, slug: "murata", name: "村田製作所", salary: "約838万円", term: "2026年3月期", note: "積層セラミックコンデンサ（MLCC）で世界シェア首位級。スマホ・車載向けを支える京都の電子部品大手", hd: false, field: "電子部品" },
  { rank: 16, slug: "casio", name: "カシオ計算機", salary: "約838万円", term: "2026年3月期", note: "G-SHOCK等の時計・電卓・電子辞書・電子楽器のメーカー。前期814万円から上昇。単体2,053名", hd: false, field: "時計・電機" },
  { rank: 17, slug: "zojirushi", name: "象印マホービン", salary: "約835万円", term: "2025年11月期", note: "炊飯ジャー・ステンレスボトルで知られる大阪の生活家電メーカー。単体527名規模で家電メーカーとして高めの水準", hd: false, field: "家電" },
  { rank: 18, slug: "yamaha-motor", name: "ヤマハ発動機", salary: "約835万円", term: "2025年12月期", note: "二輪車で世界大手。12月決算。楽器・音響のヤマハ(7951)とは別法人である点に注意(資本関係はあるが上場企業として独立)", hd: false, field: "輸送機器(二輪)" },
  { rank: 19, slug: "pigeon", name: "ピジョン", salary: "約827万円", term: "2025年12月期", note: "哺乳器・育児用品の国内大手。単体338名と少人数で、製造等はグループ会社が担うため本社単体（本社機能中心）の平均である点に注意", hd: false, field: "育児用品" },
  { rank: 20, slug: "brother", name: "ブラザー工業", salary: "約805万円", term: "2026年3月期", note: "プリンター・複合機を軸に工作機械・ミシンまで持つ名古屋の総合機器メーカー。単体3,997名", hd: false, field: "電機・機械" },
  { rank: 21, slug: "rohm", name: "ローム", salary: "約804万円", term: "2026年3月期", note: "京都本社の半導体メーカー。パワー半導体・カスタムLSIが主力。SiCパワー半導体への投資を拡大", hd: false, field: "半導体(パワー・LSI)" },
  { rank: 22, slug: "yamaha", name: "ヤマハ", salary: "約794万円", term: "2026年3月期", note: "楽器で世界首位級・音響機器も展開する浜松のメーカー。平均勤続18.1年の長期雇用型。ヤマハ発動機（7272）は別法人", hd: false, field: "楽器・音響" },
  { rank: 23, slug: "citizen", name: "シチズン時計", salary: "約789万円", term: "2026年3月期", note: "事業持株会社の単体770名（本社機能中心）の値で、製造子会社の従業員は含まれない点に注意。2021年3月期593万円から上昇傾向", hd: true, field: "時計" },
  { rank: 24, slug: "nidec", name: "ニデック", salary: "約760万円", term: "2025年3月期", note: "精密小型モーターで世界首位。旧・日本電産。M&Aで事業領域を広げる、車載・家電・産業向けの総合モーターメーカー", hd: false, field: "精密・モーター" },
  { rank: 25, slug: "toyo-suisan", name: "東洋水産", salary: "約698万円", term: "2026年3月期", note: "「マルちゃん」ブランドの即席麺大手。北米の即席麺事業（Maruchan）が成長ドライバー。平均勤続が長い長期雇用型", hd: false, field: "食品" },
  { rank: 26, slug: "calbee", name: "カルビー", salary: "約685万円", term: "2026年3月期", note: "ポテトチップス・じゃがりこの菓子大手。2026年3月期に工場の無期契約社員を正社員等級へ統合し単体+1,421名となった影響で平均値が変動（待遇引き下げではない）", hd: false, field: "食品" },
  { rank: 27, slug: "muji", name: "良品計画（無印良品）", salary: "約670万円", term: "2025年8月期", note: "「無印良品」を展開する製造小売（SPA）。企画・生産管理から店舗運営まで担う。他のメーカーとは事業構造が異なる", hd: false, field: "製造小売" },
];

const faqData = [
  {
    q: "メーカーで平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した大手27社では、キーエンスが約2,178万円（2026年3月期）で最も高く、ディスコ約1,879万円・レーザーテック約1,681万円・東京エレクトロン約1,380万円が続きます（半導体関連が上位を占めます）。キーエンスは平均年齢35.0歳と若く成果連動の性格が強い点、ソニーグループの数値は持株会社単体（本社機能スタッフ中心）の平均である点など、数値の背景もあわせて確認するのがおすすめです。",
  },
  {
    q: "持株会社（HD）の平均年収はなぜ参考程度なのですか？",
    a: "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。ソニーグループのような持株会社体制では、単体＝本社機能スタッフ（経営企画・管理部門等）中心の平均となり、各事業会社（ソニー・ソニーセミコンダクタ等）の技術者の給与実態とは水準が異なります。中途で入る事業会社の提示額はエージェント経由で確認するのが確実です。",
  },
  {
    q: "メーカーの年収は業種でどのくらい差がありますか？",
    a: "有報ベースで見ると、FA・半導体製造装置（キーエンス2,178万・東京エレクトロン1,380万・ファナック1,144万円）が突出し、電機・自動車・精密（ソニー1,155万〜HOYA970万円）が上位、化学・電子部品・食品・家電・製造小売（信越化学898万〜良品計画670万円）が中位に分布します。高収益のFA・半導体・精密は付加価値とグローバル比率の高さ、食品は国内安定志向という違いが給与水準に表れています。",
  },
  {
    q: "メーカーへの転職難易度は高いですか？",
    a: "技術系（設計・開発・生産技術・品質保証）は近接する製造業での実務経験が最も評価され、経験者採用が中心です。事務系（企画・営業・管理）は募集枠が相対的に少なく競争があります。いずれも募集の有無・職種は時期により変動するため、各社の採用サイトとエージェントの併用が入口になります。詳しくは各社の転職ガイドをご覧ください。",
  },
  {
    q: "メーカーの中途採用はどこに応募すればいいですか？",
    a: "ソニーグループのような持株会社体制の企業は、採用が事業会社単位で行われることがあります。持株会社ではなく各事業会社の採用ページ、または転職エージェント経由での応募が入口です。技術系はメーカー・製造業に強いエージェント、ハイクラス層はスカウト型サービスの活用が有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "メーカーの年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/maker-salary/" },
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

export default function MakerSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "メーカーの年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            メーカーの年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手メーカー27社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。FA・半導体・電機・自動車・精密・化学・電子部品・食品・家電まで、持株会社単体と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 メーカー年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均）。「HD単体値」のソニーグループは持株会社本体（本社機能スタッフ中心）の平均で、事業会社の給与水準とは異なります。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有報値は本社機能スタッフ中心の平均。事業会社の技術職の水準は求人票・エージェント経由で確認するのが確実です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">ヤクルト（平均勤続約17.7年）のような長期雇用型は平均値が高く出ます。中途入社時の提示額とは別物です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">タカラトミーのように業績好調で平均給与が上昇する例があり、決算期の併記を確認しましょう。27社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>メーカー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          メーカーの技術系は非公開求人が多く、専門性の見せ方が選考を左右します。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手メーカーから中堅まで幅広くカバー。技術系・事務系の両方に強い。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。メーカーの同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・高度専門職クラスの市場価値把握に。ハイクラスのメーカー求人が集まる。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・エンジニア特化。メーカーの車載ソフト・組込・DX系の技術職に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">メーカーへの転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/game-salary/" className="btn-outline px-8 py-3">ゲーム会社の年収ランキングも見る</Link>
            <Link href="/company/it-consultant-salary/" className="btn-outline px-8 py-3">ITコンサル・SIerの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
