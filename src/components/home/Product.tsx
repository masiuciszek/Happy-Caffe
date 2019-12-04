import * as React from 'react';
import styled from 'styled-components';
import { ProductType } from '../../types';
import Img from 'gatsby-image';

interface Props {
  product: ProductType;
}

const Product: React.FC<Props> = ({ product }) => {
  // TODO: delete
  console.log(product);
  return <div> LegiaCwks1916! </div>;
};
export default Product;
