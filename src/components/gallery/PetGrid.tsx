import styled from "styled-components";

const PetGrid = styled.section`
  display: grid;
  gap: 20px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default PetGrid;