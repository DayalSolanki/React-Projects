import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Movies() {

  const[movies, SetMovies]=useState([])

  useEffect(()=>{
    axios.get(``).then(function(res){
      SetMovies(res.data.results)
    })
  },[])

  return (
    <div className='p-5'>
      <div className='text-2xl m-3 font-bold text-center'>
        Trending 
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movieObj)=>{
          return <MovieCard/>
        })}
      </div>
    </div>
  )
}

export default Movies