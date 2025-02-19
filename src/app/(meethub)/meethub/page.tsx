import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import LandingHeroComp from '@/blocks/Hero/Hero'

import Socials from '@/blocks/Socials/Socials'
import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import Section from '@/blocks/Section/Section'
import HeroImage from '@/blocks/Hero/HeroImage'
const page = async () => {
  const payload = await getPayload({ config: configPromise })

  const landingPage = await payload.findGlobal({
    slug: 'home',
  })
  console.log('layout', landingPage)
  return (
    <>
      {landingPage.layout &&
        landingPage.layout.length > 0 &&
        landingPage.layout.map((block) => {
          const sectionId = block.blockName ? block.blockName : block.id
          if (block.blockType === 'Hero') {
            return (
              // <LandingHeroComp
              //   blockType="Hero"
              //   backgroundColor={block.backgroundColor || 'primary'}
              //   heading={block.heading}
              //   content={block.content}
              //   image={block.image}
              //   reverse={block.reverse}
              //   key={block.id}
              //   blockName={sectionId}
              // />
              <HeroImage
                blockType="Hero"
                backgroundColor={block.backgroundColor || 'primary'}
                heading={block.heading}
                content={block.content}
                image={block.image}
                reverse={block.reverse}
                key={block.id}
                blockName={sectionId}
              />
            )
          } else if (block.blockType === 'Social') {
            return (
              <Socials
                key={block.id}
                backgroundColor={block.backgroundColor || 'primary'}
                blockName={sectionId}
              />
            )
          } else if (block.blockType === 'section') {
            return (
              <Section
                key={block.id}
                backgroundColor={block.backgroundColor}
                component={block.component}
                cards={block.cards}
                blockType={block.blockType}
                blockName={sectionId}
                limit={block.limit}
                subheading={block.subheading}
                heading={block.heading}
              />
            )
          }
          return null
        })}
    </>
  )
}

export default page
