// felmat計測タグをverbatim出力するCTA。タグ文字列は1文字も変更しないこと(バイト厳密一致)
// ステマ規制対応: 広告表記「※本リンクはプロモーション（PR）です。」を必ず併記

const FELMAT_TAGS: Record<string, string> = {
  digireka:
    '<a href="https://t.felmat.net/fmcl?ak=D109718.1.E1526051.J1389963" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/D109718.E1526051.J1389963" width="300" height="250" alt="" border="0" /></a>',
};

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
