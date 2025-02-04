import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../App.css';

function Plans() {
    const [searchParams] = useSearchParams();
    const planId = searchParams.get("planId"); // 讀取 URL 參數
    const [planData, setPlanData] = useState(null);

    return (
        <div className="plans-container">
            {/* 中間內容區塊 */}
            <section className="content-area">
                <h1>智慧型手機</h1>

                <div className="product-image">
                    <img src="/CDsysterm/images/iphone.png" alt="智慧手機" />
                </div>

                <h2>產品介紹</h2>
                <p>
                    這是一款高效能的智慧手機，搭載最新的處理器，提供卓越的使用體驗。
                    它擁有高清顯示螢幕，支援 5G 網路，適合日常使用與娛樂。
                </p>

                <h2>所需零件</h2>
                <ul>
                    <li>相機鏡頭</li>
                    <li>電子零件</li>
                    <li>螢幕</li>
                    <li>電池</li>
                </ul>
            </section>

            {/* 右側選單 */}
            <aside id="rightmenu">
                <button className="language-btn">選擇語言</button>

                <h2>開發廠商</h2>
                <ul>
                    <li>Apple Inc.</li>
                    <li>Samsung Electronics</li>
                    <li>Google LLC</li>
                    <li>Huawei Technologies</li>
                </ul>

                <button className="manufacturing-btn">參與製造</button>
            </aside>
        </div>
    );
}

export default Plans;