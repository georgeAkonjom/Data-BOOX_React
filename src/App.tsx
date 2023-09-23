import Navbar from "./Components/NavBar";
import Home from "./pages/Home"
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/pages/About"
					element={<About />}
				></Route>
				<Route
					path="/pages/Pricing"
					element={<Pricing />}
				></Route>
				<Route
					path="/pages/Contact"
					element={<Contact />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
