import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "商船三井の転職・中途採用【2026年10月】キャリア採用は年110名で採用の過半（公式データ）・平均年収1,659万円",
  description:
    "商船三井（単体）のキャリア採用は2025年度110名で、新規雇用194名の過半（公式 社会データ）。陸上職員1,300名・海上職員633名、自発的離職率1.6%。平均年収は約1,659万円（2026年3月期・有価証券報告書）。公式採用サイトのキャリア向け案内の状況も2026年10月15日に確認。",
  alternates: { canonical: "/company/shosen-mitsui/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "商船三井の転職・中途採用【2026年10月】キャリア採用は年110名で採用の過半（公式データ）・平均年収1,659万円",
    description: "商船三井のキャリア採用人数・比率（公式 社会データ）と平均年収（有価証券報告書）、公式採用サイトの状況（10/15確認）。",
  },
};

const faqData = [
  {
    q: "商船三井の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月22日確認）によると、平均年間給与は約1,659万円（2026年3月期・提出会社単体）です。1,675万円（2024年3月期）→1,436万円（2025年3月期）→1,659万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "商船三井は中途採用を行っていますか？",
    a: "行っています。公式の社会データ（単体）では、キャリア採用人数は76名（2022年度）→85名→96名→110名（2025年度）で、毎年の新規雇用の5割強を占めています（2025年度は、グループ会社から当社へ雇用を移管した社員を含む）。ただし2026年10月15日時点で、公式採用サイト（https://www.mol.co.jp/saiyou/）にはキャリア採用の募集要項・応募窓口が表示されておらず（キャリア求職者向けページへの導線が非表示）、現在どの職種を募集しているかは公式では確認できませんでした。",
  },
  {
    q: "商船三井はどんな会社ですか？",
    a: "LNG船・タンカーなどエネルギー輸送と海洋事業に強みを持つ海運大手です。本社は東京都港区虎ノ門2丁目1番1号にあります。単体の従業員数は1,933名（陸上職員1,300名・海上職員633名、2025年度末・公式 社会データ）です。",
  },
  {
    q: "商船三井の中途採用の難易度は？",
    a: "倍率は公表されていないため、数字で難易度は示せません。公式データで読めるのは、採用の過半がキャリア採用であること（2025年度 新規雇用194名中110名）と、単体の新規雇用者のうち35歳以上は43名（35〜40歳未満27名・40〜45歳未満1名・45〜50歳未満3名・50歳以上12名、2025年度）という年齢構成です。採用人数自体は単体で年100名前後と多くはありません。",
  },
  {
    q: "商船三井から転職する人は多いですか？（転職先）",
    a: "公式の社会データでは、単体の自発的離職率は1.1%（2022年度）→2.6%→1.7%→1.6%（2025年度）、新卒採用者の3年以内離職率は陸上職員0.7%・海上職員3.1%（2025年度）です。個別の転職先は公式には公表されていません。",
  },
  {
    q: "商船三井の平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月22日確認）によると、平均勤続年数は12.9年、平均年齢は38.4歳（2026年3月期・提出会社）です。",
  },
  {
    q: "海運会社の平均年収が高いのはなぜですか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、海運は市況（運賃・傭船料）の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、商船三井も1,675万円→1,436万円→1,659万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "商船三井の転職・中途採用【2026年10月】キャリア採用は年110名で採用の過半（公式データ）・平均年収1,659万円",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/shosen-mitsui/" },
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

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "商船三井" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            商船三井の転職・中途採用【2026年10月】キャリア採用は年110名で採用の過半（公式データ）・平均年収1,659万円
          </h1>
        <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/shosen-mitsui.jpg" alt="商船三井の採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">商船三井 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            商船三井（証券コード9104）は、LNG船・タンカーなどエネルギー輸送と海洋事業に強みを持つ海運大手です。
            本記事では、公式の社会データ（採用者数・離職率）と有価証券報告書をもとに、中途採用の規模・平均年収・応募窓口の状況を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">先に結論：商船三井への転職（公式で確認・2026年10月15日）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>中途の採用人数：</strong>単体のキャリア採用は<strong>110名</strong>（2025年度）。新規雇用194名の約57%で、2022年度以降毎年5割強がキャリア採用（76名／85名／96名／110名）。</li>
            <li><strong>応募窓口：</strong>公式採用サイトは新卒向けの内容が中心で、キャリア採用の募集要項・応募窓口は表示されていません（キャリア求職者向けページへの導線が非表示）。現在の募集職種は公式では確認できませんでした。</li>
            <li><strong>職種構成：</strong>単体1,933名のうち陸上職員1,300名・海上職員633名（2025年度末）。</li>
            <li><strong>定着：</strong>単体の自発的離職率1.6%、新卒3年以内離職率は陸上職員0.7%（2025年度）。</li>
            <li><strong>平均年収：</strong>約1,659万円（2026年3月期・有価証券報告書／提出会社。平均38.4歳・勤続12.9年）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.mol.co.jp/sustainability/data/pdf/social/data.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">商船三井 社会データ（PDF）</a>／<a href="https://www.mol.co.jp/saiyou/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">商船三井 採用サイト</a>／<a href="https://irbank.net/9104/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK（有価証券報告書の従業員データ）</a>。比率は公式の人数から当サイトが算出。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">商船三井転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">商船三井の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">商船三井の中途採用（人数・比率・応募窓口）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">商船三井で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">商船三井の選考について（公式で確認できる範囲）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">商船三井の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">商船三井転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">商船三井転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">商船三井転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,659万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月22日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>1,675万円（2024年3月期）→1,436万円（2025年3月期）→1,659万円（2026年3月期）と推移。海運5社で最高。2025年3月期にいったん▼239万円下げた後、最新期に+223万円と大きく反発。</li>
            <li>単体のキャリア採用は2025年度110名（新規雇用194名の約57%）。ただし公式採用サイトにキャリア採用の募集要項は表示されていません（2026年10月15日確認）。</li>
            <li>平均38.4歳・勤続12.9年。海運は市況により賞与が大きく変動するため、単年の平均額だけで判断しないことをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">商船三井の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社商船三井" },
                { label: "証券コード", value: "9104" },
                { label: "本社", value: "東京都港区虎ノ門2丁目1番1号" },
                { label: "事業内容", value: "LNG船・タンカーなどエネルギー輸送と海洋事業に強みを持つ海運大手" },
                { label: "平均年間給与", value: "約1,659万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月22日確認）" },
                { label: "直近3年の推移", value: "1,675万円（2024年3月期）→1,436万円（2025年3月期）→1,659万円（2026年3月期）" },
                { label: "平均年齢", value: "38.4歳（同・提出会社）" },
                { label: "平均勤続年数", value: "12.9年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月22日確認）に基づく提出会社単体・全従業員の平均です。海運会社は陸上勤務職と海上職で働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">商船三井の中途採用（人数・比率・応募窓口）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">公式の<a href="https://www.mol.co.jp/sustainability/data/pdf/social/data.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">社会データ（採用者数・定着率）</a>に載っている単体（株式会社商船三井のみ）の数字です（2026年10月15日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">単体</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2022年度</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2023年度</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2024年度</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2025年度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">新規雇用者数</td><td className="py-2 px-3">129名</td><td className="py-2 px-3">157名</td><td className="py-2 px-3">174名</td><td className="py-2 px-3">194名</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">うち新卒採用</td><td className="py-2 px-3">53名</td><td className="py-2 px-3">72名</td><td className="py-2 px-3">78名</td><td className="py-2 px-3">84名</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">うちキャリア採用</td><td className="py-2 px-3">76名</td><td className="py-2 px-3">85名</td><td className="py-2 px-3">96名</td><td className="py-2 px-3">110名</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">キャリア採用の割合（当サイト算出）</td><td className="py-2 px-3">58.9%</td><td className="py-2 px-3">54.1%</td><td className="py-2 px-3">55.2%</td><td className="py-2 px-3">56.7%</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">自発的離職率</td><td className="py-2 px-3">1.1%</td><td className="py-2 px-3">2.6%</td><td className="py-2 px-3">1.7%</td><td className="py-2 px-3">1.6%</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>2025年度のキャリア採用人数には、グループ会社から当社へ雇用を移管した社員が含まれます（公式注記）。</li>
            <li>2025年度の単体の新規雇用者を年齢別に見ると、25歳未満80名・25〜30歳未満36名・30〜35歳未満35名・35〜40歳未満27名・40〜45歳未満1名・45〜50歳未満3名・50歳以上12名です。</li>
            <li>単体の従業員は1,933名（陸上職員1,300名・海上職員633名、2025年度末）。</li>
            <li><strong>応募窓口：</strong>2026年10月15日時点で、<a href="https://www.mol.co.jp/saiyou/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>は新卒向けの採用メッセージ・社員インタビュー・キャリアパスが中心で、キャリア採用の募集要項・応募フォームは表示されていません。コーポレートサイトの採用ページ（https://www.mol.co.jp/recruit/）の「新卒・キャリア採用情報」もこの採用サイトにつながります。募集職種を知りたい場合は、転職エージェント経由で求人の有無を確認するのが現実的です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で商船三井のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">商船三井で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収1,659万円の水準", desc: "当サイト収録企業の中でも海運各社は最上位帯にあり、商船三井は海運5社中1位です。" },
            { title: "市況連動の振れ幅", desc: "1,675→1,436→1,659万円と年ごとに動きます。賞与比率が高い業界であることの表れです。" },
            { title: "陸上職と海上職で別の採用", desc: "単体1,933名のうち陸上職員1,300名・海上職員633名（2025年度末・公式）。どちらの職種で応募するかで求められる経験・資格が変わります。" },
            { title: "若手中心の採用", desc: "2025年度の単体の新規雇用194名のうち151名が35歳未満（公式 社会データ）。35歳以上の採用もありますが人数は少なめです。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">商船三井の選考について（公式で確認できる範囲）</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア採用の選考ステップ（書類・面接回数・適性検査の有無）は、2026年10月15日時点の公式採用サイトに記載がなく確認できませんでした。</li>
            <li>以前の当ページでは一般的な中途採用の流れ（エントリー→書類→面接→内定）を例示していましたが、商船三井の公式記載ではないため削除しました。</li>
            <li>求人が出ている場合の選考内容は、応募先の募集要項、または求人を紹介する転職エージェントで確認してください。</li>
          </ul>
        </div>

        <h2 id="s6">商船三井の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,659万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。海運は運賃市況の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均38.4歳・勤続12.9年。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2 id="s7">商船三井転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や、管理職・専門職の情報収集に適しています。" },
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

        <h2 id="s8">商船三井転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">商船三井転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kaiun-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">海運 年収ランキング</Link>
            <Link href="/company/nippon-yusen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">日本郵船転職ガイド</Link>
            <Link href="/company/kawasaki-kisen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">川崎汽船転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
