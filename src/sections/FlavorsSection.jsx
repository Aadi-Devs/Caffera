import React from 'react'
import FlavorTitle from '../components/FlavorTitle'
import FlavorSlider from '../components/FlavorSlider'

const FlavorsSection = () => {
  return (
    <section className='flavor-section'>
        <div className="h-full flex lg:flex-row flex-col items-center 2xl:items-center relative">
            <div className="lg:w-full 2xl:w-[70%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0 2xl:pb-16">
                <FlavorTitle />
            </div>
            <div className="h-full w-full">
                <FlavorSlider />
            </div>
        </div>
    </section>
  )
}

export default FlavorsSection