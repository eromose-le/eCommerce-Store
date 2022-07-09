import styled from 'styled-components';

export const BannerStyle = styled.section`
  .hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    background-attachment: fixed;
    width: 100%;
    min-height: 80vh;
    padding-block: var(--section-padding);
    display: flex;
    align-items: center;

    .container {
      width: 100%;

      .hero-subtitle {
        color: var(--eerie-black);
        font-size: var(--fs-4);
        font-weight: var(--fw-600);
        margin-bottom: 20px;
      }

      .hero-title {
        margin-bottom: 35px;
        max-width: 12ch;
      }
    }

    /**
    * responsive for larger than 768px screen
    */
    @media (min-width: 768px) {
      .hero {
        background-position: center;
        min-height: 800px;
      }
    }
  }
`;
