import { gql } from "@apollo/client";

const POSTS_LATEST = gql`
	query POSTS_LATEST {
		blogPostCollection(limit: 10) {
			items {
				body
				preface
				sys {
					id
					publishedAt
				}
				title
			}
		}
	}
`;

export { POSTS_LATEST };
export default POSTS_LATEST;
