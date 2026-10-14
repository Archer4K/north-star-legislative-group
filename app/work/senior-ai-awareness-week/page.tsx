import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectCredits } from "@/components/ProjectCredits";
import { getProject } from "@/data/projects";

export const metadata: Metadata = { title: "Senior AI Fraud Awareness Week" };

export default function SeniorAI() {
  return (
    <>
      <PageHero dark kicker="Illinois · Drafted resolution · 2027" title="Senior AI Fraud Awareness Week.">
        <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-300">Helping seniors recognize voice cloning, deepfakes, and other AI-enabled scams through local awareness and education.</p>
      </PageHero>
      <section className="container-site pt-10">
        <div className="card">
          <h2 className="serif text-3xl">The people behind the proposal.</h2>
          <ProjectCredits project={getProject("senior-ai-awareness-week")} />
        </div>
      </section>
      <section className="section">
        <div className="container-site max-w-3xl">
          <div className="kicker">Overview</div>
          <h2 className="h2 mt-4">Local awareness. Practical support.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">North Star drafted a resolution to designate June 13–19, 2027 as Senior AI Fraud Awareness Week. Representative Didech plans to introduce it in 2027.</p>
          <p className="mt-5 text-lg leading-8 text-slate-700">The proposal encourages local libraries, financial institutions, senior centers, caregivers, and community organizations to share practical resources that help seniors identify AI-enabled fraud.</p>
          <p className="mt-5 text-lg leading-8 text-slate-700">The resolution does not create a funding mandate, reporting requirement, or new obligation for local organizations.</p>
          <div className="mt-12 card">
            <div className="kicker">Draft materials</div>
            <h3 className="serif mt-4 text-3xl">Read the proposal.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="/documents/Illinois%20Senior%20AI%20Awareness%20Week%20Resolution.pdf" target="_blank" rel="noreferrer">Drafted resolution <ExternalLink size={15} aria-hidden="true" /></a>
              <a className="btn" href="/documents/IL%20Senior%20AI%20One%20Pager.pdf" target="_blank" rel="noreferrer">One-page overview <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
