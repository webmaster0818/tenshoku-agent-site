import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/32sai-tenshoku/" },
  title: "32歳の転職で確認すること｜30〜34歳の転職入職率は男性10.3%・女性13.2%、転職で賃金が増えた人46.1%【厚生労働省の統計】",
  description:
    "32歳の転職で確認したい点を厚生労働省の統計と法令で整理しています。30〜34歳の転職入職率は男性10.3%・女性13.2%、転職後に賃金が増加した人は46.1%、減少した人は24.2%です。離職理由・活動方法・企業規模別の賃金・求人の年齢制限のルールも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "32歳の転職で確認すること【厚生労働省の統計】",
    description: "30〜34歳の転職入職率、転職後の賃金の変化、転職者の離職理由と活動方法、求人の年齢制限のルールを、厚生労働省の統計と法令で確認しています。",
  },
};

const CHECKED = "2026年11月27日";
const DOUKOU = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/kekka_gaiyo-03.pdf";
const DOUKOU1 = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/kekka_gaiyo-01.pdf";
const DOUKOU_YOUGO = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/yougo.pdf";
const TJ_TOP = "https://www.mhlw.go.jp/toukei/list/6-18c-r07.html";
const TJ1 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-01.pdf";
const TJ2 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-02.pdf";
const TJ3 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-03.pdf";
const TJ_GAIYO = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaiyo.pdf";
const CHIN2 = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const CHIN3 = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const CHIN4 = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/04.pdf";
const CHIN6 = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/06.pdf";
const CHIN_YOUGO = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/14.pdf";
const LAW_SESAKU = "https://laws.e-gov.go.jp/law/341AC0000000132";
const RULE_SESAKU = "https://laws.e-gov.go.jp/law/341M50002000023";

// 厚生労働省「令和6年 雇用動向調査結果の概況」図4-1 性、年齢階級別転職入職率（%・グラフの数値ラベルから転記）
// 全年齢は同 表3（男性8.7%・女性10.8%）
const RATE = [
  { k: "25〜29歳", m: 15.1, f: 16.8 },
  { k: "30〜34歳", m: 10.3, f: 13.2 },
  { k: "35〜39歳", m: 7.9, f: 10.5 },
  { k: "40〜44歳", m: 6.8, f: 10.2 },
  { k: "全年齢", m: 8.7, f: 10.8 },
];

// 同 表6 転職入職者の賃金変動状況別割合（男女計・%）
const WAGE = [
  { k: "25〜29歳", up: 46.3, up10: 37.9, same: 23.1, down: 29.2, down10: 17.6 },
  { k: "30〜34歳", up: 46.1, up10: 36.0, same: 29.1, down: 24.2, down10: 16.3 },
  { k: "35〜39歳", up: 45.5, up10: 35.3, same: 28.0, down: 24.3, down10: 16.3 },
  { k: "全年齢", up: 40.5, up10: 29.4, same: 28.4, down: 29.4, down10: 21.7 },
];

// 厚生労働省「令和7年 転職者実態調査」表11 自己都合による離職の理由（3つまでの複数回答・%）
const REASON = [
  { k: "賃金が低かったから", a: 26.2, all: 25.5 },
  { k: "労働条件（賃金以外）がよくなかったから", a: 25.4, all: 23.4 },
  { k: "満足のいく仕事内容でなかったから", a: 24.6, all: 24.7 },
  { k: "会社の将来に不安を感じたから", a: 23.3, all: 25.2 },
  { k: "人間関係がうまくいかなかったから", a: 19.6, all: 22.2 },
  { k: "いろいろな会社で経験を積みたいから", a: 17.1, all: 17.1 },
  { k: "能力・実績が正当に評価されないから", a: 16.3, all: 18.9 },
  { k: "他によい仕事があったから", a: 16.1, all: 13.5 },
  { k: "結婚・出産・育児のため", a: 11.2, all: 6.4 },
];

// 同 表12 転職活動の方法（複数回答・%）
const METHOD = [
  { k: "求人サイト・求人情報専門誌・新聞・チラシ等", a: 47.8, all: 45.1 },
  { k: "民間の職業紹介機関", a: 22.8, all: 20.9 },
  { k: "縁故（知人、友人等）", a: 22.7, all: 22.2 },
  { k: "ハローワーク等の公的機関", a: 16.3, all: 29.6 },
  { k: "企業のホームページ", a: 13.1, all: 13.5 },
];

