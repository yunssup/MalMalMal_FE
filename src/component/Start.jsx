import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
`;

export default function Hello({ showAge }) {
  const handleLoginButtonClick = () => {
    console.log("로그인 버튼 클릭");
    // 여기에 로그인 버튼을 클릭했을 때 수행할 동작을 추가할 수 있습니다.
  };

  const handleSignupButtonClick = () => {
    console.log("회원가입 버튼 클릭");
    // 여기에 회원가입 버튼을 클릭했을 때 수행할 동작을 추가할 수 있습니다.
  };

  return (
    <div>
      <h1>로그인</h1>
      <Button onClick={handleLoginButtonClick}>로그인</Button>

      <h2>회원가입</h2>
      <Button onClick={handleSignupButtonClick}>회원가입</Button>
    </div>
  );
}
