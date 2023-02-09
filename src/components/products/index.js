import { PRODUCTS } from "constants/info";
import { Products, ProductItem } from "components/products/Products.styled";

const ProductsComponent = () => (
  <Products>
    {PRODUCTS.map(({ link, icon, name }) => (
      <ProductItem>
        <a href={link} className="invisibleLink">
          {name}
        </a>
        <i className={`icon-${icon}`} />
        <p>{name}</p>
      </ProductItem>
    ))}
  </Products>
);

export default ProductsComponent;
