import React from 'react'

import { FarmerCaresolData } from './FarmerCaresolData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const FarmerHomePageCaresol = () => {

    const caresolItems = FarmerCaresolData.map((item)=> <img role='presentation' className='cursor-pointer w-screen h-[40rem]' src={item.image}  />)
    
  return (
        <AliceCarousel
        items={caresolItems}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls


        />
  )
}

export default FarmerHomePageCaresol
