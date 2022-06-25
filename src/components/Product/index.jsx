import { assets } from '../../assets/constants';
import { Filter } from './components/Filter';
import { ProductStyle } from './styles';
import { RippleButton } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const Product = () => {
  const navigate = useNavigate();

  return (
    <ProductStyle>
      <section className="section product">
        <div className="container">
          {/* title */}
          <h2 className="h2 section-title">Products of the week</h2>

          {/* filter */}
          <Filter />

          {/* products */}
          <ul className="product-list">
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product01}
                      alt="Varsi Leather Bag"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-badge red"> -25%</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Varsi Leather Bag</a>
                  </h3>
                  <div className="card-price">
                    <data value="48.75">£48.75</data>
                    <data value={65.0}>£65.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product02}
                      alt="Fit Twill Shirt for Woman"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-badge green"> New</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Fit Twill Shirt for Woman</a>
                  </h3>
                  <div className="card-price">
                    <data value={62.0}>£62.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product03}
                      alt="Grand Atlantic Chukka Boots"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Grand Atlantic Chukka Boots</a>
                  </h3>
                  <div className="card-price">
                    <data value={32.0}>£32.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product04}
                      alt="Women's Faux-Trim Shirt"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Women's Faux-Trim Shirt</a>
                  </h3>
                  <div className="card-price">
                    <data value={84.0}>£84.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product05}
                      alt="Soft Touch Interlock Polo"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Soft Touch Interlock Polo</a>
                  </h3>
                  <div className="card-price">
                    <data value={45.0}>£45.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product06}
                      alt="Casmart Smart Watch"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Casmart Smart Watch</a>
                  </h3>
                  <div className="card-price">
                    <data value={30.0}>£30.00</data>
                    <data value={38.0}>£38.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product07}
                      alt="Casmart Smart Glass"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Casmart Smart Glass</a>
                  </h3>
                  <div className="card-price">
                    <data value={25.0}>£25.00</data>
                    <data value={39.0}>£39.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product08}
                      alt="Cotton Shirt for Men"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Cotton Shirt for Men</a>
                  </h3>
                  <div className="card-price">
                    <data value={85.0}>£85.00</data>
                    <data value={99.0}>£99.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product09}
                      alt="Double-breasted Blazer"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Double-breasted Blazer</a>
                  </h3>
                  <div className="card-price">
                    <data value={32.0}>£32.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.product010}
                      alt="Ribbed Cotton Bodysuits"
                      loading="lazy"
                      width={800}
                      height={1034}
                      className="w-100"
                    />
                  </a>
                  <div className="card-badge green">New</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button
                      className="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="/">Ribbed Cotton Bodysuits</a>
                  </h3>
                  <div className="card-price">
                    <data value={71.0}>£71.00</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <RippleButton
            color="var(--ocean-green)"
            className="btn btn-outline ripple-button"
          >
            <div
              onClick={() => navigate('/products')}
              className="clickable"
            ></div>
            View All Products
          </RippleButton>
        </div>
      </section>
    </ProductStyle>
  );
};
