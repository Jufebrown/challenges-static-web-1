var num = document.querySelector(".number");
var rng = document.querySelector(".range");

console.log("num", num.value);
console.log("rng", rng.value);

function rngSetSame() {
  event.preventDefault();
  rng.value = num.value;
}

function numSetSame() {
  event.preventDefault();
  num.value = rng.value;
}

function stopReload(keyboardEvent) {

  event.preventDefault();
  if(keyboardEvent.key === "Enter"){
    rngSetSame();
  }
}

num.addEventListener("change", rngSetSame);
rng.addEventListener("change", numSetSame);
num.addEventListener("keyup", stopReload);
