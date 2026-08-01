import { styled } from "styled-components";

export const SFooterWrapper = styled.footer`
  background-image: linear-gradient(linen, salmon);
  padding: 20px 0;
  margin-top: 2rem;
  color: indianred;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 16px;
`;

export const SFooterLinks = styled.a`
  &:hover {
    opacity: 0.5;
  }

  && i {
    font-size: 16px;
  }
`;
