import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

interface P {
  children: React.ReactNode;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';

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
  console.log(data.site.siteMetadata.title);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata.title}{' '}
        </footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
