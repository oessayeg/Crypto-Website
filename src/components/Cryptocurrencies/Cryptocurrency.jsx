import React, { useState } from "react"
import { useEffect } from "react"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import coins from "../Home/Data.js"
import "../../style/Cryptocurrency.css"
import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import Paper from '@mui/material/Paper'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

function Cryptocurrency(props) {

	const [randomCoins, setRandomCoins] = useState(null);
	const [gotRandomCoins, setGotRandomCoins] = useState(false);

	useEffect(() => {
		setRandomCoins(coins.slice(0, 8));
	}, []);

	useEffect(() => {
		if (randomCoins)
		{
			setGotRandomCoins(true);
			console.log(randomCoins);
		}
	}, [randomCoins]);

	function priceColor(price) {
		return {color : price > 0 ? "green" : "red"};
	}
	return (
		<div id="crypto-market-block">
			<div id="crypto-page-header">
				<h1>Crypto Market Data</h1>
				<p>Stay updated and track your favorite cryptocurrency</p>
			</div>
			<div id="trending-coins-carousel">
				{gotRandomCoins ? 
				<AliceCarousel responsive={{
					0: {
						items: 1,
					},
					1024: {
						items: 4,
						itemsFit: 'contain',
					}
				}} autoPlay="true" infinite="true" autoPlayInterval={2000}
				disableButtonsControls="true" disableDotsControls="true" animationDuration={1500}>
				{randomCoins.map(coin => {
					return (
						<div id="trending-coins-block">
							<img src={coin.image} width="110px" height="110px"/>	
							<div>
								<div>
									<h3>{coin.symbol}</h3>
									<p style={{color : coin.price_change_percentage_24h > 0 ? "#139c23" : "red"}}>{coin.price_change_percentage_24h > 0 && "+"}{coin.price_change_percentage_24h.toFixed(3)}%</p>
								</div>
								<h4>$ {coin.current_price.toFixed(3)}</h4>
							</div>
						</div>
					);
				})}
				</AliceCarousel>
				: <h1>Loading</h1>}
			</div>
			<div id="all-coins-data">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Cryptocurrencies market infos">
					<TableHead style={{backgroundColor: "#ffbf00"}}>
						<TableRow>
							<TableCell>Coin</TableCell>
							<TableCell align="right"><strong>Price</strong></TableCell>
							<TableCell align="right"><strong>1h</strong></TableCell>
							<TableCell align="right"><strong>7d</strong></TableCell>
							<TableCell align="right"><strong>30d</strong></TableCell>
							<TableCell align="right"><strong>Volume</strong></TableCell>
							<TableCell align="right"><strong>Mkt cap</strong></TableCell>
							<TableCell align="right"><strong>Last 7 days</strong></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
							{coins.map((coin) => (
								<TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell>
										<div id="coin-icon-block">
											<img src={coin.image} width="40px"/>
											{coin.name}
										</div>
									</TableCell>
									<TableCell align="right">${coin.current_price.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_1h_in_currency)}>{coin.price_change_percentage_1h_in_currency > 0 && "+"}{Number(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_7d_in_currency)}>{coin.price_change_percentage_7d_in_currency > 0 && "+"}{Number(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_30d_in_currency)}>{coin.price_change_percentage_30d_in_currency > 0 && "+"}{Number(coin.price_change_percentage_30d_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right">${coin.total_volume.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</TableCell>
									<TableCell align="right">${coin.market_cap.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</TableCell>
									<TableCell align="right">Wait for me</TableCell>
								</TableRow>
							))}
        </TableBody>
				</Table>
		</TableContainer>
			</div>
		</div>
	);

}

export default Cryptocurrency;