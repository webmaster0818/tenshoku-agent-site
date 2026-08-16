import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "転職AGENT Naviの評判は？エージェントとのマッチングサービスを徹底解説【2026年】",
  description:
    "転職AGENT Navi(circus株式会社運営)は、300名以上のアドバイザーから相性の良い転職エージェント担当者を紹介するマッチングサービス。20代の既卒・第二新卒・フリーターが主対象。仕組み・特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "転職AGENT Naviの評判は？エージェントとのマッチングサービスを徹底解説【2026年】",
    description:
      "転職エージェントとのマッチングサービス「転職AGENT Navi」の仕組み・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "転職AGENT Naviの利用に費用はかかりますか？",
    a: "求職者の利用は完全無料と公式に案内されています。人材紹介の標準的なビジネスモデルとして企業側が費用を負担する仕組みのため、面談・エージェント紹介・転職支援に費用はかかりません。",
  },
  {
    q: "普通の転職エージェントと何が違うのですか？",
    a: "転職AGENT Navi自体は「求人を紹介するエージェント」ではなく、「自分に合う転職エージェントの担当者を紹介するマッチングサービス」です。ナビ担当との面談で希望・相性を確認した上で、300名以上のアドバイザーの中から合う担当者を紹介し、その後の転職支援は紹介されたエージェントと進める流れです。",
  },
  {
    q: "どんな人が対象ですか？",
    a: "公式LPでは20代の既卒・第二新卒・フリーター・ニートを主な対象として案内しています。経歴に自信がない段階で「どのエージェントに登録すべきか」から相談したい人に向く設計です。30代以上やハイクラス志向の場合は、総合型・特化型エージェントへの直接登録が近道になることがあります。",
  },
  {
    q: "紹介されたエージェントが合わなかったらどうすればいいですか？",
    a: "合わないと感じたらナビ側に再相談し、別の担当者・エージェントを紹介してもらう使い方が想定されています(「相性」を前面に出したサービス設計のため)。合わない担当者と我慢して進める必要はありません。",
  },
  {
    q: "利用の流れを教えてください。",
    a: "公式案内では、①エントリー②面談予約③ナビ担当と面談④紹介されたエージェントと面談⑤転職支援開始〜内定、という流れです。最初の面談で希望条件・状況を整理してからエージェントに接続されます。",
  },
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

export default function AgentNaviReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "転職AGENT Naviの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職AGENT Naviの評判は？エージェントとのマッチングサービスを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職AGENT Naviは、circus株式会社が運営する「求職者と転職エージェントのマッチングサービス」です。
            自分で複数のエージェントに登録して比較する代わりに、面談を通じて300名以上のアドバイザーから相性の良い担当者を紹介してもらう仕組みで、
            20代の既卒・第二新卒・フリーターを主な対象としています。
            この記事では、仕組み・特徴・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>エージェント自体ではなく「エージェントを紹介する」サービス</strong>。300名以上のアドバイザーから相性で担当者をマッチングします。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>主対象は20代の既卒・第二新卒・フリーター</strong>。「どのエージェントに登録すべきかわからない」段階から相談できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>10万件以上の求人(公称)</strong>を母数に、紹介されたエージェント経由で提案を受けられます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は完全無料</strong>。担当者が合わなければ再マッチングを相談できる設計です。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="agent-navi" heading="転職AGENT Navi公式サイトで無料エントリーする" note="面談・エージェント紹介は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "サービス形態", value: "マッチング" },
            { label: "アドバイザー（公称）", value: "300名+" },
            { label: "求人数（公称）", value: "10万件+" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>転職AGENT Naviの基本データ【2026年8月16日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">転職AGENT Navi(転職エージェントナビ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">circus株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都中央区京橋1-13-1 WORK VILLA KYOBASHI 9F</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">矢部 貴志</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">求職者と転職エージェント(担当アドバイザー)のマッチングプラットフォーム</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">規模(公称)</th><td className="px-3 py-2 border-b">転職アドバイザー300名以上／求人10万件以上</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">主な対象</th><td className="px-3 py-2 border-b">20代の既卒・第二新卒・フリーター・ニート</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">利用の流れ</th><td className="px-3 py-2 border-b">エントリー→面談予約→ナビ担当と面談→紹介エージェントと面談→転職支援開始→内定</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：転職AGENT Navi公式LP(service.circus-group.jp)、2026年8月16日確認。有料職業紹介事業許可番号はLP内に記載がないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>転職AGENT Naviの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「担当者の相性」からエージェントを選べる",
              desc: "転職エージェントの満足度は担当者との相性に大きく左右されます。転職AGENT Naviは希望・状況を面談で確認した上で、300名以上のアドバイザーから合う担当者を紹介する仕組みで、この「担当者ガチャ」問題への対策を前面に出しています。",
            },
            {
              title: "20代・経歴に自信がない層が主対象",
              desc: "既卒・第二新卒・フリーター・ニートといった、大手エージェントで求人紹介を受けにくいことがある層を主対象として明示しています。",
            },
            {
              title: "10万件以上の求人母数(公称)",
              desc: "紹介先エージェント群の求人を合わせた業界最大級の求人母数から、面談内容に合わせた提案を受けられるとしています。",
            },
            {
              title: "内定までの伴走サポート",
              desc: "エージェント紹介後も、内定まで徹底したサポートを行うと公表しています。紹介して終わりではなく、進捗に応じた再マッチングの相談も可能な設計です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>転職AGENT Naviが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代で既卒・第二新卒・フリーターから正社員を目指す人</li>
              <li>どの転職エージェントに登録すべきか決められない人</li>
              <li>過去にエージェントの担当者と合わなかった経験がある人</li>
              <li>まず面談で状況を整理してから動きたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>30代以上・キャリアの方向が明確な人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>への直接登録が近道です</li>
              <li>職種特化の深い支援を求める人 →ITなら<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>や<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア" />、コンサルなら<FelmatTextLink slug="newma" text="NewMA" />が候補です</li>
              <li>ハイクラス・スカウト型を使いたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職AGENT Naviは「エージェント選びの入口」に当たるサービスです。自分で比較検討できる人は各エージェントへの直接登録の方が早い一方、
          <strong>最初の一歩で迷っている20代には相談先として使いやすい</strong>設計になっています。
        </p>

        <h2>転職AGENT Navi よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：エージェント選びで迷う20代の入口候補</h2>
        <p>
          転職AGENT Naviは、circus株式会社が運営する転職エージェントとのマッチングサービスです。
          300名以上のアドバイザーから相性で担当者を紹介する仕組みで、20代の既卒・第二新卒・フリーターが主対象。利用は完全無料です。
          「どのエージェントがいいかわからない」段階の人は、
          <FelmatTextLink slug="agent-navi" text="転職AGENT Naviの無料エントリー" />(PR)から面談を受けてみるのが良いでしょう。
        </p>

        <FelmatCta slug="agent-navi" heading="転職AGENT Navi公式サイトで無料エントリーする" note="面談・エージェント紹介は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">転職AGENT Naviを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
            </Link>
            <Link href="/age/20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              20代の転職ガイド
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
