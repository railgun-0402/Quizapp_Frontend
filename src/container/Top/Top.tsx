import React, { useState } from "react";

const userObject = {
  id: 1,
  name: "管理者",
  email: "admin@test.com",
  password: "123456",
  auth: "1",
};

const data = userObject.id;

const Top = () => {
  const [categoryList, setCategoryList] = useState<any>();

  const requestGet = async () => {
    let result;
    result = await getData();

    console.log(`result = ${JSON.stringify(result)}`);
    // setCategoryList(result);
  };

  const getData = async () => {
    const url =
      "https://ru20i00bnj.execute-api.ap-northeast-1.amazonaws.com/default/quiz_get_user";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(`error = ${err}`);
    }
  };
  return (
    <>
      <h1>ユーザー情報</h1>
      <button onClick={requestGet}>API Test</button>
      <hr />
      {categoryList}
    </>
  );
};

export default Top;
