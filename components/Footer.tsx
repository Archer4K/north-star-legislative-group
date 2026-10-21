import Link from "next/link";
import { Logo } from "./Logo";
import { contact } from "@/data/contact";
export function Footer(){
  return <footer className="bg-[#061624] py-16 text-white">
    <div className="container-site grid gap-10 md:grid-cols-4">
      <div><Logo inverse/><p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">Independent research. Legislative advocacy. Civic leadership.</p><p className="mt-3 text-sm leading-6 text-slate-300">A 501(c)(4) nonprofit organization.</p></div>
      <div><h4 className="text-xs uppercase tracking-[.15em] text-slate-400">Explore</h4><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/about">About</Link><Link href="/work">Our Work</Link><Link href="/research">Resources</Link></div></div>
      <div><h4 className="text-xs uppercase tracking-[.15em] text-slate-400">Organization</h4><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/team">Team</Link><Link href="/opportunities">Opportunities</Link><Link href="/contact">Contact</Link></div></div>
      <div><h4 className="text-xs uppercase tracking-[.15em] text-slate-400">Connect</h4><div className="mt-4 grid gap-2 text-sm text-slate-300"><a href={contact.linkedIn} className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${contact.email}`} className="break-words hover:underline">{contact.email}</a></div></div>
    </div>
    <div className="container-site mt-12 border-t border-slate-700 pt-6 text-xs text-slate-400">© 2026 North Star Legislative Group.</div>
  </footer>
}
