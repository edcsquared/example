const arrayData = [
  {
    name: "bag1",
    brand: "apple",
    description: "iphone 11",
    price: "280",
    img: "item1.png",
  },
  {
    name: "bag2",
    brand: "apple",
    description: "iphone 11",
    price: "380",
    img: "item1.png",
  },
  {
    name: "bag3",
    brand: "apple",
    description: "iphone 11",
    price: "250",
    img: "item1.png",
  },
  {
    name: "bag4",
    brand: "apple",
    description: "iphone 11",
    price: "280",
    img: "item1.png",
  },
  {
    name: "bag5",
    brand: "apple",
    description: "iphone 11",
    price: "380",
    img: "item1.png",
  },
  {
    name: "bag6",
    brand: "apple",
    description: "iphone 11",
    price: "250",
    img: "item1.png",
  },

  {
    name: "bag7",
    brand: "apple",
    description: "iphone 11",
    price: "380",
    img: "item1.png",
  },
  {
    name: "bag8",
    brand: "apple",
    description: "iphone 11",
    price: "250",
    img: "item1.png",
  },
];

let stringDom = "";
arrayData.map((d) => {
  stringDom =
    stringDom +
    ` <div class="column">
            <img src="images/${d.img}" style="width:100%"/>
            <hr class="hr-color" />
            <p class="label-title">${d.name}</p>
            <p>${d.price} <button onclick="addToCart('images/${d.img}','${d.name}',${d.price})" class="button-order">Order</button></p>
        </div>`;
});
document.getElementById("row-items").innerHTML = stringDom;

function openModal() {
  document.getElementById("id01").style.display = "block";
  const data = JSON.parse(localStorage.getItem("items"));

  if (!data) {
    document.getElementById("noItems").innerText =
      "Number of items in the cart: 0";
  } else {
    data.map((d) => {
      let newImg = document.createElement("img");
      newImg.setAttribute("src", d.img);
      newImg.setAttribute("class", "img-cart");

      let para = document.createElement("p");
      para.setAttribute("class", "p-cart-item");

      let node = document.createTextNode(`Item: ${d.name}`);
      para.appendChild(node);
      let para2 = document.createElement("p");
      para2.setAttribute("class", "p-cart-item");

      let node2 = document.createTextNode(`Price: ${d.price}`);
      para2.appendChild(node2);

      let br = document.createElement("br");

      let div2 = document.getElementsByClassName("modal-items");
      if (div2) {
        div2[0].appendChild(newImg);
        div2[0].appendChild(para);
        div2[0].appendChild(para2);
      }
    });
    document.getElementById(
      "noItems"
    ).innerText = `Number of items in the cart: ${data.length}`;
  }
}

function addToCart(img, name, price) {
  const item = {
    img,
    name,
    price,
  };
  let data = JSON.parse(localStorage.getItem("items"));

  if (!data) data = [];
  data.push(item);
  console.log("2", data);
  localStorage.setItem("items", JSON.stringify(data));
  alert("Added to Cart!");
}
function clearCart() {
  localStorage.clear();
}
