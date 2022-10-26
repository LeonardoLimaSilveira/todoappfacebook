import { useContext } from 'react'
import './Header.css'
import { GlobalContext } from './ThemeContext'
import ligth from '../assets/todo-app-main/images/bg-desktop-light.jpg'
import dark from '../assets/todo-app-main/images/bg-desktop-dark.jpg'

const Header = () => {
  const [theme] = useContext(GlobalContext)
  return <header>{theme ? <img src={ligth} /> : <img src={dark} />}</header>
}

export default Header
