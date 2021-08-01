import styled from "styled-components";

const StyledPosts = styled.section`
	display: grid;
	grid-gap: 32px;
	grid-template-columns: repeat(3, 1fr);

	&.posts {
		grid-column: 2 / 11;
	}
`;

export default StyledPosts;
