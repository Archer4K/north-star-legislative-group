import { PageHero } from "@/components/PageHero";

export default function About() {
  return (
    <>
      <PageHero kicker="About North Star" title="Ideas matter. Institutions decide.">
        <p className="lede mt-7 max-w-3xl">
          North Star Legislative Group is a nonpartisan legislative organization focused on turning evidence-based ideas into credible policy, advocacy, and institutional action.
        </p>
      </PageHero>

      <section className="section">
        <div className="container-site grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div className="kicker">Our belief</div>
          <div>
            <p className="serif text-[clamp(2.2rem,4vw,3.7rem)] leading-tight tracking-tight">
              Civic engagement needs resources, local knowledge, and grassroots support.
            </p>
            <p className="lede mt-6">
              People are most likely to take part when information, tools, and relationships are available in the places they already trust. We work with local advocates, community organizations, and residents to help ideas become informed, practical action.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-site">
          <div className="kicker">Track record</div>
          <h2 className="h2 mt-4">From ideas to institutions.</h2>
          <p className="lede mt-6 max-w-4xl">
            North Star's leadership brings experience in policy drafting, legislative advocacy, fundraising, and large-scale community outreach. Collectively, our leaders have written more than five pieces of legislation introduced in state legislatures, raised over $20,000 for nonprofit initiatives, worked with more than half a dozen nonprofits across state lines, and organized hundreds of volunteers.
          </p>
        </div>
      </section>
    </>
  );
}
