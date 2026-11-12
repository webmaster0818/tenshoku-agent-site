import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/kao/" },
  title: "花王への転職は難しい？中途採用・平均年収865万円・選考プロセスを解説【2026年】",
  description:
    "花王（証券コード4452）への転職を有価証券報告書と公式採用サイトで解説します。平均年間給与は8,654千円（約865万円・2025年12月期・提出会社）、平均勤続年数16.7年です。公式のキャリア採用データ（入社時年齢・入社後3年の定着率）、選考プロセス、待遇・勤務条件をまとめています（2026年11月12日確認）。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "花王への転職は難しい？中途採用・平均年収865万円・選考プロセスを解説【2026年】",
    description: "花王（4452）の平均年収・中途採用・選考プロセスを有価証券報告書と公式採用サイトで解説します。",
  },
};

const EDINET = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XT6G.pdf";
const CAREER = "https://www.kao-recruit.jp/career/";
const DATA = "https://www.kao-recruit.jp/career/data.html";
const PROCESS = "https://www.kao-recruit.jp/career/process.html";
const TREATMENT = "https://www.kao-recruit.jp/career/treatment.html";

const faqData = [
  {
    q: "花王の平均年収はいくらですか？",
    a: "有価証券報告書（第120期・2025年12月期）によると、提出会社の平均年間給与は8,654千円（約865万円）です。平均年齢40.6歳、平均勤続年数16.7年、従業員数7,761人の平均で、賞与および基準外賃金を含みます（2026年11月12日にEDINETの原本で確認）。",
  },
  {
    q: "花王は中途採用を行っていますか？",
    a: "はい。公式採用サイトに「キャリア採用」のページがあり、現在募集中の求人への応募とキャリア登録ができます。公式サイトでは、人材紹介会社（転職エージェント等）を通じた応募も案内されており、紹介会社ごとに取り扱う職種は異なると記載されています。",
  },
  {
    q: "花王のキャリア入社者は何歳くらいが多いですか？",
    a: "公式のキャリア採用データでは、キャリア入社時の年齢は20代10%、30代前半35%、30代後半27%、40代26%です（2022〜2024年入社者・花王就業1年以上、2025年調べ）。30代が全体の6割強を占めています。",
  },
  {
    q: "中途入社者の定着率はどのくらいですか？",
    a: "公式のキャリア採用データでは、キャリア入社者の入社後3年の定着率は95%です（2021〜2022年入社者）。花王に転職しての満足度は「満足」71%と掲載されています（2021〜2023年入社者・任意回答、2024年調べ）。",
  },
  {
    q: "選考の流れと期間を教えてください。",
    a: "公式の選考プロセスでは、書類選考（2週間前後）、面接（1ヶ月前後・原則2回）、内定の順です。面接期間中に適性検査を受検します。入社日は内定日から約2か月後で、相談に応じると記載されています。",
  },
  {
    q: "賞与や年間休日はどうなっていますか？",
    a: "公式の待遇・勤務条件（正規社員の求人の場合）では、基本賃金は面接時の評価結果をもとに個別設定、昇給は年1回、賞与は年3回（6月・12月・3月）です。年間休日は124日（2025年実績）、標準勤務時間は8:30〜17:00でフレックスタイム制が導入されています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "花王への転職ガイド（有価証券報告書・公式採用サイトにもとづく解説）",
  dateModified: "2026-11-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kao/" },
  inLanguage: "ja",
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "花王" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          花王への転職は難しい？中途採用・平均年収865万円・選考プロセスを解説【2026年】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            花王（証券コード4452）の平均年間給与は<strong>8,654千円（約865万円）</strong>、平均勤続年数は<strong>16.7年</strong>です（2025年12月期・有価証券報告書・提出会社）。公式採用サイトでは、キャリア入社者の<strong>入社後3年の定着率95%</strong>、入社時年齢の分布などのデータが公開されています。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            本ページでは、有価証券報告書の原本と公式採用サイトで確認した内容のみを掲載しています。確認日は2026年11月12日です。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">花王転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">花王の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">事業別の従業員数と人的資本データ</a></li>
            <li><a href="#s4" className="text-teal hover:underline">公式のキャリア採用データ</a></li>
            <li><a href="#s5" className="text-teal hover:underline">花王の選考プロセス（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">待遇・勤務条件（公式）</a></li>
            <li><a href="#s7" className="text-teal hover:underline">化粧品・日用品メーカーとの平均年収の比較</a></li>
            <li><a href="#s8" className="text-teal hover:underline">花王転職で活用したい転職エージェント</a></li>
            <li><a href="#s9" className="text-teal hover:underline">花王転職 よくある質問</a></li>
            <li><a href="#s10" className="text-teal hover:underline">出典</a></li>
          </ol>
        </nav>

        <h2 id="s1">花王転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は8,654千円（約865万円）、平均年齢40.6歳、平均勤続年数16.7年です（2025年12月期・提出会社7,761人）。</li>
            <li>キャリア入社時の年齢は30代前半35%・30代後半27%・40代26%・20代10%で、30代が中心です（公式データ）。</li>
            <li>キャリア入社者の入社後3年の定着率は95%と公表されています（2021〜2022年入社者）。</li>
            <li>応募は公式サイト（募集中の求人・キャリア登録）と人材紹介会社経由の2通りで、面接は原則2回です。</li>
          </ul>
        </div>

        <h2 id="s2">花王の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "花王株式会社" },
                { label: "証券コード", value: "4452（東証プライム）" },
                { label: "本店所在地", value: "東京都中央区日本橋茅場町一丁目14番10号" },
                { label: "沿革", value: "1887年に洋小間物商長瀬商店として創業し、1890年に「花王石鹸」を発売。会社設立は1940年5月です。" },
                { label: "平均年間給与", value: "8,654千円（約865万円）／2025年12月期・提出会社" },
                { label: "平均年齢", value: "40.6歳（同）" },
                { label: "平均勤続年数", value: "16.7年（同）" },
                { label: "従業員数", value: "提出会社 7,761人／連結 31,514人（2025年12月31日現在・就業人員）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※第120期有価証券報告書（2026年3月25日提出）の「従業員の状況」から転記しています。原本の注記では、従業員にはフルタイムの無期化した非正規雇用の従業員等を含み、平均年間給与は賞与および基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。
        </p>

        <h2 id="s3">事業別の従業員数と人的資本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">セグメント</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">提出会社の従業員数</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["グローバルコンシューマーケア事業", "5,398人"],
                ["（うち）ハイジーンリビングケア事業", "2,186人"],
                ["（うち）ヘルスビューティケア事業", "1,793人"],
                ["（うち）化粧品事業", "1,256人"],
                ["（うち）ビジネスコネクティッド事業", "163人"],
                ["ケミカル事業", "1,177人"],
                ["全社（共通）", "1,186人"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-navy">{r[0]}</th>
                  <td className="py-3 px-3 text-text-secondary">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "管理職に占める女性従業員の割合", value: "28.7%" },
                { label: "男性の育児休職取得率", value: "90.1%" },
                { label: "男女の賃金格差（男性＝100）", value: "全従業員 90.8%／従業員 88.7%／臨時雇用者 90.4%" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/2">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※いずれも有価証券報告書の記載値（当社＝提出会社）です。原本の注記では、「従業員」は正規雇用の従業員およびフルタイムの無期化した非正規雇用の従業員、「全従業員」は従業員と臨時雇用者を合わせた値です。
        </p>

        <h2 id="s4">公式のキャリア採用データ</h2>
        <p className="text-sm text-text-secondary mb-4">
          花王は公式採用サイトの<a href={DATA} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用データ</a>で、中途入社者の属性やアンケート結果を公開しています。2026年11月12日に確認した値は以下のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">項目</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">公式掲載値</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">対象</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["キャリア入社時年齢", "20代 10%／30代前半 35%／30代後半 27%／40代 26%", "2022〜2024年入社者・花王就業1年以上（2025年調べ）"],
                ["転職活動を始めた理由（上位）", "1位 やりがいのある仕事がしたかった 40%／2位 自身の専門性を高めたかった 33%／3位 働き方を見直したかった 28%／4位 年収をアップさせたかった 20%／5位 職場環境の良い企業で働きたかった 15%", "2021〜2023年入社者・花王就業1年以上・任意回答・重複回答あり（2024年調べ）"],
                ["花王に転職しての満足度", "満足 71%／どちらとも言えない 20%／不満 9%", "2021〜2023年入社者・花王就業1年以上・任意回答（2024年調べ）"],
                ["入社後3年の定着率", "定着 95%／退職 5%", "2021〜2022年入社者"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-navy align-top">{r[0]}</th>
                  <td className="py-3 px-3 text-text-secondary">{r[1]}</td>
                  <td className="py-3 px-3 text-text-secondary text-xs">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※花王が自社のキャリア入社者を対象に集計した値で、当サイトは公式ページの表記を転記しています。満足度・転職理由は任意回答のアンケート結果です。
        </p>

        <h2 id="s5">花王の選考プロセス（公式）</h2>
        <p className="text-sm text-text-muted mb-4">※公式の<a href={PROCESS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">応募方法・選考プロセス</a>（一般の方向け）を要約しています（2026年11月12日確認）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募", desc: "公式サイトのキャリア登録（募集中の求人・その他キャリア登録）による応募と、人材紹介会社を通じた応募の2通りがあります。キャリア登録の場合、経験・スキルに合う募集があれば採用担当者等から連絡があります。" },
            { step: 2, title: "書類選考（2週間前後）", desc: "キャリア登録内容、または履歴書・職務経歴書などで選考します。キャリア登録の場合は、選考に進む場合のみ連絡があります。" },
            { step: 3, title: "面接（1ヶ月前後）", desc: "面接は原則2回で、対面とオンラインのいずれかで実施されます（職種により異なります）。面接期間中に適性検査を受検します。" },
            { step: 4, title: "内定", desc: "入社条件の提示に同意すると内定となります。入社日は内定日から約2か月後で、相談も受け付けています。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="s6">待遇・勤務条件（公式）</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>賃金：基本賃金は面接時の評価結果をもとに個別設定、昇給は年1回、賞与は年3回（6月・12月・3月）です。</li>
            <li>契約期間の定めはなく、試用期間はありません。</li>
            <li>標準勤務時間は8:30〜17:00（7.5時間）で、フレックスタイム制（フレキシブルタイム7時〜20時）が導入されています。</li>
            <li>年間休日は124日（2025年実績）で、完全週休2日制（土・日）、祝日、年末年始休日などです。</li>
            <li>基準外手当として、時間外勤務手当・休日勤務手当・通勤費補助・住宅手当などが記載されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">※公式の<a href={TREATMENT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">待遇・勤務条件</a>（正規社員の求人の場合）の記載です（2026年11月12日確認）。個別の募集要項で条件が異なる場合があります。</p>
        </div>

        <h2 id="s7">化粧品・日用品メーカーとの平均年収の比較</h2>
        <p className="text-sm text-text-secondary mb-8">
          当サイトの<Link href="/company/keshohin-salary/" className="text-teal font-bold hover:underline">化粧品・日用品メーカーの年収ランキング</Link>（8社・有価証券報告書の原本で比較）では、花王の約865万円はユニ・チャーム（約875万円）に次ぐ2番目の水準です。同ランキングでは、ライオン 約711万円、資生堂 約708万円も掲載しています。花王は8社の中で提出会社の従業員数が最も多い会社です。
        </p>

        <h2 id="s8">花王転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">花王の公式サイトでは、人材紹介会社ごとに取り扱う求人職種が異なると案内されています。複数の転職エージェントを併用すると、取り扱い職種を比較できます。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数の多い総合型の転職エージェントです。消費財メーカーの求人を幅広く比較できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社の募集も含めて比較検討できます。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "管理職・専門職向けの転職エージェントです。研究開発・品質保証・薬事などの専門職を検討する方に適しています。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や管理職・専門職の情報収集に利用できます。" },
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

        <h2 id="s9">花王転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2 id="s10">出典</h2>
        <ul className="text-xs text-text-muted space-y-1 mb-8 list-disc pl-5">
          <li><a href={EDINET} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">花王株式会社 第120期 有価証券報告書</a>（2026年3月25日提出・EDINET書類管理番号 S100XT6G）／2026年11月12日確認</li>
          <li><a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">花王 キャリア採用</a>／2026年11月12日確認</li>
          <li><a href={DATA} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">花王のキャリア採用データ</a>／2026年11月12日確認</li>
          <li><a href={PROCESS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">花王 応募方法・選考プロセス</a>／2026年11月12日確認</li>
          <li><a href={TREATMENT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">花王 待遇・勤務条件</a>／2026年11月12日確認</li>
        </ul>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">花王への転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの条件は、公式の募集要項または転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/keshohin-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">化粧品・日用品メーカーの年収ランキング</Link>
            <Link href="/company/kagaku-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">化学業界の年収ランキング</Link>
            <Link href="/company/pigeon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ピジョン転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
