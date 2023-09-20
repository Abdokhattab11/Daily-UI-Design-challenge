const inputBtn = document.querySelector(".dropdown-menu__input");
const selectionMenu = document.querySelector(".dropdown-menu");
const selectionItems = document.querySelectorAll(".dropdown-menu__item");

const togleSelectionMenu = () => {
  selectionMenu.classList.toggle("active");
};

inputBtn.addEventListener("click", togleSelectionMenu);

for (const i of selectionItems) {
  i.addEventListener("click", () => {
    const slectionText = i.querySelector("span").textContent;

    inputBtn.value = slectionText;

    togleSelectionMenu();
  });
}
