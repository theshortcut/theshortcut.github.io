import Head from 'next/head';
import React, { FC } from 'react';
import { css, styled } from '../stitches.config';

css.global({
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
});

const Header = styled.header({
  backgroundColor: '$purple600',
  color: '$foreground',
  padding: '$1 $2',
});

const Main = styled.main({
  maxWidth: '$maxWidth',
  padding: '$2',
  color: '$foreground',
});

const AppLayout: FC = ({ children }) => (
  <>
    <Head>
      <title>Clayton Ferris</title>
    </Head>
    <Header>
      <h1>Page Title</h1>
    </Header>
    <Main>{children}</Main>
  </>
);

export default AppLayout;
