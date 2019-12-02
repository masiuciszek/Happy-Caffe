import * as React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

interface BgImageP {
  imageData: string;
  styleClass: string;
  title: string;
  subTitle: string;
  children: React.ReactNode;
  page: boolean;
}

const StyledBg = styled.section`
  position: relative;
  background: rgb(2, 0, 36);
  z-index: 2;
  .mainBg,
  .mainBg2 {
    min-height: ${({ page }) => (page ? `calc(69vh - 62px)` : '30vh')};
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.3671043417366946) 16%,
      rgba(152, 66, 10, 0.239093137254902) 40%,
      rgba(121, 56, 14, 0.3998774509803921) 100%
    );
  }
  .mainBg2 {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1671043417366946) 16%,
      rgba(152, 66, 10, 0.139093137254902) 40%,
      rgba(121, 56, 14, 0.2998774509803921) 100%
    );
  }
  .ImageContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 52vh;
    h1 {
      font-size: 2.5rem;
    }
    h1,
    h4 {
      color: ${({ theme, page }) =>
        page ? theme.colors.white : theme.colors.offWhite};
      background: ${({ theme, page }) =>
        page ? theme.colors.blackShadow : ''};
      padding: 1rem 1.4rem;
    }
    h4 {
    }
  }
`;

const BgImage: React.FC<BgImageP> = ({
  imageData,
  styleClass,
  title,
  children,
  subTitle,
  page,
}) => {
  return (
    <StyledBg page={page}>
      <BackgroundImage className={styleClass} fluid={imageData}>
        <div className="ImageContent">
          <h1>{title}</h1>
          <h4>{subTitle}</h4>
          {children}
        </div>
      </BackgroundImage>
    </StyledBg>
  );
};

BgImage.defaultProps = {
  title: 'Happy Caffe',
  styleClass: 'mainBg',
};

export default BgImage;
