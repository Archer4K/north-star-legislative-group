import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getTeamMember, team } from "@/data/team";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = getTeamMember((await params).slug);
  if (!person) return { title: "Team member", robots: { index: false } };
  const title = `${person.name}${"title" in person ? `, ${person.title}` : ""}`;
  const description = "bio" in person ? person.bio : `${person.name}'s work and contributions at North Star Legislative Group.`;
  const url = `https://northstarlegislative.org/team/${person.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      title: `${title} | North Star Legislative Group`,
      description,
      url,
      siteName: "North Star Legislative Group",
      ...("portrait" in person ? { images: [{ url: person.portrait, alt: person.name }] } : {}),
    },
  };
}

export default async function TeamProfile({ params }: Props) {
  const person = getTeamMember((await params).slug);
  if (!person) notFound();
  const contributions = projects.filter((project) => project.author === person.slug || project.contributors.includes(person.slug));
  const profileUrl = `https://northstarlegislative.org/team/${person.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: profileUrl,
    name: `${person.name} | North Star Legislative Group`,
    mainEntity: {
      "@type": "Person",
      "@id": `${profileUrl}#person`,
      name: person.name,
      url: profileUrl,
      ...("title" in person ? { jobTitle: person.title } : {}),
      ...("bio" in person ? { description: person.bio } : {}),
      ...("portrait" in person ? { image: `https://northstarlegislative.org${person.portrait}` } : {}),
      affiliation: { "@type": "Organization", name: "North Star Legislative Group", url: "https://northstarlegislative.org" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className="section border-b border-line">
        <div className="container-site">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-bold hover:underline"><ArrowLeft size={16} aria-hidden="true" /> All team members</Link>
          <div className={`mt-10 grid items-center gap-10 ${"portrait" in person ? "lg:grid-cols-[1.2fr_.8fr]" : ""}`}>
            <div>
              <div className="kicker">North Star Legislative Group</div>
              <h1 className="display mt-5">{person.name}</h1>
              {"title" in person && <p className="mt-6 text-xl font-semibold text-slate-700">{person.title}</p>}
              {"bio" in person && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{person.bio}</p>}
            </div>
            {"portrait" in person && (
              <div className="relative aspect-square w-full max-w-md overflow-hidden border-2 border-[#3f3f3f]">
                <Image src={person.portrait} alt={person.name} fill priority sizes="(min-width: 1024px) 448px, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-site">
          <div className="kicker">Contributions</div>
          <h2 className="h2 mt-4">Work with North Star.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contributions.map((project) => (
              <Link key={project.id} href={project.href} className="card flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                <div className="text-xs font-bold uppercase tracking-[.12em] text-slate-700">{project.category}</div>
                <h3 className="serif mt-5 text-3xl tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm font-bold text-ink">{project.author === person.slug ? "Author" : project.id === "sb-3670" ? "Contributor / drafter" : "Contributor"}</p>
                <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
                <span className="mt-auto flex items-center gap-2 pt-7 font-bold">View project <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
