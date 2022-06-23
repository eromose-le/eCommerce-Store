import { assets } from '../../assets/constants';
import { ServiceStyle } from './styles';

export const Service = () => {
  return (
    <ServiceStyle>
      <section className="service">
        <div className="container">
          <ul className="service-list">
            <li className="service-item">
              <div className="service-item-icon">
                <img src={assets.service_icon_1} alt="Service icon" />
              </div>
              <div className="service-content">
                <p className="service-item-title">Free Shipping</p>
                <p className="service-item-text">On All Order Over $599</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <img src={assets.service_icon_2} alt="Service icon" />
              </div>
              <div className="service-content">
                <p className="service-item-title">Easy Returns</p>
                <p className="service-item-text">30 Day Returns Policy</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <img src={assets.service_icon_3} alt="Service icon" />
              </div>
              <div className="service-content">
                <p className="service-item-title">Secure Payment</p>
                <p className="service-item-text">100% Secure Gaurantee</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <img src={assets.service_icon_4} alt="Service icon" />
              </div>
              <div className="service-content">
                <p className="service-item-title">Special Support</p>
                <p className="service-item-text">24/7 Dedicated Support</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </ServiceStyle>
  );
};
