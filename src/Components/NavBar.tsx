import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "/full_logodataboox.png";

function Navbar(){
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () =>{
		const navlist = document.getElementById("navlist");
		if (dropdown == false){
			navlist.classList.remove("dropInactive");
			setDropdown(true);
		}
		else{
			navlist.classList.add("dropInactive");
			setDropdown(false)
		}
	}

	return (
		<>
		<header className="header">
			<div>
				<Link to="/">
					<img className="logo" src={logo} alt="The DataBOOX logo" />
				</Link>
			</div>

			<nav className="nav">
				<ul role="list" id="navlist" className="pagelist dropInactive">
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
				<button className="dropdownbtn" onClick={() => handleClick()}>-</button>
			</div>
		</header>
		</>
	);
}

export default Navbar;
