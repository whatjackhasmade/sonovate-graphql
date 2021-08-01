import { useQuery } from "@apollo/client";

import { LATEST_POSTS } from "sonovate";

import { TemplateBase } from "sonovate";

const Blogs = () => {
	const { loading, error, data } = useQuery(LATEST_POSTS);

	const items = data?.blogPostCollection?.items;
	console.log(items);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return items.map((item: { title: string }) => {
		return <div>{item.title}</div>;
	});
};

const BlogListingPage = () => {
	return (
		<TemplateBase>
			<Blogs />
		</TemplateBase>
	);
};

export default BlogListingPage;
