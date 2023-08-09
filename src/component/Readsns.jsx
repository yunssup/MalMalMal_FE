import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: var(
    --unnamed,
    conic-gradient(
      from 180deg at 50% 50%,
      #ffa4bf 0deg,
      #faea9c 125.62500357627869deg,
      #c7e7ff 228.75000715255737deg,
      #ffa4bf 360deg
    )
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
`;

const TopRow = styled.div`
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
const WhiteBox = styled.div`
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
export default function Hello({ showAge }) {
  return (
    <Container>
      <TopRow>
        <Top>날짜 불러오기</Top>
        <Top>작성자 별명</Top>
      </TopRow>
      <Title>게시글 제목</Title>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <TimeInfo>
        <span>시작 시간</span>
        <span>끝나는 시간</span>
      </TimeInfo>
      <EmojiIcons>
        <i className="fas fa-share-alt">이모지안떠</i>
        <i className="fas fa-heart"></i>
      </EmojiIcons>
      <WhiteBox>쓴 글 불러오기</WhiteBox>
    </Container>
  );
}
