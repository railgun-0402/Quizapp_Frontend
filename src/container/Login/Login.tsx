import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationData } from "../../utils/validation/validation";

type LoginForm = {
  userId: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  // バリデーションエラー用に使用する
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(validationData),
  });

  const onSubmit = (data: any) => {
    console.log(data);

    // TODO: MySQLのデータでログイン機能を実装予定
    // 仮にユーザID：「root」、パスワード：「123456」でログイン成功とする
    if (data.userId === "root" && data.password === "123456") {
      // ログイン成功
      console.log("ログイン成功");
      // ログイン情報を保持するため、ローカルストレージに保存
      // TODO: セキュリティ的に良くないので、他の方法を検討(優先度高)
      localStorage.setItem("id", data.userId);
      localStorage.setItem("pass", data.password);

      navigate("/");
    } else {
      // ログイン失敗
      console.log("ログイン失敗");
      setErrorMsg("ユーザIDもしくはパスワードが間違ってます!");
    }

    reset();
  };

  // 非会員ボタン押下時処理
  const handleRegister = () => {
    reset();
    navigate("/Register");
  };

  return (
    <div className="form-container">
      <p className="errorMsg">{errorMsg}</p>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ユーザID */}
        <label htmlFor="userId">ユーザID</label>
        <input id="userId" type="text" {...register("userId")} />
        <p>{errors.userId?.message}</p>

        {/* パスワード入力 */}
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button type="submit">Login</button>
        {/* 新規登録 */}
        <button onClick={handleRegister}>会員でない方はこちら</button>
      </form>
    </div>
  );
};

export default Login;
