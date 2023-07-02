import axios from "axios";

const Axios = axios.create({
  withCredentials: true,
});

const LoginPage = () => {
  const handleClick = async () => {
    await Axios.get("http://localhost/sanctum/csrf-cookie").then((res) => {
      Axios.post("http://localhost/api/login", {
        email: "test@example.com",
        password: "password",
      }).then((res) => {
        console.log(res);
      });
    });
  };
  return (
    <div>
      <button onClick={handleClick}>ログイン</button>
    </div>
  );
};

export default LoginPage;
