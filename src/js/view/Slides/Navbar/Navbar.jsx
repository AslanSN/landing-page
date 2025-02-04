import React from "react";

import Hextasium from "./HextasiumLogo.png";

import "./Navbar.scss";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img
							src={Hextasium}
							className="img navbar-logo"
							width="50%"
							height="50%"
							alt="Site logo"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end bg-dark"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5
								className="offcanvas-title text-white fs-4 fw-bold"
								id="offcanvasNavbarLabel">
								M ī k i n i
							</h5>
							<button
								type="button"
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"></button>
						</div>

						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<a
										className="nav-link active fs-4 fw-bold"
										aria-current="page"
										href="#philosophy">
										1. Philosophy
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#hydrogen">
										2. Hydrogen
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#cellFuel">
										3. Fuel Cell & Platform
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#design1">
										4. Design A
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#car">
										5. Car
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#design2">
										6. Design B
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-bold"
										href="#contact">
										7. Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
