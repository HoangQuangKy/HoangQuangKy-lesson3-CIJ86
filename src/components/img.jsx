import homepageImg from '/Homepage-Banner_694x376px_FA (6).jpg';
import imgHeader from '/imgHeader.jpg';
import imgHeader2 from '/imgHeader2.jpg';
import styles from './styles.module.css';
function ImgHeader() {
    return (
        <>
            <div className={`${styles.Header3}`}>
                <div className={`${styles.imgContainer}`}>
                    <img src={homepageImg} alt="" className={`${styles.imgItem}`} />
                </div>
                <div className={`${styles.bigImg}`}>
                    <img src={imgHeader} alt="" className={`${styles.smallImg}`} />
                    <img src={imgHeader2} alt="" className={`${styles.smallImg}`} />
                </div>
            </div>
        </>
    )
}
export default ImgHeader;