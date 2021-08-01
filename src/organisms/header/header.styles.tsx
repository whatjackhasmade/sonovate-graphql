import styled from "styled-components";
import { device } from "particles";

const HeaderComponent = styled.header`
	left: 0;
	min-height: 102px;
	position: relative;
	top: 0;
	width: 100%;
	z-index: 11;

	background-color: var(--white);

	a {
		font-size: 20px;
		opacity: 0;

		@media ${device?.sm} {
			font-size: 16px;
			opacity: 1;
		}
	}

	button {
		span {
			@media ${device?.MXsm} {
				font-weight: 700;
			}
		}

		box-shadow: none;
	}

	a,
	button {
		padding: 8px;
		position: relative;

		color: var(--purple);
		font-size: 2.2rem;
		font-weight: var(--weightMedium);
		text-decoration: none;
		text-transform: capitalize;
		transition: 0.2s all ease;

		&:after {
			bottom: -3px;
			height: 2px;

			color: var(--primary);
		}

		&[aria-current="page"],
		&:active,
		&:focus,
		&:hover {
			box-shadow: none;
			color: var(--purple);
			text-decoration: none;

			&:after {
				display: none;
			}

			@media ${device?.sm} {
				&:after {
					display: block;
					transform: scaleX(1);
				}
			}
		}

		@media ${device?.sm} {
			padding: 2px 0px;
		}

		+ a {
			margin-left: 0;

			@media ${device?.sm} {
				margin-left: 32px;
			}

			@media ${device?.xl} {
				margin-left: 40px;
			}
		}
	}

	button {
		align-items: center;
		display: flex;
		justify-content: center;

		background: none;
		border: none;
		color: inherit;
		font-size: 1.8rem;
		cursor: pointer;
		outline: none;
		transform: translateX(8px);

		&:active,
		&:focus,
		&:hover {
			transform: translateX(8px);
		}

		span + span {
			display: none;
			margin-left: 4px;

			@media ${device?.xs} {
				display: inline-block;
			}
		}

		svg {
			margin-left: 8px;
			height: 20px;
		}

		@media ${device?.sm} {
			display: none;
		}
	}

	nav + a {
		display: none;

		color: var(--purple);
		font-weight: 900;

		@media ${device?.sm} {
			display: block;
		}
	}

	.header__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: var(--gridMax);
		padding: 15px;

		@media ${device?.xs} {
			padding: 15px 30px;
		}
	}

	.header__logo {
		padding-left: 0;

		opacity: 1;

		&::after {
			opacity: 0;
		}

		/* For browsers that don't support :focus-visible'*/
		&:focus {
			outline: 1px dotted var(--primary);
		}

		/* If supports, remove the border on anchor click */
		&:focus:not(:focus-visible) {
			outline: none;
		}

		/* If supports, show border on anchor keyboard focus */
		&:focus-visible {
			outline: 1px dotted var(--primary);
		}

		img,
		svg {
			display: block;
			max-width: 48px;
			width: 48px;

			@media ${device?.sm} {
				max-width: 64px;
				width: 64px;
			}
		}
	}

	nav {
		@media ${device?.sm} {
			flex-direction: row;
			position: relative;
		}

		@media ${device?.MXsm} {
			align-items: center;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			left: 100%;
			padding: 32px;
			position: fixed;
			top: 0;
			width: 100%;

			background: var(--white);
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
			transition: 0.4s left ease;
		}
	}

	.header__menu--show {
		a {
			animation-delay: 0.4s;
			animation-duration: 0.4s;
			animation-fill-mode: forwards;
			animation-iteration-count: 1;
			animation-name: fadeLeft;
			animation-timing-function: linear;
			animation-timing-function: ease;

			&[aria-current="page"],
			&:active,
			&:focus,
			&:hover {
				color: var(--primary);
			}

			&:nth-child(2) {
				animation-delay: 0.6s;
			}

			&:nth-child(3) {
				animation-delay: 0.8s;
			}

			&:nth-child(4) {
				animation-delay: 1s;
			}

			&:nth-child(5) {
				animation-delay: 1.2s;
			}

			&:nth-child(6) {
				animation-delay: 1.4s;
			}
		}

		@media ${device?.MXsm} {
			left: 0;
		}
	}

	&.header--absolute {
		position: absolute;

		background-color: transparent;

		a,
		button {
			color: inherit;

			svg {
				fill: currentColor;
			}

			@media ${device?.sm} {
				color: var(--white);
			}
		}

		a {
			&[aria-current="page"] {
				color: var(--primary);
			}

			&:active,
			&:focus,
			&:hover {
				color: var(--primary);
			}
		}

		button {
			color: var(--white);
		}

		.header__menu--show + button {
			color: var(--black);
		}
	}

	@keyframes fadeLeft {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}
`;

export default HeaderComponent;
