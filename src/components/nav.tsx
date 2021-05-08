import { styled } from '@/stitches.config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const NavContainer = styled('nav', {
  flex: 1,
});

const LinkList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LinkItem = styled('li', {
  display: 'flex',
  '& + &': {
    marginLeft: '$3',
  },
});

const NavLink = styled('a', {
  alignItems: 'center',
  color: '$foreground',
  display: 'flex',
  textDecoration: 'none',
  padding: '$1 $3',
  borderRadius: '$2',
  neumorphic: { distance: '4px', blur: '8px' },
  transition: 'box-shadow 5s',
  '&.selected': {
    color: '$blue100',
    neumorphic: { inset: true, distance: '4px', blur: '8px' },
  },
});

const Nav: FC = (props) => {
  const router = useRouter();
  return (
    <NavContainer {...props}>
      <LinkList>
        <LinkItem>
          <Link href="/" passHref>
            <NavLink className={router.route === '/' ? 'selected' : ''}>
              Home
            </NavLink>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/about" passHref>
            <NavLink className={router.route === '/about' ? 'selected' : ''}>
              About
            </NavLink>
          </Link>
        </LinkItem>
      </LinkList>
    </NavContainer>
  );
};

export default Nav;
