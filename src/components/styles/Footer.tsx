import * as React from 'react';
import styled from 'styled-components';
import { NavList } from './Navbar';
import links, { icons } from '../../utils/mix';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
interface Props {
  title: string;
}

const StyledFooter = styled.footer`
  padding: 1rem 0.5rem;
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.coffee};
  color: ${({ theme }) => theme.colors.black};
  small {
    margin-right: 2rem;
  }
  @media (max-width: 615px) {
    display: flex;
    small {
      position: absolute;
      right: 0;
      bottom: 1.4rem;
    }
  }
`;

const FooterList = styled(NavList)`
  li {
    a {
      &:hover {
        background: ${({ theme }) => theme.colors.offWhite};
        border-bottom: 2px solid ${({ theme }) => theme.colors.shark};
        color: ${({ theme }) => theme.colors.shark};
      }
    }
  }
  @media (max-width: 615px) {
    display: flex;
    flex-direction: column;
  }
`;

const IconList = styled(FooterList)`
  margin-right: auto;
  justify-content: flex-start;
  li {
    a {
      &:hover {
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  @media (max-width: 615px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 1rem;
    li {
      margin: 0.2rem 0;
    }
  }
`;

const Footer: React.FC<Props> = ({ title }) => {
  let a;
  return (
    <StyledFooter>
      {' '}
      <div className="lists">
        <FooterList>
          {links.map(link => (
            <li key={link.id}>
              {' '}
              <AniLink fade to={link.path}>
                {link.text}
              </AniLink>{' '}
            </li>
          ))}
        </FooterList>
        <IconList>
          {icons.map(icon => (
            <li key={icon.id}>
              {' '}
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                {icon.icon}
              </a>{' '}
            </li>
          ))}
        </IconList>
      </div>
      <small>
        © {new Date().getFullYear()}, {title}{' '}
      </small>{' '}
    </StyledFooter>
  );
};
export default Footer;
