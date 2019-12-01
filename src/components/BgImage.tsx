import * as React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

interface BgImageP {
  imageData: string;
  styleClass: string;
  title: string;
  children: React.ReactNode;
}

const StyledBg = styled.section`
  /*  */
`;

const BgImage: React.FC<BgImageP> = ({
  imageData,
  styleClass,
  title,
  children,
}) => {
  return (
    <StyledBg>
      <BackgroundImage className={styleClass} fluid={imageData}>
        <h1>{title}</h1>
        {children}
      </BackgroundImage>
    </StyledBg>
  );
};

BgImage.defaultProps = {
  title: 'Happy Caffe',
  styleClass: 'mainBg',
};

export default BgImage;
