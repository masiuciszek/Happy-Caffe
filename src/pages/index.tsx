import React from 'react';
import Layout from '../components/styles/layout';
import SEO from '../components/seo';
import { PageWrapper } from '../components/styles/PageWrapper';
import { graphql } from 'gatsby';
import BgImage from '../components/BgImage';
import { StyledBtn } from '../components/styles/Buttons';

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

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BgImage
        imageData={data.img.childImageSharp.fluid}
        styleClass="mainBg"
        title="Happy Caffe"
      >
        <StyledBtn>Menu</StyledBtn>
      </BgImage>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    img: file(relativePath: { eq: "img1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
