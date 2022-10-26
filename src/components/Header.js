import { useContext } from 'react'
import './Header.css'
import { GlobalContext } from './ThemeContext'
import ligth from '../assets/todo-app-main/images/bg-desktop-light.jpg'
import dark from '../assets/todo-app-main/images/bg-desktop-dark.jpg'

const Header = () => {
  const [theme] = useContext(GlobalContext)
  return (
    <header>
      <img src={theme ? ligth : dark} alt="" />
    </header>
  )
}

export default Header
