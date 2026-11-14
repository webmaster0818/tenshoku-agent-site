// 年収別の手取り試算（2026年11月13日に一次情報で確認した制度値）
// 前提：東京都・協会けんぽ・独身で扶養なし・賞与なし（年収を12等分した月給）・一般の事業

export const TAKE_HOME_CHECKED = "2026年11月13日";

export const TAKE_HOME_SOURCES = [
  { label: "国税庁 No.1410 給与所得控除（令和8年分・令和9年分）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" },
  { label: "国税庁 No.2260 所得税の税率（速算表）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" },
  { label: "国税庁「令和8年分 年末調整のしかた」昨年と比べて変わった点（基礎控除の引上げ等）", url: "https://www.nta.go.jp/publication/pamph/gensen/nencho2026/pdf/102.pdf" },
  { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都 9.85%）", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
  { label: "協会けんぽ 令和8年度保険料率のお知らせ（介護保険料率 1.62%・子ども・子育て支援金率 0.23%）", url: "https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" },
  { label: "e-Gov法令検索 健康保険法 第40条（標準報酬月額の等級区分）", url: "https://laws.e-gov.go.jp/law/211AC0000000070" },
  { label: "日本年金機構 厚生年金保険料額表（令和8年度版・保険料率 18.300%）", url: "https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" },
  { label: "厚生労働省 令和8年度 雇用保険料率のご案内（一般の事業・労働者負担 5/1,000）", url: "https://www.mhlw.go.jp/content/001692566.pdf" },
  { label: "総務省 個人住民税（所得割10%・均等割・森林環境税）", url: "https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/150790_06.html" },
  { label: "総務省 説明資料〔個人住民税について〕（基礎控除 改正なし・最高43万円）", url: "https://www.soumu.go.jp/main_content/001003450.pdf" },
  { label: "中央区 住民税の税額控除（調整控除）", url: "https://www.city.chuo.lg.jp/a0009/kurashi/zeikin/juuminzei/zeigakukoujo.html" },
  { label: "国税庁 令和7年分 民間給与実態統計調査（第16表 給与階級別給与所得者数・構成割合）", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
];

// 健康保険法 第40条の標準報酬月額（円）と、その等級の報酬月額の下限（円）
const GRADES = [58,68,78,88,98,104,110,118,126,134,142,150,160,170,180,190,200,220,240,260,280,300,320,340,360,380,410,440,470,500,530,560,590,620,650,680,710,750,790,830,880,930,980,1030,1090,1150,1210,1270,1330,1390];
const LOWER = [0,63,73,83,93,101,107,114,122,130,138,146,155,165,175,185,195,210,230,250,270,290,310,330,350,370,395,425,455,485,515,545,575,605,635,665,695,730,770,810,855,905,955,1005,1055,1115,1175,1235,1295,1355];

export const RATES = {
  health: 0.0985, // 協会けんぽ東京支部 令和8年度
  care: 0.0162, // 介護保険（40〜64歳）
  childSupport: 0.0023, // 子ども・子育て支援金（令和8年4月分から）
  pension: 0.183, // 厚生年金
  pensionCap: 650000, // 厚生年金の標準報酬月額の上限
  employment: 0.005, // 雇用保険 労働者負担（一般の事業）
};

export function standardMonthly(monthly: number): number {
  const k = monthly / 1000;
  let g = GRADES[0];
  LOWER.forEach((b, i) => {
    if (k >= b) g = GRADES[i];
  });
  return g * 1000;
}

export function salaryDeduction(y: number): number {
  if (y <= 2200000) return 740000;
  if (y <= 3600000) return y * 0.3 + 80000;
  if (y <= 6600000) return y * 0.2 + 440000;
  if (y <= 8500000) return y * 0.1 + 1100000;
  return 1950000;
}

// 令和8年分の所得税の基礎控除（合計所得金額に応じた額）
export function basicDeduction(totalIncome: number): number {
  if (totalIncome <= 4890000) return 1040000;
  if (totalIncome <= 6550000) return 670000;
  if (totalIncome <= 23500000) return 620000;
  return 0;
}

function incomeTaxRaw(t: number): number {
  const br: [number, number, number][] = [
    [1950000, 0.05, 0],
    [3300000, 0.1, 97500],
    [6950000, 0.2, 427500],
    [9000000, 0.23, 636000],
    [18000000, 0.33, 1536000],
    [40000000, 0.4, 2796000],
    [Infinity, 0.45, 4796000],
  ];
  for (const [lim, r, d] of br) if (t < lim) return t * r - d;
  return 0;
}

export function marginalRate(t: number): number {
  if (t < 1950000) return 5;
  if (t < 3300000) return 10;
  if (t < 6950000) return 20;
  if (t < 9000000) return 23;
  if (t < 18000000) return 33;
  if (t < 40000000) return 40;
  return 45;
}

export type TakeHome = {
  annual: number;
  monthly: number;
  grade: number;
  health: number;
  pension: number;
  employment: number;
  social: number;
  salaryIncome: number;
  basic: number;
  taxable: number;
  incomeTax: number;
  residentTaxable: number;
  residentTax: number;
  net: number;
  netMonthly: number;
  rate: number;
};

export function calcTakeHome(annual: number, over40 = false): TakeHome {
  const monthly = annual / 12;
  const grade = standardMonthly(monthly);
  const hRate = RATES.health / 2 + RATES.childSupport / 2 + (over40 ? RATES.care / 2 : 0);
  const health = Math.round(grade * hRate) * 12;
  const pension = Math.round(Math.min(grade, RATES.pensionCap) * (RATES.pension / 2)) * 12;
  const employment = Math.round(monthly * RATES.employment) * 12;
  const social = health + pension + employment;
  const salaryIncome = annual - salaryDeduction(annual);
  const basic = basicDeduction(salaryIncome);
  const taxable = Math.max(0, Math.floor((salaryIncome - social - basic) / 1000) * 1000);
  const incomeTax = Math.floor((incomeTaxRaw(taxable) * 1.021) / 100) * 100;
  const residentTaxable = Math.max(0, Math.floor((salaryIncome - social - 430000) / 1000) * 1000);
  const residentTax = Math.max(0, Math.floor((residentTaxable * 0.1 - 2500) / 100) * 100) + 5000;
  const net = annual - social - incomeTax - residentTax;
  return {
    annual, monthly, grade, health, pension, employment, social, salaryIncome, basic,
    taxable, incomeTax, residentTaxable, residentTax, net, netMonthly: net / 12, rate: net / annual,
  };
}

export const yen = (n: number) => `${Math.round(n).toLocaleString("ja-JP")}円`;
export const man = (n: number) => `約${(Math.floor(n / 1000) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
export const pct = (r: number) => `${(r * 100).toFixed(1)}%`;

// 国税庁 令和7年分 民間給与実態統計調査 第16表（1年を通じて勤務した給与所得者・男女計・千人）
export const NTA_R7 = {
  average: "487万円",
  total: 51631,
  bands: [
    { label: "100万円以下", n: 3703 },
    { label: "100万円超200万円以下", n: 5825 },
    { label: "200万円超300万円以下", n: 6746 },
    { label: "300万円超400万円以下", n: 7987 },
    { label: "400万円超500万円以下", n: 7918 },
    { label: "500万円超600万円以下", n: 6145 },
    { label: "600万円超700万円以下", n: 4035 },
    { label: "700万円超800万円以下", n: 2777 },
    { label: "800万円超900万円以下", n: 1834 },
    { label: "900万円超1,000万円以下", n: 1266 },
    { label: "1,000万円超1,500万円以下", n: 2422 },
    { label: "1,500万円超2,000万円以下", n: 610 },
    { label: "2,000万円超2,500万円以下", n: 167 },
    { label: "2,500万円超", n: 196 },
  ],
};

// 年収（万円）を超える人の割合（例：400 → 400万円超の人の割合）
export function shareAbove(manYen: number): string {
  const idx: Record<number, number> = { 100: 1, 200: 2, 300: 3, 400: 4, 500: 5, 600: 6, 700: 7, 800: 8, 900: 9, 1000: 10, 1500: 11, 2000: 12 };
  const i = idx[manYen];
  const s = NTA_R7.bands.slice(i).reduce((a, b) => a + b.n, 0);
  return `${((s / NTA_R7.total) * 100).toFixed(1)}%`;
}

export function shareBand(i: number): string {
  return `${((NTA_R7.bands[i].n / NTA_R7.total) * 100).toFixed(1)}%`;
}
