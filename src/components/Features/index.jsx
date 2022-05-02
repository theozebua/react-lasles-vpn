import illustrationTwo from '../../assets/svg/illustration-2.svg'
import { CheckCircleIcon } from '@heroicons/react/solid'

const Features = () => {
  return (
    <div className='container mx-auto mt-20 px-3 py-4'>
      <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-center'>
        <div className='w-full'>
          <img src={illustrationTwo} className='w-full' alt='Illustration 2' />
        </div>
        <div className='flex w-full flex-col gap-3'>
          <h2 className='text-4xl leading-snug lg:text-6xl lg:leading-snug'>We Provide Many Features You Can Use</h2>
          <p className='leading-loose text-gray-500 lg:leading-loose'>You can explore the features that we provide with fun and have their own functions each feature.</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <CheckCircleIcon color='#2FAB73' className='h-5 w-5' />
              Powerfull online protection
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircleIcon color='#2FAB73' className='h-5 w-5' />
              Internet without borders
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircleIcon color='#2FAB73' className='h-5 w-5' />
              Supercharged VPN
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircleIcon color='#2FAB73' className='h-5 w-5' />
              No specific time limits
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
