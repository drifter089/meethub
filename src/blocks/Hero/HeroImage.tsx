import React from 'react'
import type { LandingHero } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HeroImage: React.FC<LandingHero> = ({
  backgroundColor,
  heading,
  content,
  image,
  reverse,
  blockName,
}) => {
  return (
    <div
      id={blockName || ''}
      className={`${backgroundColor === 'secondary' ? 'bg-secondary' : 'bg-background'} relative flex ${reverse ? 'flex-row-reverse' : 'flex-row'} flex-wrap justify-left w-full gap-2 md:gap-10 py-6 md:py-10 default-x-padding`}
      style={{ minHeight: '80vh' }}
    >
      {typeof image !== 'string' && image?.url && (
        <Image
          src={image.url}
          alt={image.alt || 'Background'}
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 z-0"
        />
      )}

      {/* <div className="absolute inset-0 bg-background bg-opacity-40 z-0"></div> */}

      <div className="relative z-10 w-[100%] h-[80vh] lg:w-[45%] flex flex-col gap-4 justify-center text-white p-6">
        {reverse === false ? (
          <h1 className="text-heading">{heading}</h1>
        ) : (
          <h2 className="text-subheading">{heading}</h2>
        )}
        <p className="text-subparagraph">{content}</p>
        {reverse === false && <Button variant="default">RSVP NOW</Button>}
      </div>
    </div>
  )
}

export default HeroImage
