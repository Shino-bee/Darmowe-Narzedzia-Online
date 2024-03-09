const menuDropdown = document.getElementById("menu-mobile-dropdown");
const menuDropdownBackground = document.getElementById("menu-dropdown-background");
const menuDropdownTopDefaultValue = getComputedStyle(menuDropdown).top;

// Hide the menu navbar function
function menuDropdownHide() {
  menuDropdown.style.visibility = "hidden";
  menuDropdown.style.opacity = 0;
  menuDropdown.style.top = menuDropdownTopDefaultValue;
  menuDropdownBackground.style.display = "none";
}

// Click on the menu navbar button (open or close)
const menuDropdownButton = document.getElementById("menu-mobile-btn");
menuDropdownButton.addEventListener("click", () => {
  if (getComputedStyle(menuDropdown).visibility === "hidden") {
    menuDropdown.style.visibility = "visible";
    menuDropdown.style.opacity = 1;
    menuDropdown.style.top = "52px";
    menuDropdownBackground.style.display = "block";
  } else {
    menuDropdownHide();
  }
});

// Click on the menu navbar links to hide menu navbar
const menuDropdownItems = document.getElementsByClassName("menu-dropdown-a");
for (let i = 0; i < menuDropdownItems.length; i++) {
  const dropdownItem = menuDropdownItems[i];
  dropdownItem.addEventListener("click", menuDropdownHide);
}

// Click anywhere (background, except menu navbar button and menu navbar links) to hide menu navbar (if menu navbar is open)
document.getElementById("menu-dropdown-background").addEventListener("click", menuDropdownHide);
