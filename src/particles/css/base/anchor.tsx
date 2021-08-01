import { css } from "styled-components";

const exportedCSS = css`
	a {
		position: relative;

		color: var(--primary);
		text-decoration: none;

		&:after {
			bottom: -6px;
			content: "";
			height: 1px;
			left: 0;
			position: absolute;
			width: 100%;

			background: currentColor;
			transform: scaleX(0);
			transform-origin: right center;
			transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
		}

		&:focus {
			outline: 1px dotted var(--primary);
			outline-offset: 8px;
		}

		&:active,
		&:focus,
		&:hover,
		&.active {
			text-decoration: none;

			&:after {
				transform: scaleX(1);
				transform-origin: left center;
			}
		}
	}
`;

export default exportedCSS;
