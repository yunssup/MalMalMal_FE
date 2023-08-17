import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom"; // useHistory 임포트
import axios from "axios";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
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
const Signup = styled.div`
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
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 3% 0%;
  padding: 10px 15px;
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: border-color 0.3s, background-color 0.3s; /* 추가된 부분 */
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
    border-color: #ff8d8f; /* 변경된 border 색상 */
    background: #fff7f7; /* 변경된 background 색상 */
    outline: none;
  }
`;
const SignupButton = styled.button`
  border-radius: 10px;
  background: ${({ isFilled }) =>
    isFilled ? "#ff8d8f" : "#fff"}; /* 동적으로 배경 색상 변경 */
  color: ${({ isFilled }) =>
    isFilled ? "#fff" : "#454545"}; /* 동적으로 글자 색상 변경 */
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
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s; /* 추가된 부분 */
  margin-top: 20%;
`;
const Top1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const Top2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const ToggleSelect = styled.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`;
const CitySelect = styled.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  color: #b9b4b4;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`;
const DistrictSelect = styled.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  color: #b9b4b4;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 330px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #ff8d8f;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  & button {
    border-radius: 10px;
    background: #ff8d8f;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 240px;
    height: 66px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    border: none;
    cursor: pointer;
    color: #101010;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 20px;
    & svg {
      margin-right: 10px;
    }
  }
