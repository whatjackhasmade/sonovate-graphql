import { gql } from "@apollo/client";

const LATEST_POSTS = gql`
	query LATEST_POSTS {
		blogPostCollection(limit: 10) {
			items {
				title
			}
		}
	}
`;

export { LATEST_POSTS };
export default LATEST_POSTS;
