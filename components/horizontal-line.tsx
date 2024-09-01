"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HorizontalLine() {
  return (
    <div className="overflow-hidden">
      <motion.div className='bg-black text-white h-[85px] hidden lg:block whitespace-nowrap px-4 relative'>
        <motion.div className='h-full w-full flex justify-start gap-x-16' animate={{ x: [0, '-65%', 0] }} transition={{ type: 'just', ease: 'linear', repeat: Infinity, duration: 25 }}>
          <Skills />
          <Skills />
        </motion.div>
      </motion.div>
      <motion.div className="bg-black text-white h-[85px] block lg:hidden whitespace-nowrap overflow-x-auto px-4 relative md-horizontal-line">
        <motion.div className='h-full w-full flex justify-start gap-x-16' animate={{ x: [0, '-115%', 0] }} transition={{ type: 'just', ease: 'linear', repeat: Infinity, duration: 20 }}>
          <Skills />
        </motion.div>
      </motion.div>
    </div>
  )
}

function Skills() {
  return (
    <>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Development
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Design
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        SEO
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Branding
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Performance
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Conversions
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Analytics
      </p>
      <p className="uppercase inline-flex items-center gap-x-2 text-lg font-medium">
        <svg width="100%" height="100%" className="size-6 text-palette-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        UX Design
      </p>
    </>
  )
}