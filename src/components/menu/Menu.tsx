import * as React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../types';
import { SecondaryBtn } from '../styles/Buttons';

interface Props {
  menuData: {
    node: MenuItemType;
  };
  // menuData: any;
}

const StyledGrid = styled.div`
  padding: 4rem 0.5rem;
  display: grid;

  grid-gap: 16px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  @media (min-width: 1360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Categories = styled.section`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 45rem;
  margin: 0 auto;
  grid-gap: 20px;
  button {
    margin: 0.4rem;
    text-transform: uppercase;
  }
  #all {
  }
  @media (min-width: 845px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
`;

const Menu: React.FC<Props> = ({ menuData }) => {
  const [state, setstate] = React.useState([]);

  React.useEffect(() => {
    const categoriesArr = menuData.map(x => x.node.catecory);
    const uniqueValues = [...new Set(categoriesArr)];
    setstate(uniqueValues);
  }, []);

  const handleItems = value => {
    console.log(value);
  };

  return (
    <>
      <Categories>
        <SecondaryBtn id="all">All</SecondaryBtn>
        {state.map((category: string, index: number) => (
          <SecondaryBtn
            type="button"
            key={index}
            onClick={() => handleItems(category)}
          >
            {' '}
            {category}{' '}
          </SecondaryBtn>
        ))}
      </Categories>
      <StyledGrid>
        {' '}
        {menuData.map((item: MenuItemType) => (
          <MenuItem key={item.node.id} item={item.node} />
        ))}{' '}
      </StyledGrid>
    </>
  );
};
export default Menu;
