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
    // -------- Cryptocurrencies --------
    let cryptoData = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=130&page=1&sparkline=true&price_change_percentage=1h%2C7d%2C30d&locale=en');

    cryptoData
      .then(data => data.json())
      .then(data => {
          setCryptoData(data);
      })
      .catch(error => {
          setCryptoData(coins)
      })

    // For testing 
    // setCryptoData(coins);
    
    // --------- Bitcoin ---------
    let bitcoinData = fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&language=en&apiKey=1f0eb4f69e0a4838ac708150df989729');
    bitcoinData
      .then(data => data.json())
      .then(data => {
        setBitcoinNews(data.articles.filter(article => article.author && article.urlToImage));
      })

    // For testing
    // setBitcoinNews(bitcoin.articles.filter(article => article.author && article.urlToImage));

    // ------- Web3 --------
    let web3Data = fetch('https://newsapi.org/v2/everything?q=web3&sortBy=popularity&language=en&apiKey=1f0eb4f69e0a4838ac708150df989729');
    
    web3Data
      .then(data => data.json())
      .then(data => {
      setWeb3News(data.articles.filter(article => article.author && article.urlToImage));
    });
    
    // For testing
    // setWeb3News(web3.articles.filter(article => article.author && article.urlToImage));

    // ------------ Blockchain -------------

    let blockchainData = fetch('https://newsapi.org/v2/everything?q=blockchain&sortBy=popularity&language=en&apiKey=1f0eb4f69e0a4838ac708150df989729');

    blockchainData
      .then(data => data.json())
      .then(data => {
        setBlockchainNews(data.articles.filter(article => article.author != "Justine Calma"  && article.author && article.urlToImage))
      });

    // For testing
    // setBlockchainNews(blockchain.articles.filter(article => article.author && article.urlToImage));
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
      <Route path="/" element={<Home darkMode={darkMode} cryptoData={cryptoData.length > 0 ? cryptoData.slice(0, 7) : null} newsExample={bitcoinNews ? bitcoinNews.slice(0, 40) : null}/>} />
      <Route path="/news" element={<News darkMode={darkMode} bitcoinNews={bitcoinNews != null ? bitcoinNews.slice(5) : null} blockchainNews={blockchainNews != null ? blockchainNews : null}
        web3News={web3News != null ? web3News.slice(20) : null} landingCarouselNews={bitcoinNews != null ? bitcoinNews.slice(0, 4) : null}
        firstCarouselSubject={blockchainNews != null ? blockchainNews.slice(0, 8) : null} secondCarouselSubject={web3News != null ? web3News.slice(6, 14) : null}/>} />
      <Route path="/cryptocurrencies" element={<Cryptocurrency darkMode={darkMode} coins={cryptoData} isDataReady={isDataReady} carouselCoins={carouselCoins} gotCarouselCoins={gotCarouselCoins}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
