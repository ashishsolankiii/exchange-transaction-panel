import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import "./index.scss";

//const Switcherlayout = React.lazy(() => import("./components/switcherlayout"));
//App
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard/Dashboard"));


//custom Pages
const Login = React.lazy(() => import("./Pages/Login/Login"));
const ResetPassword = React.lazy(() => import("./Pages/ResetPassword/ResetPassword"));

//Errorpages
const Errorpage400 = React.lazy(() => import("./components/ErrorPages/ErrorPages/400/400"));
const Errorpage401 = React.lazy(() => import("./components/ErrorPages/ErrorPages/401/401"));
const Errorpage403 = React.lazy(() => import("./components/ErrorPages/ErrorPages/403/403"));
const Errorpage500 = React.lazy(() => import("./components/ErrorPages/ErrorPages/500/500"));
const Errorpage503 = React.lazy(() => import("./components/ErrorPages/ErrorPages/503/503"));

const ProtectedRoutes = React.lazy(() => import("./components/ProtectedRoutes"));
const PublicRoutes = React.lazy(() => import("./components/PublicRoutes"));

const Loaderimg = () => {
  return (
    <div id="global-loader">
      <img src={require("./assets/images/loader.svg").default} className="loader-img" alt="Loader" />
    </div>
  );
};
const Root = () => {
  useEffect(() => {
    //Switcherdata.localStorageBackUp();
    //Switcherdata.HorizontalHoverMenu();
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={Loaderimg()}>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoutes />
                }
              >
                <Route path={`${process.env.PUBLIC_URL}/`} element={<App />}>
                  <Route
                    path="/"
                    element={
                      <ProtectedRoutes />
                    }
                  >
                    <Route path={`${process.env.PUBLIC_URL}/dashboard`} element={<Dashboard />} />
                  </Route>

                  {/* <Route path="/" element={<ProtectedRoutes />}>
                    <Route path={`${process.env.PUBLIC_URL}/theme-setting`} element={<ThemeSettingForm />} />
                  </Route> */}

                </Route>
              </Route>

              <Route path="/" element={<PublicRoutes />}>
                <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
                <Route path={`${process.env.PUBLIC_URL}/reset-password`} element={<ResetPassword />} />
                <Route path={`${process.env.PUBLIC_URL}/errorpage401`} element={<Errorpage401 />} />
                <Route path={`${process.env.PUBLIC_URL}/errorpage403`} element={<Errorpage403 />} />
                <Route path={`${process.env.PUBLIC_URL}/errorpage500`} element={<Errorpage500 />} />
                <Route path={`${process.env.PUBLIC_URL}/errorpage503`} element={<Errorpage503 />} />
              </Route>
              <Route path="*" element={<Errorpage400 />} />
            </Routes>
          </AuthProvider>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
