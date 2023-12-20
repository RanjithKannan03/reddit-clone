import React from 'react'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className='flex flex-col items-center'>
      <PostCard/>
      <PostCard/>
      </div>
    </div>

  )
}

export default Home