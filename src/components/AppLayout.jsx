import {useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import Nav from "./UI/Nav.jsx";

const AppLayout = () => {

   const isAuth = useSelector(state => state.auth.isAuth);
   const navigate = useNavigate();

   useEffect(() => {
      if (!isAuth) {
         navigate('/login', {replace: true});
      }
   }, [isAuth, navigate]);

   return <div>
      <Nav>
      </Nav>
      <main style={{height: 'calc(100vh - 200px)'}}>
         <Outlet/>
      </main>
      <footer></footer>
   </div>;
}

export default AppLayout;
