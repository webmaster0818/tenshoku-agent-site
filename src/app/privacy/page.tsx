import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜転職エージェント比較ラボ",
  description:
    "転職エージェント比較ラボのプライバシーポリシーです。個人情報の取扱い、Cookie、アクセス解析ツールの利用について説明しています。",
  openGraph: {
    title: "プライバシーポリシー｜転職エージェント比較ラボ",
    description:
      "転職エージェント比較ラボのプライバシーポリシーです。個人情報の取扱いについて説明しています。",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "プライバシーポリシー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            プライバシーポリシー
          </h1>
          <p className="text-text-secondary leading-relaxed">
            株式会社MediaX（以下「当社」といいます）は、「転職エージェント比較ラボ」（以下「本サイト」といいます）におけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
          </p>
        </div>

        <section className="mb-8">
          <h2>第1条（個人情報の定義）</h2>
          <p>
            本ポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、メールアドレス、その他の記述等により特定の個人を識別できる情報をいいます。
          </p>
        </section>

        <section className="mb-8">
          <h2>第2条（収集する情報）</h2>
          <p>当社は、本サイトの運営にあたり、以下の情報を取得することがあります。</p>
          <h3>2-1. ユーザーから直接ご提供いただく情報</h3>
          <ul>
            <li>お名前（ニックネーム含む）</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
          </ul>
          <h3>2-2. 自動的に取得する情報</h3>
          <ul>
            <li>IPアドレス</li>
            <li>ブラウザの種類・バージョン</li>
            <li>オペレーティングシステム</li>
            <li>リファラー（参照元URL）</li>
            <li>本サイト内での閲覧ページ、閲覧時間、閲覧順序</li>
            <li>デバイス情報（画面サイズ、デバイスの種類等）</li>
            <li>Cookieおよび類似技術により取得される情報</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>第3条（個人情報の利用目的）</h2>
          <p>当社は、収集した個人情報を以下の目的で利用します。</p>
          <ol>
            <li>お問い合わせへの対応・回答</li>
            <li>本サイトの運営、維持、改善</li>
            <li>アクセス解析によるサイト品質の向上</li>
            <li>ユーザーの利便性向上のためのコンテンツ最適化</li>
            <li>不正アクセス、不正利用の防止</li>
            <li>利用規約に違反する行為への対応</li>
            <li>法令に基づく対応</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>第4条（個人情報の第三者提供）</h2>
          <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。</p>
          <ol>
            <li>ユーザー本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>第5条（Cookieの利用）</h2>
          <ol>
            <li>本サイトでは、ユーザーの利便性向上およびアクセス状況の把握のためにCookieを使用しています。</li>
            <li>Cookieとは、ウェブサーバーからユーザーのブラウザに送信される小さなテキストファイルであり、ユーザーのコンピュータに保存されます。</li>
            <li>ユーザーは、ブラウザの設定によりCookieの受け取りを拒否することができます。ただし、Cookieを無効にした場合、本サイトの一部機能が正常に動作しない場合があります。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>第6条（アクセス解析ツールの利用）</h2>
          <p>本サイトでは、以下のアクセス解析ツールを使用しています。</p>

          <h3>6-1. Google Analytics</h3>
          <p>
            本サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsは、Cookieを使用してユーザーのアクセス情報を収集します。このアクセス情報は匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            Google Analyticsの利用規約については
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Google アナリティクス利用規約</a>
            をご確認ください。また、Googleのプライバシーポリシーについては
            <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">Googleプライバシーポリシー</a>
            をご確認ください。
          </p>
          <p>
            Google Analyticsのデータ収集を無効にしたい場合は、
            <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">Google Analyticsオプトアウトアドオン</a>
            をご利用ください。
          </p>

          <h3>6-2. Microsoft Clarity</h3>
          <p>
            本サイトでは、Microsoftが提供する行動分析ツール「Microsoft Clarity」を使用しています。Microsoft Clarityは、ユーザーの本サイト上での行動（クリック、スクロール、ページ遷移等）をヒートマップやセッション録画として記録し、サイトの改善に活用しています。
          </p>
          <p>
            Microsoft Clarityの利用にあたっては、Cookieを使用して情報を収集します。収集された情報は匿名化されており、個人を特定するものではありません。詳細は
            <a href="https://privacy.microsoft.com/ja-jp/privacystatement" target="_blank" rel="noopener noreferrer">Microsoftのプライバシーに関する声明</a>
            をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2>第7条（個人情報の安全管理）</h2>
          <p>
            当社は、個人情報の漏洩、滅失またはき損を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、適切な監督を行います。
          </p>
        </section>

        <section className="mb-8">
          <h2>第8条（個人情報の開示・訂正・削除）</h2>
          <ol>
            <li>ユーザーは、当社に対して自己の個人情報の開示、訂正、追加、削除、利用停止または消去を請求することができます。</li>
            <li>上記の請求があった場合、当社は本人確認を行った上で、合理的な期間内に対応いたします。</li>
            <li>請求の際は、下記のお問い合わせ窓口までご連絡ください。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>第9条（本ポリシーの変更）</h2>
          <ol>
            <li>当社は、必要に応じて本ポリシーを変更することがあります。</li>
            <li>変更後のプライバシーポリシーは、本サイト上に掲載された時点で効力を生じるものとします。</li>
            <li>重要な変更がある場合は、本サイト上でお知らせいたします。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>第10条（お問い合わせ窓口）</h2>
          <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。</p>
          <ul>
            <li>運営者：株式会社MediaX</li>
            <li>所在地：〒150-0011 東京都渋谷区東一丁目27番10号</li>
            <li>サイト名：転職エージェント比較ラボ</li>
            <li>URL：https://tenshoku-agent-lab.com</li>
          </ul>
        </section>

        <p className="text-text-muted text-sm mt-10">
          制定日：2025年4月1日<br />
          最終改定日：2026年4月21日
        </p>
      </article>
    </>
  );
}
