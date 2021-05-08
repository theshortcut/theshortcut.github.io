import { global, styled } from '@/stitches.config';
import Head from 'next/head';
import React, { FC } from 'react';
import Nav from './nav';

global({
  // Box sizing rules
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  // Remove default padding and list styles on ul, ol elements with a class attribute
  'ul[class], ol[class]': {
    listStyle: 'none',
    padding: 0,
  },
  // Remove default margin
  'body, h1, h2, h3, h4, p, ul, ol[class], li[class], figure, figcaption, blockquote, dl, dd': {
    margin: 0,
  },
  html: {
    height: '100%',
  },
  // Set core body defaults
  body: {
    minHeight: '100vh',
    scrollBehavior: 'smooth',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
    fontFamily: '$body',
    backgroundColor: '$background',
    color: '$foreground',
  },
  // Anchor elements that don't have a class get default styles
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },
  // Make images easier to work with
  img: {
    maxWidth: '100%',
    display: 'block',
  },
  // Inherit fonts for inputs and buttons
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$heading',
  },
})();

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Header = styled('header', {
  alignItems: 'center',
  color: '',
  display: 'flex',
  height: '$6',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 0px',
  backdropFilter: 'saturate(180%) blur(20px)',
});

const Main = styled('main', {
  flex: 1,
  maxWidth: '$maxWidth',
  padding: '$7 $3 $3 $3',
});

const Footer = styled('footer', {
  color: '$gray600',
  padding: '$2',
});

const AppLayout: FC = ({ children }) => (
  <PageContainer>
    <Head>
      <title>Clayton Ferris</title>
      <link
        rel="icon"
        href="data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;🛠&lt;/text&gt;&lt;/svg&gt;"
      />
    </Head>
    <Header>
      <Nav />
    </Header>
    <Main>{children}</Main>
    <Footer>Copyright &copy; {new Date().getFullYear()} Clayton Ferris</Footer>
  </PageContainer>
);

export default AppLayout;
