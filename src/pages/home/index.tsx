"use client";

import Image from "next/image";
import {
  AmountAndPrice,
  CardsContainer,
  Close,
  CompanyLogo,
  Content,
  FinalizePurchase,
  FooterContainer,
  HeaderContainer,
  NumberOfItemsInCart,
  Portal,
  SelectedProductsContainer,
  Title,
  Trigger,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import cartIcon from "../../../public/cartIcon.svg";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import CardOfProduct from "./components/CardOfProduct";
import SelectedProducts from "./components/SelectedProducts";

export interface Product {
  id: number;
  price: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  created_at: string;
  updated_at: string;
}

interface ProductsResponse {
  products: Product[];
}

export default function Home() {
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);
  const [cartItems, SetCartItems] = useState<Product[]>([]);

  function handleAddNewItem(item: Product) {
    SetCartItems((state) => [...state, item]);
    console.log(cartItems);
  }

  async function getProducts() {
    try {
      const response = await axios.get<ProductsResponse>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      setListOfProducts(response.data.products);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.status);
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Dialog.Root>
      <HeaderContainer>
        <CompanyLogo>
          <h1>MKS</h1>
          <span>Sitemas</span>
        </CompanyLogo>
        <Trigger asChild>
          <button>
            <Image src={cartIcon} alt="cart Image" />
            <NumberOfItemsInCart>{cartItems.length}</NumberOfItemsInCart>
          </button>
        </Trigger>
        <Portal>
          <Content>
            <Close>x</Close>
            <Title>Carrinho de compras</Title>
            <SelectedProductsContainer>
              {cartItems.map((items) => (
                <SelectedProducts product={items} />
              ))}
            </SelectedProductsContainer>
            <AmountAndPrice>
              <p>Total:</p>
              <span>R$798</span>
            </AmountAndPrice>
            <FinalizePurchase>
              <p>Finalizar Compra</p>
            </FinalizePurchase>
          </Content>
        </Portal>
      </HeaderContainer>
      <CardsContainer>
        {listOfProducts?.map((product) => (
          <CardOfProduct
            key={product.id}
            product={product}
            handleAddNewItem={() => handleAddNewItem(product)}
          />
        ))}
      </CardsContainer>

      <FooterContainer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </FooterContainer>
    </Dialog.Root>
  );
}
