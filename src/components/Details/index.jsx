import { UserIcon, LocationMarkerIcon, ServerIcon } from '@heroicons/react/solid'

const Details = () => {
  return (
    <div className='container mx-auto mt-20 rounded-xl px-3 py-8 shadow-2xl shadow-gray-500/25'>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <div className='flex w-full flex-col items-center justify-center gap-3 py-8 lg:mx-auto lg:flex-row'>
          <div className='flex h-14 w-14 rounded-full bg-primary/25'>
            <UserIcon className='m-auto h-7 w-7 text-primary' />
          </div>
          <div className='flex flex-col'>
            <span className='text-center text-2xl font-bold lg:text-left'>90+</span>
            <span className='text-center lg:text-left'>Users</span>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-3 border-y py-8 lg:mx-auto lg:flex-row lg:border-y-0 lg:border-x'>
          <div className='flex h-14 w-14 rounded-full bg-primary/25'>
            <LocationMarkerIcon className='m-auto h-7 w-7 text-primary' />
          </div>
          <div className='flex flex-col'>
            <span className='text-center text-2xl font-bold lg:text-left'>30+</span>
            <span className='text-center lg:text-left'>Locations</span>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-3 py-8 lg:mx-auto lg:flex-row'>
          <div className='flex h-14 w-14 rounded-full bg-primary/25'>
            <ServerIcon className='m-auto h-7 w-7 text-primary' />
          </div>
          <div className='flex flex-col'>
            <span className='text-center text-2xl font-bold lg:text-left'>50+</span>
            <span className='text-center lg:text-left'>Servers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
