import type { GlobalConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'
import { Hero } from '@/blocks/Hero/config'
import { Section } from '@/blocks/Section/config'
import { Social } from '@/blocks/Socials/config'

const Page: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  fields: [
    {
      name: 'layout',
      type: 'blocks',

      blocks: [Hero, Section, Social],
    },
  ],
}

export default Page
