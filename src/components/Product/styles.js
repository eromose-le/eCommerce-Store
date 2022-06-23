import styled from 'styled-components';

export const ProductStyle = styled.section`
  .filter-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px 20px;
    margin-bottom: 50px;
  }

  .filter-btn {
    color: inherit;
    font-size: var(--fs-7);
    font-weight: var(--fw-500);
  }

  .filter-btn.active {
    color: var(--eerie-black);
  }

  .product .btn {
    margin-inline: auto;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 25px;
    margin-bottom: 60px;

    .product-card {
      .card-banner {
        position: relative;
        margin-bottom: 20px;
      }

      .card-badge {
        background: var(--eerie-black);
        color: var(--white);
        position: absolute;
        top: 0;
        left: 0;
        font-size: var(--fs-9);
        font-weight: var(--fw-500);
        padding: 3px 10px;
      }

      .card-badge.red {
        background: var(--candy-pink);
      }

      .card-badge.green {
        background: var(--ocean-green);
      }

      .card-actions {
        display: flex;
        height: 45px;
      }

      .card-action-btn {
        border: 1px solid var(--cultured);
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background: var(--white);
        color: var(--eerie-black);
      }

      .card-action-btn:is(:hover, :focus) {
        border-color: var(--eerie-black);
      }

      .cart-btn {
        flex-grow: 1;
        background: var(--eerie-black);
        color: var(--white);
        border-color: var(--eerie-black);
      }

      .cart-btn:is(:hover, :focus) {
        background: var(--white);
        color: var(--eerie-black);
      }

      .card-action-btn ion-icon {
        font-size: 20px;
      }

      .card-title {
        margin-bottom: 5px;
      }

      .card-price {
        color: var(--eerie-black);
        font-size: var(--fs-8);
        font-weight: var(--fw-500);
      }

      .card-price data:not(:first-child) {
        color: var(--sonic-silver);
        margin-left: 5px;
        text-decoration: line-through;
      }
    }
  }

  /**
 * responsive for larger than 480px screen
 */
  @media (min-width: 480px) {
    .product-list {
      li {
        width: calc(50% - 12.5px);
      }
    }
  }

  /**
 * responsive for larger than 992px screen
 */

  @media (min-width: 992px) {
    .product-list {
      li {
        width: calc(33.33% - 16.66px);
      }
    }

    .product-card {
      .card-actions {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        transform: translateY(100px);
        visibility: hidden;
        transition: var(--transition-1);
      }

      .card-banner {
        overflow: hidden;
      }

      .card-banner:hover .card-actions {
        visibility: visible;
        transform: translateY(0);
      }

      .card-action-btn:first-child {
        border-radius: 6px 0 0 6px;
      }

      .card-action-btn:last-child {
        border-radius: 0 6px 6px 0;
      }
    }
  }

  /**
 * responsive for larger than 1200px screen
 */

  @media (min-width: 1200px) {
    .product-list {
      li {
        width: calc(25% - 18.75px);
      }
    }
  }
`;
