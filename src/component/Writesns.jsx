import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../base/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios"; // Axios를 임포트합니다

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

  const handlePost = async () => {
    console.log("게시 버튼이 클릭되었습니다.");
    console.log("제목:", title);
    console.log("음성 텍스트:", speechResult);

    try {
      // CSRF 토큰 값을 여기에 입력하세요
      const csrfToken = "YourCSRFTokenHere";

      const response = await axios.post(
        "http://127.0.0.1:8000/posts/",
        {
          title,
          content: `${title} ${speechResult}`, // 제목과 음성 텍스트 합침
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );

      if (response.status === 200) {
        console.log("텍스트가 백엔드로 전송되었습니다.");
        history.push("/readsns");
      } else {
        console.error("텍스트 전송에 실패했습니다.");
      }
    } catch (error) {
      console.error("텍스트 전송 중 오류 발생:", error);
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
      {/* <form action="" method="post">
        <h1>변환할 텍스트 입력</h1>
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="YourCSRFTokenHere"
        />
        <input
          type="text"
          name="your_text_field_name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input type="submit" value="Send message" />
      </form> */}
      <ClickButton onClick={handleVoice}>
        {" "}
        <Image src="/말하기.png" alt="버튼 이미지" />
      </ClickButton>
      <Footer />
    </Container>
  );
}
