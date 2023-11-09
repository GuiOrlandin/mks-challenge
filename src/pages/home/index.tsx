"use client";

import Image from "next/image";
import {
  CardsContainer,
  CompanyLogo,
  FooterContainer,
  HeaderContainer,
  NumberOfItemsInCart,
} from "./styles";

import cartIcon from "../../../public/cartIcon.svg";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import CardOfProduct from "./components/CardOfProduct";

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

  console.log();

  return (
    <main>
      <HeaderContainer>
        <CompanyLogo>
          <h1>MKS</h1>
          <span>Sitemas</span>
        </CompanyLogo>

        <button>
          <Image src={cartIcon} alt="cart Image" />
          <NumberOfItemsInCart>0</NumberOfItemsInCart>
        </button>
      </HeaderContainer>
      <CardsContainer>
        {listOfProducts?.map((product) => (
          <CardOfProduct key={product.id} product={product} />
        ))}
      </CardsContainer>

      <FooterContainer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </FooterContainer>
    </main>
  );
}
