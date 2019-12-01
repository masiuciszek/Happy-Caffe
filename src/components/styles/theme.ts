import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  shadow: {
    lightShadow: '2px 5px 3px 0px rgba(22, 2, 8, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(22, 2, 8, 0.5)',
    blackShadow: '4px 10px 5px 0px rgba(2, 2, 8, 0.5)',
  },
  colors: {
    secondary: '#101e23',
    blackShadow: 'rgba(0,0,0,0.5)',
    darkish: '#79380e',
    danger: '#cd333d',
    offWhite: '#fffbf2',
    primaryColor: '#cc9136',
    primaryShadow: 'rgba(217,203,158,0.6)',
    white: '#fefefe',
    offWhite2: '#f7f7f7',
    mainBlack: '#222',
    dark: '#bbbabc',
    darkGrey: '#6c6d6a',
    black: '#101e23',
    shark: '#1b2428',
    coffee: '#786a54',
  },
  size: {
    maxWidth: '1000px',
    mainSpacing: '4px',
  },
  transition: {
    mainTransition: 'all 0.3s ease-in-out',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};

export default theme;
