function removeItem() {
  var removeItem = document.getElementsByClassName("remove_item");
  for (let i = 0; i < removeItem.length; i++) {
    var x = removeItem[i];
    x.parentElement.parentElement.remove();
    let totalPrice = 0;
    for (let i = 0; i < itemsCount.length; i++) {
      let cartItemPrices = document
        .getElementsByClassName("cart_item_total_price")
        [i].value.replace("$", "");
      totalPrice += cartItemPrices * 1;
      console.log("This is", totalPrice);
    }

    let setTotalPrice = document.getElementsByClassName("total_price");

    let cartTotal = document.getElementsByClassName("total_price")[0];
    cartTotal.value = "$" + totalPrice;
  }
}

// Count items already in cart

let itemsCount = document.getElementsByClassName("cart_item");

for (let i = 0; i < itemsCount.length; i++) {
  let itemCount = document.getElementsByClassName("cart_item_count")[i].value;

  let itemPrice = document
    .getElementsByClassName("cart_item_price")
    [i].textContent.replace("$", "");

  let itemTotal = document.getElementsByClassName("cart_item_total_price")[i];
  itemTotal.value = "$" + itemCount * itemPrice;
}

let totalPrice = 0;
for (let i = 0; i < itemsCount.length; i++) {
  let cartItemPrices = document
    .getElementsByClassName("cart_item_total_price")
    [i].value.replace("$", "");
  totalPrice += cartItemPrices * 1;
  console.log("This is", totalPrice);
}

let setTotalPrice = document.getElementsByClassName("total_price");

let cartTotal = document.getElementsByClassName("total_price")[0];
cartTotal.value = "$" + totalPrice;

function itemTotal() {
  let itemsCount = document.getElementsByClassName("cart_item");

  for (let i = 0; i < itemsCount.length; i++) {
    let itemCount = document.getElementsByClassName("cart_item_count")[i].value;

    let itemPrice = document
      .getElementsByClassName("cart_item_price")
      [i].textContent.replace("$", "");

    let itemTotal = document.getElementsByClassName("cart_item_total_price")[i];
    itemTotal.value = "$" + itemCount * itemPrice;

    let totalPrice = 0;
    for (let i = 0; i < itemsCount.length; i++) {
      let cartItemPrices = document
        .getElementsByClassName("cart_item_total_price")
        [i].value.replace("$", "");
      totalPrice += cartItemPrices * 1;
      console.log("This is", totalPrice);
    }

    let setTotalPrice = document.getElementsByClassName("total_price");

    let cartTotal = document.getElementsByClassName("total_price")[0];
    cartTotal.value = "$" + totalPrice;
  }
}
