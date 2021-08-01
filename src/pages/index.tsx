import { useQuery } from "@apollo/client";

// Particles
import { POSTS_LATEST } from "sonovate";
import { slugify } from "sonovate";

// Atoms
import { Link } from "sonovate";
import { Skeleton } from "sonovate";

// Molecules
import { ErrorMessage } from "sonovate";

// Templates
import { TemplateBase } from "sonovate";

// Types
import type { BlogPost } from "sonovate-types";

const BlogItem = (item: BlogPost) => {
	const { preface, sys, title } = item;
	const id = sys?.id;

	const href = `/${id}`;
	const slug = slugify(title);

	if (!id) return null;

	return (
		<article>
			<Link to={href}>
				<a>
					<h2>{title}</h2>
				</a>
			</Link>
			{preface && <p>{preface}</p>}
		</article>
	);
};

const Skeletons: React.FC = () => {
	return (
		<div
			style={{
				display: "grid",
				gap: `16px`,
				margin: `16px auto`,
				maxWidth: `var(--gridMax)`,
				padding: `15px 30px`,
			}}
		>
			{[...Array(10)].map((_, i) => (
				<Skeleton height="100" key={`post-skeleton-${i}`} />
			))}
		</div>
	);
};

const Blogs = () => {
	const response = useQuery(POSTS_LATEST);
	const error = response?.error;
	const loading = response?.loading;
	const data = response?.data;
	const items = data?.blogPostCollection?.items;

	if (loading) return <Skeletons />;
	if (error) return <ErrorMessage error={error} />;
	return items.map(BlogItem);
};

const BlogListingPage = () => {
	return (
		<TemplateBase>
			<Blogs />
		</TemplateBase>
	);
};

export default BlogListingPage;
