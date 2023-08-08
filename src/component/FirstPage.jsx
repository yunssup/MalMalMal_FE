import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; // useHistory 추가

const Container = styled.div`
  background: linear-gradient(
    180deg,
    #ffc1d4 0%,
    #fff 35.42%,
    #fff 61.46%,
    #b5dfff 100%
  );

  /* 높이 */
  width: 430px;
  height: 932px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

const Image2 = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

const Heading1 = styled.h1`
  color: #3d3f40;
  font-family: "Noto Sans KR";
  font-size: 33.854px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  /* padding-top: 194px; */
`;

export default function FirstPage() {
  // 컴포넌트 이름 수정
  const history = useHistory(); // useHistory 추가

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/hello"); // 페이지를 /hello로 이동
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]); // history를 의존성 배열에 추가

  return (
    <Container>
      <Heading1>음성으로 소통하다</Heading1>
      <Image src="/말말말로고.jpg" alt="버튼 이미지" />
      <Image2 src="/말말말글씨.jpg" alt="버튼 이미지" />
      <h4>Dev by likelion 작고맵</h4>
    </Container>
  );
}
