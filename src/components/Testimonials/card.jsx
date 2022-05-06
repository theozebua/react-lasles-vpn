import { StarIcon } from '@heroicons/react/solid'
import { useEffect, useRef } from 'react'

const Card = ({ testimonial, setCardWidth }) => {
  const cardWidth = useRef(null)

  useEffect(() => {
    setCardWidth(cardWidth.current.getBoundingClientRect().width + 32)
  })

  return (
    <div ref={cardWidth} className='w-full min-w-[264px] max-w-sm rounded-lg border-2 bg-white p-3 transition duration-300 hover:border-primary lg:min-w-[364px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src={testimonial.img} className='h-10 w-10' alt={testimonial.name} />
          <div className='flex flex-col'>
            <span className='block'>{testimonial.name}</span>
            <span className='block text-sm text-gray-500'>{testimonial.from}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {testimonial.star} <StarIcon color='#FEA250' className='h-5 w-5' />
        </div>
      </div>
      <p className='mt-3'>{testimonial.text}</p>
    </div>
  )
}

export default Card
