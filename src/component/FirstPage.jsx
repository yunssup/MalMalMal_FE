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
  width: 430px;
  height: 932px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  /* 추가한 부분: 이미지 스타일 */
  /* margin-top: 20px; */
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

const InlineHeaders = styled.div`
  display: flex;
  align-items: center; /* 요소들을 수직 가운데 정렬 */
  /* text-align: center; */
`;

const ColoredHeading = styled.h2`
  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 108.333px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 15.167px;
`;

const ColoredSubHeading = styled.h3`
  color: rgba(49, 55, 57, 0.74);
  font-family: Noto Sans KR;
  font-size: 108.333px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 15.167px;
`;

const ColoredSubSubHeading = styled.h4`
  color: rgba(1, 24, 33, 0.42);
  font-family: Noto Sans KR;
  font-size: 108.333px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 15.167px;
`;

export default function Hello({ showAge }) {
  return (
    <Container>
      <Heading1>음성으로 소통하다</Heading1>
      <InlineHeaders>
        <ColoredHeading>말</ColoredHeading>
        <ColoredSubHeading>말</ColoredSubHeading>
        <ColoredSubSubHeading>말</ColoredSubSubHeading>
      </InlineHeaders>
      <Image src="/말말말로고.jpg" alt="버튼 이미지" />
      <h4>Dev by likelion 작고맵</h4>
    </Container>
  );
}
