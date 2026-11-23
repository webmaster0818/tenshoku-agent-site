import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/komuin-yametai/" },
  title: "公務員を辞めたいときに確認すること｜自己都合退職9,951人の勤続年数・退職手当・失業時の給付【2026年】",
  description:
    "公務員を辞めたいときに確認したい事実を官公庁の資料で整理しました。国家公務員の自己都合退職は令和6年度9,951人（平均32.8歳・勤続9年10月）、地方公務員の普通退職は78,760人です。自己都合の退職手当の計算、雇用保険が適用されない場合の失業時の給付、再就職の規制、兼業制度の見直しも解説しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "公務員を辞めたいときに確認すること【2026年】",
    description: "国家・地方公務員の退職の統計と、退職手当・失業時の給付・再就職規制を官公庁の資料で整理しています。",
  },
};

const CHECKED = "2026年11月24日";
const CAS = "https://www.cas.go.jp/jp/gaiyou/jimu/jinjikyoku/files/shikyu_jokyo_r06.pdf";
const JINJI = "https://www.jinji.go.jp/content/000010709.pdf";
const OVERTIME = "https://www.jinji.go.jp/content/000017466.pdf";
const SOUMU = "https://www.soumu.go.jp/main_content/001048098.pdf";
const TAISHOKU = "https://laws.e-gov.go.jp/law/328AC1000000182";
const KOYO = "https://laws.e-gov.go.jp/law/349AC0000000116";
const KOKKA = "https://laws.e-gov.go.jp/law/322AC0000000120";
const CHIHO = "https://laws.e-gov.go.jp/law/325AC0000000261";
const KENGYO = "https://www.jinji.go.jp/content/000013505.pdf";

// 内閣官房内閣人事局「退職手当の支給状況（令和6年度）」常勤職員・自己都合・勤続期間別（平均支給額は千円）
const selfQuit = [
  { k: "5年未満", n: 4489, avg: 307 },
  { k: "5〜9年", n: 2165, avg: 969 },
  { k: "10〜14年", n: 1002, avg: 2870 },
  { k: "15〜19年", n: 657, avg: 5385 },
  { k: "20〜24年", n: 399, avg: 9400 },
  { k: "25〜29年", n: 425, avg: 13805 },
];

// 総務省「令和6年度 地方公務員の退職状況等調査」第5表 普通退職者の年齢（在職期間の通算を伴う退職者等を除く）
const local = [
  { k: "25歳未満", a: 5655, b: 5846 },
  { k: "25〜29歳", a: 12644, b: 12572 },
  { k: "30〜34歳", a: 9845, b: 9412 },
  { k: "35〜39歳", a: 7421, b: 6900 },
];

// 国家公務員退職手当法 第3条・附則第6項から当サイトで計算した自己都合退職の支給率（退職日俸給月額に対する月数・調整額を除く）
const rate = (years: number) => {
  let base = 0;
  for (let y = 1; y <= years; y++) base += y <= 10 ? 1.0 : y <= 15 ? 1.1 : y <= 20 ? 1.6 : y <= 25 ? 2.0 : y <= 30 ? 1.6 : 1.2;
  const cut = years <= 10 ? 0.6 : years <= 15 ? 0.8 : years <= 19 ? 0.9 : 1;
  return base * cut * 0.837;
};
const rates = [3, 5, 10, 15, 20].map((y) => ({ y, r: rate(y) }));
const n = (v: number) => v.toLocaleString("ja-JP");

