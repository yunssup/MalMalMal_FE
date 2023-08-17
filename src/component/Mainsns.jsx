import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components"; // ThemeProvider import 추가
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Link import 추가
import axios from "axios"; // API 요청을 위해 axios 가져오기

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
const Button = styled.button`
  display: flex;
  background-color: transparent; /* 배경색 없애기 */
  border: none; /* 테두리 없애기 */
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

  border-radius: 44.798px;
  background: linear-gradient(173deg, #e5e3e3 0%, #fff 100%);

  color: #ff6392;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
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

  border-radius: 48.727px;
  background: #ec7196;
  color: #ff6392;
  color: #f7f7f7;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
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
  /* margin-bottom: 20px; */
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
  margin-left: 20%;
  /* margin-bottom: 10%; */
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
  margin-top: 10%;
  margin-left: 10%;
`;
const Bar = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 20%;
  justify-content: space-between;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  margin-top: 2%;
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
  height: 189px;
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
  color: ${({ clicked }) => (clicked ? "#FF6392" : "#000")};
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

//상단 부분은 CSS 코드입니다 :)

export default function Click() {
  const perPage = 4;
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heartClicked, setHeartClicked] = useState([]);

  useEffect(() => {
    const apiUrl = "http://3.37.164.96/api/posts/";

    axios
      .get(apiUrl)
      .then((response) => {
        const fetchedPosts = response.data.results;
        setPosts(fetchedPosts);
        setHeartClicked(Array(fetchedPosts.length).fill(false));
      })
      .catch((error) => {
        console.error("API 호출 에러:", error);
      });
  }, []);

  const handleHeartClick = (index) => {
    setHeartClicked((prevClicked) => {
      const updatedClickedState = [...prevClicked];
      updatedClickedState[index] = !updatedClickedState[index];
      return updatedClickedState;
    });
  };
  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };
  return (
    <Container>
      <Top>
        <Logo src="/말말말로고.jpg" alt="버튼 이미지" />
        <Button>
          <ClickButton2>소식 나누기</ClickButton2>
          <StyledLink to="/Mainshare">
            <ClickButton1>지역 정보</ClickButton1>
          </StyledLink>
        </Button>
      </Top>
      <Title>인기글</Title>
      <BestMain>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <BestPost>
                <Name>{post.author_name}</Name>
                <Text>{post.tts_title_audio_message}</Text>
                <Bar>
                  <StyledFontAwesomeIcon1
                    icon={faHeart}
                    onClick={() => handleHeartClick(index)}
                    clicked={heartClicked[index]}
                  />{" "}
                  <Image src="/재생.png" alt="버튼 이미지" />
                </Bar>
              </BestPost>
            </SwiperSlide>
          ))}
        </Swiper>
      </BestMain>{" "}
      <Title>전체글</Title>
      <div>
        {posts.length > 0 &&
          posts
            .slice(currentIndex, currentIndex + perPage)
            .map((post, index) => (
              <MainPost key={post.id}>
                <Name1>{post.author_name}</Name1>
                <Text1>{post.tts_title_audio_message}</Text1>
                <Bar1>
                  <StyledFontAwesomeIcon1
                    icon={faHeart}
                    onClick={() => handleHeartClick(index)}
                    clicked={heartClicked[index]}
                  />
                  <Image1 src="/재생.png" alt="버튼 이미지" />
                </Bar1>
              </MainPost>
            ))}
      </div>
      <ClickButton onClick={handleButtonClick}>
        <StyledLink to="/Writesns">
          <Image2 src="/글쓰기버튼.png" alt="버튼 이미지" />
        </StyledLink>
      </ClickButton>
      <Footer />
    </Container>
  );
}
