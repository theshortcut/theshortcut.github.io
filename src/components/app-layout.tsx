import Logo from '@/components/logo';
import { css, styled, theme } from '@/stitches.config';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';

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
});

const PageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Header = styled.header({
  alignItems: 'center',
  color: '',
  display: 'flex',
  padding: '$2',
});

const Main = styled.main({
  flex: 1,
  maxWidth: '$maxWidth',
  padding: '$2',
});

const Footer = styled.footer({
  color: '$gray600',
  padding: '$2',
});

const HomeLink = styled.a({
  alignItems: 'center',
  color: '$foreground',
  display: 'flex',
  textDecoration: 'none',
});
const AppLayout: FC = ({ children }) => (
  <PageContainer>
    <Head>
      <title>Clayton Ferris</title>
    </Head>
    <Header>
      <Link href="/" passHref>
        <HomeLink>
          <Logo fill={theme.colors.$blue100} height="32px" width="53px" />
        </HomeLink>
      </Link>
    </Header>
    <Main>{children}</Main>
    <Footer>Copyright &copy; {new Date().getFullYear()} Clayton Ferris</Footer>
  </PageContainer>
);

export default AppLayout;
