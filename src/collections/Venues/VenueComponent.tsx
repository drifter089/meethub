import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { Venue } from '@/payload-types'

const VenueComponent = ({ eventDateTime, eventVenue }: { eventDateTime: string; eventVenue: string | Venue }) => {
  const date = eventDateTime ? new Date(eventDateTime) : new Date()
  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const formattedTime = date.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  })
  return (
    <Card className="flex flex-col h-[42rem] w-100 ">
      <div className="flex items-left w-[80%] justify-left m-3">
        <Avatar>
          <AvatarImage
            src="https://meethub-smoky.vercel.app/api/media/file/clockIcon.svg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4 font-normal text-[1.5rem]">
          {formattedDate}
          <p>{formattedTime}</p>
        </div>
      </div>
      <div className="flex items-left w-[80%] justify-left m-3">
        <Avatar>
          <AvatarImage
            src="https://meethub-smoky.vercel.app/api/media/file/locationIcon.svg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4 font-semibold text-[1.5rem]">
          <p>The white mulberry</p>
          <div className="font-normal">
            <p>SILQ hotel Sukhumvit soi 24, 9th floor, Bangkok</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: 1, // This ensures the height is the same as the width
        }}
      >
        <Image
          src="https://meethub-smoky.vercel.app/api/media/file/maps.png"
          alt="Venue Map"
          layout="responsive"
          width={300} // Provide a default width
          height={300}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </Card>
  )
}

export default VenueComponent
