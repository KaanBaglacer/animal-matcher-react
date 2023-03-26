import React from 'react';
import './index.css';
import {createBrowserRouter, Navigate, RouterProvider, useRouteError} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DogMatching from "./pages/DogMatching.jsx";
import {Provider} from "react-redux";
import store from "./store";
import {LoadingProvider} from "./utils/Loading.jsx";
import AppLayout from "./components/AppLayout.jsx";

const RootErrorBoundary = () => {
   let error = useRouteError();
   return (
      <div>
         <h1>Uh oh, something went terribly wrong 😩</h1>
         <pre>{error.message || JSON.stringify(error)}</pre>
         <button onClick={() => (window.location.href = "/")}>
            Click here to reload the app
         </button>
      </div>
   );
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Navigate to={"/app/dog-matching"}/>
   },
   {
      path: "/login",
      element: <Login/>,
   },
   {
      path: "/register",
      element: <Register/>,
   },
   {
      path: "/app",
      element: <AppLayout/>,
      errorElement: <RootErrorBoundary/>,
      children: [
         {
            path: "dog-matching",
            element: <DogMatching/>,
         }
      ]
   },
]);

function App() {

  return (
     <Provider store={store}>
        <div style={{height: '100vh'}}>
           <LoadingProvider>
              <RouterProvider router={router}/>
           </LoadingProvider>
        </div>
     </Provider>

  )
}

export default App
