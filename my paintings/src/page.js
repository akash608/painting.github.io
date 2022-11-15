let shopItem = document.getElementById("showItem");

let clickedItem = JSON.parse(localStorage.getItem("data1")) || [];

 
let generateShopItem = () => {
  return (shopItem.innerHTML = clickedItem.map((x)=>{
         let { id,item} = x;
          let search = shopItemData.find((y) => y.id === id) || [];
    return `
    <div class="row g-0 bg-light position-relative">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src="${search.img}" class="shop-item-img" alt="...">
          </div>
          <div class=" product-info col-md-6 p-5 ps-md-0 product-info">
            <h5 class="mt-0">${search.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">$ ${search.price}</h6>
            <span class="card-subtitle mb-2 text-muted">${search.size}</span>
            <p>${search.desc}</p>
            <button type="button" class="btn btn-primary">Buy Now</button>
            <button type="button" class="btn btn-light">Add to Cart</button>
          </div>
        </div>
    `
  }))

  };
  

window.addEventListener("onload",generateShopItem());

window.addEventListener("hashchange",localStorage.removeItem("data1"));