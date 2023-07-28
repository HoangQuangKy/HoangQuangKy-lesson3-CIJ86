import styles from './styles.module.css';
import add from '/add.svg';
import React from 'react';
import { useState } from 'react';
import ModalDetailProdcut from './ModalDetailProduct';
let hotTrend = [
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
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
        name: "Samsung Galaxy A14 5G 4GB/128GB Đỏ",
        price: "3990000đ",
        discount: "23",
        chip: "Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen: "6",
        ram: "4",
        rom: "16"
    }
]

const updatedHotTrend = hotTrend.map(item => {
    const priceAfterDiscount = parseFloat(item.price.replace("đ", "").replace(",", ""));
    const discountPercentage = parseFloat(item.discount);
    const originalPrice = priceAfterDiscount / (1 - (discountPercentage / 100));

    return {
        ...item,
        originalPrice: originalPrice.toFixed(2) + "đ"
    };
});

console.log(updatedHotTrend);

function Products() {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [productDetail, setProductDetail] = useState({
        img: "",
        name: "",
        price: "",
        discount: "",
        originalPrice: "",
        quantity: 0,
    });
    const saveProductDetail = (product) => {
        setProductDetail({
            img: product.img,
            name: product.name,
            price: product.price,
            discount: product.discount,
            originalPrice: product.originalPrice,
        });
    };


    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className={`${styles.Content}`}>
                <h3 style={{ width: 1350, display: `flex`, textAlign: `center` }}>TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h3>
                <div className={`${styles.productList}`}>
                    {updatedHotTrend.map((product, index) => (
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
                            <button className={`${styles.btn1}`} onClick={() => {
                                saveProductDetail(product)
                                openModal()
                            }}>Show Details</button>
                        </div>
                    )
                    )}

                </div>
            </div>
            <ModalDetailProdcut isOpen={modalIsOpen} product={productDetail} isClose={closeModal}></ModalDetailProdcut>
        </>
    )
}

export default Products