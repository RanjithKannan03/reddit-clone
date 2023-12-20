import React from 'react'
import { useState } from 'react'

export const PostCardImage = (props) => {


  return (
    <div className='w-[35rem] p-10 text-center'>
        {props.numImages===1?(
            <img src='/image/spiderman.png' className='w-[100%]'/>
        ):(
            <p>2</p>
        )}
    </div>
  )
}
