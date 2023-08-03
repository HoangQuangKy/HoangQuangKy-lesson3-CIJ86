import styles from './styles.module.css';
import add from '/add.svg';
import React from 'react';
import { useState } from 'react';
import './allProductList.css'
let allProduct = [

    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
        name: "Samsung Galaxy A04 3GB/32GB Đen",
        price: "2090000đ",
        discount: "20",
        chip: "MediaTek Helio P35 8 nhân",
        sizeScreen: "6.5",
        ram: "2",
        rom: "12"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-tim-1.jpg",
        name: "iPhone 14 Pro Max 128GB Tím",
        price: "26790000đ",
        discount: "19",
        chip: "Apple A16 Bionic 6 nhân",
        sizeScreen: "6.7",
        ram: "6",
        rom: "12"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-vang-1.jpg",
        name: "iPhone 14 Pro Max 128GB Vàng",
        price: "26790000đ",
        discount: "19",
        chip: "Apple A16 Bionic",
        sizeScreen: "6.7",
        ram: "6",
        rom: "128"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
        name: "Samsung Galaxy A14 5G 4GB/128GB Bạc",
        price: "3.990.000đ",
        discount: "23",
        chip: "Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen: "6.6",
        ram: "4",
        rom: "64"
    },

    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053257-dien-thoai-samsung-galaxy-a04s-4gb-64gb-xanh-1.jpg",
        name: "Samsung Galaxy A04s 4GB/64GB Xanh",
        price: "2990000đ",
        discount: "25",
        chip: "Exynos 850 (8nm)",
        sizeScreen: "6.5",
        ram: "6",
        rom: "64"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053348-dien-thoai-samsung-galaxy-a04s-4gb-64gb-den-1.jpg",
        name: "Samsung Galaxy A04s 4GB/64GB Đen",
        price: "2.990.000đ",
        discount: "12",
        chip: "Snapdragon ",
        sizeScreen: "6.7",
        ram: "6",
        rom: "12"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/832/10053536-dien-thoai-oppo-a77s-8gb-128gb-xanh-1.jpg",
        name: "Điện thoại OPPO A77s 8GB/128GB Xanh",
        price: "5490000đ",
        discount: "13",
        chip: "Qualcomm Snapdragon 680 ",
        sizeScreen: "6.58",
        ram: "6",
        rom: "128"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/821/10053177-dien-thoai-nokia-8210-4g-trang-1.jpg",
        name: "Nokia 8210 4G Trắng",
        price: "1.490.000đ",
        discount: "12",
        chip: "Unisoc T107 (22 nm)",
        sizeScreen: "8.2",
        ram: "1",
        rom: "1"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
        name: "Samsung Galaxy A14 5G 4GB/128GB Đỏ",
        price: "3990000đ",
        discount: "23",
        chip: "Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen: "6",
        ram: "4",
        rom: "16"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
        name: "Samsung Galaxy A04 3GB/32GB Đen",
        price: "2090000đ",
        discount: "20",
        chip: "MediaTek Helio P35 8 nhân",
        sizeScreen: "6.5",
        ram: "2",
        rom: "12"
    },
]


const updateallProduct = allProduct.map(item => {
    const priceAfterDiscount = parseFloat(item.price.replace("đ", "").replace(",", ""));
    const discountPercentage = parseFloat(item.discount);
    const originalPrice = priceAfterDiscount / (1 - (discountPercentage / 100));

    return {
        ...item,
        originalPrice: originalPrice.toFixed(2) + "đ"
    };
});

console.log(updateallProduct);

function AllProducts() {
    return (
        <>
            <div className={`${styles.Content}`}>
                <div className='allproductList'>
                    {updateallProduct.map((product, index) => (
                        <div key={index} className={`${styles.product}`}>
                            <img src={product.img} alt="" style={{ objectFit: `cover` }} />
                            <h4>{product.name}</h4>
                            <h6 className={`${styles.Price}`}>{`${parseInt(product.price).toLocaleString("vi-VN")}đ`}</h6>
                            <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, fontSize: 20, marginBottom: 5 }}>
                                <h6 className={`${styles.originalPrice}`}>{`${parseInt(product.originalPrice).toLocaleString("vi-VN")}đ`}</h6>
                                <h6 style={{ backgroundColor: `red`, borderRadius: 5, color: `white`, marginLeft: 5 }}>{`-${product.discount}%`}</h6>
                            </div>
                            <div style={{ height: 48 }}>{`Chipset: ${product.chip}`}</div>
                            <div style={{ marginBottom: 5 }}>{`Kích thước màn hình: ${product.sizeScreen}`}</div>
                            <div style={{ marginBottom: 5 }}>{`RAM: ${product.ram}`}</div>
                            <div style={{ marginBottom: 5 }}> {`Bộ nhớ trong: ${product.rom}`}</div>
                            <a href="" style={{ display: `flex`, flexDirection: `row` }}>
                                <img src={add} alt="" className={`${styles.Item}`} />
                                Thêm vào danh sách
                            </a>
                        </div>
                    )
                    )}

                </div>
            </div>
        </>
    )
}

export default AllProducts