import React, { useState } from "react";
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
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
`;

const ImageButton = styled.button`
  border-radius: 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;
const MozipButton = styled.button`
  border-radius: 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
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
  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
  };

  const handleImage = () => {
    console.log("사진 추가 버튼이 클릭되었습니다.");
  };
  const handleMozip = () => {
    console.log("모집 유무 버튼이 클릭되었습니다.");
  };
  return (
    <Container>
      <PostButton onClick={handlePost}>게시하기</PostButton>
      <Image src="말말말로고.jpg" alt="로고 이미지" />
      <ImageButton onClick={handleImage}>사진추가하기</ImageButton>
      <MozipButton onClick={handleMozip}>모집유무버튼</MozipButton>
      <WhiteBox1>
        <span>제목은 요따적어잉!</span>
      </WhiteBox1>
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
      <WhiteBox3>글쓰기입니다앙</WhiteBox3>
    </Container>
  );
}
