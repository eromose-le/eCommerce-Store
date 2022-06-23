import { assets } from '../../assets/constants';
import { CategoryStyle } from './styles';

export const Category = () => {
  return (
    <CategoryStyle>
      <section className="section category">
        <div className="container">
          <ul className="category-list">
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category01}
                  alt="Sunglass & eye"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Sunglass &amp; Eye
              </a>
            </li>
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category02}
                  alt="Active & outdoor"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Active &amp; Outdoor
              </a>
            </li>
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category03}
                  alt="Winter wear"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Winter Wear
              </a>
            </li>
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category04}
                  alt="Exclusive footwear"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Exclusive Footwear
              </a>
            </li>
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category05}
                  alt="Jewelry"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Jewelry
              </a>
            </li>
            <li className="category-item">
              <figure className="category-banner">
                <img
                  src={assets.category06}
                  alt="Sports cap"
                  loading="lazy"
                  width={510}
                  height={600}
                  className="w-100"
                />
              </figure>
              <a href="/" className="btn btn-secondary">
                Sports Cap
              </a>
            </li>
          </ul>
        </div>
      </section>
    </CategoryStyle>
  );
};
