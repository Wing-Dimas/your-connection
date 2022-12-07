import React from 'react'

const Table = ({ lists, type }) => {
  return (
    <div className='text-start'>
      <h1 className='text-xl font-bold my-4'>{type}</h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Label</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, ind) => (
              <tr key={ind}>
                <th>{ind + 1}</th>
                <td>{list.label}</td>
                <td>{list.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
