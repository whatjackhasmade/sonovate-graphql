import { requestor } from "sonovate";

import { POSTS_ALL } from "sonovate";

import { TemplateBase } from "sonovate";

import { postGetStaticProps as getStaticProps } from "sonovate";

declare type BlogPost = {
	__typename?: "BlogPost";
	sys: {
		id: string;
	};
};

declare type Collection = Array<BlogPost>;

// This function gets called at build time
export async function getStaticPaths() {
	let staticObject = { paths: [{ params: { id: "" } }], fallback: false };

	try {
		// Call an external API endpoint to get pages
		const data = await requestor.request(POSTS_ALL);
		const nodes: Collection = data.blogPostCollection.items;

		const paths = nodes.map((node) => {
			const id = node?.sys?.id;

			return {
				params: { id },
			};
		});

		// We'll pre-render only these paths at build time.
		// { fallback: false } means other routes should 404.
		staticObject = { paths, fallback: false };
	} catch (error) {
		console.error(error.message);
	}

	return staticObject;
}

export { getStaticProps };

export default TemplateBase;
