const menuDropdown = document.getElementById("menu-mobile-dropdown-container");
const menuDropdownBackground = document.getElementById("menu-dropdown-background");
const menuDropdownTopDefaultValue = getComputedStyle(menuDropdown).top;

// Function hides the mobile menu
function menuDropdownHide() {
  menuDropdown.style.visibility = "hidden";
  menuDropdown.style.opacity = 0;
  menuDropdown.style.top = menuDropdownTopDefaultValue;
  menuDropdownBackground.style.display = "none";
}

// Click on the mobile menu navbar button (open or close)
const menuDropdownButton = document.getElementById("menu-mobile-btn");
menuDropdownButton.addEventListener("click", () => {
  if (getComputedStyle(menuDropdown).visibility === "hidden") {
    menuDropdown.style.visibility = "visible";
    menuDropdown.style.opacity = 0.9;
    menuDropdown.style.top = "56px";
    menuDropdownBackground.style.display = "block";
  } else {
    menuDropdownHide();
  }
});

// Click on the mobile menu navbar links to hide menu navbar
const menuDropdownItems = document.getElementsByClassName("dropdown-element-a");
for (let i = 0; i < menuDropdownItems.length; i++) {
  const dropdownItem = menuDropdownItems[i];
  dropdownItem.addEventListener("click", menuDropdownHide);
}

// Click anywhere (background, except mobile menu navbar button and mobile menu navbar links) to hide mobile menu navbar (if mobile menu navbar is open)
document.getElementById("menu-dropdown-background").addEventListener("click", menuDropdownHide);

// Click on the triangle in mobile dropdown menu to expand the submenu
const triangleMobileContainer = Array.from(
  document.getElementsByClassName("dropdown-element-span")
);
triangleMobileContainer.forEach((triangle, whichSubmenu) => {
  triangle.addEventListener("click", () => {
    // Displays a submenu depending on which triangle was clicked
    switch (whichSubmenu) {
      // Unit Coverters
      case 0:
        break;

      // Online calcualtors
      case 1:
        break;

      // Text Content Tools
      case 2:
        break;

      // Other Tools
      case 3:
        break;
    }
  });
});
