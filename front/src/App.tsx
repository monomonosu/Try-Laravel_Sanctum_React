import RouterContent from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { SWRConfig } from "swr";
import { axios } from "./axiosClient";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const FetcherComponent = () => {
  const navigate = useNavigate();

  const swrConfigValue = {
    fetcher: async (url: string) => {
      try {
        const response = await axios.get(url, {
          baseURL: "http://localhost/api",
        });
        return response.data;
      } catch (error: any) {
        if (error.response.status === 401) {
          navigate("/login");
        }
      }
    },
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
