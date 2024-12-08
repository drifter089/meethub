import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import LandingHeroComp from '@/blocks/Hero/Hero'
import Socials from '@/blocks/Socials/Socials'
import HorizontalCard from '@/collections/HorizontalCards/HorizontalCardComponent'
import Section from '@/blocks/Section/Section'
import LandingPageNavigation from '@/components/ui/LandingPageNavigation'
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

  console.log("landingPage", landingPage);
  const layout = landingPage?.layout || [];
  return (
    <>
      {/* Header with the navigation */}
      <header className='default-x-padding default-y-padding header'>
        <LandingPageNavigation layout={layout} />
      </header>

      {/* Render Layout Blocks */}
      {layout.length > 0 &&
        layout.map((block) => {
          const sectionId = block.blockName ? `section-${block.blockName}` : undefined;

          if (block.blockType === 'Hero') {
            return (
              <section id={sectionId} key={block.id}>
                <LandingHeroComp
                  blockType="Hero"
                  backgroundColor={block.backgroundColor || 'primary'}
                  heading={block.heading}
                  content={block.content}
                  image={block.image}
                  reverse={block.reverse}
                />
              </section>
            );
          } else if (block.blockType === 'Social') {
            return (
              <section id={sectionId} key={block.id}>
                <Socials backgroundColor={block.backgroundColor || 'primary'} />
              </section>
            );
          } else if (block.blockType === 'section') {
            return <section id={sectionId} key={block.id}><Section /></section>;
          }
          return null;
        })}
    </>
  );
}

export default page
