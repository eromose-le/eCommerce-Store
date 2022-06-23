import { assets } from '../../assets/constants';
import { BannerStyle } from './styles';

export const Banner = () => {
  return (
    <BannerStyle>
      <section
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${assets.hero_banner})` }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Fashion Everyday</p>
            <h2 className="h1 hero-title">Unrivalled Fashion House</h2>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </section>
    </BannerStyle>
  );
};
