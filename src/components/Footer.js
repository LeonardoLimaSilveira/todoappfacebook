import React from 'react'
import './Footer.css'
import { GlobalContext } from './ThemeContext'
const Footer = () => {
  const [theme] = React.useContext(GlobalContext)
  return (
    <div class={theme ? 'footerDiv' : 'footerDivDark'}>
      Challenge by
      <a
        href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
        target="_blank"
      >
        {'  '}Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/LeonardoLimaSilveira" target="_blank">
        Leonardo de Lima
      </a>
      .
    </div>
  )
}

export default Footer
