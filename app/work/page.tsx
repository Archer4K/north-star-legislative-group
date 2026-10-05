import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function Work() {
  return (
    <>
      <PageHero kicker="Our work" title="Policy designed to move.">
        <p className="lede mt-7 max-w-3xl">
          North Star develops research-backed proposals and works to translate them into legislation, advocacy, and institutional action.
        </p>
      </PageHero>

      <section className="section">
        <div className="container-site">
          <div className="kicker">Work completed</div>
          <h2 className="h2 mt-4">Already in motion.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Link href="/work/sb-3670" className="card min-h-[390px] border-ink bg-ink text-white lg:col-span-2 hover:border-ink">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.12em] text-slate-300">Health · Illinois · Introduced</div>
                <h3 className="serif mt-5 text-4xl tracking-tight">Catch Heart Disease Early Act</h3>
                <p className="mt-5 max-w-xl text-slate-300">SB 3670 would establish no-cost heart disease screening access for Illinois adults on an age-based schedule.</p>
              </div>
              <span className="mt-12 font-bold">View project</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-site">
          <div className="kicker">Upcoming work</div>
          <h2 className="h2 mt-4">Senior AI Fraud Awareness Week.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
            <article className="card min-h-[390px] border-ink">
              <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Illinois · Drafted resolution · 2027</div>
              <h3 className="serif mt-5 text-4xl tracking-tight">Helping seniors recognize AI-enabled fraud.</h3>
              <p className="mt-5 max-w-2xl text-slate-600">
                North Star drafted a resolution to designate June 13-19, 2027 as Senior AI Fraud Awareness Week. Representative Didech plans to introduce it in 2027, encouraging local libraries, financial institutions, senior centers, caregivers, and community organizations to share practical resources about voice cloning, deepfakes, and other AI-enabled scams.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
                The resolution does not create a funding mandate, reporting requirement, or new obligation for local organizations.
              </p>
            </article>
            <aside className="card flex min-h-[390px] flex-col justify-between border-ink bg-[#f4f2ec]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Draft materials</div>
                <p className="serif mt-5 text-3xl tracking-tight">Read the proposal.</p>
                <p className="mt-5 text-slate-600">Review the drafted resolution and its one-page legislative summary.</p>
              </div>
              <div className="grid gap-3">
                <a className="btn w-fit" href="/documents/illinois-senior-ai-awareness-week-resolution.pdf" target="_blank" rel="noreferrer">
                  Drafted resolution <ExternalLink size={15} />
                </a>
                <a className="btn w-fit" href="/documents/il-senior-ai-one-pager.pdf" target="_blank" rel="noreferrer">
                  One-page overview <ExternalLink size={15} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
