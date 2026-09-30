// エージェント公式サイトに「掲載されていた」企業のうち、当サイトに解説ページがある企業だけを収録(2026-09-30実査)。
//
// 収録ルール(推測で足さない):
// 1. 各エージェント公式トップページをブラウザで開き、掲載されている企業ロゴのalt属性を全件取得
// 2. Google Playバッジ・決済手段・口コミウィジェット等、取引企業でないaltを除外
// 3. 「株式会社」「ロゴ」を除いた完全一致のみ採用。部分一致だと『伊藤忠マシンテクノス』を伊藤忠商事、
//    『富士フイルムワコーケミカル』を富士フイルムHDと誤認するため、グループ会社名は拾わない
// 4. 同名の別会社が存在する社名(ディスコ 等)は機械照合から除外
//
// 公式サイトに企業ロゴの掲載がなかったエージェントは、ここに載せない(=ページにも何も出さない)。

export type ClientCompany = { slug: string; name: string; matchedAlt: string };
export type AgentClients = { url: string; companies: ClientCompany[] };

export const CLIENTS_FETCHED_AT = "2026年9月30日";

export const AGENT_CLIENTS: Record<string, AgentClients> = {
  "bizreach": {
    url: "https://www.bizreach.jp/",
    companies: [
      { slug: "ajinomoto", name: "味の素", matchedAlt: "AJINOMOTO" },
      { slug: "denso", name: "デンソー", matchedAlt: "DENSO" },
      { slug: "keyence", name: "キーエンス", matchedAlt: "KEYENCE" },
      { slug: "ntt", name: "NTT", matchedAlt: "NTT" },
      { slug: "sony", name: "ソニー", matchedAlt: "SONY" },
      { slug: "sumitomo-corp", name: "住友商事", matchedAlt: "住友商事" },
      { slug: "toyota", name: "トヨタ自動車", matchedAlt: "TOYOTA" },
    ],
  },
  "doda": {
    url: "https://doda.jp/",
    companies: [
      { slug: "keyence", name: "キーエンス", matchedAlt: "株式会社キーエンス" },
      { slug: "otsuka-shokai", name: "大塚商会", matchedAlt: "株式会社大塚商会" },
      { slug: "rakuten", name: "楽天グループ", matchedAlt: "楽天グループ株式会社" },
      { slug: "sony", name: "ソニー", matchedAlt: "ソニー株式会社" },
      { slug: "baycurrent", name: "ベイカレント", matchedAlt: "株式会社ベイカレント" },
    ],
  },
  "famicari": {
    url: "https://career.famitsu.com/",
    companies: [
      { slug: "capcom", name: "カプコン", matchedAlt: "株式会社カプコン" },
    ],
  },
  "jac": {
    url: "https://www.jac-recruitment.jp/",
    companies: [
      { slug: "accenture", name: "アクセンチュア", matchedAlt: "アクセンチュア株式会社" },
      { slug: "chugai", name: "中外製薬", matchedAlt: "中外製薬株式会社" },
      { slug: "denso", name: "デンソー", matchedAlt: "株式会社デンソー" },
      { slug: "fujifilm", name: "富士フイルムHD", matchedAlt: "富士フイルム株式会社" },
      { slug: "hitachi", name: "日立製作所", matchedAlt: "株式会社日立製作所" },
      { slug: "ihi", name: "IHI", matchedAlt: "株式会社IHI" },
      { slug: "murata", name: "村田製作所", matchedAlt: "株式会社村田製作所" },
      { slug: "toyota", name: "トヨタ自動車", matchedAlt: "トヨタ自動車株式会社" },
    ],
  },
  "levtech": {
    url: "https://career.levtech.jp/",
    companies: [
      { slug: "cyberagent", name: "サイバーエージェント", matchedAlt: "株式会社サイバーエージェントのロゴ" },
      { slug: "cybozu", name: "サイボウズ", matchedAlt: "サイボウズ株式会社のロゴ" },
    ],
  },
  "myvision": {
    url: "https://my-vision.co.jp/",
    companies: [
      { slug: "accenture", name: "アクセンチュア", matchedAlt: "アクセンチュア" },
      { slug: "baycurrent", name: "ベイカレント", matchedAlt: "ベイカレント" },
      { slug: "dentsu-soken", name: "電通総研", matchedAlt: "電通総研" },
      { slug: "future", name: "フューチャー", matchedAlt: "フューチャー" },
      { slug: "shift", name: "SHIFT", matchedAlt: "SHIFT" },
    ],
  },
  "pit-career": {
    url: "https://pit-job.net/career/",
    companies: [
      { slug: "accenture", name: "アクセンチュア", matchedAlt: "accenture" },
      { slug: "cyberagent", name: "サイバーエージェント", matchedAlt: "サイバーエージェント" },
      { slug: "dena", name: "DeNA", matchedAlt: "DeNA" },
      { slug: "gmo", name: "GMO", matchedAlt: "GMO" },
      { slug: "mercari", name: "メルカリ", matchedAlt: "mercari" },
      { slug: "rakuten", name: "楽天グループ", matchedAlt: "Rakuten" },
      { slug: "recruit", name: "リクルートHD", matchedAlt: "RECRUIT" },
      { slug: "shift", name: "SHIFT", matchedAlt: "SHIFT" },
    ],
  },
  "randstad-challenged": {
    url: "https://www.randstad.co.jp/challenged/",
    companies: [
      { slug: "denso", name: "デンソー", matchedAlt: "デンソー" },
      { slug: "kajima", name: "鹿島", matchedAlt: "鹿島建設" },
      { slug: "mitsubishi-heavy", name: "三菱重工", matchedAlt: "三菱重工" },
      { slug: "nabtesco", name: "ナブテスコ", matchedAlt: "ナブテスコ株式会社" },
      { slug: "osaka-gas", name: "大阪ガス", matchedAlt: "大阪ガス" },
      { slug: "otsuka-shokai", name: "大塚商会", matchedAlt: "大塚商会" },
      { slug: "resonac", name: "レゾナックHD", matchedAlt: "レゾナック" },
      { slug: "scsk", name: "SCSK", matchedAlt: "SCSK" },
      { slug: "yakult", name: "ヤクルト本社", matchedAlt: "ヤクルト本社" },
      { slug: "shift", name: "SHIFT", matchedAlt: "株式会社SHIFT" },
    ],
  },
  "techclips": {
    url: "https://agent.tech-clips.com/",
    companies: [
      { slug: "sony", name: "ソニー", matchedAlt: "ソニー株式会社" },
    ],
  },
  "type-agent": {
    url: "https://type.career-agent.jp/",
    companies: [
      { slug: "cyberagent", name: "サイバーエージェント", matchedAlt: "サイバーエージェントロゴ" },
      { slug: "cybozu", name: "サイボウズ", matchedAlt: "サイボウズロゴ" },
      { slug: "konami", name: "コナミ", matchedAlt: "konamiロゴ" },
    ],
  },
  "type-woman": {
    url: "https://type.woman-agent.jp/",
    companies: [
      { slug: "cyberagent", name: "サイバーエージェント", matchedAlt: "サイバーエージェントロゴ" },
      { slug: "cybozu", name: "サイボウズ", matchedAlt: "サイボウズロゴ" },
    ],
  },
};
