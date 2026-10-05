import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const steps = [
  {
    number: "01",
    title: "Define the problem",
    text: "Describe what is happening now, who is affected, and why the issue needs attention. Be specific about the harm and the people experiencing it.",
  },
  {
    number: "02",
    title: "Build the case",
    text: "Use credible, preferably nonpartisan sources to explain the cause, the proposed solution, and the outcomes you expect. Make the evidence easy to follow.",
  },
  {
    number: "03",
    title: "Bring it to the right table",
    text: "Start local. Share the proposal with community organizations, residents, and the public official or legislative office that can help turn it into action.",
  },
];

export default function Research() {
  return (
    <>
      <PageHero kicker="Resources" title={"Turn a community concern into policy action."}>
        <p className="lede mt-7 max-w-3xl">
          Practical guides and working templates for researching an issue, shaping a proposal, and building local support for change.
        </p>
      </PageHero>

      <section className="section">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Start here</div>
            <h2 className="serif mt-4 text-4xl text-navy">A practical path from idea to action.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Policy action works best when it is grounded in local experience, clear evidence, and a network of people ready to carry it forward.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="card min-h-[280px]">
                <div className="text-xs font-bold tracking-[.14em] text-muted">{step.number}</div>
                <h3 className="serif mt-8 text-3xl text-navy">{step.title}</h3>
                <p className="mt-5 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-200 bg-[#f6f5f1]">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Working templates</div>
            <h2 className="serif mt-4 text-4xl text-navy">Put your research into a form people can use.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Download the editable templates to organize a proposal and explain it clearly to community partners and policymakers.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="card min-h-[340px] bg-navy text-white">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.12em] text-slate-300">Drafting tool</div>
                <h3 className="serif mt-5 text-4xl">Bill template</h3>
                <p className="mt-5 max-w-xl leading-7 text-slate-300">
                  Structure a legislative proposal with a short title, findings and purpose, definitions, the policy itself, oversight, and a timeline.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                <Link className="underline underline-offset-4" href="/documents/nslg-bill-template.docx">Download editable template</Link>
                <Link className="underline underline-offset-4" href="/documents/nslg-bill-template.pdf">View PDF</Link>
              </div>
            </article>

            <article className="card min-h-[340px]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Research tool</div>
                <h3 className="serif mt-5 text-4xl text-navy">Fact sheet template</h3>
                <p className="mt-5 max-w-xl leading-7 text-slate-600">
                  Build a concise, evidence-based case that covers the problem, its cause, how the policy responds, and the impacts it can create.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-navy">
                <Link className="underline underline-offset-4" href="/documents/nslg-fact-sheet-template.docx">Download editable template</Link>
                <Link className="underline underline-offset-4" href="/documents/nslg-fact-sheet-template.pdf">View PDF</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Use the templates well</div>
            <h2 className="serif mt-4 text-4xl text-navy">Make the case clear.</h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-slate-600">
            <p>Keep a fact sheet focused and easy to share. Lead with the problem, show what causes it, explain why the proposed approach is likely to work, and connect the solution to measurable benefits.</p>
            <p>Use trustworthy evidence. Government sources, academic research, journals, and university policy reviews can help you make a strong, balanced case. Cite sources so readers can follow the work.</p>
            <p>Invite feedback before asking for action. Community members, subject-matter experts, local organizations, and legislative staff can help identify gaps and strengthen an idea before it moves forward.</p>
          </div>
        </div>
      </section>
    </>
  );
}
