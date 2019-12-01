import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  shadow: {
    lightShadow: '2px 5px 3px 0px rgba(22, 2, 8, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(22, 2, 8, 0.5)',
    blackShadow: '4px 10px 5px 0px rgba(2, 2, 8, 0.5)',
  },
  colors: {
    secondary: '#013c70',
    blackShadow: 'rgba(0,0,0,0.5)',
    darkishGreen: '#53859f',
    danger: '#cd333d',
    offWhite: '#fffbf2',
    primaryColor: '#5d351c',
    primaryShadow: 'rgba(217,203,158,0.6)',
    white: '#fff',
    offWhite2: '#f7f7f7',
    mainBlack: '#222',
    dark: '#585d57',
    darkGrey: '#b2aeaa',
    black: '#393939',
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
