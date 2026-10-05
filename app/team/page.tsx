import { PageHero } from "@/components/PageHero";

const people = ["Colby Nixon", "Kaashyap Rajesh", "Arjun Rana", "Saatvik Kailash"];

export default function Team() {
  return (
    <>
      <PageHero kicker="Team" title="The people behind the policy." />
      <section className="section">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((name) => (
            <div key={name} className="border-t border-ink pt-5">
              <h2 className="font-bold">{name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
