import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { salaryMan } from "@/data/verified-salary";

export const metadata: Metadata = {
  alternates: { canonical: "/company/maker-salary/" },
  title: "メーカー年収ランキング2026【有価証券報告書】大手61社の平均年収｜1位キーエンス2,178万円",
  description:
    "メーカー・製造業の年収ランキング2026です。有価証券報告書の平均年間給与で大手61社を比較しています（1位キーエンス2,178万円、2位レーザーテック1,881万円、3位ディスコ1,879万円、トヨタ自動車1,006万円）。1,000万円以上は14社です。業種別の傾向と中途採用の入口も解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "メーカー年収ランキング2026【有価証券報告書】大手61社の平均年収",
    description: "大手メーカー61社の平均年収を有価証券報告書の記載値でランキングし、転職難易度も解説しています。",
  },
};

// 年収は各社ページ掲載の有価証券報告書で検証した数値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "keyence", name: "キーエンス", salary: "約2,178万円", term: "2026年3月期", note: "センサ・測定器等のFA（ファクトリーオートメーション）機器で高い収益性を持つメーカーです。上場メーカーでも最高水準の平均年収で、平均年齢35.0歳と若く、成果連動の性格が強い点が特徴です。", hd: false, field: "FA機器（センサ）" },
  { rank: 2, slug: "lasertec", name: "レーザーテック", salary: "約1,881万円", term: "2026年6月期", note: "EUVマスク検査装置で世界シェアの大半を占めるメーカーです。6月決算のため、最新確定値は2026年6月期です(2026年9月24日提出の有価証券報告書)。単体従業員は少数精鋭の構成です。", hd: false, field: "半導体検査装置" },
  { rank: 3, slug: "disco", name: "ディスコ", salary: "約1,879万円", term: "2026年3月期", note: "半導体の切断・研削・研磨装置で世界トップシェアを持つメーカーです。有価証券報告書の実額1,879万円は上場メーカーで最高水準クラスです。個人・チームの成果を賞与に反映するWill会計と呼ばれる独自制度が、有価証券報告書にも記載されています。", hd: false, field: "半導体精密加工装置" },
  { rank: 4, slug: "tokyo-electron", name: "東京エレクトロン", salary: "約1,380万円", term: "2026年3月期", note: "半導体製造装置で国内首位・世界トップクラスのメーカーで、世界の半導体投資拡大が追い風となっています。製造・開発は国内子会社が担う事業会社です（純粋持株会社ではありません）。", hd: false, field: "半導体製造装置" },
  { rank: 5, slug: "sony", name: "ソニーグループ", salary: "約1,155万円", term: "2026年3月期", note: "持株会社（ソニーグループ株式会社）単体の数値で、本社機能中心の平均です。エレクトロニクス・ゲーム・金融・エンタメを束ねるコングロマリットです。", hd: true, field: "電機・エンタメ" },
  { rank: 6, slug: "fanuc", name: "ファナック", salary: "約1,144万円", term: "2026年3月期", note: "工作機械用CNC・産業用ロボットで世界トップクラスのメーカーです。山梨県忍野村の拠点を軸にした、高収益で独自の文化を持つ企業です。", hd: false, field: "FA・ロボット" },
  { rank: 7, slug: "advantest", name: "アドバンテスト", salary: "約1,097万円", term: "2026年3月期", note: "半導体テスタで世界トップクラスのメーカーです。単体2,033名は連結約7,241名の3割弱であり、グループ全体の水準を示す値ではない点にご留意ください。", hd: false, field: "半導体試験装置" },
  { rank: 8, slug: "fujifilm", name: "富士フイルムHD", salary: "約1,085万円", term: "2026年3月期", note: "持株会社（富士フイルムホールディングス）単体の数値です。ヘルスケア・マテリアルズ等を束ねる本社機能中心の平均であり、事業会社の富士フイルム(株)とは別の数値です。", hd: true, field: "ヘルスケア・素材" },
  { rank: 9, slug: "screen-hd", name: "SCREEN HD", salary: "約1,080万円", term: "2026年3月期", note: "半導体洗浄装置の世界大手です。持株会社単体(653名・本社機能中心)の数値であり、製造・開発はSCREENセミコンダクターソリューションズ等の事業会社が担っています。", hd: true, field: "半導体製造装置(洗浄)" },
  { rank: 10, slug: "mitsubishi-heavy", name: "三菱重工業", salary: "約1,072万円", term: "2026年3月期", note: "エナジー・防衛宇宙・プラントを手がける総合重工最大手です。2年連続の大幅上昇で1,000万円台に定着し、重工3社で最高の水準です。", hd: false, field: "総合重工" },
  { rank: 11, slug: "takara-tomy", name: "タカラトミー", salary: "約1,038万円", term: "2026年3月期", note: "前期比+117万円と大きく上昇しています。トミカ・プラレール等の定番IPに加え、トレーディングカード・海外展開が業績を牽引しています。", hd: false, field: "玩具" },
  { rank: 12, slug: "toyota", name: "トヨタ自動車", salary: "約1,006万円", term: "2026年3月期", note: "平均年齢40.5歳・平均勤続15.1年の全社員平均です。国内製造業の最大手であり、技術系・事務系とも採用規模が大きい企業です。", hd: false, field: "自動車" },
  { rank: 13, slug: "olympus", name: "オリンパス", salary: "約1,005万円", term: "2026年3月期", note: "消化器内視鏡で世界シェア首位級のメーカーです。映像（カメラ）事業は2021年に譲渡済みで、ヘルスケア専業となっています。平均年齢44.1歳の構成です。", hd: false, field: "医療機器（内視鏡）" },
  { rank: 14, slug: "ihi", name: "IHI", salary: "約1,000万円", term: "2026年3月期", note: "航空エンジン・ターボチャージャを手がける総合重工です。最新期に187万円の大幅上昇で1,000万円に到達しました。", hd: false, field: "重工(航空エンジン)" },
  { rank: 15, slug: "hoya", name: "HOYA", salary: "約970万円", term: "2026年3月期", note: "光学ガラス・半導体マスク・メディカル（眼鏡レンズ・内視鏡）を持つ高収益の精密メーカーで、グローバル比率が高い企業です。", hd: false, field: "精密・光学" },
  { rank: 16, slug: "yokogawa", name: "横河電機", salary: "約948万円", term: "2026年3月期", note: "プラント制御(DCS)・工業計測の大手です。920万→926万→948万円と3年連続で上昇しています。", hd: false, field: "計測・制御(DCS)" },
  { rank: 17, slug: "honda", name: "ホンダ(本田技研工業)", salary: "約932万円", term: "2026年3月期", note: "二輪世界首位で、四輪・HondaJetも手がけるモビリティ大手です。2年で計101万円上昇しています。平均勤続21.0年の長期就業型です。", hd: false, field: "自動車・二輪" },
  { rank: 18, slug: "azbil", name: "アズビル", salary: "約918万円", term: "2026年3月期", note: "「計測と制御」のビル空調制御・工場計装の専門メーカーです(旧・山武)。761万→833万→918万円と直近2年で計157万円上昇しています。", hd: false, field: "計測・制御(計装)" },
  { rank: 19, slug: "daifuku", name: "ダイフク", salary: "約917万円", term: "2025年12月期", note: "マテリアルハンドリング（物流・搬送システム）で世界首位級の企業です。半導体・EC物流の設備投資を追い風にする重工系メーカーです。", hd: false, field: "物流機器" },
  { rank: 20, slug: "denso", name: "デンソー", salary: "約915万円", term: "2026年3月期", note: "自動車部品で世界トップクラスのメーカーです。トヨタグループの中核で、電動化・先進安全にも注力しています。単体4.4万名・平均勤続22.9年の大規模安定雇用型です。", hd: false, field: "自動車部品" },
  { rank: 21, slug: "mitsubishi-electric", name: "三菱電機", salary: "約913万円", term: "2026年3月期", note: "FA・ビル・電力・防衛宇宙・空調まで手がける総合電機です。直近2年で計84万円上昇し、900万円台に到達しました。", hd: false, field: "総合電機" },
  { rank: 22, slug: "kawasaki-heavy", name: "川崎重工業", salary: "約910万円", term: "2026年3月期", note: "航空宇宙・二輪・鉄道・水素を手がける総合重工です。最新期に117万円の大幅上昇となりました。", hd: false, field: "総合重工" },
  { rank: 23, slug: "ricoh", name: "リコー", salary: "約906万円", term: "2026年3月期", note: "オフィス機器からデジタルサービスへ事業転換を進めています。単体従業員が3年で7,282名→4,596名と変化しており、平均値は母集団の変化とあわせて読む必要があります。", hd: false, field: "事務機器・デジタルサービス" },
  { rank: 24, slug: "komatsu", name: "コマツ（小松製作所）", salary: "約902万円", term: "2026年3月期", note: "建設・鉱山機械で世界トップクラスのメーカーです。3年連続で上昇し、900万円台に到達しました。平均勤続17.1年の長期就業型です。", hd: false, field: "建設機械" },
  { rank: 25, slug: "shin-etsu", name: "信越化学工業", salary: "約898万円", term: "2026年3月期", note: "塩化ビニル樹脂・半導体シリコン（シリコンウエハー）で世界首位級の、高収益体質の総合化学メーカーです。平均勤続18.8年の安定雇用型です。", hd: false, field: "化学・素材" },
  { rank: 26, slug: "kubota", name: "クボタ", salary: "約860万円", term: "2025年12月期", note: "農業機械・エンジンで国内首位級のメーカーで、水環境インフラも展開しています。12月決算のため、最新値は2025年12月期です。", hd: false, field: "農業機械・水インフラ" },
  { rank: 27, slug: "yaskawa", name: "安川電機", salary: "約859万円", term: "2026年2月期", note: "サーボモータ・インバータ・産業用ロボットの大手です。経験者採用は開発〜フィールドエンジニアまで幅広く常設されています。", hd: false, field: "産業用ロボット・FA" },
  { rank: 28, slug: "nissan", name: "日産自動車", salary: "約857万円", term: "2026年3月期", note: "EV先行の自動車大手です。構造改革の渦中にあり、最新期は前期比38万円低下しました。", hd: false, field: "自動車" },
  { rank: 29, slug: "yakult", name: "ヤクルト本社", salary: "約854万円", term: "2026年3月期", note: "平均勤続約17.7年と非常に長い安定雇用型です。乳酸菌飲料の国内事業に加え、アジア・米州の海外事業が利益の柱となっています。", hd: false, field: "食品・飲料" },
  { rank: 30, slug: "hirose", name: "ヒロセ電機", salary: "約847万円", term: "2026年3月期", note: "コネクタ専業の高収益メーカーです。少数精鋭(単体約1,000名)で、平均年収は電子部品業界で最高水準クラスです。", hd: false, field: "コネクタ" },
  { rank: 31, slug: "konica-minolta", name: "コニカミノルタ", salary: "約844万円", term: "2026年3月期", note: "オフィス機器・商用印刷・センシング等の4事業を展開しています。799万→821万→844万円と3年連続で上昇しています。選考では、SPIと英語力の確認が公式フローに組み込まれています。", hd: false, field: "精密機器・オフィス機器" },
  { rank: 32, slug: "fuji-electric", name: "富士電機", salary: "約840万円", term: "2026年3月期", note: "重電・パワエレ・パワー半導体のメーカーです。786万→810万→840万円と直近2年で計54万円上昇しています。", hd: false, field: "重電・パワー半導体" },
  { rank: 33, slug: "murata", name: "村田製作所", salary: "約838万円", term: "2026年3月期", note: "積層セラミックコンデンサ（MLCC）で世界シェア首位級の、スマホ・車載向けを支える京都の電子部品大手です。", hd: false, field: "電子部品" },
  { rank: 34, slug: "casio", name: "カシオ計算機", salary: "約838万円", term: "2026年3月期", note: "G-SHOCK等の時計・電卓・電子辞書・電子楽器のメーカーです。前期814万円から上昇しています。単体従業員数は2,053名です。", hd: false, field: "時計・電機" },
  { rank: 35, slug: "zojirushi", name: "象印マホービン", salary: "約835万円", term: "2025年11月期", note: "炊飯ジャー・ステンレスボトルで知られる大阪の生活家電メーカーです。単体527名規模で、家電メーカーとして高めの水準です。", hd: false, field: "家電" },
  { rank: 36, slug: "yamaha-motor", name: "ヤマハ発動機", salary: "約834万円", term: "2025年12月期", note: "二輪車の世界大手で、12月決算です。楽器・音響のヤマハ(7951)とは別法人である点にご留意ください(資本関係はありますが、上場企業として独立しています)。", hd: false, field: "輸送機器(二輪)" },
  { rank: 37, slug: "tokyo-seimitsu", name: "東京精密", salary: salaryMan("tokyo-seimitsu"), term: "2026年3月期", note: "ウェーハプローバ・ダイシングなど半導体計測/加工装置のメーカーです。平均年間給与は過去12年で最高を更新しました。", hd: false, field: "半導体計測・加工装置" },
  { rank: 38, slug: "pigeon", name: "ピジョン", salary: "約827万円", term: "2025年12月期", note: "哺乳器・育児用品の国内大手です。単体338名と少人数で、製造等はグループ会社が担うため、本社単体（本社機能中心）の平均である点にご留意ください。", hd: false, field: "育児用品" },
  { rank: 39, slug: "suzuki", name: "スズキ", salary: "約827万円", term: "2026年3月期", note: "軽自動車とインド市場に強みを持つメーカーです。2年で計125万円の大幅上昇となりました。本社は浜松です。", hd: false, field: "自動車・二輪" },
  { rank: 40, slug: "nidec", name: "ニデック", salary: "約822万円", term: "2026年3月期", note: "精密小型モーターで世界首位のメーカーです(旧・日本電産)。2026年3月期の有価証券報告書は2026年9月30日に提出されました。前期比8.2%上昇しています。車載・家電・産業向けの総合モーターメーカーです。", hd: false, field: "精密・モーター" },
  { rank: 41, slug: "terumo", name: "テルモ", salary: "約821万円", term: "2026年3月期", note: "カテーテル等の心臓血管領域を中核とする医療機器大手です。直近2年で計66万円上昇しています。", hd: false, field: "医療機器（カテーテル）" },
  { rank: 42, slug: "horiba", name: "堀場製作所", salary: "約820万円", term: "2025年12月期", note: "エンジン計測で大きな世界シェアを持つ、分析・計測機器の京都メーカーです。キャリア採用も実施しています。", hd: false, field: "計測・分析機器" },
  { rank: 43, slug: "epson", name: "セイコーエプソン", salary: "約808万円", term: "2026年3月期", note: "インクジェットプリンター・プロジェクターの精密機器大手です。本社は長野県諏訪市で、平均勤続18.1年の長期就業型です。", hd: false, field: "精密機器（プリンター）" },
  { rank: 44, slug: "brother", name: "ブラザー工業", salary: "約805万円", term: "2026年3月期", note: "プリンター・複合機を軸に工作機械・ミシンまで持つ名古屋の総合機器メーカーです。単体従業員数は3,997名です。", hd: false, field: "電機・機械" },
  { rank: 45, slug: "rohm", name: "ローム", salary: "約803万円", term: "2026年3月期", note: "京都本社の半導体メーカーで、パワー半導体・カスタムLSIが主力です。SiCパワー半導体への投資を拡大しています。", hd: false, field: "半導体(パワー・LSI)" },
  { rank: 46, slug: "yamaha", name: "ヤマハ", salary: "約794万円", term: "2026年3月期", note: "楽器で世界首位級、音響機器も展開する浜松のメーカーです。平均勤続18.1年の長期雇用型です。ヤマハ発動機（7272）とは別法人です。", hd: false, field: "楽器・音響" },
  { rank: 47, slug: "citizen", name: "シチズン時計", salary: "約789万円", term: "2026年3月期", note: "事業持株会社の単体770名（本社機能中心）の値であり、製造子会社の従業員は含まれない点にご留意ください。2021年3月期の593万円から上昇傾向にあります。", hd: true, field: "時計" },
  { rank: 48, slug: "minebea-mitsumi", name: "ミネベアミツミ", salary: "約785万円", term: "2026年3月期", note: "ベアリングなど超精密部品の総合メーカーです。キャリア採用ページに職種一覧と復職制度が掲載されています。", hd: false, field: "精密部品" },
  { rank: 49, slug: "anritsu", name: "アンリツ", salary: "約783万円", term: "2026年3月期", note: "5G/6G向け通信計測器の専門メーカーです。730万円(2025年3月期)から783万円へ53万円上昇しました。", hd: false, field: "通信計測" },
  { rank: 50, slug: "smc", name: "SMC", salary: "約780万円", term: "2026年3月期", note: "空圧制御機器で世界トップシェアのメーカーです。営業・技術・生産系まで、職種別のキャリア採用窓口を常設しています。", hd: false, field: "空圧機器" },
  { rank: 51, slug: "ibiden", name: "イビデン", salary: "約766万円", term: "2026年3月期", note: "ICパッケージ基板の大手です。技術・管理・製造など多職種でキャリア採用を公式に募集しています。", hd: false, field: "電子部品(基板)" },
  { rank: 52, slug: "subaru", name: "SUBARU", salary: "約764万円", term: "2026年3月期", note: "アイサイトの安全技術と北米市場が強みです。2年連続で上昇しています。開発・生産の主力は群馬県太田市です。", hd: false, field: "自動車" },
  { rank: 53, slug: "renesas", name: "ルネサスエレクトロニクス", salary: "約749万円", term: "2025年12月期", note: "マイコン中心の半導体大手です。12月決算のため、2025年12月期が最新確定値です。889万→809万→749万円と直近3年は減少傾向にあります(年度間変動が大きい)。", hd: false, field: "半導体(マイコン)" },
  { rank: 54, slug: "hamamatsu-photonics", name: "浜松ホトニクス", salary: "約728万円", term: "2025年9月期", note: "光電子増倍管で世界シェアの大半を占めるメーカーで、9月決算です。確認時点ではキャリア採用の募集なしと公式に記載されていました(時期により変動)。", hd: false, field: "光技術" },
  { rank: 55, slug: "nabtesco", name: "ナブテスコ", salary: "約715万円", term: "2025年12月期", note: "ロボット用精密減速機で大きな世界シェアを持つメーカーです。書類→Web適性→一次→最終の公式選考フローを公開しています。", hd: false, field: "精密機器" },
  { rank: 56, slug: "mazda", name: "マツダ", salary: "約711万円", term: "2026年3月期", note: "SKYACTIV・魂動デザインの広島発メーカーです。直近はほぼ横ばいで推移しています。", hd: false, field: "自動車" },
  { rank: 57, slug: "toyo-suisan", name: "東洋水産", salary: "約698万円", term: "2026年3月期", note: "「マルちゃん」ブランドの即席麺大手です。北米の即席麺事業（Maruchan）が成長を牽引しています。平均勤続が長い長期雇用型です。", hd: false, field: "食品" },
  { rank: 58, slug: "calbee", name: "カルビー", salary: "約685万円", term: "2026年3月期", note: "ポテトチップス・じゃがりこの菓子大手です。2026年3月期に工場の無期契約社員を正社員等級へ統合し、単体+1,421名となった影響で平均値が変動しています（待遇引き下げではありません）。", hd: false, field: "食品" },
  { rank: 59, slug: "muji", name: "良品計画（無印良品）", salary: "約670万円", term: "2025年8月期", note: "「無印良品」を展開する製造小売（SPA）で、企画・生産管理から店舗運営まで担っています。他のメーカーとは事業構造が異なります。", hd: false, field: "製造小売" },
  { rank: 60, slug: "taiyo-yuden", name: "太陽誘電", salary: "約661万円", term: "2026年3月期", note: "積層セラミックコンデンサ大手です。キャリア採用情報ページと選考プロセスを公式に公開しています。", hd: false, field: "電子部品" },
  { rank: 61, slug: "thk", name: "THK", salary: "約648万円", term: "2025年12月期", note: "LMガイドで大きな世界シェアを持つメーカーです。公式サイトに中途採用の常設窓口は確認できませんでした(2026年8月時点)。", hd: false, field: "機械要素部品" },
];

