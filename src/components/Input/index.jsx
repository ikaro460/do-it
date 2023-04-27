import { InputContainer, StyledContainer } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <StyledContainer>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </StyledContainer>
  );
};
