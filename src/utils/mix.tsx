import uuid from 'uuid/v4';
import React from 'react';
import { Instagram, Facebook, Github } from 'styled-icons/feather';

const links: { id: string; path: string; text: string }[] = [
  {
    id: uuid(),
    path: '/',
    text: 'home',
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
    path: '/contact',
    text: 'contact',
  },
];

export const icons: {
  id: string;
  icon: React.ReactNode | React.ReactInstance;
  url: string;
}[] = [
  {
    id: uuid(),
    icon: <Facebook size="35" />,
    url: 'https://www.marcellable.com/',
  },
  {
    id: uuid(),
    icon: <Instagram size="35" />,
    url: 'https://www.instagram.com/masiuciszek/',
  },
  {
    id: uuid(),
    icon: <Github size="35" />,
    url: 'https://github.com/masiuciszek?tab=repositories',
  },
];

export default links;
