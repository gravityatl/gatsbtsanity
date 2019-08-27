import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import MenuPreviewGrid from '../components/menu-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query MenuPageQuery {
    Menu: allSanityMenuItem( sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          name
          itemNumber
        slug {
            current
          }
        }
      }
    }
  }
`

const MenuPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const menuNodes =
    data && data.Menu && mapEdgesToNodes(data.Menu).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Menu' />
      <Container>
        <h1 className={responsiveTitle1}>Menu</h1>
        <h2>Appetizers</h2>
        {menuNodes && menuNodes.length > 0 && <MenuPreviewGrid nodes={menuNodes} />}
      </Container>
    </Layout>
  )
}

export default MenuPage
