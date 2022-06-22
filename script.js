// Create Element By Using DOM
let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputList = document.getElementById("input-list");

inputButtonId.addEventListener("click", () => {
  let li = document.createElement("li");
  //   const text = document.createTextNode(inputTxtId.value);
  li.textContent = inputTxtId.value;
  li.className = "input-item";
  inputList.append(li);
  inputTxtId.value = "";
});

//---------------------------
