import { requestor } from "sonovate";

import { POST_BY_ID } from "sonovate";

type Params = {
	params: {
		id: string;
	};
};

// This also gets called at build time
export const getStaticProps = async ({ params }: Params) => {
	let pageProps = { props: null };
	const { id } = params;

	try {
		// Call an external API endpoint to get pages
		const data = await requestor.request(POST_BY_ID, { id });

		const post = data.blogPost;

		const props = {
			...post,
		};

		// Pass page data to the page via props
		pageProps = { props };
	} catch (error) {
		console.error(error.message);
	}

	return pageProps;
};

export default getStaticProps;
