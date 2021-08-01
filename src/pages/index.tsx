import { useQuery } from "@apollo/client";

// Particles
import { POSTS_LATEST } from "sonovate";

// Atoms
import { Skeleton } from "sonovate";
import { Title } from "sonovate";

// Molecules
import { ErrorMessage } from "sonovate";

// Organisms
import { Posts } from "sonovate";

// Templates
import { TemplateBase } from "sonovate";

const Skeletons: React.FC = () => {
	return (
		<Posts>
			{[...Array(9)].map((_, i) => (
				<Skeleton height="100" key={`post-skeleton-${i}`} />
			))}
		</Posts>
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
	return (
		<>
			<Title text="From the blog" />
			<Posts items={items} />
		</>
	);
};

const BlogListingPage = () => {
	return (
		<TemplateBase>
			<Blogs />
		</TemplateBase>
	);
};

export default BlogListingPage;
