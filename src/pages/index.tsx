import React from 'react';
import Layout from '../components/styles/layout';
import SEO from '../components/seo';
import { PageWrapper } from '../components/styles/PageWrapper';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <h1>Coffe</h1>
    </PageWrapper>
  </Layout>
);

export default IndexPage;
