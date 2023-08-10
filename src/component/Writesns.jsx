import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
`;

const WhiteBox = styled.div`
  width: 378px;
  height: 171px;
  flex-shrink: 0;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  color: #646464;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const WhiteBox1 = styled.div`
  width: 378px;
  height: 171px;
  flex-shrink: 0;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  margin-top: 119px;
  margin-left: 150px;
`;

const VoiceButton = styled.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

export default function Hello({ showAge }) {
  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
  };

  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 15px;
    height: 15px;
    color: #d2d2d2;
  `;

  const [speechResult, setSpeechResult] = useState("");
  const [inputText, setInputText] = useState("");

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
  return (
    <Container>
      <PostButton onClick={handlePost}>
        {" "}
        <StyledFontAwesomeIcon icon={faCheckCircle} />
        게시하기
      </PostButton>
      <WhiteBox>제목을 입력하시오</WhiteBox>
      <WhiteBox1>{speechResult || "텍스트 샘플입니다옹"}</WhiteBox1>
      <VoiceButton onClick={handleVoice}>말해보세용~~</VoiceButton>

      <form action="" method="post">
        <h1>변환할 텍스트 입력</h1>
        {/* Django에서 사용하는 CSRF 토큰을 직접 생성하여 넣어주세요 */}
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
      </form>
    </Container>
  );
}
