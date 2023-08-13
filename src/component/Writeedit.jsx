import React, { useState } from "react";
import styled, { css } from "styled-components"; // ThemeProvider import 추가
import Footer from "../base/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCamera } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #def1ff 0%, #f9f9f9 100%);
  height: 2264px;
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
  margin-left: 45%;
  margin-top: 50px;
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: #d2d2d2;
  width: 32px;
  height: 28.8px;
  flex-shrink: 0;
  margin-right: 5px;
`;
const Image1 = styled.img`
  width: 370px;
  height: 420px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
`;
const PhotoButton = styled.button`
  border-radius: 1000px;
  border: 3px solid #f9f9f9;
  background: #605e5e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 286px;
  height: 60px;
  flex-shrink: 0;
  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 14%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RecruitmentStatusButton = styled.button`
  border-radius: 10px;
  border: none;
  width: 150px;
  height: 40px;
  cursor: pointer;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  margin: 0 10px;
  transition: background-color 0.3s, color 0.3s;
  border: 3px solid #ccc;

  background-color: ${(props) =>
    props.active
      ? props.status === "모집중"
        ? "#3596E1"
        : "#ccc"
      : "transparent"};
  color: ${(props) => (props.active ? "white" : "inherit")};

  &:hover {
    opacity: 0.8;
  }
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center;
  align-items: center;
  color: #011821;
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 2% 5%;
  height: 100px; /* 원하는 높이로 조정 */
`;

const Title = styled.h2`
  color: #2b1800;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 줄 간격 조정 */
  margin-bottom: px;
`;

const Sub = styled.input`
  color: #5b5858;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: -25px;
  border: none;
  outline: none;
`;

const WhiteBox1 = styled.input`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 20px;
  }
`;

const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;

export default function Click() {
  const [recruitmentPeriod, setRecruitmentPeriod] = useState("");
  const [progressPeriod, setProgressPeriod] = useState("");
  const [organizerAddress, setOrganizerAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [recruitmentStatus, setRecruitmentStatus] = useState("모집중");

  const handlePost = () => {
    console.log("게시 버튼이 클릭되었습니다.");
    console.log("모집 기간:", recruitmentPeriod);
    console.log("진행 기간:", progressPeriod);
    console.log("주최 주소:", organizerAddress);
    console.log("연락처:", contactNumber);
  };
  const [textSample, setTextSample] = useState("");

  const handleButtonClick = () => {
    console.log("버튼 눌림");
  };
  const handlePhoto = () => {
    console.log("사진추가가 클릭되었습니다.");
  };
  const handleRecruitmentStatusChange = (status) => {
    console.log("모집 상태 변경:", status);
    setRecruitmentStatus(status);
  };
  return (
    <Container>
      <PostButton onClick={handlePost}>
        <StyledFontAwesomeIcon icon={faCheckCircle} />
        게시하기
      </PostButton>
      <Image1 src="/망한쿵야.jpeg" alt="버튼 이미지" />
      <PhotoButton onClick={handlePhoto}>
        <StyledFontAwesomeIcon icon={faCamera} />
        사진 추가하기
      </PhotoButton>
      <ButtonContainer>
        <RecruitmentStatusButton
          status="모집중"
          active={recruitmentStatus === "모집중"}
          onClick={() => handleRecruitmentStatusChange("모집중")}
        >
          모집중
        </RecruitmentStatusButton>
        <RecruitmentStatusButton
          status="모집완료"
          active={recruitmentStatus === "모집완료"}
          onClick={() => handleRecruitmentStatusChange("모집완료")}
        >
          모집완료
        </RecruitmentStatusButton>
      </ButtonContainer>{" "}
      <WhiteBox>
        <Title>모집 기간</Title>
        <Sub
          type="text"
          placeholder="날짜를 입력해주세요"
          value={recruitmentPeriod}
          onChange={(e) => setRecruitmentPeriod(e.target.value)}
        />
      </WhiteBox>
      <WhiteBox>
        <Title>진행 기간</Title>
        <Sub
          type="text"
          placeholder="날짜를 입력해주세요"
          value={progressPeriod}
          onChange={(e) => setProgressPeriod(e.target.value)}
        />
      </WhiteBox>
      <WhiteBox>
        <Title>주최 주소</Title>
        <Sub
          type="text"
          placeholder="주소를 입력해주세요"
          value={organizerAddress}
          onChange={(e) => setOrganizerAddress(e.target.value)}
        />
      </WhiteBox>
      <WhiteBox>
        <Title>연락처</Title>
        <Sub
          type="text"
          placeholder="연락처를 입력해주세요"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </WhiteBox>{" "}
      <WhiteBox1
        type="text"
        placeholder="에디터는 직접 수기로 입력해주세요"
        value={textSample}
        onChange={(e) => setTextSample(e.target.value)}
      />{" "}
      <ClickButton onClick={handleButtonClick}>
        <Image src="/글쓰기.png" alt="버튼 이미지" />
      </ClickButton>
      <Footer />
    </Container>
  );
}
