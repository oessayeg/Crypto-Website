import React, { useEffect, useState } from "react";
import bitcoin from "./Bitcoin";
import web3 from "./Web3";
import blockchain from "./Blockchain";

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
		<h1>Hello from news</h1>
	);

}

export default News;