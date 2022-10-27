import React from 'react'
import './Header.css'
import { GlobalContext } from './ThemeContext'
import ligth from '../assets/todo-app-main/images/bg-desktop-light.jpg'
import dark from '../assets/todo-app-main/images/bg-desktop-dark.jpg'
import MobLigth from '../assets/todo-app-main/images/bg-mobile-light.jpg'
import MobDark from '../assets/todo-app-main/images/bg-mobile-dark.jpg'

const Header = () => {
  const [theme] = React.useContext(GlobalContext)
  const [match, setMatch] = React.useState(null)

  window.addEventListener('resize', () => {
    const { matches } = window.matchMedia('(max-width:40rem)')
    setMatch(matches)
  })
  React.useEffect(() => {
    if (window.innerWidth < 641) {
      setMatch(true)
    }
  }, [])
  return (
    <header>
      {match ? (
        <img src={theme ? MobLigth : MobDark} alt="" />
      ) : (
        <img src={theme ? ligth : dark} alt="" />
      )}
    </header>
  )
}

export default Header
