import React, { useState } from 'react'
import Logo from '../../assets/svg/logo.svg'

const Navbar = () => {
  const [hamburger, setHamburger] = useState(() => false)
  const handleHamburger = () => {
    setHamburger(() => !hamburger)
  }

  return (
    <nav className='fixed top-0 z-50 w-full bg-white/50 backdrop-blur-md'>
      <div className='container mx-auto flex items-center justify-between px-3 py-4 text-gray-500'>
        <div className='flex items-center gap-1'>
          <img className='w-full max-w-[25px]' src={Logo} alt='Lasles VPN Logo' />
          <div>
            Lasles<span className='font-extrabold'>VPN</span>
          </div>
        </div>
        <ul
          className={`absolute top-16 right-4 flex flex-col gap-2 rounded-md bg-white py-3 shadow-md transition-all duration-300 lg:visible lg:static lg:flex-row lg:gap-20 lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
            hamburger ? 'opacity-100' : 'invisible opacity-0'
          }`}
        >
          <li className='nav-link' onClick={handleHamburger}>
            About
          </li>
          <li className='nav-link' onClick={handleHamburger}>
            Features
          </li>
          <li className='nav-link' onClick={handleHamburger}>
            Pricing
          </li>
          <li className='nav-link' onClick={handleHamburger}>
            Testimonials
          </li>
          <li className='nav-link' onClick={handleHamburger}>
            Help
          </li>
        </ul>
        <div className='hidden lg:flex lg:gap-8'>
          <button className='font-bold'>Sign In</button>
          <button className='rounded-full border border-primary px-10 py-2 font-bold text-primary transition duration-300 hover:bg-primary hover:text-gray-50'>Sign Up</button>
        </div>
        <div className={`flex cursor-pointer flex-col gap-1 lg:hidden ${hamburger ? 'hamburger-active' : ''}`} onClick={handleHamburger}>
          <span className='hamburger-line origin-top-left'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line origin-bottom-left'></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
