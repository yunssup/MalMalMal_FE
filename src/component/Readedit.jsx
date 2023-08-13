import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Footer from "../base/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #def1ff 0%, #f9f9f9 100%);
  height: 2264px;
`;
const Image1 = styled.img`
  width: 370px;
  height: 420px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 15%;
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
  width: 370px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  /* margin-top: -8%; */
`;
const ProgressBar = styled.div`
  background: #aba8a8;
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: transparent;
  transform-origin: left;
  animation: ${(props) =>
    props.isactive
      ? css`
          ${progressBarAnimation} 10s linear infinite
        `
      : "none"};
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: px;
  margin-left: 5%;
`;
const Title1 = styled.h2`
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
const Name1 = styled.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -9%;
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center;
  align-items: center;
  color: #011821;
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 2% 5%;
  height: 100px; /* 원하는 높이로 조정 */
`;

const Title = styled.h2`
  color: #2b1800;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 줄 간격 조정 */
  margin-bottom: -27px;
`;

const Sub = styled.h5`
  color: #5b5858;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: 25px;
`;

const WhiteBox1 = styled.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`;

const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;

export default function Click() {
  const [isProgressRunning, setIsProgressRunning] = useState(false);

  const handleButtonClick = () => {
    console.log("버튼 눌림");

    // 프로그래스 바 실행 여부를 토글
    setIsProgressRunning((prevState) => !prevState);
  };

  return (
    <Container>
      <Image1 src="/망한쿵야.jpeg" alt="버튼 이미지" />
      <ProgressBarContainer>
        <ProgressBar isActive={isProgressRunning} />
      </ProgressBarContainer>{" "}
      <TimeInfo>
        <span>00:00</span>
        <span>99:99</span>
      </TimeInfo>
      <Title1>여기가 제목입니당 </Title1>
      <Name1>작성자 별명</Name1>
      <WhiteBox>
        <Title>모집 기간</Title>
        <Sub>2023년 9월 5일~</Sub>
      </WhiteBox>
      <WhiteBox>
        <Title>진행 기간</Title>
        <Sub>2023년 9월 5일~</Sub>
      </WhiteBox>
      <WhiteBox>
        <Title>주최 주소</Title>
        <Sub>중구 구민센터</Sub>
      </WhiteBox>
      <WhiteBox>
        <Title>연락처</Title>
        <Sub>02-1234-5678</Sub>
      </WhiteBox>
      <WhiteBox1>텍스트 샘플입니다</WhiteBox1>
      <ClickButton onClick={handleButtonClick}>
        <Image src="/재생버튼.jpg" alt="버튼 이미지" />
      </ClickButton>
      <Footer />
    </Container>
  );
}
