import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 840px;
  --vh: 100%;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const InputField = styled.input`
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 5% 0%;
  padding: 10px 15px;
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: border-color 0.3s, background-color 0.3s; /* 추가된 부분 */

  &::placeholder {
    color: #b9b4b4;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border-color: #ff8d8f; /* 변경된 border 색상 */
    background: #fff7f7; /* 변경된 background 색상 */
    outline: none;
  }
`;
const LoginButton = styled.button`
  border-radius: 10px;
  background: ${({ isFilled }) =>
    isFilled ? "#ff8d8f" : "#fff"}; /* 동적으로 배경 색상 변경 */
  color: ${({ isFilled }) =>
    isFilled ? "#fff" : "#454545"}; /* 동적으로 글자 색상 변경 */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 181px;
  height: 66px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s; /* 추가된 부분 */
  margin-top: 20%;
`;

const SignUpButton = styled.button`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  margin-top: 15%;
`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const isFormFilled = username !== "" && password !== ""; // 아이디와 비밀번호가 모두 입력되었는지 확인

  const handleLogin = () => {
    history.push("/choice");

    console.log("아이디:", username);
    console.log("비밀번호:", password);
    // console.log("로그인 상태 유지:", rememberMe);
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <LoginContainer>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Login>로그인</Login>
      <InputField
        type="text"
        placeholder="아이디 입력"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoginButton isFilled={isFormFilled} onClick={handleLogin}>
        접속하기
      </LoginButton>
      <SignUpButton onClick={handleSignUp}>
        회원가입
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </SignUpButton>
    </LoginContainer>
  );
}
