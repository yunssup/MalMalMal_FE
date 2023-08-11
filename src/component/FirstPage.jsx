import React, { useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { FadeContainer } from "./Styled"; // FadeContainer import 경로 수정
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #ffc1d4 0%,
    #fff 35.42%,
    #fff 61.46%,
    #b5dfff 100%
  );
  height: 840px;
`;

const Heading1 = styled.p`
  margin-top: 30%;
  margin-left: 10%;
  color: #3d3f40;
  font-family: "Noto Sans KR";
  font-size: 33.854px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  max-width: 100%;
  max-height: 150px;
`;

const Image2 = styled.img`
  margin-bottom: 30%;
  max-width: 100%;
  max-height: 150px;
  margin: 0% 10%;
  width: auto;
  height: auto;
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 360px;
  height: 360px;
`;

const Row = styled.h4`
  display: flex;
  direction: column;
  justify-content: center;
  color: white;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  margin-top: auto;
`;

export default function FirstPage() {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/hello");
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <FadeContainer>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <Container>
          <Heading1>음성으로 소통하다</Heading1>
          <Image2 src="/말말말글씨.jpg" alt="버튼 이미지" />
          <Image src="/시작로고.jpg" alt="버튼 이미지" />
          <Row>Dev by likelion 작고맵</Row>
        </Container>
      </CSSTransition>
    </FadeContainer>
  );
}
