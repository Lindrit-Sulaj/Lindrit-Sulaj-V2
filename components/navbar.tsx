"use client"

import React from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="h-[70px] border-b border-b-palette-primary/20 bg-palette-isabelline">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="max-w-full">
          <img className="w-[50px] rounded-md h-[50px]" src="https://ik.imagekit.io/0s9lwb2yr/Lindrit%20Sulaj/Logo%20with%20Background_FUd6B4Jxq.png?updatedAt=1707247528529" alt="Lindrit Sulaj" />
        </Link>
        <ul className="hidden md:flex items-center gap-x-8">
          <li className="text-lg">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-lg">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-lg">
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">
              <Button size="base">Contact</Button>
            </Link>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent onCloseAutoFocus={event => event.preventDefault()}>
            <SheetHeader>
              <SheetTitle>Lindrit Sulaj</SheetTitle>
            </SheetHeader>
            <ul className="h-full flex flex-col justify-center items-center gap-y-4">
              <li className="text-[17px] text-neutral-700">
                <Link href="/">Home</Link>
              </li>
              <li className="text-[17px] text-neutral-700">
                <Link href="/#about">About</Link>
              </li>
              <li className="text-[17px] text-neutral-700">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="text-[17px] text-neutral-700">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="text-[17px] text-neutral-700">
                <Link href="/contact">
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}