import { Container } from 'components/layout/Layout.styled';
import { LayoutProps } from 'constants/types';
import { FC } from 'react';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Container>
  );
};
