import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const PageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

const PageLayoutContainer = styled.div`
  width: '100%';
  height: '100%';
  display: 'flex';
  margin: '0 auto';
  padding: '0';
`;

export default PageLayout;
