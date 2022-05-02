import Logo from '../../assets/svg/logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto px-3 pt-36 pb-14'>
        <div className='flex flex-col justify-between gap-10 px-6 lg:flex-row'>
          <div className='order-1 flex w-3/5 flex-col gap-3 lg:order-none'>
            <div className='flex items-center gap-1'>
              <img className='w-full max-w-[25px]' src={Logo} alt='Lasles VPN Logo' />
              <div>
                Lasles<span className='font-extrabold'>VPN</span>
              </div>
            </div>
            <p className='leading-relaxed text-gray-500 lg:leading-relaxed'>
              <span className='font-bold'>LaslesVPN</span> is a private virtual network that has unique features and has high security.
            </p>
            <div className='mt-6 flex gap-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full shadow-xl'>
                <FaFacebookF className='text-primary' />
              </div>
              <div className='flex h-8 w-8 items-center justify-center rounded-full shadow-xl'>
                <FaTwitter className='text-primary' />
              </div>
              <div className='flex h-8 w-8 items-center justify-center rounded-full shadow-xl'>
                <FaInstagram className='text-primary' />
              </div>
            </div>
            <span className='mt-6 block text-gray-400'>
              &copy; 2020 Lasles <span className='font-bold'>VPN</span>
            </span>
          </div>
          <div className='flex w-2/5 flex-col gap-10 lg:flex-row'>
            <div className='flex w-full flex-col gap-3'>
              <span className='font-bold'>Product</span>
              <ul className='flex flex-col gap-2 text-gray-500'>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='flex w-full flex-col gap-3'>
              <span className='font-bold'>Engage</span>
              <ul className='flex flex-col gap-2 text-gray-500'>
                <li>LaslesVPN ?</li>
                <li>FAQ</li>
                <li>Tutorials</li>
                <li>About Us</li>
                <li>Privacy &amp; Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className='flex w-full flex-col gap-3'>
              <span className='font-bold'>Earn Money</span>
              <ul className='flex flex-col gap-2 text-gray-500'>
                <li>Affiliate</li>
                <li>Become Partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
