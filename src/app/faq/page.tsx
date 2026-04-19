import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェント よくある質問30選｜登録・利用・選び方の疑問を解決",
  description:
    "転職エージェントに関するよくある質問30問を6カテゴリで網羅的に回答。登録方法、利用の流れ、費用、担当者との付き合い方、選び方、退会方法まで解説します。",
  openGraph: {
    title: "転職エージェント よくある質問30選｜登録・利用・選び方の疑問を解決",
    description: "転職エージェントに関するよくある質問30問を徹底回答。",
  },
};

const faqCategories = [
  {
    category: "登録・費用について",
    items: [
      { q: "転職エージェントの登録に費用はかかりますか？", a: "いいえ、転職エージェントの利用は完全無料です。企業からの成功報酬で運営されているため、求職者に費用が発生することは一切ありません。" },
      { q: "登録に必要な情報は何ですか？", a: "氏名、連絡先（電話番号・メールアドレス）、直近の職歴（会社名・職種・経験年数）、希望条件の概要があれば登録できます。所要時間は約5分です。" },
      { q: "転職するか決めていなくても登録できますか？", a: "はい、登録可能です。キャリア相談や市場価値の確認だけでも利用できます。転職を決意してから本格的に活動を始める方も多いです。" },
      { q: "現在の会社にバレることはありませんか？", a: "基本的にバレることはありません。エージェントには守秘義務があり、本人の同意なく現在の勤務先に情報を提供することはありません。" },
      { q: "登録後すぐに連絡が来ますか？", a: "通常、登録後1〜7日以内にエージェントから面談日程調整の連絡があります。電話またはメールで届くことが一般的です。" },
    ],
  },
  {
    category: "面談・サポートについて",
    items: [
      { q: "面談はオンラインでも可能ですか？", a: "はい、多くのエージェントがオンライン面談（Web面談）や電話面談に対応しています。全国どこからでも利用可能です。" },
      { q: "面談ではどんなことを話しますか？", a: "これまでの職歴、転職理由、希望条件（業界・職種・年収・勤務地）、キャリアの方向性などを話します。面談時間は通常60〜90分程度です。" },
      { q: "書類添削はしてもらえますか？", a: "はい、履歴書・職務経歴書の添削は基本的なサービスに含まれています。応募先企業に合わせた内容のブラッシュアップもサポートしてもらえます。" },
      { q: "面接対策はどのように行われますか？", a: "応募先企業に合わせた想定質問の共有、模擬面接、過去の面接で聞かれた質問の情報提供などを行ってもらえます。企業の社風や面接官の傾向も教えてもらえることがあります。" },
      { q: "年収交渉は代行してもらえますか？", a: "はい、内定後の年収交渉はエージェントが代行してくれます。直接言いづらい年収の希望も、プロが適切に交渉してくれるため、年収アップにつながるケースもあります。" },
    ],
  },
  {
    category: "求人について",
    items: [
      { q: "非公開求人とは何ですか？", a: "転職サイトなどに公開されていない求人のことです。企業が競合に採用情報を知られたくない場合や、重要ポジションの採用時に非公開で募集します。エージェント経由でのみ応募可能です。" },
      { q: "紹介された求人は断ってもよいですか？", a: "はい、興味がない求人は断っても問題ありません。断る際に理由を伝えることで、次回以降の紹介精度が向上します。" },
      { q: "希望と違う求人ばかり紹介される場合はどうすればよいですか？", a: "担当アドバイザーに希望条件を改めて詳しく伝えましょう。それでも改善されない場合は、担当者の変更を依頼するか、他のエージェントの利用を検討しましょう。" },
      { q: "求人数が多いエージェントはどこですか？", a: "リクルートエージェントが公開求人約60万件＋非公開求人約30万件で業界最大級です。dodaも公開求人20万件以上を保有しています。" },
      { q: "地方の求人も紹介してもらえますか？", a: "はい、リクルートエージェントやdodaなどの大手エージェントは全国に拠点があり、地方の求人も多数保有しています。" },
    ],
  },
  {
    category: "選び方・比較について",
    items: [
      { q: "何社に登録すべきですか？", a: "2〜3社がおすすめです。1社だけだと比較ができず、4社以上だと管理が大変になります。大手総合型1〜2社と特化型1社の組み合わせが効率的です。" },
      { q: "大手と中小のエージェントはどう違いますか？", a: "大手は求人数とサポート体制の安定感が強み。中小・特化型は特定の業界や職種に深い専門知識を持つアドバイザーが在籍していることが多いです。" },
      { q: "転職エージェントと転職サイトはどう違いますか？", a: "転職エージェントは専任のアドバイザーがつき、求人紹介・書類添削・面接対策・年収交渉まで一貫サポートします。転職サイトは自分で求人を検索・応募する自己完結型サービスです。" },
      { q: "ハイクラス向けのエージェントはありますか？", a: "ビズリーチ（スカウト型ハイクラス転職）やJACリクルートメント（外資系・管理職に強い）がハイクラス向けの代表的なサービスです。" },
      { q: "20代・第二新卒におすすめのエージェントは？", a: "マイナビエージェントが20代・第二新卒の転職支援に力を入れています。リクルートエージェントやdodaも若手向けの求人を多数保有しています。" },
    ],
  },
  {
    category: "転職活動の進め方",
    items: [
      { q: "在職中でも転職エージェントは利用できますか？", a: "はい、多くの転職者が在職中にエージェントを利用しています。面談や連絡は就業時間外やオンラインで対応可能です。" },
      { q: "転職活動にどのくらいの期間がかかりますか？", a: "一般的に登録から内定まで2〜3ヶ月程度です。在職中の場合は退職交渉を含めて3〜4ヶ月、退職後の場合は1〜2ヶ月で決まるケースもあります。" },
      { q: "複数のエージェントを掛け持ちしてもよいですか？", a: "はい、問題ありません。むしろ複数利用が一般的です。ただし、各エージェントに他も利用していることを伝え、同じ企業への重複応募を防ぎましょう。" },
      { q: "内定を辞退することはできますか？", a: "法的には可能ですが、企業やエージェントとの信頼関係に影響します。辞退する場合はできるだけ早くエージェント経由で丁寧に伝えましょう。" },
      { q: "転職回数が多いと不利ですか？", a: "回数だけで判断されることは少なくなっています。各転職の理由が明確で、一貫したキャリアの方向性があれば、むしろ多様な経験として評価されることもあります。" },
    ],
  },
  {
    category: "退会・その他",
    items: [
      { q: "転職エージェントを途中で退会できますか？", a: "はい、いつでも退会可能です。担当アドバイザーに連絡するか、マイページから退会手続きができます。退会後にペナルティが発生することはありません。" },
      { q: "担当者を変更してもらうことはできますか？", a: "はい、担当者の変更は可能です。合わないと感じたら、エージェントの窓口に申し出ましょう。多くのエージェントが担当変更に対応しています。" },
      { q: "個人情報の取り扱いは安全ですか？", a: "大手エージェントはプライバシーマークを取得しており、個人情報保護法に基づいた厳格な管理を行っています。退会時にデータの削除を依頼することも可能です。" },
      { q: "転職エージェントを利用して転職した場合、すぐに辞めても問題ないですか？", a: "法的には問題ありませんが、短期離職は次の転職活動で不利になる可能性があります。入社前にエージェントと十分に相談し、ミスマッチを防ぐことが大切です。" },
      { q: "一度退会した後、再登録することはできますか？", a: "はい、多くのエージェントで再登録が可能です。以前の情報が残っている場合もありますが、状況が変わっていれば改めて面談を受けることをおすすめします。" },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "よくある質問" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェント よくある質問30選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントの利用に関するよくある質問を6つのカテゴリに分けて30問回答します。
            登録方法、費用、サポート内容、選び方など、転職エージェントに関する疑問を解決します。
          </p>
        </div>

        {/* 目次 */}
        <h2>カテゴリ一覧</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {faqCategories.map((cat, i) => (
            <a key={i} href={`#category-${i}`} className="card-hover p-4 block no-underline">
              <span className="text-teal font-bold mr-2">{i + 1}.</span>
              <span className="font-medium text-navy">{cat.category}</span>
              <span className="text-text-muted text-sm ml-2">（{cat.items.length}問）</span>
            </a>
          ))}
        </div>

        {/* FAQ by category */}
        {faqCategories.map((cat, catIndex) => (
          <div key={catIndex} id={`category-${catIndex}`} className="mb-10">
            <h2>{cat.category}</h2>
            <div>
              {cat.items.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            転職エージェントに無料登録しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            疑問が解決したら、まずは無料登録からスタートしましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary px-8 py-3 bg-navy-light">
              マイナビエージェントの詳細
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
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
