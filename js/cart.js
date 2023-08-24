import Navbar from "../components/header.js";

document.getElementById("navbar").innerHTML=Navbar()

const display = (data) => {
    document.getElementById("cart").innerHTML = ''
    data.map((ele) => {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "cartmainbox , col-xl-12 , col-lg-12 , col-sm-12");

        let div2 = document.createElement("div");
        let imagebox = document.createElement("div");
        imagebox.setAttribute("class", "productimagebox");
        div2.setAttribute("class", "productdetails");
        let flexmain = document.createElement("div");
        // flexmain.setAttribute("class", "flexmain");
        let image = document.createElement("img");
        image.src = ele.image;
        let flexbox1 = document.createElement("div");
        flexbox1.setAttribute("class", "detail1");
        let flexbox2 = document.createElement("div");
        flexbox2.setAttribute("class", "detail2");
        let name = document.createElement("h4");
        name.innerHTML = ele.name;
        let distri = document.createElement("h5");
        distri.innerHTML = ele.distri;
        let price = document.createElement("h5");
        price.innerHTML = ele.price;
        let qty = document.createElement("h6");
        qty.innerHTML = `qty : ${ele.qty}`;
        let dist = document.createElement("p");
        dist.innerHTML = `commodi eos ratione nobis fugiat quod optio, excepturi, esse quam placeat dolor perspiciatis neque. `
        let cart = document.createElement("button");
        cart.innerHTML = `BUY NOW `;
        let remove = document.createElement("button");
        remove.innerHTML = `remove`
        remove.addEventListener("click",() => {
            fetch(`  http://localhost:3000/cart/${ele.id}`, {
                method: "DELETE",

            })
        })
        imagebox.append(image);
        flexbox2.append(price, qty , cart , remove );
        flexbox1.append(name, distri , dist);
        flexmain.append(flexbox1, flexbox2);
        div2.append(flexmain)
      
        
        div1.append(imagebox, div2);
        document.getElementById("cart").append(div1);
       
    });
}

let product;

fetch("  http://localhost:3000/cart")
    .then((response) => response.json())
    .then((response) => {
        product = response;
        display(product);
 });