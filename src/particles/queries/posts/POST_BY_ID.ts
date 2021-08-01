import { gql } from "@apollo/client";

const POST_BY_ID = gql`
	query POST_BY_ID($id: String!) {
		blogPost(id: $id) {
			body
			contentfulMetadata {
				tags {
					id
					name
				}
			}
			preface
			sys {
				id
				publishedAt
			}
			title
		}
	}
`;

export { POST_BY_ID };
export default POST_BY_ID;
