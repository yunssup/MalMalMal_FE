import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(
    180deg,
    #ffc1d4 0%,
    #fff 35.42%,
    #fff 61.46%,
    #b5dfff 100%
  );

  /* 높이 */
  width: 370px;
  height: 690px;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
const Heading1 = styled.h1`
  color: #3d3f40;
  font-family: "Noto Sans KR";
  font-size: 33.854px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  padding-top: 194px;
`;
export default function Hello({ showAge }) {
  return (
    <Container>
      <Heading1>음성으로 소통하다</Heading1>
      <h2>말</h2>
      <h3>말</h3>
      <h4>말</h4>
      <Image src="/말말말로고.jpg" alt="버튼 이미지" />
      <h4>Dev by likelion 작고맵</h4>
    </Container>
  );
}
