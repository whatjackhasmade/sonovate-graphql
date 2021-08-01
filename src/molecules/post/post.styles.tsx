import styled from "styled-components";

const StyledPost = styled.div`
	display: flex;
	flex-direction: column;

	a {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 16px;

		background-color: var(--white);
		border-top: 2px solid var(--primary);
		text-decoration: none;
		transition: 0.2s background-color ease, 0.2s color ease;
		will-change: background-color, color;

		&:active,
		&:focus,
		&:hover {
			background-color: var(--secondary);
			color: var(--primary);

			text-decoration: none;
		}
	}

	span:last-child {
		display: block;
		margin-top: auto;

		font-weight: bold;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		margin-bottom: 16px;
	}

	p {
		margin: 0;
	}

	p:last-of-type {
		margin-bottom: 24px;
	}

	strong {
		display: block;
		margin-bottom: 1rem;
	}
`;

export default StyledPost;
