import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import VerticalCardComponent from '@/collections/VerticalCards/VerticalCardComponent'

const Section = async () => {
  const payload = await getPayload({ config: configPromise })

  const collectionsData = await payload.find({
    collection: 'horizontalcards',
    limit: 1000,
  })

  const eventsData = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  console.log(eventsData , "hugh");

  return (
    <>
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
      {eventsData?.docs?.length > 0 &&
        eventsData.docs.map((block) => <VerticalCardComponent content={block?.content} key={block.id} image={block?.image} date={block?.createdAt} headline={block?.title}/>)}
    </>
  )
}
export default Section
