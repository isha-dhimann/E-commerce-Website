let productsData = [
      {
        id: 1,
        title: "Red Dress",
        description: "Trendy red dress for women.",
        price: 1200,
        discountPercentage: 25,
        thumbnail:"https://m.media-amazon.com/images/I/51WDhEwl38L._UY1000_.jpg"
      },
      {
        id: 2,
        title: "Men's Sneakers",
        description: "Comfortable sneakers for men.",
        price: 2500,
        discountPercentage: 30,
        thumbnail: "https://images.meesho.com/images/products/553410539/zapm1_512.webp?width=512"
      },
      {
        id: 3,
        title: "Kids Wear",
        description: "Stylish outfit for kids.",
        price: 800,
        discountPercentage: 20,
        thumbnail:	"https://m.media-amazon.com/images/I/71LxmGUQsgL._SY395_.jpg"
      },
          {
        id: 4,
        title: "Red Dress",
        description: "Trendy red dress for women.",
        price: 1200,
        discountPercentage: 25,
        thumbnail: "https://images.meesho.com/images/products/534060967/mmlnx_512.avif?width=512"
      },
      {
        id: 5,
        title: "Men's Sneakers",
        description: "Comfortable sneakers for men.",
        price: 2500,
        discountPercentage: 30,
        thumbnail: "	https://m.media-amazon.com/images/I/611eLsqiVlL._SY575_.jpg"
      },
      {
        id: 6,
        title: "Kids Wear",
        description: "Stylish outfit for kids.",
        price: 800,
        discountPercentage: 20,
        thumbnail: "https://images.meesho.com/images/products/94090879/ui5yg_512.webp?width=512",
      },
                {
        id: 7,
        title: "Red Dress",
        description: "Trendy red dress for women.",
        price: 1200,
        discountPercentage: 25,
        thumbnail: "https://m.media-amazon.com/images/I/51Fpt5hLOML._SY741_.jpg",
      },
      {
        id: 8,
        title: "Men's Sneakers",
        description: "Comfortable sneakers for men.",
        price: 2500,
        discountPercentage: 30,
        thumbnail: "https://images.meesho.com/images/products/412054781/pkmq4_512.webp?width=512",
      },
      {
        id: 9,
        title: "Kids Wear",
        description: "Stylish outfit for kids.",
        price: 800,
        discountPercentage: 20,
        thumbnail: "	https://images.meesho.com/images/products/52282672/ljp7v_512.webp?width=512",
      },
          {
        id: 10,
        title: "Kids Wear",
        description: "Stylish outfit for kids.",
        price: 800,
        discountPercentage: 20,
        thumbnail: "https://images.meesho.com/images/products/591327106/l6wsk_512.avif?width=360",
      },
       {
        id: 11,
        title: "Red Dress",
        description: "Trendy red dress for women.",
        price: 1200,
        discountPercentage: 25,
        thumbnail:"https://images.meesho.com/images/products/531229013/bc5qg_512.webp?width=512",
      },
      {
        id: 12,
        title: "Men's Sneakers",
        description: "Comfortable sneakers for men.",
        price: 2500,
        discountPercentage: 30,
        thumbnail: "https://images.meesho.com/images/products/395711922/dcogo_512.avif?width=512",
      },
      {
        id: 13,
        title: "Kids Wear",
        description: "Stylish outfit for kids.",
        price: 800,
        discountPercentage: 20,
        thumbnail:	"https://images.meesho.com/images/products/281867646/gu4xc_512.avif?width=512",
      },
          {
        id: 14,
        title: "Red Dress",
        description: "Trendy red dress for women.",
        price: 1200,
        discountPercentage: 25,
        thumbnail: "https://images.meesho.com/images/products/356537357/bnfuf_512.webp?width=512",
      },
      {
        id: 15,
        title: "Men's Sneakers",
        description: "Comfortable sneakers for men.",
        price: 2500,
        discountPercentage: 30,
        thumbnail: "	https://images.meesho.com/images/products/472917628/6q1mt_512.webp?width=512",
      },

    ];

    function onLoad(data) {
      let products = document.querySelector(".products");
      let items = ``;

      data.forEach((item) => {
        items += `
          <div class="product">
            <img src="${item.thumbnail}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="product-price">
              <span class="new-price">₹${item.price}</span>
              <span class="old-price">₹${(item.price * 1.5).toFixed(0)}</span>
              <span class="discount">${item.discountPercentage}% OFF</span>
            </div>
            <button class="add-cart" onclick="addtobag()">Add to Cart</button>
          </div>`;
      });

      products.innerHTML = items;
    }

    function addtobag() {
      let countitem = document.querySelector(".bag-count");
      let count = parseInt(countitem.textContent) || 0;
      countitem.textContent = count + 1;
    }

    // Object se load
    onLoad(productsData);

    function showPopup(event) {
  event.preventDefault();
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

