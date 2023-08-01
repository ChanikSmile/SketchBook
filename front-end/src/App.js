import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Link
import "bootstrap/dist/css/bootstrap.min.css";

// CSS
import "./App.css";

import Main from "./pages/Main/index";
import MainSecond from "./pages/MainSecond/index";
import Connect from "./pages/Connect/index";
import Guide from "./pages/Guide/index";
import Books from "./pages/Books/index";
import Check from "./pages/Check/index";
import SoundCheck from "./pages/Check/SoundCheck";
import MotionCheck from "./pages/Check/MotionCheck/index";
import Play from "./pages/Play/index";
import Profile from "./pages/Profile/index";
import Code from "./pages/Code/index";
import NotFound from "./pages/NotFound/index";
import MainThird from "./pages/MainThird/index";
///////////////////////////////////

const router = createBrowserRouter([
  {
    path: "/main/login",
    element: <Main />,
  },
  {
    path: "/main/signup",
    element: <MainSecond />,
  },
  {
    path: "/main/choose",
    element: <MainThird />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
  {
    path: "/guide",
    element: <Guide />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/check",
    element: <Check />,
    children: [
      { path: "motion", element: <MotionCheck /> },
      { path: "sound", element: <SoundCheck /> },
    ],
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/code",
    element: <Code />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
