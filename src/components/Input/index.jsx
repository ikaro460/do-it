import { InputContainer, StyledContainer } from "./styles";

export const Input = ({ label, icon: Icon, ...rest }) => {
  return (
    <StyledContainer>
      <div>{label}</div>
      <InputContainer>
        {Icon && <Icon />}
        <input {...rest} />
      </InputContainer>
    </StyledContainer>
  );
};