// 同 表13-1 現在の勤め先を選んだ理由（3つまでの複数回答・%）
const CHOICE = [
  { k: "仕事の内容・職種に満足がいくから", a: 40.8 },
  { k: "自分の技能・能力が活かせるから", a: 35.7 },
  { k: "労働条件（賃金以外）がよいから", a: 27.3 },
  { k: "キャリアアップできるから", a: 20.7 },
  { k: "賃金が高いから", a: 20.5 },
  { k: "転勤が少ない、通勤が便利だから", a: 17.4 },
];

// 厚生労働省「令和7年 賃金構造基本統計調査」30〜34歳の一般労働者の賃金（所定内給与額・令和7年6月分・千円）
const PAY = [
  { k: "30〜34歳 全体", t: 312.3, m: 330.4, f: 283.2, src: "第2表" },
  { k: "大企業（1,000人以上）", t: 344.6, m: 366.4, f: 306.7, src: "第4表" },
  { k: "中企業（100〜999人）", t: 299.4, m: 315.4, f: 275.6, src: "第4表" },
  { k: "小企業（10〜99人）", t: 286.5, m: 300.4, f: 264.0, src: "第4表" },
  { k: "正社員・正職員", t: 321.1, m: 337.0, f: 293.4, src: "第6-1表" },
  { k: "正社員・正職員以外", t: 233.8, m: 247.9, f: 222.0, src: "第6-1表" },
  { k: "大学卒", t: 340.3, m: 358.9, f: 311.5, src: "第3表" },
  { k: "高校卒", t: 276.2, m: 293.0, f: 236.0, src: "第3表" },
];

const faq = [
  {
    q: "32歳の転職は遅いですか？",
    a: "厚生労働省「令和6年 雇用動向調査」では、30〜34歳の転職入職率（常用労働者に占める1年間の転職入職者の割合）は男性10.3%、女性13.2%で、全年齢（男性8.7%・女性10.8%）を上回っています。35〜39歳では男性7.9%、女性10.5%に下がります。統計上、30代前半は転職する人の割合が全年齢の平均より高い年代です。",
  },
  {
    q: "32歳で転職すると給料は上がりますか？",
    a: "同調査では、30〜34歳の転職入職者のうち前職より賃金が「増加」した人は46.1%（うち1割以上の増加36.0%）、「減少」した人は24.2%です。増加した人が減少した人を21.9ポイント上回ります。ただし、同調査は増減の方向を集計したもので、増減額は公表されていません。4人に1人程度は賃金が下がっているため、内定時の提示額を現在の賃金と比べて判断する必要があります。",
  },
  {
    q: "「35歳未満」のような年齢の上限がある求人に応募できますか？",
    a: "32歳であれば条件を満たします。労働施策総合推進法9条により、募集・採用では原則として年齢を問わず均等な機会を与える必要がありますが、同法施行規則1条の3第1項第3号イにより、長期勤続によるキャリア形成を目的として、職務経験を問わず、新規学卒者と同等の処遇で、期間の定めのない労働契約で募集する場合は、年齢の上限を設けることが認められています。年齢の上限がある求人では、職務経験を問わない募集や、新卒と同等の処遇となる場合があるため、提示される給与と職位を確認してください。",
  },
  {
    q: "30代前半の人はどのような方法で転職先を探していますか？",
    a: "厚生労働省「令和7年 転職者実態調査」では、30〜34歳の転職者が利用した方法（複数回答）は「求人サイト・求人情報専門誌・新聞・チラシ等」47.8%、「民間の職業紹介機関」22.8%、「縁故（知人、友人等）」22.7%、「ハローワーク等の公的機関」16.3%の順です。ハローワーク等の利用は全年齢（29.6%）より13.3ポイント低くなっています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」3 転職入職者の状況（図4-1・表6）", url: DOUKOU },
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」1 入職と離職の推移（表3 転職入職率）", url: DOUKOU1 },
  { label: "厚生労働省「令和6年 雇用動向調査」用語の定義（転職入職率）", url: DOUKOU_YOUGO },
  { label: "厚生労働省「令和7年 転職者実態調査（雇用の構造に関する実態調査）」結果の概要", url: TJ_TOP },
  { label: "同 個人調査 1 直前の勤め先及び現在の勤め先の状況（表8・表9）", url: TJ1 },
  { label: "同 個人調査 2 離職理由（表10・表11）", url: TJ2 },
  { label: "同 個人調査 3 転職について（表12・表13-1）", url: TJ3 },
  { label: "同 調査の概要（転職者の定義・調査期間）", url: TJ_GAIYO },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」性別にみた賃金（第2表）", url: CHIN2 },
  { label: "同 学歴別にみた賃金（第3表）", url: CHIN3 },
  { label: "同 企業規模別にみた賃金（第4表）", url: CHIN4 },
  { label: "同 雇用形態別にみた賃金（第6-1表）", url: CHIN6 },
  { label: "同 結果の概況（全体版・主な用語の定義）", url: CHIN_YOUGO },
  { label: "e-Gov法令検索 労働施策の総合的な推進並びに労働者の雇用の安定及び職業生活の充実等に関する法律（9条）", url: LAW_SESAKU },
  { label: "e-Gov法令検索 同法施行規則（1条の3）", url: RULE_SESAKU },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);
