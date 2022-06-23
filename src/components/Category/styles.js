import styled from 'styled-components';

export const CategoryStyle = styled.section`
  .category {
    padding-top: 0;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;

    li {
      width: 100%;
      position: relative;

      .btn {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        padding-inline: 30px;
      }

      &:hover .category-banner img {
        transform: scale(1.05);
      }

      &:hover .category-banner img {
        transform: scale(1.05);
      }
    }

    .category-banner {
      background: var(--cultured);
      aspect-ratio: 2 / 2.35;
      overflow: hidden;

      img {
        height: 100%;
        object-fit: cover;
        transition: var(--transition-2);
      }
    }
  }

  /**
 * responsive for larger than 480px screen
 */

  @media (min-width: 480px) {
    .category-list {
      li {
        width: calc(50% - 15px);
      }
    }
  }

  /**
 * responsive for larger than 992px screen
 */

  @media (min-width: 992px) {
    .category-list {
      li:not(:first-child, :nth-child(2)) {
        width: calc(25% - 22.5px);
      }
    }
  }
`;
