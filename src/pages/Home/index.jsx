import { Banner } from '../../components/Banner';
import { Service } from '../../components/Service';
import { Category } from '../../components/Category';
import { Product } from '../../components/Product';
import { Blog } from '../../components/Blog';
import { Newsletter } from '../../components/Newsletter';

export const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Category />
      <Product />
      <Blog />
      <Newsletter />
    </>
  );
};
