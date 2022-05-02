import personOne from '../../assets/img/person-1.png'
import personTwo from '../../assets/img/person-2.png'
import personThree from '../../assets/img/person-3.png'
import Card from './card'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid'
import './index.css'

const Testimonials = () => {
  return (
    <div className='bg-slate-50'>
      <div className='container relative mx-auto px-3 pt-20 pb-36'>
        <div className='custom-scrollbar flex snap-x gap-8 overflow-x-auto px-2 pb-8'>
          <Card
            name='Viezh Robert'
            from='Warsaw, Poland'
            img={personOne}
            star='4.5'
            text='“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
          />
          <Card name='Yessica Christy' from='Shanxi, China' img={personTwo} star='4.5' text='“I like it because I like to travel far and still can connect with high speed.”.' />
          <Card name='Kim Young Jou' from='Seoul, South Korea' img={personThree} star='4.5' text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.' />
          <Card
            name='Viezh Robert'
            from='Warsaw, Poland'
            img={personOne}
            star='4.5'
            text='“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
          />
          <Card name='Yessica Christy' from='Shanxi, China' img={personTwo} star='4.5' text='“I like it because I like to travel far and still can connect with high speed.”.' />
          <Card name='Kim Young Jou' from='Seoul, South Korea' img={personThree} star='4.5' text='“This is very unusual for my business that currently requires a virtual private network that has high security.”.' />
        </div>
        <div className='mt-10 flex items-center justify-between px-2 pb-8'>
          <div className='flex gap-3'>
            <span className='h-4 w-10 rounded-full bg-primary'></span>
            <span className='h-4 w-4 rounded-full bg-primary/25'></span>
            <span className='h-4 w-4 rounded-full bg-primary/25'></span>
          </div>
          <div className='flex gap-3'>
            <button className='h-10 w-10 rounded-full border-2 border-primary text-primary transition duration-300 hover:bg-primary hover:text-gray-50'>
              <ArrowSmLeftIcon />
            </button>
            <button className='h-10 w-10 rounded-full border-2 border-primary text-primary transition duration-300 hover:bg-primary hover:text-gray-50'>
              <ArrowSmRightIcon />
            </button>
          </div>
        </div>
        <div className='absolute -bottom-24 left-0 right-0 flex flex-col gap-3 rounded-lg bg-white p-5 shadow-2xl lg:flex-row lg:p-16'>
          <div className='flex w-full flex-col gap-3'>
            <h5 className='text-center text-2xl leading-snug lg:text-left lg:leading-snug'>Subscribe Now to Get Special Features!</h5>
            <p className='text-center leading-relaxed text-gray-500 lg:text-left lg:leading-relaxed'>Let's subscribe with us and find the fun.</p>
          </div>
          <button className='mx-auto mt-4 w-60 rounded-xl bg-primary py-3 text-gray-50 shadow-2xl shadow-primary transition duration-300 hover:bg-primary/90'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
