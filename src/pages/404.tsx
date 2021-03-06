import React from 'react';
import Layout from '../components/styles/layout';
import SEO from '../components/seo';
import { PageWrapper } from '../components/styles/PageWrapper';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledBtn } from '../components/styles/Buttons';

const Styled404 = styled.section`
  padding: 3rem 0;
  max-width: 40rem;
  margin: 0 auto;

  min-height: 71vh;
  h1 {
    background: ${({ theme }) => theme.colors.blackShadow};
    padding: 1rem 0.4rem;
    transform: skewX(3deg);
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.lightShadow};
    font-size: 2.4rem;
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
  p {
    font-size: 1.4rem;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageWrapper>
      <Styled404>
        <h1>Ooop's Page Not found!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">
          <StyledBtn>Back ← </StyledBtn>{' '}
        </Link>
      </Styled404>
    </PageWrapper>
  </Layout>
);

export default NotFoundPage;
