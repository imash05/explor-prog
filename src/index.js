import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Main from "./sections/main";
import Home from "./screens/home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/n",
    element: <div>Test react router 22 </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

// TODO Puoi fornire una UX decisamente migliore di questa quando la tua app genera errori fornendone una tua ErrorBoundaryO errorElementsostegno sul tuo percorso.
