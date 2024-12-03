import type { GlobalConfig } from 'payload'

const Header: GlobalConfig = {
  slug: 'header',
  label: 'Navigation Header',
  fields: [
    {
      name: 'image',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'name',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
}

export default Header
