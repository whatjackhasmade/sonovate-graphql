import styled from "styled-components";

const StyledPost = styled.div`
	display: flex;
	flex-direction: column;

	a {
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 30px;
		width: 100%;

		background-color: var(--white);
		border: 2px solid transparent;
		box-shadow: 0px 2px 4px rgba(11, 15, 103, 0.06),
			0px 4px 12px rgba(11, 15, 103, 0.04);
		text-decoration: none;
		transition: 0.2s box-shadow ease, 0.2s border-color ease, 0.2s color ease;

		&:active,
		&:focus,
		&:hover {
			color: #a8b6ff;

			span {
				transform: translateX(2px);
			}
		}

		&:hover {
			box-shadow: 0px 4px 24px rgba(11, 15, 103, 0.2),
				0px 2px 4px rgba(11, 15, 103, 0.06),
				0px 4px 12px rgba(11, 15, 103, 0.04);
		}

		&:focus-visible {
			border-color: #5045cd;
			box-shadow: 0px 4px 24px rgba(11, 15, 103, 0.2),
				0px 2px 4px rgba(11, 15, 103, 0.06),
				0px 4px 12px rgba(11, 15, 103, 0.04);
			border-radius: 6px;
		}

		span {
			align-items: flex-end;
			display: flex;
			justify-content: flex-end;
			margin-top: auto;

			color: #a8b6ff;
			transform: translateX(0px);
			transition: 0.2s transform ease;
		}
	}

	.post__body {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		margin-bottom: 8px;

		color: #5045cd;
		font-size: 21px;
		line-height: 24px;
	}

	p {
		margin: 0;
	}

	&.post--large {
		grid-column: span 2;

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: 25px;
			line-height: 29px;
		}
	}
`;

export default StyledPost;
