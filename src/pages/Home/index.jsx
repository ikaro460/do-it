import { ButtonComp } from "../../components/Button";
import { Content, StyledContainer } from "./styles";

export const Home = () => {
  return (
    <StyledContainer>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <ButtonComp whiteSchema>Cadastre-se</ButtonComp>
          <ButtonComp>Login</ButtonComp>
        </div>
      </Content>
    </StyledContainer>
  );
};
