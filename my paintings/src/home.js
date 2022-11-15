let shop =document.getElementById('shop');

let clickedItem = JSON.parse(localStorage.getItem("data1")) || [];
let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x)=>{
        let {id, name, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return ` <div class="card" onclick ="openItem(${id})" 
        id="product-id-${id}"style="width: 18rem;">
        <span class="badge bg-secondary">New</span>
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title cardtitle text-truncate" id=${id}>${name}</h5>
          <p class="card-text text-truncate">${desc}</p>
          <button type="button" onclick="addToCart(${id})" class="btn btn-light">Add to cart</button>
        </div>
      </div> `
    }).join(""));
};
generateShop();

let addToCart = (id) => {
    let SelectedItem = id;
    let search = basket.find((x)=> x.id === SelectedItem.id);
    if(search === undefined){
        basket.push({
            id: SelectedItem.id,
            item: 1,
        })
    }
    else{
        return;
    }
    
    localStorage.setItem("data", JSON.stringify(basket));
   // console.log(basket);
    update(SelectedItem.id);
};
let update = (id) => {
    console.log(id);
    calculation();
};

 
let calculation =() => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };

 calculation();

 

 let openItem = (id) => {
    let SelectedItem = id;
    let search = clickedItem.find((x)=> x.id === SelectedItem.id);
        clickedItem.push({
            id: SelectedItem.id,
            item: 1,
 });
    
    localStorage.setItem("data1", JSON.stringify(clickedItem));
    console.log(clickedItem);
    window.location = "page.html";
};