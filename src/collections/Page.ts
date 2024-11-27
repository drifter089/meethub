import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'
import { Hero } from '@/blocks/Hero/config'
import { Section } from '@/blocks/Section/config'
import { Social } from '@/blocks/Socials/config'

const Page: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Add Page',
    plural: 'Add Pages',
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'layout',
      type: 'blocks',

      blocks: [Hero, Section, Social],
    },
  ],
  timestamps: true,
}

export default Page
