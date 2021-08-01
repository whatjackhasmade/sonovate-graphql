import React from "react";

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
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

TemplateBase.defaultProps = {};

export { TemplateBase };
export default TemplateBase;
