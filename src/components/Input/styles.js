import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--grey);
  color: var(--grey);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--grey);
    }
  }
`;
