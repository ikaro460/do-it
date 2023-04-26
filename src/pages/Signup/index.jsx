import {
  AnimationContainer,
  Background,
  Content,
  StyledContainer,
} from "./styles";
import { ButtonComp } from "../../components/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export const Signup = () => {
  return (
    <StyledContainer>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome" />
            <Input icon={FiMail} label="Email" placeholder="Seu melhor email" />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
            />
            <ButtonComp>Enviar</ButtonComp>
            <p>
              Já tem uma conta? Faça o <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </StyledContainer>
  );
};
