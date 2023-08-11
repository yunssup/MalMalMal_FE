import React, { useState } from "react";
import styled from "styled-components";

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
  width: 340px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 5% 0%;
  &::placeholder {
    color: #b9b4b4;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LoginButton = styled.button`
  border-radius: 10px;
  background: #fff;
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
  color: #454545;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 여기에서 로그인 처리를 수행합니다.
    console.log("Username:", username);
    console.log("Password:", password);
    // 실제로는 서버로 요청을 보내거나 다른 로그인 처리를 수행해야 합니다.
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
      <LoginButton onClick={handleLogin}>접속하기</LoginButton>
    </LoginContainer>
  );
}
