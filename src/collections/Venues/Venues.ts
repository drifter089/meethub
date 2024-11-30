import { CollectionConfig } from 'payload'

const Venues: CollectionConfig = {
  slug: 'venues',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'name of the place',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: 'description of the place',
    },
  ],
}

export default Venues
