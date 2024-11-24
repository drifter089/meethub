import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
// import { Banner } from '../../blocks/Banner/config'
// import { Code } from '../../blocks/Code/config'
// import { MediaBlock } from '../../blocks/MediaBlock/config'
// import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidatePost } from './hooks/revalidatePost'
import { slugField } from '@/fields/slug'
import { generatedLink } from './hooks/generateLink'

// import {
//   MetaDescriptionField,
//   MetaImageField,
//   MetaTitleField,
//   OverviewField,
//   PreviewField,
// } from '@payloadcms/plugin-seo/fields'
// import { slugField } from '@/fields/slug'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Create Event',
    plural: 'Create Events',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'generatedLink', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Event Name',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      // editor: lexicalEditor({
      //   features: ({ rootFeatures }) => {
      //     return [
      //       ...rootFeatures,
      //       HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      //       // BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
      //       FixedToolbarFeature(),
      //       InlineToolbarFeature(),
      //       HorizontalRuleFeature(),
      //     ]
      //   },
      // }),
      label: 'Event Description',
      required: true,
    },
    {
      name: 'platforms',
      type: 'relationship',
      relationTo: 'platforms',
      hasMany: true,
    },
    {
      name: 'seats',
      type: 'number',
      label: 'Number of Seats Available',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        // readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      label: 'Event Hosts',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    {
      name: 'eventDateTime',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        // readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'venue',
      label: "Event's Venue",
      type: 'relationship',
      relationTo: 'venues',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
    {
      name: 'generatedLink',
      type: 'text',
      defaultValue: 'it will be generated once yopu save the data',
      access: {
        update: () => true,
        read: () => true,
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    beforeRead: [generatedLink],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
