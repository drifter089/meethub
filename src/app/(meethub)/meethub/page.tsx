import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import LandingHeroComp from '@/blocks/Hero/Hero'
import Socials from '@/blocks/Socials/Socials'
import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import Section from '@/blocks/Section/Section'
// const page = async () => {
//   const payload = await getPayload({ config: configPromise })

//   const landingPage = await payload.findGlobal({
//     slug: 'home',
//   })

//   console.log('home', landingPage)

//   return (
//     <LandingHeroComp
//       backgroundColor={landingPage?.layout?.[0]?.backgroundColor || 'primary'}
//       heading={(landingPage?.layout?.[0] as any)?.heading}
//       content={
//         'content' in (landingPage?.layout?.[0] || {})
//           ? (landingPage?.layout?.[0] as any)?.content
//           : undefined
//       }
//       image={
//         'image' in (landingPage?.layout?.[0] || {})
//           ? (landingPage?.layout?.[0] as any)?.image
//           : undefined
//       }
//       reverse={
//         'reverse' in (landingPage?.layout?.[0] || {})
//           ? (landingPage?.layout?.[0] as any)?.reverse
//           : undefined
//       }
//     />
//   )
// }
const page = async () => {
  const payload = await getPayload({ config: configPromise })

  const landingPage = await payload.findGlobal({
    slug: 'home',
  })

  return (
    <>
      {landingPage.layout &&
        landingPage.layout.length > 0 &&
        landingPage.layout.map((block) => {
          if (block.blockType === 'Hero') {
            return (
              <LandingHeroComp
                blockType="Hero"
                backgroundColor={block.backgroundColor || 'primary'}
                heading={block.heading}
                content={block.content}
                image={block.image}
                reverse={block.reverse}
                key={block.id}
              />
            )
          } else if (block.blockType === 'Social') {
            return <Socials key={block.id} backgroundColor={block.backgroundColor || 'primary'} />
          } else if (block.blockType === 'section') {
            return <Section key={block.id}></Section>
          }
          return null
        })}
    </>
  )
}

export default page
