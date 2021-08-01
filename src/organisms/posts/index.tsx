import React from "react";

import StyledPosts from "./posts.styles";

// Particles
import { PostSingular } from "sonovate";

import type { BlogPost } from "sonovate-types";

declare type PostsProps = {
	children?: React.ReactChild | Element[];
	items: BlogPost[];
};

const Posts: React.SFC<PostsProps> = (props: PostsProps) => {
	const children = props?.children;
	if (children) return <StyledPosts>{children}</StyledPosts>;

	const items = props?.items;
	const hasItems = items?.length > 0;
	if (!hasItems) return null;

	return (
		<StyledPosts>
			{items.map((item, i) => (
				<PostSingular {...item} i={i} />
			))}
		</StyledPosts>
	);
};

export { Posts };
export default Posts;
