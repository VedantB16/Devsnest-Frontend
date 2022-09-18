document.addEventListener("DOMContentLoaded", function () {
  function clickHandle() {
    alert("You have clicked a button");
  }

  function handleMouseOver(event) {
    console.log(event);
  }

  // document.getElementById("btnclick").onclick = clickHandle;

  //recommended way to add an event listener
  // document.getElementById("btnclick").addEventListener("click", clickHandle);

  //adding and removing an event listener

  document.getElementById("start").addEventListener("click", function () {
    document.addEventListener("mouseover", handleMouseOver);
  });
  document.getElementById("stop").addEventListener("click", function () {
    document.removeEventListener("mouseover", handleMouseOver);
  });

  document.addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.type);
    // if(event.key == 2){
    //     event.preventDefault();
    // }
  });

  document.addEventListener("keyup", function (event) {
    console.log(event.key);
    console.log(event.type);
    // if(event.key == 2){
    //     event.preventDefault();
    // }
  });

  document.addEventListener("keypress", function (event) {
    console.log(event.key);
    console.log(event.type);
    if (event.key == 2) {
      event.preventDefault();
    }
  });

  document.getElementById("username").addEventListener("focus", function () {
    console.log("focus event happened");
  });

  document.getElementById("username").addEventListener("blur", function () {
    console.log("blur event happened");
  });

  //if we pass True events happen in the event capturing phase only p -> c -> sc
  //default behavior is event bubbling and false
  document.querySelector(".parent").addEventListener(
    "click",
    function (event) {
      console.log("Parent clicked");
      // event.stopPropagation() //stops the event from propagating up and down the child or parent elements
    },
    true
  );
  document.querySelector(".child").addEventListener(
    "click",
    function (event) {
      console.log("Child clicked");
    },
    true
  );
  document.querySelector(".subchild").addEventListener(
    "click",
    function (event) {
      console.log("Subchild clicked");
    },
    true
  );
});
