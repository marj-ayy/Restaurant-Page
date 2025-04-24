export default function home(){    
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Beary's Breakfast Café";
    const aboutDiv = document.createElement("div");
    const about = document.createElement("p");
    about.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    aboutDiv.appendChild(about);
    const hoursDiv = document.createElement("div");
    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";
    hoursDiv.appendChild(hoursHeader);
    const hoursArray = ["Sunday: 8am - 8pm",
                        "Monday: 6am - 6pm",
                        "Tuesday: 6am - 6pm",
                        "Wednesday: 6am - 6pm",
                        "Thursday: 6am - 10pm",
                        "Friday: 6am - 10pm",
                        "Saturday: 8am - 10pm"];
    for (const hourString of hoursArray){
        const hour = document.createElement("p");
        hour.textContent = hourString;
        hoursDiv.appendChild(hour);
    }
    const locationDiv = document.createElement("div");
    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";
    locationDiv.appendChild(locationHeader);
    const location = document.createElement("p");
    location.textContent = "123 Forest Drive, Forestville, Maine";
    locationDiv.appendChild(location);

    content.appendChild(header);
    content.appendChild(aboutDiv);
    content.appendChild(hoursDiv);
    content.appendChild(locationDiv);
}