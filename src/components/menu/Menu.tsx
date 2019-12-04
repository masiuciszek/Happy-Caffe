import * as React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../types';
import { SecondaryBtn } from '../styles/Buttons';

interface Props {
  menuData: {
    node: MenuItemType;
  };
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
  const [categories, setCategories] = React.useState([]);
  const [items, setItmes] = React.useState<MenuItemType[]>(menuData);
  const [coffeeItems, setCoffeeItems] = React.useState(menuData);

  React.useEffect(() => {
    const categoriesArr = menuData.map(x => x.node.catecory);
    const uniqueValues: string[] = [...new Set(categoriesArr)];
    const addToUnique = ['all', ...uniqueValues];

    setCategories<React.SetStateAction<void[]>>(addToUnique);
  }, []);

  const handleItems = (value: string): void => {
    const tempItems: MenuItemType[] = [...items];
    if (value === 'all') {
      setCoffeeItems<React.SetStateAction<string>>(tempItems);
    } else {
      const filteredItems: MenuItemType[] = tempItems.filter(
        val => val.node.catecory === value
      );
      setCoffeeItems<React.SetStateAction<string>>(filteredItems);
    }

    // const apa = tempItems.forEach(x => console.log(x.node.catecory));
  };

  return (
    <>
      <Categories>
        {categories.map((category: string, index: number) => (
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
        {coffeeItems.map((item: MenuItemType) => (
          <MenuItem key={item.node.id} item={item.node} />
        ))}{' '}
      </StyledGrid>
    </>
  );
};
export default Menu;
