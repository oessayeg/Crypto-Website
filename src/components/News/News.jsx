import React, { useEffect, useState } from "react"
import bitcoin from "./Bitcoin"
import web3 from "./Web3"
import blockchain from "./Blockchain"
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from "react-alice-carousel"
import "../../style/News.css"

function News(props)
{
	const [bitcoinNews, setBitcoinNews] = useState(null);
	const [web3News, setWeb3News] = useState(null);
	const [blockchainNews, setBlockchainNews] = useState(null);
	const [landingCarousel, setLandingCarousel] = useState(null);
	const [firstSubjCarousel, setFirstSubjCarousel] = useState(null);
	const [secondSubjectCarousel, setSecondObjectCarousel] = useState(null);
	
	const [gotBitcoinNews, setGotBitcoinNews] = useState(false);
	const [gotWeb3News, setGotWeb3News] = useState(false);
	const [gotBlockchainNews, setGotBlockchainNews] = useState(false);
	const [gotLandingCarousel, setGotLandingCarousel] = useState(false);
	const [gotFirstSubjCarousel, setGotFirstSubjCarousel] = useState(false);
	const [gotSecondSubjectCarousel, setGotSecondSubjectCarousel] = useState(false);
	
	useEffect(() => {
		setBitcoinNews(bitcoin.articles.filter(article => (article.author && article.urlToImage)).slice(5));
		setLandingCarousel(bitcoin.articles.filter(article => (article.author && article.urlToImage)).slice(0, 5));
		setWeb3News(web3.articles.filter(article => (article.author && article.urlToImage)).slice(30));
		setBlockchainNews(blockchain.articles.filter(article => (article.author && article.urlToImage)).slice(8));
		setFirstSubjCarousel(blockchain.articles.filter(article => (article.author && article.urlToImage)).slice(0, 8));
		setSecondObjectCarousel(web3.articles.filter(article => (article.author && article.urlToImage)).slice(5, 12));
	}, []);

	useEffect(() => {
		if (firstSubjCarousel)
			setGotFirstSubjCarousel(true);
	}, [firstSubjCarousel]);

	useEffect(() => {
		if (bitcoinNews)
			setGotBitcoinNews(true);
	}, [bitcoinNews]);

	useEffect(() => {
		if (web3News)
		{
			setGotWeb3News(true);
			console.log(web3News);
		}
	}, [web3News]);

	useEffect(() => {
		if (blockchainNews)
			setBlockchainNews(true);
	}, [blockchainNews]);

	useEffect(() => {
		if (landingCarousel)
			setGotLandingCarousel(true);
	}, [landingCarousel]);

	useEffect(() => {
		if (secondSubjectCarousel)
			setGotSecondSubjectCarousel(true);
	}, [secondSubjectCarousel]);

	return (
		<section id="news-section">
			{/* <div id="first-carousel">
			{gotBitcoinNews ? <AliceCarousel style={{marginTop: "80px", marginBottom: "50px"}} autoPlay="true" animationDuration="500"  animationType="fadeout" autoPlayInterval="5000" infinite="true" 
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
						<img src={article.urlToImage} width="53%" height="57%" laoding="lazy"/>
					</div>
				)
			})}
			</AliceCarousel> : <h1>Loading</h1>}</div> */}
			{gotBitcoinNews ? 
			<div id="landing-news">
				<div className="big-news" onClick={(e) => window.open(landingCarousel[0].url, "_blank")}>
					<img style={{width: "100%", height: "450px"}} src={landingCarousel[0].urlToImage}/>
					<div style={{position: "absolute", bottom : "0"}}>
						<h1 style={{color:"#ffbf00", paddingLeft: "20px", paddingRight: "20px", fontSize: "35px", marginBottom: "0"}}>{landingCarousel[0].title}</h1>
						<p style={{color:"white", paddingLeft: "20px", paddingRight: "20px", fontSize: "25px", marginTop: "5px"}}>{landingCarousel[0].description}</p>
					</div>
				</div>
				<div id="landing-news-two">
					<div style={{height: "225px", position: "relative"}} onClick={(e) => window.open(landingCarousel[1].url, "_blank")}>
						<img style={{width: "100%", height : "100%"}} src={landingCarousel[1].urlToImage}/>
						<div>
							<h1>{landingCarousel[1].title}</h1>
						</div>
					</div>
					<div style={{height: "225px", position: "relative"}} onClick={(e) => window.open(landingCarousel[2].url, "_blank")}>
						<img style={{width: "100%", height: "100%"}} src={landingCarousel[2].urlToImage}/>
						<div>
							<h1>{landingCarousel[2].title}</h1>
						</div>
					</div>
				</div>
			</div> : <h1>Loading</h1>}
			{/* <hr style={{marginLeft: "10px", marginRight: "10px"}}></hr> */}

			<div style={{marginBottom: "70px", marginTop: "70px", fontFamily:"'Montserrat', sans-serif"}}>
				<h3 style={{marginLeft: "15px"}}>Blockchain</h3>
				{gotFirstSubjCarousel ? 
				<AliceCarousel responsive={{ 0: {items : "3"}}} disableDotsControls="true" autoPlay="true" animationDuration="1000"
				autoPlayInterval="6000" infinite="true" style={{paddingLeft: "30px"}}>
					{firstSubjCarousel.filter(article => article.author != "msmash").map((article, index) => {
						return <div id="first-subject-news" onClick={(e) => {
							window.open(article.url, "_blank")
						}} style={{marginRight: "15px", marginLeft: "15px"}}>
							<div id="first-subject-image-wrapper" height="250px">
								<img src={article.urlToImage} className="first-subject-images" loading="lazy"/>
							</div>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
							<p className="news-author-auto">{article.author}</p>
							</div>
					})}
				</AliceCarousel> : <h1>Loading</h1>}
			</div>

					{/* Second carousel */}
			<div style={{marginBottom: "70px", marginTop: "70px", fontFamily:"'Montserrat', sans-serif"}}>
				<h3 style={{marginLeft: "15px"}}>Web3</h3>
				{gotFirstSubjCarousel ? 
				<AliceCarousel responsive={{ 0: {items : "3"}}} disableDotsControls="true" autoPlay="true" animationDuration="1000"
				autoPlayInterval="5000" infinite="true" style={{paddingLeft: "30px"}} autoPlayDirection="rtl">
					{secondSubjectCarousel.filter(article => article.author != "msmash").map((article, index) => {
						return <div id="first-subject-news" onClick={(e) => {
							window.open(article.url, "_blank")
						}} style={{marginRight: "15px", marginLeft: "15px"}}>
							<div id="first-subject-image-wrapper" height="250px">
								<img src={article.urlToImage} className="first-subject-images" loading="lazy"/>
							</div>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
							<p className="news-author-auto">{article.author}</p>
							</div>
					})}
				</AliceCarousel> : <h1>Loading</h1>}
			</div>
			<div id="all-news">
				{gotBitcoinNews ? 
				<>
					<div id="news-part">
						{bitcoinNews.filter(article => (article.author != "Deanna Ritchie" && article.author != "George Glover" && article.author != "msmash")).slice(0, 13).map(article => {
							return (
								<div id="all-news-section" onClick={(e) => window.open(article.url, "_blank")}>
									<img src={article.urlToImage} width="170px" loading="lazy"/>
									<div>
										<h3>{article.title}</h3>
										<p>{article.description.substring(0, 130)}</p>
									</div>
									<p  style={{fontStyle: "italic"}}>{article.author}</p>
								</div>
							);
						})}
					</div>
					<div id="news-part">
					{web3News.slice(0, 13).map(article => {
						return (
							<div id="all-news-section" onClick={(e) => window.open(article.url, "_blank")}>
								<img src={article.urlToImage} width="170px" loading="lazy"/>
								<div>
									<h3>{article.title}</h3>
									<p>{article.description.substring(0, 130)}</p>
								</div>
								<p  style={{fontStyle: "italic"}}>{article.author.length > 60 ? "" : (article.author)}</p>
							</div>
						);
					})}
					</div>
					</> : <h1>Loading</h1>
				}
			</div>
			
		</section>
	);
}

export default News;