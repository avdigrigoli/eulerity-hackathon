import styled from "styled-components";

const PageContainer = styled.main`
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 0 32px 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export default PageContainer;