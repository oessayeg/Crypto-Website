import React, { useState } from "react"
import { Link } from "react-router-dom"
import nightModeWhite from "./images/nightModeWhite.png"
import nightModeBlack from "./images/nightModeBlack.png"
import lightModeWhite from "./images/lightModeWhite.png"
import lightModeBlack from "./images/lightModeBlack.png"
import mainIcon from "./images/mainIcon.png"
import styled from "styled-components"
import "../../style/Header.css"

const StyledLi = styled.li`
  &::after {
	content: "";
	position: absolute;
	width: 0%;
	height: 2px;
	display: block;
	transition: all 0.4s ease;
	bottom: -10%;
	background-color: ${(props) => props.$background};
  }
`

const StyledDarkModeButton = styled.li`
  border : ${(props) => props.$darkmode ? "1px solid white" : "1px solid #333333"};
  background-color : ${(props) => props.$darkmode ? "white" : "#333333"};

  &:hover
  {
	background-color : ${(props) => props.$darkmode ? "#333333;" : "white;"}
  }
`

function Header(props) {

	const [isHovered, setIsHovered] = useState(false);

	const linkStyle = {
		color : props.darkMode ? "#F5F5F5" : "#333333"
	}

	return (
		<header style={props.darkMode ? {backgroundColor: "#333333", boxShadow:" 0px 1px 5px black"} : {backgroundColor: "white"}}>
			<div>
				<img src={mainIcon} width="50px"></img>
				<Link to="/" style={{color : props.darkMode ? "#F5F5F5" : "#333333"}}>CryptoQuick</Link>
			</div>
			<ul>
				<StyledLi $background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/" style={linkStyle}>Home</Link>
				</StyledLi>
				<StyledLi $background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/cryptocurrencies" style={linkStyle}>Market</Link>
				</StyledLi>
				<StyledLi $background={props.darkMode ? "#F5F5F5" : "#333333"}>
					<Link to="/news" style={linkStyle}>News</Link>
				</StyledLi>
				<StyledDarkModeButton $darkmode={props.darkMode} 
				 onClick={(e) => props.setDarkMode(!props.darkMode)} className="last-li" onMouseEnter={(e) => setIsHovered(hover => !hover)}
				 onMouseLeave={(e) => setIsHovered(hover => !hover)}>
					<img src={isHovered ? (props.darkMode ? lightModeWhite : nightModeBlack) : (props.darkMode ? lightModeBlack : nightModeWhite) } width="23px"/>
				</StyledDarkModeButton>
			</ul>
		</header>
	);
}

export default Header;