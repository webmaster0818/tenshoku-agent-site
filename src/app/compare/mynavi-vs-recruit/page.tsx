import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マイナビエージェント vs リクルートエージェント 徹底比較【2026年】20代はどっち？",
  description:
    "マイナビエージェントとリクルートエージェントを10項目で徹底比較。求人数・サポートの手厚さ・対応年代の違いを整理し、20代・第二新卒はどちらが向くか、併用すべきかを解説します。",
  openGraph: {
    title: "マイナビエージェント vs リクルートエージェント 徹底比較【2026年】",
    description: "マイナビとリクルートの違いを10項目で比較。20代はどちらが向くか解説。",
  },
};

const faqData = [
  { q: "マイナビエージェントとリクルートエージェントはどちらが求人数が多いですか？", a: "求人数はリクルートエージェントが圧倒的に多く、公開求人約60万件・非公開求人約30万件を保有しています。マイナビエージェントは求人数では及びませんが、20代・第二新卒向けの求人と、一人ひとりへの手厚いサポートに強みがあります。" },
  { q: "20代・第二新卒はどちらがおすすめですか？", a: "20代・第二新卒で初めての転職なら、サポートが手厚いマイナビエージェントを軸に、求人数の多いリクルートエージェントを併用するのがおすすめです。マイナビは20代の転職事情に精通したアドバイザーが在籍し、書類添削・面接対策も丁寧と評価されています。" },
  { q: "両方に登録しても問題ありませんか？", a: "問題ありません。求人数のリクルート、サポートのマイナビと強みが異なるため、併用することで求人の幅とサポートの質を両取りできます。アドバイザーとの相性も比較できます。" },
  { q: "ハイクラス・管理職の転職ならどちらですか？", a: "どちらも対応していますが、より高年収・管理職を狙うならリクルートエージェント（求人数）に加え、ビズリーチやJACリクルートメントの併用も検討するとよいでしょう。マイナビは20〜30代の若手〜中堅層に強い傾向です。" },
  { q: "サポートの手厚さに違いはありますか？", a: "マイナビエージェントは『サポートが丁寧』という評価が多く、初めての転職や20代に向いています。リクルートエージェントは求人提案のスピードと量に強みがあり、効率よく多くの選択肢を比較したい人に向いています。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const comparisonItems = [
  { item: "運営会社", mynavi: "株式会社マイナビ", recruit: "株式会社リクルート" },
  { item: "公開求人数", mynavi: "非公開（中小〜大手まで幅広く保有）", recruit: "約60万件" },
  { item: "非公開求人", mynavi: "あり（豊富）", recruit: "約30万件" },
  { item: "得意な年代", mynavi: "20代・第二新卒・30代前半", recruit: "全年代" },
  { item: "強み", mynavi: "手厚いサポート・20代の転職支援", recruit: "求人数No.1・提案スピード" },
  { item: "対応エリア", mynavi: "全国（主要都市中心）", recruit: "全国＋海外" },
  { item: "面談方法", mynavi: "対面・オンライン・電話", recruit: "対面・オンライン・電話" },
  { item: "書類添削", mynavi: "あり（丁寧と評判）", recruit: "あり" },
  { item: "面接対策", mynavi: "あり（丁寧と評判）", recruit: "あり" },
  { item: "料金", mynavi: "無料", recruit: "無料" },
];

export default function MynaviVsRecruitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "比較", href: "/" }, { name: "マイナビエージェント vs リクルートエージェント" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            マイナビエージェント vs リクルートエージェント 徹底比較
          </h1>
          <p className="text-text-secondary leading-relaxed">
            「サポートのマイナビ」と「求人数のリクルート」、20代に人気の2大エージェントを10項目で比較。
            それぞれの強みと、20代・第二新卒はどちらを選ぶべきかを解説します。
          </p>
        </div>

        <h2>10項目比較表</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium rounded-tl-lg">比較項目</th>
                <th className="p-3 text-left font-medium">マイナビエージェント</th>
                <th className="p-3 text-left font-medium rounded-tr-lg">リクルートエージェント</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray/50" : ""}>
                  <td className="p-3 font-medium text-navy border-b border-border">{row.item}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.mynavi}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.recruit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>使い分けガイド</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">マイナビエージェントが向いている人</h3>
            <ul className="space-y-2">
              {["20代・第二新卒で初めて転職する", "手厚く丁寧なサポートを受けたい", "書類添削・面接対策をしっかりしたい", "じっくり相談しながら進めたい", "中小〜優良企業も視野に入れたい"].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-600 mb-3">リクルートエージェントが向いている人</h3>
            <ul className="space-y-2">
              {["とにかく多くの求人から選びたい", "非公開求人にアクセスしたい", "提案スピードを重視する", "地方・海外の求人も探したい", "30代以上・ハイクラスも検討したい"].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2"><span className="text-blue-500 mt-0.5 flex-shrink-0">&#10003;</span>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2>属性別「どっちが向く？」早見表</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium rounded-tl-lg">あなたのタイプ</th>
                <th className="p-3 text-left font-medium rounded-tr-lg">向いているのは</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["20代前半・社会人経験が浅い", "マイナビエージェント（手厚いサポート）"],
                ["第二新卒・初めての転職", "マイナビエージェント"],
                ["未経験職種に挑戦したい", "マイナビエージェント＋リクルート併用"],
                ["とにかく求人数・選択肢を増やしたい", "リクルートエージェント"],
                ["30代以上・ハイクラスも視野", "リクルートエージェント（＋ビズリーチ/JAC）"],
                ["地方・海外の求人も探したい", "リクルートエージェント"],
                ["提案スピード重視で効率的に進めたい", "リクルートエージェント"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray/50" : ""}>
                  <td className="p-3 font-medium text-navy border-b border-border">{row[0]}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>結論：20代は「マイナビ軸＋リクルート併用」がおすすめ</h2>
        <p>
          マイナビエージェントは手厚いサポートで20代・第二新卒に、リクルートエージェントは圧倒的な求人数で全年代に強みがあります。
          20代なら、サポートの手厚いマイナビを軸にしつつ、求人数の多いリクルートを併用して選択肢を広げるのが効果的です。
          両方とも無料なので、まず登録してアドバイザーとの相性を比べるのが失敗しないコツです。
        </p>

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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">まずは無料で登録して比較しよう</h2>
          <p className="text-white/70 text-sm mb-6">2社とも無料。登録してアドバイザーとの相性を比べましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/mynavi/" className="btn-accent px-8 py-3">マイナビエージェントの詳細</Link>
            <Link href="/review/recruit-agent/" className="btn-primary px-8 py-3 bg-navy-light">リクルートエージェントの詳細</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/compare/recruit-vs-doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">リクルート vs doda</Link>
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">第二新卒向けエージェント</Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ランキングTOPへ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
