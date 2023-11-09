import styled from "styled-components";

export const CardContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 0.5625rem;
`;

export const CardDescription = styled.div`
  display: flex;
  padding: 1.125rem 0.875rem 0.875rem 0.875rem;
  flex-direction: column;
  width: 13.597rem;
  box-shadow: 0 0 10px rgba(55, 55, 55, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    display: flex;
    margin-bottom: 0.875rem;
    margin: 0 2.4375rem 0.875rem 2.4375rem;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  gap: 0.875rem;
  width: 13.597rem;
  background: #0f52ba;
  border: none;
  box-shadow: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.4375rem 3.625rem 0.59375rem 3.625rem;

  p {
    color: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
  }
`;

export const ProductName = styled.p`
  display: flex;
  width: 7.75rem;
  flex-direction: column;
  color: #2c2c2c;
`;

export const ProductPrice = styled.p`
  display: flex;
  color: #fff;
  border-radius: 8px;
  background: #373737;
  font-size: 0.9375rem;
  font-weight: 700;
  padding: 0.25rem 0.375rem;
`;

export const ProductNameAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CertificateContainer = styled.p`
  color: #2c2c2c;
  font-size: 0.625rem;
  font-weight: 300;
  margin-top: 0.5rem;
`;
