export function PageHero({kicker,title,children,dark=false}:{kicker:string,title:string,children?:React.ReactNode,dark?:boolean}){
 return <section className={dark?"bg-navy py-24 text-white":"border-b border-line py-24"}>
   <div className="container-site"><div className={dark?"kicker !text-blue-200":"kicker"}>{kicker}</div><h1 className="display mt-5 max-w-5xl">{title}</h1>{children}</div>
 </section>
}
