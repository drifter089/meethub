import React from 'react'
import type { Verticalcard } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const VerticalCard: React.FC<Verticalcard> = ({image , content , headline , date }) => {
  // console.log(data);
  // const convertedDate = date?.toISOString();
  return (
    // <></>
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt || 'Card image'} fill className="object-cover" />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        {/* Date */}
        {/* <p className="text-sm text-gray-500 mb-2">{}</p> */}

        {/* Headline */}
        <h2 className="text-title-bold">{headline}</h2>
        {/* Content */}
        <p className="text-paragraph">{content}</p>

        <Button variant="secondary">RSVP</Button>

      </div>
    </div>
  )
}

export default VerticalCard
