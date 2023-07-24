import React, { useEffect, useState } from "react"
import { json, Route, Routes } from "react-router-dom"
import News from "./components/News/News"
import Cryptocurrency from "./components/Cryptocurrencies/Cryptocurrency"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./style/Global.css"

// To remove after using the api
import coins from "./components/Home/data/data2.js"
import bitcoin from "./components/News/data/Bitcoin"
import web3 from "./components/News/data/Web3"
import blockchain from "./components/News/data/Blockchain"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [cryptoData, setCryptoData] = useState([]);
  const [carouselCoins, setCarouselCoins] = useState([]);

  const [isDataReady, setIsDataReady] = useState(false);
  const [gotCarouselCoins, setGotCarouselCoins] = useState(false);

  // Data
  const [bitcoinNews, setBitcoinNews] = useState(null);
  const [blockchainNews, setBlockchainNews] = useState(null);
  const [web3News, setWeb3News] = useState(null);

  useEffect(() => {
    // let cryptoData = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=130&page=1&sparkline=true&price_change_percentage=1h%2C7d%2C30d&locale=en');

    // cryptoData
    //   .then(data => data.json())
    //   .then(data => {
    //       setCryptoData(data);
    //   })
    // setCryptoData(coins);

    // Just for the test
    setCryptoData(coins);
    setBitcoinNews(bitcoin);
    setWeb3News(web3);
    setBlockchainNews(blockchain);
  }, []);


  useEffect(() => {
    if (cryptoData.length > 0)
    {
      setIsDataReady(true);
      setCarouselCoins(cryptoData.slice(23, 31));
    }
  }, [cryptoData]);

  useEffect(() => {
    if (carouselCoins.length > 0)
      setGotCarouselCoins(true);
  }, [carouselCoins]);

  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode}/>} />
      <Route path="/news" element={<News darkMode={darkMode} bitcoinNews={bitcoinNews} blockchainNews={blockchainNews} web3News={web3News}/>} />
      <Route path="/cryptocurrencies" element={<Cryptocurrency darkMode={darkMode} coins={cryptoData} isDataReady={isDataReady} carouselCoins={carouselCoins} gotCarouselCoins={gotCarouselCoins}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
