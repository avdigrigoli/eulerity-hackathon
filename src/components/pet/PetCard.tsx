import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelection } from "../../context/SelectionContext";
import type { Pet } from "../../types/pet";

const Card = styled.div`
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 13px;
  color: var(--muted);
`;

const DetailLink = styled(Link)`
  font-size: 12px;
  color: var(--primary);
`;

type Props = {
    pet: Pet;
};

export default function PetCard({ pet }: Props) {
    const { selectedIds, toggleSelection } = useSelection();

    const isSelected = selectedIds.includes(pet.id);

    return (
        <Card>
            <Image src={pet.url} alt={pet.title} />

            <Content>
                <TitleRow>
                    <Title>{pet.title}</Title>

                    <Checkbox
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelection(pet.id)}
                    />
                </TitleRow>

                <Description>{pet.description}</Description>

                <DetailLink to={`/pets/${pet.id}`}>
                    View Details →
                </DetailLink>
            </Content>
        </Card>
    );
}