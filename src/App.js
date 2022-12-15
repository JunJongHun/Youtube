import { Outlet } from "react-router-dom";
import SearchContainer from "./components/Search/SearchContainer";

function App() {
  return (
    <div>
      <SearchContainer></SearchContainer>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
