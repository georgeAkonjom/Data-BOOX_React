import "../styles/billtoggle.css"
function BillToggle() {
    return (
			<div className="toggle">
				<p className="subtext">Bill Monthly</p>
				<label className="switch">
					<input type="checkbox" />
					<span className="slider round"></span>
				</label>
				<p className="subtext">
					Bill AnnuaNamelly <br />
					Save 15%
				</p>
			</div>
		);
}

export default BillToggle;