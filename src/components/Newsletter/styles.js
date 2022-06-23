import styled from 'styled-components';

export const NewsletterStyle = styled.section`
  .newsletter {
    padding-bottom: 120px;
  }

  .newsletter-card {
    background-color: var(--cultured);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    padding: 80px 15px;
    text-align: center;

    .card-title {
      color: var(--eerie-black);
      font-size: var(--fs-3);
      font-weight: var(--fw-500);
      line-height: 1.2;
      margin-bottom: 30px;
    }

    .card-text {
      margin-bottom: 30px;
    }

    .input-wrapper {
      position: relative;
      margin-bottom: 20px;
    }

    .input-field {
      background: var(--white);
      height: 60px;
      padding-inline: 50px 20px;
      border-radius: 6px;
    }

    .input-wrapper ion-icon {
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
    }

    .btn {
      gap: 10px;
    }
  }

  /**
 * responsive for larger than 768px screen
 */

  @media (min-width: 768px) {
    .newsletter-card > * {
      max-width: 480px;
      margin-inline: auto;
    }

    .newsletter-card {
      .card-form {
        position: relative;
      }

      .input-wrapper {
        margin-bottom: 0;
      }

      .btn {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: max-content;
        padding-inline: 35px;
        border-radius: 0 6px 6px 0;
      }
    }
  }

  /**
 * responsive for larger than 992px screen
 */

  @media (min-width: 992px) {
    .newsletter-card .card-form {
      max-width: 650px;
    }
  }
`;
