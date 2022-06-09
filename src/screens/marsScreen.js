const marsScreen = {
    after_render:()=>{
        
    },
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
                                    <span> (−140 °C) (min) (-63 °C) (media)  (20 °C) (max)</span>
                                </div>
                            </div>
                            <div class="planetInfoBox">
                                <div class="pibTitle">
                                    <i class="fas fa-circle" style="font-size: 0.7rem; margin-right:7px;"></i>
                                    <h2>GRAVITÀ</h2>
                                </div>
                                <div class="pibContent">
                                    <span>3,721 m/s²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pCol2">
                        <div class="homeContentImage" id="planetbox">
                            <img  src="./images/mars.png" alt="earth">
                            <div class="homeContentTitle">
                                <h1>MARTE</h1>
                            </div>
                            <div class="More">
                                
                            </div>
                        </div>
                    </div>
                    <div class="pCol3">
                        <div class="planetMinfo">
                            <div class="slideNum">
                                <span>2/8</span>
                            </div>
                            <div class="pmiContent">
                                <p>Marte è il quarto pianeta del sistema solare in ordine di distanza dal Sole; è visibile a occhio nudo ed è l'ultimo dei pianeti di tipo terrestre dopo Mercurio, Venere e la Terra. Chiamato pianeta rosso per via del suo colore caratteristico causato dalla grande quantità di ossido di ferro che lo ricopre, Marte prende il nome dall'omonima divinità della mitologia romana.</p>
                            </div>
                            <div class="nextandprevBtn">
                                <a href="/#/jupiter">Giove <i class="fas fa-chevron-circle-right"></i></a>
                                <a href="/#/"><i class="fas fa-chevron-circle-left"></i> Terra </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        `
    }
}
export default marsScreen;