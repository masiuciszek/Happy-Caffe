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
  padding: 4rem 2rem;
  height: 100%;
  h3 {
  }
  h5 {
    font-size: 1.7rem;
  }
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: auto;
  }
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
              ...GatsbyContentfulFluid
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
          return (
            <StyledProducts>
              {' '}
              <Title
                title="Fancy Products"
                subTitle="Not just (A) kind of product"
              />
              <div className="grid">
                {data.products.edges.map(({ node }) => (
                  <Product key={node.id} product={node} />
                ))}
              </div>
            </StyledProducts>
          );
        }}
      />
    </>
  );
};
export default Products;
