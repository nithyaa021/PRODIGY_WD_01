// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#007BFF"; // Blue background
      item.style.color = "#FFFFFF";           // White text
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = ""; // Reset to original
      item.style.color = "";           // Reset to original
    });
  });
});
