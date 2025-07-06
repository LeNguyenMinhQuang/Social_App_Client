import { Outlet } from "react-router-dom";
import Header from "./components/header/header.index";
import { useEffect, useRef } from "react";
import { useAppSelector } from "./redux/hooks";

function App() {
  // setup
  const { type } = useAppSelector((state) => state.app);
  // ref
  const bodyRef = useRef(document.querySelector("body"));

  // useEffect
  useEffect(() => {
    if (type === "dark") {
      bodyRef.current?.classList.add("dark-mode");
    } else {
      bodyRef.current?.classList.remove("dark-mode");
    }
  }, [type]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
