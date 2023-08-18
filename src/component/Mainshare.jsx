import React, { useState } from "react";
import styled, { css } from "styled-components";
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Link import 추가

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #b1deff 0%, #f9f9f9 100%);
  width: 370px;
`;
const Top = styled.div`
  background: var(--unnamed, #fefbff);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  /* margin-top: 10%; */
  height: 120px;
`;
const Logo = styled.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
  margin-left: 3%;
  margin-bottom: 15px;
`;
const StyledLink = styled(Link)`
  text-decoration: none !important;
  margin-bottom: 15px;
`;

const Button = styled.span`
  display: flex;
  background-color: transparent;
  border: none;
`;
const ClickButton1 = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 48.727px;
  background: #3c95d5;

  color: #f7f7f7;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ClickButton2 = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 44.798px;
  background: linear-gradient(187deg, #e5e3e3 0%, #fff 100%);

  color: #30a8ff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
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
  justify-content: center;
  margin-left: 0%;
`;
const BestPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 221px;
  height: 300px;
  flex-shrink: 0;
  margin-left: 20%;
  /* margin-bottom: 10%; */
`;
const Ex = styled.img`
  display: flex;
  width: 221px;
  height: 130px;
`;
const Name = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`;
const Text = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  /* margin-top: 10%; */
  margin-left: 10%;
`;
const Bar = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  /* margin-top: 2%; */
  justify-content: space-between;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  /* margin-top: 2%; */
  margin-left: 2%;
`;
const Image = styled.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`;

const MainPost = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 250px;
  flex-shrink: 0;
  margin-left: 10%;
  margin-bottom: 10%;
`;

const Name1 = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`;
const Name2 = styled.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin-top: 10%; */
  margin-left: 10%;
`;
const Text1 = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-top: 4%;
  margin-left: 10%;
`;
// const Text2 = styled.div`
//   color: #000;
//   font-family: Noto Sans KR;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 32px; /* 133.333% */
//   margin-top: 4%;
//   margin-left: 10%;
// `;
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
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
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
const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Image2 = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -90px;
  margin-left: 90%;
  /* align-self: center; */
`;

export default function Click() {
  const perPage = 4;
  const mainPostsData = [
    {
      name: "중랑구청",
      title: "중랑구 어르신 치매 자가체크",
    },
    {
      name: "신내 1동",
      title: "2080 함께하는 겨울 맞이 김장",
    },
    { name: "신내 2동", title: "어르신들의 활기찬 놀이터" },
    { name: "중랑구청", title: "전국 노래자랑 in 신내동" },
  ];

  const allPostsData = [
    {
      name: "중랑구청",
      title: "어른들과 함께하는 시니어 키오스쿨",
      time: "모집중❤️",
    },
    {
      name: "면목1동",
      title: "면목 1동 어르신 한글 교육 모집 공지",
      time: "모집완료😅",
    },
    { name: "면목2동", title: "실버 인지 놀이 3가지를 함께", time: "모집중❤️" },
    { name: "묵1동", title: "모두 함께 하는 뜨개질 교실", time: "모집완료😅" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    if (currentIndex < mainPostsData.length - perPage) {
      setCurrentIndex(currentIndex + perPage);
    }
  };

  const prevPost = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - perPage);
    }
  };

  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };
  return (
    <Container>
      <Top>
        <Logo src="/말말말로고.jpg" alt="버튼 이미지" />
        <Button>
          <StyledLink to="/Mainsns">
            <ClickButton2>소식 나누기</ClickButton2>
          </StyledLink>
          <ClickButton1>지역 정보</ClickButton1>
        </Button>
      </Top>{" "}
      <Title>서울시 중랑구</Title>
      <BestMain>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {/* mainPostsData 배열을 매핑하여 전체글 포스트 생성 */}
          {mainPostsData.map((data, index) => (
            <SwiperSlide key={index}>
              <BestPost>
                <Ex src="/info_b21.jpg" alt="버튼 이미지" />
                <Name1>{data.name}</Name1>
                <Text>{data.title}</Text>

                {/* <Name>{data.name}</Name> */}
                <Bar>
                  <StyledFontAwesomeIcon icon={faHeart} />
                  <Image src="/재생.png" alt="버튼 이미지" />
                </Bar>
              </BestPost>
            </SwiperSlide>
          ))}
        </Swiper>
      </BestMain>
      <Title>전체글</Title>
      <div>
        {allPostsData
          .slice(currentIndex, currentIndex + perPage)
          .map((data, index) => (
            <MainPost key={index}>
              <Name1>{data.name}</Name1>
              <Text1>{data.title}</Text1>
              <Name2>{data.time}</Name2>

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
      <ClickButton onClick={handleButtonClick}>
        <StyledLink to="/Writeedit">
          <Image2 src="/글쓰기버튼.png" alt="버튼 이미지" />
        </StyledLink>
      </ClickButton>
      <Footer />
    </Container>
  );
}
