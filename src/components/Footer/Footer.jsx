import React from "react"
import "../../style/Footer.css"
import linkedinIcon from "./images/linkedinIcon.png"
import githubIcon from "./images/githubIcon.png"
import { Link } from "react-router-dom"

function Footer(props) {
	return <footer>
		<div id="footer-last-part">
			<p className="author">
				Made by Othmane Essayegh
				<a href="http://linkedin.com/in/othmane-essayegh" target="_blank"><img src={linkedinIcon} width="22px"/></a>
				<a href="https://github.com/oessayeg" target="_blank"><img src={githubIcon} width="22px"/></a>
			</p>
			<p className="copyright">Copyright &copy; 2023 CryptoQuick.&nbsp; All rights reserved.</p>
		</div>
	</footer>;
}

export default Footer;