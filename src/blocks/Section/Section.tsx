import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const Section = async () => {
  const payload = await getPayload({ config: configPromise })

  const collectionsData = await payload.find({
    collection: 'horizontalcards',
    limit: 1000,
  })

  return (
    <div>
      {collectionsData?.docs?.length > 0 &&
        collectionsData.docs.map((block) => (
          <HorizontalCard
            key={block.id}
            heading={block.heading}
            content={block.content}
            image={block.image}
            id={''}
            updatedAt={''}
            createdAt={''}
          />
        ))}
    </div>
  )
}
export default Section
