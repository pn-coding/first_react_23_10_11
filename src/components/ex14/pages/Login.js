import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  console.log(isValid);
  // =>유효성 검사 후 boolean값으로 반환함

  //   console.log(errors && errors.username && errors.username.message);
  //   console.log(errors?.username?.message);
  //   =>&& 연산자로 객체에 접근하는것 보다 옵셔널 체이닝()을 이용하여
  //   객체 안에 있는 객체를 쉽게 접근할수 있음

  const loginHandler = (data) => {
    //이벤트 함수 매개변수의 첫번째 자리는
    //유저가 입력한 내용을 객체형태로 반환함
    // console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해 주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "숫자와 문자를 합쳐서 사용 가능",
            },
          })}
          type="text"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};

// *useForm
// =>폼 관련 패키지
// ex)
// const {
//   register, // input태그 name 및 등록 역할
//   handleSubmit, // form태그 이벤트 등록
//   formState:{errors, isValid} // form상태를 관리
//                               // errors: form 유효성 검사 후 에러를 객체로 반환함,
//                               // isValid: form상태가 유효한지 boolean값으로 반환
// } = useForm({
//   mode: "onChange" // form 모드로 유효성 검사를 어떻게 처리할지 값은 작성 할 수 있음
// });

// <input {...register("name명", {
//   required: "" // 현 input값이 필수값인지 아닌지 boolean값 및 문자열로 작성 가능
// })} />
