import styled from 'styled-components';

export const ServiceStyle = styled.section`
  .service {
    padding-block: 45px;

    .container {
      .service-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 40px;

        .service-item {
          max-width: 235px;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
        }

        .service-item-icon {
          width: 45px;
        }

        .service-item-icon img {
          margin-inline: auto;
        }

        .service-item-title {
          color: var(--eerie-black);
          font-size: var(--fs-7);
          font-weight: var(--fw-600);
        }
      }
    }
  }
`;
