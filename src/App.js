import React from 'react'
import Header from './components/Header'
import './App.css'
import Slogan from './components/Slogan'
import { ThemeChange } from './components/ThemeContext'
import Type from './components/Type'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeChange>
      <Header />
      <Slogan />
      <Type />
      <Footer />
    </ThemeChange>
  )
}

export default App
