import React from 'react'
import hero from './../assets/hero.jpg'
const Hero = () => {
  return (
    <div
      className='hero rounded-md overflow-hidden'
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-xl'>
          <h1 className='mb-5 text-5xl font-bold'>KP Store</h1>
          <p className='mb-5'>
            Jangan biarkan akunmu hanya sekedar gratisan, Ayo! upgrade akunmu
            menjadi premium dan berkelas di toko kami, dijamin murah, aman, dan
            terpercaya.
          </p>
          <div className='flex gap-2 justify-center'>
            <div className='badge badge-outline badge-primary'>Youtube</div>
            <div className='badge badge-outline badge-secondary'>Spotify</div>
            <div className='badge badge-outline badge-accent'>Netflix</div>
            <div className='badge badge-outline'>etc</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
