import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/full_logodataboox.png";

function Navbar(){
	const [dropdown, setDropdown] = useState(false);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	}

	return (
		<header className="z-[1000] flex justify-between items-center border-b border-black w-full bg-white fixed px-8 py-2">
			<div>
				<Link to="/">
					<img className="max-w-[4rem]" src={logo} alt="The DataBOOX logo" />
				</Link>
			</div>

			<nav className="nav">
				<ul role="list" className={`md:flex gap-8 items-center ${dropdown ? "flex flex-col absolute top-[100%] left-0 w-full bg-white border-b border-black p-8 gap-4" : "hidden"}`}>
					<li className="text-base">
						<NavLink to="/" onClick={() => setDropdown(false)}>Home</NavLink>
					</li>
					<li className="text-base">
						<NavLink to="/pages/About" onClick={() => setDropdown(false)}>About</NavLink>
					</li>
					<li className="text-base">
						<NavLink to="/pages/Pricing" onClick={() => setDropdown(false)}>Pricing</NavLink>
					</li>
					<li className="text-base">
						<NavLink to="/pages/Contact" onClick={() => setDropdown(false)}>Contact</NavLink>
					</li>
					<li className="md:hidden">
						<Link to="/pages/Contact" onClick={() => setDropdown(false)}>
							<button className="cta">Get Started</button>
						</Link>
					</li>
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<Link to="/pages/Contact" className="hidden md:block">
					<button className="cta">Get Started</button>
				</Link>
				<button className="block md:hidden text-2xl" onClick={toggleDropdown}>
					{dropdown ? "×" : "☰"}
				</button>
			</div>
		</header>
	);
}

export default Navbar;
