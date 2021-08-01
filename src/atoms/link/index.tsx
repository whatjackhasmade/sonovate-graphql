import * as React from "react";
import NextLink from "next/link";

// allow this component to accept all properties of "a" tag
interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	// we can add more properties we need from next/link in the future
}

// Forward Refs, is useful
const Link = React.forwardRef(({ to, ...props }: IProps, ref: any) => {
	return (
		<NextLink href={to}>
			<a {...props} ref={ref} />
		</NextLink>
	);
});

export { Link };
export default Link;
