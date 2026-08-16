import Link from 'next/link';

const footerLinks = {
  '総合型エージェント': [
    { label: 'リクルートエージェント', href: '/review/recruit-agent/' },
    { label: 'doda（デューダ）', href: '/review/doda/' },
    { label: 'マイナビエージェント', href: '/review/mynavi/' },
    { label: 'ビズリーチ', href: '/review/bizreach/' },
    { label: 'JACリクルートメント', href: '/review/jac/' },
  ],
  '特化型エージェント': [
    { label: 'レバテックキャリア（IT）', href: '/review/levtech/' },
    { label: 'ユニゾンキャリア（IT）', href: '/review/unison-career/' },
    { label: 'デジレカ（マーケ）', href: '/review/digireka/' },
    { label: 'NewMA（コンサル・M&A）', href: '/review/newma/' },
    { label: 'type女性の転職エージェント', href: '/review/type-woman/' },
    { label: 'ASSIGN（アサイン）', href: '/review/assign/' },
    { label: '転職AGENT Navi', href: '/review/agent-navi/' },
  ],
  '企業年収DB・ランキング': [
    { label: '企業別ガイド一覧（61社）', href: '/company/' },
    { label: 'メーカー年収ランキング', href: '/company/maker-salary/' },
    { label: '半導体業界の年収ランキング', href: '/company/semiconductor-salary/' },
    { label: 'ITコンサル・SIer年収ランキング', href: '/company/it-consultant-salary/' },
    { label: 'ゲーム会社の年収ランキング', href: '/company/game-salary/' },
  ],
  '年代・目的別': [
    { label: '20代の転職', href: '/age/20s/' },
    { label: '30代の転職', href: '/age/30s/' },
    { label: '40代の転職', href: '/age/40s/' },
    { label: 'ITエンジニアの転職', href: '/type/it-engineer/' },
    { label: 'ハイクラス転職', href: '/type/high-class/' },
    { label: '女性の転職', href: '/type/women/' },
  ],
  '活用ガイド': [
    { label: 'ガイド一覧', href: '/knowledge/' },
    { label: '選び方 7つのポイント', href: '/knowledge/how-to-choose/' },
    { label: 'お礼メール例文13選', href: '/knowledge/email-template/' },
    { label: '職務経歴書の書き方', href: '/knowledge/resume/' },
    { label: 'よくある質問', href: '/faq/' },
  ],
  'サイト情報': [
    { label: '利用規約', href: '/terms/' },
    { label: 'プライバシーポリシー', href: '/privacy/' },
    { label: '記事制作ポリシー', href: '/content-policy/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-lg mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal text-white text-sm font-black">転</span>
              転職エージェント比較ラボ
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              転職を考えるすべての方に、最適な転職エージェント選びをサポートするための比較・情報サイトです。
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>当サイトはアフィリエイトプログラムに参加しています。</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} 転職エージェント比較ラボ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
