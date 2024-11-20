// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { gcsStorage } from '@payloadcms/storage-gcs'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import Platforms from './collections/Platforms'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)




export default buildConfig({
  admin: {

    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Events, Platforms],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    gcsStorage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      options: {
        // you can choose any method for authentication, and authorization which is being provided by `@google-cloud/storage`
        // keyFilename: './gcp_key.json',
        credentials: JSON.parse(process.env.GCS_KEYFILE || '{}'),
      },
      bucket: process.env.GCS_BUCKET || '',
    }),
  ],
})
