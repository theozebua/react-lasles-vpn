import illustrationGlobal from '../../assets/svg/illustration-global.svg'
import illustrationSponsor from '../../assets/svg/illustration-sponsor.svg'

const Partners = () => {
  return (
    <div className='bg-slate-50 pt-1'>
      <div className='container mx-auto mt-20 px-3 py-4'>
        <div className='mb-8 flex flex-col gap-3 lg:mb-16'>
          <h3 className='text-center text-2xl leading-snug lg:text-4xl lg:leading-snug'>Huge Global Network of Fast VPN</h3>
          <p className='mb-10 text-center leading-loose text-gray-500 lg:leading-loose'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
        <div className='mb-8 flex w-full justify-center px-14'>
          <img src={illustrationGlobal} className='w-full' alt='Global' />
        </div>
        <div className='flex w-full justify-center px-14'>
          <img src={illustrationSponsor} className='w-full' alt='Partners' />
        </div>
      </div>
    </div>
  )
}

export default Partners