const faqData = [
  {
    q: "メーカーで平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した大手61社では、キーエンスが約2,178万円（2026年3月期）で最も高く、レーザーテック約1,881万円・ディスコ約1,879万円・東京エレクトロン約1,380万円が続きます（半導体関連が上位を占めます）。キーエンスは平均年齢35.0歳と若く成果連動の性格が強い点、ソニーグループの数値は持株会社単体（本社機能スタッフ中心）の平均である点など、数値の背景もあわせて確認することをおすすめします。",
  },
  {
    q: "持株会社（HD）の平均年収はなぜ参考程度なのですか？",
    a: "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。ソニーグループのような持株会社体制では、単体＝本社機能スタッフ（経営企画・管理部門等）中心の平均となり、各事業会社（ソニー・ソニーセミコンダクタ等）の技術者の給与実態とは水準が異なります。中途で入る事業会社の提示額は、転職エージェント経由で確認することをおすすめします。",
  },
  {
    q: "メーカーの年収は業種でどのくらい差がありますか？",
    a: "有価証券報告書ベースで見ると、FA・半導体製造装置（キーエンス2,178万・東京エレクトロン1,380万・ファナック1,144万円）が突出し、電機・自動車・精密（ソニー1,155万〜HOYA970万円）が上位、化学・電子部品・食品・家電・製造小売（信越化学898万〜良品計画670万円）が中位に分布します。高収益のFA・半導体・精密は付加価値とグローバル比率の高さ、食品は国内安定志向という違いが給与水準に表れています。",
  },
  {
    q: "メーカーへの転職難易度は高いですか？",
    a: "技術系（設計・開発・生産技術・品質保証）は近接する製造業での実務経験が最も評価され、経験者採用が中心です。事務系（企画・営業・管理）は募集枠が相対的に少なく競争があります。いずれも募集の有無・職種は時期により変動するため、各社の採用サイトとエージェントの併用が入口になります。詳しくは各社の転職ガイドをご覧ください。",
  },
  {
    q: "メーカーの中途採用はどこに応募すればいいですか？",
    a: "ソニーグループのような持株会社体制の企業は、採用が事業会社単位で行われることがあります。持株会社ではなく各事業会社の採用ページ、または転職エージェント経由での応募が入口です。技術系はメーカー・製造業に強いエージェント、ハイクラス層はスカウト型サービスの活用が有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "メーカー年収ランキング2026【有価証券報告書】大手61社の平均年収",
  dateModified: "2026-10-28",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/maker-salary/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function MakerSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "メーカーの年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            メーカー年収ランキング2026【有価証券報告書】大手61社の平均年収
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手メーカー61社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）のみにもとづいてランキングしています。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。FA・半導体・電機・自動車・精密・化学・電子部品・食品・家電まで、持株会社単体と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">メーカー年収ランキング2026 トップ10（有価証券報告書の平均年間給与）</p>
          <ol className="space-y-1.5 text-sm text-text-secondary list-decimal pl-5">
            {ranking.slice(0, 10).map((r) => (
              <li key={r.slug}>
                <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>　<strong className="text-navy">{r.salary}</strong>
                <span className="text-xs text-text-muted">（{r.term}・{r.field}{r.hd ? "・HD単体値" : ""}）</span>
              </li>
            ))}
          </ol>
          <ul className="mt-4 space-y-1.5 text-sm text-text-secondary list-disc pl-5">
            <li>平均年収1,000万円以上は61社中{ranking.filter((r) => parseInt(r.salary.replace(/[^0-9]/g, ""), 10) >= 1000).length}社です。上位はFA機器・半導体製造装置が占めます。</li>
            <li>「推定年収」ではなく、各社が提出した有価証券報告書の提出会社（単体）の平均年間給与です。持株会社（HD）は本社機能中心の値なので、事業会社の水準とは区別してご覧ください。</li>
          </ul>
          <div className="mt-4 rounded-xl bg-white/70 p-4 text-sm text-text-secondary">
            <p className="font-bold text-navy mb-1">集計方法（2026年10月28日時点）</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>対象は当サイトが企業別ガイドを掲載している上場メーカー{ranking.length}社です。各社の最新の有価証券報告書「従業員の状況」に記載された提出会社の平均年間給与を、万円未満を切り捨てて並べています。</li>
              <li>有価証券報告書は原則として事業年度終了後3か月以内に提出されます。3月決算の会社はすべて2026年3月期の値です（{ranking.filter((r) => r.term === "2026年3月期").length}社）。多くは2026年6月に提出されており、ニデックは2026年9月30日の提出です。</li>
              <li>3月決算以外の会社は、2026年10月28日時点で提出済みの最新期の値です（{Array.from(new Set(ranking.filter((r) => r.term !== "2026年3月期").map((r) => r.term))).map((t) => `${t} ${ranking.filter((r) => r.term === t).length}社`).join("・")}）。決算期が異なる会社の比較には時点差があります。</li>
            </ul>
          </div>
        </div>

        <h2>有価証券報告書準拠 メーカー年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">分野</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">平均年間給与（有価証券報告書）</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.slug} className="border-b border-border">
                  <td className="py-3 px-4 font-bold text-navy">{r.rank}位</td>
                  <td className="py-3 px-4">
                    <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>
                    {r.hd && <span className="ml-2 text-xs bg-warm-gray rounded-full px-2 py-0.5 text-text-muted">HD単体値</span>}
                  </td>
                  <td className="py-3 px-4 text-text-secondary">{r.field}</td>
                  <td className="py-3 px-4 font-bold text-navy">{r.salary}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※各社の有価証券報告書「従業員の状況」記載の提出会社の平均年間給与です。算定の範囲は各社の注記により異なります（例：テルモは正社員のみで算出）。「HD単体値」のソニーグループは持株会社本体（本社機能スタッフ中心）の平均で、事業会社の給与水準とは異なります。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
        </p>

        <h2>各社の特徴と転職ガイド</h2>
        <div className="space-y-4 mb-8">
          {ranking.map((r) => (
            <div key={r.slug} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-navy">{r.rank}位 {r.name} <span className="text-teal">{r.salary}</span><span className="text-xs text-text-muted ml-1">（{r.term}）</span></h3>
                <Link href={`/company/${r.slug}/`} className="text-teal text-sm hover:underline">転職ガイドを見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{r.note}</p>
            </div>
          ))}
        </div>

        <h2>ランキングを見るときの3つの注意点</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">「HD単体値」は本社の平均</h3>
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有価証券報告書の数値は、本社機能スタッフを中心とした平均です。事業会社の技術職の水準は、求人票や転職エージェント経由で確認することをおすすめします。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">ヤクルト（平均勤続約17.7年）のような長期雇用型は平均値が高く出ます。中途入社時の提示額とは異なります。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">タカラトミーのように業績好調で平均給与が上昇する例があり、決算期の併記をご確認ください。61社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>メーカー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          メーカーの技術系は非公開求人が多く、専門性の見せ方が選考を左右します。複数のエージェントに登録し、求人と情報を幅広く集めることをおすすめします。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手メーカーから中堅まで幅広い求人を扱っています。技術系・事務系の両方に強みがあります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。メーカーの同業比較・年収レンジ把握がしやすい点が特長です。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。管理職・高度専門職クラスの市場価値の把握に適しています。ハイクラスのメーカー求人が多く集まります。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニアに特化したエージェントです。メーカーの車載ソフト・組込・DX系の技術職を検討する方に適しています。" },
            { name: "ユニゾンキャリア", href: "/review/unison-career/", desc: "IT特化の転職エージェントです。メーカーを含め、IT職での転職を考える方の比較候補となります。" },
            { name: "転職AGENT Navi", href: "/review/agent-navi/", desc: "20代の既卒・第二新卒が主な対象です。メーカーへの初めての転職で、どのエージェントに登録すべきかから相談したい方に適しています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">メーカーへの転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">各社の転職ガイドで一次データを確認したうえで、ポジションごとの詳細は転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/game-salary/" className="btn-outline px-8 py-3">ゲーム会社の年収ランキングも見る</Link>
            <Link href="/company/it-consultant-salary/" className="btn-outline px-8 py-3">ITコンサル・SIerの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
