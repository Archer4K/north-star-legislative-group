"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/data/site";

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
    <div className="container-site flex h-[78px] items-center justify-between">
      <Link href="/" aria-label="North Star Legislative Group home"><Logo/></Link>
      <nav className="hidden items-center gap-7 md:flex">
        {nav.map(i=><Link key={i.href} href={i.href} className="text-sm font-semibold hover:text-blue">{i.label}</Link>)}
        <Link href="/contact" className="text-sm font-semibold hover:text-blue">Contact</Link>
        <Link href="/opportunities" className="btn btn-primary">Get Involved</Link>
      </nav>
      <button className="md:hidden" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open && <nav className="container-site flex flex-col gap-5 border-t border-line py-6 md:hidden">
      {nav.map(i=><Link onClick={()=>setOpen(false)} key={i.href} href={i.href} className="font-semibold">{i.label}</Link>)}
      <Link onClick={()=>setOpen(false)} href="/contact" className="font-semibold">Contact</Link>
    </nav>}
  </header>
}
