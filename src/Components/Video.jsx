import React from 'react'
import data from '../constant/data.js'
import { Link } from 'react-router-dom'

const Video = () => {
  const videos = data.filter((el) => el.category == 'video')
  return (
    <div className='text-start'>
      <h2 className='font-bold text-xl my-4'>Video</h2>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full'>
        {videos.map((video) => (
          <div className='card bg-base-100 shadow-xl p-0' key={video.id}>
            <figure>
              <img src={video.img} alt={video.title} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{video.title}</h2>
              <div className='card-actions justify-end content-end h-full'>
                <Link
                  to={`/${video.title}`}
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

export default Video
