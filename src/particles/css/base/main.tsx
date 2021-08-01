import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  main {
    flex: 1;
    margin: 0 auto;
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
  }

  main {
    > *:not(div):not(hr):not(ol):not(section):not(ul),
    > .width--content {
      padding: 0 15px;

      @media ${device?.xs} {
        padding: 0 30px;
      }

      @media ${device?.xl} {
        padding: 0 30px;
      }
    }

    > hr:not(:first-child) {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--gridLarge);
      width: 100%;
    }

    > *:not(div):not(hr):not(section),
    > .width--content {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--gridLarge);
      width: 100%;

      &:first-child {
        margin-top: var(--blockMarginXS);

        @media ${device?.sm} {
          margin-top: var(--blockMarginSM);
        }

        @media ${device?.md} {
          margin-top: var(--blockMarginMD);
        }

        @media ${device?.lg} {
          margin-top: var(--blockMarginLG);
        }

        @media ${device?.xl} {
          margin-top: var(--blockMarginXL);
        }
      }

      &:last-child {
        margin-bottom: var(--blockMarginXS);

        @media ${device?.sm} {
          margin-bottom: var(--blockMarginSM);
        }

        @media ${device?.md} {
          margin-bottom: var(--blockMarginMD);
        }

        @media ${device?.lg} {
          margin-bottom: var(--blockMarginLG);
        }

        @media ${device?.xl} {
          margin-bottom: var(--blockMarginXL);
        }
      }

      + div:not(.width--content),
      + section:not(.width--content) {
        margin-top: var(--blockMarginXS);

        @media ${device?.sm} {
          margin-top: var(--blockMarginSM);
        }

        @media ${device?.md} {
          margin-top: var(--blockMarginMD);
        }

        @media ${device?.lg} {
          margin-top: var(--blockMarginLG);
        }

        @media ${device?.xl} {
          margin-top: var(--blockMarginXL);
        }
      }
    }

    > hr:first-child {
      margin: 8px auto;
      max-width: var(--gridLarge);
      width: 100%;

      opacity: 0;

      @media ${device?.xs} {
        width: calc(var(--gridLarge) - 60px);
      }
    }

    > ol,
    > ul {
      padding-left: 55px;

      @media ${device?.xs} {
        padding-left: 70px;
      }

      @media ${device?.xl} {
        padding-left: 70px;
      }
    }

    > div:not(.width--content) + *:not(div):not(section),
    > section:not(.width--content) + *:not(div):not(section) {
      margin-top: var(--blockMarginXS);

      @media ${device?.sm} {
        margin-top: var(--blockMarginSM);
      }

      @media ${device?.md} {
        margin-top: var(--blockMarginMD);
      }

      @media ${device?.lg} {
        margin-top: var(--blockMarginLG);
      }

      @media ${device?.xl} {
        margin-top: var(--blockMarginXL);
      }
    }
  }

  .main--type-story {
    > *,
    > .width--content {
      max-width: var(--gridTightest);
    }

    > .intro,
    > .signposts {
      max-width: 100%;
    }
  }

  .main--type-work {
    > *,
    > .width--content {
      max-width: var(--gridTightest);
    }

    > .intro,
    > .signposts {
      max-width: 100%;
    }
  }

  body {
    .main--type-work {
      > section:not(.intro):not(.signposts),
      > div:not(.intro):not(.signposts) {
        margin-top: 32px;
      }

      > section:not(.intro) + *,
      > div:not(.intro) + * {
        margin-top: 32px;
      }

      .intro + * {
        margin-top: 64px;
      }

      > section.video {
        padding: 0 15px;

        @media ${device?.xs} {
          padding: 0 30px;
        }
      }
    }
  }
`;

export default exportedCSS;
