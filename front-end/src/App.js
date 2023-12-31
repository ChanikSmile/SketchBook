import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./pages/Main/index";
import Connect from "./pages/Connect/index";
import Guide from "./pages/Guide/index";
import Books from "./pages/Books/index";
import Check from "./pages/Check/index";
import Ready from "./pages/Ready";
import Play from "./pages/Play/index";
import Profile from "./pages/Profile/index";
import NotFound from "./pages/NotFound/index";
import Login from "./pages/Main/Login/index";
import Signup from "./pages/Main/Signup/index";
import Choose from "./pages/Main/Choose/index";
import ProtectedRoute from "./pages/ProtectedRoute/index";
import PublicRoute from "./pages/PublicRoute/index";
import AboutUs from "./pages/AboutUs/index";
import Story1 from "./pages/Play/Story1";
//////////////////////////////////////////
import P0 from "./pages/Play/Story1/P0/index";
import P1 from "./pages/Play/Story1/P1/index";
import P2 from "./pages/Play/Story1/P2/index";
import P3 from "./pages/Play/Story1/P3/index";
import P4 from "./pages/Play/Story1/P4/index";
import P5 from "./pages/Play/Story1/P5/index";
import P6 from "./pages/Play/Story1/P6/index";
import P7 from "./pages/Play/Story1/P7/index";
import P8 from "./pages/Play/Story1/P8/index";
import P9 from "./pages/Play/Story1/P9/index";
import P10 from "./pages/Play/Story1/P10/index";
import P11 from "./pages/Play/Story1/P11/index";
import P12 from "./pages/Play/Story1/P12/index";
import P13 from "./pages/Play/Story1/P13/index";
import P14 from "./pages/Play/Story1/P14/index";
import P15 from "./pages/Play/Story1/P15/index";
import P16 from "./pages/Play/Story1/P16/index";
import P17 from "./pages/Play/Story1/P17/index";
//////////////////////////////////////////
import Story2 from "./pages/Play/Story2";
import P2_1 from "./pages/Play/Story2/P1/index";
import P2_2 from "./pages/Play/Story2/P2/index";
import P2_3 from "./pages/Play/Story2/P3/index";
//////////////////////////////////////////
import Story3 from "./pages/Play/Story3";
import P3_1 from "./pages/Play/Story3/P1/index";
import P3_6 from "./pages/Play/Story3/P6/index";
import P3_7 from "./pages/Play/Story3/P7/index";
import P3_12 from "./pages/Play/Story3/P12/index";
import P3_15 from "./pages/Play/Story3/P15/index";
import P3_16 from "./pages/Play/Story3/P16/index";
import P3_17 from "./pages/Play/Story3/P17/index";
///////////////////////////////////

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/aboutUs", element: <AboutUs /> },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "/", // 첫화면은 로그인
        element: <Main />,
        children: [
          { index: "default", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [{ path: "main", element: <Choose /> }],
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
      },
      {
        path: "/ready",
        element: <Ready />,
      },
      {
        path: "/play",
        element: <Play />,
        children: [
          {
            path: "story1",
            element: <Story1 />,
            children: [
              { path: "p0", element: <P0 /> },
              { path: "p1", element: <P1 /> },
              { path: "p2", element: <P2 /> },
              { path: "p3", element: <P3 /> },
              { path: "p4", element: <P4 /> },
              { path: "p5", element: <P5 /> },
              { path: "p6", element: <P6 /> },
              { path: "p7", element: <P7 /> },
              { path: "p8", element: <P8 /> },
              { path: "p9", element: <P9 /> },
              { path: "p10", element: <P10 /> },
              { path: "p11", element: <P11 /> },
              { path: "p12", element: <P12 /> },
              { path: "p13", element: <P13 /> },
              { path: "p14", element: <P14 /> },
              { path: "p15", element: <P15 /> },
              { path: "p16", element: <P16 /> },
              { path: "p17", element: <P17 /> },
            ],
          },
          {
            path: "story2",
            element: <Story2 />,
            children: [
              { path: "p1", element: <P2_1 /> },
              { path: "p2", element: <P2_2 /> },
              { path: "p3", element: <P2_3 /> },
            ],
          },
          {
            path: "story3",
            element: <Story3 />,
            children: [
              { path: "p1", element: <P3_1 /> },
              { path: "p6", element: <P3_6 /> },
              { path: "p7", element: <P3_7 /> },
              { path: "p12", element: <P3_12 /> },
              { path: "p15", element: <P3_15 /> },
              { path: "p16", element: <P3_16 /> },
              { path: "p17", element: <P3_17 /> },
            ],
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
     
    ],
  },
]);

function App() {
  console.log(`
  ＼●　 ●＿　　＼●　 　＜●〉　* ● *
  　/>　 <│　　　/∨　　　│ 　* √1∨*
  <＼　　∠＼　　/>　　　〈〉　* /＼*
  ~ 앗싸~ 오늘도 활기차게 발랄하게~ 오예~~!!! ^^

  `);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
