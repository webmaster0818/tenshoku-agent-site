import Link from 'next/link';

const footerLinks = {
  'エージェント一覧': [
    { label: 'リクルートエージェント', href: '/review/recruit-agent/' },
    { label: 'doda（デューダ）', href: '/review/doda/' },
    { label: 'マイナビエージェント', href: '/review/mynavi/' },
  ],
  'お役立ち情報': [
    { label: 'ランキング', href: '/#ranking' },
    { label: '目的別ガイド', href: '/#purpose-guide' },
    { label: 'よくある質問', href: '/#faq' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-lg mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal text-white text-sm font-black">転</span>
              転職エージェント比較ナビ
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
          <p className="mt-1">&copy; {new Date().getFullYear()} 転職エージェント比較ナビ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
