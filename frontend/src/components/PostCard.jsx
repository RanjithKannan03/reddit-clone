import React from 'react'
import { PostCardImage } from './PostCardImage'

const PostCard = () => {
    const number=1;
  return (
    <div className='grid grid-cols-10 bg-[#161617] my-4 px-2 rounded-md border-[1px] border-gray-700 hover:border-gray-300'>
    <div className='flex flex-col col-span-1 justify-start items-center gap-5 pt-6'>
    <i class="fa-solid fa-arrow-up fa-lg text-white hover:text-orange-600"/>
    <p className='font-roboto-condensed text-white text-base'>500</p>
    <i class="fa-solid fa-arrow-down fa-lg text-white hover:text-orange-600"/>
    </div>

    <div className='p-4 flex flex-col bg-[#1A1A1B] col-span-9'>

    <div className='flex justify-between items-center'>
    <div className='flex gap-3 items-center py-2'>
    <img src="/image/default_profile.png" className='rounded-full w-[7%]'/>
    <p className='font-roboto-condensed text-white text-sm'>r/Community</p>
    <p className='font-roboto-condensed text-gray-400  text-sm'>Posted by u/user</p>
    </div>
    <div className='px-4 text-center rounded-lg bg-gray-200 hover:bg-gray-300'>
    <p className='font-roboto text-[#1A1A1B] text-sm'>Join</p>
    </div>
    
    </div>

    <h1 className='font-roboto font-semibold text-white text-lg mt-2'>Title</h1>

    <PostCardImage numImages={number} />

    <div className='flex justify-start items-center gap-4'>
    <div className='flex items-center justify-center gap-2'>
    <i class="fa-regular fa-message fa-lg text-gray-400"/>
    <p className='font-roboto-condensed text-gray-400 text-sm'>500 comments</p>
    </div>

    <div className='flex items-center justify-center gap-2'>
    <i class="fa-solid fa-share fa-lg text-gray-400"/>
    <p className='font-roboto-condensed text-gray-400 text-sm'>Share</p>
    </div>

    <div className='flex items-center justify-center gap-2'>
    <i class="fa-regular fa-bookmark fa-lg text-gray-400"/>
    <p className='font-roboto-condensed text-gray-400 text-sm'>Save</p>
    </div>

    </div>

    </div>

    </div>
  )
}

export default PostCard