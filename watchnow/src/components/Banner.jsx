import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[90vh] bg-cover flex items-end' style={{backgroundImage: `url(https://ntvb.tmsimg.com/assets/p15366809_v_h10_aw.jpg?w=1280&h=720)`}}>
        <div className='text-white text-xl w-full text-center bg-gray-800'>Avengers</div>
    </div>
  )
}

export default Banner