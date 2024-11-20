import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {staticDir: path.resolve(dirname, '../../public')},
}

