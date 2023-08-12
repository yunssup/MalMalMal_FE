import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../base/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`;
const Top = styled.h1`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 400;
  padding-left: 12%;
  margin-top: 15%;
`;
const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: -3%;
  padding-left: 2%;
  padding-right: 2%;
`;
const Name = styled.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -3%;
`;
const progressBarAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;
const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  margin-top: -8%;
`;
const ProgressBar = styled.div`
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: #aba8a8;
  transform-origin: left;
  animation: ${progressBarAnimation} 10s linear infinite;
`;

const TimeInfo = styled.div`
  flex: 5;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
`;

const WhiteBox = styled.div`
  flex: 6;
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  margin-bottom: -80px;
  border: 2px solid black;
`;

export default function Click() {
  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };

  return (
    <Container>
      <Top>날짜 불러오기</Top>
      <Title>여기가 제목입니당 </Title>
      <Name>작성자 별명</Name>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <TimeInfo>
        <span>00:00</span>
        <span>99:99</span>
      </TimeInfo>
      <WhiteBox>쓴 글 불러오기</WhiteBox>
      <StyledButton onClick={handleButtonClick}>
        <Image src="/쿵야.jpg" alt="버튼 이미지" />
      </StyledButton>
      <Footer />
    </Container>
  );
}
