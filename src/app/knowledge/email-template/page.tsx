import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントへのメール例文集｜登録・お礼・辞退・断り方",
  description:
    "転職エージェントへのメール例文を場面別に紹介。初回挨拶、面談後のお礼、求人紹介へのお礼、面接辞退、内定辞退、利用終了の連絡、担当者変更の依頼など、コピペで使えるテンプレートを完全網羅。",
  openGraph: {
    title: "転職エージェントへのメール例文集｜登録・お礼・辞退・断り方",
    description: "転職エージェントへの場面別メール例文集。コピペで使えるテンプレートを紹介。",
  },
};

const faqData = [
  { q: "転職エージェントへのメールは敬語で書くべきですか？", a: "はい、基本的なビジネスマナーとしてです・ます調の敬語で書きましょう。ただし、堅すぎる必要はありません。エージェントはあなたの味方なので、丁寧かつ簡潔に自分の意思を伝えることが大切です。" },
  { q: "メールの返信はいつまでにすべきですか？", a: "24時間以内の返信が理想的です。特に求人紹介や面接日程の連絡は、応募のタイミングに影響するため、できるだけ早く返信しましょう。すぐに回答できない場合は「確認して○日までに返信します」と一報入れるとよいです。" },
  { q: "エージェントからの連絡を無視しても大丈夫ですか？", a: "無視はおすすめしません。利用を終了したい場合は一言連絡を入れましょう。無視し続けると、電話や別の連絡手段で繰り返し連絡が来る可能性があります。「現在転職活動を中断しています」と伝えるだけで十分です。" },
  { q: "メールとLINE、どちらで連絡すべきですか？", a: "エージェント側が対応している方法であればどちらでも構いません。最近はLINEやチャットツールでの連絡に対応するエージェントが増えています。カジュアルな相談はLINE、正式な辞退連絡や重要事項はメールと使い分けるのもよいでしょう。" },
  { q: "内定辞退のメールは失礼になりませんか？", a: "丁寧にお詫びと理由を伝えれば失礼にはなりません。エージェント経由の場合は、まずエージェントに電話で相談し、その後メールで正式にお伝えするのがベストです。辞退理由は正直に伝えることで、次の求人紹介の精度が上がります。" },
  { q: "件名はどう書けばいいですか？", a: "件名は用件がひと目でわかるように書きましょう。「【お礼】本日の面談ありがとうございました（氏名）」「【ご相談】担当者変更のお願い（氏名）」のように、【カテゴリ】＋用件＋氏名の形式が見やすいです。" },
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

export default function EmailTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "お役立ち", href: "/" },
          { name: "メール例文集" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントへのメール例文集｜登録・お礼・辞退・断り方
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントとのやり取りで、どう書けばいいか迷うメール。
            場面別にコピペで使える例文テンプレートと、メールマナーのポイントを紹介します。
          </p>
        </div>

        {/* メールマナー */}
        <h2>メール作成の基本マナー</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { label: "返信の目安", value: "24時間以内" },
            { label: "文章スタイル", value: "丁寧かつ簡潔" },
            { label: "件名の形式", value: "【用件】内容（氏名）" },
            { label: "署名", value: "氏名・電話番号を記載" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 例文1: 初回登録後の挨拶 */}
        <h2>シーン別メール例文</h2>

        <h3 className="text-lg font-bold text-navy mt-8 mb-3">1. 初回登録後の挨拶メール</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【ご挨拶】転職相談のお願い（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>はじめまして。本日登録いたしました山田太郎と申します。</p>
            <p>現在、IT業界で法人営業を5年間経験しており、<br />より成長できる環境への転職を検討しております。</p>
            <p>お忙しいところ恐れ入りますが、面談の機会をいただけますと幸いです。<br />ご都合のよい日時をご教示いただけますでしょうか。</p>
            <p>何卒よろしくお願いいたします。</p>
            <p>山田太郎<br />TEL: 090-XXXX-XXXX<br />Email: yamada@example.com</p>
          </div>
        </div>

        {/* 例文2: 面談後のお礼 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">2. 面談後のお礼メール</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【お礼】本日の面談ありがとうございました（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>本日はお忙しい中、面談のお時間をいただきありがとうございました。</p>
            <p>○○様のアドバイスを伺い、自分のキャリアの方向性がより明確になりました。<br />特に、IT業界のマネジメント職という選択肢は大変参考になりました。</p>
            <p>ご紹介いただいた求人について確認のうえ、<br />明日までにご連絡いたします。</p>
            <p>引き続きよろしくお願いいたします。</p>
            <p>山田太郎</p>
          </div>
        </div>

        {/* 例文3: 求人紹介へのお礼・応募意思 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">3. 求人紹介へのお礼・応募意思の連絡</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【求人確認】ご紹介いただいた求人について（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>求人のご紹介ありがとうございます。</p>
            <p>ご紹介いただいた3件のうち、A社（ITマネージャー職）とC社（営業部長職）の2件に<br />興味がございます。ぜひ応募させていただきたいです。</p>
            <p>B社については、勤務地が希望と合わないため、今回は見送らせてください。</p>
            <p>お手数ですが、応募手続きをお願いいたします。</p>
            <p>山田太郎</p>
          </div>
        </div>

        {/* 例文4: 面接辞退 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">4. 面接辞退のメール</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【ご相談】A社の面接辞退について（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>いつもお世話になっております。山田太郎です。</p>
            <p>大変申し訳ございませんが、○月○日に予定しておりますA社の二次面接を<br />辞退させていただきたくご連絡いたしました。</p>
            <p>理由としまして、他社の選考が進む中で自分のキャリアの方向性を再検討し、<br />A社の業務内容と自分の志向にミスマッチを感じたためです。</p>
            <p>ご紹介いただいたにもかかわらず申し訳ございません。<br />引き続き他の求人については前向きに検討しておりますので、<br />よろしくお願いいたします。</p>
            <p>山田太郎</p>
          </div>
        </div>

        {/* 例文5: 内定辞退 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">5. 内定辞退のメール</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【内定辞退のお詫び】B社について（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>いつもお世話になっております。山田太郎です。</p>
            <p>先日内定をいただきましたB社について、大変心苦しいのですが<br />辞退させていただきたくご連絡いたしました。</p>
            <p>慎重に検討した結果、他社からいただいた内定のほうが<br />自分のキャリアプランにより合致すると判断いたしました。</p>
            <p>○○様にはご尽力いただいたにもかかわらず、このような結果となり<br />大変申し訳ございません。</p>
            <p>今回の転職活動では大変お世話になりました。<br />心より感謝申し上げます。</p>
            <p>山田太郎</p>
          </div>
        </div>

        {/* 例文6: エージェント利用終了 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">6. エージェント利用終了の連絡</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【ご報告】転職活動終了のご連絡（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント ○○様</p>
            <p>いつもお世話になっております。山田太郎です。</p>
            <p>このたび、他社経由で内定を得て転職先が決定いたしましたので、<br />貴社のサービス利用を終了させていただきたくご連絡いたしました。</p>
            <p>○○様には親身にご対応いただき、心より感謝しております。<br />ご紹介いただいた求人やキャリアアドバイスは大変参考になりました。</p>
            <p>今後またお力をお借りすることがあるかもしれませんが、<br />その際はどうぞよろしくお願いいたします。</p>
            <p>山田太郎</p>
          </div>
        </div>

        {/* 例文7: 担当者変更の依頼 */}
        <h3 className="text-lg font-bold text-navy mt-8 mb-3">7. 担当者変更の依頼メール</h3>
        <div className="bg-warm-gray rounded-2xl p-5 mb-6">
          <p className="text-xs text-text-muted mb-2">件名：【ご相談】担当者変更のお願い（山田太郎）</p>
          <div className="text-sm text-text-secondary space-y-2">
            <p>○○エージェント カスタマーサポート御中</p>
            <p>いつもお世話になっております。山田太郎です。</p>
            <p>現在○○様に担当いただいておりますが、<br />可能であれば、IT業界に詳しいアドバイザーの方に<br />担当を変更していただけないでしょうか。</p>
            <p>転職先としてIT業界を第一志望としており、<br />より専門的なアドバイスをいただきたいと考えております。</p>
            <p>お手数をおかけしますが、ご検討のほどよろしくお願いいたします。</p>
            <p>山田太郎<br />TEL: 090-XXXX-XXXX<br />Email: yamada@example.com</p>
          </div>
        </div>

        {/* LINE/チャット対応エージェント */}
        <h2>LINE・チャットで連絡できるエージェント</h2>
        <div className="card-hover p-5 mb-10">
          <p className="text-sm text-text-secondary mb-3">
            最近はLINEやチャットツールでの連絡に対応するエージェントが増えています。
            メールよりも気軽にやり取りでき、レスポンスも早い傾向があります。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><span className="font-bold text-navy">doda：</span>LINEでの連絡に対応。求人紹介の通知もLINEで受け取れます。</li>
            <li><span className="font-bold text-navy">マイナビエージェント：</span>LINEでの面談日程調整や相談が可能です。</li>
            <li><span className="font-bold text-navy">リクルートエージェント：</span>専用アプリ「Personal Desktop」でメッセージのやり取りができます。</li>
          </ul>
        </div>

        {/* おすすめエージェント */}
        <h2>おすすめの転職エージェント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", feature: "求人数業界最大級・全業界対応" },
            { name: "ビズリーチ", href: "/review/bizreach/", feature: "ハイクラス・スカウト型" },
            { name: "doda", href: "/review/doda/", feature: "エージェント＋サイト一体型" },
            { name: "マイナビエージェント", href: "/review/mynavi/", feature: "20代・30代の転職に強い" },
            { name: "JACリクルートメント", href: "/review/jac/", feature: "外資系・管理職に強い" },
          ].map((agent) => (
            <Link key={agent.name} href={agent.href} className="card-hover p-4 block no-underline">
              <h3 className="font-bold text-navy text-base">{agent.name}</h3>
              <p className="text-sm text-text-muted mt-1">{agent.feature}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            エージェントを上手に活用しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            丁寧なコミュニケーションが、より良い求人紹介につながります。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキング
            </Link>
          </div>
        </div>

        {/* 関連記事 */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/knowledge/interview-prep/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              面談の準備と流れ
            </Link>
            <Link href="/knowledge/useless/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              使えないと感じたら
            </Link>
            <Link href="/knowledge/resume/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              職務経歴書の書き方・添削
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
