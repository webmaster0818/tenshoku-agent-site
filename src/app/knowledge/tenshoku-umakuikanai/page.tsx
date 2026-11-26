import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tenshoku-umakuikanai/" },
  title: "転職がうまくいかないときに見直すこと｜企業が転職者を採用した理由・賃金決定で重視する点【令和7年 転職者実態調査】",
  description:
    "転職がうまくいかないときに見直す点を、厚生労働省「令和7年 転職者実態調査」の採用側のデータで整理しました。転職者の賃金決定で経験・能力・知識を考慮した事業所は59.2%です。職種別の採用理由、転職者が使った活動方法、企業規模別の採用予定も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "転職がうまくいかないときに見直すこと｜採用側のデータで確認",
    description: "転職者実態調査から、企業が転職者に求めることと転職者が使った活動方法を確認しています。",
  },
};

const CHECKED = "2026年11月26日";
const TENSHOKU_R07 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaikyo.pdf";
const TENSHOKU_INDEX = "https://www.mhlw.go.jp/toukei/list/6-18c-r07.html";

// 表4 職種別・転職者を採用した理由（3つまでの複数回答・該当職種で転職者を採用した事業所＝100・%）
// skill＝専門知識・能力があるから、exp＝経験を活かし即戦力になるから、fit＝職場への適応力があるから、fill＝離職者の補充のため
const REASON = [
  { k: "管理的な仕事", skill: 50.2, exp: 60.7, fit: 19.1, fill: 30.9 },
  { k: "専門的・技術的な仕事", skill: 51.2, exp: 64.1, fit: 27.6, fill: 44.3 },
  { k: "事務的な仕事", skill: 22.6, exp: 41.5, fit: 36.5, fill: 51.8 },
  { k: "販売の仕事", skill: 20.7, exp: 52.9, fit: 35.3, fill: 54.6 },
  { k: "サービスの仕事", skill: 16.6, exp: 41.7, fit: 31.6, fill: 60.8 },
  { k: "保安・生産工程・輸送・建設・運搬等", skill: 18.3, exp: 41.5, fit: 32.8, fill: 59.4 },
];

// 表5 転職者の賃金決定の際に考慮した要素（複数回答・転職者がいる事業所＝100・%）
const WAGE_FACTOR = [
  { k: "これまでの経験・能力・知識", v: 59.2 },
  { k: "年齢", v: 35.3 },
  { k: "賃金の世間相場", v: 34.2 },
  { k: "免許・資格", v: 30.6 },
  { k: "前職の賃金", v: 27.0 },
  { k: "学歴", v: 12.0 },
];

// 表12 転職活動の方法（複数回答・転職者計＝100・%）
const METHOD = [
  { k: "求人サイト・求人情報専門誌・新聞・チラシ等", v: 45.1 },
  { k: "ハローワーク等の公的機関", v: 29.6 },
  { k: "縁故（知人、友人等）", v: 22.2 },
  { k: "民間の職業紹介機関", v: 20.9 },
  { k: "企業のホームページ", v: 13.5 },
  { k: "出向・前の会社の斡旋", v: 3.0 },
  { k: "企業訪問", v: 1.5 },
];

// 表7 事業所規模別・今後3年間の転職者の採用予定（%）。pri＝採用予定がある事業所のうち「転職者を優先して採用したい」
const SIZE = [
  { k: "1,000人以上", plan: 90.5, pri: 13.3 },
  { k: "30〜99人", plan: 73.0, pri: 41.4 },
  { k: "5〜29人", plan: 61.2, pri: 40.2 },
];

