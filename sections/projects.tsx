import React from 'react'
import { Badge } from '@/components/ui/badge'
import AnimatedLink from '@/components/animated-link'

export default function Projects() {
  return (
    <section id="projects" className='max-w-screen-xl mx-auto px-4 my-10'>
      <h3 className='font-medium text-neutral-700 flex items-center gap-2 md:text-lg tracking-wider uppercase'>
        <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Projects & Portfolio</span>
      </h3>
      <h2 className="h2">Take a look at my projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-6 gap-y-14">
        <div>
          <div className="bg-emerald-100 p-8">
            <img src="../images/malaj-dienstleistungen.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Malaj Dienstleistungen</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Developed a modern business website for a gardening copmany in Germany and optimized it for local SEO.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Business Website
              </div>
              <div className="px-4 py-1 border rounded-full">
                SEO
              </div>
              <div className="px-4 py-1 border rounded-full">
                Local SEO
              </div>
            </div>
            <AnimatedLink href="https://www.malaj-service.de" label="View live website" className='mt-4' />
          </div>
        </div>
        <div>
          <div className="bg-yellow-100 p-8">
            <img src="../images/berishapflasterbau.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Berisha Pflasterbau</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Designed and developed a modern & converting landing page for a paving construction company.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Landing Page
              </div>
              <div className="px-4 py-1 border rounded-full">
                SEO
              </div>
            </div>
            <AnimatedLink href="https://www.berisha-pflasterbau.de" label="View live website" className='mt-4' />
          </div>
        </div>
        <div>
          <div className="bg-blue-100 p-8">
            <img src="../images/protecsafe.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Protec Safe</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Developed a modern, easy to navigate & high converting website for the leading safe manufacturer in Kosovo.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 border rounded-full">
                CMS
              </div>
              <div className="px-4 py-1 border rounded-full">
                UI/UX
              </div>
            </div>
            <AnimatedLink href="https://www.protec.al" label="View live website" className='mt-4' />
          </div>
        </div>
        <div>
          <div className="bg-sky-100 p-8">
            <img src="../images/dreamdesign.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Dream Design</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Designed and developed a modern website for a full-service construction company.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 border rounded-full">
                UI/UX
              </div>
            </div>
            <AnimatedLink href="https://www.dreamdesign-ks.com" label="View live website" className='mt-4' />
          </div>
        </div>
        <div>
          <div className="bg-rose-100 p-8">
            <img src="../images/beauteinfinie.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Beaute Infinie</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Design and development of a modern, professional website for a beauty salon.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 border rounded-full">
                UI/UX
              </div>
            </div>
            <AnimatedLink href="https://www.beaute-infinie.ch/" label="View live website" className='mt-4' />
          </div>
        </div>
        <div>
          <div className="bg-cyan-100 p-8">
            <img src="../images/propreetservices.webp" className='mx-auto w-full max-w-[300px]' width="500px" height="305px" alt="Malaj Dienstleistungen" />
          </div>
          <div className="mt-6">

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Propre Et Services (In Development)</h3>
            <p className='text-black/80 lg:text-lg mt-2'>Design and development of a modern & sleek website for a cleaning company.</p>
            <div className="flex gap-x-2 mt-3 flex-wrap">
              <div className="px-4 py-1 border rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 border rounded-full">
                UI/UX
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <Badge className='bg-palette-primary'>Featured</Badge>
            <h3 className='font-bold text-lg md:text-xl mt-3'>INOWEB</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>Together with my brother, we founded our own web development & seo agency. It is one of our biggest projects to date and serves content on three different languages: German (Main), English & Albanian.</p>
            <a href="https://www.inoweb-agentur.de" className='text-palette-primary text-lg font-medium mt-3 block'>inoweb-agentur.de</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='w-full max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/INOWEB_miQY8bd_j.png?updatedAt=1707328470050" alt="INOWEB Agentur" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <h3 className='font-bold text-lg md:text-xl'>Protec Safe</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>I collaborated with the leading safe manufacturer in Kosovo to create a custom business website. The website is tailored for high-ranking in search engines, hfunctions flawlessly accross various devices. It features a main landing page, a product overview section, a list of partners, a contact section, and individual pages dedicated to each of Protec Safe's products.</p>
            <a href="https://www.protec.al" className='text-palette-primary text-lg font-medium mt-3 block'>protec.al</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='w-full max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/protec%20al%20landing%20page_lU7ldlizd.png?updatedAt=1717947009072" alt="Protec Safe Website" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <h3 className='font-bold text-lg md:text-xl'>Dream Design SHPK Website</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>We worked with an architecture company from Kosovo to develop a custom website, tailored to their business needs. The website has a modern UI and great UX. The website includes a landing page, about page, services and projects, which the company manages through Sanity CMS.</p>
            <a href="https://www.dreamdesign-ks.com" className='text-palette-primary text-lg font-medium mt-3 block'>dreamdesign-ks.com</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='w-full max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Dream%20Design%20Project_l8labktde9.png?updatedAt=1707326568873" alt="Dream Design Website" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <h3 className='font-bold text-lg md:text-xl'>Pflasterbau Berisha</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>We created a professional landing page for a paving construction company located in Passau, Germany. The landing page has a modern design & demonstrates Pflasterbau Berisha's experience in the field with its projects, services and about us section. It also includes a contact form and frequently asked questions.</p>
            <a href="https://www.berisha-pflasterbau.de" className='text-palette-primary text-lg font-medium mt-3 block'>berisha-pflasterbau.de</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='w-full max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbau%20Berisha_EFA94QSlP.png?updatedAt=1707327690666" alt="Pflasterbau Berisha" />
          </div>
        </div>
      </div> */}
    </section>
  )
}
