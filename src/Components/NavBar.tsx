import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/full_logodataboox.png";

function Navbar() {
	return (
		<header className="header">
			<div>
				<Link to="/">
					<img src={logo} alt="The DataBOOX logo" />
				</Link>
			</div>

			<nav className="nav">
				<ul role="list" className="pageList">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="../pages/About">About</NavLink>
					</li>
					<li>
						<NavLink to="../pages/Pricing">Pricing</NavLink>
					</li>
					<li>
						<NavLink to="../pages/Contact">Contact</NavLink>
					</li>
				</ul>
			</nav>

			<div>
				<Link to="../pages/Contact">
					<button className="cta hide">Get Started</button>
				</Link>
			</div>
		</header>
	);
}

export default Navbar;
