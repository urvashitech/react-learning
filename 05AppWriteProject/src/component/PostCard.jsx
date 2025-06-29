import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from "react-router-dom"
function PostCard({$id , title , featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePriview(featuredImage)} alt = {title} className='rounded-xl'/>
            </div>
            <h1>{title}</h1>
        </div>
      
    </Link >
  )
}

export default PostCard
