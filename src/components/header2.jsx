import styles from './styles.module.css';
import pool from '/poll-h.svg';
import book from '/book-bookmark.svg';
import truck from '/truck-side.svg';
import gem from '/gem.svg';
import tools from '/tools.svg';

function Header2() {
    return (
        <>
            <div className={`${styles.HeaderContainer2}`}>
                <h3 className={`${styles.HeaderItem2}`} >
                    <img src={pool} alt="" className={`${styles.Item}`} />
                    <b>Danh mục sản phẩm</b>
                </h3>
                <div className={`${styles.HeaderItem}`}>
                    <div className={`${styles.HeaderItem3}`}>
                        <img src={truck} alt="" className={`${styles.Item}`} />
                        <div className={`${styles.ItemTitle}`}>
                            <h5>Giap lắp chuyên nghiệp</h5>
                        </div>
                    </div>
                    <div className={`${styles.HeaderItem3}`}>
                        <img src={tools} alt="" className={`${styles.Item}`} />
                        <div className={`${styles.ItemTitle}`}>
                            <h5>Bảo hành nhanh gọn</h5>
                        </div>
                    </div>
                    <div className={`${styles.HeaderItem3}`}>
                        <img src={book} alt="" className={`${styles.Item}`} />
                        <div className={`${styles.ItemTitle}`}>
                            <h5>Tổng hợp khuyến mãi</h5>
                        </div>
                    </div>
                    <div className={`${styles.HeaderItem3}`}>
                        <img src={gem} alt="" className={`${styles.Item}`} />
                        <div className={`${styles.ItemTitle}`}>
                            <h5 style={{ border: 'none' }}>Nguyễn Kim Luxury</h5>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header2