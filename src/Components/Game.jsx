import React from 'react'
import { games } from './../constant/data.js'
import { Link } from 'react-router-dom'

const Game = () => {
  return (
    <div className='text-start'>
      <h2 className='font-bold text-xl'>Game</h2>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full'>
        {games.map((game, ind) => (
          <div className='card bg-base-100 shadow-xl p-0' key={game.id}>
            <figure>
              <img src={game.img} alt={game.title} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{game.title}</h2>
              <div className='card-actions justify-end content-end h-full'>
                <Link
                  to={`/detail/${game.id}`}
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

export default Game
