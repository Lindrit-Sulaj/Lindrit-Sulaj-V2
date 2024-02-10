import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <main>
      <section className="py-20">
        <h1 className='font-semibold text-2xl md:text-[26px] mt-5 md:mt-3 lg:text-4xl max-w-screen-lg lg:leading-[50px] mx-auto text-center'>Looking forward to working with you! <br />Ready to get started?</h1>
        <form action="" className='max-w-2xl mx-auto mt-6'>
          <div className="flex gap-4">
            <div className='w-1/2'>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" className='w-full h-[50px] mt-1' />
            </div>
            <div className='w-1/2'>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className='w-full h-[50px] mt-1' />
            </div>
          </div>
          <div className='mt-4'>
            <Label>Service</Label>
            <div className='flex gap-4 mt-1'>
              <div className='w-1/3 px-4 h-[50px] border flex items-center gap-x-2 rounded-md'>
                <Checkbox className='w-6 h-6' name="webdevelopment" id="webdevelopment" value="webdevelopment" />
                <Label htmlFor="webdevelopment">Web Development</Label>
              </div>
              <div className='w-1/3 px-4 h-[50px] border flex items-center gap-x-2 rounded-md'>
                <Checkbox className='w-6 h-6' name="webdesign" id="webdesign" value="webdesign" />
                <Label htmlFor="webdesign">Web Design</Label>
              </div>
              <div className='w-1/3 px-4 h-[50px] border flex items-center gap-x-2 rounded-md'>
                <Checkbox className='w-6 h-6' name="seo" id="seo" value="seo" />
                <Label htmlFor="seo">SEO</Label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="additionalInfo">Additional information:</Label>
            <Textarea className='py-4 mt-1' name="additionalInfo" rows={10} id="additionalInfo" />
          </div>
          <div className="flex mt-4 justify-center">
            <Button size="lg">Submit</Button>
          </div>
        </form>
      </section>

    </main>
  )
}
