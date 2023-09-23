import logo from "/full_logodataboox.png";
import tweet from "/Icontweetr.png";
import insta from "/Iconinsta.png";
import linkedin from "/Iconledin.png";
import blip from "/locationblip.png"
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
	return (
		<>
			<div className="footer">
				<div>
					<img src={logo} alt="DataBOOX Logo" />
					<p className="subtext">
						A revolutionary and homegrown solution from BOOX
						Community.
					</p>
					<div className="socials">
						<a href="www.Instagram.com">
							<img
								src={insta}
								alt="BOOX Community's Instagram"
							/>
						</a>
						<img
							src={tweet}
							alt="BOOX Community's Twitter"
						/>
						<img
							src={linkedin}
							alt="BOOX Community's LinkedIn"
						/>
					</div>
				</div>

				<div>
					<p className="tag">OFFICE ADDRESS</p>
					<p className="address subtext">
						<img className="blip" src={blip} alt="" />
						11 Femi Killa, Life camp Abuja
					</p>
				</div>
				<div>
					<p className="tag">CONTACT</p>
					<p className="subtext">
						+234 (0) 800 0523 425 <br />
						hello@databoox.com
					</p>
				</div>
				{/* <div>
					<p className="tag">QUICK LINKS</p>
					<p className="links subtext">
						<Link to="/">Home</Link>

						<Link to="../pages/About">About</Link>

						<Link to="../pages/Pricing">Pricing</Link>

						<Link to="../pages/Contact">Contact</Link>
					</p>
				</div> */}
			</div>
			<div className="copy">
				<p className="tag">
					© 2023 DataBoox, All Rights Reserved.
				</p>
				<div>
					<p className="subtext">Privacy Policy</p>
					<p className="subtext">Terms of Use</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
