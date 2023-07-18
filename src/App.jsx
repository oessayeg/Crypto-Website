import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import News from "./components/News/News"
import Cryptocurrency from "./components/Cryptocurrencies/Cryptocurrency"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./style/Global.css"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrency />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
