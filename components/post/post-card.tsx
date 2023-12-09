import { Post } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import PostContent from './post-content';


interface PostProps{
    post: Post;
    layout?: 'vertical'| 'horizontal';
    reverse?: boolean;
}
const PostCard = ({post, layout = 'horizontal', reverse=false}: PostProps) => {
  return (
    <Link href={`/post/${post.slug}`} className={`@container ${layout === 'horizontal' ? 'grid grid-cols-1 sm:grid-cols-2 gap-10 items-center': 'space-y-10'} `}>
     {/* image */}
     <Image src={post.image} width={600} height={300} alt={post.title} className={`${reverse ? 'md:order-last': ''} rounded-md w-full object-cover object-center h-full  max-h-[300px]`}/>
     {/* Post content */}
     <PostContent post={post}/>
    </Link>
  )
}

export default PostCard
