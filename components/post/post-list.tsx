import React from 'react'
import PostCard from './post-card';
import { Post } from '@/types/collection';


interface PostListProps{
    posts: Post[];
    layout: 'vertical' | 'horizontal'
}


const PostList = ({posts, layout = 'vertical'}: PostListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {posts.map((post) =>{
            return (
                <PostCard layout={layout} post={post} key={post.id}/>
            )
        })}
    </div>
  )
}

export default PostList