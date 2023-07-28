import styles from './styles.module.css';
import Modal from 'react-modal';
import { ProductContext } from '../context/ContextProvider';
import { useContext } from 'react';
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
function ModalDetailProdcut(props) {
    const { addProductToCart } = useContext(ProductContext);
    const { isOpen, product, isClose } = props
    console.log('prop', props)
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={isClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={`${styles.productModal}`}>
                <img src={product.img} alt="" style={{ objectFit: `cover`, marginRight: 15 }} />
                <div>
                    <h4>{product.name}</h4>
                    <hr />
                    <h6 className={`${styles.Price}`}>{`${parseInt(product.price).toLocaleString("vi-VN")}đ`}</h6>
                    <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, fontSize: 20, marginBottom: 5 }}>
                        <h6 className={`${styles.originalPrice}`}>{`${parseInt(product.originalPrice).toLocaleString("vi-VN")}đ`}</h6>
                        <h6 style={{ backgroundColor: `red`, borderRadius: 5, color: `white`, marginLeft: 5 }}>{`-${product.discount}%`}</h6>
                    </div>
                    <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, fontSize: 20, marginBottom: 5 }}>
                        <h6 className={`${styles.adv}`}>Trả góp 0%</h6>
                        <h6 className={`${styles.advNew}`}>Mới</h6>
                    </div>
                    <button className={styles.addToCart} onClick={() => { addProductToCart(product) }}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </Modal>
    )
}
export default ModalDetailProdcut