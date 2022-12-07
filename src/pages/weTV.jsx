import React from 'react'
import Contact from '../Components/Contact'
import Rule from '../Components/Rule'
import Table from '../Components/Table'
import data from '../constant/data'

const WeTV = () => {
  const item = data.find((el) => el.title === 'weTV')
  const { type: typeSharing, lists: listSharing } = item.prices.find(
    (el) => el.type === 'Sharing'
  )
  const { type: typePrivate, lists: listPrivate } = item.prices.find(
    (el) => el.type === 'Private'
  )
  return (
    <section className='sm:flex text-center sm:justify-between'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={item.img} alt={item.title} className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{item.title}</h2>
          <Rule />
        </div>
      </div>
      <div className='p-10 sm:flex-1'>
        <Table type={typeSharing} lists={listSharing} />
        <div className='divider'></div>
        <Table type={typePrivate} lists={listPrivate} />
        <div className='divider'></div>

        <Contact />
      </div>
    </section>
  )
}

export default WeTV
