import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

interface P {
  children: React.ReactNode;
}

import theme from './theme';
import GlobalStyles from './GlobalStyles';

const Layout: React.FC<P> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}, Built with</footer>
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
