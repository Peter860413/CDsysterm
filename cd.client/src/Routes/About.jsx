import React from 'react';
import '../App.css';
import { Container, Button, Card } from "react-bootstrap";

function About() {
    return (
        <div className="content-container">
            {/* 中間內容區塊 */}
            <section className="content-area">
                <Card className="about-card">
                    <Card.Body>
                        <Card.Title className="text-center mb-4">
                            <h2>打造智能媒合系統，開創高效供應鏈</h2>
                        </Card.Title>

                        <Card.Text>
                            <p>
                                在當今<strong className="highlight">瞬息萬變的市場環境</strong>中，產品的開發與供應鏈的管理面臨著前所未有的挑戰。
                                為了解決企業在產品媒合與生產過程中的痛點，我們隆重推出 **全新的智能配對系統**，專為提升效率與降低成本而設計。
                            </p>

                            <h4 className="mt-4">🔹 智能化供應鏈媒合</h4>
                            <p>
                                這個創新的系統能夠自動化幫助 <strong>產品</strong> 找到最合適的 <strong>廠商</strong>，
                                同時也能協助廠商尋找最符合需求的產品。透過這套系統，廠商可以 **根據實際需求生產**，擺脫傳統的庫存壓力，
                                並實現「<span className="highlight">按需生產</span>」的理想模式。
                            </p>

                            <h4 className="mt-4">🔹 研發與製造的高效協同</h4>
                            <p>
                                研發人員再也不需要花費大量時間和精力 **一家一家尋找合作廠商**。
                                系統會 **自動分析數據，提供最適合的匹配**，讓創新者能夠專注於產品開發與價值創造。
                            </p>

                            <h4 className="mt-4">🔹 為企業打造智能供應鏈解決方案</h4>
                            <p>
                                這不僅是一個系統，更是一個為企業打造的 <strong>高效、靈活、智能</strong> 的解決方案。
                                無論您是正在尋找合作夥伴，還是希望優化供應鏈管理，這個配對系統都將成為您事業成功的重要助力！
                                **讓我們攜手開啟全新商業模式的可能性！**
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            {/* 右側選單 */}
            <aside id="rightmenu">
                <button className="language-btn">選擇語言</button>
            </aside>
        </div>
    );
}

export default About;
