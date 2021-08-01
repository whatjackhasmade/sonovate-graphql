import styled from 'styled-components';
import { device } from 'particles';

const FooterComponent = styled.footer`
  position: relative;
  z-index: 10;

  background-color: var(--purple);
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

  h2 {
    margin-top: 0;

    color: var(--primary);
    font-size: 2rem;

    @media ${device?.md} {
      margin-top: 0;

      font-size: inherit;
    }

    @media ${device?.lg} {
      font-size: 24px;
    }
  }

  svg {
    fill: var(--purple);
    max-height: 24px;
    max-width: 24px;
    width: 100%;

    object-fit: contain;
    object-position: center;
    transition: 0.2s all ease;

    @media ${device?.md} {
      max-height: 26px;
      max-width: 26px;
    }
  }

  .footer__contact {
    font-size: 1.6rem;
    font-weight: var(--weightBold);
    line-height: 1.2;

    @media ${device?.md} {
      font-size: 1.8rem;
    }

    a {
      display: block;
      padding: 7px 0;

      color: var(--white);
      font-weight: var(--weightBold);
      transition: 0.2s color ease;

      &:active,
      &:focus,
      &:hover {
        color: var(--primary);
      }
    }

    ul {
      margin-bottom: 0;
      padding-left: 0;

      list-style: none;
    }

    ul {
      & + .footer__number,
      & + .footer__email {
        margin-top: 22px;
      }
    }
  }

  .footer__contents {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: var(--gridMax);
    padding: 48px 15px;
    width: 100%;

    @media ${device?.xs} {
      padding: 30px;
    }

    @media ${device?.md} {
      padding: 45px 30px;
    }
  }

  .footer__footnote {
    margin-top: 48px;
    width: 100%;

    color: var(--primary);
    font-size: 1.6rem;
    text-align: right;

    @media ${device?.md} {
      margin-top: 80px;
      font-size: 1.8rem;
    }

    a {
      color: var(--primary);
      font-weight: var(--weightLight);

      &:active,
      &:focus,
      &:hover {
        color: var(--white);
      }
    }

    a + a {
      margin-top: 12px;
      position: relative;

      @media ${device?.xs} {
        margin-left: 12px;
        margin-top: 0;
      }

      @media ${device?.md} {
        margin-left: 24px;

        &::before {
          content: '-';
          position: absolute;
          top: 0;
          left: -17px;

          color: var(--primary);
        }
      }
    }

    p {
      margin: 0;
      margin-top: 24px;

      font-size: inherit;

      @media ${device?.xs} {
        margin-top: 8px;
      }

      @media ${device?.md} {
        margin: 0;
      }
    }

    nav {
      align-items: flex-end;
      display: flex;
      justify-content: flex-end;

      @media ${device?.xs} {
        align-items: flex-start;
      }
    }
  }

  .footer__maps {
    margin-bottom: 22px;
  }

  .footer__navigation {
    display: flex;
    flex-direction: column;

    @media ${device?.xs} {
      flex-direction: row;
    }

    a {
      transition: 0.2s color ease;
    }
  }

  .footer__newsletter {
    font-size: 1.6rem;
    font-weight: var(--weightBold);

    margin-top: 40px;

    @media ${device?.md} {
      font-size: 1.8rem;
    }

    @media ${device?.md} {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-top: 0;
    }

    form {
      display: flex;

      input {
        margin-right: 8px;
        width: 100%;
      }
    }

    h2 {
      @media ${device?.md} {
        padding-right: 48px;
      }
    }

    p {
      margin: 0 0 24px;
      max-width: 520px;

      font-size: 16px;
      font-weight: var(--weightBold);
    }
  }

  .footer__social {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    font-size: 0px;

    margin-top: 32px;
    width: 100%;

    @media ${device?.md} {
      margin-top: auto;
    }

    a {
      align-items: center;
      display: flex;
      height: 44px;
      justify-content: center;
      padding: 10px;
      width: 44px;

      background-color: var(--white);
      border-radius: 50%;
      text-decoration: none;
      transition: 0.2s all ease;

      .browser-safari & {
        display: inline-block;
      }

      &:active,
      &:focus,
      &:hover {
        background-color: var(--primary);
      }

      @media ${device?.md} {
        height: 46px;
        width: 46px;
      }
    }

    a + a {
      margin-left: 8px;

      @media ${device?.md} {
        margin-left: 24px;
      }
    }
  }

  .footer__top {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device?.md} {
      align-items: unset;
      flex-direction: row;
    }
  }
`;

export default FooterComponent;
