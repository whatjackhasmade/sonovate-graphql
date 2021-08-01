import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  p {
    font-size: var(--sizeSmall);
    line-height: 1.3;

    @media ${device?.sm} {
      font-size: var(--sizeDefault);
    }
  }
`;

export default exportedCSS;
