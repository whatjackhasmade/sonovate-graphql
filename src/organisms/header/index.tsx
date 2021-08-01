import React from "react";

import Link from "next/link";

import HeaderComponent from "./header.styles";

const Header = () => {
	return (
		<HeaderComponent className="header">
			<div className="header__contents">
				<Link href="/">
					<span className="hidden">Sonovate Homepage</span>
				</Link>
				<nav className="header__menu"></nav>
			</div>
		</HeaderComponent>
	);
};

export default Header;
