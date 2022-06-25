import { assets } from '../../assets/constants';
import { NewsletterStyle } from './styles';
import { RippleButton } from '../Button/Button';

export const Newsletter = () => {
  const rippleBtnFunctions = () => {
    // console.log('passed Func!!');
  };
  return (
    <NewsletterStyle>
      <section className="section newsletter">
        <div className="container">
          <div
            className="newsletter-card"
            style={{
              backgroundImage: `url(${assets.newsletter_bg})`
            }}
          >
            <h2 className="card-title">Subscribe Newsletter</h2>
            <p className="card-text">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <form className="card-form">
              <div className="input-wrapper">
                <ion-icon name="mail-outline" />
                <input
                  type="email"
                  name="emal"
                  placeholder="Enter your email"
                  required
                  className="input-field"
                />
              </div>
              <RippleButton
                color="var(--ocean-green)"
                className="btn btn-primary w-100 ripple-button"
                // height={'200px'}
              >
                <div onClick={rippleBtnFunctions} className="clickable"></div>
                <span>Subscribe</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
              </RippleButton>
              {/* <button
                onClick={addRipple}
                className="btn btn-primary w-100 ripple-button"
              >
                <span>Subscribe</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
                {ripples}
              </button> */}
            </form>
          </div>
        </div>
      </section>
    </NewsletterStyle>
  );
};
