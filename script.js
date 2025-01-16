// script.js

function addParty() {
  const name = document.getElementById('party-name').value;
  const address = document.getElementById('party-address').value;
  const number = document.getElementById('party-number').value;

  if (name && address && number) {
    const partyList = document.getElementById('party-list');
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Address: ${address}, Number: ${number}`;
    partyList.appendChild(li);

    // Clear input fields
    document.getElementById('party-form').reset();
  }
}

function addItem() {
  const itemName = document.getElementById('item-name').value;
  const itemPrice = document.getElementById('item-price').value;

  if (itemName && itemPrice) {
    const itemList = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = `Item: ${itemName}, Price: ₹${itemPrice}`;
    itemList.appendChild(li);

    // Clear input fields
    document.getElementById('item-form').reset();
  }
}

function addSale() {
  const item = document.getElementById('sale-item').value;
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('sale-price').value;

  if (item && quantity && price) {
    const saleList = document.getElementById('sale-list');
    const li = document.createElement('li');
    li.textContent = `Item: ${item}, Quantity: ${quantity}, Total Price: ₹${quantity * price}`;
    saleList.appendChild(li);

    // Clear input fields
    document.getElementById('sale-form').reset();
  }
}
