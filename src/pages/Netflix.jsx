import React from 'react'
import Contact from '../Components/Contact'
import Rule from '../Components/Rule'
import Table from '../Components/Table'
import data from '../constant/data'

const Netflix = () => {
  const item = data.find((el) => el.title === 'Netflix')
  const { type: typeSharing2, lists: listsSharing2 } = item.prices.find(
    (el) => el.type === 'Sharing 2 (user)'
  )
  const { type: typeSharing1, lists: listsSharing1 } = item.prices.find(
    (el) => el.type === 'Sharing 1 (user)'
  )
  const { type: typePrivate, lists: listsPrivate } = item.prices.find(
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
        <Table type={typeSharing2} lists={listsSharing2} />
        <div className='divider'></div>
        <Table type={typeSharing1} lists={listsSharing1} />
        <div className='divider'></div>
        <Table type={typePrivate} lists={listsPrivate} />

        <Contact />
      </div>
    </section>
  )
}

export default Netflix
