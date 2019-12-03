import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/styles/layout';
import Title from '../components/styles/Title';
import { PageWrapper } from '../components/styles/PageWrapper';
import Menu from '../components/menu/Menu';
import { MenuItemType } from '../types';

interface Props {
  data: {
    menu: {
      edges: {
        node: MenuItemType;
      }[];
    };
  };
  // data: any;
}

const MenuPage: React.FC<Props> = ({ data }) => {
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
            fixed(width: 90, height: 90) {
              src
            }
          }
        }
      }
    }
  }
`;

export default MenuPage;
