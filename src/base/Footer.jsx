import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #f5f5f5;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <CopyrightText>
        &copy; {currentYear} Your Company. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
