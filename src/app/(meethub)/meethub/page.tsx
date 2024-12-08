import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import LandingHeroComp from '@/blocks/Hero/Hero'
import Socials from '@/blocks/Socials/Socials'
import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import Section from '@/blocks/Section/Section'
const page = async () => {
  const payload = await getPayload({ config: configPromise })

  const landingPage = await payload.findGlobal({
    slug: 'home',
  })
  console.log("layout", landingPage);
  return (
    <>
      {landingPage.layout &&
        landingPage.layout.length > 0 &&
        landingPage.layout.map((block) => {
          const sectionId = block.blockName ? `section-${block.blockName}` : `section-${block.id}`;
          if (block.blockType === 'Hero') {
            return (
              <div id={sectionId}>
                <LandingHeroComp
                  blockType="Hero"
                  backgroundColor={block.backgroundColor || 'primary'}
                  heading={block.heading}
                  content={block.content}
                  image={block.image}
                  reverse={block.reverse}
                  key={block.id}
                />
              </div>
            )
          } else if (block.blockType === 'Social') {
            return(
            <div id={sectionId}>
              <Socials key={block.id} backgroundColor={block.backgroundColor || 'primary'} />
            </div>
            )
          } else if (block.blockType === 'section') {
            return(
            <div id={sectionId}>
              <Section key={block.id}></Section>
            </div>
            )
          }
          return null
        })}
    </>
  )
}

export default page