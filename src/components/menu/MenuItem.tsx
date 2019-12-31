import * as React from 'react';
import { MenuItemType } from '../../types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledBtn } from '../styles/Buttons';

interface Props {
  item: MenuItemType;
  // item: any;
}

interface StyledProps {
  category: string;
}

const StyledMenuItem = styled.section<StyledProps>`
  padding: 1rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 25rem;
  height: 15rem;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};

  .head {
    display: flex;
    justify-content: space-between;
    h3 {
    }
  }
  .body {
    h4 {
      position: absolute;
      bottom: 0;
      right: 1rem;
      /* background: ${({ theme }) => theme.colors.primaryColor}; */
      background: ${({ theme, category }) =>
        (category.toLowerCase() === 'dessert' && theme.colors.primaryColor) ||
        (category.toLowerCase() === 'coffee' && theme.colors.darkish) ||
        theme.colors.darkGrey};
      color: ${({ theme }) => theme.colors.offWhite};

      box-shadow: ${({ theme }) => theme.shadow.lightShadow};
      padding: 0.3rem 0.5rem;
    }
    p {
      font-size: 1.1rem;
      padding: 1rem 0;
    }
  }
  /* 1006 */
  @media (max-width: 1008px) {
    width: 80%;
  }
  @media (max-width: 466px) {


    /* margin-right: 15rem; */
    /* margin: 0 auto; */
  }
  @media (max-width: 540px) {
    width: 100%;
    display: flex;
    flex-direction:column;
    padding: 0;
    border: none;
    margin: .5em 0;
    h3{
      margin-left: auto;
      width: 100%;
      text-align: right;
    }
  }
  button {
    position: absolute;
    bottom: 0.8rem;
    right: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
`;

const MenuItem: React.FC<Props> = ({ item }) => {
  console.log(item);
  return (
    <StyledMenuItem category={item.catecory}>
      <div className="head">
        <div className="img-wrapper">
          <img src={item.iamge.fixed.src} alt="image" />
        </div>
        <h3>
          {item.title} <span>{item.price}$</span>
        </h3>
      </div>

      <div className="body">
        <h4>{item.catecory}</h4>
        <p>{item.description.description}</p>
      </div>
    </StyledMenuItem>
  );
};
export default MenuItem;
