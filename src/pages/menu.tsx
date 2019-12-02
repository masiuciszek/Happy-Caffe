import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/styles/layout';
import Title from '../components/styles/Title';
import { PageWrapper } from '../components/styles/PageWrapper';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Menu from '../components/menu/Menu';

interface Props {
  data: {
    menu: {
      edges: {
        node: {
          price: number;
          id: string;
          iamge: { src: string };
          title: string;
          description: { description: string };
        };
      }[];
    };
  };
}

const MenuPage: React.FC<Props> = ({ data }) => {
  let a;

  return (
    <>
      <Layout>
        <PageWrapper>
          <Title title="Our Menu" />
          <Menu menuData={data.menu.edges} />
        </PageWrapper>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    menu: allContentfulCoffeItem {
      edges {
        node {
          price
          id
          title
          description {
            description
          }
          catecory
          iamge {
            fixed(width: 50, height: 50) {
              src
            }
          }
        }
      }
    }
  }
`;

export default MenuPage;
