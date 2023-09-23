import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/full_logodataboox.png";
import { Children } from "react";

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
					<CustomLink to="/">Home</CustomLink>
					<CustomLink to="../pages/About">About</CustomLink>
					<CustomLink to="../pages/Pricing">
						Pricing
					</CustomLink>
					<CustomLink to="../pages/Contact">Contact</CustomLink>
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

function CustomLink({ to, children, ...props }) {
	const path = useResolvedPath(to)
	const isActive = useMatch({ path: path.pathname, end: true })

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default Navbar;
