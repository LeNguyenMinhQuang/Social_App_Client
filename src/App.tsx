import Header from "./components/header/header.index";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ultils/customWrapper/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
