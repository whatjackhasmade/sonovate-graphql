import "nprogress/nprogress.css";

import * as React from "react";
import { useCallback } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { setContext } from "@apollo/client/link/context";
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";

let apolloClient: ApolloClient<any>;

import { GlobalStyle } from "sonovate";
import { ThemeDefault } from "sonovate";

const TopProgressBar = dynamic(
	() => {
		return import("../organisms/progress");
	},
	{ ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
	const createApolloClient = useCallback(() => {
		const httpLink = createHttpLink({
			uri: "https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77",
		});

		const authLink = setContext((_, { headers }) => ({
			headers: {
				...headers,
				authorization: "Bearer AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I",
			},
		}));

		const apolloClient = new ApolloClient({
			cache: new InMemoryCache(),
			link: authLink.concat(httpLink),
			ssrMode: typeof window === "undefined",
		});

		return apolloClient;
	}, []);

	let client = apolloClient ?? createApolloClient();

	return (
		<React.Fragment>
			<TopProgressBar />
			<ApolloProvider client={client}>
				<ThemeProvider theme={ThemeDefault}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</React.Fragment>
	);
}

export default MyApp;
