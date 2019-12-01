import uuid from 'uuid/v4';
const links: { id: string; path: string; text: string }[] = [
  {
    id: uuid(),
    path: '/',
    text: 'home',
  },
  {
    id: uuid(),
    path: '/info',
    text: 'info',
  },
  {
    id: uuid(),
    path: '/about',
    text: 'about',
  },
  {
    id: uuid(),
    path: '/menu',
    text: 'menu',
  },
  {
    id: uuid(),
    path: '/gallery',
    text: 'gallery',
  },
  {
    id: uuid(),
    path: '/contact',
    text: 'contact',
  },
];

export default links;
