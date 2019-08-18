import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import styles from './header.module.css'
import Img from 'gatsby-image'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
<StaticQuery
  query={graphql`
  query LogoQuery {
    sanityCompanyInfo {
      logo {
        asset {
          fixed(width: 39) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
    sanitySiteSettings {
      headerColor {
        hex
      }
    }
  }
  `}
  render={data => (
    <div className={styles.root} style={{backgroundColor: data.sanitySiteSettings.headerColor.hex}}>
    <div className={styles.wrapper}>
      <div>
        <Img fixed={data.sanityCompanyInfo.logo.asset.fixed} />
      </div>

      <h1 className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/projects/'>Projects</Link>
          </li>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )}
/>
)

export default Header
