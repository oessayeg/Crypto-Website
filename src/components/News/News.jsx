import React from "react"
import AliceCarousel from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css'
import "../../style/News.css"

function News(props)
{
	return (
		<section id="news-section" style={{backgroundColor: props.darkMode ? "rgb(26, 26, 26)" : "#F5F5F5"}}>
			<h1 style={{textAlign: "center", margin: "0", paddingTop: "40px",
			fontFamily: "'Montserrat', sans-serif", fontSize: "26px", color : props.darkMode && "#F5F5F5"}}>Cryptocurrency World News</h1>
			{props.landingCarouselNews != null ? 
			<AliceCarousel autoPlay="true" animationType="fadeout" disableButtonsControls animationDuration={600}
			infinite="true" autoPlayInterval={5000}>
				{props.landingCarouselNews.filter(article => article.author != "Filip De Mott").map(article => {
					return (
						<div key={article.title} id="landing-news" style={{boxShadow: props.darkMode && "0px 0px 7px #555555"}}>
							<div id="landing-news-carousel-block" onClick={(e) => window.open(article.url, "_blank")}>
								<img style={{width: "100%", height: "100%"}} src={article.urlToImage}/>
								<div style={{position: "absolute", bottom : "20px"}}>
									<h1 style={{color:"#ffbf00", paddingLeft: "20px", paddingRight: "10%", fontSize: "35px", marginBottom: "0"}}>{article.title}</h1>
									<p style={{color:"white", paddingLeft: "20px", paddingRight: "10%", fontSize: "25px", marginTop: "5px"}}>{article.description}</p>
								</div>
								<p>Author: {article.author}</p>
							</div>
						</div> 
					);
				})}
			</AliceCarousel> : <h1>Loading</h1>}

			<div style={{marginBottom: "70px", fontFamily:"'Montserrat', sans-serif"}}>
				<h3 style={{marginLeft: "15px",color: props.darkMode && "#F5F5F5"}}>Blockchain</h3>
				{props.firstCarouselSubject != null ? 
				<AliceCarousel responsive={{ 0: {items : "3"}}} disableDotsControls="true" autoPlay="true" animationDuration={1000}
				autoPlayInterval={6000} infinite="true" style={{paddingLeft: "30px"}}>
					{props.firstCarouselSubject.filter(article => article.author != "msmash").map((article, index) => {
						return <div id="first-subject-news" key={article.description} onClick={(e) => {
							window.open(article.url, "_blank")
						}} style={{marginRight: "15px", marginLeft: "15px",
						backgroundColor: props.darkMode && "#333333", textDecorationColor: props.darkMode && "#F5F5F5"}}>
							<div id="first-subject-image-wrapper" height="250px">
								<img src={article.urlToImage} className="first-subject-images" loading="lazy"/>
							</div>
							<h2 style={{color: props.darkMode && "#F5F5F5"}}>{article.title}</h2>
							<p style={{color: props.darkMode && "#F5F5F5"}}>{article.description.slice(0, 130)}{article.description.length > 130 && "..."}</p>
							<p style={{color: props.darkMode && "#F5F5F5"}} className="news-author-auto">{article.author}</p>
							</div>
					})}
				</AliceCarousel> : <h1>Loading</h1>}
			</div>

			<div style={{marginBottom: "40px", marginTop: "70px", fontFamily:"'Montserrat', sans-serif" }}>
				<h3 style={{marginLeft: "15px", color: props.darkMode && "#F5F5F5"}}>Web3</h3>
				{props.secondCarouselSubject ? 
				<AliceCarousel responsive={{ 0: {items : "3"}}} disableDotsControls="true" autoPlay="true" animationDuration={1000}
				autoPlayInterval={5000} infinite="true" style={{paddingLeft: "30px"}} autoPlayDirection="rtl">
					{props.secondCarouselSubject.filter(article => article.author != "msmash").map((article, index) => {
						return <div key={index} id="first-subject-news" onClick={(e) => {
							window.open(article.url, "_blank")
						}} style={{marginRight: "15px", marginLeft: "15px", backgroundColor: props.darkMode && "#333333",
						textDecorationColor: props.darkMode && "#F5F5F5"}}>
							<div id="first-subject-image-wrapper" height="250px">
								<img src={article.urlToImage} className="first-subject-images" loading="lazy"/>
							</div>
							<h2 style={{color: props.darkMode && "#F5F5F5"}}>{article.title}</h2>
							<p style={{color: props.darkMode && "#F5F5F5"}}>{article.description.slice(0, 130)}{article.description.length > 130 && "..."}</p>
							<p className="news-author-auto" style={{color: props.darkMode && "#F5F5F5"}}>{article.author}</p>
							</div>
					})}
				</AliceCarousel> : <h1>Loading</h1>}
			</div>
			<h2 style={{color : props.darkMode ? "#F5F5F5" : "#333333", margin: "0",
				textAlign: "center", fontFamily: "'Montserrat', sans-serif" }}>All Breaking News</h2>
			<div id="all-news">
				{props.bitcoinNews && props.web3News ? 
				<>
					<div id="news-part">
						{props.bitcoinNews.filter(article => (article.author != "Deanna Ritchie" && article.author != "George Glover" && article.author != "msmash")).slice(0, 13).map(article => {
							return (
								<div key={article.url} id="all-news-section" onClick={(e) => window.open(article.url, "_blank")}
								style={{backgroundColor : props.darkMode && "#333333"}}>
									<img src={article.urlToImage} width="170px" loading="lazy"/>
									<div>
										<h3 style={{color : props.darkMode && "#f5f5f5"}}>{article.title}</h3>
										<p style={{color : props.darkMode && "#f5f5f5"}}>{article.description.substring(0, 130)}{article.description.length > 130 && "..."}</p>
									</div>
									<p  style={{fontStyle: "italic", color : props.darkMode && "#f5f5f5"}}>{article.author}</p>
								</div>
							);
						})}
					</div>
					<div id="news-part">
					{props.web3News.slice(0, 13).map(article => {
						return (
							<div key={article.url} id="all-news-section" onClick={(e) => window.open(article.url, "_blank")}
							style={{backgroundColor : props.darkMode && "#333333", textDecorationColor: props.darkMode && "#f5f5f5"}}>
								<img src={article.urlToImage} width="170px" loading="lazy"/>
								<div>
									<h3 style={{color : props.darkMode && "#f5f5f5"}}>{article.title}</h3>
									<p style={{color : props.darkMode && "#f5f5f5"}}>{article.description.substring(0, 130)}{article.description.length > 130 && "..."}</p>
								</div>
								<p style={{fontStyle: "italic", color : props.darkMode && "#f5f5f5"}}
								>{article.author.length > 60 ? "" : (article.author)}</p>
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