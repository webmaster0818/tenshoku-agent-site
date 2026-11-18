import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man, pct, yen, TAKE_HOME_CHECKED, TAKE_HOME_SOURCES } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-hayamihyo/" },
  title: "年収別の手取り早見表【2026年・令和8年の税制】年収200万〜3000万円を一覧で試算",
  description:
    "年収200万円から3,000万円までの手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算した早見表です。年額・月額・手取りの割合に加え、40〜64歳（介護保険料あり）の手取りも掲載しています。年収ごとの解説ページへのリンクも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収別の手取り早見表【2026年・令和8年の税制】",
    description: "年収200万〜3000万円の手取りを、令和8年の税制・保険料率で一覧にしています。",
  },
};

// 早見表に載せる年収（万円）と、個別の解説ページがある年収
const LIST = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1700, 2000, 2500, 3000];
const PAGES: Record<number, string> = {
  300: "/knowledge/tedori-300man/",
  400: "/knowledge/tedori-400man/",
  450: "/knowledge/tedori-450man/",
  500: "/knowledge/tedori-500man/",
  600: "/knowledge/tedori-600man/",
  700: "/knowledge/tedori-700man/",
  800: "/knowledge/tedori-800man/",
  1000: "/knowledge/tedori-1000man/",
  1200: "/knowledge/tedori-1200man/",
  1500: "/knowledge/tedori-1500man/",
  2000: "/knowledge/tedori-2000man/",
  3000: "/knowledge/tedori-3000man/",
};

const rows = LIST.map((m) => ({ m, u: calcTakeHome(m * 10000), o: calcTakeHome(m * 10000, true) }));
const r300 = rows.find((x) => x.m === 300)!;
const r500 = rows.find((x) => x.m === 500)!;
const r1000 = rows.find((x) => x.m === 1000)!;
const r3000 = rows.find((x) => x.m === 3000)!;

