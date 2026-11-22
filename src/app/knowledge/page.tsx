import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { DODA, MHLW, STATS_CONFIRMED_AT } from "@/data/stats";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/" },
  title: "転職エージェント活用ガイド一覧｜使い方・面談・メール例文・書類対策【2026年】",
  description:
    "転職エージェントの使い方・選び方から、面談準備、お礼メール例文、職務経歴書の書き方、複数利用のコツまで、転職活動の各ステップで役立つ実践ガイドの一覧ページです。",
};

const guides = [
  { href: "/knowledge/how-to-choose/", title: "転職エージェントの選び方", desc: "比較すべき7つのポイント。得意分野・求人数・サポートの見極め方" },
  { href: "/knowledge/flow/", title: "使い方・流れ 8ステップ", desc: "登録から内定までの全体像と各ステップのコツ" },
  { href: "/knowledge/when-to-start/", title: "いつ登録すべき？", desc: "最適な登録タイミングと平均的な活動期間" },
  { href: "/knowledge/interview-prep/", title: "エージェントとの面談対策", desc: "準備・服装・当日の流れ。初回面談を有効に活用するために" },
  { href: "/knowledge/email-template/", title: "お礼メール例文13選", desc: "面談後・内定後・辞退・返信までそのまま使える例文集" },
  { href: "/knowledge/resume/", title: "職務経歴書の書き方", desc: "職務要約の例文・テンプレートと書類通過のコツ" },
  { href: "/knowledge/multiple/", title: "複数利用・掛け持ちのコツ", desc: "メリット・デメリットとおすすめの組み合わせ" },
  { href: "/knowledge/useless/", title: "「使えない」と感じたら", desc: "担当変更・切り替えなどの対処法と上手な活用術" },
  { href: "/knowledge/agent-briefing/", title: "エージェントへの伝え方", desc: "仕事内容の具体化と条件の優先順位。紹介求人の精度が変わる3点" },
  { href: "/knowledge/job-history/", title: "転職回数と職歴の見られ方", desc: "何回から気にされるか。コンサルタント243人調査と採用側の本音" },
];

