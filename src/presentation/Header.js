import React from 'react'

import './header.css'
import {colorPrimary1} from '../assets/colors'
import {colorText} from '../assets/colors'
import MenuButton from './MenuButton'

const style = {
  color: colorText,
  borderTop: '8px solid' + colorPrimary1
}

const Header = (props) => {
  return (

      <header className='header' style={style}>
        <div className='wrapper'>
          <div className='top-header'>
            <h1 className='title-primary'>{props.title}</h1>
            <MenuButton
              className="menu-button"
              colorIcon={ { color: colorText } }/>
          </div>
          <h3 className='description'>{props.description}</h3>
        </div>

      </header>


  )
}

export default Header
