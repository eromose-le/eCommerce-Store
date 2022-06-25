import { assets } from '../../assets/constants';
import { GetYposition } from '../../utils/reusable';
import { FooterStyle, ScrollButton } from './styles';

export const Footer = () => {
  const showScrollTopButton = () => (GetYposition() >= 200 ? true : false);

  const gotoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterStyle>
      <footer id="footer" className="footer">
        {/* top */}
        <div className="footer-top">
          <div className="container">
            {/* brand */}
            <div className="footer-brand">
              <a href="/" className="logo">
                <img src={assets.logo1} alt="BA logo" />
                <p className="h3">BA.</p>
              </a>
              <p className="footer-text">
                BA is a fashion theme for presents a complete wardrobe of
                uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &amp;
                Accessories inspired from the most contemporary
              </p>
              <ul className="social-list">
                <li>
                  <a href="/" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link">
                    <ion-icon name="logo-pinterest" />
                  </a>
                </li>
              </ul>
            </div>

            {/* links */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  About Company
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Payment Type
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Awards Winning
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  World Media Partner
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Become an Agent
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Refund Policy
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Category</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Handbags &amp; Wallets
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Women's Clothing
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Plus Sizes
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Complete Your Look
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Baby Corner
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Man &amp; Woman Shoe
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Help &amp; Support</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Dealers &amp; Agents
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  FAQ Information
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Shipping &amp; Delivery
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Order Tranking
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  List of Shops
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* copyright */}
            <p className="copyright">
              © 2022 <a href="/">BA. Consulting</a>. All Rights Reserved
            </p>

            {/* links */}
            <ul className="footer-bottom-list">
              <li>
                <a href="/" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="footer-bottom-link">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/" className="footer-bottom-link">
                  Sitemap
                </a>
              </li>
            </ul>

            {/* payment */}
            <div className="payment">
              <p className="payment-title">We Support</p>
              <img
                src={assets.payment_img}
                alt="Online payment logos"
                className="payment-img"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* scroll to top button */}
      {showScrollTopButton() && (
        <ScrollButton className="scroll-up" onClick={gotoTop}>
          <ion-icon name="arrow-up-outline" aria-hidden="true" />
        </ScrollButton>
      )}
    </FooterStyle>
  );
};
