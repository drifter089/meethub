import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const EventHost = ({ imageLink, name }: { imageLink: string; name: string }) => {
  console.log('EventHost', imageLink, name)
  return (
    <>
      <Card>
        <div className="flex flex-row items-center p-3 px-4 min-w-[100%]">
          <Avatar className="scale-125">
            <AvatarImage src={imageLink} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-black text-2xl font-bold">Bangkok Events & Meet new Friends</p>
            <p className="text-[#A29F9F] text-2xl font-normal">{name}</p>
          </div>
        </div>
      </Card>
    </>
  )
}

export default EventHost
