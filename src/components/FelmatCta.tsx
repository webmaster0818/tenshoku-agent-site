// felmat計測タグをverbatim出力するCTA。タグ文字列は1文字も変更しないこと(バイト厳密一致)
// ステマ規制対応: 広告表記「※本リンクはプロモーション（PR）です。」を必ず併記

const FELMAT_TAGS: Record<string, string> = {
  digireka:
    '<a href="https://t.felmat.net/fmcl?ak=D109718.1.E1526051.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/D109718.E1526051.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "type-woman":
    '<a href="https://t.felmat.net/fmcl?ak=F119761.1.D1649660.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/F119761.D1649660.J1389963" width="300" height="250" alt="" border="0" /></a>',
  newma:
    '<a href="https://t.felmat.net/fmcl?ak=K11942C.1.T163974J.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/K11942C.T163974J.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "unison-ex":
    '<a href="https://t.felmat.net/fmcl?ak=K11110T.1.5153898C.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/K11110T.5153898C.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "unison-entry":
    '<a href="https://t.felmat.net/fmcl?ak=J10963H.1.V157493Y.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/J10963H.V157493Y.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "agent-navi":
    '<a href="https://t.felmat.net/fmcl?ak=E8947Q.1.I133234A.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/E8947Q.I133234A.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "inshoku-agent":
    '<a href="https://t.felmat.net/fmcl?ak=C11998X.1.9164868W.J1389963" target="_blank" rel="nofollow noopener">飲食業界特化の転職エージェント「飲食店ドットコムエージェント」</a><img src="https://t.felmat.net/fmimp/C11998X.9164868W.J1389963" width="1" height="1" alt="" style="border:none;" />',
  rework:
    '<a href="https://t.felmat.net/fmcl?ak=I11924T.1.U163459N.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/I11924T.U163459N.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "ebisu-fudousan":
    '<a href="https://t.felmat.net/fmcl?ak=C11879J.1.9163258L.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/C11879J.9163258L.J1389963" width="300" height="250" alt="" border="0" /></a>',
  "realme-career":
    '<a href="https://t.felmat.net/fmcl?ak=L10947D.1.B152393L.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/L10947D.B152393L.J1389963" width="300" height="250" alt="" border="0" /></a>',
};

// テキストリンク用: バナーと同一のfmcl計測URL(URL文字列は変更しない)
const FELMAT_CLICK_URLS: Record<string, string> = {
  digireka: "https://t.felmat.net/fmcl?ak=D109718.1.E1526051.J1389963",
  "type-woman": "https://t.felmat.net/fmcl?ak=F119761.1.D1649660.J1389963",
  newma: "https://t.felmat.net/fmcl?ak=K11942C.1.T163974J.J1389963",
  "unison-ex": "https://t.felmat.net/fmcl?ak=K11110T.1.5153898C.J1389963",
  "unison-entry": "https://t.felmat.net/fmcl?ak=J10963H.1.V157493Y.J1389963",
  "agent-navi": "https://t.felmat.net/fmcl?ak=E8947Q.1.I133234A.J1389963",
  "inshoku-agent": "https://t.felmat.net/fmcl?ak=C11998X.1.9164868W.J1389963",
  rework: "https://t.felmat.net/fmcl?ak=I11924T.1.U163459N.J1389963",
  "ebisu-fudousan": "https://t.felmat.net/fmcl?ak=C11879J.1.9163258L.J1389963",
  "realme-career": "https://t.felmat.net/fmcl?ak=L10947D.1.B152393L.J1389963",
};

export function FelmatTextLink({ slug, text }: { slug: string; text: string }) {
  const url = FELMAT_CLICK_URLS[slug];
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="sponsored nofollow noopener" className="text-teal underline font-semibold">
      {text}
    </a>
  );
}

export default function FelmatCta({ slug, heading, note }: { slug: string; heading?: string; note?: string }) {
  const tag = FELMAT_TAGS[slug];
  if (!tag) return null;
  return (
    <div className="my-8 rounded-2xl border border-teal/20 bg-teal/5 p-5 sm:p-6 text-center">
      {heading && <p className="font-bold text-navy mb-3">{heading}</p>}
      <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: tag }} />
      {note && <p className="text-xs text-text-muted mt-3">{note}</p>}
      <p className="text-xs text-text-muted mt-2">※本リンクはプロモーション（PR）です。</p>
    </div>
  );
}
