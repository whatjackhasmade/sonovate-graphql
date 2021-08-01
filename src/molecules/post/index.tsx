import React from "react";

import StyledPost from "./post.styles";

// Particles
import { slugify } from "sonovate";

// Atoms
import { Link } from "sonovate";

import type { BlogPost } from "sonovate-types";

declare type PostSingularProps = {
	i: number;
} & BlogPost;

const PostSingular: React.SFC<PostSingularProps> = (
	props: PostSingularProps
) => {
	const index = props?.i;
	const preface = props?.preface;
	const sys = props?.sys;
	const title = props?.title;
	const id = sys?.id;
	if (!id) return null;

	const href = `/${id}`;

	const isLarge = index % 5 === 0;

	let classList = `post`;
	if (isLarge) classList += ` post--large`;

	return (
		<StyledPost className={classList}>
			<Link href={href}>
				<div className="post__body">
					<h2>{title}</h2>
					{preface && <p>{preface}</p>}
				</div>
				<span>→</span>
			</Link>
		</StyledPost>
	);
};

export { PostSingular };
export default PostSingular;
