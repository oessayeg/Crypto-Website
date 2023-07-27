import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { Chart } from "chart.js/auto"
import { Link } from "react-router-dom"
import { Line } from "react-chartjs-2"
import Paper from '@mui/material/Paper'
import React from "react"
import newsData from "./data/News.js"
import handshake from "./images/handshake.png"
import heroImage from "./images/heroImage.png"
import news from "./images/newspaper.png"
import time from "./images/time.png"
import crData from "./data/data2"
import coinGecko from "./images/coinGeckoIcon.png"
import newsApi from "./images/newsApiIcon.png"
import whiteArrowRight from "./images/arrow.png"
import "../../style/Home.css"

// Colors
// blue : #0074D9
// text : #333333
// background : #F9F9F9 or #F5F5F5
// gold : #FFD700, #ffbf00
// #333333 : #2ECC40

// black mode
// background : #1a1a1a
// text : #f5f5f5 
// main.. : #222222
// gold : #ffa500, #ffbf00

const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
	  x: {
		display: false, 
	  },
	  y: {
		display: false, 
	  },
	},
	plugins: {
	  legend: {
		display: false, 
	  },
	  tooltip: {
		enabled: false,
	  },
	},
  };


function Home(props) {

	const mainStyles = {
		paddingLeft: "40px",
		paddingRight: "40px",
		paddingBottom: "70px",
		backgroundColor: props.darkMode ? "#1A1A1A" : "#F5F5F5",
		transition : "background-color 1s ease"
	};

	return (
		<main style={mainStyles}>
			<div id="hero">
				<div id="hero-text">
					<h2 style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Read cryptocurrency news and track market data,&nbsp; <span className="easy-word">easily.</span></h2>
					<p style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Stay updated, seize opportunities, and conquer the crypto world !</p>
					<div id="call-to-action-buttons">
						<Link to="/cryptocurrencies" onClick={(e) => window.scrollTo({top : 0})}>Market</Link>
						<Link to="/news" onClick={(e) => window.scrollTo({top : 0})}>News</Link>
					</div>
				</div>
					<img src={heroImage} width="555px" height="555px"/>
			</div>
			<hr style={{borderBottom: "none", borderLeft: "none", borderRight: "none", borderTop: props.darkMode ? "1px solid grey" : "1px solid #333333"}}></hr>
			<div id="call-to-use">
				<h4 style={!props.darkMode ? {color: "#333333"} : {color : "#F5F5F5"}}>Why choose CryptoQuick ?</h4>
				<h2 style={!props.darkMode ? {color: "#333333"} : {color : "#F5F5F5"}}>Unlock the power of crypto with real-time market data and breaking news !</h2>
				<div id="why-points">
					<div className="first-point" style={{backgroundColor : props.darkMode ? "#333333" : "white"}}>
						<img src={news} width="64px"/>
						<div>
							<h3 style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Curated crypto news</h3>
							<p style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Stay ahead of the curve with our curated crypto news. Get access to in-depth articles, and breaking news from the world of cryptocurrencies.</p>
						</div>
					</div>
					<div className="second-point" style={{backgroundColor : props.darkMode ? "#333333" : "white"}}>
						<img src={time} width="64px"/>
						<div>
							<h3 style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Real time prices</h3>
							<p style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Never miss out on important market movements or opportunities. Stay in control and act quickly to capitalize on favorable market conditions.</p>
						</div>
					</div>
					<div className="third-point" style={{backgroundColor : props.darkMode ? "#333333" : "white"}}>
						<img src={handshake} width="64px"/>
						<div>
							<h3 style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>User friendly</h3>
							<p style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Experience a user-friendly interface designed to simplify your crypto journey. Access data and news effortlessly.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="crypto-data-examples">
				<div id="crypto-data-example-head">
					<h3 style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Popular cryptocurrencies</h3>
					<Link to="cryptocurrencies" onClick={(e) => window.scrollTo({top: 0})}>See all <img src={whiteArrowRight}/></Link>
				</div>
				{props.cryptoData != null ? 
				<TableContainer  component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="Table of crypto market data">
						<TableHead style={{backgroundColor: "#ffbf00"}}>
							<TableRow>
								<TableCell><strong>Coin</strong></TableCell>
								<TableCell align="right"><strong>Price</strong></TableCell>
								<TableCell align="right"><strong>1h</strong></TableCell>
								<TableCell align="right"><strong>7d</strong></TableCell>
								<TableCell align="right"><strong>30d</strong></TableCell>
								<TableCell align="right"><strong>Volume</strong></TableCell>
								<TableCell align="right"><strong>Mkt cap</strong></TableCell>
								<TableCell align="center" style={{paddingRight: "0"}}><strong>Last 7 days</strong></TableCell>
							</TableRow>
						</TableHead>
					<TableBody style={{borderBottom : props.darkMode ? "1px solid grey" : ""}}>
							{props.cryptoData.map((coin, index) => {
								return (
								<TableRow key={index} style={{backgroundColor : props.darkMode ? "#1a1a1a" : "white"}} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
										<TableCell component="th" scope="row" style={{padding: "8px", paddingLeft : "16px", fontFamily: "'Montserrat', sans-serif", borderColor: props.darkMode ? "grey" : ""}}>
											<div id="coin-name-block">
												<img src={coin.image} width="32px" height="32px"/>
												<p style={{color : props.darkMode ? "#F5F5F5" : ""}}>{coin.name}</p>
											</div>
										</TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", color: props.darkMode ? "#F5F5F5" : "#333333", borderColor: props.darkMode ? "grey" : ""}}>${coin.current_price > 1 ? coin.current_price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : coin.current_price.toFixed(5)}</TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", borderColor: props.darkMode ? "grey" : ""}}><span style={{color : coin.price_change_percentage_1h_in_currency > 0 ? "#2ECC40" : "#f71414"}}>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</span></TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", borderColor: props.darkMode ? "grey" : ""}}><span style={{color : coin.price_change_percentage_7d_in_currency > 0 ? "#2ECC40" : "#f71414"}}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</span></TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", borderColor: props.darkMode ? "grey" : ""}}><span style={{color : coin.price_change_percentage_30d_in_currency > 0 ? "#2ECC40" : "#f71414"}}>{coin.price_change_percentage_30d_in_currency.toFixed(2)}%</span></TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", color: props.darkMode ? "#F5F5F5" : "#333333", borderColor: props.darkMode ? "grey" : ""}}>${coin.total_volume.toLocaleString().replaceAll(/\s/g, ",")}</TableCell>
										<TableCell align="right" style={{padding: "8px", fontFamily: "'Montserrat', sans-serif", color: props.darkMode ? "#F5F5F5" : "#333333", borderColor: props.darkMode ? "grey" : ""}}>${Math.ceil(coin.current_price * coin.circulating_supply).toLocaleString().replaceAll(/\s/g, ',')}</TableCell>
										<TableCell align="right" style={{paddingRight: "0", paddingTop: "8px", paddingBottom: "8px", paddingLeft: "8px",  borderColor: props.darkMode ? "grey" : ""}}>
											<div style={{display: "flex", justifyContent: "center"}}>
												<div style={{width:"120px", height:"50px", display: "flex"}}>
													<Line data={{
														labels : Array.from({ length: coin.sparkline_in_7d.price.length }, (_, index) => index + 1),
														datasets : [
															{
																	label: 'Sales',
																	data: coin.sparkline_in_7d.price,
																	borderColor: coin.price_change_percentage_7d_in_currency > 0 ? '#2ECC40' : '#f71414',
																	borderWidth: 1.5, // Optional: Border width of the bars/points
																	pointRadius: 0,
															}
														]
													}} options={options}/>
												</div>
											</div>
										</TableCell>
									</TableRow>
								)
							})}
					</TableBody>
					</Table>
				</TableContainer> : <h1>Loading</h1>}
			</div>
			<div id="news-example">
				<div id="news-header">
						<h3 style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>News</h3>
						<Link to="/news" onClick={(e) => window.scrollTo({top : 0})}>See all <img src={whiteArrowRight}/> </Link>
				</div>
				{!props.newsExample ? <h1>Waiting for the news api</h1> :
				<div id="some-news">
					<div onClick={() => window.open(props.newsExample[0].url, "_blank")} style={
						{backgroundColor: props.darkMode ? "#333333" : "white", textDecorationColor: props.darkMode ? "#F5F5F5" : "#333333" }}>
						<img src={props.newsExample[0].urlToImage}/>
						<h2 style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[0].title}</h2>
						<p style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[0].description}</p>
						<h5 style={{margin : "0", color: props.darkMode ? "#f5f5f5" : "#333333"}}>Author : {props.newsExample[0].author}</h5>
					</div>
					<div onClick={() => window.open(props.newsExample[1].url, "_blank")} style={
						{backgroundColor: props.darkMode ? "#333333" : "white", textDecorationColor: props.darkMode ? "#F5F5F5" : "#333333"}}>
						<img src={props.newsExample[1].urlToImage}/>
						<h2 style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[1].title}</h2>
						<p style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[1].description}</p>
						<h5 style={{margin : "0", color: props.darkMode ? "#f5f5f5" : "#333333"}}>Author : {props.newsExample[1].author}</h5>
					</div>
					<div onClick={() => window.open(props.newsExample[2].url, "_blank")} style={
						{backgroundColor: props.darkMode ? "#333333" : "white", textDecorationColor: props.darkMode ? "#F5F5F5" : "#333333"}}>
						<img src={props.newsExample[2].urlToImage}/>
						<h2 style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[2].title}</h2>
						<p style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>{props.newsExample[2].description}</p>
						<h5 style={{margin : "0", color: props.darkMode ? "#f5f5f5" : "#333333"}}>Author : {props.newsExample[2].author}</h5>
					</div>
				</div>
				}
			</div>
			<hr style={{borderBottom: "none", borderLeft: "none", borderRight: "none", borderTop: props.darkMode ? "1px solid grey" : "1px solid #333333"}}></hr>
			<div id="used-apis">
				<h2 align="center" style={{color: props.darkMode ? "#f5f5f5" : "#333333"}}>Used apis</h2>
				<div id="api-icons">
					<a href="https://www.coingecko.com/en/api" target="_blank" style={{display: "flex", alignItems: "center", gap: "20px"}}><img src={coinGecko} width="64px" height="64px"/><strong style={{color : props.darkMode ? "#F5F5F5" : "#333333", fontSize: "25px"}}>CoinGecko</strong></a>
					<a href="https://newsapi.org/" target="_blank"><img src={newsApi} width="220px"/></a>
				</div>
			</div>
		</main>
	);
}

export default Home;