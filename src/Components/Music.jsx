import React from 'react'
import { musics } from '../constant/data'

const Music = () => {
  return (
    <div className='text-start mt-4'>
      <h2 className='font-bold text-xl'>Music</h2>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full'>
        {musics.map((music, ind) => (
          <div className='card bg-base-100 shadow-xl p-0' key={music.id}>
            <figure>
              <img src={music.img} alt={music.title} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{music.title}</h2>
              <div className='card-actions justify-end content-end h-full'>
                <button className='btn btn-outline btn-secondary'>
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Music
