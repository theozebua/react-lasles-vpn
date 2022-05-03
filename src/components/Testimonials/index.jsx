import { useEffect, useState } from 'react'
import Card from './card'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid'
import './index.css'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('../../db.json')
      const data = await res.json()

      setTestimonials(data)
    }

    fetchTestimonials()
  }, [])

  return (
    <div className='bg-slate-50'>
      <div className='container relative mx-auto px-3 pt-20 pb-36'>
        <div className='custom-scrollbar flex snap-x gap-8 overflow-x-auto px-2 pb-8'>
          {testimonials.map((testimonial) => {
            return <Card testimonial={testimonial} />
          })}
        </div>
        <div className='mt-10 flex items-center justify-between px-2 pb-8'>
          <div className='flex gap-3'>
            <span className='h-4 w-10 rounded-full bg-primary'></span>
            <span className='h-4 w-4 rounded-full bg-primary/25'></span>
            <span className='h-4 w-4 rounded-full bg-primary/25'></span>
          </div>
          <div className='flex gap-3'>
            <button className='h-10 w-10 rounded-full border-2 border-primary text-primary transition duration-300 hover:bg-primary hover:text-gray-50'>
              <ArrowSmLeftIcon />
            </button>
            <button className='h-10 w-10 rounded-full border-2 border-primary text-primary transition duration-300 hover:bg-primary hover:text-gray-50'>
              <ArrowSmRightIcon />
            </button>
          </div>
        </div>
        <div className='absolute -bottom-24 left-0 right-0 flex flex-col gap-3 rounded-lg bg-white p-5 shadow-2xl lg:flex-row lg:p-16'>
          <div className='flex w-full flex-col gap-3'>
            <h5 className='text-center text-2xl leading-snug lg:text-left lg:leading-snug'>Subscribe Now to Get Special Features!</h5>
            <p className='text-center leading-relaxed text-gray-500 lg:text-left lg:leading-relaxed'>Let's subscribe with us and find the fun.</p>
          </div>
          <button className='mx-auto mt-4 w-60 rounded-xl bg-primary py-3 text-gray-50 shadow-2xl shadow-primary transition duration-300 hover:bg-primary/90'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
