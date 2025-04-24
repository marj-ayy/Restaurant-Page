import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
home();
const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");
for(const button of buttons){
    button.addEventListener("click", (e) => {
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


