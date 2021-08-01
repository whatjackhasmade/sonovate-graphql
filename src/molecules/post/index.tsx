import React from "react";

import StyledPost from "./post.styles";

// Particles
import { slugify } from "sonovate";

// Atoms
import { Link } from "sonovate";

import type { BlogPost } from "sonovate-types";

const PostSingular: React.SFC<BlogPost> = (post: BlogPost) => {
	if (!post) return null;

	const preface = post?.preface;
	const sys = post?.sys;
	const title = post?.title;
	const id = sys?.id;

	if (!id) return null;

	const href = `/${id}`;
	const slug = slugify(String(title));

	return (
		<StyledPost>
			<Link to={href}>
				<h2>{title}</h2>

				{preface && <p>{preface}</p>}
				<span>Read the full post</span>
			</Link>
		</StyledPost>
	);
};

export { PostSingular };
export default PostSingular;
