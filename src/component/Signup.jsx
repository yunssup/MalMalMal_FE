import React, { useState } from "react";
import styled from "styled-components";

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

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = () => {
    // 여기에서 회원가입 처리를 수행합니다.
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Nickname:", nickname);
    // 실제로는 서버로 요청을 보내거나 다른 회원가입 처리를 수행해야 합니다.
  };

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
  };

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
  };

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
  };

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
      } else if (city === "부산광역시") {
        districts = [
          "중구",
          "서구",
          "동구",
          "영도구",
          "부산진구",
          "동래구",
          "남구",
          "북구",
          "해운대구",
          "사하구",
          "금정구",
          "강서구",
          "연제구",
          "수영구",
          "사상구",
          "기장군",
        ];
      } else if (city === "대구광역시") {
        districts = [
          "중구",
          "서구",
          "동구",
          "남구",
          "북구",
          "수성구",
          "달서구",
          "달성군",
        ];
      } else if (city === "인천광역시") {
        districts = [
          "중구",
          "서구",
          "동구",
          "미추홀구",
          "연수구",
          "남동구",
          "부평구",
          "계양구",
          "강화군",
          "옹진군",
        ];
      } else if (city === "광주광역시") {
        districts = ["남구", "서구", "동구", "북구", "광산구"];
      } else if (city === "대전광역시") {
        districts = ["중구", "서구", "동구", "유성구", "대덕구"];
      } else if (city === "울산광역시") {
        districts = ["중구", "남구", "동구", "북구", "울주군"];
      }
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
  return (
    <SignupContainer>
      <Image src="/말말말로고.jpg" alt="로고 이미지" />
      <Signup>회원가입</Signup>
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
      <InputField
        type="text"
        placeholder="별명 입력"
        value={nickname}
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
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="울산광역시">울산광역시</option>{" "}
          </CitySelect>
          <DistrictSelect
            className="box"
            id="residence-district"
            data-is-district-option-existed={false}
          >
            <option disabled selected>
              구 선택
            </option>
          </DistrictSelect>
        </div>
      </Top2>
      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
    </SignupContainer>
  );
}
