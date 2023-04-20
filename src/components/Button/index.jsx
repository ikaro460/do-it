import { StyledContainer } from "./styles";

export const ButtonComp = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <StyledContainer whiteSchema={whiteSchema} type="button" {...rest}>
      {children}
    </StyledContainer>
  );
};
