import React, { useState } from "react";
import styled, { css } from "styled-components"; // ThemeProvider import 추가
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCamera } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 840px; */
  background: linear-gradient(
    180deg,
    #e7f5ff 0%,
    #fff 50.69%,
    #fff 80.38%,
    #e7f5ff 100%
  );
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
`;
const Logo = styled.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
`;
const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 143px;
  height: 40px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 24px;
  border: 2px solid var(--unnamed, #fefbff);
  background: #252728;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Ment1 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Image1 = styled.img`
margin-top:100%
  width: 300px;
  height: 300px;
  flex-shrink: 0;
`;
const Image2 = styled.img`
margin-top:100%
  width: 300px;
  height: 300px;
  flex-shrink: 0;
`;
const Ment2 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Ment3 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
const Ment4 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Ment5 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default function Hello() {
  const handleLoginClick = () => {
    console.log("로그인 버튼이 클릭되었습니다.");
  };
  const [speechResult, setSpeechResult] = useState("");
  const [inputText, setInputText] = useState("");
  const [title, setTitle] = useState(""); // 추가된 부분

  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
    console.log("제목:", title); // 입력된 제목 출력
  };

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
      <Top>
        <Logo src="/말말말로고.jpg" alt="버튼 이미지" />
        <ClickButton onClick={handleLoginClick}>로그인하기</ClickButton>
      </Top>
      <Ment1>
        안녕하세요. <br />
        음성 기반 소셜미디어
        <br />
        말말말입니다.
      </Ment1>
      <Image1 src="/로딩.png" alt="버튼 이미지" />
      <Image2 src="/로딩화면2.png" alt="버튼 이미지" />
      <Ment2>
        말말말에서 <br />
        사람들의 소식과 <br />내 지역 정보를 얻으세요{" "}
      </Ment2>
      <Ment3>
        말말말을 시작하기 전 <br />
        시범음성을 진행할게요{" "}
      </Ment3>
      <ClickButton onClick={handleVoice}>
        {" "}
        <Image src="/말하기.png" alt="버튼 이미지" />
      </ClickButton>
      <WhiteBox1>{speechResult || "텍스트 샘플입니다옹"}</WhiteBox1>{" "}
      <Ment4>좋아요! </Ment4>
      <Ment5>이제 말말말을 시작하러 가볼까요? </Ment5>
      <ClickButton onClick={handleLoginClick}>로그인하기</ClickButton>
    </Container>
  );
}
