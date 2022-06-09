const homeScreen = {
    render:()=>{
        return`
            <div class="homeContent">
                <img src="./images/stars.png" alt="stars">
                <div class="planet">
                    <div class="pCol1">
                        <div class="planetInfo">
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>ETÀ DELLA PIANETA</h2>
                                </div>
                                <div class="pibContent">
                                    <span>4,54 Miliardi Di Anni</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>ATMOSFERA</h2>
                                </div>
                                <div class="pibContent">
                                    <span>L'atmosfera è composta per il 78% da azoto, per il 21% da ossigeno e da argon, anidride carbonica e tracce di altri elementi.</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>TEMPERATURA</h2>
                                </div>
                                <div class="pibContent">
                                    <span>184 K (−89 °C) (min) 288 K (15 °C) (media) 330 K (57 °C) (max)</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>GRAVITÀ</h2>
                                </div>
                                <div class="pibContent">
                                    <span>9.807 m/s²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pCol2">
                        <div class="homeContentImage">
                            <img src="./images/Earth.png" alt="earth">
                            <div class="homeContentTitle">
                                <h1>TERRA</h1>
                            </div>
                            <div class="More">

                            </div>
                        </div>
                    </div>
                    <div class="pCol3">
                        <div class="planetMinfo">
                            <div class="slideNum">
                                <span>1/8</span>
                            </div>
                            <div class="pmiContent">
                                <p>La Terra è il terzo pianeta dal Sole e l'unico oggetto astronomico noto che ospita la vita. Mentre grandi quantità di acqua possono essere trovate in tutto il Sistema Solare, solo la Terra sostiene l'acqua superficiale liquida. Circa il 71% della superficie terrestre è costituita dall'oceano, che fa impallidire il ghiaccio polare, i laghi e i fiumi della Terra.</p>
                            </div>
                            <div class="nextandprevBtn">
                                <a href="/#/mars">Marte <i class="fas fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        `
    }
}
export default homeScreen;