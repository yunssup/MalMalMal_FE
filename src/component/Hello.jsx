import React, { useState } from "react"; // useState 추가
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FadeContainer } from "./Styled";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export default function Hello() {
  const location = useLocation();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(location.pathname); // useState 추가

  const handleButtonClick = () => {
    setCurrentPage("/");
    console.log("버튼 확인");
    history.push("/");
  };

  return (
    <FadeContainer currentPage={currentPage}>
      <CSSTransition
        in={currentPage === "/hello"}
        appear={true}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <h1>안녕하세요</h1>
          <h2>오늘 기분은 어떠신가요?</h2>
          <Link to="/Choice">
            <StyledButton>
              <Image src="/라이언.jpg" alt="버튼 이미지" />
            </StyledButton>
          </Link>
        </div>
      </CSSTransition>
    </FadeContainer>
  );
}
