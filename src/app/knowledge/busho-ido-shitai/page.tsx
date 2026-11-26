import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/busho-ido-shitai/" },
  title: "部署異動したいときに確認すること｜会社が異動を決められる条件・職種限定の合意・相談の進め方【判例・労働基準法施行規則】",
  description:
    "部署異動したいときに確認することを、裁判例と法令で整理しました。職種や勤務地の限定がなければ配置は会社が決められ（東亜ペイント事件）、職種限定の合意があれば本人の同意なしに配置転換できません（令和6年 最高裁）。労働条件通知書の「変更の範囲」と希望の伝え方も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "部署異動したいときに確認すること｜会社の人事権と異動希望の伝え方",
    description: "裁判例と法令から、配置転換の決まりと異動希望を伝える前に確認することを整理しています。",
  },
};

const CHECKED = "2026年11月26日";
const HANREI = "https://www.check-roudou.mhlw.go.jp/hanrei/haichi/haiten.html";
const LSA_RULE = "https://laws.e-gov.go.jp/law/322M40000100023";
const IKUKAI = "https://laws.e-gov.go.jp/law/403AC0000000076";
const SOGO = "https://laws.e-gov.go.jp/law/341AC0000000132";
const ANZEN = "https://www.mhlw.go.jp/toukei/list/dl/r06-46-50_kekka-gaiyo02.pdf";

// 厚生労働省「令和6年 労働安全衛生調査（実態調査）」第17表 強い不安、悩み、ストレスの内容（主なもの3つ以内・ストレスと感じる事柄がある労働者＝100・%）
const STRESS = [
  { k: "仕事の量", v: 43.2 },
  { k: "仕事の失敗、責任の発生等", v: 36.2 },
  { k: "仕事の質", v: 26.4 },
  { k: "対人関係（セクハラ・パワハラを含む）", v: 26.1 },
  { k: "会社の将来性", v: 22.2 },
  { k: "顧客、取引先等からのクレーム", v: 20.7 },
  { k: "役割・地位の変化等（昇進・昇格、配置転換等）", v: 19.8 },
  { k: "雇用の安定性", v: 11.2 },
];

