import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "./axiosClient";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    await axios.get("http://localhost/sanctum/csrf-cookie").then((res) => {
      axios.post("http://localhost/api/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        navigate("/");
      });
    });
  };

  // ダッシュボードとの比較。こちらはリクエストヘッダーにトークンが付与されていないのでエラーになる。
  const getUser = async() => {
    await axios.get("http://localhost/api/user")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <div>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleClick}>ログイン</button>
      <br />
      <button onClick={getUser}>ユーザー情報取得（テスト）</button>
    </div>
  );
};

export default LoginPage;
