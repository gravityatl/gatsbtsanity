import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'price', 'project', 'siteSettings', 'menuItem']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Menu Items')
        .schemaType('menuItem')
        .child(
          S.documentList()
            .title('Categories')
            .menuItems(S.documentTypeList('category').getMenuItems())
            .filter('_type == $type && !defined(parents)')
            .params({ type: 'category' })
            .child(categoryId =>
              S.documentList()
                  .title('Menu Items')
                  .menuItems(S.documentTypeList('menuItem').getMenuItems())
                  .filter('_type == $type && $categoryId in categories[]._ref')
                  .params({ type: 'menuItem', categoryId })
              )
            ),
      S.listItem()
      .title('Site Settings')
      .child(
        S.editor()
          .id('siteSettings')
          .schemaType('siteSettings')
          .documentId('siteSettings')
      )
      .icon(MdSettings),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
