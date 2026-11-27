import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/shigoto-yamedoki/" },
  title: "仕事の辞めどきは？退職日で変わる雇用保険・社会保険料・住民税の確認点と転職者が辞めた理由【雇用動向調査・転職者実態調査】",
  description:
    "仕事の辞めどきを、退職日で変わる制度から整理しました。雇用保険は離職前2年に12か月の加入期間が必要で、自己都合の給付制限は原則1か月です。月末退職と社会保険料、1〜4月退職の住民税、転職者が辞めた理由も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "仕事の辞めどきは？退職日で変わる雇用保険・社会保険料・住民税の確認点",
    description: "退職のタイミングで変わる制度を条文と厚生労働省の資料で確認し、転職者が辞めた理由の統計も掲載しています。",
  },
};

const CHECKED = "2026年11月28日";
const HW_BASIC = "https://www.hellowork.mhlw.go.jp/insurance/insurance_basicbenefit.html";
const HW_DAYS = "https://www.hellowork.mhlw.go.jp/insurance/insurance_benefitdays.html";
const MHLW_QA = "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000139508.html";
const MHLW_TRAIN = "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000160564_00045.html";
const CIVIL = "https://laws.e-gov.go.jp/law/129AC0000000089";
const HIA = "https://laws.e-gov.go.jp/law/211AC0000000070";
const EPIA = "https://laws.e-gov.go.jp/law/329AC0000000115";
const LTA = "https://laws.e-gov.go.jp/law/325AC0000000226";
const DOUKOU = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-03.pdf";
const JITTAI_1 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-01.pdf";
const JITTAI_2 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-02.pdf";
const link = "text-teal font-bold hover:underline";
const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

const CHECKS = [
  {
    k: "雇用保険の加入期間",
    v: "離職前2年間に被保険者期間が通算12か月以上あるか（賃金支払基礎日数11日以上または80時間以上の月を数える）",
    b: "ハローワーク「基本手当について」",
    url: HW_BASIC,
  },
  {
    k: "自己都合退職の給付制限",
    v: "2025年4月1日以降の離職は原則1か月（7日間の待期の後）。5年以内に2回以上の自己都合離職で受給資格決定を受けている場合は3か月",
    b: "厚生労働省 基本手当Q&A・教育訓練等による給付制限の解除",
    url: MHLW_QA,
  },
  {
    k: "月末退職か月末前日退職か",
    v: "資格喪失日は退職日の翌日。月末退職ならその月の社会保険料は会社で控除され、月末前日の退職ならその月は国民健康保険・国民年金への加入が必要になる",
    b: "健康保険法 第36条・第156条、厚生年金保険法 第14条・第19条",
    url: HIA,
  },
  {
    k: "1月〜4月の退職と住民税",
    v: "1月1日〜4月30日に退職すると、5月31日までの残りの住民税を最後の給与・退職手当から一括で徴収される（支払額が残りの税額を超える場合）",
    b: "地方税法 第321条の5第2項",
    url: LTA,
  },
  {
    k: "退職の申し出の時期",
    v: "期間の定めのない雇用は、申し出から2週間で終了する。就業規則の申し出期限も確認しておく",
    b: "民法 第627条第1項",
    url: CIVIL,
  },
];

const REASONS = [
  ["給料等収入が少なかった", "9.9%", "8.6%"],
  ["労働時間、休日等の労働条件が悪かった", "8.5%", "12.9%"],
  ["職場の人間関係が好ましくなかった", "8.9%", "11.5%"],
  ["会社の将来が不安だった", "6.9%", "4.3%"],
  ["仕事の内容に興味を持てなかった", "5.2%", "4.6%"],
  ["能力・個性・資格を生かせなかった", "5.2%", "3.9%"],
  ["定年・契約期間の満了", "16.1%", "9.8%"],
  ["会社都合", "5.3%", "6.2%"],
];

const TENURE = [
  ["6か月未満", "8.2%"],
  ["6か月〜1年未満", "10.8%"],
  ["1〜2年未満", "13.8%"],
  ["2〜5年未満", "27.4%"],
  ["5〜10年未満", "19.3%"],
  ["10年以上", "20.0%"],
];

