import styled from "styled-components";

export const SelectedProductsContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 0.9fr 60px 90px;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 1.1875rem 0.9375rem 1.1875rem 0.8rem;

  p {
    font-size: 0.3125rem;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 1.43rem 1.43rem 1.43rem 1rem;
    width: 15.625;

    img {
      width: 5rem;
      height: 5.944rem;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ProductName = styled.div`
  margin: 0 0.8rem;

  @media (max-width: 375px) {
    text-align: center;
    margin: 0.6875rem 0;
  }
`;

export const AddOrRemoveProductsButtonsContainer = styled.div`
  display: flex;
  border: 0.3px solid #bfbfbf;
  border-radius: 8px;
  margin-top: 0.2rem;

  @media (max-width: 375px) {
    margin-top: 0;

    width: 5.0855rem;
    height: 2.125rem;
    align-items: center;
    justify-content: space-around;
  }
`;
export const AddProductButton = styled.button`
  padding: 0 0.5rem 0 0.3875rem;
  border: none;
  background: none;
  font-size: 0.75rem;

  &:hover {
    cursor: pointer;
  }
`;

export const RemoveProductButton = styled.button`
  padding: 0 0.3875rem 0 0.5rem;
  font-size: 0.75rem;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const NumberOfProducts = styled.span`
  padding: 0.3125rem 0.4375rem;
  position: relative;
  font-size: 0.75rem;
  color: #000000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 11.5px;
    background-color: #bfbfbf;
    transform: translateY(-50%);
  }

  &::before {
    left: -0.5px;
  }

  &::after {
    right: -0.5px;
  }
`;

export const PriceOfProduct = styled.span`
  display: flex;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0.4rem 0.5rem 0 1.2rem;

  @media (max-width: 375px) {
    margin: 0.4rem 0 0.5rem 0.3rem;
    padding: 0.5rem;
    color: #ffff;
    border-radius: 8px;

    background: #373737;

    p {
      display: none;
    }
  }
`;

export const ButtonsAndPriceContainer = styled.span`
  display: flex;

  p {
    margin: -0.3rem -0.8rem 0.3rem 0;
  }

  @media (max-width: 375px) {
    display: flex;
    gap: 0.9rem;
    align-items: center;

    p {
      display: none;
    }
  }
`;

export const RemoveSelectedProductForCart = styled.span`
  display: flex;
  position: absolute;
  left: 96%;
  top: -6%;
  padding: 0.05rem 0.3rem;
  border-radius: 999px;
  background: #000000;
  font-size: 0.875rem;
  color: #ffff;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    background: none;
    color: #000000;
    font-size: 2.625rem;
    left: 80%;
    top: 1%;
  }
`;
