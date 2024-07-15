import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section id="about" className='my-14 md:my-20 px-4 md:px-6'>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2">
          <h3 className='font-medium text-neutral-700 flex items-center gap-2 md:text-lg tracking-wider uppercase'>
            <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>About me</span>
          </h3>
          <h2 className='h2'>Who I am</h2>
          <p className='text-[17px] md:text-lg text-neutral-700 mt-3'>Hey there, I'm Lindrit Sulaj, a full stack web developer & SEO specialist based in Kosovo. I speak Albanian, English & German and have a passion for technology. I develop professional websites for different businesses & together with my SEO expertise I make sure these websites stand out online.</p>
          <p className='text-[17px] md:text-lg text-neutral-700 mt-3'>Together with <a className='underline underline-offset-2 text-palette-tawny' href="https://www.fatlumsulaj.com">my brother</a>, I also co-founded a web development & seo agency named <a className='underline underline-offset-2 text-palette-tawny' href="https://www.inoweb-agentur.de/en">Inoweb</a>. With years of experience in the field, we're all about developing modern & user-friendly websites, that have high conversion rates, great UI, are fast and optimized for SEO.</p>
          <Link href="/contact" className='mt-4 block'>
            <Button size="base" className='flex items-center gap-1'>Get in touch <ArrowUpRight size={18} /></Button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 bg-palette-isabelline px-4 md:px-10 md:py-6">
          <div className="py-4 border-b md:border-b-0 lg:border-b border-b-palette-primary/20 flex flex-row md:flex-col lg:flex-row items-center gap-4">
            <img className="aspect-video max-h-14 md:max-h-20 object-cover" src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:w-400/african-american-engineer-programming-app-code-developing-online-software-with-cloud-server-firewall-security-coding-new-user-interface-with-binary-code-html-program-web-development_kUVISHCmN.jpg?updatedAt=1707249415519" alt="Frontend Development" />
            <div>
              <h3 className='font-semibold text-lg text-left md:text-center lg:text-left'>Frontend Development</h3>
              <p className='text-neutral-700 text-[15px] text-left md:text-center lg:text-left'>Next.JS, Typescript, Javascript, HTML, CSS, Tailwind, Framer Motion, Redux</p>
            </div>
          </div>
          <div className="py-4 border-b md:border-b-0 lg:border-b border-b-palette-primary/20 flex flex-row md:flex-col lg:flex-row items-center gap-4">
            <img className="aspect-video max-h-14 md:max-h-20 object-cover" src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:w-400/closeup-developer-hands-typing-code-keyboard-while-looking-computer-screens-with-programming-interface-software-programmer-sitting-desk-with-clipboard-writing-algorithm_KyVz1yWhJ.jpg?updatedAt=1707249690192" alt="Backend Development" />
            <div>
              <h3 className='font-semibold text-lg text-left md:text-center lg:text-left'>Backend Development</h3>
              <p className='text-neutral-700 text-[15px] text-left md:text-center lg:text-left'>MongoDB, NextJS, Prisma, Firebase, NodeJS, Sanity CMS</p>
            </div>
          </div>
          <div className="py-4 flex flex-row md:flex-col lg:flex-row items-center gap-4">
            <img className="aspect-video max-h-14 md:max-h-20 object-cover" src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/tr:w-400/search-engine-marketing-composition_Nl-McMa9A.jpg?updatedAt=1707249955755" alt="Frontend Development" />
            <div>
              <h3 className='font-semibold text-lg text-left md:text-center lg:text-left'>SEO</h3>
              <p className='text-neutral-700 text-[15px] text-left md:text-center lg:text-left'>Site Audit, Technical SEO, On-Page, Off-Page SEO, Local SEO, Link Building</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
