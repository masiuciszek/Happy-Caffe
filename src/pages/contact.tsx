import * as React from 'react';
import Layout from '../components/styles/layout';
import ContactForm from '../components/contact/ContactForm';
import Title from '../components/styles/Title';
import styled from 'styled-components';
import SEO from '../components/seo';
interface Props {}

const StyledContactPage = styled.div`
  h3 {
    padding: 2rem 0;
    text-align: center;
  }
`;

const ContactPage: React.FC<Props> = () => {
  return (
    <>
      <Layout>
        <SEO title="contact page" />{' '}
        <StyledContactPage>
          <Title title="Contact Us" />
          <ContactForm />
        </StyledContactPage>
      </Layout>
    </>
  );
};
export default ContactPage;
