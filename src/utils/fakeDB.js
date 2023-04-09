// Add data to local storage
const addToDB = (id) => {
  let shoppingCart = {};

  // Get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //   Add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  //   Set data to local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { addToDB };
