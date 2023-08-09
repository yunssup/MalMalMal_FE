import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: tomato;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
`;

const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  color: white;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; /* Absolute 포지셔닝 추가 */
  bottom: 10px; /* 아래로 10px 간격 */
  left: 50%; /* 왼쪽 정렬 */
  transform: translateX(-50%); /* 가운데 정렬 */

  span {
    color: #d2d2d2; /* 텍스트의 색상 */
    margin-top: 5px; /* 텍스트와 아이콘 간의 간격 조정 */
  }
`;

// 아이콘에 대한 스타일
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 46px;
  height: 46px;
  color: #d2d2d2;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmojiClick = (emoji) => {
    console.log("버튼");
  };

  return (
    <FooterContainer>
      <Image src="풋바하얀색배경.jpg" alt="로고 이미지" />
      <div>
        <EmojiButton onClick={() => handleEmojiClick("홈으로갈거야")}>
          <StyledFontAwesomeIcon icon={faHome} />
          <span>홈</span>
        </EmojiButton>
        <EmojiButton onClick={() => handleEmojiClick("마이페이지로 갈거야")}>
          <StyledFontAwesomeIcon icon={faUser} />
          <span>내 계정</span>
        </EmojiButton>
      </div>
    </FooterContainer>
  );
};

export default Footer;
