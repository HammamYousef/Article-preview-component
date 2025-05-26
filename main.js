const shareBtn = document.getElementById("shareBtn");
const cardLinks = document.getElementById("cardLinks");

shareBtn.addEventListener("click", () => {
  let isClosed = cardLinks.classList.contains("hidden");
  if (isClosed) {
    cardLinks.classList.remove("hidden");
    cardLinks.classList.remove("animate__bounceOutDown");
    cardLinks.classList.add("animate__animated", "animate__bounceInUp");
    shareBtn.classList.add("active");
  } else {
    cardLinks.classList.remove("animate__bounceInUp");
    cardLinks.classList.add("animate__bounceOutDown");
    shareBtn.classList.remove("active");
    cardLinks.addEventListener("animationend", function handler() {
      cardLinks.classList.add("hidden");
      cardLinks.classList.remove("animate__animated", "animate__bounceOutDown");
      cardLinks.removeEventListener("animationend", handler);
    });
  }
});
