// Add event listener for the Pokemon title
document.querySelector(".sidebar h1").addEventListener("click", function () {
    // Redirect to the front page (index.html)
    window.location.href = "home.html"; // Replace with your front page file
});

// Add event listeners to each arrow-button
document.querySelectorAll(".arrow-button").forEach((button, index) => {
    button.addEventListener("mouseenter", () => {
      const arrow = document.querySelector(`.arrow:nth-of-type(${index + 1})`);
      if (arrow) {
        arrow.style.transform = "translateX(-40px)";
        button.style.transform = "translateX(-20px)";
      }
    });
  
    button.addEventListener("mouseleave", () => {
      const arrow = document.querySelector(`.arrow:nth-of-type(${index + 1})`);
      if (arrow) {
        arrow.style.transform = "translateX(0)";
        button.style.transform = "translateX(0)";
      }
    });
  });
  
