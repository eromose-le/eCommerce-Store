import { assets } from '../../assets/constants';
import { RippleButton } from '../Button/Button';
import { BannerStyle } from './styles';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
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
            <RippleButton
              color="var(--ocean-green)"
              className="btn btn-primary ripple-button"
            >
              <div
                onClick={() => navigate('/products')}
                className="clickable"
              ></div>
              Shop Now
            </RippleButton>
          </div>
        </div>
      </section>
    </BannerStyle>
  );
};
