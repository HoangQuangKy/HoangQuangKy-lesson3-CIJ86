import markerLogo from '/marker.svg';
import logoHeader from '/logo_header.png';
import styles from './styles.module.css';
import search from '/search.svg';
import shopping from '/shopping-cart.svg';
import time from '/time-past.svg';
import user from '/circle-user.svg';
import phone from '/phone-call.svg';
import React from 'react';
import Modal from 'react-modal';
import { useContext } from 'react';
import { ProductContext } from '../context/ContextProvider';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
function Header1() {
    const { productCart, updateProductQuantity, total } = useContext(ProductContext);
    console.log('productCart', productCart)
    console.log(`total`, total)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    const closeModal = () => {
        setIsOpen(false);
    }
    const handleDecreaseQuantity = (product) => {
        // Call the function to decrease quantity in the cart
        updateProductQuantity(product, 'decrease');
    };

    const handleIncreaseQuantity = (product) => {
        // Call the function to increase quantity in the cart
        updateProductQuantity(product, 'increase');
    };
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>{productCart.map((product, index) => {
                    return (
                        <>
                            <div key={index} className={styles.productCart}>
                                <img src={product.img} alt="" style={{ objectFit: `cover`, marginRight: 5, width: 100 }} />
                                <h5 style={{ border: `none`, padding: 0, margin: 0, marginRight: 10, width: 150 }}>{product.name}</h5>
                                <div>
                                    <p className={`${styles.originalPrice}`}>{`${parseInt(product.originalPrice).toLocaleString("vi-VN")}đ`}</p>
                                    <p className={`${styles.Price}`}>{`${parseInt(product.price).toLocaleString("vi-VN")}đ`}</p>
                                    <div>
                                        <button className={`${styles.btnQty}`} onClick={() => handleDecreaseQuantity(product)}>-</button>
                                        <button className={`${styles.btnQty}`} style={{ color: `red` }}>{product.quantity}</button>
                                        <button className={`${styles.btnQty}`} onClick={() => handleIncreaseQuantity(product)}>+</button>
                                    </div>
                                </div >
                            </div >
                        </>
                    )
                })}
                </div >
                <div className={`${styles.total}`}>
                    <div className={`${styles.piece}`}>
                        <div>Tạm tính</div>
                        <div>{`${total.toLocaleString("vi-VN")}đ`}</div>
                    </div>
                    <div className={`${styles.piece}`}>
                        <div>Khuyến mãi</div>
                        <div>0.000đ</div>
                    </div>
                    <div className={`${styles.piece}`}>
                        <div>Phí vận chuyển</div>
                        <div>0.000đ</div>
                    </div>
                    <div className={`${styles.piece}`}>
                        <div>Tổng tiền</div>
                        <div>{`${total.toLocaleString("vi-VN")}đ`}</div>
                    </div>
                </div>
            </Modal >
            <div className={`${styles.HeaderContainer}`}>
                <img src={logoHeader} alt="" className={`${styles.Logo}`} />
                <div className={`${styles.HeaderItem}`}>
                    <img src={markerLogo} alt="" className={`${styles.Item}`} />
                    <div className={`${styles.ItemTitle}`}>
                        <p>Xem giá tại</p>
                        <p>TP.HCM</p>
                    </div>
                </div>
                <button className={`${styles.btn}`}>
                    <p style={{ color: 'black' }}>Bạn cần tìm gì hôm nay ?</p>
                    <img src={search} alt="" className={`${styles.Item}`} />
                </button>
                <div className={`${styles.HeaderItem}`} onClick={() => openModal()}>
                    <img src={shopping} alt="" className={`${styles.Item}`} />
                    <div className={`${styles.ItemTitle}`}>
                        <p>Giỏ hàng</p>
                    </div>
                </div>
                <div className={`${styles.HeaderItem}`}>
                    <img src={time} alt="" className={`${styles.Item}`} />
                    <div className={`${styles.ItemTitle}`}>
                        <p>Tra cứu</p>
                        <p>đơn hàng</p>
                    </div>
                </div>
                <div className={`${styles.HeaderItem}`}>
                    <img src={user} alt="" className={`${styles.Item}`} />
                    <div className={`${styles.ItemTitle}`}>
                        <p>Tài khoản</p>
                    </div>
                </div>
                <div className={`${styles.HeaderItem}`}>
                    <img src={phone} alt="" className={`${styles.Item}`} />
                    <div className={`${styles.ItemTitle}`}>
                        <p>Gọi mua: 1800.6800</p>
                        <p>(Miễn phí)</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header1