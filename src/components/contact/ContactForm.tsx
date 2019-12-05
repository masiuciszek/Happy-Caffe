import * as React from 'react';
import styled from 'styled-components';
import { StyledBtn } from '../styles/Buttons';

interface Props {}

const StyledContact = styled.section`
  padding: 4rem 1rem;
  min-height: 60vh;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledForm = styled.form`
  .head {
    display: flex;
    justify-content: center;
  }
  button {
    margin: 0 auto;
    display: block;
    width: 12rem;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

const FormGroup = styled.div`
  padding: 1rem 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem 0.9rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  &:focus {
    transform: scale(1.01);
    width: 32rem;
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
  @media (min-width: 838px) {
    width: 20rem;
  }
  /* @media (min-width: 1038px) {
    width: 25rem;
  } */
`;
const StyledTextArea = styled.textarea`
  padding: 0.5rem 0.9rem;
  width: 55%;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 8rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  font-size: 1.1rem;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
  @media (min-width: 1238px) {
    width: 60%;
  }
`;

const ContactForm: React.FC<Props> = () => {
  return (
    <StyledContact>
      {' '}
      <StyledForm method="POST" action="https://formspree.io/test123@gmail.com">
        <div className="head">
          <FormGroup>
            <StyledInput type="text" placeholder="name" />
          </FormGroup>
          <FormGroup>
            <StyledInput type="email" placeholder="email" />
          </FormGroup>
        </div>
        <FormGroup>
          <StyledTextArea placeholder="message" />
        </FormGroup>
        <FormGroup>
          <StyledBtn type="submit">Send</StyledBtn>
        </FormGroup>
      </StyledForm>{' '}
    </StyledContact>
  );
};
export default ContactForm;
