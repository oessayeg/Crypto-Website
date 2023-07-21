import React, { useState } from "react"
import "../../style/Header.css"
import { Link } from "react-router-dom"
import lightModeWhite from "./images/lightMode2.png"
import lightModeBlack from "./images/lightMode.png"
import nightModeWhite from "./images/nightMode.png"
import nightModeBlack from "./images/nightModeBlack.png"
import ethereum from "./images/binanceIcon.png"

function Header(props) {
	// The header will have its own color and the background a little bit similar	
	const [isHovered, setIsHovered] = useState(false);

	return (
		<header style={props.darkMode ? {backgroundColor: "#333333", boxShadow:" 0px 1px 5px white"} : {backgroundColor: "#F5F5F5"}}>
			<div>
				<img src={ethereum} width="50px"></img>
				<Link to="/">Crypto Website</Link>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/cryptocurrencies">Market</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li onClick={(e) => props.setDarkMode(!props.darkMode)} className="last-li" onMouseMove={(e) => setIsHovered(true)} onMouseLeave={(e) => setIsHovered(false)}>
					<img src={!isHovered ? nightModeWhite : nightModeBlack} width="23px"/>
				</li>
			</ul>
		</header>
	);
}

export default Header;