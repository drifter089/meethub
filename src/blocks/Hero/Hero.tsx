import React from 'react'
import type { LandingHero } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const LandingHeroComp: React.FC<LandingHero> = ({
  backgroundColor,
  heading,
  content,
  image,
  reverse,
}) => {
  console.log('home', { backgroundColor, heading, content, image, reverse })

  return (
    <div
      className={`${backgroundColor === 'secondary' ? 'bg-secondary' : 'bg-background'} flex ${reverse === true ? 'flex-row-reverse' : 'flex-row'} flex-wrap justify-center w-full gap-2 md:gap-10 py-6 md:py-10 default-x-padding`}
    >
      <div className="w-[100%] lg:w-[45%] flex flex-col gap-4 justify-center">
        {reverse === false ? (
          <h1 className="text-heading">{heading}</h1>
        ) : (
          <h2 className="text-subheading">{heading}</h2>
        )}
        <p className="text-paragraph">{content}</p>
        {reverse === false ? <Button variant="default">See Events</Button> : <></>}
      </div>
      <div className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:min-h-[50vh] w-full lg:w-[45%]">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt} fill className="object-contain" />
        )}
      </div>
    </div>
  )
}

export default LandingHeroComp
