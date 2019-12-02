import * as React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../types';
interface Props {
  menuData: {
    node: MenuItemType;
  };
}

const StyledGrid = styled.div`
  padding: 4rem 0.5rem;
  display: grid;
  /* TODO:Delete this */
  border: 2px solid red;
  grid-gap: 16px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  @media (min-width: 1360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Menu: React.FC<Props> = ({ menuData }) => {
  let a;
  return (
    <StyledGrid>
      {' '}
      {menuData.map((item: MenuItemType) => (
        <MenuItem key={item.node.id} item={item.node} />
      ))}{' '}
    </StyledGrid>
  );
};
export default Menu;
