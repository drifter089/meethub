import React from 'react'
import type { Horizontalcard } from '@/payload-types'
import Image from 'next/image'

const HorizantalCard: React.FC<Horizontalcard> = ({ heading, content, image }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex">
      {/* Left Side: Image */}
      <div className="w-1/3 relative overflow-hidden">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt} fill className="object-contain" />
        )}
      </div>

      {/* Right Side: Heading and Content */}
      <div className="w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-box-heading">{heading}</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

export default HorizantalCard
