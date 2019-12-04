import * as React from 'react';
import { MenuItemType } from '../../types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledBtn } from '../styles/Buttons';

interface Props {
  item: MenuItemType;
  // item: any;
}

const StyledMenuItem = styled.section`
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
      background: ${({ theme }) => theme.colors.primaryColor};
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
    width: 90%;
    margin-right: 7rem;
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
  return (
    <StyledMenuItem>
      <div className="head">
        <div className="img-wrapper">
          <img src={item.iamge.fixed.src} alt="iamge" />
          {/*<Img fixed={item.iamge.fixed} />*/}
        </div>
        <h3>
          {item.title} <span>{item.price}$</span>
        </h3>
      </div>

      <div className="body">
        <h4>CateGorey: {item.catecory}</h4>
        <p>{item.description.description}</p>
      </div>
    </StyledMenuItem>
  );
};
export default MenuItem;
