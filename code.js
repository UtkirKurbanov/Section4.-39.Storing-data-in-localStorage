document.querySelector("button").addEventListener("click", function (event) {
  var value = document.querySelector("input").value;

  var obj = {
    text: value,
  };

  //   localStorage.setItem("headerText", value);

  localStorage.setItem("headerText", JSON.stringify(obj));
});

document.addEventListener("DOMContentLoaded", function () {
  //   console.log("Loaded");

  //   var text = localStorage.getItem("headerText");

  //   if (text && text.trim()) {
  //     document.querySelector("h1").textContent = text;
  //   }

  //   document.querySelector("h1").textContent = text;

  var obj; //undifined

  try {
    obj = JSON.parse(localStorage.getItem("headerText"));
  } catch (e) {
    obj = {};
  }

  //   obj = JSON.parse(localStorage.getItem("headerText"));

  //undifined . text
  if (obj && obj.text && obj.text.trim()) {
    document.querySelector("h1").textContent = obj.text;
  }
});
