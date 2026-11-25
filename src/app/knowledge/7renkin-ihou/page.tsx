import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/7renkin-ihou/" },
  title: "7連勤は違法？労働基準法の休日ルール（週1日・4週4日）と違法になるケースを条文で確認",
  description:
    "7連勤が違法になるかを労働基準法と施行規則の条文で確認しました。休日は「毎週1日」または「4週4日」でよいため7連勤だけでは直ちに違法とはいえませんが、1日8時間なら週40時間を超え、36協定と割増賃金が必要です。変形労働時間制の連続6日の上限、罰則、相談先も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "7連勤は違法？労働基準法の休日ルールと違法になるケースを条文で確認",
    description: "労働基準法の条文から、7連勤が違法になる条件と、割増賃金・罰則を整理しています。",
  },
};

const CHECKED = "2026年11月26日";
const LSA = "https://laws.e-gov.go.jp/law/322AC0000000049";
const LSA_RULE = "https://laws.e-gov.go.jp/law/322M40000100023";
const PREMIUM_ORDER = "https://laws.e-gov.go.jp/law/406CO0000000005";

// 7連勤（1日の労働時間別）の週の労働時間と、週40時間（第32条第1項）を超える時間（当サイト計算）
const HOURS = [8, 7, 6, 5].map((h) => ({ h, week: h * 7, over: Math.max(0, h * 7 - 40) }));

const faq = [
  {
    q: "7連勤は労働基準法違反ですか？",
    a: "7連勤というだけでは直ちに違法とはいえません。労働基準法 第35条は休日を「毎週少くとも一回」と定めていますが、「四週間を通じ四日以上の休日」を与える場合は適用しないとしています。ただし、1日8時間で7日働くと週56時間となり、第32条の週40時間を超えるため、36協定の締結・届出と割増賃金の支払いがなければ違法になります。",
  },
  {
    q: "何連勤から違法になりますか？",
    a: "法律に「何連勤まで」という上限日数はありません。当サイトの計算では、毎週1日の休日（週の区切りを日曜〜土曜とした場合）なら最大12連勤、4週4日の休日なら2つの4週間をまたいで最大48連勤まで、休日の規定（第35条）には反しません。一方、1年単位の変形労働時間制では、連続して労働させる日数の上限が原則6日です（施行規則 第12条の4第5項）。",
  },
  {
    q: "7連勤した場合の割増賃金はどうなりますか？",
    a: "週40時間を超えた時間には25%以上の割増賃金が必要です（第37条・割増賃金令）。会社が定めた法定休日に働いた場合は、その日の労働に35%以上の割増賃金が必要です。月60時間を超える時間外労働は50%以上です。会社独自の休日（法定休日以外の所定休日）に働いた場合は、休日労働ではなく、週40時間を超えた分が時間外労働として扱われます。",
  },
  {
    q: "管理職でも7連勤の規定は同じですか？",
    a: "労働基準法 第41条は、監督若しくは管理の地位にある者（管理監督者）には、労働時間・休憩・休日の規定を適用しないと定めています。ただし、管理監督者にあたるかは役職名ではなく実態で判断されます。肩書きが管理職でも、権限や待遇が伴わない場合は通常の労働者として扱われる可能性があります。",
  },
  {
    q: "7連勤が続いて違法だと思ったらどこに相談できますか？",
    a: "各都道府県労働局や労働基準監督署内に設置された「総合労働相談コーナー」で、予約不要・無料で相談できます（厚生労働省の案内）。勤務表・タイムカードの写しなど、働いた日と時間がわかる記録を残しておくと相談がしやすくなります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Gov法令検索 労働基準法（第32条・第32条の4・第35条・第36条・第37条・第41条・第119条）", url: LSA },
  { label: "e-Gov法令検索 労働基準法施行規則（第12条の2・第12条の4）", url: LSA_RULE },
  { label: "e-Gov法令検索 労働基準法第三十七条第一項の時間外及び休日の割増賃金に係る率の最低限度を定める政令", url: PREMIUM_ORDER },
  { label: "厚生労働省「総合労働相談コーナーのご案内」", url: "https://www.mhlw.go.jp/general/seido/chihou/kaiketu/soudan.html" },
];

