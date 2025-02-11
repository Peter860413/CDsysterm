// Layout.js
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Menutree from './Manutree';

function Layout() {
    return (      
        <div>
            <header id='header_title'>
                <div id='header_icon'>
                    {/*<img src='/images/LEGO_logo.png' width='210' height='210' alt='LEGO Logo' />*/}
                </div>
            </header>
            <Menutree />
            <main>
                  <Outlet />
            </main>
            <footer className="footer">
                <small>© 2025 企業管理系統. 版權所有.</small>
            </footer>
        </div>      
    );
}

export default Layout;