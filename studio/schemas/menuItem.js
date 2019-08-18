import { FaHamsa } from 'react-icons/fa'

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  icon: FaHamsa,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the menu item',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
  ],
  
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    }
  }

}
