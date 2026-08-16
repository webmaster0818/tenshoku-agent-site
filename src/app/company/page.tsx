import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "企業別 転職ガイド一覧｜有報準拠の年収・難易度データベース【2026年】",
  description:
    "人気企業への転職難易度・中途採用・年収を企業ごとに解説する一覧ページ。上場企業は有価証券報告書の平均年収（決算期明記）に準拠し、外資は参考値と明記。任天堂・ソニー・トヨタ・オービック・タカラトミーなど61社を掲載中。",
  alternates: { canonical: "/company/" },
};

// 年収は各企業ページ掲載の検証済み値（有報=決算期付き/外資=参考値）。ページ側と必ず一致させること。
const companies = [
  { slug: "nintendo", name: "任天堂", salary: "982万円（有報）", tag: "ゲーム" },
  { slug: "sony", name: "ソニーグループ", salary: "1,155万円（有報）", tag: "エレクトロニクス" },
  { slug: "toyota", name: "トヨタ自動車", salary: "1,006万円（有報）", tag: "自動車" },
  { slug: "capcom", name: "カプコン", salary: "約985万円（有報）", tag: "ゲーム" },
  { slug: "cyberagent", name: "サイバーエージェント", salary: "913万円（有報）", tag: "IT・広告" },
  { slug: "mercari", name: "メルカリ", salary: "1,176万円（有報）", tag: "IT" },
  { slug: "hoya", name: "HOYA", salary: "約970万円（有報）", tag: "精密機器" },
  { slug: "daifuku", name: "ダイフク", salary: "約917万円（有報）", tag: "マテハン" },
  { slug: "nidec", name: "ニデック", salary: "約760万円（有報）", tag: "電子部品" },
  { slug: "muji", name: "良品計画（無印良品）", salary: "約670万円（有報）", tag: "小売" },
  { slug: "obic", name: "オービック", salary: "約1,129万円（有報）", tag: "SIer" },
  { slug: "nri", name: "野村総合研究所（NRI）", salary: "約1,332万円（有報）", tag: "ITコンサル" },
  { slug: "baycurrent", name: "ベイカレント", salary: "約1,331万円（有報）", tag: "コンサル" },
  { slug: "dentsu-soken", name: "電通総研", salary: "約1,125万円（有報）", tag: "ITコンサル" },
  { slug: "simplex", name: "シンプレクスHD", salary: "約938万円（有報）", tag: "金融IT" },
  { slug: "future", name: "フューチャー", salary: "約794万円（有報）", tag: "ITコンサル" },
  { slug: "shift", name: "SHIFT", salary: "約684万円（有報）", tag: "品質保証" },
  { slug: "koei-tecmo", name: "コーエーテクモHD", salary: "約903万円（有報・HD単体）", tag: "ゲーム" },
  { slug: "sega-sammy", name: "セガサミーHD", salary: "約884万円（有報・HD単体）", tag: "ゲーム" },
  { slug: "konami", name: "コナミグループ", salary: "約850万円（有報・HD単体）", tag: "ゲーム" },
  { slug: "toyo-suisan", name: "東洋水産（マルちゃん）", salary: "約698万円（有報）", tag: "食品" },
  { slug: "takara-tomy", name: "タカラトミー", salary: "約1,038万円（有報）", tag: "玩具" },
  { slug: "yakult", name: "ヤクルト本社", salary: "約854万円（有報）", tag: "食品" },
  { slug: "zojirushi", name: "象印マホービン", salary: "約835万円（有報）", tag: "家電" },
  { slug: "casio", name: "カシオ計算機", salary: "約838万円（有報）", tag: "時計・電機" },
  { slug: "yaskawa", name: "安川電機", salary: "約859万円（有報）", tag: "産業用ロボット" },
  { slug: "hirose", name: "ヒロセ電機", salary: "約847万円（有報）", tag: "コネクタ" },
  { slug: "horiba", name: "堀場製作所", salary: "約820万円（有報）", tag: "計測機器" },
  { slug: "minebea-mitsumi", name: "ミネベアミツミ", salary: "約785万円（有報）", tag: "電子部品" },
  { slug: "smc", name: "SMC", salary: "約780万円（有報）", tag: "空圧機器" },
  { slug: "ibiden", name: "イビデン", salary: "約766万円（有報）", tag: "電子部品" },
  { slug: "hamamatsu-photonics", name: "浜松ホトニクス", salary: "約728万円（有報）", tag: "光技術" },
  { slug: "nabtesco", name: "ナブテスコ", salary: "約715万円（有報）", tag: "精密機器" },
  { slug: "taiyo-yuden", name: "太陽誘電", salary: "約661万円（有報）", tag: "電子部品" },
  { slug: "thk", name: "THK", salary: "約648万円（有報）", tag: "機械要素部品" },
  { slug: "azbil", name: "アズビル", salary: "約918万円（有報）", tag: "計測・制御" },
  { slug: "ricoh", name: "リコー", salary: "約906万円（有報）", tag: "事務機器" },
  { slug: "konica-minolta", name: "コニカミノルタ", salary: "約844万円（有報）", tag: "精密機器" },
  { slug: "renesas", name: "ルネサスエレクトロニクス", salary: "約749万円（有報・12月期）", tag: "半導体" },
  { slug: "disco", name: "ディスコ", salary: "約1,879万円（有報）", tag: "半導体装置" },
  { slug: "lasertec", name: "レーザーテック", salary: "約1,681万円（有報）", tag: "半導体装置" },
  { slug: "advantest", name: "アドバンテスト", salary: "約1,098万円（有報）", tag: "半導体装置" },
  { slug: "bandai-namco", name: "バンダイナムコHD", salary: "約984万円（有報・持株）", tag: "ゲーム・玩具" },
  { slug: "yamaha-motor", name: "ヤマハ発動機", salary: "約835万円（有報）", tag: "輸送機器" },
  { slug: "rohm", name: "ローム", salary: "約804万円（有報）", tag: "半導体" },
  { slug: "screen-hd", name: "SCREEN HD", salary: "約1,080万円（有報・持株）", tag: "半導体装置" },
  { slug: "tokyo-seimitsu", name: "東京精密", salary: "約828万円（有報）", tag: "半導体装置" },
  { slug: "pigeon", name: "ピジョン", salary: "約827万円（有報・単体）", tag: "育児用品" },
  { slug: "brother", name: "ブラザー工業", salary: "約805万円（有報）", tag: "電機・機械" },
  { slug: "yamaha", name: "ヤマハ", salary: "約794万円（有報）", tag: "楽器・音響" },
  { slug: "citizen", name: "シチズン時計", salary: "約789万円（有報・HD単体）", tag: "時計" },
  { slug: "calbee", name: "カルビー", salary: "約685万円（有報・注記あり）", tag: "食品" },
  { slug: "keyence", name: "キーエンス", salary: "約2,178万円（有報）", tag: "FA機器" },
  { slug: "tokyo-electron", name: "東京エレクトロン", salary: "約1,380万円（有報）", tag: "半導体製造装置" },
  { slug: "fanuc", name: "ファナック", salary: "約1,144万円（有報）", tag: "FA・ロボット" },
  { slug: "denso", name: "デンソー", salary: "約915万円（有報）", tag: "自動車部品" },
  { slug: "shin-etsu", name: "信越化学工業", salary: "約898万円（有報）", tag: "化学" },
  { slug: "murata", name: "村田製作所", salary: "約838万円（有報）", tag: "電子部品" },
  { slug: "amazon", name: "Amazon Japan", salary: "参考値（外資）", tag: "外資IT" },
  { slug: "google", name: "Google Japan", salary: "参考値（外資）", tag: "外資IT" },
  { slug: "accenture", name: "アクセンチュア", salary: "参考値（外資）", tag: "コンサル" },
];

