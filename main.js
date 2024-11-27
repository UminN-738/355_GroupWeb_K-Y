// Add event listener for the Pokemon title
document.querySelector(".sidebar h1").addEventListener("click", function () {
    // Redirect to the front page (index.html)
    window.location.href = "home.html"; // Replace with your front page file
});
// Keep track of the currently active button
let activeButton = null;

// Add event listeners to each arrow-button
document.querySelectorAll(".arrow-button").forEach((button, index) => {
    button.addEventListener("mouseenter", () => {
        const arrow = document.querySelector(`.arrow:nth-of-type(${index + 1})`);
        if (arrow) {
            arrow.style.transform = "translateX(-40px)";
            button.style.transform = "translateX(-20px)";
        }
    });

    button.addEventListener("click", () => {
        const arrow = document.querySelector(`.arrow:nth-of-type(${index + 1})`);

        // If there was a previously active button, reset its transformation and remove the box
        if (activeButton && activeButton !== button) {
            const activeArrow = document.querySelector(
                `.arrow:nth-of-type(${Array.from(document.querySelectorAll(".arrow-button")).indexOf(activeButton) + 1})`
            );
            if (activeArrow) activeArrow.style.transform = ""; // Reset previous arrow
            activeButton.style.transform = ""; // Reset previous button
            document.querySelector(".popup-box")?.remove(); // Remove previous popup
        }

        // Set the current button as active
        activeButton = button;

        // Apply the transformation continuously
        if (arrow) {
            arrow.style.transform = "translateX(-40px)";
            button.style.transform = "translateX(-20px)";
        }

        // Create and display the popup box
        let popupBox = document.querySelector(".popup-box");
        if (!popupBox) {
            popupBox = document.createElement("div");
            popupBox.className = "popup-box";
            popupBox.textContent = "I am a popup box!";
            document.body.appendChild(popupBox);
        }

        // Position the popup box to the left of the button
        const rect = button.getBoundingClientRect();
        popupBox.style.position = "absolute";
        popupBox.style.top = `${rect.top}px`;
        popupBox.style.left = `${rect.left - popupBox.offsetWidth - 10}px`;
    });
});
