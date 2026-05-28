import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelection } from "../../context/SelectionContext";
import type { Pet } from "../../types/pet";

const Card = styled.div`
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 18px;

    box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);

    overflow: hidden;
    position: relative;

    transition: transform 220ms ease, box-shadow 220ms ease;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.15),
                rgba(255, 255, 255, 0.02)
        );
        pointer-events: none;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow:
                0 12px 40px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
    object-position: center;
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
    position: absolute;
    top: 12px;
    right: 12px;

    width: 18px;
    height: 18px;
    cursor: pointer;

    accent-color: var(--primary);

    transform: scale(1.05);
    transition: transform 150ms ease, opacity 150ms ease;

    &:hover {
        transform: scale(1.15);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Description = styled.p`
  font-size: 13px;
  color: var(--muted);
`;

const DetailLink = styled(Link)`
    font-size: 12px;
    font-weight: 500;
    color: #fff;

    display: inline-flex;
    align-items: center;

    padding: 6px 10px;
    border-radius: 8px;

    background: var(--primary);
    text-decoration: none;

    cursor: pointer;

    width: fit-content;

    transition: transform 200ms cubic-bezier(0.4, 0, 1, 1);

    &:hover {
        background: var(--primary-hover);
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.94);
        transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
    }
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
            <Checkbox
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleSelection(pet.id)}
            />

            <Content>
                <TitleRow>
                    <Title>{pet.title}</Title>
                    <DetailLink to={`/pets/${pet.id}`}>
                        View Details
                    </DetailLink>
                </TitleRow>

                <Description>{pet.description}</Description>


            </Content>
        </Card>
    );
}