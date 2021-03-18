function changeCss(){
    if (document.querySelector("#theme").getAttribute("href") == "styles/style.css") {
        console.log("nani");
        document.querySelector("#theme").href = "styles/dark.css";
    }
    else {
        document.querySelector("#theme").href = "styles/style.css";
    }
}

window.onload = function(){
    document.querySelector(".slider").addEventListener( 'click', changeCss);
}