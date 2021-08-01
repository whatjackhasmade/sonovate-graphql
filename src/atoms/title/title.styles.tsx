import styled from "styled-components";

const TitleComponent = styled.div`
	display: flex;
	margin-bottom: 64px;

	span {
		display: block;
		margin-right: 32px;
		white-space: nowrap;

		font-weight: bold;
		font-size: 21px;
		line-height: 24px;
		color: #5045cd;
	}

	hr {
		height: 0;
		width: 100%;
		border: 1px solid #a8b6ff;
	}
`;

export default TitleComponent;
