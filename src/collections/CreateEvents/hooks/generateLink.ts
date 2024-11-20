import type {
  CollectionAfterChangeHook,
  CollectionAfterReadHook,
  CollectionBeforeReadHook,
} from 'payload'

import type { Post } from '../../../payload-types'

export const generatedLink: CollectionBeforeReadHook<Post> = async ({
  doc,
  //   previousDoc,
  req: { payload },
}) => {
  const nextBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const generatedLink = `${nextBaseUrl}/meethub/event/${doc.slug}`

  //   const t = { ...doc }
  doc.generatedLink = generatedLink

  return doc
}