`;
const Ment = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
`;
const StyledCheckCircleIcon = styled(FontAwesomeIcon)`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  color: #ff8d8f;
`;
//상단 부분은 CSS 코드입니다 :)
export default function SignupPage() {
  const [email, setEmail] = useState(""); // 이메일 상태 추가
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setNickname] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const handleSignup = async () => {
    // 회원가입 처리를 수행합니다.
    const userData = {
      email,
      password,
      password2,
      username,
      // birthYear: selectedYear,
      // birthMonth: selectedMonth,
      // birthDay: selectedDay,
      // residenceCity: selectedCity,
      // residenceDistrict: selectedDistrict,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/accounts/register/",
        userData
      );

      if (response.status === 201) {
        // 회원가입 성공 시의 동작을 수행
        console.log("회원가입 성공");

        // 입력값 출력
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Password2:", password2);
        console.log("Nickname:", username);
        console.log("Selected Year:", selectedYear);
        console.log("Selected Month:", selectedMonth);
        console.log("Selected Day:", selectedDay);
        console.log("Selected City:", selectedCity);
        console.log("Selected District:", selectedDistrict);
      } else {
        // 회원가입 실패 시의 동작을 수행
        console.log("회원가입 실패");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  //모달창 관련 함수
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  //연도 받는 함수
  const handleYearFocus = (event) => {
    if (!event.target.isYearOptionExisted) {
      event.target.isYearOptionExisted = true;
      for (let i = 1900; i <= 2023; i++) {
        const yearOption = document.createElement("option");
        yearOption.setAttribute("value", i);
        yearOption.innerText = i;
        event.target.appendChild(yearOption);
      }
    }
    setSelectedYear(event.target.value); // 선택한 연도 값을 상태로 저장
    console.log("Selected Year:", event.target.value); // 선택한 연도 값을 콘솔에 출력
  };
  //월 받는 함수
  const handleMonthFocus = (event) => {
    if (!event.target.isMonthOptionExisted) {
      event.target.isMonthOptionExisted = true;
      for (let i = 1; i <= 12; i++) {
        const monthOption = document.createElement("option");
        monthOption.setAttribute("value", i);
        monthOption.innerText = i;
        event.target.appendChild(monthOption);
      }
    }
    setSelectedMonth(event.target.value); // 선택한 월 값을 상태로 저장
  };
  //일 받는 함수
  const handleDayFocus = (event) => {
    if (!event.target.isDayOptionExisted) {
      event.target.isDayOptionExisted = true;
      for (let i = 1; i <= 31; i++) {
        const dayOption = document.createElement("option");
        dayOption.setAttribute("value", i);
        dayOption.innerText = i;
        event.target.appendChild(dayOption);
      }
    }
    setSelectedDay(event.target.value); // 선택한 일 값을 상태로 저장
  };
  // 시 받는 함수
  const handleCityFocus = (event) => {
    const city = event.target.value;
    if (!event.target.isCityOptionExisted) {
      event.target.isCityOptionExisted = true;
      const districtSelect = document.getElementById("residence-district");
      districtSelect.innerHTML = "<option disabled selected>구 선택</option>";
      let districts = [];

      if (city === "서울특별시") {
        districts = [
          "강남구",
          "강동구",
          "강북구",
          "강서구",
          "관악구",
          "광진구",
          "구로구",
          "금천구",
          "노원구",
          "도봉구",
          "동대문구",
          "동작구",
          "마포구",
          "서대문구",
          "서초구",
          "성동구",
          "성북구",
          "송파구",
          "성북구",
          "양천구",
          "영등포구",
          "용산구",
          "은평구",
          "종로구",
          "중구",
          "중랑구",
        ];
      } else if (city === "경기도") {
        districts = [
          "수원시",
          "고양시",
          "용인시",
          "성남시",
          "화성시",
          "부천시",
          "남양주시",
          "안산시",
          "안양시",
          "평택시",
          "시흥시",
          "김포시",
          "파주시",
          "의정부시",
          "광명시",
          "하남시",
          "군포시",
          "양주시",
          "오산시",
          "이천시",
          "구리시",
          "안성시",
          "의왕시",
          "포천시",
          "양평군",
          "여주시",
          "동두천시",
          "과천시",
          "가평군",
          "연천군",
        ];
      } else if (city === "강원도") {
        districts = [
          "원주시",
          "춘천시",
          "강릉시",
          "동해시",
          "속초시",
          "홍천군",
          "삼척시",
          "횡성군",
          "철원군",
          "태백시",
          "평창군",
          "영월군",
          "정선군",
          "인제군",
          "양양군",
          "고성군",
          "화천군",
          "양구군",
        ];
      } else if (city === "충청남도") {
        districts = [
          "천안시",
          "아산시",
          "서산시",
          "당진시",
          "논산시",
          "논산시",
          "공주시",
          "보령시",
          "홍성군",
          "예산군",
          "부여군",
          "태안군",
          "서천군",
          "금산군",
          "계룡시",
          "천안군",
        ];
      } else if (city === "충청북도") {
        districts = [
          "청주시",
          "충주시",
          "제천시",
          "음성군",
          "진천군",
          "옥천군",
          "영동군",
          "괴산군",
          "증평군",
          "보은군",
          "단양군",
        ];
      } else if (city === "경상북도") {
        districts = [
          "포항시",
          "구미시",
          "경산시",
          "경주시",
          "안동시",
          "김천시",
          "칠곡군",
          "영주시",
          "영천시",
          "상주시",
          "문경시",
          "예천군",
          "의성군",
          "울진군",
          "성주군",
          "청도군",
          "영덕군",
          "봉화군",
          "고령군",
          "청송군",
          "군위군",
          "영양군",
          "울릉군",
        ];
      } else if (city === "경상남도") {
        districts = [
          "창원시",
          "김해시",
          "양산시",
          "진주시",
          "거제시",
          "통영시",
          "사천시",
          "밀양시",
          "함안군",
          "거창군",
          "창녕군",
          "고성군",
          "하동군",
          "합천군",
          "남해군",
          "함양군",
          "산청군",
          "의령군",
        ];
      } else if (city === "전라남도") {
        districts = [
          "순천시",
          "여수시",
          "목포시",
          "광양시",
          "나주시",
          "무안군",
          "해남군",
          "고흥군",
          "화순군",
          "영암군",
          "영광군",
          "완도군",
          "담양군",
          "장성군",
          "보성군",
          "신안군",
          "장흥군",
          "강진군",
          "함평군",
          "진도군",
          "곡성군",
          "구례군",
        ];
      } else if (city === "전라북도") {
        districts = [
          "전주시",
          "익산시",
          "군산시",
          "정읍시",
          "완주군",
          "김제시",
          "남원시",
          "고창군",
          "부안군",
          "순창군",
          "임실군",
          "진안군",
          "무주군",
          "장수군",
        ];
      } else if (city === "제주특별자치도") {
        districts = ["제주시", "서귀포시"];
      }
      setSelectedCity(city); // 선택한 시 값을 상태로 저장
      setSelectedDistrict(""); // 구 선택 초기화
      const districtOption = document.createElement("option");
      districtOption.setAttribute("value", "");
      districtOption.innerText = "구 선택";
      districtSelect.appendChild(districtOption);
      for (const district of districts) {
        const districtOption = document.createElement("option");
        districtOption.setAttribute("value", district);
        districtOption.innerText = district;
        districtSelect.appendChild(districtOption);
      }
    }
  };
  const handleDistrictChange = (event) => {
    console.log("Selected District:", event.target.value); // 선택한 구 값을 콘솔에 출력
    setSelectedDistrict(event.target.value); // 선택한 구 값을 상태로 저장
  };
  //로그인 페이지로 이동시킴
  const goToLoginPage = () => {
    history.push("/login");
  };
  //리턴값
  return (
    <SignupContainer>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Signup>회원가입</Signup>
      <InputField
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="별명 입력"
        value={username}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Top1>
        <div className="info" id="info__birth">
          <ToggleSelect
            className="box"
            id="birth-year"
            onFocus={handleYearFocus}
            isyearoptionexisted="false"
          >
            <option disabled selected>
              출생 연도
            </option>
          </ToggleSelect>
          <ToggleSelect
            className="box"
            id="birth-month"
            onFocus={handleMonthFocus}
            ismonthoptionexisted="false"
          >
            <option disabled selected>
              월
            </option>
          </ToggleSelect>
          <ToggleSelect
            className="box"
            id="birth-day"
            onFocus={handleDayFocus}
            isdayoptionexisted="false"
          >
            <option disabled selected>
              일
            </option>
          </ToggleSelect>
        </div>
      </Top1>
      <Top2>
        <div className="info" id="info__residence">
          <CitySelect
            className="box"
            id="residence-city"
            onChange={handleCityFocus}
            iscityoptionexisted="false"
          >
            <option disabled selected>
              시 선택
            </option>
            <option value="서울특별시">서울특별시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>{" "}
            <option value="전라북도">전라북도</option>{" "}
            <option value="전라남도">전라남도</option>{" "}
            <option value="제주특별자치도">제주특별자치도</option>{" "}
          </CitySelect>
          <DistrictSelect
            className="box"
            id="residence-district"
            onChange={handleDistrictChange}
            data-is-district-option-existed={false}
          >
            <option disabled selected>
              구 선택
            </option>
          </DistrictSelect>
        </div>
      </Top2>
      <SignupButton
        onClick={() => {
          handleSignup();
          toggleModal();
        }}
      >
        회원가입
      </SignupButton>{" "}
      <ModalOverlay visible={isModalVisible}>
        <ModalContent>
          <StyledCheckCircleIcon icon={faCheckCircle} />
          <Ment>축하드립니다!</Ment>
          <Ment>회원가입이 완료되었습니다.</Ment>
          <button onClick={goToLoginPage}>
            로그인 하러 가기 <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>{" "}
        </ModalContent>
      </ModalOverlay>
    </SignupContainer>
  );
}
