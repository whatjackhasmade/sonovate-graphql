import styled from "styled-components";

const FooterComponent = styled.footer`
	padding: 100px 0 200px;
	position: relative;
	z-index: 10;

	background-color: var(--primary);
	color: var(--white);
	font-size: 24px;

	a {
		&:active,
		&:focus,
		&:hover {
			svg {
				fill: var(--white);
			}
		}

		&::after {
			display: none;
		}
	}
`;

export default FooterComponent;
