// 転職サービス解説一覧（/review/）の掲載リスト。
// 掲載数（REVIEW_COUNT）はこのリストの件数から自動で出し、/review/ と TOP の title・description・本文で使う。
export const REVIEW_GROUPS: { title: string; items: { href: string; name: string; tag: string }[] }[] = [
  {
    title: "総合型・大手",
    items: [
      { href: "/review/recruit-agent/", name: "リクルートエージェント", tag: "求人数最大級" },
      { href: "/review/doda/", name: "doda", tag: "サイト一体型" },
      { href: "/review/mynavi/", name: "マイナビ転職エージェント", tag: "20-30代" },
      { href: "/review/type-agent/", name: "type転職エージェント", tag: "首都圏・老舗" },
      { href: "/review/lhh/", name: "LHH転職エージェント", tag: "アデコ・外資系" },
      { href: "/review/randstad/", name: "ランスタッド", tag: "外資系・ハイクラス" },
      { href: "/review/bizreach/", name: "ビズリーチ", tag: "スカウト型" },
      { href: "/review/miidas/", name: "ミイダス", tag: "オファー型・診断" },
      { href: "/review/workport/", name: "ワークポート", tag: "全職種・全国拠点" },
      { href: "/review/en-tenshoku/", name: "エン転職", tag: "求人サイト・取材型" },
      { href: "/review/jac/", name: "JACリクルートメント", tag: "ハイクラス" },
      { href: "/review/assign/", name: "ASSIGN(アサイン)", tag: "若手ハイエンド" },
      { href: "/review/libz/", name: "LIBZ(リブズ)", tag: "逆求人型" },
    ],
  },
  {
    title: "IT・エンジニア",
    items: [
      { href: "/review/unison-career/", name: "ユニゾンキャリア", tag: "IT・Web特化" },
      { href: "/review/levtech/", name: "レバテックキャリア", tag: "IT特化大手" },
      { href: "/review/geekly/", name: "ギークリー", tag: "IT・Web・ゲーム" },
      { href: "/review/techclips/", name: "TechClipsエージェント", tag: "SIer/SES脱出" },
      { href: "/review/pit-career/", name: "PIT(ピット)", tag: "若手エンジニア" },
      { href: "/review/pro-jin/", name: "@PRO人", tag: "IT厳選提案型" },
      { href: "/review/sap-tenshoku/", name: "SAPテンショク", tag: "SAP特化" },
      { href: "/review/security-pro/", name: "セキュリティプロ・フリーランス", tag: "セキュリティ案件" },
      { href: "/review/eba-freelance/", name: "EBAフリーランス", tag: "高単価案件" },
    ],
  },
  {
    title: "クリエイター・ゲーム",
    items: [
      { href: "/review/mynavi-creator/", name: "マイナビクリエイター", tag: "Web・ゲーム" },
      { href: "/review/highfive/", name: "HIGH-FIVE", tag: "クリエイター専門" },
      { href: "/review/famicari/", name: "ファミキャリ!", tag: "ゲーム業界" },
      { href: "/review/hiraku-agent/", name: "Hiraku agent", tag: "ゲーム経験者" },
      { href: "/review/digireka/", name: "デジレカ", tag: "マーケ職特化" },
    ],
  },
  {
    title: "20代・未経験・第二新卒",
    items: [
      { href: "/review/mynavi-job20s/", name: "マイナビジョブ20's", tag: "20代専門" },
      { href: "/review/uzuz/", name: "UZUZ(第二の就活)", tag: "既卒・フリーター" },
      { href: "/review/daini-agent-neo/", name: "第二新卒エージェントneo", tag: "学歴不問" },
      { href: "/review/rework/", name: "Re:WORKエージェント", tag: "未経験専門" },
      { href: "/review/caricon/", name: "キャリコン", tag: "エージェント紹介" },
      { href: "/review/deaeru-agent/", name: "出会えるエージェント", tag: "3社紹介型" },
      { href: "/review/career-ticket-tenshoku/", name: "キャリアチケット転職", tag: "20-30代・成長軸" },
    ],
  },
  {
    title: "女性・ライフステージ",
    items: [
      { href: "/review/type-woman/", name: "type女性の転職エージェント", tag: "女性キャリア" },
      { href: "/review/realme-career/", name: "リアルミーキャリア", tag: "時短正社員" },
      { href: "/review/tokihana-career/", name: "トキハナキャリア", tag: "結婚・両立" },
      { href: "/review/newma/", name: "NewMA(ニューマ)", tag: "コンサル・M&A" },
      { href: "/review/myvision/", name: "MyVision(マイビジョン)", tag: "コンサル特化" },
    ],
  },
  {
    title: "医療・保育・専門職",
    items: [
      { href: "/review/oshigoto-lab/", name: "お仕事ラボ", tag: "薬剤師" },
      { href: "/review/nishima-pharma/", name: "にしまファーマ", tag: "医療業界" },
      { href: "/review/hoiku-musubi/", name: "ほいくのむすび", tag: "保育士" },
      { href: "/review/shika-agent/", name: "歯科医師求人ナビ", tag: "歯科医師" },
      { href: "/review/hupro/", name: "ヒュープロ", tag: "士業・管理部門" },
      { href: "/review/keiri-jobs/", name: "経理Jobs", tag: "経理特化" },
      { href: "/review/randstad-challenged/", name: "ランスタッド(障がい者転職)", tag: "障がい者雇用" },
      { href: "/review/jobsoelu/", name: "ジョブソエル", tag: "医療・介護求人" },
      { href: "/review/doctor-net/", name: "ドクターネットエージェント", tag: "放射線科" },
    ],
  },
  {
    title: "業界・職種特化",
    items: [
      { href: "/review/hape-agent/", name: "hape Agent", tag: "営業職" },
      { href: "/review/saasfield/", name: "SaaSfield", tag: "SaaS業界" },
      { href: "/review/prime-career/", name: "プライムキャリア", tag: "不動産・設備" },
      { href: "/review/rsg-fudosan/", name: "RSG", tag: "建設・不動産" },
      { href: "/review/agent-navi/", name: "転職AGENT Navi", tag: "マッチング" },
      { href: "/review/r4career/", name: "R4CAREER", tag: "名古屋・東海" },
      { href: "/review/oishiru-career/", name: "オイシルキャリア", tag: "スーパー・生鮮" },
      { href: "/review/zeicari/", name: "ゼイキャリ", tag: "税理士ハイクラス" },
      { href: "/review/susucari/", name: "サスキャリ", tag: "ESG・サステナ" },
      { href: "/review/security-work/", name: "セキュリティーワーク", tag: "警備員" },
      { href: "/review/realestate-works/", name: "リアルエステートWORKS", tag: "不動産" },
    ],
  },
  {
    title: "キャリア支援・退職サポート",
    items: [
      { href: "/review/kujilabo/", name: "クジラボ", tag: "教員・公務員" },
      { href: "/review/yamedoki/", name: "退職代行ヤメドキ", tag: "後払い対応" },
      { href: "/review/watashi-next/", name: "わたしNEXT", tag: "女性退職代行" },
      { href: "/review/otoko-taishoku/", name: "男の退職代行", tag: "男性退職代行" },
    ],
  },
];

export const REVIEW_COUNT = REVIEW_GROUPS.reduce((n, g) => n + g.items.length, 0);
