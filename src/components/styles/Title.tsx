import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  subTitle?: string;
}

const StyledTitle = styled.section`
  h3 {
    font-size: 3rem;
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

const Title: React.FC<Props> = ({ title, subTitle }) => {
  let a;
  return (
    <StyledTitle>
      <h3> {title} </h3>
      <h5> {subTitle} </h5>
    </StyledTitle>
  );
};
export default Title;
