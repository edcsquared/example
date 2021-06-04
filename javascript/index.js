function openModal(img, price) {
  document.getElementById("id01").style.display = "block";
  const data = JSON.parse(localStorage.getItem("items"));

  console.log("d", data);
  if (!data) {
    document.getElementById("noItems").innerText =
      "Number of items in the cart: 0";
  } else {
    data.map((d) => {
      let newImg = document.createElement("img");
      //   let newSrc = document.createAttribute("src");
      //   newSrc.value = "qwe.png";
      newImg.setAttribute("src", d.img);
      newImg.setAttribute("class", "img-cart");

      let div2 = document.getElementsByClassName("w3-container2");
      if (div2) {
        div2[0].appendChild(newImg);
      }
    });
    document.getElementById(
      "noItems"
    ).innerText = `Number of items in the cart: ${data.length}`;
  }
}

function addToCart(img, name) {
  const item = {
    img,
    name,
  };
  let data = JSON.parse(localStorage.getItem("items"));
  console.log("1", data);

  if (!data) data = [];
  data.push(item);
  console.log("2", data);
  localStorage.setItem("items", JSON.stringify(data));
  alert("Added to Cart!");
}
function clearCart() {
  localStorage.clear();
}
