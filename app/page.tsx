import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Compass } from "@/components/Compass";
import { impact } from "@/data/site";

export default function Home(){
 return <>
  <section className="overflow-hidden py-20 md:py-24">
   <div className="container-site grid items-end gap-14 md:grid-cols-[1.5fr_.7fr]">
    <div><div className="kicker">North Star Legislative Group</div><h1 className="display mt-5 max-w-5xl">Policy should have a direction.</h1><p className="lede mt-7 max-w-3xl">North Star turns research into actionable policy through legislative drafting, advocacy, and direct engagement with public institutions.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="btn btn-primary" href="/work">Explore our work</Link><Link className="btn" href="/about">About North Star</Link></div></div>
    <div className="border-t border-line pt-14 md:border-l md:border-t-0 md:pl-12 md:pt-0"><Compass/></div>
   </div>
  </section>

  <section className="container-site grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
   {impact.map((m)=><div key={m.label} className="border-b border-line py-6 sm:border-r lg:border-b-0 last:border-r-0"><div className="serif text-4xl tracking-tight">{m.value}</div><div className="mt-1 max-w-[180px] text-[11px] font-bold uppercase tracking-[.12em] text-muted">{m.label}</div></div>)}
  </section>

  <section className="section"><div className="container-site grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div className="kicker">Our mission</div><div><p className="serif text-[clamp(2.2rem,4vw,3.7rem)] leading-[1.08] tracking-[-.03em]">We turn careful research into practical policy—and practical policy into legislative action.</p><p className="lede mt-6">North Star brings together policy research, legislative drafting, coalition-building, and community mobilization to help serious ideas move through real institutions.</p></div></div></section>

  <section className="section border-t border-line"><div className="container-site"><div className="kicker">Featured work</div><h2 className="h2 mt-4">Policy in motion.</h2>
   <div className="mt-10 grid gap-4 lg:grid-cols-3">
    <Link href="/work/sb-3670" className="card min-h-[390px] bg-navy text-white lg:col-span-2"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-slate-300">Illinois · Introduced</div><h3 className="serif mt-5 text-4xl tracking-tight">Catch Heart Disease Early Act</h3><p className="mt-5 max-w-2xl text-slate-300">Illinois Senate Bill 3670 expands access to no-cost heart disease screenings, with more frequent screening beginning at age 40.</p></div><div className="mt-12 flex items-center gap-2 font-bold">Explore SB 3670 <ArrowUpRight size={16}/></div></Link>
    <div className="card min-h-[390px]"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Research</div><h3 className="serif mt-5 text-3xl tracking-tight">Ideas built to leave the page.</h3><p className="mt-5 text-slate-600">Evidence translated into recommendations legislators, advocates, and communities can use.</p></div><Link href="/research" className="mt-12 font-bold">View research →</Link></div>
   </div>
  </div></section>

  <section className="section"><div className="container-site"><div className="kicker">How we work</div><h2 className="h2 mt-4">Research. Draft. Advance.</h2><div className="mt-10 grid border-t border-line md:grid-cols-3">
   {[
    ["01","Research","Identify policy gaps, assess evidence, and build recommendations around measurable public needs."],
    ["02","Draft","Translate research into legislative language, briefs, testimony, and materials institutions can act on."],
    ["03","Advance","Engage policymakers, partners, and communities to move viable reforms into the legislative process."]
   ].map(([n,t,d])=><div key={n} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0"><div className="serif text-blue">{n}</div><h3 className="mt-14 text-xl font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></div>)}
  </div></div></section>

  <section className="bg-navy py-24 text-white"><div className="container-site grid items-end gap-10 md:grid-cols-[1.4fr_.6fr]"><div><div className="kicker !text-blue-200">Work with us</div><h2 className="h2 mt-4 max-w-4xl">Help point policy in a better direction.</h2><p className="mt-5 max-w-2xl text-lg text-slate-300">Whether you're a policymaker, researcher, student, or partner organization, there is a place to work with North Star.</p></div><div className="flex flex-wrap gap-3 md:justify-end"><Link className="btn border-white bg-white text-navy hover:bg-blue-100 hover:text-navy" href="/opportunities">Get involved</Link><Link className="btn border-white text-white" href="/contact">Contact us</Link></div></div></section>
 </>
}
