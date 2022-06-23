import styled from 'styled-components';

export const FooterStyle = styled.footer`
  position: relative;
  .footer {
    .logo {
      margin-bottom: 20px;
    }
  }

  /* top */
  .footer-top {
    background: var(--cultured);
    padding-block: var(--section-padding);

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 40px;

      /* brand */
      .footer-brand {
        .logo {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            height: 40px;
          }

          p {
            margin-left: 0.8rem;
          }
        }

        .footer-text {
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;

          .social-link {
            color: var(--eerie-black);
            font-size: 18px;
            width: 35px;
            height: 35px;
            border: 1px solid var(--sonic-silver);
            display: grid;
            place-items: center;
            border-radius: 50%;
          }

          .social-link:is(:hover, :focus) {
            background: var(--eerie-black);
            color: var(--white);
            border-color: var(--eerie-black);
          }
        }
      }

      /* links */
    }
  }

  /* links */
  .footer-list {
    width: 100%;

    .footer-list-title {
      color: var(--eerie-black);
      font-size: var(--fs-5);
      font-weight: var(--fw-600);
      margin-bottom: 15px;
    }

    .footer-link {
      position: relative;
      color: inherit;
      padding-block: 5px;
    }

    .footer-link:is(:hover, :focus) {
      color: var(--eerie-black);
      transform: translateX(15px);
    }

    .footer-link::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%) scale(var(--scale, 0));
      transform-origin: right;
      background: var(--sonic-silver);
      width: 10px;
      height: 2px;
      transition: var(--transition-1);
    }

    .footer-link:is(:hover, :focus)::before {
      --scale: 1;
    }
  }

  /* bottom */
  .footer-bottom {
    padding-block: 20px;

    a {
      color: inherit;
    }

    .container {
      /* copyright */
      .copyright {
        margin-bottom: 15px;
        text-align: center;

        a {
          display: inline-block;
          color: var(--eerie-black);
          font-weight: var(--fw-600);
        }
      }

      /* links */
      .footer-bottom-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 5px 15px;
        margin-bottom: 15px;

        .footer-bottom-link:is(:hover, :focus) {
          color: var(--eerie-black);
        }
      }

      /* payment */
      .payment {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }
    }
  }

  /**
 * responsive for larger than 480px screen
 */

  @media (min-width: 480px) {
    .footer-brand {
      width: 100%;
    }

    .footer-text {
      max-width: 470px;
    }

    .footer-list {
      width: calc(50% - 20px);
    }
  }

  /**
  * responsive for larger than 768px screen
  */

  @media (min-width: 768px) {
    .footer-list {
      width: calc(33.33% - 26.66px);
    }

    .copyright,
    .footer-bottom-list {
      margin-bottom: 0;
    }

    .footer-bottom .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 25px 50px;
    }
  }

  /**
 * responsive for larger than 1200px screen
 */

  @media (min-width: 1200px) {
    .footer-brand {
      width: calc(40% - 30px);
    }

    .footer-text {
      max-width: 340px;
    }

    .footer-list {
      width: calc(20% - 30px);
    }

    .footer-bottom .container {
      justify-content: space-between;
    }
  }
`;

const Button = styled.button`
  font-size: var(--fs-9);
  border-radius: 50%;
`;

export const ScrollButton = styled(Button)`
  background-color: var(--middle-blue-green);
  color: var(--white);
  padding: 1em;
  position: fixed;
  bottom: 6em;
  right: 2em;
`;
