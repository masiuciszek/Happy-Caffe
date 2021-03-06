import * as React from 'react';
import styled from 'styled-components';
import Title from '../styles/Title';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  data: {
    site: {
      siteMetadata: { title: string };
    };
  };
}
const StyledAbout = styled.section`
  padding: 4rem 1rem;

  width: 80vw;
  margin: 0 auto;
  .content {
    padding: 1.5rem 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    article {
      width: 100%;

      margin: 0 auto;
      padding: 0.3rem 0.8rem;
      box-shadow: ${({ theme }) => theme.shadow.lightShadow};
      font-size: 1.1rem;
      line-height: 1.9rem;
      background: ${({ theme }) => theme.colors.blackShadow};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  @media (min-width: 999px) {
    .content {
      article {
        padding: 2rem 3rem;
        width: 80%;
      }
    }
  }
`;

const About: React.FC<Props> = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.description);
  return (
    <StyledAbout>
      {' '}
      <Title
        title={`About ${data.site.siteMetadata.title}`}
        subTitle={`${data.site.siteMetadata.description}`}
      />{' '}
      <div className="content">
        <article>
          "Bar, cappuccino con panna doppio cup, redeye con panna acerbic
          flavour arabica. Steamed sweet, half and half java, crema cinnamon
          grounds, cappuccino iced qui robusta redeye. Trifecta, cortado at
          french press rich robust trifecta grinder. Lungo irish, grounds in,
          galão sweet caramelization grinder french press flavour.
          Decaffeinated, lungo, id extraction instant skinny foam cappuccino
          café au lait chicory." - Mrs Happy Founder
        </article>
      </div>
    </StyledAbout>
  );
};

export default About;