const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "32歳の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            32歳の転職で確認すること｜30〜34歳の転職入職率・転職後の賃金・求人の年齢制限
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "10.3%", l: "30〜34歳男性の転職入職率" },
              { v: "13.2%", l: "30〜34歳女性の転職入職率" },
              { v: "46.1%", l: "30〜34歳の転職で賃金が増加" },
              { v: "24.2%", l: "30〜34歳の転職で賃金が減少" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            30〜34歳は、<strong>転職する人の割合が全年齢の平均より高い年代</strong>です。厚生労働省「令和6年 雇用動向調査」では、30〜34歳の転職入職率は男性10.3%・女性13.2%で、全年齢（男性8.7%・女性10.8%）を上回っています。
            転職後の賃金は、増加した人（46.1%）が減少した人（24.2%）を上回っています。
            一方で、30〜34歳の月額賃金は、同じ年齢でも企業規模や雇用形態によって月5万〜9万円程度の差があります。応募先の条件を、統計上の水準と比べて確認することをおすすめします。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：厚生労働省の統計・e-Gov法令検索（{CHECKED}に当サイトで確認）。公的統計は5歳刻みで集計されているため、32歳ちょうどの値は公表されていません。本ページでは30〜34歳の値を目安として掲載しています。
          </p>
        </div>

        <h2>30〜34歳の転職入職率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {RATE.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "30〜34歳" ? "bg-warm-gray font-bold" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.f}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年 雇用動向調査結果の概況」図4-1（グラフの数値ラベルから当サイトで転記）、全年齢は同 表3。転職入職率は、年齢階級別の場合、6月末日現在の常用労働者数に対する令和6年1年間の転職入職者数の割合です（{a(DOUKOU_YOUGO, "用語の定義")}）。
        </p>
        <p className="mb-10">
          30〜34歳の転職入職率は、25〜29歳（男性15.1%・女性16.8%）より低く、35〜39歳（男性7.9%・女性10.5%）より高い水準です。男女とも全年齢の値を上回っており、30代前半は転職する人が多い年代といえます。
          就業形態別では、30〜34歳男性の一般労働者は9.5%、パートタイム労働者は20.5%、女性の一般労働者は12.1%、パートタイム労働者は17.2%です（同 図4-2・図4-3）。
        </p>

        <h2>30〜34歳で転職した人の賃金の変化</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>増加</th>
                <th className={th}>うち1割以上</th>
                <th className={th}>変わらない</th>
                <th className={th}>減少</th>
                <th className="p-3 text-right rounded-tr-lg">うち1割以上</th>
              </tr>
            </thead>
            <tbody>
              {WAGE.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "30〜34歳" ? "bg-warm-gray font-bold" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.up}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.up10}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.same}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down10}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年 雇用動向調査結果の概況」表6（男女計）。転職入職者のうち前職が雇用者で調査時に在籍している人。賃金変動状況の不詳を含むため、合計は100%になりません。
        </p>
        <p className="mb-10">
          30〜34歳では、賃金が増加した人が減少した人を21.9ポイント上回り、全年齢（11.1ポイント）より差が大きくなっています。前年（令和5年）の30〜34歳と比べると、増加は44.6%から46.1%へ、1割以上の増加は30.4%から36.0%へ上昇しました。
          ただし、同調査は増減の方向を集計したもので、増減額は公表されていません。30代女性の前職を辞めた理由（男女別）は<Link href="/knowledge/30dai-josei-tenshoku/" className={link}>30代女性の転職</Link>に掲載しています。
        </p>

        <h2>30〜34歳の転職者の実態</h2>
        <p className="mb-4">
          厚生労働省「令和7年 転職者実態調査」は、令和6年10月1日から令和7年9月30日までに入社した一般労働者の転職者を対象とした調査です（{a(TJ_GAIYO, "調査の概要")}）。30〜34歳は転職者全体の13.7%を占めています。
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {[
            { v: "93.7%", l: "自己都合で離職した割合（全年齢81.3%）", s: "表10" },
            { v: "82.1%", l: "転職後の勤め先で正社員の割合（全年齢73.9%）", s: "表8" },
            { v: "37.2%", l: "直前の勤め先に5年以上勤めた割合", s: "表9・当サイト計算" },
          ].map((x) => (
            <div key={x.l} className="glass-card p-4 text-center">
              <p className="text-lg font-extrabold text-teal">{x.v}</p>
              <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}（{x.s}）</p>
            </div>
          ))}
        </div>
        <p className="mb-6">
          30〜34歳で自己都合により離職した人の割合は93.7%で、年齢階級別で最も高くなっています。直前の勤め先の通算勤務期間は「5年以上10年未満」28.0%、「2年以上5年未満」25.9%が多く、5年以上の合計は37.2%（28.0%＋9.2%）です。一方で、1年未満で辞めた人も25.7%（13.3%＋12.4%）います（{a(TJ1, "表9")}）。
        </p>

        <h3 className="font-bold text-navy mb-2">自己都合で辞めた理由（3つまでの複数回答）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">離職の理由</th>
                <th className={th}>30〜34歳</th>
                <th className="p-3 text-right rounded-tr-lg">全年齢</th>
              </tr>
            </thead>
            <tbody>
              {REASON.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.a}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.all}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「令和7年 転職者実態調査」表11（主な項目を抜粋）。</p>
        <p className="mb-6">
          30〜34歳では「賃金が低かったから」26.2%が最も多く、労働条件・仕事内容・会社の将来への不安が続きます。全年齢と比べると「結婚・出産・育児のため」（11.2%）と「他によい仕事があったから」（16.1%）の割合が高くなっています。
        </p>

        <h3 className="font-bold text-navy mb-2">転職活動の方法（複数回答）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">方法</th>
                <th className={th}>30〜34歳</th>
                <th className="p-3 text-right rounded-tr-lg">全年齢</th>
              </tr>
            </thead>
            <tbody>
              {METHOD.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.a}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.all}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同 表12（主な項目を抜粋）。「民間の職業紹介機関」には転職エージェントなどの有料職業紹介事業者が含まれます。</p>
        <p className="mb-6">
          30〜34歳では、民間の職業紹介機関を利用した人が22.8%で、ハローワーク等の公的機関（16.3%）を上回っています。全年齢ではハローワーク等が29.6%で、30〜34歳は公的機関の利用が少ない年代です。
          転職エージェントの使い分けは<Link href="/knowledge/multiple/" className={link}>転職エージェントの複数利用</Link>に掲載しています。
        </p>

        <h3 className="font-bold text-navy mb-2">転職先を選んだ理由（3つまでの複数回答）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">現在の勤め先を選んだ理由</th>
                <th className="p-3 text-right rounded-tr-lg">30〜34歳</th>
              </tr>
            </thead>
            <tbody>
              {CHOICE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.a}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同 表13-1（主な項目を抜粋）。</p>
        <p className="mb-10">
          転職先を選んだ理由は「仕事の内容・職種に満足がいくから」40.8%、「自分の技能・能力が活かせるから」35.7%が上位で、「賃金が高いから」は20.5%です。離職の理由では賃金が最も多い一方、転職先は仕事内容や技能を活かせるかで選んだ人が多くなっています。
        </p>

        <h2>30〜34歳の賃金水準（企業規模・雇用形態・学歴別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={th}>男女計</th>
                <th className={th}>男性</th>
                <th className={th}>女性</th>
                <th className="p-3 text-right rounded-tr-lg">表</th>
              </tr>
            </thead>
            <tbody>
              {PAY.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "30〜34歳 全体" ? "bg-warm-gray font-bold" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.t.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.f.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap text-xs">{x.src}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」。一般労働者の令和7年6月分の所定内給与額（残業代・賞与を含まない）の平均です。企業規模は企業全体の常用労働者数による区分です。
        </p>
        <p className="mb-10">
          30〜34歳の男女計では、大企業（344.6千円）と小企業（286.5千円）の差は58.1千円、正社員・正職員（321.1千円）と正社員・正職員以外（233.8千円）の差は87.3千円、大学卒（340.3千円）と高校卒（276.2千円）の差は64.1千円です（いずれも当サイト計算）。
          転職先の企業規模や雇用形態が変わると、同じ年齢でも賃金水準が変わります。求人の提示額を見るときは、この表の該当する区分と比べる方法をおすすめします。
          年収の目安は<Link href="/knowledge/salary-30sai/" className={link}>30歳の平均年収</Link>、<Link href="/knowledge/salary-35sai/" className={link}>35歳の平均年収</Link>に掲載しています。
        </p>

        <h2>求人の年齢制限のルール</h2>
        <p className="mb-4">
          労働施策総合推進法9条により、事業主は労働者の募集・採用について、原則として年齢にかかわりなく均等な機会を与えなければなりません（{a(LAW_SESAKU, "e-Gov法令検索")}）。
          ただし、同法施行規則1条の3第1項で例外が定められており、30代前半の転職に関係するのは第3号イです（{a(RULE_SESAKU, "施行規則")}）。
        </p>
        <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            長期間の継続勤務による職務に必要な能力の開発及び向上を図ることを目的として、青少年その他特定の年齢を下回る労働者の募集及び採用を行うとき（期間の定めのない労働契約を締結することを目的とする場合に限り、かつ、当該労働者が職業に従事した経験があることを求人の条件としない場合であつて（中略）新たに卒業しようとする者として又は当該者と同等の処遇で募集及び採用を行うときに限る。）
          </p>
          <p className="text-xs text-text-muted mt-2">※施行規則1条の3第1項第3号イから抜粋（学校等の範囲を定めた部分を中略）。</p>
        </div>
        <p className="mb-10">
          この例外により、期間の定めのない雇用で、職務経験を問わず、新規学卒者と同等の処遇とする場合に限り、年齢の上限を設けた募集が認められています。32歳は「35歳未満」などの上限を満たしますが、この例外による求人では、提示される給与や職位が新卒と同等になる場合があります。
          これまでの経験を評価した処遇かどうかは、求人票の給与欄と面接で確認する必要があります。
        </p>

        <h2>32歳の転職で確認すること</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "応募先の企業規模・雇用形態と賃金水準", d: "30〜34歳の所定内給与は、大企業と小企業で58.1千円、正社員とそれ以外で87.3千円の差があります（男女計）。提示額を現在の賃金と比べるだけでなく、上の表の該当する区分とも比べて判断します。" },
            { t: "年齢の上限がある求人の処遇", d: "施行規則1条の3第1項第3号イによる求人は、職務経験を問わず、新規学卒者と同等の処遇で募集するものです。経験を評価した給与・職位になるかどうかを確認します。" },
            { t: "賃金が下がる可能性", d: "30〜34歳で転職した人の24.2%は賃金が減少し、16.3%は1割以上減少しています。内定時に提示された月給・賞与・残業代の扱いを、現在の勤務先と同じ条件で比べます。" },
            { t: "入社後1年以内の制度の扱い", d: "育児休業は、労使協定により勤続1年未満の人を対象外にできます（育児・介護休業法6条）。30〜34歳の離職理由では「結婚・出産・育児のため」が11.2%を占めるため、該当する場合は内定前に就業規則を確認します。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          30代向けの転職エージェントは<Link href="/age/30s/" className={link}>30代におすすめの転職エージェント</Link>、登録の時期は<Link href="/knowledge/when-to-start/" className={link}>転職エージェントにいつ登録すべきか</Link>に掲載しています。
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
          <li><Link href="/age/30s/" className={link}>30代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className={link}>30代女性の転職</Link></li>
          <li><Link href="/knowledge/keisatsukan-tenshoku/" className={link}>警察官の転職で確認すること</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className={link}>30歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-35sai/" className={link}>35歳の平均年収</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link></li>
          <li><Link href="/knowledge/how-to-choose/" className={link}>転職エージェントの選び方</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className={link}>会社の辞め方</Link></li>
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
