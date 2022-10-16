import React from 'react'
import Button from '../Button/Button'
import YoutubeEmbed from '../YTEmbed/YoutubeEmbed'
import "./Banner.css"


function Banner() {
  return (
    <div className='h-[1001px] min-h-50'>
        <div className="hero-image w-full h-full flex justify-center">
            <div className="hero-text text-white text-center py-20 w-[80%] ">
            <h1 className='text-[40px] font-extrabold py-[15px]'>ELIMINE ATÉ 20KG EM 2 MESES COM ESSE MÉTODO</h1>
            <p className='text-[20px]'>COMENDO ALIMENTOS COMO BACON, CARNE, QUEIJOS, E MUITO MAIS...</p>
        <div className='flex justify-center py-20'>
            <YoutubeEmbed embedId='0PvRuvzkplI' />
        </div>
        <div className='flex justify-center'>
        <Button btnText="QUERO EMAGRECER AGORA" />
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default Banner
