import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { team } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the North Star Legislative Group team: Colby Nixon, Arjun Rana, Saatvik Kailash, and Kaashyap Rajesh. Explore their policy work and contributions.",
  alternates: { canonical: "/team" },
};

export default function Team() {
  return (
    <>
      <PageHero kicker="Team" title="The people behind the policy." />
      <section className="section">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <Link key={person.slug} href={`/team/${person.slug}`} className="card flex flex-col !p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
              <div className="relative aspect-square border-b border-[#3f3f3f]">
                {"portrait" in person ? (
                  <Image src={person.portrait} alt={person.name} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div aria-hidden="true" className="serif flex h-full items-center justify-center text-6xl">
                    {person.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="serif text-2xl tracking-tight">{person.name}</h2>
                {"title" in person && <p className="mt-2 text-sm font-semibold text-slate-700">{person.title}</p>}
                <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold">View profile <ArrowUpRight size={16} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
