import React, { useState } from 'react'

const Navbar = () => {

    const [option,setOption]=useState("Home");
    const [icon,setIcon]=useState("fa-house");
    const [query,setQuery]=useState("");


  return (
    <header className='bg-[#1A1A1B] w-full z-50 sticky top-0'>
    <nav className='w-full flex gap-10 items-center px-10 mx-auto py-2'>
    <div className='flex items-center w-auto'>
    <img src='/image/logo.png' className='w-[3rem] rounded'/>
    <a className='text-2xl font-roboto font-semibold text-white' href='#'>Brand</a>
    </div>


        <div class="hs-dropdown relative inline-flex">
    <button id="hs-dropdown-default" type="button" class="justify-between w-[15rem] hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-gray-800 shadow-sm hover:border-gray-200 hover:border bg-transparent">
        <div className='w-auto flex items-center'>
        <i class={icon+" fa-solid fa-xl text-white"}/>
        <p className='ml-5 font-roboto text-white font-semibold text-md'>{option}</p>
        </div>
        <svg class="hs-dropdown-open:rotate-180 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>

    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] shadow-md rounded-lg p-2 mt-2 dark:border dark:divide-gray-700 bg-[#1A1A1B] after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
        <p class="flex items-center gap-x-3.5 font-roboto py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
        Newsletter
        </p>
        <p class="flex items-center font-roboto gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
        Purchases
        </p>
       
    </div>
        </div>

    <form className='bg-[#272729] w-[50%] h-[2.5rem] flex text-center py-2 rounded-3xl hover:bg-[#1A1A1B] hover:border-white hover:border'>
        <label for="search" className='px-4'><i class="fa-solid fa-magnifying-glass fa-lg text-white"/></label>
        <input type='text' autoComplete='off' className='w-[80%] ml-2 focus:outline-none text-white font-ubuntu bg-transparent' placeholder='search' value={query} name='search' onChange={(e)=>{setQuery(e.target.value)}}/>
    </form>



    <div className='flex'>

    <div class="hs-tooltip inline-block [--placement:bottom]">
      <button type="button" class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 bg-transparent">
        <i name="alerts" class="fa-regular fa-lg fa-bell text-white"/>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 text-xs font-medium font-ubuntu-condensed text-white rounded shadow-sm bg-black" role="tooltip">
          Notifications
        </span>
      </button>
    </div>

    <div class="hs-tooltip inline-block [--placement:bottom]">
      <button type="button" class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 bg-transparent">
        <i name="alerts" class="fa-solid fa-lg text fa-plus text-white"/>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 text-xs font-medium font-ubuntu-condensed text-white rounded shadow-sm bg-black" role="tooltip">
          Create Post
        </span>
      </button>
    </div>

    <div className='flex ml-4 gap-4'>

    <img src='/image/default_profile.png' className='w-[20%] rounded-full'/>

    <div className='flex flex-col'>
    <h1 className='font-roboto-condensed text-white text-sm'>Name</h1>
    <p className='font-roboto-condensed text-gray-400 text-sm'>Karma</p>
    </div>

    </div>

    </div>

   
    </nav>

    </header>
  )
}

export default Navbar