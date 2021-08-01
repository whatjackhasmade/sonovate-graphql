import { css } from "styled-components";

import { device } from "particles";

const exportedCSS = css`
	main {
		flex: 1;
		margin: 0 auto;
		padding: 48px 0;
		width: 100%;
	}

	.page__wrapper {
		align-items: flex-end;
		display: grid;
		margin-left: auto;
		margin-right: auto;
		max-width: var(--gridMax);
		grid-column-gap: 30px;
		grid-template-columns: repeat(10, 1fr);
		padding: 0 15px;
		width: 100%;

		@media ${device?.xs} {
			padding: 0 30px;
		}

		@media ${device?.xl} {
			padding: 0 30px;
		}

		> * {
			grid-column: span 10;
		}
	}
`;

export default exportedCSS;
