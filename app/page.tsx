import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { impact } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container-site max-w-5xl">
          <div className="kicker">Our mission</div>
          <h1 className="serif mt-4 text-[clamp(2.2rem,4vw,3.7rem)] leading-[1.08] tracking-[-.03em]">
            We mobilize policy action by supporting local organizations and creating powerful policy advocates
          </h1>
        </div>
      </section>

      <section className="container-site grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((item) => (
          <div key={item.label} className="border-b border-line py-6 sm:border-r lg:border-b-0 last:border-r-0">
            <div className="serif text-4xl tracking-tight">{item.value}</div>
            <div className="mt-1 max-w-[180px] text-[11px] font-bold uppercase tracking-[.12em] text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      <section className="section border-t border-line">
        <div className="container-site">
          <div className="kicker">Featured work</div>
          <h2 className="h2 mt-4">Catch Heart Disease Early Act.</h2>
          <div className="mt-10 grid gap-4">
            <Link href="/work/sb-3670" className="card flex min-h-[340px] flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.12em] text-slate-700">
                  Illinois · Senate Bill 3670 · Introduced
                </div>
                <h3 className="serif mt-5 text-4xl tracking-tight">
                  Catch Heart Disease Early Act
                </h3>
                <p className="mt-5 max-w-2xl text-slate-700">
                  Illinois Senate Bill 3670 expands access to no-cost heart disease screenings, with more frequent screening beginning at age 40.
                </p>
              </div>
              <span className="mt-12 flex items-center gap-2 font-bold">
                Explore the Senate bill <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
