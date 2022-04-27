import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory()
	const logout = () => {
		actions.logout();
		localStorage.removeItem("token");
		history.push("/login")
	}
	return (
		<nav className="navbar ">

			<div className="container">
				<Link to="/">
					<h1 className="fs-1 title fs-1 fw-bold noline ms-3" style={{ "text-decoration": "none" }} ><strong>ENJOY</strong><span className="and">&</span><strong>RIDE</strong></h1>
				</Link>
				<div className="me-1 ">
					{localStorage.getItem("token") ?
						<div className="d-flex justify-content-end">
							<Link to="/dashboard">
								<button className="btn btn-success ">Ficha de Usuario</button>
							</Link>
							<div className="ms-3 me-3">

								<button className="btn btn-success " onClick={logout}>LOGOUT</button></div></div>

						:


						<div className="d-flex justify-content-end">
							<Link to="/login">
								<button className="btn btn-success ">LOGIN</button>
							</Link>
							<div className="ms-3 me-3">
								<Link to="/registro">
									<button className="btn btn-success">REGISTRO</button>
								</Link></div>
						</div>}
				</div>

			</div>

		</nav>
	)
}
