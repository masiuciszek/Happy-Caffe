import * as React from 'react';
import Product from './Product';
import styled from 'styled-components';
import Title from '../styles/Title';
import { StaticQuery, graphql } from 'gatsby';
import { ProductType } from '../../types';
interface Props {
  // TODO : Fix prop type
  products: any;
  data: any;
}

const StyledProducts = styled.section`
  padding: 4rem 1rem;
  /* TODO Delete */
  border: 2px solid red;
`;

const GET_PRODUCTS_QUERY = graphql`
  {
    products: allContentfulCoffeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
            }
          }
        }
      }
    }
  }
`;

const Products: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <StaticQuery
        query={GET_PRODUCTS_QUERY}
        render={data => {
          console.log(data);
          return (
            <StyledProducts>
              {' '}
              <Title title="Products" subTitle="Not just (A) kind of product" />
              {data.products.edges.map(({ node }) => (
                <Product key={node.id} product={node} />
              ))}
            </StyledProducts>
          );
        }}
      />
    </>
  );
};
export default Products;
