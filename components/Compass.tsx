export function Compass(){
  return <div className="relative mx-auto aspect-square w-[min(320px,80vw)] rounded-full border border-slate-300">
    <div className="absolute left-[-10%] top-1/2 h-px w-[120%] bg-slate-300"/>
    <div className="absolute left-1/2 top-[-10%] h-[120%] w-px bg-slate-300"/>
    <div className="absolute inset-[20%] bg-ink [clip-path:polygon(50%_0,58%_42%,100%_50%,58%_58%,50%_100%,42%_58%,0_50%,42%_42%)]"/>
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[.18em] text-muted">N</span>
  </div>
}
