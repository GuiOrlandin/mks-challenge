import styled from "styled-components";
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: #0f52ba;
  justify-content: space-between;
  padding: 1.75rem 5.5rem 1.75rem 4.06rem;

  button {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 1.68rem 0.75rem 0.9375rem;
    border-radius: 8px;
    border: none;
  }

  @media (max-width: 375px) {
    width: 23.4375rem;
    position: fixed;
    z-index: 2;

    padding: 0.125rem 1.25rem;

    button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.335rem 0.875rem 0.335rem 0.541875rem;
      border-radius: 8px;
      border: none;

      img {
        width: 0.68625rem;
        height: 0.65rem;
      }
    }
  }
`;

export const CompanyLogo = styled.div`
  display: flex;

  span {
    color: #fff;
    margin-top: 1.05rem;
    margin-left: 0.3rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (max-width: 375px) {
    display: flex;

    span {
      color: #fff;
      margin-top: 1.05rem;
      margin-left: 0.3rem;
      font-size: 1rem;
      font-weight: 300;
    }
    h1 {
      color: #fff;
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  p {
    color: #000;
    font-size: 0.75rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 375px) {
    position: relative;
    top: 170.5rem;
  }
`;

export const CardsContainer = styled.header`
  display: flex;
  top: 2rem;
  gap: 22px;
  flex-wrap: wrap;
  padding: 7.25rem 14.06rem 10.75rem 15.43rem;

  @media (max-width: 375px) {
    position: absolute;
    padding: 1.125rem 3.875rem 2.36625rem 3.875rem;
  }
`;

export const NumberOfItemsInCart = styled.p`
  display: flex;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

export const Trigger = styled(DialogTrigger)`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
  }
`;

export const Portal = styled(DialogPortal)`
  height: 100vh;
`;

export const Close = styled(DialogClose)`
  width: 2.375rem;
  height: 2.375rem;
  background: #000000;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  border-radius: 999px;
  border: none;
  padding-bottom: 0.2rem;
  margin: 9% 90% 0% 88%;

  @media (max-width: 375px) {
    margin: 9% 90% 0% 84%;
  }
`;

export const AmountAndPrice = styled.div`
  display: flex;
  position: absolute;
  gap: 12.75rem;

  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  top: 80%;
  left: 10%;

  @media (max-width: 375px) {
    gap: 4.56rem;
    top: 84%;
    left: 10%;
  }
`;

export const Title = styled(DialogTitle)`
  height: 3.5rem;
  width: 11.25rem;
  position: relative;

  font-size: 1.6875rem;
  font-weight: 700;
  color: #ffffff;
  margin: -11% 90% 0% 10%;

  @media (max-width: 375px) {
  }
`;

export const Content = styled(DialogContent)`
  width: 30.375rem;
  height: 100vh;

  background: #0f52ba;
  overflow: visible;
  z-index: 3;

  position: fixed;
  top: 0%;
  right: 0%;

  box-shadow: 4px 0 10px rgba(0, 0, 0, 1);

  @media (max-width: 375px) {
    width: 20.625rem;
    height: 50.75rem;
  }
`;

export const FinalizePurchase = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: 30.375rem;
  height: 6.0625rem;
  background-color: #000000;
  top: 88.9%;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.75rem;
  justify-content: center;

  @media (max-width: 375px) {
    width: 20.625rem;
    height: 4.117875rem;
    margin: 199.6% 0% 40% 0%;

    font-size: 1.25rem;
  }
`;

export const SelectedProductsContainer = styled.div`
  display: flex;
  overflow: visible;

  flex-direction: column;
  padding: 2.69rem 3.75rem 0 2.93rem;
  gap: 1.375rem;
`;
