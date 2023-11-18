const bar = document.getElementById('bar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}
)

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search2').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
    };

// Klik di luar elemen
const hm = document.querySelector('.hamburger');
const sc = document.querySelector('#shopping');
const sb = document.querySelector('#search2');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active');
    hamburger.classList.remove("active");
}

    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
    }

    if (!sb.contains(e.target) && !shoppingCart.contains(e.target)) {
    searchForm.classList.remove('active');
    }
});


