import * as React from 'react';
import styled from 'styled-components';
import { NavList } from './Navbar';
import links from '../../utils/mix';
import { Link } from 'gatsby';
interface Props {
  title: string;
}

const StyledFooter = styled.footer`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.coffee};
  color: ${({ theme }) => theme.colors.black};
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
`;

const Footer: React.FC<Props> = ({ title }) => {
  let a;
  return (
    <StyledFooter>
      {' '}
      <FooterList>
        {links.map(link => (
          <li key={link.id}>
            {' '}
            <Link to={link.path}>{link.text}</Link>{' '}
          </li>
        ))}
      </FooterList>
      <small>
        © {new Date().getFullYear()}, {title}{' '}
      </small>{' '}
    </StyledFooter>
  );
};
export default Footer;
