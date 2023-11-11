import Image from "next/image";

import shoppinBagIcon from "../../../../../public/shoppingBagIcon.svg";

import {
  BuyButton,
  CardContainer,
  CertificateContainer,
  ProductDescription,
  ProductName,
  ProductNameAndPrice,
  ProductPrice,
} from "./styles";
import { Product } from "../../index1";
import { formatNumberWithSeparator } from "@/utils/numberFomater";

interface Props {
  product: Product;
  handleAddNewItem: (item: Product) => void;
}

export default function CardOfProduct({ product, handleAddNewItem }: Props) {
  return (
    <CardContainer>
      <ProductDescription>
        <Image
          src={product.photo}
          alt=""
          width={111}
          height={138}
          quality={100}
        />
        <ProductNameAndPrice>
          <ProductName>{product?.name}</ProductName>
          <ProductPrice>
            R${formatNumberWithSeparator(parseFloat(product.price))}
          </ProductPrice>
        </ProductNameAndPrice>
        <CertificateContainer>
          Redesigned from scratch and completely revised.
        </CertificateContainer>
      </ProductDescription>

      <BuyButton onClick={() => handleAddNewItem(product)}>
        <Image src={shoppinBagIcon} alt="shopping bag icon" />
        <p>COMPRAR</p>
      </BuyButton>
    </CardContainer>
  );
}
