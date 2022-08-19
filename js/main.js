function additem() {
  var textInput = document.getElementById("add_item").value;
  if (textInput.trim() === "") {
    alert("Please enter a valid Item");
  } else {
    document.getElementById("new_item").value = textInput;
    document.getElementById("add_item").value = "";
  }
}
function removeItem() {
  document.getElementById("new_item").value = "";
}
