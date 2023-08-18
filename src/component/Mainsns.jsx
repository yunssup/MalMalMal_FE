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
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topPosts, setTopPosts] = useState([]);
  const [heartClickedTop, setHeartClickedTop] = useState([]);
  const [heartClickedMain, setHeartClickedMain] = useState([]);
  const [isPlayingList, setIsPlayingList] = useState([]); // 수정된 부분

  useEffect(() => {
    // 전체글 get API
    const apiUrl = `http://3.37.164.96/api/posts/?page=${currentPage}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const fetchedPosts = response.data.results.map((post) => ({
          ...post,
          audio_url: `http://3.37.164.96/api/posts/${post.id}/tts_title_mp3/`,
        }));
        setPosts(fetchedPosts);
        setHeartClickedMain(Array(fetchedPosts.length).fill(false));
      })
      .catch((error) => {
        console.error("API 호출 에러:", error);
      });

    // 인기글 get API
    axios
      .get("http://3.37.164.96/api/posts/top3")
      .then((response) => {
        const fetchedTopPosts = response.data.map((post) => ({
          ...post,
          audio_url: `http://3.37.164.96/api/posts/${post.id}/tts_title_mp3/`,
        }));
        setTopPosts(fetchedTopPosts);
        setHeartClickedTop(Array(fetchedTopPosts.length).fill(false));
      })
      .catch((error) => {
        console.error("인기글 API 호출 에러:", error);
      });
  }, [currentPage]);

  const handleHeartClickTop = async (index) => {
    setHeartClickedTop((prevClicked) => {
      const updatedClickedState = [...prevClicked];
      updatedClickedState[index] = !updatedClickedState[index];
      return updatedClickedState;
    });

    try {
      const postID = topPosts[index].id;
      await axios.post(`http://3.37.164.96/api/posts/${postID}/like/`);
      console.log(`인기글 ${postID}에 대한 좋아요 POST 요청 전송`);
    } catch (error) {
      console.error("인기글 좋아요 요청 에러:", error);
    }
  };

  const handleHeartClickMain = async (index) => {
    setHeartClickedMain((prevClicked) => {
      const updatedClickedState = [...prevClicked];
      updatedClickedState[currentIndex + index] =
        !updatedClickedState[currentIndex + index];
      return updatedClickedState;
    });

    try {
      const postID = posts[currentIndex + index].id;
      await axios.post(`http://3.37.164.96/api/posts/${postID}/like/`);
      console.log(`전체글 ${postID}에 대한 좋아요 POST 요청 전송`);
    } catch (error) {
      console.error("전체글 좋아요 요청 에러:", error);
    }
  };

  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };

  const playAudio = (audioFileURL, index) => {
    const audioElement = new Audio(audioFileURL);
    audioElement.play();
    setIsPlayingList((prevList) => {
      const newList = [...prevList];
      newList[index] = true; // 해당 인덱스의 게시글은 음성 재생 중
      return newList;
    });
    audioElement.onended = () => {
      setIsPlayingList((prevList) => {
        const newList = [...prevList];
        newList[index] = false; // 해당 인덱스의 게시글은 음성 재생 종료
        return newList;
      });
    };
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
          {topPosts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <BestPost>
                <Name>{post.author_name}</Name>
                <Text>{post.tts_title_audio_message}</Text>
                <Bar>
                  <StyledFontAwesomeIcon1
                    icon={faHeart}
                    onClick={() => handleHeartClickTop(index)}
                    clicked={heartClickedTop[index]}
                  />{" "}
                  <ClickButton onClick={() => playAudio(post.audio_url, index)}>
                    {/* 위의 playAudio 함수 호출에 index를 추가 */}
                    <Image1
                      src={isPlayingList[index] ? "/재생중.png" : "/재생.png"}
                      alt={isPlayingList[index] ? "쿵야 이미지" : "재생 이미지"}
                    />
                  </ClickButton>
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
                    onClick={() => handleHeartClickMain(index)}
                    clicked={heartClickedMain[currentIndex + index]}
                  />
                  <ClickButton onClick={() => playAudio(post.audio_url, index)}>
                    {/* 위의 playAudio 함수 호출에 index를 추가 */}
                    <Image1
                      src={isPlayingList[index] ? "/재생중.png" : "/재생.png"}
                      alt={isPlayingList[index] ? "쿵야 이미지" : "재생 이미지"}
                    />
                  </ClickButton>
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
