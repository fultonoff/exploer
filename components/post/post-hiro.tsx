import React from 'react'
import { Post } from '@/types/collection';
import PostContent from './post-content';
import Image from 'next/image';


interface PostHiroProps{
    post: Post;
}

const PostHiro = ({post}: PostHiroProps) => {
  return (
    <div>
        <PostContent isPostPage post={post}/>
        <Image src={post.image} alt={post.title} width={1280} height={500} className='rounded-md object-cover object-center h-[300] md:h-[500px] mt-6' />
    </div>
  )
}

export default PostHiro