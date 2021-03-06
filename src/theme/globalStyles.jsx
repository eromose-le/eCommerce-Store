import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
:root {

  /**
   * colors
   */

  --middle-blue-green: hsl(176, 35%, 63%);
  --sonic-silver: hsl(0, 0%, 44%);
  --eerie-black: hsl(0, 0%, 9%);
  --ocean-green: hsl(148, 45%, 58%);
  --candy-pink: hsl(356, 65%, 63%);
  --cultured: hsl(0, 0%, 96%);
  --white: ${({ theme }) => theme.body || '#fff'};
  --black: hsl(0, 0%, 0%);

  /**
   * typography
   */

  --ff-jost: "Jost", sans-serif;

  --fs-1: 2.5rem;
  --fs-2: 1.75rem;
  --fs-3: 1.625rem;
  --fs-4: 1.5rem;
  --fs-5: 1.375rem;
  --fs-6: 1.25rem;
  --fs-7: 1.125rem;
  --fs-8: 0.938rem;
  --fs-9: 0.875rem;
  --fs-10: 0.813rem;

  --fw-500: 500;
  --fw-600: 600;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.75s ease;
  --cubic-out: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-in: cubic-bezier(0.33, 0.85, 0.56, 1.02);

  /**
   * spacing
   */

  --section-padding: 60px;

}

  /**
   * reset
   */

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li { list-style: none; }

  a { text-decoration: none; }

  a,
  img,
  span,
  input,
  button,
  ion-icon { display: block; }

  input,
  button {
    background: none;
    border: none;
    font: inherit;
  }

  button {
    text-align: left;
    cursor: pointer;
  }

  input {
    width: 100%;
    outline-color: var(--middle-blue-green);
  }

  img { height: auto; }

  ion-icon { pointer-events: none; }

  html {
    font-family: var(--ff-jost);
    color: var(--sonic-silver);
    scroll-behavior: smooth;
  }

  body {
    background: var(--white);
    padding-block: 70px;
  }

  /**
   * reuseable
   */
  .container { padding-inline: 15px; }

  a,
  button { transition: var(--transition-1); }

  h3 > a { color: inherit; }

  .h1,
  .h2,
  .h3,
  .h4 {
    color: var(--eerie-black);
    font-weight: var(--fw-600);
  }

  .h1 {
    font-size: var(--fs-1);
    line-height: 1;
  }

  .h2 { font-size: var(--fs-2); }

  .h3 { font-size: var(--fs-6); }

  .h4 {
    font-size: var(--fs-7);
    font-weight: var(--fw-500);
  }

  .btn {
    background: var(--background, var(--eerie-black));
    color: var(--color, var(--white));
    font-weight: var(--fw-600);
    height: var(--height, 60px);
    padding-inline: 50px;
    border: 1px solid var(--border-color, var(--eerie-black));
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-primary:is(:hover, :focus) {
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--eerie-black);
  }

  .btn-secondary {
    --height: 50px;
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--white);
  }

  .btn-secondary:is(:hover, :focus) {
    --background: var(--eerie-black);
    --color: var(--white);
    --border-color: var(--eerie-black);
  }

  .btn-outline {
    --height: 50px;
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--eerie-black);
    padding-inline: 40px;
  }

  .btn-outline:is(:hover, :focus) {
    --background: var(--eerie-black);
    --color: var(--white);
    --border-color: var(--eerie-black);
  }

  .section { padding-block: var(--section-padding); }

  .w-100 { width: 100%; }

  .section-title {
    text-align: center;
    margin-bottom: 30px;
  }

  .ripple-button {
  position: relative;
  overflow: hidden;
  user-select: none;
  }

  @keyframes useRippleAnimation {
    to {
      transform: scale(15);
      opacity: 0;
    }
  }


  /*-----------------------------------*\
 * #MEDIA QUARIES
\*-----------------------------------*/


/**
 * responsive for larger than 480px screen
 */

  @media (min-width: 480px) {
    :root {

    /**
    * typography
    */

    --fs-1: 3rem;
    --fs-2: 2rem;
  }
}


/**
 * responsive for larger than 580px screen
 */

  @media (min-width: 580px) {
    :root {

    /**
     * typography
     */

      --fs-1: 3.75rem;
      --fs-2: 2.375rem;
      --fs-3: 2.25rem;

    }

    /**
    * reuseable STYLE
    */

    .container {
      max-width: 550px;
      margin-inline: auto;
    }
  }


/**
 * responsive for larger than 768px screen
 */

  @media (min-width: 768px) {
    /**
   * reuseable STYLE
   */

    .container { max-width: 700px; }
  }


/**
 * responsive for larger than 992px screen
 */

  @media (min-width: 992px) {
    /**
   * CUSTOM PROPERTY
   */

    :root {

      /**
      * typography
      */

      --fs-1: 5rem;

    }



    /**
    * RESET
    */

    body { padding-block: 0; }



    /**
    * REUSED STYLE
    */

    .container { max-width: 950px; }
  }


/**
 * responsive for larger than 1200px screen
 */

  @media (min-width: 1200px) {
    :root {

    /**
     * typography
     */

      --fs-1: 6.25rem;

    }

    /**
    * reuseable STYLE
    */

    .container { max-width: 1150px; }
  }

`;
