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
  SkeletonDescriptionProduct,
  SkeletonImageProduct,
  SkeletonNameProduct,
  SkeletonsContainer,
  SkeletonsPriceAndNameProduct,
  Title,
  Trigger,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import cartIcon from "../../../public/cartIcon.svg";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import CardOfProduct from "./components/CardOfProduct";
import SelectedProducts from "./components/SelectedProducts";
import { formatNumberWithSeparator } from "@/utils/numberFomater";
import { Skeleton } from "@mui/material";

export interface Product {
  id: number;
  price: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  created_at: string;
  updated_at: string;
  quantity?: number;
}

interface ProductsResponse {
  products: Product[];
}

export default function Home() {
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  function handleAddNewItem(item: Product) {
    const productAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (productAlreadyInCart > -1) {
      const updatedCartItems = cartItems.map((cartItem, index) => {
        if (index === productAlreadyInCart) {
          return {
            ...cartItem,
            quantity: cartItem.quantity! + 1,
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      const newProductInCart: Product = {
        ...item,
        quantity: 1,
      };
      setCartItems([...cartItems, newProductInCart]);
    }
  }

  function handleRemoveItem(item: Product) {
    const productFinded = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (productFinded > -1 && item.quantity! > 1) {
      const removeCartItems = cartItems.map((cartItem, index) => {
        if (index === productFinded) {
          return {
            ...cartItem,
            quantity: cartItem.quantity! - 1,
          };
        }
        return cartItem;
      });
      setCartItems(removeCartItems);
    }
  }

  function getTotalPrice() {
    let totalPriceOfProducts = 0;
    cartItems.forEach((element) => {
      totalPriceOfProducts += parseFloat(element.price) * element.quantity!;
    });
    return totalPriceOfProducts;
  }

  function HandleRemoveSelectedProductTheCart(item: Product) {
    const cartItemsWithoutProductRemoved = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setCartItems(cartItemsWithoutProductRemoved);
  }

  const totalPrice = getTotalPrice();

  useEffect(() => {
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
            <div>
              <Close>x</Close>
              <Title>Carrinho de compras</Title>
            </div>
            <SelectedProductsContainer>
              {cartItems.map((items) => (
                <SelectedProducts
                  product={items}
                  key={items.id}
                  handleAddNewItem={() => handleAddNewItem(items)}
                  handleRemoveItem={() => handleRemoveItem(items)}
                  HandleRemoveSelectedProductTheCart={() =>
                    HandleRemoveSelectedProductTheCart(items)
                  }
                />
              ))}
            </SelectedProductsContainer>
            <FinalizePurchase>
              <AmountAndPrice>
                <p>Total:</p>
                <span>R${formatNumberWithSeparator(totalPrice)}</span>
              </AmountAndPrice>
              <button>Finalizar Compra</button>
            </FinalizePurchase>
          </Content>
        </Portal>
      </HeaderContainer>
      <CardsContainer>
        {isLoading
          ? listOfProducts?.map((product) => (
              <SkeletonsContainer>
                <SkeletonImageProduct>
                  <Skeleton variant="rectangular" width={120} height={120} />
                </SkeletonImageProduct>

                <SkeletonsPriceAndNameProduct>
                  <SkeletonNameProduct>
                    <Skeleton variant="text" width={120} height={22} />
                    <Skeleton variant="text" width={70} height={22} />
                  </SkeletonNameProduct>
                  <Skeleton variant="text" width={70} height={62} />
                </SkeletonsPriceAndNameProduct>
                <SkeletonDescriptionProduct>
                  <Skeleton variant="text" width={120} height={22} />
                  <Skeleton variant="text" width={70} height={22} />
                </SkeletonDescriptionProduct>
                <Skeleton variant="rectangular" width={230} height={72} />
              </SkeletonsContainer>
            ))
          : listOfProducts?.map((product) => (
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
