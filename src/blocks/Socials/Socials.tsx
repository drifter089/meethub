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
    <>
      <TextSection
        heading="Socials"
        paragraph="Follow us"
      />
      <div className="flex items-center gap-4 flex-row flex-wrap justify-center default-x-padding">
        {platforms.docs.map((platform) => (
          <PlatformIconLink key={platform.id} image={platform.image} link={platform.link} />
        ))}
      </div>
    </>


  )
}

export default Socials
