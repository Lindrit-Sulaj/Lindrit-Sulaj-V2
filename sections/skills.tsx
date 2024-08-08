import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-950 text-white py-14 my-24 px-4">
      <h3 className='font-medium text-neutral-300 flex items-center gap-2 md:text-lg tracking-wider uppercase justify-center'>
        <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Javascript</h5>
                  <p className='text-neutral-300'>90%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[90%] bg-palette-primary border-none" />
                  <hr className="h-full w-[10%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <g fill="currentColor"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                </svg>

              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>React</h5>
                  <p className='text-neutral-300'>90%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[90%] bg-palette-primary border-none" />
                  <hr className="h-full w-[10%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="#323330" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="currentColor" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Typescript</h5>
                  <p className='text-neutral-300'>70%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-primary border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5' fill="currentColor">
                  <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
                </svg>

              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Next.JS</h5>
                  <p className='text-neutral-300'>85%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[85%] bg-palette-primary border-none" />
                  <hr className="h-full w-[15%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Prisma</h5>
                  <p className='text-neutral-300'>80%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[80%] bg-palette-primary border-none" />
                  <hr className="h-full w-[20%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>

                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"></path><path fill="currentColor" d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"></path><path fill="currentColor" d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"></path><path fill="currentColor" fillOpacity=".2" d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"></path><path fill="currentColor" d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z" opacity=".2"></path>
                </svg>

              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Firebase</h5>
                  <p className='text-neutral-300'>70%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-primary border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="currentColor" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#0a0a0a" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#0a0a0a" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>HTML</h5>
                  <p className='text-neutral-300'>80%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[80%] bg-palette-primary border-none" />
                  <hr className="h-full w-[20%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>CSS</h5>
                  <p className='text-neutral-300'>70%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-primary border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>MongoDB</h5>
                  <p className='text-neutral-300'>60%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[70%] bg-palette-primary border-none" />
                  <hr className="h-full w-[30%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="currentColor"></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>TailwindCSS</h5>
                  <p className='text-neutral-300'>90%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[90%] bg-palette-primary border-none" />
                  <hr className="h-full w-[10%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <li className='flex items-center gap-x-2 mt-4'>
              <div className='w-12 h-12 rounded-full justify-center items-center flex bg-neutral-800'>
                <svg viewBox="0 0 128 128" className='min-w-5 min-h-5 size-5'>
                  <path fill="currentColor" d="M 0 0 L 0 128 L 128 128 L 128 0 L 0 0 z M 63.703125 22.755859 C 82.035925 22.755859 92.644819 32.269456 95.261719 45.660156 L 78.634766 45.660156 C 76.801466 40.380856 72.21245 36.269531 63.84375 36.269531 C 54.90125 36.269531 48.799019 41.38485 48.449219 49.46875 L 48.433594 49.46875 C 51.546039 51.424935 55.445799 52.976941 60.175781 54.15625 L 74.84375 57.498047 C 87.94255 60.453947 95.917969 67.794959 95.917969 79.755859 C 96.019869 84.966659 94.296656 90.053663 91.035156 94.164062 C 91.035156 93.747927 91.009532 93.354091 90.994141 92.951172 C 91.008841 93.345587 91.019531 93.743361 91.019531 94.150391 C 85.841631 100.66669 76.746387 104.32227 66.054688 104.32227 C 48.057787 104.32227 35.462962 95.620947 32.664062 80.498047 L 49.947266 80.498047 C 52.172466 87.440847 58.062834 90.658203 65.927734 90.658203 C 75.504946 90.658203 81.875781 85.648357 82.03125 76.861328 C 78.831263 74.841522 74.735525 73.219096 69.595703 71.904297 L 55.195312 68.6875 C 43.663913 66.1029 34.763672 60.068172 34.763672 47.076172 C 34.702972 42.059072 36.342428 37.163609 39.423828 33.162109 C 44.419828 26.700509 53.109325 22.755859 63.703125 22.755859 z "></path>
                </svg>
              </div>
              <div className='grow'>
                <div className="flex justify-between">
                  <h5 className='font-medium'>Sanity CMS</h5>
                  <p className='text-neutral-300'>75%</p>
                </div>

                <div className='w-full h-[3px] flex mt-1'>
                  <hr className="h-full w-[75%] bg-palette-primary border-none" />
                  <hr className="h-full w-[25%] bg-neutral-700 border-none" />
                </div>
              </div>
            </li>
            <p className='mt-4 md:text-[17px] text-neutral-300'>Other: Redux, Sass, Framer Motion, Prismic</p>
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
