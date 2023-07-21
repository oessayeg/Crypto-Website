import React, { useState } from "react"
import { useEffect } from "react"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import coins from "../Home/Data.js"
import "../../style/Cryptocurrency.css"
import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import Paper from '@mui/material/Paper'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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


function Cryptocurrency(props) {

	const [randomCoins, setRandomCoins] = useState(null);
	const [gotRandomCoins, setGotRandomCoins] = useState(false);
	const [page, setPage] = useState(1);
	const [searchPattern, setSearchPattern] = useState("");

	useEffect(() => {
		setRandomCoins(coins.slice(0, 8));
	}, []);

	useEffect(() => {
		if (randomCoins)
			setGotRandomCoins(true);
	}, [randomCoins]);

	function priceColor(price) {
		return {fontFamily: "'Montserrat', sans-serif", color : price > 0 ? "#139c23" : "#f71414"};
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
									<p style={{color : coin.price_change_percentage_24h > 0 ? "#139c23" : "#f71414"}}>{coin.price_change_percentage_24h > 0 && "+"}{coin.price_change_percentage_24h.toFixed(3)}%</p>
								</div>
								<h4>$ {coin.current_price.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</h4>
							</div>
						</div>
					);
				})}
				</AliceCarousel>
				: <h1>Loading</h1>}
			</div>
			<div id="input-box">
				<input type="text" required spellCheck="false" onChange={(e) => {
					setSearchPattern(e.target.value);
					setPage(1);
					}}/>
				<span>Search for a cryptocurrency</span>
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
							<TableCell align="center"><strong>Last 7 days</strong></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
							{coins.filter(coin => coin.name.toLowerCase().includes(searchPattern.toLowerCase())).slice((page - 1) * 13, (page - 1) * 13 + 13).map((coin) => (
								<TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell>
										<div id="coin-icon-block">
											<img src={coin.image} width="40px"/>
											<div>
												<p style={{fontFamily: "'Montserrat', sans-serif", margin: "0"}}>{coin.symbol.toUpperCase()}</p>
												<p style={{fontFamily: "'Montserrat', sans-serif", margin: "0"}}>{coin.name}</p>
											</div>
										</div>
									</TableCell>
									<TableCell align="right"  style={{fontFamily: "'Montserrat', sans-serif"}}>${coin.current_price > 1 ? coin.current_price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : coin.current_price.toFixed(5)}</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_1h_in_currency)}>{coin.price_change_percentage_1h_in_currency > 0 && "+"}{Number(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_7d_in_currency)}>{coin.price_change_percentage_7d_in_currency > 0 && "+"}{Number(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right" style={priceColor(coin.price_change_percentage_30d_in_currency)}>{coin.price_change_percentage_30d_in_currency > 0 && "+"}{Number(coin.price_change_percentage_30d_in_currency).toFixed(2)}%</TableCell>
									<TableCell align="right" style={{fontFamily: "'Montserrat', sans-serif"}}>${coin.total_volume.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</TableCell>
									<TableCell align="right" style={{fontFamily: "'Montserrat', sans-serif"}}>${coin.market_cap.toLocaleString().replaceAll(",", ".").replaceAll(/\s+/g, ",")}</TableCell>
									<TableCell align="right" style={{fontFamily: "'Montserrat', sans-serif"}}>
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
							))}
        </TableBody>
				</Table>
		</TableContainer>
			</div>
			<div id="pagination">
				<Stack spacing={2}>
					<Pagination count={(coins.filter(coin => coin.name.toLowerCase().includes(searchPattern.toLowerCase())).length / 13).toFixed(0)} onChange={(e, value) => {setPage(value)}}/>
				</Stack>
			</div>
		</div>
	);

}

export default Cryptocurrency;