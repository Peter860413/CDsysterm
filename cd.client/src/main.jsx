import React from 'react';
import { createRoot } from 'react-dom/client';
//import {
//    createBrowserRouter,
//    RouterProvider,
//    Router,
//    Route,
//    Link,
//    Outlet,
//    createRoutesFromElements,
//} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Suppliers from './Routes/Suppliers';
import Plans from './Routes/Plans';
import Layout from './Layout';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//const router = createBrowserRouter(
//    createRoutesFromElements(
//        <Route element={<AppLayout />}>
//            {/* 設定路由 */}
//            <Route path="/" element={<App />} />
//            <Route path="/home" element={<Home />} />
//            <Route path="/company" element={<Company />} />
//            <Route path="/product" element={<Product />} />
//            {/* 404介面 */}
//            <Route path="*" element={<h1>404 Page Not Found</h1>} />
//        </Route>
//    )
//);

//const router = createBrowserRouter([
//    {
//        element: <AppLayout />,
//        children: [
//            {
//                path: "/",
//                element: <Home />,
//            },
//            {
//                path: "products",
//                element: <Product />,
//            },
//            {
//                path: "reports",
//                element: <Company />,
//            },
//        ],
//    },
//]);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                {/* 設定路由 */}
                    <Route path="/CDsysterm/" element={<Home />} />
                    <Route path="/CDsysterm/about" element={<About />} />
                    <Route path="/CDsysterm/suppliers" element={<Suppliers />} />
                    <Route path="/CDsysterm/plans" element={<Plans />} />
                    {/* 404介面 */}
                    <Route path="*" element={<h1>404 Page Not Found</h1>} />
                </Route>                
            </Routes>
        </Router>
    </React.StrictMode>
);

//createRoot(document.getElementById("root")).render(
//    <RouterProvider router={router} />
//);