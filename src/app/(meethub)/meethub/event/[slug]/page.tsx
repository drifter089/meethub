import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import { notFound } from 'next/navigation'
import type { Post } from '@/payload-types'
import Image from 'next/image'
import EventHost from 'blocks/EventHostCard/EventHost'
import Venue from 'blocks/Venue/Venue'
// import { Button } from '@payloadcms/ui'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)
  console.log('parsedSlug', parsedSlug)

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

  console.log('page', page)

  return (
    <>
      <h1 className="text-center p-6 pb-0 text-black text-[2.25rem] font-semibold">Registration</h1>

      <div className="flex flex-row px-20">
        <div className="flex flex-col justify-center items-start min-w-[50%] w-[50%] gap-4">
          <h2 className="text-[#FF009D] text-[1.5rem] font-normal">{page.eventDateTime}</h2>
          <h1 className="text-black text-[4rem] font-bold mb-4">
            {/* {page.title} */}
            Bangkok Events: Meet up International Friends
          </h1>
          <div className="bg-[#FF009D] rounded-[4rem] p-4 px-12 text-white">RSVP</div>
        </div>
        <div className="relative w-[50%] min-w[50%] ">
          <Image
            src={page.image.url}
            width={page.image.width}
            height={page.image.height}
            style={{ objectFit: 'contain' }}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className=" flex flex-row bg-[#FF009D]/5 py-8 px-16">
        <div className="flex flex-col justify-start items-start min-w-[50%]">
          <h3 className=" text-[2rem] font-bold">Description:</h3>
          <p className="text-black text-2xl font-normal pb-5">{page.content}</p>
          <div className="my-auto">
            {page.platforms &&
              page.platforms.map((platform) =>
                platform.link && platform.name ? (
                  <>
                    <span className="py-1 block text-black text-2xl font-normal">
                      {platform.name} : {platform.link}
                    </span>
                  </>
                ) : null,
              )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[50%] gap-4">
          {page.authors &&
            page.authors.map((author, index) => (
              <EventHost key={index} imageLink={author.image.url} name={author.name} />
            ))}
          {/* <EventHost imageLink={page} /> */}
          <Venue />
        </div>
      </div>
    </>
  )
}
