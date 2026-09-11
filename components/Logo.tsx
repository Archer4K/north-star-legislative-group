export function Logo({ inverse=false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3 font-extrabold leading-none">
      <svg viewBox="0 0 100 100" className="h-7 w-7" aria-hidden="true">
        <path fill={inverse ? "white" : "#0B1F33"} d="M50 0l9 41 41 9-41 9-9 41-9-41L0 50l41-9z"/>
      </svg>
      <span>
        NORTH STAR
        <span className="block pt-1 text-[10px] font-medium tracking-[0.12em]">LEGISLATIVE GROUP</span>
      </span>
    </div>
  );
}
