import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons"; // 필요한 아이콘을 import하세요

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: tomato;
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
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmojiClick = (emoji) => {
    // 클릭한 이모지에 따른 동작을 여기에 작성
    alert(`클릭한 이모지: ${emoji}`);
  };

  return (
    <FooterContainer>
      <Image src="풋바하얀색배경.jpg" alt="로고 이미지" />
      <div>
        <EmojiButton onClick={() => handleEmojiClick("이모지안떠")}>
          <FontAwesomeIcon icon={faHome} />
        </EmojiButton>
        <EmojiButton onClick={() => handleEmojiClick("하트")}>
          <FontAwesomeIcon icon={faHeart} />
        </EmojiButton>
      </div>
    </FooterContainer>
  );
};

export default Footer;
