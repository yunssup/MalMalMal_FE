import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../base/Footer";
const Container = styled.div`
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
`;

const TopRow = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Top = styled.h1`
  color: #616161;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Title = styled.h2`
  flex: 2;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const Middle = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Name = styled.h1`
  color: #616161;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  width: 378px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
`;
const ProgressBar = styled.div`
  flex: 4;
  width: 54.547px;
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
  width: 80%;
  margin-top: 10px;
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
  background-color: rgba(255, 255, 255, 0);
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

export default function Click({ click }) {
  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };
  return (
    <Container>
      <TopRow>
        <Top>날짜 불러오기</Top>
      </TopRow>
      <Title>게시글 제목</Title>
      <Middle>
        <Name>작성자 별명</Name>
      </Middle>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <TimeInfo>
        <span>시작 시간</span>
        <span>끝나는 시간</span>
      </TimeInfo>
      <WhiteBox>쓴 글 불러오기</WhiteBox>
      <StyledButton onClick={handleButtonClick}>
        {" "}
        <Image src="/쿵야.jpg" alt="버튼 이미지" />
      </StyledButton>
      <Footer />
    </Container>
  );
}
