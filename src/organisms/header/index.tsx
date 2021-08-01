import React from "react";

import HeaderComponent from "./header.styles";

import { Link } from "sonovate";
import { Logo } from "sonovate";

const Header = () => {
	return (
		<HeaderComponent className="header">
			<div className="header__contents">
				<div className="header__logo">
					<Link to="/">
						<Logo />
						<span className="hidden">Sonovate Homepage</span>
					</Link>
				</div>
				<nav className="header__menu">
					<Link to="/">Homepage</Link>
				</nav>
			</div>
		</HeaderComponent>
	);
};

export { Header };
export default Header;
