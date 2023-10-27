import React from 'react'
import PaddingContainer from '../layout/padding-container'
import siteConfig from '@/config/site'

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
                <div className='text-md'>
                    #Exploretheworld
                </div>
                <div>
                    Social links
                </div>
            </div>

            <div>
                <div>Currently At</div>
            </div>

        </div>
      </PaddingContainer>
    </div>
  )
}

export default Footer
