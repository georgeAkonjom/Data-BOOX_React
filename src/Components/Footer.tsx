import logo from "/full_logodataboox.png";
import tweet from "/Icontweetr.png";
import insta from "/Iconinsta.png";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="flex flex-col md:flex-row flex-wrap items-baseline gap-16 mx-4 md:mx-16 mt-8">
				<div className="flex flex-col items-start gap-2 max-w-none md:max-w-[25vw]">
					<img src={logo} alt="DataBOOX Logo" />
					<p className="text-sec-font-gray text-sm">
						A revolutionary and homegrown solution from BOOX
						Community.
					</p>
					<div className="flex flex-wrap gap-4 mt-2">
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

				<div className="flex flex-col items-start gap-2">
					<p className="font-poppins font-semibold text-black text-xs uppercase m-0 p-0">OFFICE ADDRESS</p>
					<p className="text-sec-font-gray text-sm flex gap-4">
						<a href="https://maps.app.goo.gl/UMFJHQaRb4BBN4FQ6">
							11 Femi Killa, Life camp Abuja
						</a>
					</p>
				</div>
				<div className="flex flex-col items-start gap-2">
					<p className="font-poppins font-semibold text-black text-xs uppercase m-0 p-0">CONTACT</p>
					<div className="text-sec-font-gray text-sm">
						<a href="https://booxcommunity.com/">BOOX Community, Our parent company</a><br />
						+234 (0) 800 0523 425 <br />
						hello@databoox.com
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between items-center mx-4 md:mx-16 my-8 md:flex-col md:gap-4">
				<p className="font-poppins font-semibold text-black text-sm">
					© 2023 DataBoox, All Rights Reserved.
				</p>
				<div className="flex gap-4 text-sec-font-gray text-sm">
					<p>Privacy Policy</p>
					<p>Terms of Use</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
