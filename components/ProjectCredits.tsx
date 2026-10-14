import Link from "next/link";
import type { Project } from "@/data/projects";
import { getTeamMember } from "@/data/team";

export function ProjectCredits({ project }: { project: Project }) {
  return (
    <div className="mt-7 border-t border-[#3f3f3f] pt-5">
      <div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-700">
        North Star project credits
      </div>
      <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-bold text-slate-700">Author</dt>
          <dd className="mt-2"><MemberLink slug={project.author} /></dd>
        </div>
        <div>
          <dt className="font-bold text-slate-700">{project.contributorLabel}</dt>
          <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {project.contributors.map((slug) => <MemberLink key={slug} slug={slug} />)}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function MemberLink({ slug }: { slug: string }) {
  const person = getTeamMember(slug);
  if (!person) throw new Error(`Unknown team member: ${slug}`);
  return (
    <Link href={`/team/${slug}`} className="font-semibold underline decoration-slate-500 underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
      {person.name}
    </Link>
  );
}
