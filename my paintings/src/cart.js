let label = document.getElementById("label");
let shopCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation =() => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };

 calculation();

 let generateCart = () => {
    if(basket.length !== 0){
        return (shopCart.innerHTML = basket.map((x) => {
            let { id,item} = x;
            let search = shopItemData.find((y) => y.id === id) || [];
            return `
            <li class="list-group-item d-flex">
            <img width="100" src="${search.img}" alt="img">
            <div class="detail">
                <div class="title-price-x">
                    <h5><p>${search.name}</p><p>$ ${search.price}</p></h5> 
                    <i onclick="removeItem(${id})"class="bi bi-x-square"></i> 
                </div>            
            </div>
            </li>
            `
        }).join(""));

    } else {
        shopCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href = "index.html">
        <button class = "HomeBtn mb-4">Back to Home</button>
        </a>
        `;
    }
 };

 generateCart();

 let removeItem =(id)=> {
    let selectedItem = id;
    console.log(selectedItem.id);
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCart();
    localStorage.setItem("data", JSON.stringify(basket));
 };