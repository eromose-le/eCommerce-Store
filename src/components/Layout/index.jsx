import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from 'styled-components';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <article>{children}</article>
      </Main>
      <Footer />
    </>
  );
};

export const Main = styled.main``;
