import React, { useEffect, useState } from "react"
import bitcoin from "./Bitcoin"
import web3 from "./Web3"
import blockchain from "./Blockchain"
import icon1 from "../Home/time4.png"
import icon2 from "../Home/newspaper2.png"
import icon3 from "../Home/handshake2.png"
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from "react-alice-carousel"
import "../../style/News.css"

function News(props)
{
	const [bitcoinNews, setBitcoinNews] = useState(null);
	const [web3News, setWeb3News] = useState(null);
	const [blockchainNews, setBlockchainNews] = useState(null);
	const [landingCarousel, setLandingCarousel] = useState(null);

	const [gotBitcoinNews, setGotBitcoinNews] = useState(false);
	const [gotWeb3News, setGotWeb3News] = useState(false);
	const [gotBlockchainNews, setGotBlockchainNews] = useState(false);
	const [gotLandingCarousel, setGotLandingCarousel] = useState(false);

	useEffect(() => {
		setBitcoinNews(bitcoin.articles.filter(article => (article.author && article.urlToImage)).slice(5));
		setLandingCarousel(bitcoin.articles.filter(article => (article.author && article.urlToImage)).slice(0, 5))
		setWeb3News(web3.articles.filter(article => (article.author && article.urlToImage)));
		setBlockchainNews(blockchain.articles.filter(article => (article.author && article.urlToImage)));
	}, []);

	useEffect(() => {
		if (bitcoinNews)
		{
			setGotBitcoinNews(true);
			console.log(bitcoinNews);
		}
	}, [bitcoinNews]);

	useEffect(() => {
		if (web3News)
			setGotWeb3News(true);
	}, [web3News]);

	useEffect(() => {
		if (blockchainNews)
			setBlockchainNews(true);
	}, [blockchainNews]);

	useEffect(() => {
		if (landingCarousel)
			setGotLandingCarousel(true);
	}, [landingCarousel]);

	return (
		<section id="news-section">
			{gotBitcoinNews ? <AliceCarousel  autoPlay="true" animationDuration="500"  animationType="fadeout" autoPlayInterval="1000" infinite="true" 
			disableDotsControls="true" disableButtonsControls="true">
				{landingCarousel.map(article => {
				return (
					<div id="carousel-image-block">
						<div id="carousel-infos">
							<h1>{article.title}</h1>
							<p className="carousel-news-description">{article.description}</p>
							<div id="carousel-side-infos">
								<p>Author : {article.author}</p>
								<p> Source : {article.source.name}</p>
							</div>
						</div>
						<img src={article.urlToImage} width="51%" height="55%"/>
					</div>
				)
			})}
			</AliceCarousel> : <h1>Loading</h1>}
			<hr></hr>
			<div>
				<h3>Blockchain</h3>
				<AliceCarousel>

				</AliceCarousel>
			</div>
		</section>
	);
}

export default News;