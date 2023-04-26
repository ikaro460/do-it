import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ButtonComp } from "../../components/Button";
import { Content, StyledContainer } from "./styles";

export const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <StyledContainer>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <ButtonComp onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </ButtonComp>
          <ButtonComp onClick={() => handleNavigation("/login")}>
            Login
          </ButtonComp>
        </div>
      </Content>
    </StyledContainer>
  );
};
