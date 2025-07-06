import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useCallback, useEffect, useState } from "react";
import { logoutReset } from "../../../redux/slide/auth/auth.slice";
import {
  checkAccessTokenPending,
  logoutPending,
} from "../../../redux/slide/auth/auth.action";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../../../redux/slide/app/app.slice";

function ThirdSection() {
  // setup
  const { logoutStatus, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const { type } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // state
  const [theme, setTheme] = useState(type);

  // function
  const handleLogout = useCallback(() => {
    dispatch(logoutPending());
  }, [dispatch]);

  const handleChangeTheme = () => {
    if (theme === "light") {
      dispatch(changeTheme({ type: "dark" }));
    }
    if (theme === "dark") {
      dispatch(changeTheme({ type: "light" }));
    }
  };

  // life cycle
  useEffect(() => {
    if (logoutStatus === "success") {
      dispatch(logoutReset());
    }
  }, [logoutStatus]);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setTheme(type);
  }, [type]);

  return (
    <div className="thirdSection">
      <h5>Quick Settings</h5>
      <div className="item" onClick={() => handleChangeTheme()}>
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <p className="label">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
      <div className="item" onClick={() => handleLogout()}>
        <div className="icon">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
        <p className="label">Log Out</p>
      </div>
    </div>
  );
}

export default ThirdSection;
