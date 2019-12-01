import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
interface P {
  children: React.ReactNode | React.ReactFragment;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

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
