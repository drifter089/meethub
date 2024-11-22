import { CollectionConfig } from 'payload'

const Attendees: CollectionConfig = {
  slug: 'attendees',
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  //   auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'name of customer',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'email of attendee',
    },
    {
      name: 'image',
      label: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'thing',
      label: 'platform',
      type: 'relationship',
      relationTo: 'platforms',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
    },
  ],
}

export default Attendees
