import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Instagram } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='bg-palette-isabelline px-4 md:px-6 relative'>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-end xl:items-center">
        <div className="w-full lg:w-3/5 pb-10 pt-20 md:pt-28 lg:pb-28">
          <h1 className='h3'>
            <svg width="100%" height="100%" className="size-7 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Full Stack Web Developer & SEO Specialist</span>
          </h1>
          <h2 className='h1'>Hello there! I'm Lindrit Sulaj</h2>
          <p className='text-lg text-neutral-700 mt-3'>Based in Kosovo, I help businesses from all over the world create a strong online presence with my web development & SEO services. I specialize in building responsive and user-centric websites for companies of all sizes and industries.</p>
          <div className="flex gap-2 mt-5">
            <Link href="/contact">
              <Button size="lg" className='gap-x-1'><span className='leading-tight'>Let's Talk</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-[18px] block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              </Button>
            </Link>
            <Link href="/#projects">
              <Button size="lg" className='gap-x-1' variant="outline"><span className="leading-tight">View projects</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-[18px] block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg></Button>
            </Link>
          </div>
          <div className='mt-6 hidden md:flex items-center gap-3'>
            <p className='font-medium'>Check out my</p>
            <hr className='h-1 bg-palette-primary w-40' />
            <ul className='flex gap-2'>
              <li>
                <a rel="noopener nofollow" target="_blank" href="https://www.instagram.com/lindritsulaj" className='w-11 h-11 bg-neutral-900 text-white flex items-center justify-center rounded-full hover:bg-neutral-800 transition-all'>
                  <Instagram className='w-6 h-6' />
                </a>
              </li>
              <li>
                <a rel="noopener nofollow" target="_blank" href="https://www.linkedin.com/in/lindrit-sulaj-0b75052b1/" className='w-11 h-11 bg-neutral-900 text-white flex items-center justify-center rounded-full hover:bg-neutral-800 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='w-5 h-5' viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
              </li>
              <li>
                <a rel="noopener nofollow" target="_blank" href="https://github.com/Lindrit-Sulaj" className='w-11 h-11 bg-neutral-900 text-white flex items-center justify-center rounded-full hover:bg-neutral-800 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-5 h-5' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center lg:w-1/2">
          <img
            src="../images/mainfoto2.webp"
            width="700px"
            height="901px"
            alt="Lindrit Sulaj"
            className='max-w-sm lg:max-w-full'
          />
          {/* <img className='max-h-[400px] lg:max-h-none lg:h-[95%] w-auto mt-auto' src="../images/lindritsulaj.webp" width="700px" height="901px" alt="Lindrit Sulaj" /> */}
        </div>
      </div>

    </section >
  )
}