const faq = [
  {
    q: "転職がうまくいかない原因で多いものは何ですか？",
    a: "不採用の理由を集計した公的統計はありません。採用する側のデータを見ると、令和7年 転職者実態調査では転職者の賃金決定で「これまでの経験・能力・知識」を考慮した事業所が59.2%と最も多く、職種によっては「離職者の補充」が採用理由の最多です。応募先が求めている経験と、自分が示している経験がずれていないかを最初に確認することをおすすめします。",
  },
  {
    q: "転職活動ではどの方法を使う人が多いですか？",
    a: "同調査で転職者が使った方法（複数回答）は、求人サイト・求人情報専門誌等が45.1%、ハローワーク等の公的機関が29.6%、縁故（知人、友人等）が22.2%、民間の職業紹介機関が20.9%です。35〜39歳では民間の職業紹介機関が32.2%、大学卒では32.7%と高くなっています。",
  },
  {
    q: "未経験の職種への転職は難しいですか？",
    a: "事務的な仕事・販売の仕事・サービスの仕事などでは、転職者を採用した理由の最多が「離職者の補充のため」（51.8〜60.8%）で、専門知識よりも欠員を埋めることが目的の採用が多くなっています。一方、専門的・技術的な仕事は「経験を活かし即戦力になるから」が64.1%で、未経験での応募は経験者と比べて評価されにくいと考えられます。",
  },
  {
    q: "大企業と中小企業では、どちらが転職者を採用していますか？",
    a: "同調査で今後3年間に転職者を採用する予定がある事業所は、1,000人以上で90.5%、5〜29人で61.2%です。ただし、採用予定がある事業所のうち「転職者を優先して採用したい」は1,000人以上で13.3%、5〜29人で40.2%です。大企業は中途採用の枠が多い一方で新卒採用と並行しており、小規模な企業ほど転職者を優先する傾向があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和7（2025）年転職者実態調査の概況」（令和8年9月25日公表）表4・表5・表7・表12・表13-1", url: TENSHOKU_R07 },
  { label: "厚生労働省「令和7年転職者実態調査の概況」掲載ページ", url: TENSHOKU_INDEX },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "転職がうまくいかないとき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職がうまくいかないときに見直すこと｜企業が転職者に求めることを採用側のデータで確認
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "59.2%", l: "転職者の賃金決定で「経験・能力・知識」を考慮した事業所" },
              { v: "64.1%", l: "専門的・技術的な仕事で「経験を活かし即戦力」を採用理由とした事業所" },
              { v: "60.8%", l: "サービスの仕事で「離職者の補充」を採用理由とした事業所" },
              { v: "20.9%", l: "民間の職業紹介機関を使った転職者" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>転職がうまくいかないときは、応募先が求める経験と、自分が示している経験が合っているかを最初に見直すことをおすすめします。</strong>
            厚生労働省「令和7年 転職者実態調査」では、転職者の賃金を決める際に「これまでの経験・能力・知識」を考慮した事業所が59.2%で最も多く、専門的・技術的な仕事では「経験を活かし即戦力になるから」が採用理由の64.1%を占めます。
            一方、事務・販売・サービスなどの仕事では「離職者の補充のため」が最多で、欠員の時期に合わせた求人が中心です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計は{CHECKED}に厚生労働省の公表資料で確認しました。不採用の理由を直接集計した公的統計はないため、採用した側の回答から見直す点を整理しています。
          </p>
        </div>

        <h2>状況別の見直しポイント</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">うまくいかない状況</th>
                <th className="p-3 text-left">関係する採用側のデータ</th>
                <th className="p-3 text-left rounded-tr-lg">見直す点</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["書類選考で落ちる", "賃金決定で経験・能力・知識を考慮59.2%（表5）", "職務経歴書が応募先の業務に使える経験から書かれているか"],
                ["面接で落ちる", "専門的・技術的な仕事は「即戦力」64.1%、事務的な仕事は「職場への適応力」36.5%（表4）", "職種ごとに評価される点（即戦力か、なじめるか）に合わせた説明か"],
                ["応募したい求人が見つからない", "転職者が使った方法は求人サイト等45.1%、民間の職業紹介機関20.9%、縁故22.2%（表12）", "1つの方法に偏っていないか"],
                ["内定は出るが年収が合わない", "賃金決定で年齢35.3%、賃金の世間相場34.2%、前職の賃金27.0%を考慮（表5）", "希望年収が年齢・職種の相場と合っているか"],
              ].map(([k, d, p]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy">{k}</td>
                  <td className="p-3">{d}</td>
                  <td className="p-3">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※データは{a(TENSHOKU_R07, "厚生労働省「令和7年転職者実態調査の概況」")}。見直す点は当サイトの整理です。</p>

        <h2>職種別：企業が転職者を採用した理由</h2>
        <p className="mb-4">
          転職者実態調査の表4は、転職者を採用した事業所に、職種ごとの採用理由を3つまで尋ねています。管理的な仕事と専門的・技術的な仕事では経験と専門知識が、それ以外の仕事では離職者の補充が主な理由です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種</th>
                <th className="p-3 text-right">経験を活かし即戦力</th>
                <th className="p-3 text-right">専門知識・能力</th>
                <th className="p-3 text-right">職場への適応力</th>
                <th className="p-3 text-right rounded-tr-lg">離職者の補充</th>
              </tr>
            </thead>
            <tbody>
              {REASON.map((r) => {
                const max = Math.max(r.exp, r.skill, r.fit, r.fill);
                const cell = (v: number) => `p-3 text-right whitespace-nowrap ${v === max ? "font-bold text-navy" : ""}`;
                return (
                  <tr key={r.k} className="border-b border-gray-100">
                    <td className="p-3">{r.k}</td>
                    <td className={cell(r.exp)}>{r.exp}%</td>
                    <td className={cell(r.skill)}>{r.skill}%</td>
                    <td className={cell(r.fit)}>{r.fit}%</td>
                    <td className={cell(r.fill)}>{r.fill}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※表4（3つまでの複数回答。該当する職種で転職者を採用した事業所＝100%）。主な4項目を掲載し、太字は職種ごとの最多です。</p>
        <p className="mb-10">
          専門的・技術的な仕事では、事業所規模1,000人以上になると「専門知識・能力があるから」86.1%、「経験を活かし即戦力になるから」86.2%と、8割を超えます。
          経験のある職種で応募する場合は、扱った業務の範囲・規模・成果を数字で示すと、採用側が求める情報に合わせやすくなります。
          事務・販売・サービスの仕事は欠員補充の採用が多いため、求人が出る時期が一定ではありません。条件に合う求人が見つからない時期があっても、継続して確認することが大切です。
        </p>

        <h2>転職者の賃金を決めるときに企業が考慮する要素</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">考慮した要素</th>
                <th className="p-3 text-right rounded-tr-lg">事業所の割合</th>
              </tr>
            </thead>
            <tbody>
              {WAGE_FACTOR.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※表5（複数回答・転職者がいる事業所＝100%）。主な6項目を掲載しています。最も重視した要素は「これまでの経験・能力・知識」が38.4%です（図2）。</p>
        <p className="mb-10">
          前職の賃金を考慮する事業所は27.0%で、事業所規模1,000人以上では48.1%に上がります。内定後の年収交渉では、前職の年収だけでなく、応募先の業務で使える経験を根拠として示すことが有効です。
          年齢・職種別の年収の相場は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確認できます。
        </p>

        <h2>転職者が使った活動方法</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">転職活動の方法</th>
                <th className="p-3 text-right rounded-tr-lg">転職者の割合</th>
              </tr>
            </thead>
            <tbody>
              {METHOD.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※表12（複数回答・転職者計＝100%）。令和2年調査と比べ、民間の職業紹介機関は14.8%から20.9%に増えています。</p>
        <p className="mb-10">
          転職者が現在の勤め先を選んだ理由（表13-1・3つまでの複数回答）は、「仕事の内容・職種に満足がいくから」40.2%、「自分の技能・能力が活かせるから」38.4%、「労働条件（賃金以外）がよいから」23.1%の順です。
          求人サイトだけで探していて応募先が見つからない場合は、転職エージェント（民間の職業紹介機関）やハローワークを組み合わせると、非公開の求人や職種の選び方の助言を得られます。エージェントの使い方は
          <Link href="/knowledge/flow/" className="text-teal font-bold hover:underline">転職エージェントの使い方・流れ</Link>、
          担当者に希望を伝えるコツは<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの伝え方</Link>で解説しています。
        </p>

        <h2>企業規模で変わる転職者の採用予定</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">事業所規模</th>
                <th className="p-3 text-right">今後3年間に転職者の採用予定あり</th>
                <th className="p-3 text-right rounded-tr-lg">うち転職者を優先して採用したい</th>
              </tr>
            </thead>
            <tbody>
              {SIZE.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.plan}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.pri}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※表7。全規模では採用予定あり63.6%、うち転職者を優先40.0%です。</p>
        <p className="mb-10">
          大企業は転職者の採用予定がある割合が高い一方で、転職者を優先する割合は13.3%にとどまり、新卒採用と並行して中途採用を行っています。大企業だけに応募していて進まない場合は、転職者を優先する割合が高い中小企業も候補に入れると、応募できる求人が広がります。
          業界ごとの転職者の受け入れ状況は<Link href="/knowledge/tenshoku-kaisu-gyokai/" className="text-teal font-bold hover:underline">転職回数を気にしない業界</Link>で比較しています。
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
          <li><Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link></li>
          <li><Link href="/knowledge/tenshoku-kaisu-gyokai/" className="text-teal font-bold hover:underline">転職回数を気にしない業界</Link></li>
          <li><Link href="/knowledge/job-history/" className="text-teal font-bold hover:underline">転職回数は何回から不利か</Link></li>
          <li><Link href="/knowledge/resume/" className="text-teal font-bold hover:underline">職務経歴書の書き方</Link></li>
          <li><Link href="/knowledge/interview-prep/" className="text-teal font-bold hover:underline">転職エージェントとの面談の準備</Link></li>
          <li><Link href="/knowledge/useless/" className="text-teal font-bold hover:underline">転職エージェントが使えないと感じたら</Link></li>
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
