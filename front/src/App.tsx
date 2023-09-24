import RouterContent from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { SWRConfig } from "swr";
import { axios } from "./axiosClient";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

const FetcherComponent = () => {
  // 初回のフェッチをトラッキングするstate
  const [initialFetch, setInitialFetch] = useState(true);
  const navigate = useNavigate();

  const swrConfigValue = {
    fetcher: async (url: string) => {
      try {
        const response = await axios.get(url, {
          baseURL: "http://localhost/api",
        });
        if (initialFetch) setInitialFetch(false);
        return response.data;
      } catch (error: any) {
        // ページ初回読み込み＆401エラーの場合はログインページにリダイレクト
        if (initialFetch && error.response.status === 401) {
          navigate("/login");
        }
      }
    },
    errorRetryCount: 0,
    shouldRetryOnError: false,
  };

  return (
    <SWRConfig value={swrConfigValue}>
      <RouterContent />
    </SWRConfig>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <FetcherComponent />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
