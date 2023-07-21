import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import News from "./components/News/News"
import Cryptocurrency from "./components/Cryptocurrencies/Cryptocurrency"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./style/Global.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode}/>} />
      <Route path="/news" element={<News darkMode={darkMode}/>} />
      <Route path="/cryptocurrencies" element={<Cryptocurrency darkMode={darkMode}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
