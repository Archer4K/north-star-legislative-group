import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="Start a conversation.">
        <p className="lede mt-7 max-w-3xl">Policy partnership, research collaboration, media inquiry, or interest in joining North Star—we'd like to hear from you.</p>
      </PageHero>
      <section className="section">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <div className="kicker">Get in touch</div>
            <h2 className="h2 mt-4 !text-4xl">Work with North Star.</h2>
            <p className="lede mt-5">Email us about your ideas, questions, or ways to get involved.</p>
            <a href={`mailto:${contact.email}`} className="mt-6 inline-block break-all text-lg font-bold underline underline-offset-4">{contact.email}</a>
          </div>
          <div className="card">
            <h2 className="serif text-3xl">Connect on LinkedIn.</h2>
            <p className="mt-5 leading-7 text-slate-700">Follow North Star's work and connect with our organization.</p>
            <a href={contact.linkedIn} className="btn mt-7" target="_blank" rel="noopener noreferrer">Visit our LinkedIn page</a>
          </div>
        </div>
      </section>
    </>
  );
}
