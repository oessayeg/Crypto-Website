import React, { useState } from "react"
import "../../style/Header.css"
import { Link } from "react-router-dom"
import lightModeWhite from "./images/lightModeWhite.png"
import lightModeBlack from "./images/lightModeBlack.png"
import nightModeWhite from "./images/nightMode.png"
import nightModeBlack from "./images/nightModeBlack.png"
import ethereum from "./images/binanceIcon.png"
import styled from "styled-components"
import { useEffect } from "react"

const StyledLi = styled.li`
  &::after {
	content: "";
	position: absolute;
	width: 0%;
	height: 2px;
	display: block;
	transition: all 0.4s ease;
	bottom: -10%;
	background-color: ${(props) => props.background};
  }
`

const StyledDarkModeButton = styled.li`
  border: ${(props) => props.darkMode ? "1px solid white;" : "1px solid #333333;"}
  background-color : ${(props) => props.darkMode ? "white" : "#333333"};

  &:hover
  {
	background-color : ${(props) => props.darkMode ? "#333333;" : "white;"}
  }
`

function Header(props) {
	// The header will have its own color and the background a little bit similar	
	const [isHovered, setIsHovered] = useState(false);

	const linkStyle = {
		color : props.darkMode ? "#F5F5F5" : "#333333"
	}

	return (
		<header style={props.darkMode ? {backgroundColor: "#333333", boxShadow:" 0px 1px 5px black"} : {backgroundColor: "white"}}>
			<div>
				<img src={ethereum} width="50px"></img>
				<Link to="/" style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>Crypto Website</Link>
			</div>
			<ul>
				<StyledLi background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/" style={linkStyle}>Home</Link>
				</StyledLi>
				<StyledLi background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/cryptocurrencies" style={linkStyle}>Market</Link>
				</StyledLi>
				<StyledLi background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/news" style={linkStyle}>News</Link>
				</StyledLi>
				<StyledDarkModeButton darkMode={props.darkMode} background={props.darkMode ? "#333333" : "#F5F5F5"}
				 onClick={(e) => props.setDarkMode(!props.darkMode)} className="last-li" onMouseEnter={(e) => setIsHovered(hover => !hover)}
				 onMouseLeave={(e) => setIsHovered(hover => !hover)}>
					<img src={isHovered ? (props.darkMode ? lightModeWhite : nightModeBlack) : (props.darkMode ? lightModeBlack : nightModeWhite) } width="23px"/>
				</StyledDarkModeButton>
			</ul>
		</header>
	);
}

export default Header;