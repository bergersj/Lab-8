
//create grocery item ojbects
var item1 = {
  name: "Milk",
  price: 3.00,
};

var item2 = {
  name: "Eggs",
  price: 2.55,
};

var item3 = {
    name: "Bread",
    price: 2.75,
};

//store objects in an array
var shoppingList = [item1, item2, item3];

//creating new object
var item4 = {
  name: "Beer",
  price: 9.95,
};

//adding new object to array
shoppingList.push(item4);

var receipt = document.createElement("div");
receipt.id = "receiptContainer";
document.body.appendChild(receipt);

var receiptContainer = document.getElementById('receiptContainer');
receiptContainer.style = "background-color: rgb(159, 160, 164)";


//loop through array, print object name and price
shoppingList.forEach(function(i){
  console.log(i.name);
  var dollar = i.price;
  console.log(dollar.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));

//create element for the items names and prices to display
  var itemName = document.createElement('li');
  itemName.textContent = i.name;
  receiptContainer.appendChild(itemName);
  itemName.className = "nameList";

  var itemPrice = document.createElement('span');
  itemPrice.textContent = "$" + i.price;
  receiptContainer.appendChild(itemPrice);
  itemPrice.className = "priceSpan";

});

var total = 0;

//total up the amount of the objects' combined prices
shoppingList.forEach(function(j){
  return total += j.price
});
console.log("Total = " + total.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));

//creating element for the total price to display on page
var totalPrice = document.createElement('p');
totalPrice.textContent = "Item(s) total: $" + total;
receiptContainer.appendChild(totalPrice);

//creating variables for tax and subtotal
var tax = total * 0.06;
var subTotal = total + tax;

//making tax and subTotal round for money
tax = tax.toFixed(2);
subTotal = subTotal.toFixed(2);
console.log(tax);
console.log(subTotal);

//creating element for tax and subtotal to display on page
var taxDisplay = document.createElement('span');
taxDisplay.textContent = "Tax: $" + tax;
receiptContainer.appendChild(taxDisplay);

var subTotalDisplay = document.createElement('p');
subTotalDisplay.textContent = "Your sub-total with Tax is: $" + subTotal;
receiptContainer.appendChild(subTotalDisplay);


//adding items to shoppingList array
function addItem() {
  var newItemName = document.getElementById("newItemName").value;
  var newItemPrice = document.getElementById("newItemPrice").value;


  var additionalItem = {
    name: newItemName,
    price: newItemPrice,
  };

//creating new element for additional item and price
  var newItemDisplay = document.createElement('li');
  newItemDisplay.textContent = additionalItem.name;
  receiptContainer.appendChild(newItemDisplay);
  newItemDisplay.className = "nameList";

  var newPriceDisplay = document.createElement('span');
  newPriceDisplay.textContent = "$" + additionalItem.price;
  receiptContainer.appendChild(newPriceDisplay);
  newPriceDisplay.className = "priceSpan";

  shoppingList.push(additionalItem);

  //refresh total, tax, and subtotal
  shoppingList.forEach(function(i){
    return total += i.price;
  });
  console.log(total);

  var totalPrice = document.createElement('p');
  totalPrice.textContent = "Item(s) total: $" + total;
  receiptContainer.appendChild(totalPrice);

  tax = total * 0.06;
  subTotal = total + tax;


  //creating element for tax and subtotal to display on page
  var taxDisplay = document.createElement('span');
  taxDisplay.textContent = "Tax: $" + tax;
  receiptContainer.appendChild(taxDisplay);

  var subTotalDisplay = document.createElement('p');
  subTotalDisplay.textContent = "Your sub-total with Tax is: $" + subTotal;
  receiptContainer.appendChild(subTotalDisplay);
}
