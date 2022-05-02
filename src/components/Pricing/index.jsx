import illustrationFree from '../../assets/svg/illustration-free.svg'
import illustrationStandard from '../../assets/svg/illustration-standard.svg'
import illustrationPremium from '../../assets/svg/illustration-premium.svg'
import { CheckIcon } from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div className='bg-slate-50 pt-1'>
      <div className='container mx-auto mt-20 px-3 py-4'>
        <h3 className='text-center text-2xl leading-snug lg:text-4xl lg:leading-snug'>Choose Your Plan</h3>
        <p className='mb-10 text-center leading-loose text-gray-500 lg:leading-loose'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className='flex flex-col gap-14 lg:flex-row lg:justify-center'>
          <div className='relative w-auto items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-14 py-8 transition duration-300 hover:border-primary'>
            <div className='grid grid-rows-1 pb-40'>
              <div className='flex w-full flex-col items-center gap-8'>
                <img src={illustrationFree} className='w-full' alt='Free Plan' />
                <h4 className='text-center text-lg font-bold'>Free Plan</h4>
                <ul className='flex flex-col gap-3'>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Unlimited Bandwith
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Encrypted Connection
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    No Traffic Logs
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Works On All Devices
                  </li>
                </ul>
              </div>
              <div className='absolute bottom-8 left-0 z-10 flex w-full transform flex-col items-center gap-3 pt-10'>
                <h3 className='text-center text-2xl font-bold'>Free</h3>
                <button className='rounded-full border border-primary px-14 py-2 font-bold text-primary transition duration-300 hover:bg-primary hover:text-gray-50 hover:shadow-2xl hover:shadow-primary'>Select</button>
              </div>
            </div>
          </div>
          <div className='relative w-auto items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-14 py-8 transition duration-300 hover:border-primary'>
            <div className='grid grid-rows-1 pb-40'>
              <div className='flex w-full flex-col items-center gap-8'>
                <img src={illustrationStandard} className='w-full' alt='Standard Plan' />
                <h4 className='text-center text-lg font-bold'>Standard Plan</h4>
                <ul className='flex flex-col gap-3'>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Unlimited Bandwith
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Encrypted Connection
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Yes Traffic Logs
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Works On All Devices
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Connect Anywhere
                  </li>
                </ul>
              </div>
              <div className='absolute bottom-8 left-0 z-10 flex w-full transform flex-col items-center gap-3 pt-10'>
                <h3 className='text-center text-2xl font-bold'>
                  $9 <span className='text-gray-500'> / mo</span>
                </h3>
                <button className='rounded-full border border-primary px-14 py-2 font-bold text-primary transition duration-300 hover:bg-primary hover:text-gray-50 hover:shadow-2xl hover:shadow-primary'>Select</button>
              </div>
            </div>
          </div>
          <div className='relative w-auto items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-14 py-8 transition duration-300 hover:border-primary'>
            <div className='grid grid-rows-1 pb-40'>
              <div className='flex w-full flex-col items-center gap-8'>
                <img src={illustrationPremium} className='w-full' alt='Premium Plan' />
                <h4 className='text-center text-lg font-bold'>Premium Plan</h4>
                <ul className='flex flex-col gap-3'>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Unlimited Bandwith
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Encrypted Connection
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Yes Traffic Logs
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Works On All Devices
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Connect Anywhere
                  </li>
                  <li className='flex items-center gap-6 text-gray-500'>
                    <CheckIcon color='#2FAB73' className='h-5 w-5' />
                    Get New Features
                  </li>
                </ul>
              </div>
              <div className='absolute bottom-8 left-0 z-10 flex w-full transform flex-col items-center gap-3 pt-10'>
                <h3 className='text-center text-2xl font-bold'>
                  $12 <span className='text-gray-500'>/ mo</span>
                </h3>
                <button className='rounded-full border border-primary px-14 py-2 font-bold text-primary transition duration-300 hover:bg-primary hover:text-gray-50 hover:shadow-2xl hover:shadow-primary'>Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
