import { CollectionConfig, Field } from 'payload'
import { textFields } from '@/fields/text'

const Venues: CollectionConfig = {
  slug: 'venues',
  // admin: {
  //   useAsTitle: 'name',
  // },
  fields: [
    {
      name: 'venueName',
      type: 'text',
      required: true,
      label: 'Name of the place',
    },
    // {
    //   name: 'description',
    //   type: 'text',
    //   required: true,
    //   label: 'description of the place',
    // },
    ...([] as Field[]).concat(textFields),
  ],
}

export default Venues
