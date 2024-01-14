import styled from '@emotion/styled';
import { theme } from 'constans/theme';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 335px;
  padding: 0 20px;
  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const StatisticsTitle = styled.h2`
  font-size: ${theme.font.gray};
  margin: 50px 0 30px;
`;