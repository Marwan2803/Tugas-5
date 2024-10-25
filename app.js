let Store = {
  c ini inarts: [],
  products: [
    {
      id: 1,
      name: "Kemeja",
      price: 100000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Celana",
      price: 50000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Jam Tangan",
      price: 200000,
      quantity: 1,
    },
    {
      id: 4,
      name: "Topi",
      price: 70000,
      quantity: 1,
    },
    {
      id: 5,
      name: "Sepatu",
      price: 300000,
      quantity: 1,
    },
  ],

  addToCart(id, quantity) {
    let product = this.products.find((product) => product.id === id);

    Store.carts.push({
      id: product.id,
      name: product.name,
      price: product.price * quantity,
      quantity: quantity,
    });

    console.log("Berhasil menambahkan " + product.name + " ke keranjang");
    console.log(this.carts);
    displayCart();
  },

  removeProductFromCart(id, price) {
    let cartItems = this.carts.filter(
      (item) => item.id === id && item.price === price
    );

    if (cartItems.length > 0) {
      this.carts = this.carts.filter((item) => item !== cartItems[0]);
      console.log(
        "Berhasil menghapus " + cartItems[0].name + " dari keranjang"
      );
      console.log(this.carts);
      displayCart();
    }
  },
};

console.log(Store.products);

function increaseQuantity(id) {
  let product = Store.products.find((product) => product.id === id);
  product.quantity++;
  document.getElementById(id).innerHTML = product.quantity;
}

function decreaseQuantity(id) {
  let product = Store.products.find((product) => product.id === id);
  if (product.quantity > 1) {
    product.quantity--;
  }
  document.getElementById(id).innerHTML = product.quantity;
}

function displayProducts() {
  const product = document.querySelector(".products");
  Store.products.forEach((item) => {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card");
    cardProduct.innerHTML = `
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Rp. ${item.price}</p>
        <button id="decrease-${item.id}" onClick="decreaseQuantity(${item.id})">-</button><span id=${item.id}>${item.quantity}</span><button id="increase-${item.id}" onClick="increaseQuantity(${item.id})">+</button>


        
        <button id=${item.id} onClick="Store.addToCart(${item.id}, document.getElementById(${item.id}).innerHTML)" >Masukkan ke keranjang</button>      
    `;

    product.appendChild(cardProduct);
  });
}
displayProducts();

function displayCart() {
  let carts = document.querySelector(".keranjang");
  carts.innerHTML = "";
  Store.carts.forEach((item) => {
    const cardCarts = document.createElement("div");
    cardCarts.classList.add("card");
    cardCarts.innerHTML += `
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Rp. ${item.price}</p>
        <button id=${item.id} onClick="Store.removeProductFromCart(${item.id}, ${item.price})" >Hapus dari keranjang</button>      
    `;
    carts.appendChild(cardCarts);
  });
}
displayCart();
