import { getReadingTime, getRelativeDate } from '@/lib/helpers'
import { Post } from '@/types/collection'
import { ArrowBigDown, ArrowRight } from 'lucide-react'
import React from 'react'


interface PosrContentProps{
    post: Post;
    isPostPage?: boolean;
}
const PostContent = ({post, isPostPage=false}: PosrContentProps) => {
  return (
    <div className='space-y-2'>
        {/* Text */}
        <div className={` ${isPostPage ? 'text-sm': '@md:text-sm text-xs'}  flex flex-wrap gap-2 items-center text-neutral-400`}>
            <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-500': 'text-indigo-600' }`}>{post.category.title}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{getReadingTime(post.body)}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{getRelativeDate(post.date_created)}</div>
        </div>
        {/* Title */}
        <h2 className={`${isPostPage ? "text-2xl md:text-3xl lg:text-4xl font-bold": 'text-xl @md:text-2xl @lg:text-3xl font-medium'}  `}>{post.title}</h2>
        {/* Description */}
        <p className='text-neutral-600 leading-snug text-base @lg:text-lg'>{post.description}</p>

        {!isPostPage && 
        
        <div className='flex items-center pt-3 gap-2'>Read More <ArrowRight size={14}/></div>
        }
    </div>
  )
}

export default PostContent