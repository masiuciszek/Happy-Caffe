import * as React from 'react';
import { MenuItemType } from '../../types';
import styled from 'styled-components';
interface Props {
  item: MenuItemType;
}

const StyledMenuItem = styled.section`
  /*  */
`;

const MenuItem: React.FC<Props> = ({ item }) => {
  let a;
  return (
    <StyledMenuItem>
      {' '}
      <h3>{item.title}</h3>{' '}
    </StyledMenuItem>
  );
};
export default MenuItem;
