import styled from "styled-components";

export const SelectedProductsContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 1.1875rem 0.9375rem 1.1875rem 0.8rem;

  p {
    font-size: 0.3125rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
`;

export const ProductName = styled.div`
  margin: 0.6rem 1.2rem 0.1rem 1.3rem;
`;

export const AddOrRemoveProductsButtonsContainer = styled.div`
  display: flex;
  border: 0.3px solid #bfbfbf;
  border-radius: 8px;
  margin-top: 0.2rem;


`;
export const AddProductButton = styled.button`
  padding: 0 0.5rem 0 0.3875rem;
  border: none;
  background: none;
  font-size: 0.75rem;
`;

export const RemoveProductButton = styled.button`
  padding: 0 0.3875rem 0 0.5rem;
  font-size: 0.75rem;
  border: none;
  background: none;
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
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0.4rem 0.5rem 0 1.2rem;
`;
