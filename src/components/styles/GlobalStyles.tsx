import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Work+Sans:300,400,500,600,700,800,900&display=swap');
*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Bebas Neue', cursive;
  color: ${props => props.theme.colors.mainBlack};
  background: ${props => props.theme.colors.white};
  line-height: 1.4;
  font-size: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 1.25rem;
  letter-spacing: ${props => props.theme.size.mainSpacing};
}
p {
  margin-bottom: 1.25rem;
  font-family: 'Work Sans', sans-serif;
}
a {
  text-decoration: none;
}
}
main {
  flex-grow: 1 auto;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;

}
`;
