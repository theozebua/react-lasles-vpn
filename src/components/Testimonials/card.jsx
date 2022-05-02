import { StarIcon } from '@heroicons/react/solid'

const Card = ({ name, from, img, star, text }) => {
  return (
    <div className='w-full min-w-[264px] max-w-sm snap-center rounded-lg border-2 p-3 transition duration-300 hover:border-primary lg:min-w-[364px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src={img} className='h-10 w-10' alt={name} />
          <div className='flex flex-col'>
            <span className='block'>{name}</span>
            <span className='block text-sm text-gray-500'>{from}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {star} <StarIcon color='#FEA250' className='h-5 w-5' />
        </div>
      </div>
      <p className='mt-3'>{text}</p>
    </div>
  )
}

export default Card
