import React from 'react'

export default function Skills() {
  return (
    <section className="bg-neutral-950 text-white py-14 my-24 px-4">
      <h3 className='font-medium text-neutral-300 flex items-center gap-2 md:text-lg tracking-wider uppercase justify-center'>
        <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-orange' fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Skills & Expertise</span>
      </h3>
      <h2 className='h2 text-white text-center'>What I can do</h2>
      <p className='text-neutral-300 text-center text-[17px] md:text-lg max-w-3xl mt-3 mx-auto'>I have experience in Web Development, Web Design and SEO. Let's bring your vision to life with functional, good-looking, and search-friendly websites.</p>
      <div className="flex flex-col lg:flex-row items-start max-w-screen-xl mt-8 gap-x-8 gap-y-8 mx-auto">
        <div className='w-full lg:w-1/3'>
          <h3 className='font-bold text-lg md:text-xl lg:text-[23px]'>Languages & Frameworks</h3>
          <ul className='mt-4 block md:grid grid-cols-2 lg:block gap-x-4'>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-javascript-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Javascript</h5>
                  <p className='text-neutral-300'>90%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[90%] bg-palette-orange border-none" />
                  <hr className="h-full w-[10%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-react-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>React</h5>
                  <p className='text-neutral-300'>80%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[80%] bg-palette-orange border-none" />
                  <hr className="h-full w-[20%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-typescript-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Typescript</h5>
                  <p className='text-neutral-300'>60%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[60%] bg-palette-orange border-none" />
                  <hr className="h-full w-[40%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-nextjs-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Next.JS</h5>
                  <p className='text-neutral-300'>75%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[75%] bg-palette-orange border-none" />
                  <hr className="h-full w-[25%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-firebase-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Firebase</h5>
                  <p className='text-neutral-300'>80%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[80%] bg-palette-orange border-none" />
                  <hr className="h-full w-[20%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-html5-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>HTML</h5>
                  <p className='text-neutral-300'>80%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[80%] bg-palette-orange border-none" />
                  <hr className="h-full w-[20%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-css3-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>CSS</h5>
                  <p className='text-neutral-300'>70%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-orange border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-mongodb-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>MongoDB</h5>
                  <p className='text-neutral-300'>60%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-orange border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-tailwindcss-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>TailwindCSS</h5>
                  <p className='text-neutral-300'>90%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[90%] bg-palette-orange border-none" />
                  <hr className="h-full w-[10%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <i className="devicon-sanity-plain text-xl"></i>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Sanity CMS</h5>
                  <p className='text-neutral-300'>60%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[60%] bg-palette-orange border-none" />
                  <hr className="h-full w-[40%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <p className='mt-4 md:text-[17px] text-neutral-300'>Other: Redux, Sass, Framer Motion</p>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row lg:flex-col items-start gap-y-6 gap-x-4">
          <div className='bg-white text-black p-4 md:p-6 lg:p-10 w-full md:w-2/3 lg:w-full'>
            <h3 className='font-bold text-lg md:text-xl lg:text-[23px]'>SEO</h3>
            <div className="grid grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-2 mt-4">
              <div className='md:border-r md:border-b md:pr-4 md:pb-4'>
                <h4 className='font-semibold'>Keyword Research</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Finding relevant keywords that are easy to rank for, have business potential & great search volume.</p>
              </div>
              <hr className='md:hidden' />
              <div className='md:pl-4 md:pb-4 md:border-b'>
                <h4 className='font-semibold'>Technical SEO</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Improve website performance, fix broken links, ensure the website is Mobile-Friendly, Optimize for Core Web Vitals etc.</p>
              </div>
              <hr className='md:hidden' />
              <div className='md:pt-4 md:border-r md:border-b md:pb-4'>
                <h4 className='font-semibold'>On-Page</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Optimizing the title tags, content, meta description, images, headings, internal links and URL structure.</p>
              </div>
              <hr className='md:hidden' />
              <div className='md:pt-4 md:pl-4 md:border-b md:pb-4'>
                <h4 className='font-semibold'>Off-Page</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Building backlinks, getting reviews from clients, brand mentions and increasing engagement and shares on social media.</p>
              </div>
              <hr className='md:hidden' />
              <div className='md:pt-4 md:border-r md:pb-4 md:pr-4'>
                <h4 className='font-semibold'>Competitor Analysis</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Finding out what works best for your competitors and finding flaws in their strategies from which you can benefit.</p>
              </div>
              <hr className='md:hidden' />
              <div className='md:pt-4 md:pl-4'>
                <h4 className='font-semibold'>Audits</h4>
                <p className='mt-1 text-[15px] text-neutral-700'>Doing a full analysis of all the factors that affect your website's visibility in search engines, including indexability, page speed, UX etc.</p>
              </div>
            </div>
          </div>
          <div className='p-4 md:p-6 lg:p-8 bg-neutral-900 w-full md:w-1/3 lg:w-full'>
            <h3 className='font-bold text-lg md:text-xl lg:text-[23px]'>Tools I use</h3>
            <ul className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-4 gap-y-1 gap-x-3'>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Github
              </li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Vercel</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Netlify</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Figma</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Adobe Express</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Sanity Studio</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Google Analytics</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Google Search Console</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Semrush</li>
              <li className='text-base md:text-[17px] md:text-lg text-neutral-300 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 min-w-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>Ahrefs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
