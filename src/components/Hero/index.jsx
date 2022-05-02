import illustrationOne from '../../assets/svg/illustration-1.svg'

const Hero = () => {
  return (
    <div className='container mx-auto mt-20 px-3 py-4'>
      <div className='flex flex-col-reverse justify-between gap-6 lg:flex-row lg:items-center'>
        <div className='flex w-full flex-col gap-3'>
          <h1 className='text-4xl leading-snug lg:text-6xl lg:leading-snug'>
            Want anything to be easy with <span className='font-bold'>LaslesVPN</span>
          </h1>
          <p className='leading-loose text-gray-600 lg:leading-loose'>
            Provide a network for all your needs with ease and fun using <span className='font-bold'>LaslesVPN</span> discover interesting features from us.
          </p>
          <button className='mt-4 w-60 rounded-xl bg-primary py-3 text-gray-50 shadow-2xl shadow-primary transition duration-300 hover:bg-primary/90'>Get Started</button>
        </div>
        <div className='w-full'>
          <img src={illustrationOne} className='w-full' alt='Illustration 1' />
        </div>
      </div>
    </div>
  )
}

export default Hero
