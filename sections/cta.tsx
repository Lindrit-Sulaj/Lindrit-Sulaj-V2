"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { sendSubmission } from '@/lib/resend'

export default function Cta() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('')

  const isValid = question === "8"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Starting submission")
    setLoading(true);
    await sendSubmission({ data: { name, email, phoneNumber: phone, message } })
      .then(() => {
        console.log('Email has been sent')
      })
      .catch(() => {
        console.error("Email has not been sent")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="px-4 bg-palette-isabelline mt-10 md:mt-14 lg:mt-20 py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-12">
        <div>
          <h3 className='font-medium text-neutral-700 flex items-center gap-2 md:text-lg tracking-wider uppercase md:justify-center lg:justify-start'>
            <svg width="100%" height="100%" viewBox="0 0 24 24" className='w-4 md:w-6 text-palette-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Get a free quote</span>
          </h3>
          <h2 className='h2 md:text-center lg:text-left'>Do you have a project and want to discuss?</h2>
          <p className="text-[17px] md:text-lg text-black/80 mt-3 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 md:text-center lg:text-left">To help you the most, I first need to understand what you need. Share your project details with me, and we'll set up a free call to talk about how I can assist.</p>
        </div>
        <div className='md:max-w-lg md:w-full md:mx-auto lg:max-w-none lg:mx-0'>
          <form onSubmit={handleSubmit} className='flex flex-col items-end'>
            <Input value={name} onChange={(e) => setName(e.target.value)} aria-label="Enter your name" name="Name" placeholder='Enter your name' className='bg-transparent border-x-0 border-t-0 rounded-none h-12 lg:h-16 placeholder:text-black text-base px-0 lg:text-lg border-b border-b-black focus-visible:ring-transparent focus-visible:ring-offset-0' />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Enter your email" name="Email" placeholder='Your email address' className='bg-transparent border-x-0 border-t-0 rounded-none h-12 lg:h-16 placeholder:text-black text-base px-0 lg:text-lg border-b border-b-black focus-visible:ring-transparent focus-visible:ring-offset-0 mt-4' type="email" />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="Enter your phone number" name="Phone number" placeholder='Your phone number' className='bg-transparent border-x-0 border-t-0 rounded-none h-12 lg:h-16 placeholder:text-black text-base px-0 lg:text-lg border-b border-b-black focus-visible:ring-transparent focus-visible:ring-offset-0 mt-4' />
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} aria-label="Enter your project details" name="Message" className='bg-transparent border-x-0 border-t-0 px-0 rounded-none placeholder:text-black border-b-black pt-4 lg:pt-6 focus-visible:ring-transparent focus-visible:ring-offset-0 text-base lg:text-lg border-b' placeholder='Your project details' rows={4} />
            <Input value={question} onChange={(e) => setQuestion(e.target.value)} name="question" className='bg-transparent border-x-0 border-t-0 rounded-none h-12 lg:h-16 placeholder:text-black text-base px-0 lg:text-lg border-b border-b-black focus-visible:ring-transparent focus-visible:ring-offset-0 mt-4' placeholder={`What is 6 + 2`} />
            <Button disabled={loading || !isValid} className='mt-6' size="lg">{loading ? "Submitting your request" : "Get in touch"}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
