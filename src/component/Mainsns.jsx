import React, { useState } from "react";
import styled, { css } from "styled-components"; // ThemeProvider import 추가
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff6f6;
  width: 370px;
`;
const Top = styled.div`
  background: var(--unnamed, #fefbff);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
`;
const Logo = styled.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
  margin-left: 3%;
`;
const ClickButton = styled.button`
  margin-right: 3%;

  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 143px;
  height: 40px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 24px;
  border: 2px solid var(--unnamed, #fefbff);
  background: #252728;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Title = styled.h1`
  color: #011821;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BestMain = styled.div`
  display: flex;
  flex-direction: row;
`;
const BestPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 221px;
  height: 204px;
  flex-shrink: 0;
`;
const Name = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;
const Bar = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
`;
const Image = styled.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`;
const MainPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 221px;
  height: 204px;
  flex-shrink: 0;
`;
const Name1 = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text1 = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;
const Bar1 = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
`;
const StyledFontAwesomeIcon1 = styled(FontAwesomeIcon)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
`;
const Image1 = styled.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`;

export default function Click() {
  const handleLoginClick = () => {
    console.log("로그인 버튼이 클릭되었습니다.");
    // 로그인 버튼이 클릭되었을 때, 로그인 페이지로 이동
    history.push("/Login"); // 이동할 경로로 수정해야 함
  };
  const mainPostsData = [
    // 실제 데이터로 대체할 수 있습니다.
    { name: "닉네임1", title: "제목1" },
    { name: "닉네임2", title: "제목2" },
    { name: "닉네임3", title: "제목3" },
  ];
  return (
    <Container>
      <Top>
        <Logo src="/말말말로고.jpg" alt="버튼 이미지" />
        <ClickButton onClick={handleLoginClick}>변경필요</ClickButton>
      </Top>
      <Title>인기글</Title>
      <BestMain>
        {/* mainPostsData 배열을 매핑합니다. */}
        {mainPostsData.map((data, index) => (
          <MainPost key={index}>
            <Name>{data.name}</Name>
            <Text>{data.title}</Text>
            <Bar>
              <StyledFontAwesomeIcon icon={faHeart} />
              <Image src="/재생.png" alt="버튼 이미지" />
            </Bar>
          </MainPost>
        ))}
      </BestMain>{" "}
      <Title>전체글</Title>
      <MainPost>
        {/* mainPostsData 배열을 매핑합니다. */}
        {mainPostsData.map((data, index) => (
          <MainPost key={index}>
            <Name1>{data.name}</Name1>
            <Text1>{data.title}</Text1>
            <Bar1>
              <StyledFontAwesomeIcon1 icon={faHeart} />
              <Image1 src="/재생.png" alt="버튼 이미지" />
            </Bar1>
          </MainPost>
        ))}{" "}
      </MainPost>
      <Footer />
    </Container>
  );
}
