import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: #0f52ba;
  justify-content: space-between;
  height: 6.31rem;
  padding: 1.75rem 5.5rem 1.75rem 4.06rem;

  button {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 1.68rem 0.75rem 0.9375rem;
    border-radius: 8px;
    border: none;
  }
`;

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 11.25rem;
    color: #000;
    font-size: 0.75rem;
  }
`;

export const CardsContainer = styled.header`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  padding: 7.25rem 14.06rem 10.75rem 15.43rem;
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
`;

export const NumberOfItemsInCart = styled.p`
  display: flex;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;
`;
