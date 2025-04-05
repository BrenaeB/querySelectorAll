// Select all <p> elements and store them in the 'descriptions' variable  
let descriptions = document.querySelectorAll("p");  

// Log the entire NodeList of descriptions  
console.log("All paragraphs:", descriptions);  

// Function to make a bunny appear  
function makeBunnyAppear() {  
    // Change text for all paragraphs  
    descriptions.forEach((description) => {  
        description.textContent = "TADAAA!";  
    });  
    
    // Create an image element  
    const bunnyImage = document.createElement("img");  
    bunnyImage.src = "images/cutebunny.jpg"; // Replace with a valid bunny image URL  
    bunnyImage.alt = "A cute bunny"; // Alternative text for the image  
    bunnyImage.style.width = "300px"; // Styles for the bunny image  
    bunnyImage.style.height = "auto"; // Keeps the aspect ratio  

    // Append the bunny image to the bunny container  
    const bunnyContainer = document.getElementById("bunny-container");  
    bunnyContainer.innerHTML = ""; // Clear previous images (if any)  
    bunnyContainer.appendChild(bunnyImage);  
}  

// Add click event listener to the button  
document.getElementById("changeText").addEventListener("click", makeBunnyAppear);  