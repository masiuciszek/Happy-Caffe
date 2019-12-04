import * as React from 'react';
import { graphql, Link } from 'gatsby';
import BgImage from '../components/BgImage';
import { StyledBtn } from '../components/styles/Buttons';
import Layout from '../components/styles/layout';
import SEO from '../components/seo';
import About from '../components/about/About';

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

const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      {' '}
      <SEO title="About" />
      <BgImage
        imageData={data.img.childImageSharp.fluid}
        styleClass="mainBg2"
        title="Our Story"
        subTitle="We are the first truly organic coffee shop in
        Bangkok to have enough plugs..."
        page
      >
        <Link to="/contact">
          <StyledBtn>Contact</StyledBtn>
        </Link>
      </BgImage>
      <About />
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
export default AboutPage;
