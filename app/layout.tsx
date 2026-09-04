import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist=Geist({variable:'--font-geist',subsets:['latin','cyrillic']});
const siteUrl='https://workcore-hr.peachy-sugar-3131.chatgpt.site';
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'WorkCore — системный поиск сотрудников',template:'%s — WorkCore'},
  description:'Digital-first HR-сервис: поиск, скрининг и первичное интервью кандидатов под требования вашей вакансии.',
  alternates:{canonical:'/'},
  openGraph:{title:'WorkCore — системный поиск сотрудников',description:'Технологичный процесс поиска и первичного отбора персонала.',type:'website',locale:'ru_RU',url:siteUrl,siteName:'WorkCore',images:[{url:'/og.png',width:1536,height:1024,alt:'WorkCore — системный поиск сотрудников'}]},
  twitter:{card:'summary_large_image',title:'WorkCore — системный поиск сотрудников',description:'Технологичный процесс поиска и первичного отбора персонала.',images:['/og.png']},
  robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru" className="dark"><body className={geist.variable}>{children}</body></html>}
