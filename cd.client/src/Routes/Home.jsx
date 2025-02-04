import React from 'react';
import '../App.css';

function Home() {
    return (
        <div className="plans-container">
            {/* 中間內容區塊 */}
            <section className="content-area">
                <h1>3C與家電</h1>
                <h2>智慧手機</h2>

                <div className="product-image">
                    <img src="/images/iphone.png" alt="智慧手機" />
                </div>

                <h3>產品介紹</h3>
                <p>
                    這是一款高效能的智慧手機，搭載最新的處理器，提供卓越的使用體驗。
                    它擁有高清顯示螢幕，支援 5G 網路，適合日常使用與娛樂。
                </p>

                <h3>所需零件</h3>
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

export default Home;