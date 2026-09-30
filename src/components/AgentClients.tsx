import Link from "next/link";
import { AGENT_CLIENTS, CLIENTS_FETCHED_AT } from "@/data/agent-clients";

// そのエージェントの公式サイトに実際に掲載されていた企業のうち、
// 当サイトに企業解説ページがあるものだけを出す(施主指示 2026-09-30)。
// 掲載がないエージェントでは何も表示しない。「取扱企業」を推測で書かないため。

export default function AgentClients({ slug, agentName }: { slug: string; agentName: string }) {
  const c = AGENT_CLIENTS[slug];
  if (!c || c.companies.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3">{agentName}の公式サイトに掲載されている企業</h2>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {agentName}の
        <a href={c.url} target="_blank" rel="nofollow noopener noreferrer" className="underline">公式サイト</a>
        に掲載されていた企業のうち、当サイトに転職ガイドがある
        <strong>{c.companies.length}社</strong>です（{CLIENTS_FETCHED_AT}時点）。
        掲載企業の求人が常にあるとは限らないため、実際の取り扱いは面談時にご確認ください。
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {c.companies.map((co) => (
          <Link
            key={co.slug}
            href={`/company/${co.slug}/`}
            className="block rounded-lg border border-gray-200 px-3 py-2 text-sm text-navy hover:border-teal hover:bg-teal/5"
          >
            {co.name}
            <span className="block text-[10px] text-text-secondary">転職ガイドを見る</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
