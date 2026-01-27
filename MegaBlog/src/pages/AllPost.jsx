import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Appwrite থেকে সব পোস্ট নিয়ে আসা
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, []) 

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts && posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            {/* এখানে ডাটাবেসের ছোট হাতের নামগুলোই কার্ডে যাবে */}
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost