import { GraphQLClient } from "graphql-request";

export const requestor = new GraphQLClient(
	"https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77",
	{
		headers: {
			authorization: "Bearer AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I",
		},
	}
);

export default requestor;
