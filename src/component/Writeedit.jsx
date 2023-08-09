import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: var(
    --2,
    conic-gradient(
      from 180deg at 50% 50%,
      #ffe3eb 0deg,
      #fcf5d5 125.62500357627869deg,
      #e2f3ff 228.75000715255737deg,
      #ffe3eb 360deg
    )
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
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
  width: 360px;
  height: 24px;
  flex-shrink: 0;

  border-radius: 50px;
  border: 2px solid #000;
  background: #fff;
`;

const ProgressBar = styled.div`
  width: 360px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 50px; /* 수정: ProgressBarContainer와 동일한 값으로 변경 */
  background: var(--unnamed, #011821);
  transform-origin: left;
  animation: ${progressBarAnimation} 10s linear infinite;
  /* border: 2px solid #000; */
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
`;
const EmojiIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  font-size: 24px; /* Adjust font size as needed */
`;
const WhiteBox3 = styled.div`
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

const WhiteBox1 = styled.div`
  position: relative;
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
`;
const WhiteBox2 = styled.div`
  position: relative;
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
`;
const Statebox = styled.div`
  width: 127px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--2, #ff6392);
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Infor = styled.h1`
  color: #616161;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Subscribe = styled.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

export default function Hello({ showAge }) {
  const handleSub = () => {
    // 버튼 클릭 시 동작할 함수 정의
    console.log("구독하기 버튼이 클릭되었습니다.");
    // 실제로는 구독 처리를 수행해야 합니다.
  };
  return (
    <Container>
      <WhiteBox1>
        <Image src="/라이언.jpg" alt="로고 이미지" />
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
        <TimeInfo>
          <span>시작 시간</span>
          <span>끝나는 시간</span>
        </TimeInfo>
      </WhiteBox1>
      <Statebox>모집중</Statebox>
      <Title>게시글 제목</Title>
      <Information>
        <Infor>작고맵</Infor>
        <Subscribe onClick={handleSub}>구독하기</Subscribe>
      </Information>
      <WhiteBox2>
        {" "}
        <span>모집기간</span>
        <span>2023~~~~</span>
      </WhiteBox2>
      <WhiteBox2>
        {" "}
        <span>진행기간</span>
        <span>2023~~~~</span>
      </WhiteBox2>
      <WhiteBox2>
        {" "}
        <span>주최 주소</span>
        <span>중구 필동로 어쩌구</span>
      </WhiteBox2>
      <WhiteBox2>
        {" "}
        <span>연락처</span>
        <span>0101234568789</span>
      </WhiteBox2>
      <WhiteBox3>쓴 글 불러오기</WhiteBox3>
    </Container>
  );
}
