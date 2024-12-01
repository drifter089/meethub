import React from 'react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PlatformIconLink from '@/collections/Platforms/PlatformIconLink'
import TextSection from '@/components/ui/headingSection'

const Socials = async () => {
  const payload = await getPayload({ config: configPromise })

  const platforms = await payload.find({
    collection: 'platforms',
    draft: false,
    limit: 1000,
  })
  console.log('platform', platforms)
  return (
    <div className="flex flex-col items-center gap-4">
      <TextSection 
        heading="Socials" 
        paragraph="Follow us" 
      />
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        {platforms.docs.map((platform) => (
          <PlatformIconLink key={platform.id} image={platform.image} link={platform.link} /> 
        ))}
      </div>
    </div>
  )
}

export default Socials
