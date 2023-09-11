import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import "./index.scss";
import { handshake } from "./utils/fetch-services-without-token";

const baseUrl = process.env.PUBLIC_URL;

//const Switcherlayout = React.lazy(() => import("./components/switcherlayout"));
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard/Dashboard"));
const WithdrawGroupListing = React.lazy(() => import("./Pages/WithdrawGroups/list"));
const WithdrawGroupForm = React.lazy(() => import("./Pages/WithdrawGroups/form"));

// Transfer Types
const TransferTypeList = React.lazy(() => import("./Pages/TransferType/TransferTypeList/TransferTypeList"));
const TransferTypeForm = React.lazy(() => import("./Pages/TransferType/TransferTypeForm/TransferTypeForm"));
const TransferRequestsListing = React.lazy(() => import("./Pages/TransferRequests/list"));

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
    handshake();
    //Switcherdata.localStorageBackUp();
    //Switcherdata.HorizontalHoverMenu();
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={Loaderimg()}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<ProtectedRoutes />}>
                <Route path={`${baseUrl}/`} element={<App />}>
                  <Route path="/" element={<ProtectedRoutes />}>
                    <Route path={`${baseUrl}/dashboard`} element={<Dashboard />} />

                    {/* Withdraw Groups */}
                    <Route path={`${baseUrl}/withdraw-groups`} element={<WithdrawGroupListing />} />
                    <Route path={`${baseUrl}/withdraw-groups/add`} element={<WithdrawGroupForm />} />
                    <Route path={`${baseUrl}/withdraw-groups/edit`} element={<WithdrawGroupForm />} />

                    {/* Withdraw Groups */}
                    <Route path={`${baseUrl}/transfer-type-list`} element={<TransferTypeList />} />
                    <Route path={`${baseUrl}/transfer-type-form`} element={<TransferTypeForm />} />

                    {/* Transfer Requests */}
                    <Route path={`${baseUrl}/transfer-requests`} element={<TransferRequestsListing />} />
                  </Route>
                </Route>
              </Route>

              <Route path="/" element={<PublicRoutes />}>
                <Route path={`${baseUrl}/login`} element={<Login />} />
                <Route path={`${baseUrl}/reset-password`} element={<ResetPassword />} />
                <Route path={`${baseUrl}/errorpage401`} element={<Errorpage401 />} />
                <Route path={`${baseUrl}/errorpage403`} element={<Errorpage403 />} />
                <Route path={`${baseUrl}/errorpage500`} element={<Errorpage500 />} />
                <Route path={`${baseUrl}/errorpage503`} element={<Errorpage503 />} />
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
