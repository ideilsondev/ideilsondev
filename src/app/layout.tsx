import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { siteName, siteUrl } from "@/lib/site";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
const description="Ideilson é engenheiro de software especializado em sistemas escaláveis, dados, integrações, Rust, Go e Node.js.";
export const metadata:Metadata={metadataBase:siteUrl,title:siteName,description,applicationName:"Ideilson",keywords:["engenheiro de software","desenvolvedor full stack","arquitetura de software","Rust","Go","Node.js","integrações","sistemas escaláveis","dados"],authors:[{name:"Ideilson",url:"https://github.com/ideilsondev"}],creator:"Ideilson",publisher:"Ideilson",alternates:{canonical:"/"},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},openGraph:{type:"website",locale:"pt_BR",url:"/",siteName,title:siteName,description},twitter:{card:"summary",title:siteName,description}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}><body className="min-h-full"><a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-[60] focus:rounded focus:bg-emerald-300 focus:px-4 focus:py-2 focus:text-slate-950">Pular para o conteúdo</a>{children}<FloatingWhatsApp/></body></html>}
