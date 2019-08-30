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