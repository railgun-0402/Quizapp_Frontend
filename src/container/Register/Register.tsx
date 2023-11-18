import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validationData } from "../../utils/validation/validation";

type RegisterForm = {
  userId: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();
  // バリデーションエラー用に使用する
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onChange",
    resolver: zodResolver(validationData),
  });

  const onSubmit = (data: any) => {
    console.log(data);

    // TODO: MySQLのデータでログイン機能を実装予定
    // 仮にユーザID：「root」、パスワード：「123456」で登録成功とする
    if (data.userId === "root" && data.password === "123456") {
      // ログイン成功
      console.log("会員登録成功");
      navigate("/Top");
    } else {
      // ログイン失敗
      console.log("ログイン失敗");
      setErrorMsg("ユーザIDもしくはパスワードが間違ってます!");
    }

    reset();
  };

  // クリアボタン押下時処理
  const handleClear = () => {
    reset();
  };

  return (
    <div className="form-container">
      <p className="errorMsg">{errorMsg}</p>
      <h1>新規会員登録</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ユーザID */}
        <label htmlFor="userId">ユーザID:(4文字以上)</label>
        <input id="userId" type="text" {...register("userId")} />
        <p>{errors.userId?.message}</p>

        {/* パスワード入力 */}
        <label htmlFor="password">パスワード:(6文字以上12文字以内)</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button type="submit">登録</button>
        {/* 新規登録 */}
        <button onClick={handleClear}>クリア</button>
      </form>
    </div>
  );
};

export default Register;
