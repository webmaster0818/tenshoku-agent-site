import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const CHECKED = "2026年11月22日";
const MHLW_BASE = "令和8年11月1日";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/nurse/" },
  title: "看護師の転職サイトおすすめ8選｜公開求人数・許可番号・雇用形態を公式情報で比較",
  description:
    "看護師向けの転職支援サービス8つ（マイナビ看護師・看護師ワーカー・eナースセンター・ナースJJ・看護roo!転職・ナース専科 転職・レバウェル看護・ナースではたらこ）を、運営会社・許可番号・公式表示の求人件数・雇用形態で比較しています（2026年11月22日確認）。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "看護師の転職サイトおすすめ8選｜公開求人数・許可番号・雇用形態を公式情報で比較",
    description: "看護師向け転職支援サービス8つを、許可番号・公式表示の求人件数・雇用形態で比較（2026年11月22日確認）。",
  },
};

type Service = {
  name: string;
  url: string;
  company: string;
  license: string;
  count: string;
  countNote: string;
  area: string;
  employment: string;
  note: string;
};

// 並び順：公式サイトに現在の公開・掲載件数として表示された値の多い順（1〜4）。
// 件数の定義が確認できないもの・累計値や過去時点の値のみのもの・表示がないもの（5〜8）は後ろに置く。
const services: Service[] = [
  {
    name: "マイナビ看護師",
    url: "https://kango.mynavi.jp/",
    company: "株式会社マイナビ",
    license: "13-ユ-080554（許可年月日 平成14年3月1日）",
    count: "120,374件",
    countNote: "公式トップに「公開求人数」として表示（同じ箇所に「うち非公開求人数 7,970件」と併記）。2026年11月22日現在の表示です。",
    area: "全国（47都道府県別の件数を表示）",
    employment: "正社員／契約社員・嘱託社員／パート・アルバイト／業務委託その他",
    note: "公式サイトでは、医療機関や企業から支払われる紹介手数料によって運営していると説明しています。",
  },
  {
    name: "看護師ワーカー（旧：医療ワーカー）",
    url: "https://iryouworker.com/",
    company: "株式会社トライトキャリア",
    license: "27-ユ-305209（許可年月日 令和8年4月1日）",
    count: "58,812件",
    countNote: "公式トップに「掲載求人数」として表示（更新日 2026年11月21日）。",
    area: "全国（都道府県別の求人検索あり）",
    employment: "常勤（夜勤あり・日勤のみ・夜勤のみ）／パート（夜勤あり・日勤のみ）／夜勤バイト",
    note: "公式サイトのタイトルでは、サービス名を「看護師ワーカー（旧：医療ワーカー）」と表記しています。",
  },
  {
    name: "eナースセンター",
    url: "https://www.nurse-center.net/",
    company: "都道府県ナースセンター（各都道府県の公益社団法人看護協会が運営。サイトは公益社団法人日本看護協会）",
    license: "有料職業紹介の許可番号はありません（職業安定法にもとづく無料職業紹介事業）",
    count: "25,900件",
    countNote: "公式トップに表示された47都道府県別の件数を当サイトで合計した値です（全国合計の表示はありません）。",
    area: "全国47都道府県",
    employment: "常勤（正規雇用・正規以外の雇用）／非常勤（新着求人の表示区分）",
    note: "「看護師等の人材確保の促進に関する法律」にもとづき都道府県から指定を受けたナースセンターが運営し、求職者・求人施設のいずれからも手数料を受け取らないと説明しています。",
  },
  {
    name: "ナースJJ",
    url: "https://www.nursejj.com/",
    company: "株式会社ハートフルケア（JJメディケアキャリア事業部）",
    license: "13-ユ-319403（許可年月日 令和8年4月1日）",
    count: "23,152件",
    countNote: "公式の求人検索ページを条件指定なしで開いた際の検索結果件数です。",
    area: "全国（都道府県別の求人検索あり）",
    employment: "常勤／非常勤／派遣／単発",
    note: "運営会社は公式サイトの会社概要ページに記載された社名です。",
  },
  {
    name: "看護roo!転職",
    url: "https://www.kango-roo.com/career/",
    company: "株式会社クイック",
    license: "27-ユ-020100（許可年月日 平成9年8月1日）",
    count: "件数の定義を確認できず",
    countNote: "公式トップに「11/22現在 取り扱い求人 256,338件※1」と表示されていますが、注記※1の内容を確認できなかったため、公開求人数としては扱っていません。",
    area: "全国（47都道府県の求人検索あり）",
    employment: "公式トップの検索条件は勤務形態（2交代・3交代・日勤のみ・夜勤のみ）。雇用形態の区分は公式トップでは確認できませんでした",
    note: "公式サイトでは「東証プライム市場上場企業のクイックが、厚生労働大臣の許可を受けて運営」と説明しています。",
  },
  {
    name: "ナース専科 転職（旧：ナース人材バンク）",
    url: "https://tenshoku.nurse-senka.com/",
    company: "株式会社エス・エム・エス",
    license: "13-ユ-190019（許可年月日 平成15年7月1日）",
    count: "現在の公開求人数の表示なし",
    countNote: "公式トップの「累計求人数 240,855件」は「2016年4月以降の取り扱い求人数の累計」と注記されており、現在募集中の件数ではありません。",
    area: "全国（都道府県・市区町村・駅から求人検索あり）",
    employment: "常勤（夜勤含む）／常勤（日勤のみ）／非常勤（週20時間以上）／非常勤",
    note: "旧サービス名「ナース人材バンク」の公式URL（nursejinzaibank.com）は、現在「ナース専科 転職」の公式サイトへ転送されます（当サイト確認）。",
  },
  {
    name: "レバウェル看護",
    url: "https://kango-oshigoto.jp/",
    company: "レバウェル株式会社",
    license: "13-ユ-309623（許可年月日 平成30年8月1日）。労働者派遣事業 派13-310987も公式サイトに表示",
    count: "全国の最新件数の表示なし",
    countNote: "公式トップの記載は「全国6万件以上（2023年8月21日時点）」です。参考として、東京都の求人検索結果は10,672件でした。",
    area: "全国（47都道府県のエリアページあり）",
    employment: "常勤（夜勤有り）／夜勤専従常勤／日勤のみ／非常勤（パート）／夜勤バイト／派遣／紹介予定派遣",
    note: "職業紹介に加えて労働者派遣事業の許可番号も表示しており、派遣での就業にも対応しています。",
  },
  {
    name: "ナースではたらこ",
    url: "https://www.hatarako.net/agent/nurse/index.html",
    company: "ディップ株式会社",
    license: "13-ユ-303788（許可年月日 平成21年2月1日）",
    count: "求人件数の表示なし",
    countNote: "公式トップには求人件数の表示がありませんでした。",
    area: "全国（地域別の求人検索あり）",
    employment: "公式トップの入職例に常勤（日勤のみ・夜勤あり）を表示。求人検索はディップの求人サイト「はたらこねっと」へ移動します",
    note: "公式サイトでは「2009年創業の看護師専門転職サポート」と説明しています。",
  },
];

