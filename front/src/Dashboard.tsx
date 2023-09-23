import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransitionLoader } from "./TransitionLoader";
import { axios } from "./axiosClient";
import useSWR from "swr";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// }

const DashboardPage = () => {
  // const [user,setUser] = useState<User>();
  // const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  const {data:userData} = useSWR('/user')

  const logout = async() => {
    await axios.post("http://localhost/api/logout")
    .then(() => {
      navigate("/login");
    })
    .catch(() => {
      console.log('ログアウトに失敗しました。');
    })
  }

  // リクエストヘッダーにトークンが付与されている？のでエラーにならない
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
      {/* {loading && <TransitionLoader />} */}
      <h1>ダッシュボード</h1>
      <h2>ユーザー情報</h2>
      {userData && (
        <div>
        <h1>{userData.name}</h1>
        <h1>{userData.email}</h1>
        </div>
      )}
      <button onClick={logout}>ログアウト</button>
      <button onClick={getUser}>ユーザー情報取得</button>
    </div>
  );
};

export default DashboardPage;
