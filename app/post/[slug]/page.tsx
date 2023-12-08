import { DUMMY_POSTS } from '@/DUMMY_DATA'
import React from 'react'
import { notFound } from 'next/navigation'
import PaddingContainer from '@/components/layout/padding-container'
import PostHiro from '@/components/post/post-hiro'



export const generateStaticParams = async ()=>{
  return DUMMY_POSTS.map((post)=>{
    return {
      slug: post.slug,
    }
  })

}

const page = ({params}: {params:{
    slug: string
}}) => {

    const post = DUMMY_POSTS.find((post)=> post.slug === params.slug)

    if(!post){
      notFound()
    }
  return (
<PaddingContainer>
<PostHiro post={post}/>
<div className='mt-10 flex gap-10'>

  <div className='relative'>
  <div className='sticky top-20'>
    Share
  </div>

  </div>
  <div className='bg-slate-400 w-full h-[1000px]'>
    post body
  </div>
</div>
</PaddingContainer>  
)
}

export default page