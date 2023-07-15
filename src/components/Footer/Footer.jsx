import React from "react"
import "../../style/Footer.css"
import linkedinIcon from "./linkedinIcon.png"
import githubIcon from "./githubIcon.png"

function Footer(props) {
	return <footer>
		<div id="footer-last-part">
			<p className="author">
				Made by Othmane Essayegh
				<img src={linkedinIcon} width="22px"/>
				<img src={githubIcon} width="22px"/>
			</p>
		<p>Copyright &copy; 2023 Crypto Website.&nbsp; All rights reserved.</p>
		</div>
	</footer>;
}

export default Footer;