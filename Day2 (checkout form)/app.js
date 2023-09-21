const inputBtn = document.querySelector(".payment__method");
const listOfSelections = document.querySelectorAll(".payment__selection-item");
const selectionWindow = document.querySelector(".selection__checkout");
const paymentImgs = document.querySelectorAll(".payment__logo-img");

const toggleSelectionWindow = () => {
  selectionWindow.classList.toggle("active");
};

inputBtn.addEventListener("click", toggleSelectionWindow);

for (const i of listOfSelections) {
  i.addEventListener("click", () => {
    inputBtn.value = i.textContent;
    if (i.textContent === "Visa") {
      if (paymentImgs[1].classList.contains("show__logo-img"))
        paymentImgs[1].classList.remove("show__logo-img");
      if (paymentImgs[2].classList.contains("show__logo-img"))
        paymentImgs[2].classList.remove("show__logo-img");
      paymentImgs[0].classList.add("show__logo-img");
    }
    if (i.textContent === "Master Card") {
      if (paymentImgs[0].classList.contains("show__logo-img"))
        paymentImgs[0].classList.remove("show__logo-img");
      if (paymentImgs[2].classList.contains("show__logo-img"))
        paymentImgs[2].classList.remove("show__logo-img");
      paymentImgs[1].classList.add("show__logo-img");
    }
    if (i.textContent === "American Express") {
      if (paymentImgs[0].classList.contains("show__logo-img"))
        paymentImgs[0].classList.remove("show__logo-img");
      if (paymentImgs[1].classList.contains("show__logo-img"))
        paymentImgs[1].classList.remove("show__logo-img");
      paymentImgs[2].classList.add("show__logo-img");
    }
    toggleSelectionWindow();
  });
}
