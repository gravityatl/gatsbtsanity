import { FaPooStorm } from 'react-icons/fa'

export default {
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  icon: FaPooStorm,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'jobDescription',
      title: 'Job Description',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
        {
          type: 'code'
        }
      ]
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'mainImage'
    },
    {
        name: 'attachFile',
        title: 'Attach File',
        type: 'file'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    }
  }
}
