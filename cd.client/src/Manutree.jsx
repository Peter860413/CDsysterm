import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Menutree() {
    // 從 localStorage 讀取展開狀態，如果沒有則預設為 false
    const [openMenu, setOpenMenu] = useState(() => {
        const savedState = localStorage.getItem("openMenu");
        return savedState ? JSON.parse(savedState) : { plans: false, suppliers: false };
    });

    // 記錄當前選中的選單項目
    const [activeItem, setActiveItem] = useState(null);

    // React Router 的當前路由
    const location = useLocation();

    // 監聽 URL 變化，更新 activeItem
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const planId = params.get("planId");

        if (planId) {
            setActiveItem(planId);
            setOpenMenu((prev) => ({ ...prev, plans: true })); // 確保選單保持展開
        }
    }, [location]);

    // 當 `openMenu` 變更時，更新 localStorage
    useEffect(() => {
        localStorage.setItem("openMenu", JSON.stringify(openMenu));
    }, [openMenu]);

    // 切換選單展開/收合狀態
    const toggleMenu = (menu) => {
        setOpenMenu((prev) => {
            const newState = { ...prev, [menu]: !prev[menu] };
            localStorage.setItem("openMenu", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <div id='leftmenu'>
            <nav id='menutree'>
                <ul>
                    <li><Link to="/CDsysterm/home">🏠 首頁</Link></li>
                    <li><Link to="/CDsysterm/about">🏢 關於公司</Link></li>

                    {/* 合作計畫 - 可展開 */}
                    <li>
                        <button className="menu-toggle" onClick={() => toggleMenu('plans')}>
                            📋 合作計畫 {openMenu.plans ? "▲" : "▼"}
                        </button>
                        <ul className={`submenu ${openMenu.plans ? "open" : ""}`}>
                            <li>
                                <Link to="/CDsysterm/plans?planId=plan1" className={activeItem === 'plan1' ? 'active' : ''}>
                                    智慧型手機
                                </Link>
                            </li>
                            <li>
                                <Link to="/CDsysterm/plans?planId=plan2" className={activeItem === 'plan2' ? 'active' : ''}>
                                    計畫 B
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* 合作廠商 - 可展開 */}
                    <li>
                        <button className="menu-toggle" onClick={() => toggleMenu('suppliers')}>
                            🏭 合作廠商 {openMenu.suppliers ? "▲" : "▼"}
                        </button>
                        <ul className={`submenu ${openMenu.suppliers ? "open" : ""}`}>
                            <li>
                                <Link to="/CDsysterm/suppliers?supId=supplier-apple" className={activeItem === 'supplier-apple' ? 'active' : ''}>
                                    阿祺木頭
                                </Link>
                            </li>
                            <li>
                                <Link to="/CDsysterm/suppliers?supId=supplier-samsung" className={activeItem === 'supplier-samsung' ? 'active' : ''}>
                                    八寶鋼鐵
                                </Link>
                            </li>
                            <li>
                                <Link to="/CDsysterm/suppliers?supId=supplier-google" className={activeItem === 'supplier-google' ? 'active' : ''}>
                                    凱文塑膠
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menutree;