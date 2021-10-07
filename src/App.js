import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { Home } from "./pages/home";
import { AboutUS } from "./pages/about-us";
import { ContactUs } from "./pages/contact";
import { Faqs } from "./pages/faqs";
import { Servicios } from "./pages/servicios";
import { Store } from "./pages/store";
import { Error } from "./pages/404";

/*components*/
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BtnUp } from "./components/btnUp";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/about-us">
						<AboutUS />
					</Route>
					<Route exact path="/contact">
						<ContactUs />
					</Route>
					<Route exact path="/faqs">
						<Faqs />
					</Route>
					<Route exact path="/store">
						<Store />
					</Route>
					<Route exact path="/services">
						<Servicios />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
				<Footer />
				<BtnUp />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
