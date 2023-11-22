import { getReadingTime, getRelativeDate } from '@/lib/helpers'
import { Post } from '@/types/collection'
import { ArrowBigDown, ArrowRight } from 'lucide-react'
import React from 'react'


interface PosrContentProps{
    post: Post
}
const PostContent = ({post}: PosrContentProps) => {
  return (
    <div className='space-y-2'>
        {/* Text */}
        <div className='text-sm flex gap-2 items-center text-neutral-400'>
            <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-500': 'text-indigo-600' }`}>{post.category.title}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{getReadingTime(post.body)}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
            <div>{getRelativeDate(post.date_created)}</div>
            <div className='w-2 h-2 rounded-full bg-neutral-200'></div>
        </div>
        {/* Title */}
        <h2 className='font-medium text-xl @md:text-2xl @lg:text-3xl'>{post.title}</h2>
        {/* Description */}
        <p className='text-neutral-600 leading-snug text-base @lg:text-lg'>{post.description}</p>
        <div className='flex items-center pt-3 gap-2'>Read More <ArrowRight size={14}/></div>
    </div>
  )
}

export default PostContent