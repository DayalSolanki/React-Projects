import React from 'react'
import logo from '../../src/assets/images/image1.png'
import {Link} from 'react-router'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={logo} alt=''/>
      <Link to='/' className='text-cyan-400 font-bold text-2xl'>Movies</Link>
      <Link to='/watchlist' className='text-cyan-400 font-bold text-2xl'>WatchList</Link>
    </div>
  )
}

export default Navbar