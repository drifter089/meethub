import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import { notFound } from 'next/navigation'
import type { Post } from '@/payload-types'
import Image from 'next/image'
import EventHost from '@/collections/Users/EventHost'
import VenueComponent from '@/collections/Venues/VenueComponent'
import { Button } from '@/components/ui/button'
import EventDescription from '@/components/EventDescription'
// import { Button } from '@payloadcms/ui'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'posts',
    limit: 1000,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
  })

  return (
    pages.docs?.map(({ slug }) => ({
      slug: slug,
    })) || []
  )
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let page: Post | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  //
  const date = page?.eventDateTime ? new Date(page.eventDateTime) : new Date() // Ensure it's a valid Date object
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <div
        className={`flex flex-wrap justify-center w-full gap-2 md:gap-10 py-6 md:py-10 overflow-hidden overflow-x-clip border-border default-x-padding`}
      >
        <div className="w-[100%] lg:w-[45%] flex flex-col gap-4 justify-center">
          <p className="text-paragraph-primary">{formattedDate}</p>
          <h1 className="text-subheading">{page.title}</h1>
          <Button variant="default">See Events</Button>
        </div>
        <div className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:min-h-[50vh] w-full lg:w-[45%]">
          {typeof page.image !== 'string' && page.image?.url && (
            <Image src={page.image.url} alt={page.image.alt} fill className="object-contain" />
          )}
        </div>
      </div>
      <div className=" flex justify-center bg-secondary py-8 px-[12rem] h-[125rem] lg:h-[64.5rem]">
        <EventDescription page={page} />
      </div>
      <div className="relative w-full">
        <Image
          src="https://meethub-smoky.vercel.app/api/media/file/paymentsSection.png" // Replace with your actual image path or URL
          layout="responsive"
          width={900} // Replace with the desired width
          height={400} // Replace with the desired height
          style={{
            width: '100vh', // Fills 80% of the screen width
            height: 'auto', // Keeps the aspect ratio
          }}
          alt="Additional image at the bottom"
        />
      </div>
    </>
  )
}
