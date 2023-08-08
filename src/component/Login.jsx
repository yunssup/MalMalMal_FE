import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px;
  width: 250px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
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
      <h1>로그인</h1>
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
