import styled from "styled-components";
import PetCardSkeleton from "../pet/PetCardSkeleton";

const Grid = styled.section`
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

export default function PetGridSkeleton() {
    return (
        <Grid>
            {Array.from({ length: 8 }).map((_, i) => (
                <PetCardSkeleton key={i} />
            ))}
        </Grid>
    );
}