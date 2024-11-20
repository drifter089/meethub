import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const Venue = () => {
  return (
    <Card className="flex flex-col">
      <div className="flex items-center w-[100%] justify-center m-3">
        <Avatar>
          <AvatarImage
            src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=schedule"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-2">Saturday, November 16, 2024, 8 PM</div>
      </div>
      <div className="flex items-center w-[100%] justify-center m-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <p>The white mulberry</p>
          <p>SILQ hotel Sukhumvit soi 24, 9th floor, Bangkok</p>
        </div>
      </div>
      <Image
        src="https://github.com/shadcn.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Card>
  )
}

export default Venue
