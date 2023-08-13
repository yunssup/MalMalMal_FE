import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #def1ff 0%, #f9f9f9 100%);
  height: 2264px;
`;
const PostButton = styled.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  margin-left: 45%;
  margin-top: 50px;
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: #d2d2d2;
`;
const Image1 = styled.img`
  width: 370px;
  height: 420px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
`;
const PhotoButton = styled.button`
  border-radius: 1000px;
  border: 3px solid #f9f9f9;
  background: #605e5e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 286px;
  height: 60px;
  flex-shrink: 0;
  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 14%;
  margin-top: 4%;
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
  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
    console.log("제목:", title); // 입력된 제목 출력
  };
  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };
  const handlePhoto = () => {
    console.log("사진추가가 클릭되었습니다.");
  };
  const handlePhotoClick = () => {
    console.log("버튼 눌림");
  };

  return (
    <Container>
      <PostButton onClick={handlePost}>
        <StyledFontAwesomeIcon icon={faCheckCircle} />
        게시하기
      </PostButton>
      <Image1 src="/망한쿵야.jpeg" alt="버튼 이미지" />
      <PhotoButton onClick={handlePhoto}>
        <StyledFontAwesomeIcon icon={faCheckCircle} />
        사진 추가하기
      </PhotoButton>

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
