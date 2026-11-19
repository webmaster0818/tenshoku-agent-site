import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/kaisha-yamekata/" },
  title: "会社の辞め方【民法627条・労働基準法】退職の申し出から2週間の決まりと退職後の手続き",
  description:
    "会社の辞め方を、民法・労働基準法の条文と、厚生労働省・労働局・ハローワーク・協会けんぽ・日本年金機構の公式案内で確認しました。期間の定めのない雇用は申し出から2週間で終了します。就業規則との関係、有期契約の場合、退職時に請求できる書類、雇用保険・健康保険・年金の手続きの期限を整理しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "会社の辞め方【民法627条・労働基準法】退職の申し出と退職後の手続き",
    description: "法律の決まりと公式の案内から、退職の申し出から退職後の手続きまでを整理しています。",
  },
};

const CHECKED = "2026年11月20日";

const steps = [
  { s: "1", t: "就業規則で退職の申出期間を確認する", d: "多くの会社は就業規則に「退職の○か月前までに申し出る」などの定めを置いています。法律との関係は下の「就業規則との関係」をご覧ください。" },
  { s: "2", t: "退職の意思を伝える（退職届・退職願）", d: "期間の定めのない雇用では、民法第627条第1項により、労働者はいつでも解約の申入れができ、申入れの日から2週間を経過すると雇用は終了します。会社の同意は要件ではありません。" },
  { s: "3", t: "引き継ぎと年次有給休暇の取得", d: "年次有給休暇は、労働者が請求する時季に与えなければならないと労働基準法第39条第5項で定められています。退職日までの日程は、引き継ぎと合わせて相談すると円滑です。" },
  { s: "4", t: "退職日に書類を受け取る・請求する", d: "退職証明書（労働基準法第22条）は請求すれば遅滞なく交付されます。離職票は会社がハローワークに手続きをした後に交付されます。" },
  { s: "5", t: "退職後の手続き（健康保険・年金・雇用保険）", d: "次の勤務先が決まっていない場合、健康保険の任意継続は資格喪失日から20日以内、国民年金への切り替えは退職日の翌日から14日以内が期限です。" },
];

