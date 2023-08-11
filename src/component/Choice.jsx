import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Readsns from "./Readsns";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 840px;
  --vh: 100%;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const TagContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Circle = styled.span`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  transition: transform 0.3s;
`;

const TagWithCircle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const SnsCircle = styled(Circle)`
  width: 202px; /* 원의 너비 조정 */
  height: 202px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({ color }) => color};
  stroke-width: 3px;
  stroke: #fff;
  border: 3px solid #ff92b3;
`;

const AreaCircle = styled(Circle)`
  width: 202px; /* 원의 너비 조정 */
  height: 202px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({ color }) => color};
  border: 3px solid rgba(53, 150, 225, 0.8);
`;

const SnsText = styled.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({ active }) => (active ? "0" : "1")};
  transition: opacity 0.3s;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AreaText = styled.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({ active }) => (active ? "0" : "1")};
  transition: opacity 0.3s;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TagWithCircleWithText1 = styled(TagWithCircle)`
  position: relative;

  &:hover {
    ${Circle} {
      transform: scale(1.5);
    }
    ${SnsText}, ${AreaText} {
      opacity: 0; /* hover시 글씨 사라짐 */
    }

    &::after {
      content: "소식 나누기"; /* 줄바꿈을 위한 공백 문자 */
      white-space: pre; /* white-space 속성을 사용하여 공백 문자 유지 */
      position: absolute;
      top: 50%; /* 원 중앙에 정렬 */
      left: 30%; /* 원 중앙에 정렬 */
      transform: translate(-50%, -50%); /* 원 중앙에 정렬 */
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      opacity: 1;
    }
  }
`;

const TagWithCircleWithText2 = styled(TagWithCircle)`
  position: relative;

  &:hover {
    ${Circle} {
      transform: scale(1.5);
    }
    ${SnsText}, ${AreaText} {
      opacity: 0; /* hover시 글씨 사라짐 */
    }
    &::after {
      content: "지역 정보"; /* 새로운 텍스트 내용 */
      position: absolute;
      top: 50%; /* 원 중앙에 정렬 */
      right: -15%; /* 원 중앙에 정렬 */
      transform: translate(-50%, -50%); /* 원 중앙에 정렬 */
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      opacity: 1;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 없애기 */
`;
export default function Hello({ showAge }) {
  return (
    <Container>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Title>
        어떤 서비스를
        <br />
        이용하시겠어요?
      </Title>
      <TagContainer1>
        <StyledLink to="/readsns">
          {" "}
          {/* StyledLink 컴포넌트로 감싸서 스타일 적용 */}
          <TagWithCircleWithText1>
            <SnsCircle color="#FF92B3;" />
            <SnsText active={false}>소식 나누기</SnsText>
          </TagWithCircleWithText1>
        </StyledLink>
      </TagContainer1>{" "}
      <TagContainer2>
        <StyledLink to="/login">
          {" "}
          {/* StyledLink 컴포넌트로 감싸서 스타일 적용 */}
          <TagWithCircleWithText2>
            <AreaText active={false}>지역 정보</AreaText>
            <AreaCircle color="#7fc8f8" />
          </TagWithCircleWithText2>
        </StyledLink>
      </TagContainer2>{" "}
    </Container>
  );
}
