import styled from 'styled-components';

export const HeaderStyle = styled.section`
  /* container */
  .header-search {
    display: none;
  }

  /* header */
  .header {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--white);
    width: 100%;
    padding-block: 20px;
    z-index: 4;
    transition: var(--transition-1);

    &.active {
      position: fixed;
      box-shadow: 0 2px 20px hsla(0, 0%, 0%, 0.1);
    }

    /* header */
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .overlay {
        position: fixed;
        inset: 0;
        background: var(--black);
        opacity: 0;
        pointer-events: none;
        transition: var(--transition-1);
        z-index: 2;

        &.active {
          opacity: 0.7;
          pointer-events: all;
        }
      }

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
    }
  }

  /* open toggle btn */

  .nav-open-btn {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;

    span {
      width: 20px;
      height: 2px;
      background: var(--black);
      transition: var(--transition-1);
    }

    span:nth-child(2) {
      transform: scaleX(0.5);
      transform-origin: right;
    }

    &:is(:hover, :focus) span:nth-child(2) {
      transform: scaleX(1);
    }
  }

  /* actions (bottom nav) */

  .header-actions {
    background: var(--white);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;
    padding-block: 16px 10px;
    box-shadow: 0 -2px 20px hsla(0, 0%, 0%, 0.1);
    z-index: 1;

    .header-action-btn {
      position: relative;
      width: 50px;
      text-align: center;
    }

    .header-action-btn ion-icon {
      margin-inline: auto;
      font-size: 22px;
      margin-bottom: 3px;
    }

    .header-action-label {
      color: var(--sonic-silver);
      font-size: var(--fs-10);
      transition: var(--transition-1);
    }

    .header-action-btn:is(:hover, :focus) .header-action-label {
      color: var(--eerie-black);
    }

    .header-action-btn .btn-badge {
      position: absolute;
      top: -5px;
      right: 0;
      background: var(--background, var(--eerie-black));
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      line-height: 0;
      font-size: 13px;
      color: var(--white);
      border-radius: 50%;
    }

    .header-action-btn .btn-badge.green {
      --background: var(--middle-blue-green);
    }
  }

  /* actions (side nav) */

  .navbar {
    background: var(--white);
    position: fixed;
    top: 0;
    right: -300px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    padding: 30px 25px;
    z-index: 3;
    visibility: hidden;
    transition: 0.25s var(--cubic-out);

    &.active {
      visibility: visible;
      transform: translateX(-300px);
      transition: 0.5s var(--cubic-in);
    }

    .navbar-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
    }

    .nav-close-btn ion-icon {
      font-size: 23px;
    }

    .navbar-link {
      padding-block: 10px;
      color: var(--eerie-black);
    }

    .navbar-list > li:not(:last-child) {
      border-bottom: 1px solid var(--cultured);
    }
  }

  /**
  * responsive for larger than 992px screen
  */

  @media (min-width: 992px) {
    .header {
      position: relative;
      padding-block: 15px;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
      margin-bottom: 67px;

      &.active {
        position: relative;
        box-shadow: none;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;

        .overlay {
          display: none;
        }
      }

      .logo {
        margin-inline: auto;
      }

      &.active .navbar {
        position: fixed;
        top: 0;
        box-shadow: 0 2px 20px hsla(0, 0%, 0%, 0.1);
      }

      .navbar {
        background: 'pink';
      }
    }

    /* search */
    .header-search {
      display: block;
      position: relative;
      width: max-content;

      .input-field {
        border: 1px solid hsla(0, 0%, 0%, 0.1);
        width: 280px;
        padding: 12px 30px;
        border-radius: 6px;
        transition: var(--transition-1);
      }

      .input-field:focus {
        outline: 1px solid var(--eerie-black);
      }

      .search-btn {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        font-size: 20px;
        color: var(--eerie-black);
      }

      .search-btn ion-icon {
        --ionicon-stroke-width: 30px;
      }
    }

    /* actions (bottom nav) */
    .header-actions {
      all: unset;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 15px;

      .header-action-btn:nth-child(2) {
        display: none;
      }
    }

    .nav-open-btn,
    .navbar {
      all: unset;
      position: absolute;
      top: calc(100% + 1px);
      left: 0;
      width: 100%;
      background: var(--white);

      .navbar-top {
        display: none;
      }

      .navbar-list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }

      .navbar-list > li:not(:last-child) {
        border-bottom: none;
      }

      .navbar-link {
        font-size: var(--fs-7);
        font-weight: var(--fw-500);
        padding-block: 20px;
      }

      .navbar-link:is(:hover, :focus) {
        color: var(--middle-blue-green);
      }
    }
  }

  /**
 * responsive for larger than 1200px screen
 */

  @media (min-width: 1200px) {
    .header-search .input-field {
      width: 350px;
    }
  }
`;
