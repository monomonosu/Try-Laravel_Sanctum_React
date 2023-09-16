import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Axios = axios.create({
  withCredentials: true,
});

type User = {
  id: number;
  name: string;
  email: string;
}

const DashboardPage = () => {
  const [user,setUser] = useState<User>();
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchDate = async() => await Axios.get("http://localhost/api/user")
    .then((res) => {
      console.log(res);
      setUser(res.data)
      setLoading(false);
    })
    .catch((err) => {
      navigate("/login");
    })

    fetchDate();
  },[navigate])

  const logout = async() => {
    await Axios.post("http://localhost/api/logout")
    .then(() => {
      navigate("/login");
    })
    .catch(() => {
      console.log('ログアウトに失敗しました。');
    })
  }

  return (
    <div>
      {loading && <CircularProgress />}
      <h1>ダッシュボード</h1>
      <h2>ユーザー情報</h2>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      )}
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default DashboardPage;
