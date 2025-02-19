import { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const VerticalCards: CollectionConfig = {
  slug: 'verticalcards',
  admin: {
    hidden: true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        // readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}

export default VerticalCards
