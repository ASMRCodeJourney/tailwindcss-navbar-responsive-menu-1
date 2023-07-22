const btn_mobile = document.getElementById("btn-mobile");
const menu_mobile = document.getElementById("menu-mobile");

document.addEventListener("click", (e) => {
  if (btn_mobile.contains(e.target)) {
    menu_mobile.classList.add("menu-mobile-show");
    menu_mobile.classList.toggle("hidden");
  } else {
    if (menu_mobile.classList.contains("menu-mobile-show"));
    menu_mobile.classList.remove("menu-mobile-show");
    menu_mobile.classList.add("hidden");
  }
});
