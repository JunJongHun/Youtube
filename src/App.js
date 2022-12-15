import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchContainer from "./components/Search/SearchContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <SearchContainer></SearchContainer>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </div>
  );
}

export default App;
