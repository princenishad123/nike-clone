// --------------control sidebar---------------------
// --------------control sidebar---------------------

// you can change it to simple.

const bar = document.querySelector("#menusButton");
const sidebarMenus = document.querySelector("#sidebarMenus");
const sidebarForSmallDevices = document.querySelector(
  "#sidebarForSmallDevices"
);
bar.onclick = () => {
  sidebarForSmallDevices.classList.add("animation");
};
sidebarMenus.onclick = (e) => {
  e.stopPropagation();
};
const closeSiderbarBtn = document.querySelector("#close-siderbar-button");
closeSiderbarBtn.onclick = (e) => {
  e.stopPropagation();
  sidebarForSmallDevices.classList.remove("animation");
};
sidebarForSmallDevices.onclick = (e) => {
  sidebarForSmallDevices.classList.remove("animation");
};

// --------------control sidebar---------------------
// --------------control sidebar---------------------

let firstPage = document.querySelector("#first-page");
let mover = document.querySelector("#mover");

// firstPage.addEventListener("mousemove", (e) => {
//   console.log(e.clientX);
// });

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   mover.style.left = `${x}px`;
//   mover.style.top = `${y}px`;
// });


