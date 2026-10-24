// 有価証券報告書の原本（EDINET）で確認した平均年間給与（提出会社単体）。
// 企業ページ・企業一覧・業種ランキングはこの値を参照する。万円表示は万円未満切り捨て。
export type VerifiedSalary = {
  yen: number; // 原本の値（円）
  term: string; // 決算期
  docId: string; // EDINET 書類管理番号
  checked: string; // EDINET で確認した日
};

export const verifiedSalary = {
  nec: { yen: 9939349, term: "2026年3月期", docId: "S100YBFV", checked: "2026年10月24日" },
  rakuten: { yen: 8508495, term: "2025年12月期", docId: "S100XTNW", checked: "2026年10月24日" },
  "tokyo-seimitsu": { yen: 8276412, term: "2026年3月期", docId: "S100YEOP", checked: "2026年10月24日" },
} satisfies Record<string, VerifiedSalary>;

const comma = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/** 例: 9939349 → "約993万円"（万円未満切り捨て） */
export function salaryMan(slug: keyof typeof verifiedSalary): string {
  return `約${comma(Math.floor(verifiedSalary[slug].yen / 10000))}万円`;
}

/** 例: 9939349 → "9,939,349円" */
export function salaryYen(slug: keyof typeof verifiedSalary): string {
  return `${comma(verifiedSalary[slug].yen)}円`;
}
