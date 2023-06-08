// Hide the menu navbar
function menuDropdownHide() {
  const menu_dropdown = document.getElementById("header-nav-menu-dropdown");
  const menu_dropdown_bg = document.getElementById("menu-dropdown-bg");
  menu_dropdown.style.visibility = "";
  menu_dropdown.style.opacity = 0;
  menu_dropdown_bg.style.display = "";
}

// Click on the menu navbar button (open or close)
document.getElementById("header-nav-menu-btn").addEventListener("click", () => {
  const menu_dropdown = document.getElementById("header-nav-menu-dropdown");
  const menu_dropdown_bg = document.getElementById("menu-dropdown-bg");
  if (menu_dropdown.style.visibility === "") {
    menu_dropdown.style.visibility = "visible";
    menu_dropdown.style.opacity = 1;
    menu_dropdown_bg.style.display = "block";
  } else {
    menuDropdownHide();
  }
});

// If menu navbar is open click anywhere (background) except menu navbar button and menu navbar links to hide menu navbar
document
  .getElementById("menu-dropdown-bg")
  .addEventListener("click", menuDropdownHide);

// Click on the menu navbar links to hide menu navbar
const menu_dropdown_items = document.getElementsByClassName("menu-dropdown-a");
for (let i = 0; i < menu_dropdown_items.length; i++) {
  const dropdown_item = menu_dropdown_items[i];
  dropdown_item.addEventListener("click", menuDropdownHide);
}
