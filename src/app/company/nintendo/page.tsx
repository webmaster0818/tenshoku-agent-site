import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/nintendo/" },
  title: "任天堂の中途採用の選考フロー・面接【2026年10月】公式の採用プロセス・募集職種・キャリア採用比率34%",
  description:
    "任天堂のキャリア採用の選考フローは、Web応募（結果連絡まで約1カ月）→作品選考（職種により）→面接（複数回・平日）→内定で、応募から内定まで2〜3か月程度です（公式・2026年10月15日確認）。募集職種10カテゴリ、キャリア採用比率34％（2025年度）、平均年間給与982万円、面接の公開体験談も整理しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "任天堂の中途採用の選考フロー・面接【2026年10月】公式の採用プロセス・募集職種・キャリア採用比率34%",
    description:
      "任天堂キャリア採用の選考フロー・面接・募集職種・キャリア採用比率を公式情報（10/15確認）にもとづいて整理しています。",
  },
};

const faqData = [
  {
    q: "任天堂の中途採用は行っていますか？",
    a: "はい。任天堂は「キャリア採用」として中途採用を行っており、公式サイトのキャリア採用募集要項ページで募集職種を確認できます。正規雇用労働者のキャリア採用比率は2023年度34％、2024年度45％、2025年度34％と公表されています（任天堂 採用情報「就業情報」、2026年10月14日確認）。",
  },
  {
    q: "ゲーム業界未経験でも任天堂に応募できますか？",
    a: "任天堂公式のキャリア採用Q&Aでは「必ずしもゲーム業界で働いた経験のある方のみを求めておりません」とされており、適性は各募集要項で確認するよう案内されています。また、資格・年齢などの制限は特に設けず、職務経歴や専門性などを考慮して総合的に判断するとされています。",
  },
  {
    q: "任天堂の年収は高いですか？",
    a: "任天堂の公式採用情報によると、平均年間給与は982万円（2026年3月現在 正社員、基準外賃金および賞与を含む税込支給額）で、平均年齢は40.5才、平均勤続年数は14.6年です。",
  },
  {
    q: "任天堂の勤務地はどこですか？",
    a: "本社は京都市南区です。キャリア採用の募集職種は「京都勤務」「東京勤務」の区分で掲載されています。また、任天堂（日本）は原則出社の方針を採用しています（いずれも公式採用情報、2026年10月14日確認）。",
  },
  {
    q: "任天堂の選考にはどのくらいの期間がかかりますか？",
    a: "公式の採用プロセスでは、応募から内定まで2〜3か月程度とされています。Web応募の結果連絡までは約1カ月で、職種により作品選考があり、面接は複数回を予定と記載されています。",
  },
  {
    q: "任天堂の中途採用に筆記試験・適性検査はありますか？",
    a: "公式の採用プロセスに記載されているのは「Web応募」「作品選考（職種により必要性に応じて実施）」「面接（複数回を予定）」「内定」で、筆記試験や適性検査の記載はありません（2026年10月15日確認）。Q&Aでも「応募職種によって多少の違いがあります」とされているため、応募後の案内メールでご確認ください。",
  },
  {
    q: "任天堂の法務部などの管理部門は中途採用がありますか？",
    a: "公式Q&Aでは、募集職種一覧以外の職種は募集しておらず、新たな職種は都度掲載、要員を満たした職種は一覧から削除するとされています。管理部門の募集も、公式の募集職種一覧に掲載されている期間に限られます。なお、ワンキャリア転職の選考体験談（2026年10月15日閲覧）には、法務・コンプライアンス職や知的財産職の面接で、担当した訴訟案件や法務チームのマネジメント経験を聞かれたという投稿があります（投稿者個人の体験で、公式情報ではありません）。",
  },
  {
    q: "任天堂の求人に複数応募したり、再応募したりできますか？",
    a: "公式Q&Aでは、別の職種または事業所への重複応募は控えるよう案内されています。また、不合格後の再応募は1年以内は控えるよう記載されています。応募はホームページ上の応募フォームのみで受け付けています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "任天堂の中途採用の選考フロー・面接【2026年10月】公式の採用プロセス・募集職種・キャリア採用比率34%",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nintendo/" },
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

export default function NintendoCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "任天堂" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              任天堂の中途採用の選考フロー・面接【2026年10月】公式の採用プロセス・募集職種・キャリア採用比率34%
            </h1>
          </div>
        <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/nintendo.jpg" alt="任天堂の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">任天堂 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            任天堂は、京都に本社を置き、ゲーム機・ゲームソフトを中心に「娯楽」を届ける会社です。
            本記事では、任天堂が公式採用サイトで公表している採用プロセス・募集要項・キャリア採用比率をもとに、中途採用の選考フローと面接の準備を解説します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">任天堂の中途採用の選考フローの要点（公式情報・2026年10月15日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>流れ：</strong>キャリア採用Web応募 → 作品選考（職種により必要性に応じて実施）→ 面接（複数回を予定）→ 内定の順に進みます。</li>
            <li><strong>期間：</strong>Web応募の結果連絡まで約1カ月、応募から内定まで2〜3か月程度です。結果は合否にかかわらずメールで通知されます。</li>
            <li><strong>面接：</strong>当社営業日（平日）に実施され、日時はできる限り調整するとされています。筆記試験・適性検査は公式の採用プロセスに記載がありません。</li>
            <li><strong>応募条件：</strong>資格・年齢の制限は特になく、ゲーム業界の経験は必須ではありません。別職種・別事業所への重複応募は不可とされ、不合格後1年以内の再応募は控えるよう案内されています。</li>
            <li><strong>募集：</strong>10カテゴリが京都勤務／東京勤務の区分で掲載されています。直近の掲載はデザイナー（京都勤務）の「グラフィックデザイナー（広告）」（2026年9月4日）・「立体造形物デザイナー（協業監修）」（8月28日）です。</li>
            <li><strong>中途の割合：</strong>正規雇用のキャリア採用比率は34％（2023年度）→45％（2024年度）→34％（2025年度）と推移しています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.nintendo.co.jp/jobs/career/process/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">任天堂 キャリア採用「採用プロセス」</a>／<a href="https://www.nintendo.co.jp/jobs/career/q_and_a/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「Q&amp;A」</a>／<a href="https://www.nintendo.co.jp/jobs/career/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「募集要項」</a>／<a href="https://www.nintendo.co.jp/jobs/environment/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「就業情報」</a>。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">任天堂の会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">任天堂の平均年収・キャリア採用比率</a></li>
            <li><a href="#s3" className="text-teal hover:underline">任天堂の中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">任天堂の中途採用の選考フロー（公式）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">任天堂の面接で聞かれること・対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">任天堂転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">任天堂転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">任天堂の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "任天堂株式会社（Nintendo Co., Ltd.）" },
                { label: "本社", value: "京都府京都市南区上鳥羽鉾立町11-1" },
                { label: "設立", value: "1889年（創業） / 1947年（株式会社設立）" },
                { label: "従業員数", value: "3,084名（2026年3月現在 正社員・任天堂株式会社）" },
                { label: "平均年収", value: "982万円（2026年3月現在 正社員・2026年3月期 有価証券報告書）" },
                { label: "事業内容", value: "家庭用ゲーム機・ソフトウェアの開発・製造・販売（Nintendo Switch、ゲームソフト、モバイルアプリ等）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※最新の情報は公式サイトにてご確認ください。
        </p>

        {/* 社員データ */}
        <h2 id="s2">任天堂の平均年収・キャリア採用比率</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            任天堂株式会社が公式採用サイトで公表している社員データです（2026年3月現在 正社員）。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "平均年間給与", value: "982万円" },
              { label: "平均年齢", value: "40.5才" },
              { label: "平均勤続年数", value: "14.6年" },
              { label: "従業員数", value: "3,084名" },
            ].map((d) => (
              <div key={d.label} className="rounded-xl bg-warm-gray p-3 text-center">
                <p className="text-xs text-text-muted">{d.label}</p>
                <p className="text-lg font-extrabold text-navy">{d.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-navy mb-2">正規雇用労働者のキャリア採用比率（任天堂株式会社）</p>
          <ul className="space-y-1 text-sm text-text-secondary mb-4">
            <li>2023年度（2023/4-2024/3）：34％</li>
            <li>2024年度（2024/4-2025/3）：45％</li>
            <li>2025年度（2025/4-2026/3）：34％</li>
          </ul>
          <p className="text-sm font-bold text-navy mb-2">平均年間給与・従業員数の推移（各年3月期 有価証券報告書）</p>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>2022年3月期：988万円（従業員数2,634名）</li>
            <li>2023年3月期：985万円（従業員数2,779名）</li>
            <li>2024年3月期：962万円（従業員数2,814名）</li>
            <li>2025年3月期：966万円（従業員数2,962名）</li>
            <li>2026年3月期：982万円（従業員数3,084名）</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">
            正社員数は2022年3月期の2,634名から2026年3月期の3,084名へ増えており、直近3年度は正規雇用の採用のうち3割強〜4割強をキャリア採用が占めています。
          </p>
          <p className="text-xs text-text-muted mt-4">
            出典：
            <a href="https://www.nintendo.co.jp/jobs/environment/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">任天堂 採用情報「キャリア採用 就業情報」</a>
            、任天堂 <a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100Y9NX.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年3月期、2026年6月25日提出。平均年間給与9,824,708円・平均年齢40.5歳・平均勤続年数14.6年・従業員数3,084人が上記と一致することをEDINETで2026年10月23日確認）。2025年3月期以前の推移は
            <a href="https://irbank.net/7974/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK 従業員データ</a>
            の掲載値（2026年10月14日確認）です。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">任天堂の中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">任天堂への応募は公式の応募フォームから行います。あわせてIT・Web系の他社求人も非公開分まで含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />などの転職エージェントを併用する方法が有効です（特徴は<Link href="/review/unison-career/" className="text-teal hover:underline">ユニゾンキャリアの口コミ・評判</Link>で確認できます）。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            任天堂は「キャリア採用」の名称で中途採用を実施しており、
            <a
              href="https://www.nintendo.co.jp/jobs/career/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              公式のキャリア採用 募集要項ページ
            </a>
            で募集職種を確認できます。応募は公式サイトの「キャリア採用Web応募」からのWebエントリーです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種カテゴリ（公式表記のまま・2026年10月14日確認時点）: 「デザイナー」「ソフトウェアエンジニア」「コーポレートIT」「ハードウェアエンジニア」「プランナー／ディレクター／プロダクトマネージャー」「サウンドクリエイター」「プロジェクトマネージャー」「マーケティング／プロモーション／ブランディング」「ウェブサイト企画・制作・運営」「コーポレートスタッフ」の全10カテゴリです。</li>
            <li>各職種とも「京都勤務」「東京勤務」の2区分で掲載されています。2026年10月14日確認時点で募集中だったのはデザイナー（京都勤務）の「グラフィックデザイナー（広告）」「立体造形物デザイナー（協業監修）」でした。募集職種は随時更新されるため、定期的にご確認いただくことをおすすめします。</li>
            <li>公式の採用プロセスでは、Web応募の結果連絡まで約1カ月、応募から内定までは2〜3か月程度とされています。職種により作品選考があり、面接は複数回を予定していると記載されています。</li>
            <li>「現在任天堂グループに在籍中の方のご応募はご遠慮ください」の注記があります。職種別説明会の情報が掲載されることもあり、2026年9月18日にはデザイナー職のキャリア採用説明会の情報が掲載されました。</li>
          </ul>
          <h3 className="font-bold text-navy mt-5 mb-2">募集要項の例：グラフィックデザイナー（広告）・京都勤務（2026年10月15日確認）</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>業務：</strong>任天堂および任天堂商品の広告宣伝物（ポスター・店頭冊子・POP、交通/雑誌/デジタル広告、キャンペーンビジュアルやロゴ）、イベントの会場装飾・パンフレット・ノベルティ、アプリ『Nintendo Today!』のグラフィックデザインです。広告宣伝物の多くを社内で制作していると記載されています。</li>
            <li><strong>適性：</strong>広告代理店やデザイン制作会社でのグラフィックデザイン実務経験とDTPの入稿データ制作経験が豊富な方、ゲームに限らないエンターテインメント分野での実務経験がある方とされています。Adobe Illustrator・Photoshopの習得が必須で、日本語ネイティブまたはJLPT N1相当以上が求められます。</li>
            <li><strong>作品の提出：</strong>応募フォームとあわせて、実力をアピールできる作品と作品の説明資料（作品説明・制作期間・担当箇所）を提出します。提出方法はエントリー時にメールで案内されます。</li>
            <li><strong>勤務：</strong>フレックスタイム制（標準7時間45分・コアタイム10:00〜15:00）で、対面のコミュニケーションを重視し原則出社としています。年間休日は125日（2026年度）です。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年10月14日に公式採用サイトで確認しました。募集状況は変動するため、最新の情報は公式サイトにてご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">任天堂の中途採用の選考フロー（公式）</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "Web応募",
              desc: "公式サイトの「キャリア採用Web応募」から応募します。登録したメールアドレスに応募完了メールが届き、結果連絡までは約1カ月かかります。応募はホームページ上の応募フォームのみで受け付けています。",
            },
            {
              step: 2,
              title: "作品選考（職種による）",
              desc: "職種により、必要性に応じて作品選考が実施されます。デザイナーなどクリエイティブ職を志望する場合は、事前に作品をまとめておくことをおすすめします。",
            },
            {
              step: 3,
              title: "面接（複数回）",
              desc: "面接は複数回が予定されています。面接は当社営業日（平日）に実施され、日時はできる限り調整するとされています。",
            },
            {
              step: 4,
              title: "内定",
              desc: "応募から内定までは2〜3か月程度が目安です。選考結果は合否にかかわらずメールで通知されます。入社日は相談のうえ決定されます。",
            },
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
        <p className="text-xs text-text-muted mb-8">
          出典：
          <a href="https://www.nintendo.co.jp/jobs/career/process/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">任天堂 キャリア採用「採用プロセス」</a>
          、
          <a href="https://www.nintendo.co.jp/jobs/career/q_and_a/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用「Q&amp;A」</a>
          （2026年10月14日確認）。応募職種によって多少の違いがあります。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">任天堂の面接で聞かれること・対策ポイント</h2>
        <div className="glass-card p-6 mb-6">
          <p className="text-sm text-text-secondary mb-3">任天堂は面接の質問内容を公表していません。第三者の体験談として、ワンキャリア転職の任天堂の選考体験談ページ（2026年10月15日閲覧）には面接に関する投稿が21件掲載されており、閲覧できる範囲では次のような傾向でした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>選考の段階は「一次面接 → 最終面接」の投稿が多く、海外営業では二次面接を含む投稿もあります。</li>
            <li>法務・コンプライアンス職では、海外訴訟で担当した案件の詳細や、法務チームのマネジメント経験を聞かれたという投稿があります。</li>
            <li>知的財産職では、弁護士として関わった知的財産管理の案件について聞かれたという投稿があります。</li>
            <li>総務職では、これまでの経歴を踏まえて任天堂でどう働くかを聞かれたという投稿があります。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://plus.onecareer.jp/companies/40/selection_reports/interview" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ワンキャリア転職「任天堂の面接」</a>。投稿者個人の体験で、職種・時期により異なります。質問と回答の全文は会員限定のため、ここでは閲覧できた範囲の傾向のみ記載しています。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "経営方針への理解",
              desc: "任天堂は「娯楽」を通じて世界中の人々を笑顔にしつづける会社でありたいとし、「任天堂IPのファン拡大」と「長期間にわたるお客様との関係づくり」を指針に掲げています（公式「任天堂の人材に対する考え方」）。この方針と自身の経験を結びつけて説明できるよう、準備しておくことをおすすめします。",
            },
            {
              title: "職種ごとの専門性と作品",
              desc: "応募は職務経歴や専門性などを考慮して総合的に判断されます。募集要項に書かれた業務内容と応募資格を読み込み、作品選考がある職種ではポートフォリオを充実させることをおすすめします。",
            },
            {
              title: "「任天堂DNA」に沿ったエピソード",
              desc: "任天堂は人材に対する考え方として、独創・柔軟・誠実からなる「任天堂DNA」を重要視しています。それぞれに当てはまる過去の経験を、具体的なエピソードとして準備しておくことをおすすめします。",
            },
            {
              title: "チームワーク・コミュニケーション力",
              desc: "任天堂は「主体的に当事者として行動する」「柔軟に変化に対応しながら挑戦し続ける」「周囲の人たちに理解と共感を得ることができる」人材の育成を掲げ、チームでの協働を重視しています。異なる職種のメンバーと連携して成果を出した経験を伝えることが有効です。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：
          <a href="https://www.nintendo.co.jp/jobs/human-capital/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">任天堂 採用情報「任天堂の人材に対する考え方」</a>
          （2026年10月14日確認）
        </p>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">任天堂転職におすすめの転職エージェント5社</h2>
        <p className="text-sm text-text-secondary mb-4">
          任天堂のキャリア採用は公式サイトの応募フォームから受け付けています。転職エージェントは、職務経歴書のブラッシュアップや面接練習、ゲーム業界・IT業界の他社求人との比較に活用すると、準備の質を高められます。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "大手総合型の転職エージェントです。幅広い業界・職種を扱っており、ゲーム業界を含めた転職先の比較や、書類・面接の準備を相談したい方に向いています。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、自分の市場価値を確かめながら情報収集できます。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "管理職・専門職や外資系・グローバル企業の転職支援を得意とするハイクラス向けエージェントです。専門性を活かしたキャリアを相談したい方におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "転職サイトとエージェントサービスを1つの会員登録で併用できる総合型サービスです。自分で求人を探しながら、アドバイザーにも相談したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援を中心とした総合型エージェントです。書類作成や面接対策のサポートを受けながら、初めての転職を進めたい方におすすめです。",
            },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link
                  href={agent.href}
                  className="text-teal text-sm hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="s7">任天堂転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            任天堂転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用し、十分に準備したうえで選考に臨むことをおすすめします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連企業ガイド */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の企業の転職ガイド</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/game-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ゲーム会社 年収ランキング</Link>
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
            </Link>
            <Link href="/company/accenture/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              アクセンチュア転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