const dataGuides = [
  { href: "/knowledge/tedori-300man/", title: "年収300万円の手取り", desc: "令和8年の税制で試算。住民税が所得税を上回る理由と入社1年目の手取り" },
  { href: "/knowledge/tedori-400man/", title: "年収400万円の手取り", desc: "令和8年の税制・保険料率で試算。内訳と年収300万〜500万円との比較" },
  { href: "/knowledge/tedori-500man/", title: "年収500万円の手取り", desc: "令和8年の税制で試算。国税庁統計で見る年収500万円の位置" },
  { href: "/knowledge/tedori-600man/", title: "年収600万円の手取り", desc: "年収665万円台で基礎控除が下がり手取りが逆転する境目も試算" },
  { href: "/knowledge/tedori-700man/", title: "年収700万円の手取り", desc: "令和8年の税制で試算。40歳から加わる介護保険料の影響も比較" },
  { href: "/knowledge/tedori-800man/", title: "年収800万円の手取り", desc: "年収850万円を超えると基礎控除が下がり手取りが一時的に減る境目" },
  { href: "/knowledge/tedori-1000man/", title: "年収1000万円の手取り", desc: "給与所得控除・厚生年金保険料の上限と、100万円増えたときの手取り" },
  { href: "/knowledge/tedori-2000man/", title: "年収2000万円の手取り", desc: "所得税33%の区分・保険料の上限・2,000万円超の確定申告" },
  { href: "/knowledge/tedori-gesshu-18man/", title: "手取り18万円の額面", desc: "必要な額面月給と年収を逆算。手取り16万〜25万円の早見表つき" },
  { href: "/knowledge/annual-holidays-120/", title: "年間休日120日の水準", desc: "厚労省調査で120日以上の企業は39.3%。2026年の土日祝は121日" },
  { href: "/knowledge/gesshu-30man-tedori/", title: "月収30万円の手取り", desc: "額面月収30万円の手取りと内訳。月収25万〜40万円の早見表つき" },
  { href: "/knowledge/annual-holidays-105/", title: "年間休日105日の水準", desc: "1日8時間勤務で法律上ほぼ下限の日数。2026年の土日は104日" },
  { href: "/knowledge/zangyo-average/", title: "残業時間の平均", desc: "毎月勤労統計で一般労働者は月13.2時間。業種別一覧と36協定の上限" },
  { href: "/knowledge/salary-30sai/", title: "30歳の平均年収", desc: "国税庁統計で30〜34歳は462万円。男女別・前後の年齢との比較" },
  { href: "/knowledge/salary-35sai/", title: "35歳の平均年収", desc: "賃金構造基本統計調査から35〜39歳は約513万円。学歴別・勤続年数別の比較" },
  { href: "/knowledge/tedori-1200man/", title: "年収1200万円の手取り", desc: "令和8年の税制で試算。年収1,195万円超で配偶者控除がなくなる境目" },
  { href: "/knowledge/tedori-1500man/", title: "年収1500万円の手取り", desc: "年収約1,301万円から所得税33%。子どもがいる場合の所得金額調整控除" },
  { href: "/knowledge/tedori-gesshu-40man/", title: "手取り40万円の額面", desc: "必要な額面月給と年収を逆算。手取り30万〜50万円の早見表つき" },
  { href: "/knowledge/salary-25sai/", title: "25歳の平均年収", desc: "国税庁統計で25〜29歳は425万円。大学卒の初任給26.2万円との比較" },
  { href: "/knowledge/dai2-shinsotsu-itsumade/", title: "第二新卒はいつまで", desc: "厚労省の指針で卒業後3年が目安。大学卒の3年以内離職率は31.2%（令和5年3月卒）" },
  { href: "/knowledge/tedori-450man/", title: "年収450万円の手取り", desc: "令和8年の税制で試算。賞与がある場合の毎月の手取りの例つき" },
  { href: "/knowledge/shoukyu-heikin/", title: "昇給の平均", desc: "厚労省調査で月13,601円・4.4%。企業規模別・産業別の一覧" },
  { href: "/knowledge/daisotsu-nenshu/", title: "大卒の平均年収", desc: "賃金構造基本統計調査から約611万円と算出。年齢別・学歴別の比較" },
  { href: "/knowledge/tedori-3000man/", title: "年収3000万円の手取り", desc: "年収約2,695万円超で基礎控除がなくなる境目と所得税40%の区分" },
  { href: "/knowledge/salary-40sai/", title: "40歳の平均年収", desc: "賃金構造基本統計調査から40〜44歳は約554万円。介護保険料による手取りの差も試算" },
  { href: "/knowledge/tedori-gesshu-17man/", title: "手取り17万円の額面", desc: "必要な額面月給と年収を逆算。令和7年の学歴別初任給で計算した手取りつき" },
  { href: "/knowledge/tedori-350man/", title: "年収350万円の手取り", desc: "令和8年の税制で試算。月給29万円の境目で手取りが逆転する仕組み" },
  { href: "/knowledge/programmer-nenshu/", title: "プログラマーの平均年収", desc: "賃金構造基本統計調査（ソフトウェア作成者）から約538万円と算出。年齢別・企業規模別" },
  { href: "/knowledge/tedori-hayamihyo/", title: "年収別の手取り早見表", desc: "年収200万〜3000万円の手取りを令和8年の税制で一覧に。40歳以上の手取りも掲載" },
  { href: "/knowledge/gesshu-40man-tedori/", title: "月収40万円の手取り", desc: "額面月収40万円の手取りと内訳。月収39.5万円前後で手取りが逆転する仕組み" },
  { href: "/knowledge/nenshu-1000man-shokugyo/", title: "平均年収1000万円を超える職業", desc: "賃金構造基本統計調査の145職種から算出。航空機操縦士・医師など5職種" },
  { href: "/knowledge/tedori-gesshu-30man/", title: "手取り30万円の額面", desc: "必要な額面は月約38.0万円・年収約456万円。額面37万円前後で手取りが逆転" },
  { href: "/knowledge/tedori-gesshu-50man/", title: "手取り50万円の額面", desc: "必要な額面は月約67.3万円・年収約807.6万円。厚生年金保険料の上限も解説" },
  { href: "/knowledge/gesshu-50man-tedori/", title: "月収50万円の手取り", desc: "額面月収50万円の手取りは約38.8万円。40歳以上の手取りと月収48.5万円の境目" },
  { href: "/knowledge/30dai-josei-tenshoku/", title: "30代女性の転職", desc: "雇用動向調査で見る前職を辞めた理由と転職後の賃金の変化。育休の勤続要件も" },
  { href: "/knowledge/black-kigyo-tokucho/", title: "ブラック企業の特徴", desc: "厚生労働省の説明と令和7年度の監督指導結果、労働基準法の上限、相談先" },
  { href: "/knowledge/kaisha-yamekata/", title: "会社の辞め方", desc: "民法627条の2週間の決まり、就業規則との関係、退職後の手続きの期限" },
  { href: "/knowledge/nenshu-500man-josei/", title: "年収500万円を超える女性の割合", desc: "国税庁統計で18.9%（約421万人）。5年間の推移と男性との比較" },
  { href: "/knowledge/salary-50sai/", title: "50歳の平均年収", desc: "賃金構造基本統計調査から50〜54歳は約598万円。企業規模別・学歴別・勤続年数別" },
  { href: "/knowledge/shigoto-yasumitai/", title: "仕事を休みたいときに使える制度", desc: "年次有給休暇は理由不要・取得率66.9%。傷病手当金・休職制度と相談窓口" },
  { href: "/knowledge/dai2-shinsotsu-ote/", title: "第二新卒で大手企業に転職できるか", desc: "雇用動向調査で20〜24歳の転職者の34.6%が1,000人以上の企業へ。規模間の移動と離職率" },
  { href: "/knowledge/ai-nakunaru-shigoto/", title: "AIでなくなる仕事", desc: "野村総研の試算（労働人口の49%）で挙がった職業の平均年収を賃金統計で比較" },
  { href: "/knowledge/tedori-750man/", title: "年収750万円の手取り", desc: "令和8年の税制で試算。年収726万円・762万円で標準報酬月額が上がる境目" },
  { href: "/knowledge/tedori-gesshu-60man/", title: "手取り60万円の額面", desc: "必要な額面は月約82.5万円・年収約990万円。年収850万円の控除の境目" },
  { href: "/knowledge/annual-holidays-110/", title: "年間休日110日の水準", desc: "厚労省調査で平均112.4日・109日以下は39.0%。有給の平均取得を加えた休み" },
  { href: "/knowledge/gesshu-21man-tedori/", title: "月給21万円の手取り", desc: "令和8年の税制で約16.9万円。月給20.9万円より少なくなる境目と最低賃金との比較" },
  { href: "/knowledge/infra-engineer-nenshu/", title: "インフラエンジニアの平均年収", desc: "賃金構造基本統計調査（その他の情報処理・通信技術者）で約566万円。年齢別・企業規模別" },
  { href: "/knowledge/kouninkaikeishi-tenshoku/", title: "公認会計士の転職", desc: "組織内会計士の78%が監査法人から転職（協会アンケート）。年齢別・企業規模別の年収" },
  { href: "/knowledge/gesshu-28man-tedori/", title: "月給28万円の手取り", desc: "令和8年の税制で約22.4万円。学歴・年齢別の平均月給との比較" },
  { href: "/knowledge/gesshu-100man-tedori/", title: "月収100万円の手取り", desc: "令和8年の税制で約71.3万円。厚生年金の上限で社会保険料の割合が下がる仕組み" },
  { href: "/knowledge/gesshu-35man-tedori/", title: "月収35万円の手取り", desc: "令和8年の税制で約27.6万円。月収34.9万円より少なくなる標準報酬月額の境目" },
  { href: "/industry/nurse/", title: "看護師の転職サイト8選", desc: "許可番号・公式表示の求人件数・雇用形態で比較。ナースセンターの求人倍率2.51倍も" },
  { href: "/knowledge/kyoin-yametai/", title: "教員を辞めたいときに確認すること", desc: "精神疾患の休職7,087人・定年以外の離職15,540人。休職中の収入・辞職の手続き・退職手当" },
  { href: "/knowledge/gesshu-26man-tedori/", title: "月給26万円の手取り", desc: "令和8年の税制で約20.9万円。企業規模・年齢別の平均月給と月給24.9万円の境目" },
  { href: "/knowledge/bonus-60man-tedori/", title: "ボーナス60万円の手取り", desc: "令和8年分の算出率の表で約43万〜49万円。前月の給与別の早見表と夏季賞与の産業別平均" },
  { href: "/knowledge/gesshu-27man-tedori/", title: "月給27万円の手取り", desc: "令和8年の税制で約21.5万円。月給26.9万円より少なくなる理由と産業別の平均月給" },
  { href: "/knowledge/tedori-1800man/", title: "年収1800万円の手取り", desc: "令和8年の税制で約1,187.9万円。健康保険料の上限と所得税率40%になる年収の目安" },
];

