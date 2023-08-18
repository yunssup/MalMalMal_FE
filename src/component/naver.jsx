import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Choice from "./Choice";

const BASE_URL = "http://3.37.164.96";

function NaverLogin() {
  const [key, setKey] = useState(null);

  const handleNaverLogin = async () => {
    try {
      await axios
        .get(`${BASE_URL}/api/user/naver/login`, {
          headers: {
            "Access-Control-Allow-Origin-headers": "*",
          },
        })
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("code")) {
      const code = params.get("code");
      // 여기에서 서버에게 code를 전달하여 인증 정보를 받아오는 작업을 수행
      axios
        .post(`${BASE_URL}/api/user/naver/callback`, { code })
        .then((response) => {
          // 요청이 성공하면 백엔드로부터 받은 key 값을 상태에 저장
          setKey(response.data.key);
        })
        .catch((error) => {
          // 요청이 실패하면 오류 처리
          console.error("API 호출 에러:", error);
        });
    }
  }, []);

  if (key) {
    // 키 값을 받았을 때, 리디렉션하지 않고 Choice 컴포넌트를 렌더링
    return <Choice key={key} />;
  }

  return (
    <div>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
      {key !== null && <p>저장된 key 값: {key}</p>}{" "}
      {/* key 값이 존재할 때만 출력 */}
    </div>
  );
}

export default NaverLogin;
