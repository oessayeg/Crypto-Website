import React from "react"
import heroImage from "./heroImage.gif"
import "../../style/Home.css"
import { Link } from "react-router-dom"
import news from "./newspaper.png"
import time from "./time.png"
import handshake from "./handshake.png"

// Colors 
// blue : #0074D9
// text : #333333
// background : #F9F9F9
// gold : #FFD700
// green : #2ECC40

function Home(props) {

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
		</main>
	);

}

export default Home;