import React from 'react'
import type { Horizontalcard } from '@/payload-types'
import Image from 'next/image'

const HorizantalCard: React.FC<Horizontalcard> = ({ heading, content, image }) => {
  return (
    <div className="w-80 m-h-[44rem] md:w-auto max-w-3xl rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-wrap md:flex-nowrap">
      <div className="relative h-[20rem] w-[20rem]">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt} fill className="object-contain" />
        )}
      </div>

      <div className="w-[30rem] md:w-[60%] flex flex-col justify-center">
        <h2 className="text-title-bold text-3xl">{heading}</h2>
        <p className="text-paragraph">{content}</p>
      </div>
    </div>
  )
}

export default HorizantalCard
