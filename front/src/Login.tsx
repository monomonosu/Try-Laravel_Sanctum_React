import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Axios = axios.create({
  withCredentials: true,
});

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    await Axios.get("http://localhost/sanctum/csrf-cookie").then((res) => {
      Axios.post("http://localhost/api/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        navigate("/");
      });
    });
  };
  
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
    </div>
  );
};

export default LoginPage;
