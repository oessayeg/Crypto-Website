import React from "react";
import "../../style/Header.css";
import { Link } from "react-router-dom";
import lightMode from "./images/lightMode2.png";

function Header() {
	// The header will have its own color and the background a little bit similar	
	return (
		<header>
			<div>
				{/* <img></img> */}
				<Link to="/">Crypto Website</Link>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/cryptocurrencies">Market</Link>
				</li>
				<li className="last-li">
					<img src={lightMode} width="23px"/>
				</li>
			</ul>
		</header>
	);
}

export default Header;