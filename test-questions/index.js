const COLOR = "rgb(128, 128, 255)";

let listOfAlphabets = document.querySelectorAll(".letter");
document.addEventListener("keypress", function (event) {
  let key = event.key;
  for (let index = 0; index < listOfAlphabets.length; index++) {
    if (key.toUpperCase() == listOfAlphabets[index].innerText.toString()) {
      listOfAlphabets[index].style.color = COLOR;
    }
  }
});
