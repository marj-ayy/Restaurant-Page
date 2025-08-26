import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./styles.css";

home();
const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");
for(const button of buttons){
    button.addEventListener("click", (e) => {
        for (let loopButton of buttons) {
            if (loopButton.textContent !== e.target.textContent) {
                loopButton.style.backgroundColor = "#ffde73";
            }
            else {
                loopButton.style.backgroundColor = "rgb(236,164,59)";
            }
        }
        if(e.target.textContent === "Home"){
            content.innerHTML = "";
            home();
        }
        else if(e.target.textContent === "Menu"){
            content.innerHTML = "";
            menu();
        }
        else{
            content.innerHTML = "";
            contact();
        }
    });
}


