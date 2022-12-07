import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Music from './Music'
import Video from './Video'

const Home = () => {
  return (
    <>
      <Hero />

      <div className='form-control w-full mt-4'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Search…'
            className='input input-bordered w-full'
          />
          <button className='btn btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='mt-4'>
        {/* MUSIC */}
        <Music />

        {/* VIDEO */}
        <Video />
      </div>

      <Footer />
    </>
  )
}

export default Home
