import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // react-router-dom에서 Link 가져오기
import Readsns from "./Readsns";
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const Title = styled.h1`
  /* 제목 스타일을 추가하세요 */
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
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
  width: 140px; /* 원의 너비 조정 */
  height: 140px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({ color }) => color};
  stroke-width: 3px;
  stroke: #fff;
  border: 3px solid #fad20c;
`;

const AreaCircle = styled(Circle)`
  width: 140px; /* 원의 너비 조정 */
  height: 140px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({ color }) => color};
  border: 3px solid rgba(53, 150, 225, 0.8);
`;

const SnsText = styled.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({ active }) => (active ? "0" : "1")};
  transition: opacity 0.3s;
`;

const AreaText = styled.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({ active }) => (active ? "0" : "1")};
  transition: opacity 0.3s;
`;

const TagWithCircleWithText = styled(TagWithCircle)`
  &:hover {
    ${Circle} {
      transform: scale(1.5);
    }
    ${SnsText}, ${AreaText} {
      opacity: 0; /* hover시 글씨 사라짐 */
    }
  }
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
      <TagContainer>
        <Link to="/readsns">
          <TagWithCircleWithText>
            <SnsCircle color="#ffe45e" />
            <SnsText active={false}>SNS</SnsText>
          </TagWithCircleWithText>
        </Link>
      </TagContainer>{" "}
      <TagContainer>
        <TagWithCircleWithText>
          <AreaText>지역 정보</AreaText>
          <AreaCircle color="#7fc8f8" />
        </TagWithCircleWithText>
      </TagContainer>
    </Container>
  );
}
