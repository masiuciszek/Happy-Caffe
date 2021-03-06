import styled from 'styled-components';

interface P {
  upper: boolean;
}

export const StyledBtn = styled.button<P>`
  padding: 0.3rem 0.6rem;
  font-size: 1.1rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 8rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
  text-transform: ${({ upper }) => upper && 'uppercase'};
`;

export const SecondaryBtn = styled(StyledBtn)`
  background: ${({ theme }) => theme.colors.shark};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.1rem;
  position: relative;
  &:active {
    top: 0.2rem;
  }
`;