const faq = [
  {
    q: "年収ごとの手取りはどのくらいですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、年収300万円の手取りは${man(r300.u.net)}（${pct(r300.u.rate)}）、年収500万円は${man(r500.u.net)}（${pct(r500.u.rate)}）、年収1,000万円は${man(r1000.u.net)}（${pct(r1000.u.rate)}）です（当サイト試算）。年収が高いほど所得税の税率が上がるため、手取りの割合は下がります。`,
  },
  {
    q: "手取りは年収の何割ですか？",
    a: `当ページの試算では、年収200万〜600万円は約8割、年収1,000万円で約7割、年収3,000万円で${pct(r3000.u.rate)}です。社会保険料は厚生年金の標準報酬月額の上限（65万円）があるため年収が高いほど割合が下がりますが、所得税の累進課税の影響がそれを上回ります。`,
  },
  {
    q: "40歳を過ぎると手取りは変わりますか？",
    a: `40〜64歳は介護保険料（協会けんぽの令和8年度料率1.62%の折半）が加わります。年収500万円の場合、手取りは年${man(r500.u.net - r500.o.net)}少なくなり、${man(r500.o.net)}です（当サイト試算）。`,
  },
  {
    q: "賞与がある場合も同じ早見表を使えますか？",
    a: "年収が同じでも、賞与の割合によって社会保険料が変わります。健康保険・厚生年金の保険料は、毎月の給与は標準報酬月額、賞与は標準賞与額に料率を掛けて計算するためです（日本年金機構「厚生年金保険の保険料」）。当ページは賞与なし（年収を12等分）の前提のため、賞与が多い場合は目安としてご覧ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const manLabel = (m: number) => `${m.toLocaleString("ja-JP")}万円`;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年収別の手取り早見表" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年収別の手取り早見表【2026年・令和8年の税制】年収200万〜3000万円を一覧で試算
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[r300, r500, r1000, r3000].map((x) => (
              <div key={x.m} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{man(x.u.net)}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">年収{manLabel(x.m)}の手取り（{pct(x.u.rate)}）</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            年収ごとの手取りは、<strong>年収600万円までは額面の約8割、年収1,000万円で約7割</strong>が目安です（40歳未満・独身・賞与なし）。
            下の早見表では、年収200万円から3,000万円までの26段階について、社会保険料・税金を差し引いた手取りを年額と月額で示しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            試算の前提：東京都在住・協会けんぽ加入・独身で扶養なし・賞与なし（年収を12等分した月給）・一般の事業。
            令和8年の制度値を{TAKE_HOME_CHECKED}に国税庁・協会けんぽ・日本年金機構・厚生労働省・総務省の公表資料で確認し、当サイトで計算しています。
          </p>
        </div>

        <h2>年収別の手取り早見表（40歳未満）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">額面年収</th>
                <th className="p-3 text-right">社会保険料</th>
                <th className="p-3 text-right">所得税</th>
                <th className="p-3 text-right">住民税</th>
                <th className="p-3 text-right">手取り（年額）</th>
                <th className="p-3 text-right">手取り（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((x) => (
                <tr key={x.m} className="border-b border-gray-100">
                  <td className="p-3 whitespace-nowrap">
                    {PAGES[x.m] ? (
                      <Link href={PAGES[x.m]} className="text-teal font-bold hover:underline">{manLabel(x.m)}</Link>
                    ) : (
                      manLabel(x.m)
                    )}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.u.social)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.u.incomeTax)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.u.residentTax)}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{man(x.u.net)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.u.netMonthly)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pct(x.u.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※当サイト試算。所得税は復興特別所得税を含む年末調整後の年額、住民税は同じ年収が翌年も続いた場合の年額です（所得割10%・均等割4,000円・森林環境税1,000円）。
          年収の欄が色付きのものは、内訳と制度の解説を個別のページに掲載しています。お住まいの自治体や加入する健康保険組合によって実際の金額は変わります。
        </p>

        <h2>40〜64歳（介護保険料あり）の手取り</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">額面年収</th>
                <th className="p-3 text-right">40歳未満の手取り</th>
                <th className="p-3 text-right">40〜64歳の手取り</th>
                <th className="p-3 text-right rounded-tr-lg">差額（年）</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((x) => [300, 400, 500, 600, 700, 800, 1000, 1200, 1500, 2000, 3000].includes(x.m)).map((x) => (
                <tr key={x.m} className="border-b border-gray-100">
                  <td className="p-3">{manLabel(x.m)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.u.net)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.o.net)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.u.net - x.o.net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          介護保険料は健康保険料と同じく標準報酬月額に料率を掛けるため、年収が高いほど差額はおおむね大きくなります。ただし、健康保険の標準報酬月額の上限（139万円）を超える年収では保険料そのものが一定になり、年収3,000万円では所得税の税率の違いにより差額が年収2,000万円より小さくなります。
          差額は、介護保険料が社会保険料控除として所得税・住民税を減らす効果を差し引いた後の金額です（当サイト試算）。
        </p>

        <h2>早見表の使い方と注意点</h2>
        <p className="mb-10">
          社会保険料は標準報酬月額の等級ごとに決まるため、年収がわずかに増えただけで等級が上がり、手取りが数千円〜数万円減る場合があります。
          また、令和8年分の所得税の基礎控除は合計所得金額に応じて段階的に下がるため、年収665万円前後や850万円前後でも手取りの伸びが小さくなります。
          境目の詳しい仕組みは<Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link>・
          <Link href="/knowledge/tedori-800man/" className="text-teal font-bold hover:underline">年収800万円の手取り</Link>・
          <Link href="/knowledge/tedori-3000man/" className="text-teal font-bold hover:underline">年収3000万円の手取り</Link>で解説しています。
          月給から手取りを知りたい場合は<Link href="/knowledge/gesshu-30man-tedori/" className="text-teal font-bold hover:underline">月収30万円の手取り</Link>、
          手取りから額面を逆算する場合は<Link href="/knowledge/tedori-gesshu-40man/" className="text-teal font-bold hover:underline">手取り40万円の額面</Link>をご覧ください。
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
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1000万円の手取り</Link></li>
          <li><Link href="/knowledge/gesshu-40man-tedori/" className="text-teal font-bold hover:underline">月収40万円の手取り</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link></li>
          <li><Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">転職エージェント各社の年収アップ実績の比較</Link></li>
        </ul>

        <h2>出典・計算に使用した資料</h2>
        <p className="text-sm text-text-secondary">いずれも{TAKE_HOME_CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1 mb-4">
          {TAKE_HOME_SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-text-muted">
          令和8年分の所得税は、11月までの給与からは改正前の税額表で源泉徴収され、12月の年末調整で改正後の基礎控除・給与所得控除により精算されます（国税庁「令和8年分 年末調整のしかた」）。
          当ページの所得税は、年末調整後の年額の目安です。
        </p>
      </article>
    </>
  );
}