const compares = [
  { href: "/compare/agent-vs-site/", title: "エージェント vs 転職サイト", desc: "12項目で違いを比較します。向いているのはどちらか" },
  { href: "/compare/recruit-vs-doda/", title: "リクルート vs doda", desc: "2大エージェントを10項目で比較" },
  { href: "/compare/mynavi-vs-recruit/", title: "マイナビ vs リクルート", desc: "20代の定番2社を比較" },
  { href: "/compare/salary-up/", title: "年収アップ実績の比較", desc: "各社が公表する年収アップ率・アップ額を定義・対象期間つきで一覧にしました" },
];

export default function KnowledgeHub() {
  return (
    <>
      <Breadcrumb items={[{ name: "活用ガイド一覧" }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェント活用ガイド一覧
          </h1>

          <div className="rounded-xl overflow-hidden my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/column-img/ts-knowledge.jpg" alt="転職の情報収集をイメージした静物" className="w-full h-auto" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            転職活動の期間は、おおむね3ヶ月が目安です。
            dodaの調査では活動開始から内定までの平均が約{DODA.avgMonths}ヶ月、
            厚生労働省の実態調査でも転職した人の{MHLW.under6mPct}%が6ヶ月未満で決めています。
            また、その3ヶ月のなかで<strong>つまずきやすい段階はある程度決まっています</strong>。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `約${DODA.avgMonths}ヶ月`, l: "活動開始から内定まで" },
              { v: `${DODA.avgApplications}社`, l: "転職成功者の平均応募社数" },
              { v: `約${DODA.docPassPct}%`, l: "書類選考の通過率" },
              { v: `${DODA.appsPerOffer}社`, l: "内定1社に必要な応募数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            書類選考の通過率が3割程度で、1社の内定に{DODA.appsPerOffer}社前後の応募が必要だとすると、
            時間がかかるのは面接ではなく<strong>応募を積み上げる段階</strong>です。
            そして応募が積み上がらない原因は、多くの場合
            <strong>①希望を言語化できていない ②書類を使い回している ③求人の母数が足りない</strong>の3つです。
            以下のガイドは、この3つの課題に順に対処できるよう構成しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：{DODA.source}／{MHLW.source}（いずれも{STATS_CONFIRMED_AT}に当サイトで確認）。
          </p>
        </div>

        <h2 className="section-title">活用ガイド</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-5 block">
              <h3 className="font-bold text-navy mb-1">{g.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="section-title">年収・労働条件のデータ</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {dataGuides.map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-5 block">
              <h3 className="font-bold text-navy mb-1">{g.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="section-title">サービス比較記事</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {compares.map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-5 block">
              <h3 className="font-bold text-navy mb-1">{g.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-teal/5 rounded-2xl border border-teal/15 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-extrabold text-navy text-lg mb-1">よくある質問</h2>
            <p className="text-sm text-text-secondary">費用・複数登録・断られた場合など、転職エージェントの疑問に回答しています。</p>
          </div>
          <Link href="/faq/" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">FAQを見る</Link>
        </div>
      </div>
    </>
  );
}
