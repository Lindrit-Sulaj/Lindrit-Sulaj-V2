"use client"
import React from 'react'
import { Instagram } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Footer() {
  const path = usePathname();

  const landing = path === "/"

  return (
    <footer className={`pt-12 bg-neutral-950 text-white px-4`}>
      <div className="max-w-[1350px] mx-auto border-b pb-6 border-b-neutral-400/60">
        <div className="flex flex-col lg:flex-row gap-y-8 justify-between items-center">
          <div className="flex items-center gap-x-4 lg:w-[150px]">

            <img width="65px" height="65px" className='rounded-lg' src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/Logo%20with%20Background_FUd6B4Jxq.png?updatedAt=1707247528529" alt="Lindrit Sulaj" />
            <div className='font-semibold text-lg uppercase'>Lindrit <br /> Sulaj</div>
          </div>
          <ul className='flex gap-x-4 lg:gap-x-8 items-center flex-wrap md:flex-nowrap'>
            <li className='text-lg'>
              <Link href="/#about">
                About
              </Link>
            </li>
            <li className='text-lg'>
              <Link href="/#skills">
                Skills
              </Link>
            </li>
            <li className='text-lg'>
              <Link href="/#projects">
                Projects
              </Link>
            </li>
            <li className="text-lg">
              <a rel="noopener nofollow" href="https://v1.lindritsulaj.com" className='flex items-center gap-x-2'>
                V1
                <Badge className='bg-palette-primary hover:bg-palette-primary/90'>Old Portfolio</Badge>
              </a>
            </li>
          </ul>
          <div className="flex justify-end lg:w-[200px]">

            <Link href="/contact">
              <Button>
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto py-6 hidden md:flex justify-between items-center">
        <div className="lg:w-[150px] font-medium">
          Copyright <br />
          <span className='mt-1 block font-normal'>© 2023 - {new Date().getFullYear()}</span>
        </div>
        <ul className="flex items-center gap-x-4">
          <li>
            <a rel="noopener nofollow" href="https://instagram.com/lindritsulaj" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' fill="currentColor" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
            </a>
          </li>
          <li>
            <a rel="noopener nofollow" href="https://www.linkedin.com/in/lindrit-sulaj-0b75052b1/" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' fill="currentColor" viewBox="0 0 124 124" id="linkedin"><path fill="currentColor" d="M102.4 70.7v28.5c0 .7-.6 1.3-1.3 1.3H86.4c-.7 0-1.3-.6-1.3-1.3V72.7c0-7-2.5-11.8-8.8-11.8-4.8 0-7.6 3.2-8.9 6.3-.5 1.1-.6 2.7-.6 4.2v27.8c0 .7-.6 1.3-1.3 1.3H50.9c-.7 0-1.3-.6-1.3-1.3 0-7.1.2-41.4 0-49.4 0-.7.6-1.3 1.3-1.3h14.7c.7 0 1.3.6 1.3 1.3v6.1c0 .1-.1.1-.1.2h.1v-.2c2.3-3.5 6.4-8.6 15.6-8.6 11.4 0 19.9 7.5 19.9 23.4zM24 100.6h14.7c.7 0 1.3-.6 1.3-1.3V49.8c0-.7-.6-1.3-1.3-1.3H24c-.7 0-1.3.6-1.3 1.3v49.5c.1.7.6 1.3 1.3 1.3z"></path><circle cx="30.9" cy="32.7" r="9.3" fill="currentColor"></circle></svg>
            </a>
          </li>
          <li>
            <a rel="noopener nofollow" href="https://github.com/Lindrit-Sulaj" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-7 h-7' viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
            </a>
          </li>

        </ul>
        <div className="lg:w-[150px]">
          Made by me with: <br />
          <span className='font-medium inline-flex gap-x-2 items-center mt-1'>
            <svg fill="currentColor" className='size-5' viewBox="0 0 128 128">
              <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
            </svg>
            Next.JS</span>
        </div>
      </div>
      <div className="md:hidden py-6">
        <ul className="flex items-center justify-center flex-wrap gap-x-4">
          <li>
            <a rel="noopener nofollow" href="https://instagram.com/lindritsulaj" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' fill="currentColor" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a rel="noopener nofollow" href="https://www.linkedin.com/in/lindrit-sulaj-0b75052b1/" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' fill="currentColor" viewBox="0 0 124 124" id="linkedin"><path fill="currentColor" d="M102.4 70.7v28.5c0 .7-.6 1.3-1.3 1.3H86.4c-.7 0-1.3-.6-1.3-1.3V72.7c0-7-2.5-11.8-8.8-11.8-4.8 0-7.6 3.2-8.9 6.3-.5 1.1-.6 2.7-.6 4.2v27.8c0 .7-.6 1.3-1.3 1.3H50.9c-.7 0-1.3-.6-1.3-1.3 0-7.1.2-41.4 0-49.4 0-.7.6-1.3 1.3-1.3h14.7c.7 0 1.3.6 1.3 1.3v6.1c0 .1-.1.1-.1.2h.1v-.2c2.3-3.5 6.4-8.6 15.6-8.6 11.4 0 19.9 7.5 19.9 23.4zM24 100.6h14.7c.7 0 1.3-.6 1.3-1.3V49.8c0-.7-.6-1.3-1.3-1.3H24c-.7 0-1.3.6-1.3 1.3v49.5c.1.7.6 1.3 1.3 1.3z"></path><circle cx="30.9" cy="32.7" r="9.3" fill="currentColor"></circle></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a rel="noopener nofollow" href="https://github.com/Lindrit-Sulaj" className='w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-600 hover:to-neutral-900 transition-all text-white rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-7 h-7' viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
              <span className="sr-only">Github</span>
            </a>
          </li>

        </ul>
        <div className="text-center mt-6">
          Made by me with: <br />
          <span className='font-medium inline-flex gap-x-2 items-center mt-1'>
            <svg fill="currentColor" className='size-5' viewBox="0 0 128 128">
              <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
            </svg>
            Next.JS</span>
        </div>
        <div className="font-medium text-center mt-4">
          Copyright <br />
          <span className='mt-1 block font-normal'>© 2023 - {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
