import React from 'react'
import data from '../constant/data.js'
import { Link } from 'react-router-dom'

const Music = () => {
  const musics = data.filter((el) => el.category == 'music')
  return (
    <div className='text-start'>
      <h2 className='font-bold text-xl mb-4'>Music</h2>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full'>
        {musics.map((music) => (
          <div className='card bg-base-100 shadow-xl p-0' key={music.id}>
            <figure>
              <img src={music.img} alt={music.title} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{music.title}</h2>
              <div className='card-actions justify-end content-end h-full'>
                <Link
                  to={`/${music.title}`}
                  className='btn btn-outline btn-secondary'
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Music
