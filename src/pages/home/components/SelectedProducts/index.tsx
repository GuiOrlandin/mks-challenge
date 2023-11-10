import Image from "next/image";
import { Product } from "../..";
import {
  AddOrRemoveProductsButtonsContainer,
  AddProductButton,
  NumberOfProducts,
  PriceOfProduct,
  ProductContainer,
  ProductName,
  RemoveProductButton,
  SelectedProductsContainer,
} from "./styles";

interface Props {
  product: Product;
}

export default function SelectedProducts({ product }: Props) {
  return (
    <SelectedProductsContainer>
      <ProductContainer>
        <Image
          width={46}
          height={57}
          src={product.photo}
          alt="image of product"
        />
        <ProductName>{product.name}</ProductName>
      </ProductContainer>
      <div>
        <p>Qtd:</p>
        <AddOrRemoveProductsButtonsContainer>
          <RemoveProductButton>-</RemoveProductButton>
          <NumberOfProducts>1</NumberOfProducts>
          <AddProductButton>+</AddProductButton>
        </AddOrRemoveProductsButtonsContainer>
      </div>
      <PriceOfProduct>{`R$${product.price}`}</PriceOfProduct>
    </SelectedProductsContainer>
  );
}
