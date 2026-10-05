import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container-site grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div className="kicker">Our mission</div>
          <div>
            <h1 className="serif text-[clamp(2.2rem,4vw,3.7rem)] leading-[1.08] tracking-[-.03em]">
              We turn careful research into practical policy—and practical policy into legislative action.
            </h1>
            <p className="lede mt-6">
              North Star brings together policy research, legislative drafting, coalition-building, and community mobilization to help serious ideas move through real institutions.
            </p>
          </div>
        </div>
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
