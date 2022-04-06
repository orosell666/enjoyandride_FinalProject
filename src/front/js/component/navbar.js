import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar ">

			<div className="container justify-content-center">
				<Link to="/">
					<span className=" title fs-1 fw-bold">ENJOY&RIDE</span>
				</Link>
				<div className="me-1 ">
					<Link to="/login">
						<button className="btn btn-light ">LOGIN</button>
					</Link>
				</div>
				<div className="ms-1">
					<Link to="/registro">
						<button className="btn btn-warning">REGISTRO</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
