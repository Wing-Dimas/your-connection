import React from 'react'
import whatsapp from './../assets/whatsapp.png'
import instagram from './../assets/instagram.webp'

const Contact = () => {
  return (
    <div>
      <div className='card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Contact Me</h2>
          <div className='xl:flex w-full'>
            <div className='grid xl:grid-cols-2 flex-grow card bg-base-300 rounded-box place-items-center'>
              <img src={instagram} alt='instagram' width={50} />
              <p className='xl:mt-0 mt-4'>@kpstore21</p>
            </div>
            <div className='divider xl:divider-horizontal'>OR</div>
            <div className='grid xl:grid-cols-2 flex-grow card bg-base-300 rounded-box place-items-center'>
              <img src={whatsapp} alt='whatsapp' width={50} />
              <p className='xl:mt-0 mt-4'>089501677012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
