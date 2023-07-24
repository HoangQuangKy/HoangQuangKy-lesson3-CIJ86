import markerLogo from '/marker.svg';
import logoHeader from '/logo_header.png';
import styles from './styles.module.css';
import search from '/search.svg';
import shopping from '/shopping-cart.svg';
import time from '/time-past.svg';
import user from '/circle-user.svg';
import phone from '/phone-call.svg';

function Header1() {
    return (
        <>
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
                <div className={`${styles.HeaderItem}`}>
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