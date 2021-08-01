import React from "react";
import Head from "next/head";

import { Footer } from "sonovate";
import { Header } from "sonovate";

type BaseProps = {
	children?:
		| React.ReactChild[]
		| React.ReactChildren[]
		| React.ReactChild
		| React.ReactChildren;
};

const TemplateBase = (props: BaseProps) => {
	const children = props?.children;

	return (
		<React.Fragment>
			<Head>
				<title>Sonovate Test - Jack Pritchard</title>
			</Head>
			<Header />
			<main>
				<div className="page__wrapper">{children}</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

TemplateBase.defaultProps = {};

export { TemplateBase };
export default TemplateBase;
