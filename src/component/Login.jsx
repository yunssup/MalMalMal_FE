import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 840px;
  --vh: 100%;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const InputField = styled.input`
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 5% 0%;
  padding: 10px 15px;
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: border-color 0.3s, background-color 0.3s;

  &::placeholder {
    color: #b9b4b4;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
  }
`;
const LoginButton = styled.button`
  border-radius: 10px;
  background: ${({ isFilled }) => (isFilled ? "#ff8d8f" : "#fff")};
  color: ${({ isFilled }) => (isFilled ? "#fff" : "#454545")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 181px;
  height: 66px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 5%;
`;
const NaverLoginButton = styled.button`
  border-radius: 10px;
  background: ${({ isFilled }) => (isFilled ? "#ff8d8f" : "#fff")};
  color: ${({ isFilled }) => (isFilled ? "#fff" : "#454545")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 181px;
  height: 66px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 10%;
`;

const SignUpButton = styled.button`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  margin-top: 10%;
`;

const ExternalLinkButton = styled.a`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  padding-bottom: 5%;
  margin-top: 10%;
  text-decoration: none;
`;
//상단 부분은 CSS 코드입니다 :)//

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);

  const isFormFilled = username !== "" && password !== ""; // 아이디, 비밀번호 모두 채워져야 로그인 버튼 눌림

  // 백엔드에게 로그인 post 보내기
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        history.push("/choice");
      } else {
        setError("아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
      setError("서버와의 통신 중 에러가 발생했습니다.");
    }
  };

  //네이버 간편 로그인 API 설정//
  const handleNaverLogin = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/user/naver/login"
      ); // 백엔드 엔드포인트로 GET 요청 보내기

      if (response.status === 200) {
        // 성공적인 응답 처리
        console.log("네이버 로그인 성공");
        // 여기에서 로그인 후 동작을 추가하거나 페이지 이동을 처리할 수 있습니다.
      } else {
        // 실패한 응답 처리
        console.error("네이버 로그인 실패");
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
      // 오류 처리
    }
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <LoginContainer>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Login>로그인</Login>
      <InputField
        type="text"
        placeholder="아이디 입력"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton
        isFilled={isFormFilled}
        onClick={isFormFilled ? handleLogin : null}
      >
        {" "}
        접속하기
      </LoginButton>
      <NaverLoginButton onClick={handleNaverLogin}>
        네이버 간편 로그인
      </NaverLoginButton>{" "}
      <SignUpButton onClick={handleSignUp}>
        회원가입
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </SignUpButton>
      <ExternalLinkButton
        href="https://forms.gle/w1gFr5n9wP7dn73k8"
        target="_blank"
      >
        공공기간 관리자면 여기를 눌러주세요
      </ExternalLinkButton>{" "}
    </LoginContainer>
  );
}
