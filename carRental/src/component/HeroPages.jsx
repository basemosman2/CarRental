import React from 'react';

const HeroPages = ({title}) => {

  return (
    <div className=' relative bg-[url("./assets/cars_images/overlay.png")] w-full h-[300px] bg-center bg-cover'>
        <div className=' bg-black absolute inset-0 opacity-70 z-0'></div>
        <div className=' px-20 flex flex-col gap-1 justify-center text-white relative z-10 h-full'>
          <h1 className=' font-bold text-5xl'>{title}</h1>
          <p className=' text-xl'>Home / { title}</p>
        </div>
    </div>
  )
}

export default HeroPages