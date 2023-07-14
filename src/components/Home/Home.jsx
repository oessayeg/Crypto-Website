import React from "react"
import heroImage from "./heroImage.gif"
import "../../style/Home.css"
import { Link } from "react-router-dom"
import news from "./newspaper.png"
import time from "./time.png"
import handshake from "./handshake.png"
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import crData from "./Data"
import { useEffect } from "react"
import { useState } from "react"
import Paper from '@mui/material/Paper'
import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"

const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
	  x: {
		display: false, // Remove the x-axis
	  },
	  y: {
		display: false, // Remove the y-axis
	  },
	},
	plugins: {
	  legend: {
		display: false, // Remove the legend
	  },
	  tooltip: {
		enabled: false, // Disable tooltips
	  },
	},
  };

// Colors
// blue : #0074D9
// text : #333333
// background : #F9F9F9
// gold : #FFD700
// green : #2ECC40

function Home(props) {

	const [data, setData] = useState(null);
	const [gotData, setGotData] = useState(false);

	useEffect(() => {
		setData(crData);
	}, []);

	useEffect(() => {
		if (data)
		{
			console.log(data);
			setGotData(true);
		}
	}, [data]);

	return (
		<main>
			<div id="hero">
				<div id="hero-text">
					<h2>Read cryptocurrency news and track market data,&nbsp; easily.</h2>
					<p>Stay updated, seize opportunities, and conquer the crypto world!</p>
					<div id="call-to-action-buttons">
						<Link to="/news">News</Link>
						<Link to="/cryptocurrencies">Market</Link>
					</div>
				</div>
					<img src={heroImage}/>
			</div>
			<div id="call-to-use">
				<h4>Why choose Crypto Website ?</h4>
				<h2>Unlock the power of crypto with real-time market data and breaking news !</h2>
				<div id="why-points">
					<div className="first-point">
						<img src={news} width="64px"/>
						<div>
							<h3>Curated crypto news</h3>
							<p>Stay ahead of the curve with our curated crypto news. Get access to in-depth articles, and breaking news from the world of cryptocurrencies.</p>
						</div>
					</div>
					<div className="second-point">
						<img src={time} width="64px"/>
						<div>
							<h3>Real time prices</h3>
							<p>Never miss out on important market movements or opportunities. Stay in control and act quickly to capitalize on favorable market conditions.</p>
						</div>
					</div>
					<div className="third-point">
						<img src={handshake} width="64px"/>
						<div>
							<h3>User friendly</h3>
							<p>Experience a user-friendly interface designed to simplify your crypto journey. Access data and news effortlessly.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="crypto-data-examples">
				<div id="crypto-data-example-head">
					<h4>Popular cryptocurrencies</h4>
					<Link to="cryptocurrencies">See all</Link>
				</div>
				<TableContainer  component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="Table of crypto market data">
						<TableHead>
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
					<TableBody>
						{
							!gotData ? <p>Waiting for data</p> :

							data.slice(0, 5).map(coin => {
								return (
								<TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component="th" scope="row">
											<div id="coin-name-block">
												<img src={coin.image} width="32px" height="32px"/>
												<p>{coin.name}</p>
											</div>
										</TableCell>
										<TableCell align="right">$ {coin.current_price > 1 ? coin.current_price.toFixed(2) : coin.current_price.toFixed(5)}</TableCell>
										<TableCell align="right" >{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</TableCell>
										<TableCell align="right" >{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</TableCell>
										<TableCell align="right" >{coin.price_change_percentage_30d_in_currency.toFixed(2)}%</TableCell>
										<TableCell align="right" >{coin.total_volume}</TableCell>
										<TableCell align="right" >$ {Math.ceil(coin.current_price * coin.circulating_supply)}</TableCell>
										<TableCell align="right" style={{paddingRight: "0"}}>
											<div style={{display: "flex", justifyContent: "center"}}>
											<div style={{width:"120px", height:"50px", display: "flex"}}>
												<Line data={{
													labels : Array.from({ length: coin.sparkline_in_7d.price.length }, (_, index) => index + 1),
													datasets : [
														{
																label: 'Sales',
																data: coin.sparkline_in_7d.price,
																borderColor: coin.price_change_percentage_7d_in_currency > 0 ? '#5cf7ac' : '#fa1148',
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
							})
							
						}
					</TableBody>
					</Table>
				</TableContainer>
			</div>
		</main>
	);

}

export default Home;