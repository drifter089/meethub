import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import { notFound } from 'next/navigation'
import type { Event } from '@/payload-types'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)
  console.log('parsedSlug', parsedSlug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'events',
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
    collection: 'events',
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
  let page: Event | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  console.log('page', page)

  return (
    <>
      <div className="w-[screen] overflow-hidden flex flex-col justify-center align-middle box-border mx-4 md:mx-16 lg:mx-32 xl:mx-64 mt-16 gap-1 md:gap-2 2xl:gap-4">
        my event data
      </div>
    </>
  )
}