export default function CompanyIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別 転職ガイド" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            企業別 転職ガイド一覧
          </h1>
          <p className="text-text-secondary leading-relaxed text-sm">
            「◯◯社への転職は難しい？」に、公開一次資料で答える企業データベースです。上場企業の平均年収は<strong>有価証券報告書の記載値（決算期明記・全社平均）</strong>に準拠し、日本の有報が存在しない外資は参考値であることを明記しています。転職難易度・中途採用の傾向・選考対策は各企業ページをご覧ください。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={`/company/${c.slug}/`}
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-navy hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-bold text-navy">{c.name}</h2>
                <span className="text-xs text-text-secondary bg-warm-gray rounded-full px-2 py-0.5">{c.tag}</span>
              </div>
              <p className="text-sm text-text-secondary">平均年収: <span className="font-semibold">{c.salary}</span></p>
              <p className="text-xs text-text-secondary mt-1">転職難易度・中途採用・選考対策を見る →</p>
            </Link>
          ))}
        </div>

        <p className="text-xs text-text-secondary mb-10">
          ※「有報」= 有価証券報告書記載の平均年間給与（全社員平均・職種別ではありません）。決算期・注記は各ページに記載しています。外資系企業の年収は公開情報にもとづく参考値です。
        </p>

        <section className="bg-warm-gray rounded-2xl p-6">
          <h2 className="font-bold text-navy mb-3">転職活動をあわせて進めるなら</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/company/game-salary/" className="text-navy underline">ゲーム会社の年収ランキング【有報準拠】</Link></li>
            <li><Link href="/company/maker-salary/" className="text-navy underline">メーカーの年収ランキング【有報準拠】</Link></li>
            <li><Link href="/company/it-consultant-salary/" className="text-navy underline">ITコンサル・SIerの年収ランキング【有報準拠】</Link></li>
            <li><Link href="/review/levtech/" className="text-navy underline">レバテックキャリアの評判（IT・エンジニア特化）</Link></li>
            <li><Link href="/review/recruit-agent/" className="text-navy underline">リクルートエージェントの評判（求人数最大級）</Link></li>
            <li><Link href="/review/jac/" className="text-navy underline">JACリクルートメントの評判（ハイクラス）</Link></li>
            <li><Link href="/knowledge/resume/" className="text-navy underline">職務経歴書の書き方・職務要約の例文</Link></li>
          </ul>
        </section>
      </article>
    </>
  );
}
