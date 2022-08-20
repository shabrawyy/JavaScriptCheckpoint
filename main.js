updateCart();
clearCart();

function clearCart() {
  let clearAllItems = document.getElementsByClassName("cart_item");
  const cartItemsCount = clearAllItems.length;
  if (cartItemsCount > 0) {
    for (let i = 0; i <= cartItemsCount; i++) {
      clearAllItems[0].remove();
      updateCart();
    }
  } else {
    alert("Your cart is already empty!");
  }
  updateCart();
}

function removeItem() {
  let removeItem = document.getElementsByClassName("remove_item");
  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", removeFromCart(event));
  }
}
function removeFromCart(event) {
  let removeButton = event.target;
  removeButton.parentElement.parentElement.remove();
  updateCart();
}

function updateCart() {
  let itemsCount = document.getElementsByClassName("cart_item");

  for (let i = 0; i < itemsCount.length; i++) {
    let itemCount = document.getElementsByClassName("cart_item_count")[i].value;

    let cartItemPrice = document
      .getElementsByClassName("cart_item_price")
      [i].textContent.replace("$", "");

    let itemTotal = document.getElementsByClassName("cart_item_total_price")[i];
    itemTotal.value = "$" + itemCount * cartItemPrice;
  }

  let totalPrice = 0;
  for (let i = 0; i < itemsCount.length; i++) {
    let cartItemPrices = document
      .getElementsByClassName("cart_item_total_price")
      [i].value.replace("$", "");
    totalPrice += cartItemPrices * 1;
  }

  let setTotalPrice = document.getElementsByClassName("total_price");

  let cartTotal = document.getElementsByClassName("total_price")[0];
  cartTotal.value = "$" + totalPrice;
}

function addItem(itemID) {
  let clickedButton =
    document.getElementById(itemID).parentElement.parentElement;

  let itemName = clickedButton.getElementsByClassName("item_name")[0].innerText;

  let itemPrice =
    clickedButton.getElementsByClassName("item_price")[0].innerText;

  let itemImage = clickedButton.getElementsByClassName("item_image")[0].src;

  let cartItemId = itemID + "Cart";

  let cartItems = document.getElementsByClassName("cart_item_name");
  let cartCheck = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let oneCartItem = cartItems[i].innerText;
    if (oneCartItem == itemName) {
      cartCheck += 1;
    } else {
      cartCheck += 0;
    }
  }
  if (cartCheck > 0) {
    alert("Item Already Added");
  } else {
    addToCart(cartItemId, itemName, itemPrice, itemImage);
  }
}

function addToCart(cartItemId, itemName, itemPrice, itemImage) {
  let addItem = document.getElementsByClassName("cart_items")[0];

  let cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart_item");

  let cartItemDiv2 = document.createElement("div");
  cartItemDiv2.classList.add("cart_item_details");

  let cartItemInput = document.createElement("input");
  cartItemInput.classList.add("cart_item_count");
  cartItemInput.type = "number";
  cartItemInput.min = "1";
  cartItemInput.max = "999";
  cartItemInput.value = "1";
  cartItemInput.onclick = "itemTotal()";

  let cartItemImage = document.createElement("img");
  cartItemImage.src = itemImage;

  let cartItemDiv3 = document.createElement("div");
  cartItemDiv3.classList.add("cart_item_data");

  let cartItemLabel = document.createElement("label");
  cartItemLabel.classList.add("cart_item_name");
  cartItemLabel.innerText = itemName;

  let cartItemSpan = document.createElement("span");
  cartItemSpan.classList.add("cart_item_price");
  cartItemSpan.innerText = itemPrice;

  let cartItemDiv4 = document.createElement("div");
  cartItemDiv4.classList.add("cart_item_control");

  let cartItemInput2 = document.createElement("input");
  cartItemInput2.classList.add("cart_item_total_price");
  cartItemInput2.readOnly = true;

  let cartItemRemoveButton = document.createElement("button");
  cartItemRemoveButton.setAttribute("id", cartItemId);
  cartItemRemoveButton.classList.add("remove_item");
  cartItemRemoveButton.innerText = "X";
  // cartItemRemoveButton.onclick = "removeItem()";

  addItem.append(cartItemDiv);
  cartItemDiv.append(cartItemDiv2);
  cartItemDiv2.append(cartItemInput);
  cartItemDiv2.append(cartItemImage);
  cartItemDiv2.append(cartItemLabel);
  cartItemDiv2.append(cartItemSpan);
  cartItemDiv.append(cartItemDiv4);
  cartItemDiv4.append(cartItemInput2);
  cartItemDiv4.append(cartItemRemoveButton);
  cartItemRemoveButton.addEventListener("click", removeItem);
  cartItemInput.addEventListener("click", updateCart);
  updateCart();
}
