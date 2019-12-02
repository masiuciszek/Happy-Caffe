import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Title from '../styles/Title';
import { StyledBtn } from '../styles/Buttons';

interface Props {
  data: {
    img: {
      childImageSharp: {
        fluid: {
          tracedSVG: {
            src: string;
          };
        };
      };
    };
  };
}

const StyledInfo = styled.section`
  padding: 4rem 2rem;
  max-width: 60vw;
  margin: 0 auto;
  p {
    letter-spacing: 0.1rem;
    line-height: 1.9rem;
  }
`;

const Info: React.FC<Props> = ({ data }) => {
  let a;

  return (
    <StyledInfo>
      {' '}
      <Title title="About Us" />
      <div className="info">
        <p>
          Caramelization coffee single shot est breve aromatic dark café au
          lait. Cup macchiato bar extra skinny body beans espresso. To go so,
          froth aftertaste, whipped breve sugar strong instant robust. Bar,
          cappuccino con panna doppio cup, redeye con panna acerbic flavour
          arabica. Steamed sweet, half and half java, crema cinnamon grounds,
          cappuccino iced qui robusta redeye. Trifecta, cortado at french press
          rich robust trifecta grinder.
        </p>
        <StyledBtn upper>About</StyledBtn>
      </div>
    </StyledInfo>
  );
};

export const pageQuery = graphql`
  query {
    img: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Info;
