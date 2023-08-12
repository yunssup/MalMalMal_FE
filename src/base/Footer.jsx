import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const FooterContainer = styled.footer`
  text-align: center;
  position: relative;
  max-width: 100%;
  max-height: 100px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
`;

const EmojiButton = styled.button`
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  transform: translateX(-50%);
  span {
    color: #d2d2d2;
    margin-top: 5px;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const LeftEmojiButton = styled(EmojiButton)`
  left: 10px;
  right: auto;
  transform: none;
`;

const RightEmojiButton = styled(EmojiButton)`
  right: 10px;
  left: auto;
  transform: none;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 3em;
  height: 3em;
  margin-top: 30px;
`;

const Footer = () => {
  const history = useHistory();

  const handleEmojiClick = (destination) => {
    if (destination === "홈으로갈거야") {
      history.push("/choice"); // 홈으로 이동
    } else if (destination === "마이페이지로 갈거야") {
      history.push("/login"); // 마이페이지로 이동(현재는 마이페이지 미개설로 로그인으로 이동하게 설정)
    }
  };
  return (
    <FooterContainer>
      <Image src="풋바하얀색배경.jpg" alt="로고 이미지" />
      <LeftEmojiButton onClick={() => handleEmojiClick("홈으로갈거야")}>
        <StyledFontAwesomeIcon icon={faHome} />
        <span>홈</span>
      </LeftEmojiButton>
      <RightEmojiButton onClick={() => handleEmojiClick("마이페이지로 갈거야")}>
        <StyledFontAwesomeIcon icon={faUser} />
        <span>내 계정</span>
      </RightEmojiButton>
    </FooterContainer>
  );
};
export default Footer;
