import React from 'react'
import styles from './styles.module.css';
import './ForYou.css';
function ForYou() {
    let productForU = [
        {
            img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
            name: "Samsung Galaxy A14 5G 4GB/128GB Bạc",
            price: "3990000đ",
            discount: "23",
        },
        {
            img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/821/10053177-dien-thoai-nokia-8210-4g-trang-1.jpg",
            name: "Nokia 8210 4G Trắng",
            price: "1490000đ",
            discount: "12",
        },
        {
            img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
            name: "Samsung Galaxy A14 5G 4GB/128GB Đỏ",
            price: "3990000đ",
            discount: "23",
        },
        {
            img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
            name: "Samsung Galaxy A04 3GB/32GB Đen",
            price: "2090000đ",
            discount: "20",
        },
        {
            img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
            name: "Samsung Galaxy A14 5G 4GB/128GB Bạc",
            price: "3990000đ",
            discount: "23",
        },

    ]
    const updateallProduct = productForU.map(item => {
        const priceAfterDiscount = parseFloat(item.price.replace("đ", "").replace(",", ""));
        const discountPercentage = parseFloat(item.discount);
        const originalPrice = priceAfterDiscount / (1 - (discountPercentage / 100));

        return {
            ...item,
            originalPrice: originalPrice.toFixed(2) + "đ"
        };
    });
    console.log('siuuuuu', updateallProduct)
    return (
        <div className='productContainer'>
            <div className='title'>
                <h1 className='titleContent'>SẢN PHẨM DÀNH RIÊNG CHO BẠN</h1>
            </div>
            <div className='productContainer1'>
                <div className='productForYou'>
                    {updateallProduct.map((product, index) => {
                        return (
                            <div key={index} className={`${styles.product}`} style={{ minHeight: 326.53 }}>
                                <img src={product.img} alt="" style={{ objectFit: `cover` }} />
                                <h4>{product.name}</h4>
                                <h6 className={`${styles.Price}`}>{`${parseInt(product.price).toLocaleString("vi-VN")}đ`}</h6>
                                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, fontSize: 20, marginBottom: 5 }}>
                                    <h6 className={`${styles.originalPrice}`}>{`${parseInt(product.originalPrice).toLocaleString("vi-VN")}đ`}</h6>
                                    <h6 style={{ backgroundColor: `red`, borderRadius: 5, color: `white`, marginLeft: 5 }}>{`-${product.discount}%`}</h6>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ForYou
