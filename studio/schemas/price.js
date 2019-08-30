import { MdAttachMoney } from 'react-icons/md'

export default {
  name: 'price',
  title: 'Price',
  type: 'document',
  icon: MdAttachMoney,
  liveEdit: false,
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