const faq = [
  {
    q: "部署異動の希望は必ず通りますか？",
    a: "必ず通るとはいえません。就業規則に業務上の都合で配置転換を命じられる定めがあり、雇用契約で職種や勤務地が限定されていない場合、配置は会社が業務上の必要に応じて決められるとされています（厚生労働省「確かめよう労働条件」で紹介されている東亜ペイント事件の判示）。異動の希望は、会社が配置を決める際の判断材料の1つとして伝えることになります。",
  },
  {
    q: "希望していない部署への異動は断れますか？",
    a: "職種や勤務地を限定する合意がない場合、原則として断ることは難しいと考えられます。ただし、業務上の必要性がない場合、不当な動機・目的がある場合、通常甘受すべき程度を著しく超える不利益を負わせる場合などは、配置転換命令が権利の濫用にあたるとされています。また、職種を限定する合意がある場合、会社は本人の同意なしに合意に反する配置転換を命じることはできません（滋賀県社会福祉協議会事件・令和6年4月26日 最高裁第二小法廷判決）。",
  },
  {
    q: "自分の雇用契約で異動の範囲を確認する方法はありますか？",
    a: "労働基準法施行規則 第5条第1項第1号の3により、会社は労働契約を結ぶ際に「就業の場所及び従事すべき業務に関する事項（就業の場所及び従事すべき業務の変更の範囲を含む。）」を明示しなければなりません。労働条件通知書（雇用契約書）の「変更の範囲」の欄と、就業規則の配置転換・異動の条文を確認します。",
  },
  {
    q: "上司のパワハラが理由で異動したい場合はどうすればよいですか？",
    a: "労働施策総合推進法 第31条により、事業主には職場のパワーハラスメントについて相談に応じ適切に対応するための体制を整備する義務があり、相談したことを理由とする解雇その他の不利益な取扱いも禁止されています。上司を通さずに、社内のハラスメント相談窓口や人事部門に相談する方法があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「確かめよう労働条件」裁判例 2-2 配置転換（東亜ペイント事件・ネスレ日本事件・滋賀県社会福祉協議会事件）", url: HANREI },
  { label: "e-Gov法令検索 労働基準法施行規則（第5条）", url: LSA_RULE },
  { label: "e-Gov法令検索 育児休業、介護休業等育児又は家族介護を行う労働者の福祉に関する法律（第26条）", url: IKUKAI },
  { label: "e-Gov法令検索 労働施策の総合的な推進並びに労働者の雇用の安定及び職業生活の充実等に関する法律（第31条）", url: SOGO },
  { label: "厚生労働省「令和6年 労働安全衛生調査（実態調査）」結果の概況（個人調査）第17表", url: ANZEN },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "部署異動したいとき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            部署異動したいときに確認すること｜会社が異動を決められる条件と希望の伝え方
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "会社の判断", l: "職種・勤務地の限定がなければ配置は会社が決められる（東亜ペイント事件）" },
              { v: "同意が必要", l: "職種を限定する合意がある場合の配置転換（令和6年 最高裁）" },
              { v: "変更の範囲", l: "労働条件の明示事項（労働基準法施行規則 第5条）" },
              { v: "26.1%", l: "強いストレスの内容に「対人関係」を挙げた労働者（令和6年）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>部署異動は、原則として会社が業務上の必要に応じて決めるもので、本人の希望だけでは決まりません。</strong>
            就業規則に配置転換の定めがあり、職種や勤務地を限定する合意がない場合、会社は個々の同意なしに配置を決められるとされています。
            そのため、異動したいときは、理由を整理したうえで、自己申告制度や面談などの社内の手続きを使って希望を伝えることが基本になります。
            職場の人間関係やハラスメントが理由の場合は、異動の希望とは別に、社内の相談窓口に相談する方法もあります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            裁判例は厚生労働省「確かめよう労働条件」、条文はe-Gov法令検索で{CHECKED}に確認しました。個別の配置転換が有効かどうかは、契約内容や事情によって判断が異なります。
          </p>
        </div>

        <h2>配置転換に関する主な裁判例</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">裁判例</th>
                <th className="p-3 text-left">示された考え方</th>
                <th className="p-3 text-left rounded-tr-lg">結論</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["東亜ペイント事件（昭和61年7月14日 最高裁第二小法廷）", "勤務地限定の合意がなく、就業規則等に転勤の定めがあり、転勤が頻繁に行われていた事情の下では、会社は個別の同意なく勤務場所を決定できる。業務上の必要性がない、不当な動機・目的がある、通常甘受すべき程度を著しく超える不利益がある等の特段の事情がなければ権利の濫用にあたらない", "転勤命令は有効（原判決破棄・差戻し）"],
                ["ネスレ日本事件（平成18年4月14日 大阪高裁）", "勤務場所を限定していない契約でも、家族の介護の状況などから不利益が非常に大きい場合は、通常甘受すべき程度を著しく超える", "配置転換命令は権利の濫用で無効"],
                ["滋賀県社会福祉協議会事件（令和6年4月26日 最高裁第二小法廷）", "職種や業務内容を特定のものに限定する合意がある場合、使用者は個別的同意なしに合意に反する配置転換を命じる権限を有しない", "原判決破棄・差戻し"],
              ].map(([k, v, r]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy">{k}</td>
                  <td className="p-3">{v}</td>
                  <td className="p-3 text-xs">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※{a(HANREI, "厚生労働省「確かめよう労働条件」裁判例 2-2 配置転換")}の事案の概要・判示の骨子を当サイトで要約しました。</p>

        <h2>異動を希望する前に確認する書類と法令</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">確認するもの</th>
                <th className="p-3 text-left">確認する内容</th>
                <th className="p-3 text-left rounded-tr-lg">根拠</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["労働条件通知書・雇用契約書", "就業の場所と従事すべき業務、その「変更の範囲」。職種や勤務地の限定があるか", "労働基準法施行規則 第5条第1項第1号の3"],
                ["就業規則", "配置転換・異動・転勤を命じる条文、自己申告制度や社内公募の定め", "東亜ペイント事件で就業規則の定めが判断要素とされた"],
                ["育児・介護の状況", "勤務地の変更を伴う異動で育児・介護が難しくなる場合、事業主はその状況に配慮しなければならない", "育児・介護休業法 第26条"],
                ["ハラスメントの相談窓口", "事業主には相談に応じ適切に対応する体制の整備が義務づけられ、相談を理由とする不利益な取扱いは禁止", "労働施策総合推進法 第31条"],
              ].map(([k, v, b]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy">{k}</td>
                  <td className="p-3">{v}</td>
                  <td className="p-3 text-xs">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{a(LSA_RULE, "労働基準法施行規則")}・{a(IKUKAI, "育児・介護休業法")}・{a(SOGO, "労働施策総合推進法")}の条文を当サイトで要約しました。
        </p>

        <h2>異動したい理由を整理する：働く人のストレスの原因</h2>
        <p className="mb-4">
          厚生労働省「令和6年 労働安全衛生調査（実態調査）」では、仕事や職業生活に関することで強い不安・悩み・ストレスとなっている事柄がある労働者は68.3%です。その内容（主なもの3つ以内）は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">強いストレスの内容</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {STRESS.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※{a(ANZEN, "厚生労働省「令和6年 労働安全衛生調査（実態調査）」第17表")}（強いストレスと感じる事柄がある労働者＝100%）。主な8項目を掲載しています。</p>
        <p className="mb-10">
          異動で解決しやすいのは、仕事の内容（仕事の質）や特定の部署の人間関係が原因の場合です。仕事の量や会社の将来性が原因の場合は、部署を変えても状況が変わらない可能性があります。
          希望を伝える前に、何が原因で、異動によってどう変わるかを整理しておくと、上司や人事担当に説明しやすくなります。
        </p>

        <h2>異動希望を伝える手順</h2>
        <ol className="mb-10 space-y-2">
          <li><strong>1. 社内の制度を確認する：</strong>就業規則や社内ポータルで、自己申告制度・社内公募・キャリア面談の時期と方法を確認します。</li>
          <li><strong>2. 理由を仕事の言葉で整理する：</strong>「今の部署が嫌だ」ではなく、異動先で生かせる経験や、取り組みたい業務を中心に説明します。</li>
          <li><strong>3. 直属の上司か人事担当に伝える：</strong>評価面談や自己申告の機会を使うと、正式な希望として記録に残りやすくなります。ハラスメントが理由の場合は、上司を通さず相談窓口を使います。</li>
          <li><strong>4. 結果と時期を確認する：</strong>希望がすぐに通らない場合は、次の異動の時期や、それまでに身につけておくべき経験を確認します。</li>
          <li><strong>5. 異動が難しい場合は転職も比べる：</strong>職種や勤務地を変えたい理由が強い場合は、社外で同じ希望がかなうかを調べ、異動と転職を比べて判断します。</li>
        </ol>
        <p className="mb-10">
          転職を考える場合は、<Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link>で転職した人の賃金の変化や満足度を、
          <Link href="/knowledge/shigoto-muitenai/" className="text-teal font-bold hover:underline">仕事が向いてないと感じたとき</Link>で辞める前に確認することを解説しています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/shigoto-muitenai/" className="text-teal font-bold hover:underline">仕事が向いてないと感じたとき</Link></li>
          <li><Link href="/knowledge/shigoto-yasumitai/" className="text-teal font-bold hover:underline">仕事を休みたいときに使える制度</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/jieitai-yametai/" className="text-teal font-bold hover:underline">自衛隊を辞めたいときに確認すること</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
