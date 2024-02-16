import React from 'react'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  return (
    <section id="projects" className='max-w-screen-xl mx-auto px-4 my-10'>
      <h3 className='font-medium text-neutral-700 flex items-center gap-2 md:text-lg tracking-wider uppercase'>
        <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-orange' fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Projects & Portfolio</span>
      </h3>
      <h2 className="h2">Take a look at my projects</h2>
      <p className='text-[17px] md:text-lg text-neutral-700 mt-2'>Explore my portfolio, where precise coding meets creative design.</p>
      <div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <Badge className='bg-palette-orange'>Featured</Badge>
            <h3 className='font-bold text-lg md:text-xl mt-3'>INOWEB</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>Together with my brother, we founded our own web development & seo agency. It is one of our biggest projects to date and serves content on three different languages: German (Main), English & Albanian.</p>
            <a href="https://www.inoweb-agentur.de" className='text-palette-orange text-lg font-medium mt-3 block'>inoweb-agentur.de</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/INOWEB_miQY8bd_j.png?updatedAt=1707328470050" alt="INOWEB Agentur" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <h3 className='font-bold text-lg md:text-xl'>Dream Design SHPK Website</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>We worked with an architecture company from Kosovo to develop a custom website, tailored to their business needs. The website has a modern UI and great UX. The website includes a landing page, about page, services and projects, which the company manages through Sanity CMS.</p>
            <a href="https://www.dreamdesign-ks.com" className='text-palette-orange text-lg font-medium mt-3 block'>dreamdesign-ks.com</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Dream%20Design%20Project_l8labktde9.png?updatedAt=1707326568873" alt="Dream Design Website" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:items-center border rounded-xl border-neutral-300 mt-6'>
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-10">
            <h3 className='font-bold text-lg md:text-xl'>Pflasterbau Berisha</h3>
            <p className='text-base md:text-[17px] text-neutral-700 mt-2'>We created a professional landing page for a paving construction company located in Passau, Germany. The landing page has a modern design & demonstrates Pflasterbau Berisha's experience in the field with its projects, services and about us section. It also includes a contact form and frequently asked questions.</p>
            <a href="https://www.berisha-pflasterbau.de" className='text-palette-orange text-lg font-medium mt-3 block'>berisha-pflasterbau.de</a>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center bg-palette-isabelline">
            <img className='max-w-[300px] lg:max-w-[500px]' src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbau%20Berisha_EFA94QSlP.png?updatedAt=1707327690666" alt="Pflasterbau Berisha" />
          </div>
        </div>

      </div>
    </section>
  )
}
