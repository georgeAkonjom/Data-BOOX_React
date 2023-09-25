import logo from "/full_logodataboox.png";
import tweet from "/Icontweetr.png";
import insta from "/Iconinsta.png";
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
						<a href="https://www.instagram.com/booxcommunity/?fbclid=IwAR0GyWYgzCkxWvjYO5zrK2tn9o8x0PbJuydB-4jXha9qoKipAA7c9kUHjOI">
							<img
								src={insta}
								alt="BOOX Community's Instagram"
							/>
						</a>
						<a href="https://x.com/boox_community?s=20">
							<img
								src={tweet}
								alt="BOOX Community's Twitter"
							/>
						</a>
					</div>
				</div>

				<div>
					<p className="tag">OFFICE ADDRESS</p>
					<p className="address subtext">
						<a href="https://maps.app.goo.gl/UMFJHQaRb4BBN4FQ6">
							11 Femi Killa, Life camp Abuja
						</a>
					</p>
				</div>
				<div>
					<p className="tag">CONTACT</p>
					<p className="subtext">
						<a href="https://booxcommunity.com/">BOOX Community, Our parent company</a><br />
						+234 (0) 800 0523 425 <br />
						hello@databoox.com
					</p>
				</div>
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
