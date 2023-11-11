import Image from "next/image";
import { Product } from "../..";
import {
  AddOrRemoveProductsButtonsContainer,
  AddProductButton,
  ButtonsAndPriceContainer,
  NumberOfProducts,
  PriceOfProduct,
  ProductContainer,
  ProductName,
  RemoveProductButton,
  RemoveSelectedProductForCart,
  SelectedProductsContainer,
} from "./styles";

interface Props {
  product: Product;
  handleAddNewItem: (item: Product) => void;
  handleRemoveItem: (item: Product) => void;
  HandleRemoveSelectedProductTheCart: (item: Product) => void;
}

export default function SelectedProducts({
  product,
  handleAddNewItem,
  handleRemoveItem,
  HandleRemoveSelectedProductTheCart,
}: Props) {
  return (
    <>
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
        <ButtonsAndPriceContainer>
          <p>Qtd:</p>
          <AddOrRemoveProductsButtonsContainer>
            <RemoveProductButton onClick={() => handleRemoveItem(product)}>
              -
            </RemoveProductButton>
            <NumberOfProducts>{product.quantity}</NumberOfProducts>
            <AddProductButton onClick={() => handleAddNewItem(product)}>
              +
            </AddProductButton>
          </AddOrRemoveProductsButtonsContainer>
          <PriceOfProduct>{`R$${product.price}`}</PriceOfProduct>
        </ButtonsAndPriceContainer>
        <RemoveSelectedProductForCart
          onClick={() => HandleRemoveSelectedProductTheCart(product)}
        >
          X
        </RemoveSelectedProductForCart>
      </SelectedProductsContainer>
    </>
  );
}
