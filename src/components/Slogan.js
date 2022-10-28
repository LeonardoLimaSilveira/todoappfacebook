import React from 'react'
import { GlobalContext } from './ThemeContext'
import './Slogan.css'
import { ReactComponent as Moon } from '../assets/todo-app-main/images/icon-moon.svg'
import { ReactComponent as Sun } from '../assets/todo-app-main/images/icon-sun.svg'

const Teste = () => {
  const [dark, setDark] = React.useContext(GlobalContext)

  React.useEffect(() => {
    if (localStorage.key('theme')) {
      setDark(JSON.parse(localStorage.getItem('theme')))
    }
  }, [])
  return (
    <div className={'slogan'}>
      <h1>Todo</h1>
      <GlobalContext.Provider value={(dark, setDark)}>
        <span
          onClick={() => {
            window.localStorage.setItem('theme', !dark)
            setDark(JSON.parse(localStorage.getItem('theme')))
          }}
        >
          {dark ? <Moon /> : <Sun />}
        </span>
      </GlobalContext.Provider>
    </div>
  )
}

export default Teste
