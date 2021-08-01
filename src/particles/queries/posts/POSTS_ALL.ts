import { gql } from "@apollo/client";

const POSTS_ALL = gql`
	query POSTS_ALL {
		blogPostCollection(limit: 10000) {
			items {
				sys {
					id
				}
			}
		}
	}
`;

export { POSTS_ALL };
export default POSTS_ALL;