const faq = [
  {
    q: "公務員を自己都合で辞める人はどのくらいいますか？",
    a: "内閣官房内閣人事局「退職手当の支給状況」によると、令和6年度に自己都合で退職し退職手当を受けた国家公務員（常勤職員）は9,951人で、退職時の平均年齢は32.8歳、平均勤続年数は9年10月です。地方公務員では、総務省「地方公務員の退職状況等調査」で令和6年度の普通退職者が78,760人（前年度比3.5%増）です。",
  },
  {
    q: "公務員を辞めると失業保険はもらえますか？",
    a: "国家公務員は雇用保険法第6条と同法施行規則第4条により雇用保険の適用が除外されているため、失業しても雇用保険の基本手当は受けられません。代わりに、国家公務員退職手当法第10条により、受け取った退職手当の額が雇用保険の基本手当に相当する額に満たない場合、その差額が「失業者の退職手当」として公共職業安定所を通じて支給されます。地方公務員は条例で同様の制度を定めているため、勤務先の条例を確認してください。",
  },
  {
    q: "自己都合で辞めると退職手当はいくらになりますか？",
    a: `国家公務員退職手当法では、退職日の俸給月額に勤続年数ごとの割合を掛け、自己都合の場合は勤続10年以下で60%、11〜15年で80%、16〜19年で90%を掛けたうえで、当分の間83.7%を掛けます。当サイトの計算では、勤続5年で俸給月額の約${rate(5).toFixed(2)}か月分、勤続10年で約${rate(10).toFixed(2)}か月分です（調整額を除く）。令和6年度の自己都合退職の平均支給額は、勤続5年未満で30.7万円、5〜9年で96.9万円です。`,
  },
  {
    q: "公務員が在職中に転職活動をしてもよいですか？",
    a: "在職中の転職活動そのものは禁止されていません。ただし国家公務員は、国家公務員法第106条の3により、職務上の利害関係がある企業等に対して、離職後の地位を目的に自分の情報を提供したり地位を求めたりすることが原則として禁止されています。また離職後の地位に就くことを約束した場合は、同法第106条の23により任命権者への届出が必要です。",
  },
  {
    q: "公務員は副業で準備してから辞めることはできますか？",
    a: "国家公務員の兼業は国家公務員法第103条・第104条により承認または許可が必要です。人事院は自営兼業制度を見直し、令和8年4月から「職員の有する知識・技能をいかした事業」と「社会貢献に資する事業」を、承認基準を満たせば承認できるようにしました。地方公務員は地方公務員法第38条により任命権者の許可が必要です。",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{children}</a>
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "公務員を辞めたいとき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            公務員を辞めたいときに確認すること｜自己都合退職9,951人の勤続年数・退職手当・失業時の給付
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "9,951人", l: "国家公務員の自己都合退職（令和6年度・常勤）" },
              { v: "32.8歳", l: "自己都合退職者の平均年齢" },
              { v: "78,760人", l: "地方公務員の普通退職（令和6年度）" },
              { v: "15.5%", l: "超過勤務の上限を超えた職員の割合（国・他律部署）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="text-text-secondary leading-relaxed">
            <p>
              公務員を辞めたいと感じたときは、<strong>辞めた人の規模と時期、自己都合退職の退職手当、雇用保険が適用されない場合の失業時の給付、再就職の規制</strong>の4点を先に確認しておくと、判断と準備がしやすくなります。
            </p>
            <p className="mt-2">
              令和6年度に自己都合で退職し退職手当を受けた国家公務員は9,951人で、平均年齢は32.8歳、平均勤続年数は9年10月です（内閣人事局）。地方公務員の普通退職者は78,760人で、前年度より2,678人（3.5%）増えています（総務省）。
              公務員は民間企業と退職時の制度が異なるため、本ページでは官公庁の資料と法令の条文をもとに整理しています。
            </p>
          </div>
          <p className="text-xs text-text-muted mt-3">
            出典：内閣官房内閣人事局「退職手当の支給状況（令和6年度）」、人事院「令和7年度 年次報告書」「上限を超えて超過勤務を命ぜられた職員の状況に関する調査（令和6年度）」、総務省「令和6年度 地方公務員の退職状況等調査」、e-Gov法令検索。いずれも{CHECKED}確認。
          </p>
        </div>

        <h2>国家公務員の自己都合退職は勤続5年未満が45%</h2>
        <p>
          内閣人事局の「退職手当の支給状況」では、令和6年度に退職手当を受けた常勤職員31,193人のうち、自己都合退職が9,951人でした。勤続年数別にみると、5年未満が4,489人で自己都合退職の約45%を占めます（当サイト計算）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">勤続年数</th>
                <th className="p-3 text-right">自己都合退職の受給者数</th>
                <th className="p-3 text-right rounded-tr-lg">平均支給額</th>
              </tr>
            </thead>
            <tbody>
              {selfQuit.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.n)}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.avg)}千円</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">自己都合の計（平均勤続9年10月）</td>
                <td className="p-3 text-right whitespace-nowrap">9,951人</td>
                <td className="p-3 text-right whitespace-nowrap">3,454千円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：<A href={CAS}>内閣官房内閣人事局「退職手当の支給状況（令和6年度）」</A>（常勤職員・{CHECKED}確認）。退職手当を受けた人の数のため、勤続1年未満で支給対象とならない退職者は含まれません。
        </p>
        <p className="mb-10">
          自己都合退職者を年齢別にみると、20〜24歳が2,559人、25〜29歳が2,263人、30〜34歳が1,276人で、20代が半数近くを占めます。
          人事院の年次報告書では、令和6年度の国家公務員の離職者総数（定年退職を含む）は22,749人で前年度より3,314人増え、離職率は給与法適用職員で7.8%です（<A href={JINJI}>人事院「令和7年度 年次報告書」</A>）。
        </p>

        <h2>地方公務員の普通退職は25〜29歳が最も多い</h2>
        <p>
          総務省の調査では、令和6年度の地方公務員の離職者は135,027人で、そのうち普通退職者（自己都合退職など）は78,760人でした。在職期間の通算を伴う退職者等を除いた普通退職者69,647人の年齢は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">令和6年度</th>
                <th className="p-3 text-right rounded-tr-lg">令和5年度</th>
              </tr>
            </thead>
            <tbody>
              {local.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.a)}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.b)}人</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">普通退職者の計（通算を伴う退職者等を除く）</td>
                <td className="p-3 text-right whitespace-nowrap">69,647人</td>
                <td className="p-3 text-right whitespace-nowrap">67,046人</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※出典：<A href={SOUMU}>総務省「令和6年度 地方公務員の退職状況等調査」第5表</A>（{CHECKED}確認）。普通退職者の計には60歳の18,452人など、表に載せていない年齢も含みます。
          教員の離職の状況は<Link href="/knowledge/kyoin-yametai/" className="text-teal font-bold hover:underline">教員を辞めたいとき</Link>にまとめています。
        </p>

        <h2>辞めたい理由に関わる数字：超過勤務と長期病休</h2>
        <p className="mb-4">
          人事院の調査では、令和6年度に超過勤務の上限を超えて勤務を命じられた国家公務員は、他律部署（国会対応などで業務量を自ら決めにくい部署）で11,925人（15.5%）、本府省の他律部署に限ると10,747人（26.7%）でした。月100時間の上限を超えた職員は5,121人（6.7%）で、前年度より700人減っています（<A href={OVERTIME}>人事院「上限を超えて超過勤務を命ぜられた職員の状況に関する調査（令和6年度）」</A>）。
        </p>
        <p className="mb-10">
          また、令和6年度に精神及び行動の障害で長期病休となった国家公務員は5,945人（全職員の2.11%）で、人数・率とも前年度より増えています（<A href={JINJI}>人事院「令和7年度 年次報告書」</A>）。
          長時間労働や体調不良が理由の場合は、退職を決める前に、所属の健康管理部門や人事院・各府省の相談窓口に相談し、休職や異動の可能性も確かめておくことをおすすめします。
        </p>

        <h2>自己都合退職の退職手当は勤続10年以下で6割</h2>
        <p>
          国家公務員の退職手当の基本額は、退職日の俸給月額に勤続年数ごとの割合（1〜10年は1年につき100%、11〜15年は110%、16〜20年は160%など）を掛けて合計します。自己都合退職の場合は、勤続10年以下で60%、11〜15年で80%、16〜19年で90%を掛け、さらに附則で当分の間83.7%を掛けます（<A href={TAISHOKU}>国家公務員退職手当法 第3条・附則第6項</A>）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">勤続年数（自己都合退職）</th>
                <th className="p-3 text-right rounded-tr-lg">退職日俸給月額に対する支給率（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}年</td>
                  <td className="p-3 text-right whitespace-nowrap">約{x.r.toFixed(2)}か月分</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※条文の割合から当サイトで計算した基本額の目安で、第6条の4の調整額（職責に応じた加算）は含みません。勤続20年以上の自己都合退職は第3条第2項の減額の対象外です。地方公務員の退職手当は各自治体の条例で定められています。
        </p>

        <h2>雇用保険の基本手当の代わりに「失業者の退職手当」がある</h2>
        <p className="mb-10">
          国家公務員は、離職時に受ける給与が雇用保険の給付を上回ると認められるとして、雇用保険の適用が除外されています（<A href={KOYO}>雇用保険法 第6条第6号</A>・同法施行規則第4条）。そのため、民間企業の会社員のように基本手当（いわゆる失業保険）は受けられません。
          代わりに、勤続12か月以上で退職した職員は、受け取った退職手当の額が、雇用保険法を当てはめた場合の基本手当の総額に満たないとき、その差額を「失業者の退職手当」として公共職業安定所を通じて受けられます（国家公務員退職手当法 第10条）。
          勤続年数が短く退職手当が少ない場合に関係する制度のため、転職先が決まる前に辞める場合は、退職前に人事担当で受給の条件を確認してください。地方公務員は、都道府県・市町村の長が承認を受けた職員が適用除外となり、条例で同様の制度を定めています。
        </p>

        <h2>在職中の転職活動と再就職の規制</h2>
        <p className="mb-4">
          国家公務員は、在職中に職務上の利害関係がある企業等に対して、離職後の地位に就くことを目的に自分の情報を提供したり、地位を求めたりすることが原則として禁止されています（<A href={KOKKA}>国家公務員法 第106条の3</A>）。
          離職後の地位に就くことを約束した場合は、速やかに任命権者に届け出る必要があります（同法 第106条の23）。転職先の候補が現在の職務の取引先や監督先に当たるかどうかは、応募の前に確認しておくことが大切です。
        </p>
        <p className="mb-10">
          また、再就職した元職員は、離職後2年間、離職前5年間の職務に関わる契約や処分について元の職場の職員に働きかけることが禁止されています（国家公務員法 第106条の4、<A href={CHIHO}>地方公務員法 第38条の2</A>）。
          兼業については、人事院が自営兼業制度を見直し、令和8年4月から「職員の有する知識・技能をいかした事業」と「社会貢献に資する事業」を、承認基準を満たせば承認できるようにしています（<A href={KENGYO}>人事院「自営兼業制度の見直しについて（概要）」</A>）。
        </p>

        <h2>公務員から民間企業へ転職する場合の進め方</h2>
        <p className="mb-10">
          公務員から民間企業への転職では、職務経歴を民間の職種に置き換えて説明できるかが選考の分かれ目になります。
          転職エージェントの選び方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>にまとめています。
          仕事が合わないと感じる場合の公的な相談先は<Link href="/knowledge/shigoto-muitenai/" className="text-teal font-bold hover:underline">仕事が向いてないと感じて辞めたいとき</Link>にまとめています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1 mb-4">
          {[
            { label: "内閣官房内閣人事局 退職手当の支給状況（令和6年度）", url: CAS },
            { label: "人事院 令和7年度 年次報告書（離職の状況・長期病休者）", url: JINJI },
            { label: "人事院 上限を超えて超過勤務を命ぜられた職員の状況に関する調査（令和6年度）", url: OVERTIME },
            { label: "総務省 令和6年度 地方公務員の退職状況等調査", url: SOUMU },
            { label: "e-Gov法令検索 国家公務員退職手当法", url: TAISHOKU },
            { label: "e-Gov法令検索 雇用保険法", url: KOYO },
            { label: "e-Gov法令検索 国家公務員法", url: KOKKA },
            { label: "e-Gov法令検索 地方公務員法", url: CHIHO },
            { label: "人事院 自営兼業制度の見直しについて（概要）", url: KENGYO },
          ].map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
