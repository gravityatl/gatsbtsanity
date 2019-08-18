import React from 'react'
import Header from './header'
import Img from 'gatsby-image'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle, site }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumn}>[SOCIAL MEDIA LINKS/ICONS]</div>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.siteInfo}>
            © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
        </div>


      </div>
    </footer>
  </>
)

export default Layout
