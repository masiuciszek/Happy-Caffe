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
  /*  */
`;

const Menu: React.FC<Props> = ({ menuData }) => {
  let a;
  console.log(menuData);
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
