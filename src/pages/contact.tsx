import * as React from 'react';
import Layout from '../components/styles/layout';
import ContactForm from '../components/contact/ContactForm';
import Title from '../components/styles/Title';
import SEO from '../components/seo';
import styled from 'styled-components';
interface Props {}

const StyledContactPage = styled.div`
  h3 {
    padding: 2rem 0;
    text-align: center;
  }
`;

const StyledPage = styled.div`
  h5 {
    text-align: center;
    font-size: 1.6rem;
  }
`;

const ContactPage: React.FC<Props> = () => {
  return (
    <>
      <Layout>
        <StyledPage>
          <SEO title="Contact" />{' '}
          <StyledContactPage>
            <Title
              title="Happy Caffee"
              subTitle="Would love to hear your words"
            />
            <ContactForm />
          </StyledContactPage>
        </StyledPage>
      </Layout>
    </>
  );
};
export default ContactPage;
