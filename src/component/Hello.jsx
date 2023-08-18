import React, { useState } from "react";
import styled, { css } from "styled-components"; // ThemeProvider import 추가
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #e7f5ff 0%,
    #fff 50.69%,
    #fff 80.38%,
    #e7f5ff 100%
  );
  width: 370px;
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
  margin-left: 3%;
`;
const ClickButton = styled.button`
  margin-right: 3%;

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
  margin-top: 10%;
  margin-left: 3%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Image1 = styled.img`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  margin-left: 15%;
  margin-top: -15%;
`;
const Image5 = styled.img`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  margin-left: 15%;
  margin-top: -15%;
`;
const Ment8 = styled.div`
  margin-top: 10%;
  margin-left: 3%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Ment9 = styled.div`
  margin-bottom: 10%;
  margin-right: 5%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right; /* 오른쪽 정렬 추가 */
`;
const Image2 = styled.img`
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  margin-top: 5%;
`;
const Ment2 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -50%;
  margin-left: 45%;
`;
const BoldText = styled.span`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Ment3 = styled.div`
  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 25%;
`;

const ColorText = styled.span`
  color: #ff5f8f;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MultiLineText = styled.span`
  white-space: pre; /* 줄 바꿈 유지 */
`;

const Image4 = styled.img`
  width: 420px;
  height: 420px;
  flex-shrink: 0;
  display: inline-block;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const ClickButton1 = styled.div`
  display: flex;
`;
const Image = styled.img`
  margin-top: -82%;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  /* margin-bottom: -40px; */
  margin-left: 22%;
`;
const WhiteBox1 = styled.div`
  width: 90%;
  border-radius: 20px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 2% 5%;
  color: #011821;
  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 27.112px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -5%;
  height: 150px;
  flex-shrink: 0;
`;
const Ment4 = styled.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5%;
  margin-top: 5%;
`;
const Ment5 = styled.div`
  margin-left: 5%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ClickButton2 = styled.div`
  margin-top: 10%;
  width: 338px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid var(--unnamed, #fefbff);
  background: #ff87ab;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-bottom: 10%;
`;
export default function Hello() {
  const history = useHistory(); // useHistory를 가져옴

  const handleLoginClick = () => {
    console.log("로그인 버튼이 클릭되었습니다.");
    // 로그인 버튼이 클릭되었을 때, 로그인 페이지로 이동
    history.push("/Login"); // 이동할 경로로 수정해야 함
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
      <Top>
        <Logo src="/말말말로고.jpg" alt="버튼 이미지" />
        <ClickButton onClick={handleLoginClick}>로그인하기</ClickButton>
      </Top>
      <Ment1>
        안녕하세요. <br />
        음성 기반 소셜미디어
        <br />
        <BoldText>말말말</BoldText>입니다.
      </Ment1>
      <Image1 src="/로딩.png" alt="버튼 이미지" />
      <Ment8>
        나의 음성을 글자로,
        <br />
        타인의 글자를 음성으로
        <br />
        들어보세요
      </Ment8>{" "}
      <Image5 src="/3d아이콘.png" alt="버튼 이미지" />
      <Ment9>
        <BoldText>말말말</BoldText>은 <br />
        음성↔텍스트 변환 서비스로 <br />
        내 지역 정보를 얻으로
        <br />
        사용자의 말을 글자로 기록합니다.{" "}
      </Ment9>
      <Image2 src="/로딩화면2.png" alt="버튼 이미지" />
      <Ment2>
        <BoldText>말말말</BoldText>에서 <br />
        사람들의 소식과 <br />
        내 지역 정보를 얻으로
        <br />
        가볼까요?{" "}
      </Ment2>
      <Ment3>
        <MultiLineText>
          말말말을 시작하기 전<br />
          <ColorText>시범 음성</ColorText>을 진행할게요
        </MultiLineText>
      </Ment3>
      <Image4 src="/뒷배경.png" alt="버튼 이미지" />
      <ClickButton1 onClick={handleVoice}>
        <Image src="/파랑.png" alt="버튼 이미지" />
      </ClickButton1>
      <WhiteBox1>{speechResult || "마이크를 누르고 말해주세요"}</WhiteBox1>{" "}
      <Ment4>좋아요! </Ment4>
      <Ment5>이제 말말말을 시작하러 가볼까요? </Ment5>
      <ClickButton2 onClick={handleLoginClick}>로그인하기</ClickButton2>
    </Container>
  );
}
