"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  href: string;
  label: string;
  className?: string;
}

export default function AnimatedLink({ href, label, className }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <motion.a onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} href={href} className={`inline-block ${className} ${hover && "text-palette-primary"} transition-all`}>
      <span className='inline-flex items-center gap-x-2 font-medium text-xl'>
        {label}
        <motion.svg animate={{ rotate: hover ? 45 : 0, transition: { type: 'just' }}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </motion.svg>
      </span>
      <div className='h-[1px] bg-neutral-300'>
        <motion.div animate={{ width: hover ? "100%" : 0, transition: { type: 'just' }}} className='h-full bg-palette-primary'></motion.div>
      </div>
    </motion.a>
  )
}
