import * as React from 'react';
import { MenuAltRight, Cart } from 'styled-icons/boxicons-regular';
import { CoffeeTogo } from 'styled-icons/boxicons-regular';
import styled from 'styled-components';
import links from '../../utils/mix';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import useToggle from '../../hooks/useToggle';
import { fadeDown } from '../../utils/animations';
interface Props {}

const StyledNav = styled.nav`
  padding: 0.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors.offWhite};
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 20rem;
    margin: 0 auto;
    h3 {
      font-size: 2.2rem;
      span {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
    @media (max-width: 400px) {
      justify-content: flex-start;
      h3 {
        font-size: 1.7rem;
      }
    }
  }
  #toggleIcon {
    position: absolute;
    top: 0.3rem;
    right: 0.2rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
    @media (min-width: 615px) {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  padding: 0.5rem 0;
  justify-content: center;
  display: none;
  @media (min-width: 615px) {
    display: flex;
  }
  li {
    padding: 0.2rem;
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:hover {
      transform: scale(1.07);
      color: ${({ theme }) => theme.colors.white};
    }
    a,
    span {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      padding: 0.6rem;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition.quickTransition};
      &:hover {
        background: ${({ theme }) => theme.colors.black};
        border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const MobileList = styled(NavList)`
  display: flex;
  flex-direction: column;
  animation: ${fadeDown} 300ms ease-in-out;
  justify-content: center;
  align-items: center;
  li {
    a,
    span {
      &:hover {
        transform: translateY(200px);
      }
    }
  }
  @media (min-width: 615px) {
    display: none;
  }
`;

const Navbar: React.FC<Props> = () => {
  const [showMenu, toggleFn] = useToggle(false);
  return (
    <StyledNav>
      {' '}
      <div className="logo">
        <h3>
          Happy{' '}
          <AniLink fade to="/">
            <span>
              {' '}
              <CoffeeTogo size="35" />{' '}
            </span>{' '}
          </AniLink>
          Caffe
        </h3>
      </div>
      <span id="toggleIcon" onClick={toggleFn}>
        <MenuAltRight size="40" />
      </span>
      {showMenu && (
        <MobileList>
          {links.map(link => (
            <li key={link.id}>
              <AniLink to={link.path}>{link.text}</AniLink>
            </li>
          ))}
          <li>
            {' '}
            <span className="snipcart-checkout">
              <Cart size="30" />
            </span>
          </li>
        </MobileList>
      )}
      <NavList>
        {links.map(link => (
          <li key={link.id}>
            <AniLink fade to={link.path}>
              {link.text}
            </AniLink>
          </li>
        ))}
        <li>
          {' '}
          <span className="snipcart-checkout">
            <Cart size="30" />
          </span>
        </li>
      </NavList>
    </StyledNav>
  );
};
export default Navbar;
