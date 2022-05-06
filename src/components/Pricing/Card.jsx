import { CheckIcon } from '@heroicons/react/solid'

const Card = ({ price }) => {
  return (
    <div>
      <div className='relative h-full w-auto items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-14 py-8 transition duration-300 hover:border-primary'>
        <div className='grid grid-rows-1 pb-40'>
          <div className='flex w-full flex-col items-center gap-8'>
            <img src={price.img} className='w-full' alt={price.title} />
            <h4 className='text-center text-lg font-bold'>{price.title}</h4>
            <ul className='flex flex-col gap-3'>
              {price.features.map((feature, index) => {
                return (
                  <li key={index} className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    {feature}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='absolute bottom-8 left-0 z-10 flex w-full transform flex-col items-center gap-3 pt-10'>
            {price.price === 0 ? (
              <h3 className='text-center text-2xl font-bold'>Free</h3>
            ) : (
              <h3 className='text-center text-2xl font-bold'>
                ${price.price} <span className='text-gray-500'>/ mo</span>
              </h3>
            )}
            <button className='rounded-full border border-primary px-14 py-2 font-bold text-primary transition duration-300 hover:bg-primary hover:text-gray-50 hover:shadow-2xl hover:shadow-primary'>Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
