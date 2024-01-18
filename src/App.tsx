import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchComponent from "./components/SearchComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleNew from "./components/SingleNew";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MyNav />
				<Routes>
					<Route path="/" element={<SearchComponent />} />
					<Route path="/:singleNew" element={<SingleNew />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
