import React from 'react'
import type { Verticalcard } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const VerticalCard: React.FC<Verticalcard> = ({ image, content, headline, date }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''
    const Newcontent = (content || '').split(' ').slice(0, 30).join(' ');

  return (
    <div className="min-w-[25rem] md:w-[32rem] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-[20rem] overflow-hidden">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt || 'Card image'} fill className="object-cover" />
        )}
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <div className="h-6 aspect-square relative border inline-block">
            {typeof image !== 'string' && image?.url && (
              <Image
                src={`/api/media/file/clockIcon.svg`}
                alt={image.alt || 'Clock image'}
                fill
                className="object-cover "
              />
            )}
          </div>
          <span className="text-paragraph-muted inline">{formattedDate}</span>
        </div>
        <h2 className="text-title-bold">{headline}</h2>
        <p className="text-paragraph">{Newcontent}</p>
        <Button variant="secondary">RSVP</Button>
      </div>
    </div>
  )
}

export default VerticalCard
