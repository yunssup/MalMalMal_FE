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

const PostButton = styled.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white; /* 추가된 부분: 글자 색상을 흰색으로 지정 */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;
export default function Hello({ showAge }) {
  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
  };

  return (
    <Container>
      <PostButton onClick={handlePost}>게시하기</PostButton>
      <WhiteBox>제목을 입력하세용</WhiteBox>
      <WhiteBox>텍스트 샘플입니다옹</WhiteBox>
    </Container>
  );
}
