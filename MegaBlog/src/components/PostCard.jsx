import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

// featuredImage কে পরিবর্তন করে featuredimage করা হয়েছে
const PostCard = ({$id, title, featuredimage}) => {
    console.log("ইমেজ আইডি:", featuredimage); // এটি যোগ করুন
  return (
     <Link to={`/post/${$id}`} >
        <div className='w-full bg-gray-100 rounded-xl p-4 text-black'>
            <div className='w-full justify-center mb-4'>
                {/* এখানেও featuredimage ব্যবহার করতে হবে */}
                <img 
                    src={appwriteService.getFilePreview(featuredimage)} 
                    alt={title} 
                    className='rounded-xl' 
                />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
     </Link>
  )
}

export default PostCard