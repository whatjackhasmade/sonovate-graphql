import { css } from "styled-components";

import { device } from "particles";

const exportedCSS = css`
	main {
		flex: 1;
		margin: 0 auto;
		padding: 48px 0;
		width: 100%;
	}

	main {
		> img,
		> picture,
		> video {
			margin-bottom: 48px;
			margin-top: 48px;

			@media ${device?.lg} {
				margin-bottom: 80px;
				margin-top: 80px;
			}
		}

		> * {
			margin-left: auto;
			margin-right: auto;
			max-width: var(--gridLarge);
			width: 100%;

			padding: 0 15px;

			@media ${device?.xs} {
				padding: 0 30px;
			}

			@media ${device?.xl} {
				padding: 0 30px;
			}
		}
	}
`;

export default exportedCSS;
