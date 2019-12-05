import * as React from 'react';
import styled from 'styled-components';
import { ProductType } from '../../types';
import Img from 'gatsby-image';
import theme from '../styles/theme';

interface Props {
  product: ProductType;
}

const StyledProduct = styled.section`
  /* padding: 1rem; */
  transition: ${({ theme }) => theme.transition.mainTransition};
  position: relative;

  box-shadow: ${theme.shadow.lightShadow};
  &:hover {
    box-shadow: ${theme.shadow.darkShadow};
    &::after {
      content: '';
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.6671043417366946) 16%,
        rgba(191, 79, 6, 0.639093137254902) 47%,
        rgba(121, 56, 14, 0.5998774509803921) 100%
      );
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    .body {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${theme.colors.blackShadow};
      padding: 1.5rem 2rem;
      color: ${theme.colors.white};
      font-size: 2.2rem;
      z-index: 3;
      h4 {
        margin-left: auto;
      }
    }
  }

  .body {
    display: none;
  }
`;

const Product: React.FC<Props> = ({ product }) => {
  // TODO: delete
  console.log(product);
  return (
    <StyledProduct>
      {' '}
      <div className="head">
        <Img fluid={product.image.fluid} />
      </div>
      <div className="body">
        <h3>{product.title}</h3>
        <h4>{product.price}$</h4>
      </div>
    </StyledProduct>
  );
};
export default Product;
