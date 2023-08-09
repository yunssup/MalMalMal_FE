import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(
    --unnamed,
    conic-gradient(
      from 180deg at 50% 50%,
      #ffa4bf 0deg,
      #faea9c 125.62500357627869deg,
      #c7e7ff 228.75000715255737deg,
      #ffa4bf 360deg
    )
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
`;

const WhiteBox = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
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
      <PostButton onClick={handlePost}>게시하기</PostButton>
      <WhiteBox>제목을 입력하세용</WhiteBox>
      <WhiteBox>{speechResult || "텍스트 샘플입니다옹"}</WhiteBox>
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
