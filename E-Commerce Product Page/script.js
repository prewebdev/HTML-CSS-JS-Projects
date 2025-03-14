const product = [
    {
        id: 1,
        image: 'headphones-img.png',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 2, 
        image: 'microphone-img.png',
        title: 'Rode NT1 Microphone',
        price:'$45',
    },
    {
        id: 3,
        image: 'smartwatch-img.png',
        title:'Smart Watch',
        price: '$30',
    },
    {
        id: 4,
        image: 'hp-laptop-img.png',
        title: 'HP Laptop Next Generation',
        price: '$70',
    },
    {
        id: 5,
        image: 'camera-img.png',
        title: '250D DSLR Camera',
        price: '$60',
    },
    {
        id: 6,
        image: 'desk-lamp-img.png',
        title: 'Metal Desk Lamp',
        price: '$35',
    },
    {
        id: 7,
        image: 'flip-foldable-moblie.png',
        title: 'Z Flip Foldable Moblie',
        price: '$55',
    },
    {
        id: 8,
        image: 'airpods-img.png',
        title: 'Air Pods Pro',
        price: '$50',
    },
]
const categories = [...new Set(product.map((item) =>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item) =>
{
    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
               <img src=${image}></img>
            </div>
            <div class="left">
               <p>${title}</p>
               <h2>${price}</h2>
               <button>Add to Cart</button>
            </div>
        </div>`
    )
}).join('')