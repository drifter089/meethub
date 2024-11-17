import { CollectionConfig } from 'payload'

const Platforms: CollectionConfig = {
  slug: 'platforms',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'name of the platform',
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      label: 'link to the platform',
    },
  ],
}

export default Platforms
