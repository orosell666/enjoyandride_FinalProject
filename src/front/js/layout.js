import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { UploadView } from "./pages/upload";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Register } from "./pages/registro";
import { RegisterMoto } from "./pages/registroMoto";
import { Dashboard } from "./pages/dashboard";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/registro">
							<Register />
						</Route>
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/registroMoto">
							<RegisterMoto />
						</Route>
						<Route exact path="/upload">
							<UploadView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
