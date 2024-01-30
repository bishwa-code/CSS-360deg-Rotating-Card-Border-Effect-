let rotatingItem = document.getElementById("rotating-item");
let options = document.getElementsByTagName("span");

for (let option of options) {
  option.addEventListener("click", () => {
    let btnId = option.getAttribute("id");
    if (btnId == "auto") {
      rotatingItem.style.background =
        "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%";
    } else if (btnId == "option1") {
      rotatingItem.style.background =
        "linear-gradient(90deg,hsla(152, 100%, 50%, 1) 0%,hsla(186, 100%, 69%, 1) 100%)";
    } else if (btnId == "option2") {
      rotatingItem.style.background =
        "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%,hsla(33, 94%, 57%, 1) 100%";
    } else if (btnId == "option3") {
      rotatingItem.style.background =
        "linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%,hsla(186, 100%, 69%, 1) 100%";
    } else if (btnId == "option4") {
      rotatingItem.style.background = "pink";
    } else if (btnId == "option5") {
      rotatingItem.style.background = "#999";
    } else if (btnId == "option6") {
      rotatingItem.style.background = "white";
    }
  });
}
