import React from 'react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PlatformIconLink from '@/collections/Platforms/PlatformIconLink'

const Socials = async () => {
  const payload = await getPayload({ config: configPromise })

  const platform = await payload.find({
    collection: 'platforms',
    draft: false,
    limit: 1000,
  })
  console.log('platform', platform)
  return (
    <div>
      Socials
      <PlatformIconLink />
    </div>
  )
}

export default Socials
