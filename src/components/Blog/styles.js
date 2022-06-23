import styled from 'styled-components';

export const BlogStyle = styled.section`
  .blog .section-title {
    margin-bottom: 40px;
  }

  .blog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    .blog-card {
      .card-banner {
        background: var(--cultured);
        aspect-ratio: 2 / 1.37;
        overflow: hidden;
        margin-bottom: 25px;
      }

      .card-banner img {
        height: 100%;
        object-fit: cover;
        transition: var(--transition-2);
      }

      &:hover .card-banner img {
        transform: scale(1.05);
      }

      .card-content {
        padding-inline: 20px;
      }

      .card-meta-list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin-bottom: 10px;
      }

      .card-meta-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .card-meta-item ion-icon {
        font-size: 17px;
        --ionicon-stroke-width: 30px;
      }

      .card-meta-link {
        color: inherit;
        font-size: var(--fs-9);
        font-weight: var(--fw-500);
        text-transform: uppercase;
      }

      .card-meta-link:is(:hover, :focus) {
        color: var(--eerie-black);
      }

      .card-title {
        line-height: 1.4;
        text-align: center;
      }
    }
  }

  /**
 * responsive for larger than 768px screen
 */

  @media (min-width: 768px) {
    .blog-list {
      li {
        width: calc(50% - 15px);
      }
    }
  }

  /**
 * responsive for larger than 992px screen
 */

  @media (min-width: 992px) {
    .blog-list {
      li {
        width: calc(33.33% - 20px);
      }
    }

    .container {
      ul {
        li {
          ul {
            li {
              flex: 1;
            }
          }
        }
      }
    }
  }
`;
