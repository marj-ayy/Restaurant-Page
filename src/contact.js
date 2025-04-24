export default function contact(){    
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Contact Us";
    const mamaDiv = document.createElement("div");
    const mamaHeader = document.createElement("h3");
    mamaHeader.textContent = "Mama Bear";
    mamaDiv.appendChild(mamaHeader);
    const mamaArray = ["Chef",
                        "555-555-5554",
                        "totallyRealEmail@notFake.com"];
    for (const mamaString of mamaArray){
        const mamaPara = document.createElement("p");
        mamaPara.textContent = mamaString;
        mamaDiv.appendChild(mamaPara);
    }
    const papaDiv = document.createElement("div");
    const papaHeader = document.createElement("h3");
    papaHeader.textContent = "Papa Bear";
    papaDiv.appendChild(papaHeader);
    const papaArray = ["Manager",
                        "555-555-5574",
                        "RealEmail@notFake.com"];
    for (const papaString of papaArray){
        const papaPara = document.createElement("p");
        papaPara.textContent = papaString;
        papaDiv.appendChild(papaPara);
    }


    content.appendChild(header);
    content.appendChild(mamaDiv);
    content.appendChild(papaDiv);
}