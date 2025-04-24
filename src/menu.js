import honeyImg from "./img/honey.jpg";
import pancakeImg from "./img/pancakes.jpg";
export default function menu(){    
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Menu";
    const beverages = document.createElement("h2");
    beverages.textContent = "Beverages";
    const honeyDiv = document.createElement("div");
    const honeyHeader = document.createElement("h3");
    honeyHeader.textContent = "Honey Tea";
    const honeyPara = document.createElement("p");
    honeyPara.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    const honeyImgDiv = document.createElement("div");
    const honeyPrice = document.createElement("span");
    honeyPrice.textContent = "$2";
    const honeyImage = document.createElement("img");
    honeyImage.src = honeyImg;
    honeyImgDiv.appendChild(honeyPrice);
    honeyImgDiv.appendChild(honeyImage);
    honeyDiv.appendChild(honeyHeader);
    honeyDiv.appendChild(honeyPara);
    honeyDiv.appendChild(honeyImgDiv);


    const mainDishes = document.createElement("h2");
    mainDishes.textContent = "Main Dishes";
    const pancakeDiv = document.createElement("div");
    const pancakeHeader = document.createElement("h3");
    pancakeHeader.textContent = "Pancakes";
    const pancakePara = document.createElement("p");
    pancakePara.textContent = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
    const pancakeImgDiv = document.createElement("div");
    const pancakePrice = document.createElement("span");
    pancakePrice.textContent = "$4";
    const pancakeImage = document.createElement("img");
    pancakeImage.src = pancakeImg;
    pancakeImgDiv.appendChild(pancakePrice);
    pancakeImgDiv.appendChild(pancakeImage);
    pancakeDiv.appendChild(pancakeHeader);
    pancakeDiv.appendChild(pancakePara);
    pancakeDiv.appendChild(pancakeImgDiv);


    content.appendChild(header);
    content.appendChild(beverages);
    content.appendChild(honeyDiv);
    content.appendChild(mainDishes);
    content.appendChild(pancakeDiv);
}