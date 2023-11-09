import Image from "next/image";

import shoppinBagIcon from "../../../../../public/shoppingBagIcon.svg";
import TESTSBG from "../../../../../public/imageProductTEST.svg";

import {
  BuyButton,
  CardContainer,
  CardDescription,
  CertificateContainer,
  ProductName,
  ProductNameAndPrice,
  ProductPrice,
} from "./styles";
import { Product } from "../..";

interface Props {
  product: Product;
}

export default function CardOfProduct({ product }: Props) {
  return (
    <CardContainer>
      <CardDescription>
        <Image
          src={product.photo}
          alt=""
          width={111}
          height={138}
          quality={100}
        />
        <ProductNameAndPrice>
          <ProductName>{product?.name}</ProductName>
          <ProductPrice>R${parseFloat(product.price)}</ProductPrice>
        </ProductNameAndPrice>
        <CertificateContainer>
          Redesigned from scratch and completely revised.
        </CertificateContainer>
      </CardDescription>

      <BuyButton>
        <Image src={shoppinBagIcon} alt="shopping bag icon" />
        <p>COMPRAR</p>
      </BuyButton>
    </CardContainer>
  );
}
