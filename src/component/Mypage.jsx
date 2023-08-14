import React from "react";
import styled from "styled-components";
import Footer from "../base/Footer";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
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
const Signup = styled.div`
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
  margin-top: 5%;
  margin-bottom: 5%;
`;
const Hi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Box = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  border-radius: 30px;
  border: 4px solid #fe81a7;
  background: #fff;
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  margin-top: 10%;
  margin-bottom: 5%;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function SignupPage() {
  return (
    <Container>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Signup>마이페이지</Signup>
      <Hi>쿵야님, 반갑습니다!</Hi>
      <Box>내 글 관리</Box>
      <Box>공감한 글</Box>
      <Footer />
    </Container>
  );
}