const th = "p-3 text-right";
const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "7連勤は違法か" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            7連勤は違法？労働基準法の休日ルール（週1日・4週4日）と違法になるケースを条文で確認
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "週1日 or 4週4日", l: "法律で必要な休日の最低限（第35条）" },
              { v: "週40時間", l: "労働時間の上限。超える場合は36協定が必要（第32条・第36条）" },
              { v: "56時間", l: "1日8時間×7連勤の週の労働時間（当サイト計算）" },
              { v: "連続6日", l: "1年単位の変形労働時間制での連続労働日数の上限（原則）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>7連勤は、それだけでは直ちに違法とはいえません。</strong>
            労働基準法 第35条の休日は「毎週少くとも一回」が原則ですが、「四週間を通じ四日以上」の休日を与える方法も認められているためです。
            ただし、1日8時間で7日続けて働くと週56時間となり、週40時間（第32条）を16時間超えます。36協定の締結・届出がない場合や、割増賃金が支払われていない場合は違法です。
            1年単位の変形労働時間制を採用している職場では、連続して働かせられる日数は原則6日までのため、7連勤は認められません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            条文はe-Gov法令検索で{CHECKED}に確認しました。連勤日数・労働時間の計算は当サイトによるもので、個別の事案が違法かどうかは労働基準監督署などの判断によります。
          </p>
        </div>

        <h2>7連勤が違法になるケース・ならないケース</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">状況</th>
                <th className="p-3 text-left">判断</th>
                <th className="p-3 text-left rounded-tr-lg">根拠</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["4週4日以上の休日があり、7日間の労働時間の合計が週40時間以内（1日5時間など）", "休日・労働時間の規定には反しない", "第32条・第35条第2項"],
                ["1日8時間で7連勤。36協定を締結・届出し、超えた16時間に25%以上の割増賃金を支払っている", "36協定の範囲内なら違法ではない", "第36条・第37条"],
                ["1日8時間で7連勤。36協定がない、または割増賃金が支払われていない", "違法", "第32条・第37条（罰則 第119条）"],
                ["4週間の中で休日が4日未満（36協定による休日労働でない）", "違法", "第35条（罰則 第119条）"],
                ["1年単位の変形労働時間制で、特定期間以外に7日以上連続して労働させる", "認められない（原則6日まで）", "第32条の4第3項・施行規則 第12条の4第5項"],
                ["管理監督者（役職名ではなく実態で判断）", "休日の規定が適用されない", "第41条第2号"],
              ].map(([s, j, b]) => (
                <tr key={s} className="border-b border-gray-100 align-top">
                  <td className="p-3">{s}</td>
                  <td className={`p-3 whitespace-nowrap ${j === "違法" ? "font-bold text-navy" : ""}`}>{j}</td>
                  <td className="p-3 text-xs">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※条文の要件を当サイトで整理したものです。変形労働時間制・36協定の内容や、労働時間の数え方によって結論は変わります。</p>

        <h2>休日のルール：毎週1日、または4週間で4日</h2>
        <p className="mb-4">
          労働基準法 第35条第1項は「使用者は、労働者に対して、毎週少くとも一回の休日を与えなければならない」と定め、第2項で「四週間を通じ四日以上の休日を与える使用者については適用しない」としています（{a(LSA, "e-Gov法令検索 労働基準法")}）。
          4週4日の方法をとる場合、会社は就業規則などで4週間の起算日を明らかにする必要があります（{a(LSA_RULE, "労働基準法施行規則 第12条の2第2項")}）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">休日の与え方</th>
                <th className={th}>休日の規定に反しない最大の連勤日数</th>
                <th className="p-3 text-left rounded-tr-lg">考え方（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">毎週1日（第35条第1項）</td>
                <td className="p-3 text-right whitespace-nowrap font-bold text-navy">12日</td>
                <td className="p-3">週の区切りを日曜〜土曜とした場合、ある週の日曜を休日、翌週の土曜を休日にすると、間の月曜〜翌週金曜の12日間が連続勤務になります。</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">4週4日（第35条第2項）</td>
                <td className="p-3 text-right whitespace-nowrap font-bold text-navy">48日</td>
                <td className="p-3">ある4週間の最初の4日を休日、次の4週間の最後の4日を休日にすると、間の48日間が連続勤務になります。</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">1年単位の変形労働時間制（第32条の4）</td>
                <td className="p-3 text-right whitespace-nowrap font-bold text-navy">6日（特定期間は12日）</td>
                <td className="p-3">施行規則 第12条の4第5項で連続労働日数の上限は6日、労使協定で定めた特定期間は「一週間に一日の休日が確保できる日数」とされています。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※休日の規定（第35条）だけで見た理論上の最大日数です。実際には週40時間の上限と36協定の範囲、健康への配慮が別に必要になります。特定期間の12日は、毎週1日の休日と同じ考え方で当サイトが計算した値です。</p>
        <p className="mb-10">
          このように、休日の規定だけを見ると、7連勤は「毎週1日」の方法でも「4週4日」の方法でも起こり得ます。
          違法かどうかの判断で重要になるのは、休日の日数よりも、次の労働時間の上限と36協定・割増賃金の扱いです。
        </p>

        <h2>労働時間のルール：1日8時間・週40時間を超えると36協定が必要</h2>
        <p className="mb-4">
          第32条は、休憩時間を除き1週間に40時間、1日に8時間を超えて労働させてはならないと定めています。これを超えて働かせるには、労働者の過半数で組織する労働組合（ない場合は過半数代表者）と書面で協定を結び、労働基準監督署に届け出る必要があります（第36条・いわゆる36協定）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">1日の労働時間</th>
                <th className={th}>7連勤の週の労働時間</th>
                <th className="p-3 text-right rounded-tr-lg">週40時間を超える時間</th>
              </tr>
            </thead>
            <tbody>
              {HOURS.map((x) => (
                <tr key={x.h} className={`border-b border-gray-100 ${x.h === 8 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.h}時間</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.week}時間</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.over > 0 ? `${x.over}時間` : "超えない"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※当サイト計算（休憩時間を除く実労働時間・7日間が同じ週に入る場合）。変形労働時間制を採用している場合は、週40時間の判断の仕方が異なります。</p>
        <p className="mb-10">
          1日5時間の勤務であれば7連勤でも週35時間で、週40時間を超えません。1日6時間では週42時間となり、2時間が時間外労働です。
          36協定を結んでいても、時間外労働と休日労働の合計は月100時間未満、2〜6か月の平均で月80時間以内でなければなりません（第36条第6項）。
        </p>

        <h2>7連勤で必要になる割増賃金</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">労働の種類</th>
                <th className={th}>割増率の最低限度</th>
                <th className="p-3 text-left rounded-tr-lg">根拠</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["時間外労働（1日8時間・週40時間を超えた時間）", "25%", "第37条第1項・割増賃金令"],
                ["時間外労働のうち月60時間を超えた時間", "50%", "第37条第1項ただし書"],
                ["法定休日（第35条の休日）の労働", "35%", "第37条第1項・割増賃金令"],
              ].map(([k, v, b]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{v}</td>
                  <td className="p-3 text-xs">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※割増賃金令は{a(PREMIUM_ORDER, "労働基準法第三十七条第一項の時間外及び休日の割増賃金に係る率の最低限度を定める政令")}（延長した労働時間は2割5分、休日の労働は3割5分）。深夜（午後10時〜午前5時）の労働にはさらに25%以上の割増が必要です。
        </p>
        <p className="mb-10">
          週休2日の会社で7連勤になった場合、2日の休日のうちどちらが法定休日かによって割増率が変わります。法定休日に働いた日は35%以上、法定休日以外の休日（所定休日）に働いた日は、週40時間を超えた時間について25%以上の割増が必要です。
          どの日が法定休日かは就業規則で確認できます。給与明細の時間外手当・休日手当が実際の勤務と合っているかを確かめておくと、相談するときの材料になります。
        </p>

        <h2>違反した場合の罰則と相談先</h2>
        <p className="mb-4">
          第32条（労働時間）・第35条（休日）・第37条（割増賃金）に違反した使用者は、6か月以下の拘禁刑または30万円以下の罰金の対象です（第119条第1号）。
        </p>
        <p className="mb-10">
          連勤や残業代の扱いに疑問がある場合は、各都道府県労働局や労働基準監督署内の「総合労働相談コーナー」で、予約不要・無料で相談できます（
          {a("https://www.mhlw.go.jp/general/seido/chihou/kaiketu/soudan.html", "厚生労働省「総合労働相談コーナーのご案内」")}）。
          連勤が常態化していて改善が見込めない場合は、転職も選択肢になります。休日の多い職場を探す際は、
          <Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link>や
          <Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link>を目安に、求人票の年間休日・所定労働時間を比べる方法があります。
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
          <li><Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link></li>
          <li><Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link></li>
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className="text-teal font-bold hover:underline">定時で帰れる仕事</Link></li>
          <li><Link href="/knowledge/tedori-14man-hitorigurashi/" className="text-teal font-bold hover:underline">手取り14万円で一人暮らしはできるか</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
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
