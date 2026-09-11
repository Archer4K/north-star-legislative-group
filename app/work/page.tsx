import Link from "next/link";
import { PageHero } from "@/components/PageHero";
export default function Work(){return <>
<PageHero kicker="Our work" title={"Policy designed to move."}><p className="lede mt-7 max-w-3xl">North Star develops research-backed proposals and works to translate them into legislation, advocacy, and institutional action.</p></PageHero>
<section className="section"><div className="container-site grid gap-4 lg:grid-cols-3">
<Link href="/work/sb-3670" className="card min-h-[390px] bg-navy text-white lg:col-span-2"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-slate-300">Health · Illinois · Introduced</div><h2 className="serif mt-5 text-4xl tracking-tight">Catch Heart Disease Early Act</h2><p className="mt-5 max-w-xl text-slate-300">SB 3670 would establish no-cost heart disease screening access for Illinois adults on an age-based schedule.</p></div><span className="mt-12 font-bold">View project →</span></Link>
<div className="card min-h-[390px]"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-muted">Next initiative</div><h2 className="serif mt-5 text-3xl tracking-tight">Future legislative work</h2><p className="mt-5 text-slate-600">Add the next verified North Star initiative here.</p></div><span className="mt-12 font-bold text-muted">Coming soon</span></div>
</div></section>
</>}
