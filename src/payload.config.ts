// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { gcsStorage } from '@payloadcms/storage-gcs'

import Users from './collections/Users'
import { Media } from './collections/Media'
import Platforms from './collections/Platforms'
import { Posts } from './collections/CreateEvents'
import { Logo } from 'graphics/Logo'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)




export default buildConfig({
  admin: {
    
   meta: {
      titleSuffix: '- TRBL Design',
      icons: [
        {
          fetchPriority: 'high',
          url: '/LogoPink.svg',
          sizes: '32x32',
          type: 'image/png',
          rel: 'icon',
        },
      ],
      
    },
    components: {
      graphics: {
        Logo: "/graphics/Logo.js#LogoFull",
        Icon:"/graphics/Logo.js#Logo"
      }
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Platforms, Posts],
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
