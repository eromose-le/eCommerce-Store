import { useState } from 'react';
import { assets } from '../../assets/constants';
import { HeaderStyle } from './styles';
import { GetYposition } from '../../utils/reusable';

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const showHeader = () => (GetYposition() >= 200 ? 'header active' : 'header');

  return (
    <HeaderStyle>
      <header className={showHeader()}>
        <div className="container">
          {/* overlay bg */}
          <div
            className={`${toggle ? 'overlay active' : 'overlay'}`}
            onClick={onToggle}
          />

          {/* search */}
          <div className="header-search">
            <input
              type="search"
              name="search"
              placeholder="Search Product..."
              className="input-field"
            />
            <button className="search-btn" aria-label="Search">
              <ion-icon name="search-outline" />
            </button>
          </div>

          {/* logo */}
          <a href="/" className="logo">
            <img src={assets.logo1} alt="BA logo" width={130} height={31} />
            <p className="h3">BA.</p>
          </a>

          {/* actions (bottom nav) */}
          <div className="header-actions">
            <button className="header-action-btn">
              <ion-icon name="person-outline" aria-hidden="true" />
              <p className="header-action-label">Sign in</p>
            </button>
            <button className="header-action-btn">
              <ion-icon name="search-outline" aria-hidden="true" />
              <p className="header-action-label">Search</p>
            </button>
            <button className="header-action-btn">
              <ion-icon name="cart-outline" aria-hidden="true" />
              <p className="header-action-label">Cart</p>
              <div className="btn-badge green" aria-hidden="true">
                3
              </div>
            </button>
            <button className="header-action-btn">
              <ion-icon name="heart-outline" aria-hidden="true" />
              <p className="header-action-label">Wishlisht</p>
              <div className="btn-badge" aria-hidden="true">
                2
              </div>
            </button>
          </div>

          {/* open toggle btn */}
          <button className="nav-open-btn" onClick={onToggle}>
            <span />
            <span />
            <span />
          </button>

          {/* actions (side nav) */}
          <nav className={`${toggle ? 'navbar active' : 'navbar'}`}>
            <div className="navbar-top">
              <a href="/" className="logo">
                <img src={assets.logo1} alt="BA logo" width={130} height={31} />
                <p className="h3">BA.</p>
              </a>
              <button className="nav-close-btn" onClick={onToggle}>
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <a href="/" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="navbar-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="navbar-link">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="navbar-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="navbar-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </HeaderStyle>
  );
};
