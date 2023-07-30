import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<button className="add-contact btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal--1">Add new contact</button>
			</div>
		</nav>
	);
};