import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import { FaPepperHot } from 'react-icons/fa';

import styles from './Menu-preview-grid.module.css'
import { responsiveTitle3 } from './typography.module.css'

function MenuPreview (props) {
  return (
    <Link className={styles.root} to={`/Menu/${props.slug.current}`}>
      <div className='menuRow' style={{display: 'flex'}}>
        <div>{ props.itemNumber }</div>
        <div><FaPepperHot style={{color: 'red'}} />{props.name}</div>
      </div>
    </Link>
  )
}

export default MenuPreview
