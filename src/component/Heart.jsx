import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../base/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  height: 840px;
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

const My = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const MainPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background: var(--unnamed, #fefbff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 189px;
  flex-shrink: 0;
  margin-left: 10%;
  margin-bottom: 10%;
`;

const Name1 = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`;

const Text1 = styled.div`
  color: #011821;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 133.333% */
  margin-top: 5%;
  margin-left: 10%;
`;

const Bar1 = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 300px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 11%;
  justify-content: space-between;
`;

const StyledFontAwesomeIcon1 = styled(FontAwesomeIcon)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  color: #ff6392;
  margin-top: 2%;
  margin-left: 2%;
`;

const Image1 = styled.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`;

const PrevNextButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ff6392;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #f0f0f0;
      color: #a0a0a0;
      cursor: not-allowed;
    }
  }
`;

export default function MyPage() {
  const perPage = 4;

  const allPostsData = [
    { name: "닉네임1", title: "제목1" },
    { name: "닉네임2", title: "제목2" },
    { name: "닉네임3", title: "제목3" },
    { name: "닉네임4", title: "제목4" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    if (currentIndex < allPostsData.length - perPage) {
      setCurrentIndex(currentIndex + perPage);
    }
  };

  const prevPost = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - perPage);
    }
  };

  return (
    <Container>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <My>공감한 글</My>
      <div>
        {allPostsData
          .slice(currentIndex, currentIndex + perPage)
          .map((data, index) => (
            <MainPost key={index}>
              <Name1>{data.name}</Name1>
              <Text1>{data.title}</Text1>
              <Bar1>
                <StyledFontAwesomeIcon1 icon={faHeart} />
                <Image1 src="/재생.png" alt="버튼 이미지" />
              </Bar1>
            </MainPost>
          ))}
      </div>
      <PrevNextButtons>
        <button onClick={prevPost} disabled={currentIndex === 0}>
          이전
        </button>
        <button
          onClick={nextPost}
          disabled={currentIndex >= allPostsData.length - perPage}
        >
          다음
        </button>
      </PrevNextButtons>

      <Footer />
    </Container>
  );
}
