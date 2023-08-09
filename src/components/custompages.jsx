import React, {Fragment } from 'react';
// import Loader from "../layouts/Loader/Loader";
import {Outlet} from 'react-router-dom'
import { Custompagesswitcher } from '../layouts/Switcher/custompagesswitcher';


export default function Custompages()  {

  return (
    <Fragment>
      {/* <Loader /> */}
       <Custompagesswitcher />
      <Outlet />
    </Fragment>
  );
}
