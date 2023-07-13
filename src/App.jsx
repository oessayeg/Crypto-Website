import React from "react"
import { Route, Routes } from "react-router-dom"
import News from "./components/News/News"
import Cryptocurrency from "./components/Cryptocurrencies/Cryptocurrency"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrency />} />
    </Routes>
    </>
  )
}

export default App
