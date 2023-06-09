import {
  AnimationContainer,
  Background,
  Content,
  StyledContainer,
} from "./styles";
import { ButtonComp } from "../../components/Button";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    console.log(user);
    api
      .post("/register", user)
      .then((response) => {
        toast.success("Sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro!"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <StyledContainer>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              name="passwordConfirm"
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
              error={errors.passwordConfirm?.message}
            />
            <ButtonComp type="submit">Enviar</ButtonComp>
            <p>
              Já tem uma conta? Faça o <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </StyledContainer>
  );
};
