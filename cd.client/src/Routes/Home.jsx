import React from 'react';
import '../App.css';
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";

function Home() {
    return (
        <div className="content-container">
            {/* 中間內容區塊 */}           
            <section className="content-area">
                <div className="home-image">
                    <img src="/CDsysterm/images/SEO.jpg" alt="Home" className="img-fluid home-image" style={{ height: '500px', objectFit: 'cover' }} />
                </div>
                <div>
                    <h1>To Find  Your Dream</h1>
                </div>
                     
            </section>

            {/* 右側選單 */}
            <aside id="rightmenu">
                <button className="language-btn">選擇語言</button>              
            </aside>
        </div>
    );
}

export default Home;