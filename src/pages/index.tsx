import React from 'react';
import Layout from '../components/styles/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import BgImage from '../components/BgImage';
import { StyledBtn } from '../components/styles/Buttons';
import Info from '../components/home/Info';

interface IndexProps {
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

const IndexPage: React.FC<IndexProps> = ({ data }): JSX.Element => {
  return (
    <Layout>
      <SEO title="Home" />
      <BgImage
        imageData={data.img.childImageSharp.fluid}
        styleClass="mainBg"
        title="Happy Caffe"
        subTitle="From the best organic coffee to delicious cakes,
        tasty sandwitches and lots of plugs!"
        page
      >
        <StyledBtn upper>Menu</StyledBtn>
      </BgImage>
      <Info />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    img: file(relativePath: { eq: "img3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
