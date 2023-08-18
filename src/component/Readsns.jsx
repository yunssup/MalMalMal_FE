import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom"; // useParams를 import 해주세요.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`;
const Date = styled.h1`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 400;
  margin-top: 15%;
  margin-left: 6%;
`;
const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: -3%;
  padding-left: 2%;
  padding-right: 2%;
`;
const Name = styled.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -9%;
`;
const progressBarAnimation = keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  margin-top: -8%;
`;
const ProgressBar = styled.div`
  background: #aba8a8;
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: transparent;
  transform-origin: left;
  animation: ${(props) =>
    props.isActive
      ? css`
          ${progressBarAnimation} 10s linear infinite
        `
      : "none"};
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: px;
  margin-left: 5%;
`;
const WhiteBox = styled.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`;

const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;
const HeartIcon = styled(FontAwesomeIcon)`
  transition: color 0.3s;
  cursor: pointer;
  color: ${({ clicked }) => (clicked ? "#FF6392" : "#000")};
`;

//상단 부분은 css 코드입니다 :)

export default function Click() {
  const { id } = useParams(); // useParams로 ":id"를 가져옵니다.

  const [isProgressRunning, setIsProgressRunning] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [postData, setPostData] = useState(null);

  const fetchPostData = async (postId) => {
    try {
      const response = await axios.get(
        `http://3.37.164.96/api/posts/${postId}/`
      );
      setPostData(response.data);
      setIsProgressRunning(true);
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  useEffect(() => {
    fetchPostData(id); // useParams에서 가져온 id를 사용합니다.
  }, [id]); // id가 변경될 때마다 다시 불러오기

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  // Construct the audio URL using the postId
  const audioFileURL = postData
    ? `http://3.37.164.96/api/posts/${postData.id}/tts_mp3/`
    : "";

  const playAudio = () => {
    if (audioFileURL) {
      const audioElement = new Audio(audioFileURL);
      audioElement.play();
    }
  };
  if (!postData) {
    return null;
  }
  return (
    <Container>
      <Date>{postData && postData.published_date.slice(0, 10)}</Date>
      <Title>{postData && postData.tts_title_audio_message}</Title>
      <Name>
        {postData && postData.author_name}
        <HeartIcon
          icon={faHeart}
          clicked={isHeartClicked}
          onClick={handleHeartClick}
          style={{
            color: isHeartClicked ? "#FF6392" : "#000",
            width: "30px",
            height: "30px",
          }}
        />
      </Name>{" "}
      <ProgressBarContainer>
        <ProgressBar isActive={isProgressRunning} />
      </ProgressBarContainer>
      <TimeInfo>
        <span>00:00</span>
        <span>00:30</span>
      </TimeInfo>
      <WhiteBox>{postData && postData.tts_audio_message}</WhiteBox>
      <ClickButton onClick={playAudio}>
        <Image src="/재생버튼.jpg" alt="버튼 이미지" />
      </ClickButton>{" "}
      <Footer />
    </Container>
  );
}