const prefCompare = [
  { pref: "東京都", mynavi: "12,647", enc: "1,928" },
  { pref: "神奈川県", mynavi: "9,319", enc: "1,033" },
  { pref: "愛知県", mynavi: "11,595", enc: "2,798" },
  { pref: "大阪府", mynavi: "9,440", enc: "1,072" },
  { pref: "福岡県", mynavi: "3,756", enc: "1,022" },
  { pref: "北海道", mynavi: "6,053", enc: "801" },
];

const faqData = [
  { q: "看護師の転職サイトの利用に料金はかかりますか？", a: "有料職業紹介事業者は、求人施設から紹介手数料を受け取る仕組みで運営しています。たとえばマイナビ看護師は、医療機関や企業から支払われる紹介手数料によって運営していると公式サイトで説明しています。都道府県ナースセンター（eナースセンター）は、手数料を受け取らない無料職業紹介事業です。各サービスの利用条件は、ご利用前に公式サイトにてご確認ください。" },
  { q: "転職サイトの許可番号はどこで確認できますか？", a: "厚生労働省の「人材サービス総合サイト」で、許可番号や事業主名から検索できます。当サイトでは、本ページに掲載した民間7サービスの運営会社について、同サイトで許可番号が有効であることを確認しています（基準日 令和8年11月1日、確認日 2026年11月22日）。" },
  { q: "求人件数が多いサービスを選べばよいですか？", a: "件数の数え方はサービスごとに異なります。マイナビ看護師は「公開求人数」とは別に、条件の組み合わせごとに数えた「のべ求人数」も表示しています。ナース専科 転職の240,855件は2016年4月以降の累計です。件数は規模の目安として参考にし、希望する地域・雇用形態の求人があるかを各公式サイトの検索でご確認いただくことをおすすめします。" },
  { q: "ナースセンターと民間の転職サイトの違いは何ですか？", a: "ナースセンターは「看護師等の人材確保の促進に関する法律」にもとづき都道府県が指定し、各都道府県の看護協会が運営する無料職業紹介事業です。民間の転職サイトは厚生労働大臣の許可を受けた有料職業紹介事業で、求人施設から手数料を受け取ります。日本看護協会の2024年度の分析では、ナースセンターで相談員の紹介を受けて応募した場合の応募就職率は58.4%、eナースセンターから直接応募した場合は23.9%と公表されています（労働政策研究・研修機構の記事による）。" },
  { q: "看護師は全国で何人働いていますか？", a: "厚生労働省「令和6年衛生行政報告例（就業医療関係者）」によると、令和6年末現在の就業看護師は1,363,142人で、前回（令和4年末）から51,455人（3.9%）増加しています。就業准看護師は233,022人、就業保健師は63,536人、就業助産師は38,721人です。" },
  { q: "複数の転職サイトに登録してもよいですか？", a: "複数のサービスに登録することは可能です。同じ施設に別々のサービスから応募することを避けるため、応募済みの施設名は各サービスの担当者に共有することをおすすめします。併用の考え方は「転職エージェントの複数利用・掛け持ち」のページで解説しています。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const th = "text-left py-2 px-3 bg-warm-gray font-bold text-navy align-top whitespace-nowrap";
const td = "py-2 px-3 align-top";

export default function NursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "業界別", href: "/" },
          { name: "看護師" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            看護師の転職サイトおすすめ8選｜許可番号・求人件数・雇用形態の比較
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新日：{CHECKED}</p>
          <p className="text-text-secondary leading-relaxed mb-3">
            当サイトでは、看護師向けの転職支援サービス8つについて、各公式サイト・運営会社の情報と、厚生労働省「人材サービス総合サイト」の許可情報を{CHECKED}に確認し、運営会社・許可番号・求人件数・対応地域・雇用形態を一覧にしています。
          </p>
          <p className="text-text-secondary leading-relaxed">
            公式サイトに現在の公開求人数として表示されていた件数は、マイナビ看護師が120,374件、看護師ワーカーが58,812件でした。費用をかけない公的な窓口としては、都道府県ナースセンターの無料職業紹介（eナースセンター）があります。派遣での就業を希望する場合は、労働者派遣事業の許可番号を表示しているレバウェル看護や、検索条件に派遣を設けているナースJJが比較の対象になります。
          </p>
        </div>

        {/* 一覧表 */}
        <h2>看護師向け転職支援サービス8選の比較表</h2>
        <p>
          <strong>掲載順の基準：</strong>各公式サイトに「現在の公開求人数・掲載求人数」として表示された件数の多い順に1〜4位を並べています。件数の定義を確認できないもの、累計値や過去時点の値のみ表示されているもの、件数の表示がないものは5〜8位に置いています。掲載順はサービスの優劣や利用者の評価を示すものではありません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={th}>No.</th>
                <th className={th}>サービス</th>
                <th className={th}>運営</th>
                <th className={th}>許可番号</th>
                <th className={th}>求人件数（{CHECKED}確認）</th>
                <th className={th}>対応地域</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={s.name} className="border-b border-border">
                  <td className={td}>{i + 1}</td>
                  <td className={`${td} font-bold text-navy`}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                      {s.name}
                    </a>
                  </td>
                  <td className={td}>{s.company}</td>
                  <td className={td}>{s.license}</td>
                  <td className={td}>{s.count}</td>
                  <td className={td}>{s.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：各サービスの公式サイト（トップページ・会社概要・求人検索ページ）、厚生労働省「<a href="https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do?action=initDisp&screenId=GICB101010" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">人材サービス総合サイト</a>」職業紹介事業所検索（基準日 {MHLW_BASE}）。いずれも{CHECKED}に確認しました。求人件数は日々変動するため、最新の件数は各公式サイトにてご確認ください。
        </p>

        {/* サービス別 */}
        <h2>各サービスの運営会社・求人件数・雇用形態</h2>
        <div className="space-y-4 mb-10">
          {services.map((s, i) => (
            <div key={s.name} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="rank-badge rank-badge--1">{i + 1}</span>
                <h3 className="font-bold text-navy text-lg">{s.name}</h3>
              </div>
              <dl className="text-sm text-text-secondary space-y-1 mb-3">
                <div><dt className="inline font-bold text-navy">運営：</dt><dd className="inline">{s.company}</dd></div>
                <div><dt className="inline font-bold text-navy">許可番号：</dt><dd className="inline">{s.license}</dd></div>
                <div><dt className="inline font-bold text-navy">求人件数：</dt><dd className="inline">{s.count}。{s.countNote}</dd></div>
                <div><dt className="inline font-bold text-navy">対応地域：</dt><dd className="inline">{s.area}</dd></div>
                <div><dt className="inline font-bold text-navy">雇用形態：</dt><dd className="inline">{s.employment}</dd></div>
              </dl>
              <p className="text-sm text-text-secondary mb-3">{s.note}</p>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-medium hover:underline">
                {s.name}の公式サイト &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* 地域別比較 */}
        <h2>都道府県別の求人件数：マイナビ看護師とeナースセンターの比較</h2>
        <p>
          民間の転職サイトと公的なナースセンターでは、求人の集まり方が地域によって異なります。当サイトでは、両サービスの公式トップに表示された都道府県別の件数を同じ日に取得し、主な6都道府県を並べました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={th}>都道府県</th>
                <th className={th}>マイナビ看護師（件）</th>
                <th className={th}>eナースセンター（件）</th>
              </tr>
            </thead>
            <tbody>
              {prefCompare.map((p) => (
                <tr key={p.pref} className="border-b border-border">
                  <td className={`${td} font-bold text-navy`}>{p.pref}</td>
                  <td className={td}>{p.mynavi}</td>
                  <td className={td}>{p.enc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          出典：<a href="https://kango.mynavi.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">マイナビ看護師</a>・<a href="https://www.nurse-center.net/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">eナースセンター</a>の公式トップに表示された都道府県別件数（{CHECKED}確認）。件数の数え方は両サービスで同一とは限りません。
        </p>
        <p className="mb-8">
          マイナビ看護師では東京都の件数が最も多い一方、eナースセンターでは愛知県（2,798件）が東京都（1,928件）を上回っていました。お住まいの地域によっては、民間の転職サイトとあわせてナースセンターの求人も確認することで、選択肢を広げられる場合があります。
        </p>

        {/* 公的データ */}
        <h2>看護職の就業者数と転職市場に関する公的データ</h2>
        <h3>就業看護師は136万3,142人、8割強が正規雇用</h3>
        <p>
          厚生労働省「令和6年衛生行政報告例（就業医療関係者）」によると、令和6年末現在の就業看護師は1,363,142人で、前回（令和4年末）から51,455人（3.9%）増加しています。就業准看護師は233,022人（前回比8.4%減）、就業保健師は63,536人、就業助産師は38,721人です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={th}>項目（看護師・令和6年末）</th>
                <th className={th}>人数</th>
                <th className={th}>構成割合</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className={td}>就業場所：病院</td><td className={td}>895,944人</td><td className={td}>65.7%</td></tr>
              <tr className="border-b border-border"><td className={td}>就業場所：診療所</td><td className={td}>194,665人</td><td className={td}>14.3%</td></tr>
              <tr className="border-b border-border"><td className={td}>就業場所：介護保険施設等</td><td className={td}>107,984人</td><td className={td}>7.9%（当サイト計算）</td></tr>
              <tr className="border-b border-border"><td className={td}>就業場所：訪問看護ステーション</td><td className={td}>91,022人</td><td className={td}>6.7%</td></tr>
              <tr className="border-b border-border"><td className={td}>雇用形態：正規雇用</td><td className={td}>1,115,543人</td><td className={td}>81.8%</td></tr>
              <tr className="border-b border-border"><td className={td}>雇用形態：非正規雇用</td><td className={td}>242,085人</td><td className={td}>17.8%</td></tr>
              <tr className="border-b border-border"><td className={td}>雇用形態：派遣</td><td className={td}>5,514人</td><td className={td}>0.4%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-6">
          出典：厚生労働省「<a href="https://www.mhlw.go.jp/toukei/saikin/hw/eisei/24/dl/gaikyo.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">令和6年衛生行政報告例（就業医療関係者）の概況</a>」表1・表2・図1（{CHECKED}確認）。人数は実人員です。介護保険施設等の構成割合は、107,984人÷1,363,142人で当サイトが計算しました。
        </p>

        <h3>ナースセンターの求人倍率は2.51倍（2024年度）</h3>
        <p>
          日本看護協会が2025年11月21日に公表した「ナースセンター登録データに基づく看護職の求職・求人・就職に関する分析」（2024年度）によると、都道府県ナースセンターの求職者数は68,724人、求人数は172,522人で、求人倍率は前年度から0.29ポイント上昇して2.51倍となりました。2015年度（2.68倍）以来の高い水準です。
        </p>
        <ul className="space-y-2 text-sm text-text-secondary mb-4">
          <li>相談員の紹介を受けて応募する「紹介応募」の応募就職率は58.4%、eナースセンターから求職者が直接応募する「システム応募」は23.9%でした。</li>
          <li>就業中の求職者が挙げた退職したい理由（複数回答）は、「看護職の他の職場への興味」14.3%が最も多く、「子育て」10.4%、「転居」8.1%が続きます。</li>
          <li>就職の際に重視する条件（上位3つまでの複数回答）は、「勤務時間」22.6%、「給与」18.1%の順でした。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：独立行政法人労働政策研究・研修機構「<a href="https://www.jil.go.jp/kokunai/topics/mm/20251212c.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ナースセンターの看護師の求人倍率が2.51倍で10年ぶりの高水準／日本看護協会集計</a>」（2025年12月12日掲載、{CHECKED}確認）。数値は日本看護協会の公表内容を同機構が紹介したものです。ナースセンター経由の求人・求職に限った集計であり、看護職の転職市場全体を示すものではありません。
        </p>

        {/* 選び方 */}
        <h2>看護師の転職サイトの選び方</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "許可番号を確認する", desc: "有料職業紹介事業は厚生労働大臣の許可が必要です。公式サイトに表示された許可番号を、厚生労働省「人材サービス総合サイト」で検索すると、事業主名と許可の有効性を確認できます。本ページの民間7サービスはいずれも有効であることを当サイトで確認しています。" },
            { step: 2, title: "希望する雇用形態の求人があるか確認する", desc: "常勤・非常勤・夜勤専従・派遣など、検索条件の区分はサービスごとに異なります。派遣での就業を希望する場合は、労働者派遣事業の許可を持つサービスかどうかもあわせて確認してください。" },
            { step: 3, title: "求人件数は定義をそろえて比較する", desc: "公開求人数・のべ求人数・累計求人数・取り扱い求人など、表示の名称と数え方はサービスごとに異なります。件数の注記を確認し、希望する地域で実際に検索した件数で比較することをおすすめします。" },
            { step: 4, title: "公的な窓口も選択肢に入れる", desc: "都道府県ナースセンターは無料職業紹介事業として、求人紹介のほか再就業支援研修なども実施しています。ブランクからの復職を考えている場合は、民間サービスとあわせて検討できます。" },
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

        {/* 掲載範囲 */}
        <h2>本ページの掲載範囲について</h2>
        <p className="text-sm text-text-secondary mb-8">
          本ページの情報は{CHECKED}時点で当サイトが各公式サイト・公的資料で確認した内容です。満足度や利用者数の順位、口コミは掲載していません。各公式サイトに表示された「No.1」等の表記は、調査の条件を当サイトで検証していないため引用していません。サービス内容や求人件数は変更される場合がありますので、ご利用前に各公式サイトにて最新情報をご確認ください。
        </p>

        {/* FAQ */}
        <h2>看護師の転職サイト よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの複数利用
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの選び方
            </Link>
            <Link href="/industry/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITエンジニア向けエージェント
            </Link>
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル向けエージェント
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
