import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import VideoDetail from "../pages/VideoDetail";
import Videos from "../pages/Videos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, element: <Videos></Videos> },
      { path: "/videos", element: <Videos></Videos> },
      { path: "/videos/:keyword", element: <Videos></Videos> },
      { path: "/videos/watch/:videoId", element: <VideoDetail></VideoDetail> },
    ],
  },
]);
