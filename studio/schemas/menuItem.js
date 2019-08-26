import { IoIosRestaurant } from 'react-icons/io'

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  icon: IoIosRestaurant,
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
      name: 'itemNumber',
      titile: 'Item Number',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        {
          name: 'price',
          title: 'Price',
          type: 'object',
          fields: [
            {
              name: 'priceLabel',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'thePrice',
              label: 'Price',
              type: 'number'
            }
          ],
          preview: {
            select: {
              title: 'thePrice',
              subtitle: 'priceLabel'
            }
          }
        }
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'isSpicy',
      title: 'Spicy',
      type: 'boolean'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    }
  }

}
