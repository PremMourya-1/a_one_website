import RouteData from "./Routes/Route";
import "./styles/index.css";
import "./styles/custom.css";
import "rsuite/dist/rsuite-no-reset.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPupup from "./components/front/Auth/LoginPupup";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { loginModal, setLoginModal } = useContext(AuthContext);
  return (
    <>
      <LoginPupup open={loginModal} setOpen={setLoginModal} />
      <RouteData />
    </>
  );
}

export default App;
