import React, { useState } from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px;
  width: 250px;
`;

const SignupButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
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
      <h1>회원가입</h1>
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
      <div className="info" id="info__birth">
        <select
          className="box"
          id="birth-year"
          onFocus={handleYearFocus}
          isYearOptionExisted={false}
        >
          <option disabled selected>
            출생 연도
          </option>
        </select>
        <select
          className="box"
          id="birth-month"
          onFocus={handleMonthFocus}
          isMonthOptionExisted={false}
        >
          <option disabled selected>
            월
          </option>
        </select>
        <select
          className="box"
          id="birth-day"
          onFocus={handleDayFocus}
          isDayOptionExisted={false}
        >
          <option disabled selected>
            일
          </option>
        </select>
      </div>
      <div className="info" id="info__residence">
        <select
          className="box"
          id="residence-city"
          onChange={handleCityFocus}
          isCityOptionExisted={false}
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
          <option value="울산광역시">울산광역시</option>
        </select>
        <select
          className="box"
          id="residence-district"
          data-is-district-option-existed={false}
        >
          <option disabled selected>
            구 선택
          </option>
        </select>
      </div>{" "}
      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
    </SignupContainer>
  );
}
