const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}


if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}


// const cart = document.getElementById('cart');
// const totalAmountElement = document.getElementsByClassName('total');

// // Add event listener to each "Remove" button
// const removeButtons = document.querySelectorAll('.remove-item');
// removeButtons.forEach(button => {
//   button.addEventListener('click', removeItemFromCart);
// });

// // Remove item from the cart and update the total amount
// function removeItemFromCart(event) {
//   const item = event.target.parentNode;
//   const itemId = item.getAttribute('data-item-id');
//   const itemPrice = getItemPrice(itemId);
  
//   // Remove the item from the cart
//   item.remove();
  
//   // Update the total amount
//   const currentTotalAmount = parseFloat(totalAmountElement.textContent);
//   const newTotalAmount = currentTotalAmount - itemPrice;
//   totalAmountElement.textContent = newTotalAmount.toFixed(2);
// }

// // Helper function to get the price of an item based on its ID
// function getItemPrice(itemId) {
//   // You can replace this with your own logic to fetch item price from the backend or use a static price
//   const itemPrices = {
//     1: 10.99,
//     2: 5.99
//   };
  
//   return itemPrices[itemId];
// }
