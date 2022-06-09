const saturnScreen = {
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
                                    <span>4,60 Miliardi Di Anni</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>ATMOSFERA</h2>
                                </div>
                                <div class="pibContent">
                                    <span>A causa della bassa gravità del pianeta, è completamente priva dei gas più leggeri; la pressione è di circa 0,7–0,9 kPa nelle depressioni più profonde</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>TEMPERATURA</h2>
                                </div>
                                <div class="pibContent">
                                    <span> (-163°C)= 110 K (min)  (-121°C) = 152  (media)  (-118°C) (max)</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>GRAVITÀ</h2>
                                </div>
                                <div class="pibContent">
                                    <span>24,79 m/s²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pCol2">
                        <div class="homeContentImage">
                            <img src="./images/saturn.png" id="satuenImage" alt="earth">
                            <div class="homeContentTitle">
                                <h1>SATURNO</h1>
                            </div>
                            <div class="More">
                                
                            </div>
                        </div>
                    </div>
                    <div class="pCol3">
                        <div class="planetMinfo">
                            <div class="slideNum">
                                <span>3/8</span>
                            </div>
                            <div class="pmiContent">
                                <p>Giove è il quinto pianeta del sistema solare in ordine di distanza dal Sole e il più grande di tutto il sistema planetario: la sua massa corrisponde a due volte e mezzo la somma di quelle di tutti gli altri pianeti messi insieme. È classificato, al pari di Saturno, Urano e Nettuno, come gigante gassoso. </p>
                            </div>
                            <div class="nextandprevBtn">
                                <a href="/#/saturn">Saturno <i class="fas fa-chevron-circle-right"></i></a>
                                <a href="/#/mars"><i class="fas fa-chevron-circle-left"></i> Marte </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        `
    }
}
export default saturnScreen;