const faq = [
  {
    q: "退職は何日前に伝えればよいですか？",
    a: "期間の定めのない雇用契約では、民法第627条第1項により、退職の申入れの日から2週間を経過すると雇用は終了します。厚生労働省のスタートアップ労働条件のQ&Aでは、令和2年4月施行の改正民法により、労働者からの辞職の予告期間は月給制や年俸制でも一律2週間になったと説明しています。ただし就業規則に申出期間の定めがある場合は、トラブルを防ぐためにまずその定めに沿って申し出ることが労働局のQ&Aでも勧められています。",
  },
  {
    q: "会社に「後任が見つかるまで辞めさせない」と言われたらどうなりますか？",
    a: "大阪労働局のQ&Aでは、期間の定めのない雇用契約は、会社の同意がなければ退職できないというものではないと説明しています（民法第627条）。話し合いで解決しない場合は、都道府県労働局や労働基準監督署内の総合労働相談コーナー（無料・予約不要）に相談できます。",
  },
  {
    q: "契約社員（有期契約）は契約期間の途中で辞められますか？",
    a: "期間の定めがある場合は、原則として契約期間中は辞めることができませんが、やむを得ない事由があるときは直ちに契約を解除できます（民法第628条）。また、契約期間が1年を超える有期契約（一定の事業の完了に必要な期間を定めるものなどを除く）では、契約の初日から1年を経過した日以後はいつでも退職を申し出ることができます（労働基準法附則第137条）。",
  },
  {
    q: "退職を申し出た後に撤回できますか？",
    a: "厚生労働省のスタートアップ労働条件のQ&Aでは、労働者が合意退職の申込みをした場合、使用者の承諾によって合意退職が成立するため、承諾があるまでは申込みを撤回できると説明しています。",
  },
  {
    q: "自己都合で退職した場合、失業手当（基本手当）はいつから受け取れますか？",
    a: "厚生労働省のQ&Aによると、自己都合で退職した場合、受給手続日から原則として7日経過した日の翌日から、退職日が令和7年4月1日以降であれば原則1か月間（令和7年3月31日以前は原則2か月間）の給付制限があります。5年間に2回以上正当な理由なく自己都合退職して受給資格決定を受けた場合などは3か月です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Gov法令検索 民法（第626条〜第629条）", url: "https://laws.e-gov.go.jp/law/129AC0000000089" },
  { label: "e-Gov法令検索 労働基準法（第22条・第23条・第39条・附則第137条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "厚生労働省 スタートアップ労働条件 Q&A「解雇と合意退職・辞職の違いについて教えてください。」", url: "https://www.startup-roudou.mhlw.go.jp/qa/zigyonushi/kaiko/q7.html" },
  { label: "大阪労働局「よくあるご質問（退職・解雇・雇止め）」", url: "https://jsite.mhlw.go.jp/osaka-roudoukyoku/yokuaru_goshitsumon/jigyounushi/taisyoku.html" },
  { label: "茨城労働局「やめたいのにダメと言われて困ってる」", url: "https://jsite.mhlw.go.jp/ibaraki-roudoukyoku/yokuaru_goshitsumon/shurouchu/worker_d/qa_wyametai.html" },
  { label: "厚生労働省 確かめよう労働条件 Q&A「自己都合の退職の際、退職勤務証明書を請求できますか？」", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/kaiko/q9.html" },
  { label: "厚生労働省 確かめよう労働条件 Q&A「借金を返すまで退職できないという契約は有効？」", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/koyou/q9.html" },
  { label: "厚生労働省「Q&A～労働者の皆様へ（基本手当、再就職手当）～」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000139508.html" },
  { label: "全国健康保険協会（協会けんぽ）よくあるご質問「任意継続の加入条件について」", url: "https://www.kyoukaikenpo.or.jp/faq/voluntary_continuation/002/index.html" },
  { label: "全国健康保険協会（協会けんぽ）「任意継続」", url: "https://www.kyoukaikenpo.or.jp/g7/cat710/sb3160/sb3180/sbb3180/1984-6168/" },
  { label: "日本年金機構「国民年金に加入するための手続き」", url: "https://www.nenkin.go.jp/service/kokunen/kanyu/20140710-04.html" },
  { label: "厚生労働省「令和7年度個別労働紛争解決制度の施行状況」（令和8年7月7日）", url: "https://www.mhlw.go.jp/stf/houdou/newpage_00235.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "会社の辞め方" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            会社の辞め方【民法627条・労働基準法】退職の申し出から2週間の決まりと退職後の手続き
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "2週間", l: "期間の定めのない雇用が申し出から終了するまで（民法627条）" },
              { v: "7日以内", l: "請求があった場合の賃金の支払い（労働基準法23条）" },
              { v: "20日以内", l: "健康保険の任意継続の申出期限（協会けんぽ）" },
              { v: "14日以内", l: "国民年金への切り替えの期限（日本年金機構）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            正社員など期間の定めのない雇用契約では、民法第627条第1項により、労働者はいつでも退職を申し入れることができ、<strong>申入れの日から2週間を経過すると雇用は終了</strong>します。会社の同意は必要ありません。
            ただし、就業規則に申出期間の定めがある場合は、まずその定めに沿って申し出ることがトラブルの防止につながると労働局のQ&Aでも案内されています。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：e-Gov法令検索・厚生労働省・労働局・協会けんぽ・日本年金機構の公式案内（{CHECKED}に当サイトで確認）。個別の事情は専門の窓口でご確認ください。</p>
        </div>

        <h2>退職までの流れ</h2>
        <div className="space-y-4 mb-10">
          {steps.map((x) => (
            <div key={x.s} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">STEP{x.s}　{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>雇用契約の種類と退職のルール</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">契約の種類</th>
                <th className="p-3 text-left rounded-tr-lg">退職のルール</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "期間の定めのない雇用（正社員など）", v: "いつでも解約の申入れができ、申入れの日から2週間で終了（民法第627条第1項）。月給制・年俸制でも労働者からの申入れは2週間（令和2年4月施行の改正民法）" },
                { k: "期間の定めのある雇用（契約社員など）", v: "原則として契約期間中は辞められない。やむを得ない事由があれば直ちに解除できる（民法第628条）。事由が労働者の過失による場合は損害賠償の責任を負うことがある" },
                { k: "契約期間が1年を超える有期契約", v: "契約の初日から1年を経過した日以後は、申し出ればいつでも退職できる（労働基準法附則第137条。高度な専門知識等を持つ人・満60歳以上の人などを除く）" },
                { k: "有期契約の期間満了後も働き続けている場合", v: "同一の条件で更に雇用したものと推定され、民法第627条による解約の申入れができる（民法第629条第1項）" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※e-Gov法令検索の民法・労働基準法（現行）を当サイトで要約。</p>

        <h2>就業規則の「1か月前」などの定めとの関係</h2>
        <p>
          就業規則で民法より長い申出期間を定めている場合の扱いについて、行政の案内には説明の幅があります。
        </p>
        <div className="space-y-4 mb-4">
          {[
            { t: "厚生労働省 スタートアップ労働条件のQ&A", d: "民法第627条の期間を超える解約予告期間の設定を無効とする裁判例が多いことを挙げ、民法の予告期間を就業規則等で延長することはできないと説明しています。" },
            { t: "大阪労働局のQ&A", d: "会社の就業規則に退職の規定がある場合は原則として就業規則の規定が適用されるので確認するよう案内し、極端に長い申出期間は公序良俗の見地から無効とされる場合もあるとしています。" },
            { t: "茨城労働局のQ&A", d: "申出期間の定めが社会通念上著しく長期間でない場合（例：1か月前までの申出）は、トラブル防止のために、まず就業規則の定めに沿って申し出たほうがよいとしています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          法律上は2週間で退職できるという説明が中心ですが、引き継ぎや有給休暇の取得を円滑に進めるためには、就業規則の期間に合わせて早めに申し出るのが実務上の目安です。
          転職先の入社日が決まっている場合は、内定時に入社日を調整しておくと安心です。登録のタイミングと活動期間は<Link href="/knowledge/when-to-start/" className="text-teal font-bold hover:underline">転職エージェントはいつ登録すべきか</Link>でも解説しています。
        </p>

        <h2>辞めさせてもらえないときに知っておきたいこと</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "会社の同意は退職の要件ではない", d: "大阪労働局は、期間の定めのない雇用契約は会社の同意がなければ退職できないというものではないと説明しています。茨城労働局も、使用者の承諾がない場合でも2週間を経過すれば効力が発生するとしています。" },
            { t: "借金や違約金を理由に退職を禁じることはできない", d: "厚生労働省のQ&Aでは、借金を返すまで退職を禁止する約定は公序良俗違反（民法第90条）で無効になり、借金が残っていても退職は可能だと説明しています。労働基準法第16条は、違約金や損害賠償額を予定する契約を禁止しています。" },
            { t: "相談件数の多いテーマ", d: "厚生労働省「令和7年度個別労働紛争解決制度の施行状況」では、民事上の個別労働紛争の相談のうち「自己都合退職」が38,386件で、「いじめ・嫌がらせ」に次いで2番目に多い相談内容でした。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          話し合いで解決しない場合は、都道府県労働局・労働基準監督署内の総合労働相談コーナー（無料・予約不要）に相談できます。職場の状況に不安がある場合は<Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link>のページもご覧ください。
        </p>

        <h2>退職時に受け取る・請求できるもの</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-left rounded-tr-lg">内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "退職証明書", v: "使用期間・業務の種類・地位・賃金・退職の事由について請求すれば、会社は遅滞なく交付しなければならない（労働基準法第22条）。離職票とは別に請求でき、回数の制限はない（厚生労働省Q&A）" },
                { k: "賃金・積立金などの返還", v: "請求があった場合、会社は7日以内に賃金を支払い、労働者の権利に属する金品を返還しなければならない（労働基準法第23条）" },
                { k: "離職票", v: "会社が離職日の翌々日から10日以内に資格喪失届をハローワークに提出し、ハローワークが発行した離職票が会社経由で交付される（厚生労働省Q&A）" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy whitespace-nowrap">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※会社が手続きをしない場合は、退職証明書などを持って住居所を管轄するハローワークに相談するよう厚生労働省のQ&Aで案内されています。
        </p>

        <h2>退職後の手続きと期限（次の勤務先が決まっていない場合）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">手続き</th>
                <th className="p-3 text-left">期限・内容</th>
                <th className="p-3 text-left rounded-tr-lg">窓口</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "健康保険の任意継続", v: "資格喪失日（退職日の翌日等）から20日以内に申出書を提出。被保険者期間が継続して2か月以上必要。加入期間は2年間で、保険料は事業主負担分も本人負担（標準報酬月額32万円が上限）", w: "協会けんぽ（健康保険組合の加入者は各組合）" },
                { k: "国民年金への切り替え", v: "退職日の翌日から14日以内（配偶者の扶養に入る場合は第3号被保険者の手続き）", w: "住所地の市区町村役場" },
                { k: "雇用保険（基本手当）", v: "離職票を持って手続き。自己都合退職は、退職日が令和7年4月1日以降なら原則1か月の給付制限", w: "住居所を管轄するハローワーク" },
                { k: "住民税", v: "退職月によって、最後の給与からの一括徴収または本人の納付に切り替わる（地方税法第321条の5）", w: "市区町村の案内で確認" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy whitespace-nowrap">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                  <td className="p-3">{x.w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※協会けんぽ・日本年金機構・厚生労働省の公式案内（{CHECKED}確認）。次の勤務先に退職日の翌日に入社する場合は、新しい勤務先で健康保険・厚生年金に加入するため、任意継続や国民年金の手続きは不要です。
        </p>

        <h2>退職前に転職先を決めておくと手続きが少なくなる</h2>
        <p className="mb-10">
          在職中に転職先を決め、退職日の翌日に入社すれば、健康保険・年金の切り替えや給付制限の期間を気にする必要がなくなります。
          転職エージェントの中には、入社日の調整や退職交渉の進め方の助言を支援内容に含めているところがあります（例：<Link href="/review/workport/" className="text-teal font-bold hover:underline">ワークポート</Link>の公式サイトでは「退職交渉のアドバイス」を支援内容に挙げています）。サービスの比較は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>をご覧ください。
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

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link></li>
          <li><Link href="/knowledge/when-to-start/" className="text-teal font-bold hover:underline">転職エージェントに登録するタイミング</Link></li>
          <li><Link href="/knowledge/flow/" className="text-teal font-bold hover:underline">転職エージェント利用の流れ</Link></li>
          <li><Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link></li>
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
