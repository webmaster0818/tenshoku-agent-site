// A8計測タグをverbatim出力するCTA。タグ文字列は1文字も変更しないこと(バイト厳密一致・ビーコンimg含む)
// ステマ規制対応: 広告表記「※本リンクはプロモーション（PR）です。」を必ず併記

const A8_TAGS: Record<string, string> = {
  myvision:
    '<a href="https://px.a8.net/svt/ejp?a8mat=4B84X2+E2309M+5B0Y+5ZU29" rel="nofollow">\n<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260720102850&wid=026&eno=01&mid=s00000024757001007000&mc=1"></a>\n<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B84X2+E2309M+5B0Y+5ZU29" alt="">',
};

export default function A8Cta({ slug, heading, note }: { slug: string; heading?: string; note?: string }) {
  const tag = A8_TAGS[slug];
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
