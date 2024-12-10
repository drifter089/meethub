import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import VerticalCardComponent from '@/collections/VerticalCards/VerticalCardComponent'

import type { PageSection } from '@/payload-types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import TextSection from '@/components/ui/headingSection'

const Section: React.FC<PageSection> = async ({
  backgroundColor,
  component,
  cards,
  id,
  blockName,
  blockType,
}) => {
  const payload = await getPayload({ config: configPromise })

  const collectionsData = await payload.find({
    collection: 'horizontalcards',
    limit: 1000,
  })

  const eventsData = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  return (
    <>
      <TextSection heading="Carousel" paragraph="Follow us" backgroundColor={backgroundColor} />
      {MakeCarousel(collectionsData.docs, 'horizontal')}
      <TextSection heading="Carousel" paragraph="Follow us" backgroundColor={backgroundColor} />
      {MakeCarousel(eventsData.docs, 'vertical')}
      <div className="max-w-[100vw] w-full flex flex-wrap">
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
      <div className="max-w-[100vw] w-full flex flex-wrap">
        {eventsData?.docs?.length > 0 &&
          eventsData.docs.map((block) => (
            <VerticalCardComponent
              updatedAt={block.updatedAt}
              createdAt={block.createdAt}
              key={block.id}
              image={block?.image}
              date={block?.eventDateTime}
              headline={block?.title}
              content={block?.content}
              id={block.id}
            />
          ))}
      </div>
    </>
  )
}
export default Section

const MakeCarousel = (data: any[], cardType: String) => {
  return (
    <>
      <Carousel
        className="w-[100%] mx-auto max-w-[100vw] overflow-hidden relative pb-[10rem]"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {data.map((block) => {
            switch (cardType) {
              case 'horizontal':
                return (
                  <div className="p-1">
                    <CarouselItem key={block.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <HorizontalCard
                        key={block.id}
                        heading={block.heading}
                        content={block.content}
                        image={block.image}
                        id={block.id}
                        updatedAt={block.updatedAt}
                        createdAt={block.createdAt}
                      />
                    </CarouselItem>
                  </div>
                )
              case 'vertical':
                return (
                  <div className="p-1">
                    <CarouselItem key={block.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <VerticalCardComponent
                        key={block.id}
                        image={block.image}
                        date={block.eventDateTime}
                        headline={block.title}
                        content={block.content}
                        id={block.id}
                        updatedAt={block.updatedAt}
                        createdAt={block.createdAt}
                      />
                    </CarouselItem>
                  </div>
                )
              default:
                return null
            }
          })}
        </CarouselContent>
        <CarouselPrevious
          className="absolute bottom-0 left-8 mb-4 transform -translate-y-1"
          style={{ top: '50%' }}
        />
        <CarouselNext
          className="absolute bottom-0 right-8 mb-4 transform -translate-y-1"
          style={{ top: '50%' }}
        />
      </Carousel>
    </>
  )
}

