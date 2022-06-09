//import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/homeScreen.js";
import jupiterScreen from "./screens/jupiterScreen.js";
import marsScreen from "./screens/marsScreen.js";
import saturnScreen from "./screens/saturnScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": homeScreen,
    "/mars": marsScreen,
    "/jupiter": jupiterScreen,
    "/saturn": saturnScreen,
}

const router = () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + 
    (request.id? '/:id': '') + (request.verb? `/${request.verb}`: ``);

    const screen = routes[parseUrl]? routes[parseUrl]:Error404Screen;
    marsScreen.after_render();
    const main = document.getElementById("root");
    main.innerHTML = screen.render();
    
    const header = document.getElementById("header");
    header.innerHTML = Header.render();
    //const footer = document.getElementById("footer");
    //footer.innerHTML = Footer.render();
}


window.addEventListener("load" , router);
window.addEventListener("hashchange" , router);