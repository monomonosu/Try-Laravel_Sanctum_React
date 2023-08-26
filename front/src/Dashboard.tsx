import axios from "axios";
import { useEffect, useState } from "react";

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
  useEffect(()=>{
    const fetchDate = async() => await Axios.get("http://localhost/api/user")
    .then((res) => {
      console.log(res);
      setUser(res.data)
    });

    fetchDate();
  },[])
  return (
    <div>
      <h1>ダッシュボード</h1>
      <h2>ユーザー情報</h2>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
