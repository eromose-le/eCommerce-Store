import { assets } from '../../assets/constants';
import { BlogStyle } from './styles';

export const Blog = () => {
  return (
    <BlogStyle>
      <section className="section blog">
        <div className="container">
          <h2 className="h2 section-title">Latest fashion news</h2>
          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.blog01}
                      alt="Worthy Cyber Monday Fashion From Casmart"
                      loading="lazy"
                      width={1020}
                      height={700}
                      className="w-100"
                    />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="/" className="card-meta-link">
                        Fashion
                      </a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="/" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="/">Worthy Cyber Monday Fashion From Casmart</a>
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.blog02}
                      alt="Holiday Home Decoration I’ve Recently Ordered"
                      loading="lazy"
                      width={1020}
                      height={700}
                      className="w-100"
                    />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="/" className="card-meta-link">
                        Fashion
                      </a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="/" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="/">
                      Holiday Home Decoration I’ve Recently Ordered
                    </a>
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={assets.blog03}
                      alt="Unique Ideas for Fashion You Haven’t heard yet"
                      loading="lazy"
                      width={1020}
                      height={700}
                      className="w-100"
                    />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="/" className="card-meta-link">
                        Fashion
                      </a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="/" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="/">
                      Unique Ideas for Fashion You Haven’t heard yet
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </BlogStyle>
  );
};
