import * as React from 'react';
import { MenuItemType } from '../../types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledBtn } from '../styles/Buttons';

interface Props {
  item: MenuItemType;
}

const StyledMenuItem = styled.section`
  padding: 1rem 1.6rem;
  border: 2px solid red;
  width: 25rem;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  .head {
    display: flex;
    justify-content: space-between;
    h3 {
    }
  }
  .body {
    p {
      font-size: 1.1rem;
      padding: 1rem 0;
    }
  }
  /* 1006 */
  @media (max-width: 1008px) {
    width: 80%;
  }
  button {
    position: absolute;
    bottom: 0.3rem;
    right: 0;
  }
`;

const MenuItem: React.FC<Props> = ({ item }) => {
  let a;

  return (
    <StyledMenuItem>
      <div className="head">
        <div className="img-wrapper">
          <img src={item.iamge.fixed.src} alt="" />
        </div>
        <h3>
          {item.title} <span>{item.price}$</span>
        </h3>
      </div>

      <div className="body">
        <p>{item.description.description}</p>
        <StyledBtn>Order</StyledBtn>
      </div>
    </StyledMenuItem>
  );
};
export default MenuItem;