const faq = [
  {
    q: "失業保険をもらうには何か月働いてから辞めればよいですか？",
    a: "自己都合で離職する場合、原則として離職日以前2年間に雇用保険の被保険者期間が通算12か月以上必要です。賃金の支払いの基礎となった日数が11日以上、または労働時間が80時間以上ある月を1か月として数えます（ハローワーク「基本手当について」）。会社の倒産・解雇などの特定受給資格者や特定理由離職者は、離職日以前1年間に6か月以上です。",
  },
  {
    q: "自己都合で辞めると失業保険はいつから受け取れますか？",
    a: "2025年4月1日以降に離職した場合、7日間の待期期間の後、原則1か月の給付制限があります（それ以前の離職は原則2か月）。5年以内に正当な理由のない自己都合離職を2回以上して受給資格決定を受けている場合は3か月です。2025年4月以降は、教育訓練を受けると給付制限が解除される仕組みもあります（厚生労働省）。",
  },
  {
    q: "月末に辞めるのと月末の前日に辞めるのはどちらが得ですか？",
    a: "健康保険と厚生年金の資格は退職日の翌日に失われ、保険料は資格を失った月の前月分まで納めます（健康保険法 第36条・第156条、厚生年金保険法 第14条・第19条）。月末退職ではその月の保険料が給与から控除され、月末の前日に退職すると会社での控除はなくなりますが、その月は国民健康保険・国民年金に自分で加入して保険料を納める必要があります。次の勤務先に翌月1日から入る場合は、月末退職のほうが加入の空白ができません。",
  },
  {
    q: "自己都合で辞めた場合、失業保険は何日分もらえますか？",
    a: "自己都合退職など一般の離職者の所定給付日数は、年齢にかかわらず被保険者期間10年未満で90日、10年以上20年未満で120日、20年以上で150日です（ハローワーク「基本手当の所定給付日数」）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "ハローワークインターネットサービス「基本手当について」", url: HW_BASIC },
  { label: "ハローワークインターネットサービス「基本手当の所定給付日数」", url: HW_DAYS },
  { label: "厚生労働省「Q&A〜労働者の皆様へ（基本手当、再就職手当）〜」", url: MHLW_QA },
  { label: "厚生労働省「教育訓練等による雇用保険の給付制限の解除」", url: MHLW_TRAIN },
  { label: "e-Gov法令検索 民法（第627条）", url: CIVIL },
  { label: "e-Gov法令検索 健康保険法（第36条・第156条）", url: HIA },
  { label: "e-Gov法令検索 厚生年金保険法（第14条・第19条）", url: EPIA },
  { label: "e-Gov法令検索 地方税法（第321条の5）", url: LTA },
  { label: "厚生労働省「令和7年雇用動向調査結果の概況」転職入職者の状況（表5・表6）", url: DOUKOU },
  { label: "厚生労働省「令和7年転職者実態調査の概況」個人調査（表9）", url: JITTAI_1 },
  { label: "厚生労働省「令和7年転職者実態調査の概況」個人調査（表10・表11）", url: JITTAI_2 },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "仕事の辞めどき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            仕事の辞めどきは？退職日で変わる雇用保険・社会保険料・住民税の確認点と転職者が辞めた理由
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "12か月", l: "自己都合で基本手当を受けるのに必要な被保険者期間（離職前2年）" },
              { v: "1か月", l: "自己都合退職の給付制限（2025年4月以降の離職・原則）" },
              { v: "81.3%", l: "前職を自己都合で辞めた転職者の割合（令和7年）" },
              { v: "40.8%", l: "転職で賃金が増えた人の割合（令和7年）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>仕事の辞めどきを決めるときは、気持ちの区切りだけでなく、退職日によって変わる制度を先に確認しておくことが重要です。</strong>
            具体的には、雇用保険の加入期間（離職前2年間に12か月以上）、自己都合退職の給付制限（原則1か月）、月末退職かどうかによる社会保険料の扱い、1〜4月に退職した場合の住民税の一括徴収の4点です。
            次の勤務先が決まっている場合は、入社日の前日を退職日にすると、保険の加入に空白ができません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            条文はe-Gov法令検索、制度と統計は厚生労働省・ハローワークの公表資料で{CHECKED}に確認しました。個別の受給資格や給付日数はハローワークの判断によります。
          </p>
        </div>

        <h2>退職日を決める前に確認する5つのこと</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">確認すること</th>
                <th className="p-3 text-left">内容</th>
                <th className="p-3 text-left rounded-tr-lg">根拠</th>
              </tr>
            </thead>
            <tbody>
              {CHECKS.map((x) => (
                <tr key={x.k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy whitespace-nowrap">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                  <td className="p-3 text-xs">{a(x.url, x.b)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※社会保険料の扱いは健康保険法・厚生年金保険法の条文を当サイトで整理したものです。協会けんぽ・厚生年金に加入している会社員を想定しています。
        </p>
        <p className="mb-10">
          賞与の支給日に在籍していることを支給の条件とするか、退職予定者の賞与を減額するかは、法律ではなく各社の就業規則・賃金規程で決まります。
          賞与の前後で辞めどきを考える場合は、賃金規程の支給条件と算定期間を確認しておく必要があります。退職の申し出から退職後の手続きまでの流れは
          <Link href="/knowledge/kaisha-yamekata/" className={link}>会社の辞め方</Link>で整理しています。
        </p>

        <h2>自己都合退職の所定給付日数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">雇用保険の被保険者期間</th>
                <th className="p-3 text-right rounded-tr-lg">所定給付日数（全年齢）</th>
              </tr>
            </thead>
            <tbody>
              {[["10年未満", "90日"], ["10年以上20年未満", "120日"], ["20年以上", "150日"]].map(([k, v]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※出典：{a(HW_DAYS, "ハローワーク「基本手当の所定給付日数」")}の「特定受給資格者及び一部の特定理由離職者以外の離職者」。受給できる期間は原則として離職日の翌日から1年間です（{a(HW_BASIC, "基本手当について")}）。
        </p>

        <h2>転職した人が前職を辞めた理由（令和7年雇用動向調査）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">前職を辞めた理由</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {REASONS.map(([k, m, f]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{m}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：{a(DOUKOU, "厚生労働省「令和7年雇用動向調査結果の概況」表5")}（転職入職者・主な項目を抜粋）。「その他の個人的理由」（男性16.8%・女性23.8%）などは掲載を省略しています。</p>
        <p className="mb-10">
          「その他の個人的理由」を除く具体的な理由のうち、男性は「給料等収入が少なかった」、女性は「労働時間、休日等の労働条件が悪かった」が最も多い項目です。
          同じ調査の表6では、転職で賃金が増えた人は40.8%、減った人は31.0%でした。年齢別では25〜29歳で増加が49.8%・減少が23.9%である一方、50〜54歳では減少が増加を12.6ポイント、55〜59歳では13.4ポイント上回ります。
          年齢が上がるほど、次の勤務先の条件を確かめてから辞めることの重要性が高くなります。
        </p>

        <h2>前の勤務先での勤続期間（令和7年転職者実態調査）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">直前の勤め先での勤続期間</th>
                <th className="p-3 text-right rounded-tr-lg">転職者の割合</th>
              </tr>
            </thead>
            <tbody>
              {TENURE.map(([k, v]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：{a(JITTAI_1, "厚生労働省「令和7年転職者実態調査の概況」表9")}。</p>
        <p className="mb-10">
          転職者のうち、前の勤務先を1年未満で辞めた人は19.0%、2年以上勤めてから辞めた人は66.7%です（当サイトで合計）。
          同調査の表10では、直前の勤め先を自己都合で辞めた人が81.3%で、自己都合の理由（3つまで回答）は「賃金が低かった」25.5%、「会社の将来に不安」25.2%、「満足のいく仕事内容でなかった」24.7%の順に多くなっています（{a(JITTAI_2, "表11")}）。
          仕事が自分に合わないと感じている場合の考え方は<Link href="/knowledge/shigoto-muitenai/" className={link}>仕事が向いていないと感じたとき</Link>で、統計をもとに整理しています。
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
          <li><Link href="/knowledge/kaisha-yamekata/" className={link}>会社の辞め方</Link></li>
          <li><Link href="/knowledge/shigoto-muitenai/" className={link}>仕事が向いていないと感じたとき</Link></li>
          <li><Link href="/knowledge/bonus-sukunai/" className={link}>ボーナスが少ないかを統計で確認</Link></li>
          <li><Link href="/knowledge/4shu6kyu/" className={link}>4週6休とは</Link></li>
          <li><Link href="/knowledge/tedori-360man/" className={link}>年収360万円の手取り</Link></li>
          <li><Link href="/knowledge/when-to-start/" className={link}>転職エージェントに登録する時期</Link></li>
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
