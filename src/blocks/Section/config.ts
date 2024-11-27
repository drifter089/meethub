import type { Block } from 'payload'

export const Section: Block = {
  slug: 'section',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
      required: true,
    },
    {
      name: 'component',
      type: 'select',
      defaultValue: 'carousel',
      options: [
        { label: 'Carousel', value: 'carousel' },
        { label: 'Basic', value: 'basic' },
        {
          label: 'Upcoming Events',
          value: 'upcomingevents',
        },
        {
          label: 'Past Events',
          value: 'pastevents',
        },
      ],
      required: true,
    },
    {
      name: 'cards',
      type: 'select',
      defaultValue: 'horizontalcards',
      options: [
        { label: 'Horizontal Card', value: 'horizontalcards' },
        { label: 'Vertical Card', value: 'verticalcard' },
        {
          label: 'Upcoming Events',
          value: 'upcomingevents',
        },
        {
          label: 'Past Events',
          value: 'pastevents',
        },
      ],
      required: true,
    },
  ],
}
