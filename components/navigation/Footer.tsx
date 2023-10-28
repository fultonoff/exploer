import React from 'react'
import PaddingContainer from '../layout/padding-container'
import siteConfig from '@/config/site'
import Link from 'next/link'
import SocialLink from '../elements/social-link'

const Footer = () => {
  return (
    <div className='py-8 border-t mt-10'>
      <PaddingContainer>
        <div>
            <h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
            <p className='max-w-md mt-2 text-neutral-700 text-lg'>{siteConfig.description}</p>
        </div>

        <div className='mt-6 flex justify-between gap-4 flex-wrap'>

            <div>
                <div className='text-md font-medium'>
                    #Exploretheworld
                </div>
                <div className='flex items-center gap-3 text-neutral-600 mt-2'>
                   <SocialLink platform='github' link={siteConfig.socialLink.github!}></SocialLink>
                   <SocialLink platform='instagram' link={siteConfig.socialLink.instagram!}></SocialLink>
                </div>
            </div>

            <div>
                <div className='text-sm text-neutral-400'>Currently At</div>
                <div className='bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2'>
                    <div className='bg-emerald-400 h-2 w-2 rounded-full'></div>
                    {siteConfig.currentlyAt}
                    </div>
            </div>

        </div>
        {/* bottom section */}
        <div className='py-3 border-t flex items-center gap-4 flex-wrap justify-between mt-16'>
            <div className='text-sm text-neutral-400'>
                All rights are reserved | Copyright {new Date().getFullYear()}
            </div>
            <div className='text-sm'>
                Made with love by <Link href={siteConfig.socialLink.github!} target='_blank' className='underline'>Fulton</Link> 
            </div>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Footer
