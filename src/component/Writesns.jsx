import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../base/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`;

const PostButton = styled.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  margin-left: 40%;
  margin-top: 80px;
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

const Input = styled.input`
  width: 90%;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  margin: 2% 5%;
  color: #646464;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  border: none;
  outline: none;
  &::placeholder {
    text-align: center;
  }
  &:focus {
    border: 2px solid #ff8d8f;
  }
`;

const WhiteBox1 = styled.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  border-radius: 20px;
`;

const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: #d2d2d2;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;
//상단 부분은 CSS 코드입니다//

export default function Hello() {
  const [speechResult, setSpeechResult] = useState("");
  const [inputText, setInputText] = useState("");
  const [title, setTitle] = useState("");

  const history = useHistory();

  //음성인식 관련
  const handleVoice = () => {
    console.log("말하기 버튼이 클릭되었습니다.");
    startSpeechRecognition();
  };

  const startSpeechRecognition = () => {
    const recognition = new (window.webkitSpeechRecognition ||
      window.SpeechRecognition)();

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      console.log("음성 인식 결과:", result);
      setSpeechResult(result);
      setInputText(result);
      recognition.stop();
    };

    recognition.start();
  };
  //제목과 음성 텍스트 백엔드에게 전송

  const handlePost = async () => {
    console.log("게시 버튼이 클릭되었습니다.");
    console.log("제목:", title);
    console.log("음성 텍스트:", speechResult);

    const postData = {
      tts_title_message: title,
      tts_message: speechResult,
    };

    try {
      const response = await axios.post(
        "http://3.37.164.96/api/posts/", // 백엔드의 POST API 주소로 수정
        postData
      );

      if (response.status === 201) {
        // 게시 성공 시의 동작을 수행
        console.log("게시 성공");
      } else {
        // 게시 실패 시의 동작을 수행
        console.log("게시 실패");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  return (
    <Container>
      <PostButton onClick={handlePost}>
        <StyledFontAwesomeIcon icon={faCheckCircle} />
        게시하기
      </PostButton>
      <Input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <WhiteBox1>{speechResult || "텍스트 샘플입니다옹"}</WhiteBox1>{" "}
      <ClickButton onClick={handleVoice}>
        {" "}
        <Image src="/말하기.png" alt="버튼 이미지" />
      </ClickButton>
      <Footer />
    </Container>
  );
}
