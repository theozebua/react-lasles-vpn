import { useEffect, useState } from 'react'
import Card from './Card'

const Pricing = () => {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch('prices.json')
      const data = await res.json()

      setPrices(data)
    }

    fetchPrices()
  })

  return (
    <div className='bg-slate-50 pt-1'>
      <div className='container mx-auto mt-20 px-3 py-4'>
        <h3 className='text-center text-2xl leading-snug lg:text-4xl lg:leading-snug'>Choose Your Plan</h3>
        <p className='mb-10 text-center leading-loose text-gray-500 lg:leading-loose'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className='flex flex-col gap-14 lg:flex-row lg:justify-center'>
          {prices.map((price) => {
            return <Card price={price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Pricing
