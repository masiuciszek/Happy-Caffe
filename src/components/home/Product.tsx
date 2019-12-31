import * as React from 'react';
import styled from 'styled-components';
import { ProductType } from '../../types';
import Img from 'gatsby-image';
import { StyledBtn } from '../styles/Buttons';

interface Props {
  product: ProductType;
}

const StyledProduct = styled.section`
  /* padding: 1rem; */
  transition: ${({ theme }) => theme.transition.mainTransition};
  position: relative;

  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    &::after {
      content: '';
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.6671043417366946) 16%,
        rgba(1, 9, 6, 0.639093137254902) 47%,
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
      width: 70%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.colors.blackShadow};
      padding: 1.5rem 2rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.2rem;
      z-index: 3;
      h4 {
        margin-left: auto;
      }
      button {
        width: 100%;
        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.white};
          background: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
  .small-price {
    display: none;
    transition: ${({ theme }) => theme.transition.mainTransition};
  }
  .body {
    display: none;
  }
  @media (max-width: 975px) {
    .body {
      h3,
      h4 {
        font-size: 1.2rem;
      }
      height: 10rem;
    }
  }
  @media (max-width: 730px) {
    .body {
      width: 100% !important;
      h3,
      h4 {
        font-size: 0.9rem;
      }
      height: 10rem;
      button {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 520px) {
    position: relative;
    &:hover {
      .small-price {
        display: inline-block;
        display: flex;
        justify-content: space-between;
        h3,
        h4 {
          z-index: 5;
          position: relative;
          color: ${({ theme }) => theme.colors.white};
          font-size: 1em;
          padding: 0.3em;
        }
      }
    }
    .body {
      h3,
      h4 {
        display: none;
      }
      background: none !important;

      button {
        font-size: 0.8rem;
        padding: 0 0.5rem;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, 0);
        /* display: none; */
      }
    }
  }
`;

const Product: React.FC<Props> = ({ product }) => {
  return (
    <StyledProduct>
      {' '}
      <div className="head">
        <Img fluid={product.image.fluid} />
      </div>
      <div className="body">
        <h3>{product.title}</h3>
        <h4>{product.price}$</h4>
        <StyledBtn
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-image={product.image.fluid.src}
          data-item-name={product.title}
          data-item-url="https://marcell-ciszek-happy-caffe.netlify.com/"
          data-item-description="Happy caffee"
        >
          Add to Cart
        </StyledBtn>
      </div>
      <div className="small-price">
        <h3>{product.title}</h3>
        <h4>{product.price}$</h4>
      </div>
    </StyledProduct>
  );
};
export default Product;
