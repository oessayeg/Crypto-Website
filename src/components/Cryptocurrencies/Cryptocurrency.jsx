import React, { useState } from "react"
import { useEffect } from "react"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import coins from "../Home/Data.js"
import "../../style/Cryptocurrency.css"

function Cryptocurrency(props) {

	const [randomCoins, setRandomCoins] = useState(null);
	const [gotRandomCoins, setGotRandomCoins] = useState(false);

	useEffect(() => {
		setRandomCoins(coins.slice(13, 20));
	}, []);

	useEffect(() => {
		if (randomCoins)
		{
			setGotRandomCoins(true);
			console.log(randomCoins);
		}
	}, [randomCoins]);

	return (
		<div id="crypto-market-block">
			<div id="crypto-page-header">
				<h1>Crypto Website Market Data</h1>
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
								<h3>{coin.symbol}</h3>
								{/* <h3>{coin.current_price}</h3> */}
							</div>
						</div>
					);
				})}
				</AliceCarousel>
				: <h1>Loading</h1>}
			</div>
		</div>
	);

}

export default Cryptocurrency;