import React from 'react';
import '../styles/Product.css';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: '$1199',
    img: '../img/iphone-15-and-iphone-15-plus-in-hand.png',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    price: '$1099',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-s23-5g',
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    price: '$1299',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m2-2023',
  },
  {
    id: 4,
    name: 'Dell XPS 13',
    price: '$1399',
    img: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps-13-laptop.jpg',
  },
  {
    id: 5,
    name: 'Sony WH-1000XM5',
    price: '$499',
    img: 'https://m.media-amazon.com/images/I/51SKmu2G8wL._AC_SL1500_.jpg',
  },
  {
    id: 6,
    name: 'AirPods Pro 2',
    price: '$249',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83',
  },
  {
    id: 7,
    name: 'Apple Watch Ultra',
    price: '$799',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQEA3',
  },
  {
    id: 8,
    name: 'Samsung Watch 6',
    price: '$399',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-r940nzka',
  },
  {
    id: 9,
    name: 'GoPro Hero 12',
    price: '$499',
    img: 'https://gopro.com/content/dam/gopro/en/products/cameras/hero-12-black/gallery/hero-12-black-front.png',
  },
  {
    id: 10,
    name: 'Canon EOS R10',
    price: '$999',
    img: 'https://m.media-amazon.com/images/I/81o9gqXIxmL._AC_SL1500_.jpg',
  },
  {
    id: 11,
    name: 'LG OLED TV 55"',
    price: '$1299',
    img: 'https://www.lg.com/us/images/tvs/md07504815/gallery/medium01.jpg',
  },
  {
    id: 12,
    name: 'Samsung QLED TV 65"',
    price: '$1599',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/qn65q60cauxzn',
  },
  {
    id: 13,
    name: 'PlayStation 5',
    price: '$499',
    img: 'https://m.media-amazon.com/images/I/51n5K0vWp-L._SL1500_.jpg',
  },
  {
    id: 14,
    name: 'Xbox Series X',
    price: '$499',
    img: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg',
  },
  {
    id: 15,
    name: 'Nintendo Switch OLED',
    price: '$349',
    img: 'https://m.media-amazon.com/images/I/71wNQ7QWurL._SL1500_.jpg',
  },
  {
    id: 16,
    name: 'Razer Blade 15',
    price: '$1899',
    img: 'https://assets.razerzone.com/eeimages/products/17518/razer-blade-15-2023-gallery-01.jpg',
  },
  {
    id: 17,
    name: 'Logitech MX Master 3S',
    price: '$99',
    img: 'https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top.png',
  },
  {
    id: 18,
    name: 'Mechanical Keyboard',
    price: '$149',
    img: 'https://m.media-amazon.com/images/I/71lMT5d6yqL._AC_SL1500_.jpg',
  },
  {
    id: 19,
    name: 'Anker Power Bank',
    price: '$59',
    img: 'https://m.media-amazon.com/images/I/61Qqz4L3jRL._AC_SL1500_.jpg',
  },
  {
    id: 20,
    name: 'JBL Bluetooth Speaker',
    price: '$129',
    img: 'https://m.media-amazon.com/images/I/71hGlt2ErhL._AC_SL1500_.jpg',
  },
];

function Product() {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <p>Explore the latest electronics handpicked just for you.</p>

      <div className="product-grid">
        {products.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
