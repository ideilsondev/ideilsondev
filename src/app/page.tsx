import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/layout/Navbar";
import { siteUrl } from "@/lib/site";
const personSchema={"@context":"https://schema.org","@type":"Person",name:"Ideilson",url:siteUrl.toString(),jobTitle:"Senior Software Engineer",sameAs:["https://github.com/ideilsondev","https://www.linkedin.com/in/ideilson/"],knowsAbout:["Software architecture","Distributed systems","Rust","Go","Node.js","Data integration"]};
export default function Home(){return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personSchema)}}/><Navbar/><Hero/><Experience/><Projects/><Contact/><footer className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-[var(--faint)] md:flex-row md:justify-between md:px-12"><p>© {new Date().getFullYear()} Ideilson. Todos os direitos reservados.</p><a className="hover:text-white" href="https://github.com/ideilsondev" target="_blank" rel="noreferrer">github.com/ideilsondev</a></div></footer></main>}
