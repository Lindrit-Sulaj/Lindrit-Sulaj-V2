import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Cta() {
  return (
    <section className="md:px-4 flex justify-stretch mt-10 md:mt-14 lg:mt-20 -mb-20">
      <div className="cta-bg px-4 mx-auto max-w-screen-xl w-full text-white py-14 md:rounded-xl block">
        <h2 className='h2 text-center'>Start by saying hi</h2>
        <p className="text-center text-[17px] md:text-lg text-neutral-300 mt-3 max-w-xl mx-auto">Let's talk. Reach out and let's discuss how I can contribute to your business success.</p>

        <div className="flex mt-3 justify-center">
          <Link href="/contact">
            <Button size="base">Get in touch</Button>
          </Link>
        </div>
      </div>

    </section>
  )
}
