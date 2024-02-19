import './promo.css'
import promoImg from './../../img/images/header-img.jpg'

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">
              <span class='highlight'>
                <span>LET'S</span></span>
              EXPLORE
              <span class='highlight highlight--yellow'>
                <span>UNIQUE</span></span>
              CLOTHES.
              <div className="promo_desc">
                Live for Influential Innovative fashion!
              </div>
            </div>
            <div className="promo_btn_wrapper">
              <a href="#!" className="promo_btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo_img">
            <img src={promoImg} alt='Promo' />
          </div>
        </div>
      </div>
    </section>
  );

}
export default Promo;